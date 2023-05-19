import React, { useState } from "react";

import { PhotoValidator } from "src/util/photo-validator";
import "./fileinput.css";

interface Props {
  handleChange: (file: File) => void;
}

const FileInput: React.FC<Props> = (props) => {
  const { handleChange } = props;

  const [fileName, setFileName] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrMsg("");
    const file = e.target.files && e.target.files[0];

    const err = PhotoValidator(file);

    if (err) {
      setErrMsg(err);
      return;
    }

    setFileName(file.name);

    handleChange(file);
  };
  return (
    <div>
      <label>
        <div className="fileinput-container">
          <h5> Upload Image *</h5>
          <br />
          <small> FILE UPLOAD </small>
          <div className="input-box">
            <p className="file-text">
              {" "}
              {fileName ? fileName : "Import image from device"}
            </p>
          </div>

          <input type="file" onChange={onChange} />

          <strong className="error-text">{errMsg}</strong>
        </div>
      </label>
    </div>
  );
};

export default FileInput;
