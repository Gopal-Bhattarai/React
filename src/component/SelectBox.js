import React from "react";
import Select from "react-select"
import AsyncSelect from "react-select/async";

const SelectBox = () => {
  const options = [
    { value: "jack", label: "Jack", color: "#FF8B00" },
    { value: "john", label: "John", color: "#36b37e" },
    { value: "mike", label: "Mike", color: "#0052CC" },
  ];

  const handleChange = (selectedOption) => {
    console.log(selectedOption);
  };

  const loadOptions = (searchValue, callback) => {
    setTimeout(() => {
      const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      );
      callback(filteredOptions);
    }, 1000);
  };

  const colorStyles = {
    control: (styles) => ({...styles, backgroundColor: "smokewhite"}),
    option: (styles, { data }) => {
      return {...styles, color: data.color}
    }
  }


  return (
    <div>
      <AsyncSelect
        loadOptions={loadOptions}
        defaultOptions
        isMulti
        onChange={handleChange}
      />

      <Select options={options} styles={colorStyles} />
    </div>
  );
};

export default SelectBox;
