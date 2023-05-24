import React from "react";
import Select, { SingleValue, ActionMeta } from "react-select";
import { Options } from "../../interface";

interface Props {
  handleChange: (selectedOptions: Options) => void;
  options: Options[];
}

const SelectDropdown: React.FC<Props> = (props) => {
  const { handleChange, options } = props;

  const onChange = (
    selectedOptions: SingleValue<Options>,
    actionMeta: ActionMeta<Options>
  ) => {
    console.log(actionMeta);
    const value = selectedOptions?.value as string;
    const label = selectedOptions?.label as string;

    handleChange({ label, value });
  };

  return <Select options={options} onChange={onChange} />;
};

export default SelectDropdown;
