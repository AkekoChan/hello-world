// "use client";

import { ChangeEvent } from "react";

interface IFormatsImage {
  no: string;
  yes: string;
}

const formatsImage: IFormatsImage = {
  no: "img/jpeg",
  yes: "img/png",
};

const OptionElements = () => {
  return Object.entries(formatsImage).map(([key, value], i) => {
    return (
      <option key={i} value={value}>
        {key}
      </option>
    );
  });
};

const SelectFormat = ({
  setOutputFormat,
}: {
  setOutputFormat: (format: string) => void;
}) => {
  const handleSelectFormat = (event: ChangeEvent<HTMLSelectElement>) => {
    setOutputFormat(event.target.value);
  };

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">
          Does your image have a transparent background
        </span>
      </div>
      <select
        className="select select-bordered select-primary"
        name="selectedFormat"
        defaultValue={"no"}
        onChange={handleSelectFormat}
      >
        <OptionElements />
      </select>
    </label>
  );
};

export default SelectFormat;
