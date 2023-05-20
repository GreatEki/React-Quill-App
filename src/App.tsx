import { Editor, Dropdown, Modal, FileInput, VideoForm } from "src/components";
import { useState, useRef } from "react";
import { Options } from "src/interface";

import "./App.css";

const options: Options[] = [
  { value: "youtube", label: "Youtube" },
  { value: "vimeo", label: "Vimeo" },
];

export default function App() {
  const [modals, setModals] = useState({
    pictureModal: false,
    videoModal: false,
  });

  const [links, setLinks] = useState({
    type: "",
    imageUrl: "",
    videoUrl: "",
  });

  const [content, setContent] = useState("");

  const quillRef = useRef<any>(null);

  const toggleModal = (modalName: string) => {
    setModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  };

  const handleFileChange = (file: File) => {
    // const url = URL.createObjectURL(file);
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      setLinks((prev) => ({ ...prev, imageUrl: url }));
    };

    reader.readAsDataURL(file);
  };

  const handleEmbedImage = () => {
    const range = quillRef.current?.getEditor().getSelection(true);
    const index = range?.index + range.length;
    quillRef.current?.getEditor().insertEmbed(index, "image", links.imageUrl);
    toggleModal("pictureModal");
  };

  const handleSelectChange = (selectedOption: Options) => {
    setLinks((prev) => ({ ...prev, type: selectedOption.value }));
  };

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setLinks((prev) => ({ ...prev, videoUrl: evt.target.value }));
  };

  function extractVideoId(url) {
    // Regular expression pattern to extract video ID
    const pattern =
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/;

    // Extract video ID using the pattern
    const match = url.match(pattern);

    if (match && match[1]) {
      return match[1];
    }

    return null;
  }

  const handleEmbedVideo = () => {
    const videoId = extractVideoId(links.videoUrl);

    const videoEmbed = `<iframe src='https://www.youtube.com/embed/${videoId}' frameborder='0' allowfullscreen></iframe>`;

    setContent(videoEmbed);

    toggleModal("videoModal");
  };

  return (
    <>
      <div className="app-container">
        <div>
          <h1> This is the title </h1>

          <Editor quillRef={quillRef} content={content} />

          <div>
            <Dropdown toggleModal={toggleModal} />
          </div>
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
      <Modal
        visible={modals.videoModal}
        title="Embed"
        toggleModal={() => toggleModal("videoModal")}
        handleSubmit={handleEmbedVideo}
      >
        <VideoForm
          options={options}
          handleSelectChange={handleSelectChange}
          handleInputChange={handleInputChange}
        />
      </Modal>
    </>
  );
}
