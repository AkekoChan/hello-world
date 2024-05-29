"use client";

import { useMetadataContext } from "@/app/context/metadata/metadataContext";

const PreviewFacebook = () => {
  const { metadata } = useMetadataContext();
  return (
    <div className="flex flex-col gap-4 cursor-pointer">
      <span className="label-text pb-0 text-waikawa-gray-800">Facebook</span>
      <div className="shadow-lg">
        <div
          className="flex h-64 bg-cover bg-center"
          style={{
            backgroundImage: `url('${metadata?.image}')`,
          }}
        ></div>
        <div className="flex flex-col gap-1.25 bg-[#F0F2F5] text-[#1d2129] border-x-[#dadde1] border-b-[#dadde1]  border-t-0 border-1 py-3 px-4 font-arial">
          <span className="text-[#65676B] text-xs">
            {metadata?.url.split("/")[2]}
          </span>
          <p className="font-bold">{metadata?.title}</p>
          <p className="text-[##606770] text-sm text-ellipsis">
            {metadata?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewFacebook;
