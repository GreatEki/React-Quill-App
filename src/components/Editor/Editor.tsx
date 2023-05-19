import { useState, ForwardedRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  quillRef: ForwardedRef<any>;
}

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
    // handlers: {
    //   image: handleImageUpload,
    // },
  },
};

const Editor: React.FC<Props> = (props) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <ReactQuill
        ref={props.quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </div>
  );
};

export default Editor;
