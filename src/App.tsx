import { Editor, Dropdown, Modal, FileInput } from "src/components";
import { useState, useRef } from "react";

import "./App.css";

export default function App() {
  const [modals, setModals] = useState({
    pictureModal: false,
  });
  const [imageUrl, setImageUrl] = useState("");

  const quillRef = useRef<any>(null);

  const toggleModal = (modalName: string) => {
    setModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  };

  const handleFileChange = (file: File) => {
    // const url = URL.createObjectURL(file);
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      setImageUrl(url);
    };

    reader.readAsDataURL(file);
  };

  const handleEmbedImage = () => {
    const range = quillRef.current?.getEditor().getSelection(true);
    const index = range?.index + range.length;
    quillRef.current?.getEditor().insertEmbed(index, "image", imageUrl);
    toggleModal("pictureModal");
  };

  return (
    <>
      <div>
        <h1> This is the title </h1>

        <Editor quillRef={quillRef} />

        <div>
          <Dropdown toggleModal={() => toggleModal("pictureModal")} />
        </div>
      </div>

      <Modal
        visible={modals.pictureModal}
        title="Embed"
        toggleModal={() => toggleModal("pictureModal")}
        handleSubmit={handleEmbedImage}
      >
        <FileInput handleChange={handleFileChange} />
      </Modal>
    </>
  );
}
