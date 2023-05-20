import { Select, Input } from "src/components";
import { Options } from "src/interface";
import "./videoform.css";

interface Props {
  options: Options[];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (selectedOption: Options) => void;
}

const VideoForm: React.FC<Props> = (props) => {
  const { options, handleSelectChange, handleInputChange } = props;

  return (
    <form>
      <h5> Video Provider</h5>
      <br />

      <div className="form-item">
        <label className="label">Youtube</label>
        <Select options={options} handleChange={handleSelectChange} />
      </div>

      <div className="form-item">
        <label className="label">URL</label>
        <Input onChange={handleInputChange} />
      </div>
    </form>
  );
};

export default VideoForm;
