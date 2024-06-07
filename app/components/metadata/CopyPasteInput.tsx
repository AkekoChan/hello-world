"use client";

import { useMetadataContext } from "@/app/context/metadata/metadataContext";
import { baseUrl } from "@/app/robots";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface IMetadata {
  title: string;
  description: string;
  icon: string;
  image: string;
  site_name: string;
  url: string;
}

const protocol = /^(https?:\/\/)/;

const CopyPasteInput = () => {
  const searchParams = useSearchParams();
  const { handleAddMetadata } = useMetadataContext();
  const [urlSite, setUrlSite] = useState(searchParams.get("url") || baseUrl);
  const useUrl = searchParams.get("url") || baseUrl;

  const getMetadata = async (url: string) => {
    const formData = new FormData();
    formData.append("url", url);
    const response = await fetch(`/api/generate-metadata`, {
      method: "POST",
      body: formData,
    });

    const data: IMetadata = await response.json();
    handleAddMetadata(data);
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setUrlSite(event.currentTarget.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (!urlSite) {
        toast.error("Please, enter an URL !");
        return;
      }

      if (!urlSite.match(/^(https?:\/\/)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/)?$/)) {
        toast.error("Please, enter a valid URL !");
        return;
      }

      if (!urlSite.match(protocol)) {
        const parsedUrl = `https://${urlSite}`;
        setUrlSite(parsedUrl);
      }

      const url = new URL(baseUrl);
      url.searchParams.set("url", urlSite as string);
      history.pushState(null, "", url);

      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/generate-metadata", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        url.searchParams.delete("url");
        history.pushState(null, "", url);
        setUrlSite(baseUrl);
        throw new Error("Please, enter a valid URL.");
      }

      const data: IMetadata = await response.json();
      handleAddMetadata(data);
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getMetadata(useUrl);
  }, [useUrl]);

  return (
    <form className="flex items-end gap-4 flex-wrap" onSubmit={handleSubmit}>
      <label className="form-control" htmlFor="cp-input">
        <div className="label">
          <span className="label-text">Enter the URL site</span>
        </div>
        <input
          className="input input-bordered input-primary shadow-lg"
          onChange={handleChange}
          type="text"
          name="url"
          id="cp-input"
          value={urlSite as string}
        />
      </label>
      <button className="btn btn-primary shadow-lg">Let&apos;s Generate</button>
    </form>
  );
};

export default CopyPasteInput;
