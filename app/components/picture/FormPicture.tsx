"use client";

import { ChangeEvent, useState } from "react";

const FormPicture = () => {
  const [previewImage, setPreviewImage] = useState<string>("/placeholder.jpg");
  const [file, setFile] = useState<File | null>(null);

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGeneratePicture = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file as Blob);

      const res = await fetch("/api/generate-picture", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
          <span className="label-text px-1 pb-2 flex">Your image</span>
          <label
            className="flex items-center justify-center relative h-48 w-full bg-cover bg-no-repeat bg-center rounded-xl border-waikawa-gray-800 border-1 hover:outline hover:outline-offset-2 hover:outline-2 focus-within:outline focus-within:outline-offset-2 focus-within:outline-2 before:content-[''] before:block before:bg-waikawa-gray-50/50 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-xl shadow-lg"
            htmlFor="file-input"
            style={{
              backgroundImage: `url('${previewImage}')`,
            }}
          >
            <span className="relative text-2xl font-bold text-center p-2">
              Click or Drag image here
            </span>
            <input
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 w-full cursor-pointer outline-waikawa-gray-800"
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChangeImage}
              id="file-input"
            />
          </label>
        </div>
        <button
          className="btn btn-primary w-full"
          onClick={handleGeneratePicture}
        >
          Generate your picture
        </button>
      </div>
    </>
  );
};

export default FormPicture;
