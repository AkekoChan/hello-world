"use client";
import { useMetadataContext } from "@/app/context/metadata/metadataContext";
import { ChangeEvent, useEffect, useState } from "react";
import { LuDownload } from "react-icons/lu";
import { toast } from "react-toastify";
import { IMetadata } from "./CopyPasteInput";

const MetadataForm = () => {
  const { metadata, handleAddMetadata } = useMetadataContext();
  const [previewImage, setPreviewImage] = useState<string>();
  const [imageToDisplay, setImageToDisplay] = useState<string | undefined>(
    previewImage ? previewImage : metadata?.image
  );

  const fileTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml"];

  const validateFileType = (file: File) => {
    for (let i = 0; i < fileTypes.length; i++) {
      if (file.type === fileTypes[i]) {
        return true;
      }
    }
    toast.error("Your image is in the wrong format.");
    return false;
  };

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const isValidFormat = validateFileType(file);

      if (!isValidFormat) {
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        handleAddMetadata({
          ...(metadata as IMetadata),
          image: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
    handleAddMetadata({
      ...(metadata as IMetadata),
      title: event.target.value,
    });
  };

  const handleChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    handleAddMetadata({
      ...(metadata as IMetadata),
      description: event.target.value,
    });
  };

  const handleOpenModal = () => {
    let dialog: any = document?.getElementById("my_modal_2");
    dialog.showModal();
  };

  useEffect(() => {
    setImageToDisplay(previewImage ? previewImage : metadata?.image);
  }, [previewImage, metadata]);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="label pt-0">
          <span className="label-text">Image of your site</span>
          <span className="label-text-alt">
            Recommend size <strong>1200×630</strong>
          </span>
        </div>
        <label
          className="flex items-center justify-center relative h-48 w-full bg-cover bg-no-repeat bg-center rounded-xl border-waikawa-gray-800 border-1 hover:outline hover:outline-offset-2 hover:outline-2 focus-within:outline focus-within:outline-offset-2 focus-within:outline-2 before:content-[''] before:block before:bg-waikawa-gray-50/90 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:rounded-xl shadow-lg"
          htmlFor="file-input"
          style={
            imageToDisplay
              ? {
                  backgroundImage: `url('${imageToDisplay}')`,
                }
              : { backgroundImage: `none` }
          }
        >
          <span className="relative text-2xl font-bold text-center p-2">
            Click or Drag image here
          </span>
          <input
            className="opacity-0 absolute top-0 left-0 right-0 bottom-0 w-full cursor-pointer outline-waikawa-gray-800"
            type="file"
            name="image"
            accept="image/png, image/jpeg, image/webp, image/svg+xml"
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
          className="textarea textarea-primary w-full resize-none shadow-lg"
          onChange={handleChangeTitle}
          value={metadata?.title}
        ></textarea>
      </label>
      <label htmlFor="description-area" className="form-control">
        <div className="label pt-0">
          <span className="label-text">Description of your site</span>
        </div>
        <textarea
          name="description"
          id="description-area"
          className="textarea textarea-primary w-full resize-none min-h-32 shadow-lg"
          value={metadata?.description}
          onChange={handleChangeDescription}
        ></textarea>
      </label>
      <button
        className="btn btn-primary w-full shadow-lg"
        type="submit"
        onClick={handleOpenModal}
      >
        <LuDownload size={"1.5rem"} /> Get your metadatas
      </button>
    </div>
  );
};

export default MetadataForm;
