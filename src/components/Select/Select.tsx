import React from "react";
import Select from "react-select";
import { Options } from "../../interface";

interface Props {
  handleChange: (selectedOptions: Options) => void;
  options: Options[];
}

const SelectDropdown: React.FC<Props> = (props) => {
  const { handleChange, options } = props;

  const onChange = (selectedOptions: Options) => {
    handleChange(selectedOptions);
  };

  return <Select options={options} onChange={onChange} />;
};

export default SelectDropdown;
