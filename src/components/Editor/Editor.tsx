import { useState, useEffect, ForwardedRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  quillRef: ForwardedRef<any>;
  content: string;
}

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
    // handlers: {
    //   image: handleImageUpload,
    // },
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "youtube",
  "vimeo",
];

const Editor: React.FC<Props> = (props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(props.content);
  }, [props.content]);

  return (
    <div>
      <ReactQuill
        ref={props.quillRef}
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
