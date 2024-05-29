"use client";

import { useMetadataContext } from "@/app/context/metadata/metadataContext";
import { baseUrl } from "@/app/robots";
import { useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useEffect, useState } from "react";

export interface IMetadata {
  title: string;
  description: string;
  icon: string;
  image: string;
  site_name: string;
  url: string;
}

const CopyPasteInput = () => {
  const searchParams = useSearchParams();
  const { handleAddMetadata } = useMetadataContext();
  const [urlSite, setUrlSite] = useState(searchParams.get("url") || baseUrl);
  const useUrl = searchParams.get("url") || baseUrl;

  const getMetadata = async (url: string) => {
    const formData = new FormData();
    formData.append("url", url);
    const response = await fetch(`/api/generate-metadata`, {
      // next: { revalidate: 604800 },
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

    const url = new URL(baseUrl);
    url.searchParams.set("url", urlSite as string);
    history.pushState(null, "", url);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/generate-metadata", {
        method: "POST",
        body: formData,
      });

      const data: IMetadata = await response.json();
      handleAddMetadata(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getMetadata(useUrl);
  }, [useUrl]);

  return (
    <Suspense>
      <form className="flex items-end gap-4 flex-wrap" onSubmit={handleSubmit}>
        <label className="form-control" htmlFor="cp-input">
          <div className="label">
            <span className="label-text">Enter the URL site :</span>
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
        <button className="btn btn-primary shadow-lg">
          Let&apos;s Generate
        </button>
      </form>
    </Suspense>
  );
};

export default CopyPasteInput;
