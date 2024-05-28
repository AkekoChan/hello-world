"use client";
import { ChangeEvent, useState } from "react";
import { LuDownload } from "react-icons/lu";

const MetadataForm = () => {
  const [previewImage, setPreviewImage] = useState<string>();

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <span className="label-text px-1 pb-2 flex">Image of your site</span>
        <label
          className="flex items-center justify-center relative h-48 w-full bg-cover bg-no-repeat bg-center rounded-xl border-waikawa-gray-800 border-1 hover:outline hover:outline-offset-2 hover:outline-2 focus-within:outline focus-within:outline-offset-2 focus-within:outline-2 before:content-[''] before:block before:bg-waikawa-gray-50/50 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-xl"
          htmlFor="file-input"
          style={{
            backgroundImage: `url('${previewImage}')`,
          }}
        >
          <span className="relative text-2xl font-bold text-center p-2">
            Click or Drag image here
          </span>
          <input
            className="opacity-0 absolute top-0 left-0 right-0 bottom-0 w-full cursor-pointer outline-waikawa-gray-800 "
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChangeImage}
            id="file-input"
          />
        </label>
      </div>
      <label htmlFor="title-area" className="form-control">
        <div className="label pt-0">
          <span className="label-text">Title of your site</span>
        </div>
        <textarea
          name="title"
          id="title-area"
          className="textarea textarea-primary w-full resize-none"
        ></textarea>
      </label>
      <label htmlFor="description-area" className="form-control">
        <div className="label pt-0">
          <span className="label-text">Description of your site</span>
        </div>
        <textarea
          name="description"
          id="description-area"
          className="textarea textarea-primary w-full resize-none min-h-32"
        ></textarea>
      </label>
      <button className="btn btn-primary w-full" type="submit">
        <LuDownload size={"1.5rem"} /> Get your metadatas
      </button>
    </div>
  );
};

export default MetadataForm;
