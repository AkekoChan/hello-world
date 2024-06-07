"use client";

import { ChangeEvent, useState } from "react";

const InputColor = ({ label }: { label: string }) => {
  const [color, setColor] = useState("#49588a");
  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <label>
      <div className="label pt-0">
        <span className="label-text">{label} of your app</span>
      </div>
      <div className="flex gap-2">
        <div
          className="h-12 w-12 rounded-full"
          style={{
            backgroundColor: `${color}`,
          }}
        >
          <input
            type="color"
            onChange={handleChangeColor}
            value={color}
            className="opacity-0 h-full w-full cursor-pointer"
          />
        </div>
        <input
          type="text"
          onChange={handleChangeColor}
          value={color}
          className="input input-primary w-[calc(100%-3rem)] shadow-lg"
        />
      </div>
    </label>
  );
};

export default InputColor;
