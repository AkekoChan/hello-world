"use client";

import { useManifestContext } from "@/app/context/manifest/manifestContext";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { LuDownload } from "react-icons/lu";
import { toast } from "react-toastify";
import InputColor from "./InputColor";

export interface IManifest {
  themeColor: string;
  bgColor: string;
  display: string;
  scope: string;
  startURL: string;
  shortName: string;
  name: string;
  description: string;
}

const ManifestForm = () => {
  const { data, handleAddData } = useManifestContext();
  const [themeColor, setThemeColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const fileTypes = [
    "image/jpeg",
    "image/png",
    "image/avif",
    "image/svg+xml",
    "image/webp",
  ];

  const validateFileType = (file: File) => {
    for (let i = 0; i < fileTypes.length; i++) {
      if (file.type === fileTypes[i]) {
        return true;
      }
    }

    toast.error("Your image is in the wrong format.");
    return false;
  };

  const display = {
    Browser: "browser",
    Standalone: "standalone",
    "Minimal-ui": "minimal",
    Fullscreen: "fullscreen",
  };

  const OptionElements = () => {
    return Object.entries(display).map(([key, value], i) => {
      return (
        <option key={i} value={value}>
          {key}
        </option>
      );
    });
  };

  const handleChangeIcon = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const isValidFormat = validateFileType(file);
      if (!isValidFormat) {
        return;
      }

      setFile(file);
    }
  };

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const newData = {
      ...(data as IManifest),
      name: event.target.value,
    };
    handleAddData(newData);
  };

  const handleChangeShortName = (event: ChangeEvent<HTMLInputElement>) => {
    const newData = {
      ...(data as IManifest),
      shortName: event.target.value,
    };
    handleAddData(newData);
  };

  const handleChangeScope = (event: ChangeEvent<HTMLInputElement>) => {
    const newData = {
      ...(data as IManifest),
      scope: event.target.value,
    };
    handleAddData(newData);
  };

  const handleChangeStartURL = (event: ChangeEvent<HTMLInputElement>) => {
    const newData = {
      ...(data as IManifest),
      startURL: event.target.value,
    };
    handleAddData(newData);
  };

  const handleChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newData = {
      ...(data as IManifest),
      description: event.target.value,
    };
    handleAddData(newData);
  };

  const handleChangeDisplay = (event: ChangeEvent<HTMLSelectElement>) => {
    const newData = {
      ...(data as IManifest),
      display: event.target.value,
    };
    handleAddData(newData);
  };

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const shortName = formData.get("short-name");
    const description = formData.get("description");
    const display = formData.get("display");
    const scope = formData.get("scope");
    const startURL = formData.get("start-url");

    if (
      !name ||
      !shortName ||
      !description ||
      !display ||
      !scope ||
      !startURL
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    formData.append("themeColor", themeColor);
    formData.append("bgColor", bgColor);

    if (!file) {
      toast.error("Please choose a favicon.");
      return;
    }

    formData.append("file", file as Blob);

    const response = await fetch("/api/generate-manifest", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to generate manifest folder.");
    }

    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "manifest.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.info("Your manifest was created.");
  };

  useEffect(() => {
    if (themeColor) {
      const newData = {
        ...(data as IManifest),
        themeColor: themeColor,
      };
      handleAddData(newData);
      console.log(data);
    }

    if (bgColor) {
      const newData = {
        ...(data as IManifest),
        bgColor: bgColor,
      };
      handleAddData(newData);
      console.log(data);
    }
  }, [themeColor, bgColor]);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
      <label htmlFor="manifest-name" className="form-control">
        <div className="label pt-0">
          <span className="label-text">Name of your app</span>
        </div>
        <input
          name="name"
          id="manifest-name"
          className="input input-primary w-full shadow-lg"
          onChange={handleChangeName}
          value={data?.name}
        />
      </label>
      <label htmlFor="manifest-short-name" className="form-control">
        <div className="label pt-0">
          <span className="label-text">Short Name of your app</span>
        </div>
        <input
          name="short-name"
          id="manifest-short-name"
          className="input input-primary w-full shadow-lg"
          onChange={handleChangeShortName}
          value={data?.shortName}
        />
      </label>
      <label htmlFor="manifest-display">
        <div className="label pt-0">
          <span className="label-text">Display of your app</span>
        </div>
        <select
          id="manifest-display"
          className="select select-bordered select-primary w-full"
          name="display"
          defaultValue={"Browser"}
          value={data?.display}
          onChange={handleChangeDisplay}
        >
          <OptionElements />
        </select>
      </label>
      <label htmlFor="manifest-description" className="form-control">
        <div className="label pt-0">
          <span className="label-text">Description of your app</span>
        </div>
        <textarea
          name="description"
          id="manifest-description"
          className="textarea textarea-primary w-full resize-none shadow-lg"
          onChange={handleChangeDescription}
          value={data?.description}
        ></textarea>
      </label>
      <label htmlFor="manifest-scope" className="form-control">
        <div className="label pt-0">
          <span className="label-text">Scope of your app</span>
        </div>
        <input
          name="scope"
          id="manifest-scope"
          className="input input-primary w-full shadow-lg"
          onChange={handleChangeScope}
          value={data?.scope || "/"}
        />
      </label>
      <label htmlFor="manifest-start-url" className="form-control">
        <div className="label pt-0">
          <span className="label-text">Start URL of your app</span>
        </div>
        <input
          name="start-url"
          id="manifest-start-url"
          className="input input-primary w-full shadow-lg"
          onChange={handleChangeStartURL}
          value={data?.startURL || "/"}
        />
      </label>
      <InputColor label={"Theme Color"} setInputColor={setThemeColor} />

      <InputColor label={"Background Color"} setInputColor={setBgColor} />
      <label className="form-control w-full">
        <div className="label pt-0">
          <span className="label-text">Icon of your app</span>
        </div>
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full"
          onChange={handleChangeIcon}
        />
      </label>
      <button type="submit" className="btn btn-primary">
        <LuDownload size={"1.5rem"} />
        Get your manifest
      </button>
    </form>
  );
};

export default ManifestForm;
