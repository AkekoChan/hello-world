"use client";

import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import SelectFormat from "./SelectFormat";

const FormPicture = () => {
  const [previewImage, setPreviewImage] = useState<string>("/placeholder.jpg");
  const [file, setFile] = useState<File | null>(null);
  const [outputFormat, setOutputFormat] = useState<string>("default");

  const fileTypes = ["image/jpeg", "image/png"];

  const validateFileType = (file: File) => {
    for (let i = 0; i < fileTypes.length; i++) {
      if (file.type === fileTypes[i]) {
        return true;
      }
    }

    toast.error("Your image is in the wrong format.");
    return false;
  };

  const limitFileSize = (size: number) => {
    if (size < 1048576) {
      return true;
    }

    toast.error("Your image must not exceed 1Mo.");
    return false;
  };

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const isValidFormat = validateFileType(file);
      const isValidSize = limitFileSize(file.size);

      if (!isValidFormat) {
        return;
      }

      if (!isValidSize) {
        return;
      }

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
      if (!file) {
        toast.error("Please, choose an image.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file as Blob);
      formData.append("format", outputFormat);

      const response = await fetch("/api/generate-picture", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to generate picture.");
      }

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "picture.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.info("Your picture was created.");
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const handleOutputFormat = (format: string) => {
    setOutputFormat(format);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <SelectFormat setOutputFormat={handleOutputFormat} />
        <div>
          <span className="label-text px-1 pb-2 flex">Your image</span>
          <label
            className="flex items-center justify-center relative h-48 w-full bg-cover bg-no-repeat bg-center rounded-xl border-waikawa-gray-800 border-1 hover:outline hover:outline-offset-2 hover:outline-2 focus-within:outline focus-within:outline-offset-2 focus-within:outline-2 before:content-[''] before:block before:bg-waikawa-gray-50/90 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-xl shadow-lg"
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
              accept="image/png, image/jpeg"
              onChange={handleChangeImage}
              id="file-input"
            />
          </label>
        </div>
        <button
          className="btn btn-primary shadow-lg w-full"
          onClick={handleGeneratePicture}
        >
          Generate your picture
        </button>
      </div>
    </>
  );
};

export default FormPicture;
