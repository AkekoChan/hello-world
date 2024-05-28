"use client";

import { useMetadataContext } from "@/app/context/metadata/metadataContext";
import { baseUrl } from "@/app/robots";
import { FormEvent, useState } from "react";

export interface IMetadata {
  title: string;
  description: string;
  icon: string;
  image: string;
  site_name: string;
  url: string;
}

const CopyPasteInput = () => {
  const { setMetadata } = useMetadataContext();
  const [urlSite, setUrlSite] = useState(baseUrl);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setUrlSite(event.currentTarget.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/metadata", {
        method: "POST",
        body: formData,
      });

      const data: IMetadata = await response.json();

      setMetadata(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <form className="flex items-end gap-4 flex-wrap" onSubmit={handleSubmit}>
      <label className="form-control" htmlFor="cp-input">
        <div className="label">
          <span className="label-text">Enter the URL site :</span>
        </div>
        <input
          className="input input-bordered input-primary"
          onChange={handleChange}
          type="text"
          name="url"
          id="cp-input"
          value={urlSite}
        />
      </label>
      <button className="btn btn-primary">Let&apos;s Generate</button>
    </form>
  );
};

export default CopyPasteInput;
