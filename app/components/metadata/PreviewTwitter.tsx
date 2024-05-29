"use client";

import { useMetadataContext } from "@/app/context/metadata/metadataContext";
import { roboto } from "@/app/utils/fonts/fonts";

const PreviewTwitter = () => {
  const { metadata } = useMetadataContext();
  return (
    <div className="flex flex-col gap-4 cursor-pointer">
      <span className="label-text pb-0 text-waikawa-gray-800">Facebook</span>
      <div className="rounded-xl border-[#dadde1] border-1 shadow-lg">
        <div
          className="flex h-64 bg-cover bg-center rounded-t-xl"
          style={{
            backgroundImage: `url('${metadata?.image}')`,
          }}
        ></div>
        <div
          className={`flex flex-col gap-1.5 bg-[#ffffff] text-[#000000] py-3 px-4  ${roboto.className} rounded-b-xl`}
        >
          <p className="font-bold">{metadata?.title}</p>
          <p className="text-[##606770] text-sm text-ellipsis">
            {metadata?.description}
          </p>
          <span className="text-[#8B99A5] text-xs font-bold">
            {metadata?.url.split("/")[2]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PreviewTwitter;
