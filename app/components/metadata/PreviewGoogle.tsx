"use client";

import { useMetadataContext } from "@/app/context/metadata/metadataContext";

const PreviewGoogle = () => {
  const { metadata } = useMetadataContext();
  return (
    <div className="flex flex-col gap-4">
      <span className="label-text pb-0 text-waikawa-gray-800">Google</span>
      <div>
        <div className="cursor-pointer group">
          <div className="flex items-center gap-3">
            <span
              className="block bg-[#f1f3f4] border-[#dadce0] border-1 w-6 h-6 rounded-full bg-center bg-cover"
              style={
                metadata
                  ? {
                      backgroundImage: `url('${metadata.icon}')`,
                    }
                  : {
                      backgroundImage: `none`,
                    }
              }
            ></span>
            <div>
              <p className="text-[#202124] font-arial text-sm">
                {metadata?.site_name ? metadata.site_name : metadata?.title}
              </p>
              <p className="text-[#202124] font-arial text-xs">
                {metadata?.url}
              </p>
            </div>
          </div>
          <p className="text-[#1a0dab] font-arial text-xl lg:text-2xl group-hover:underline py-1 text-ellipsis">
            {metadata?.title}
          </p>
        </div>
        <p className="text-[#4d5156] text-sm">{metadata?.description}</p>
      </div>
    </div>
  );
};

export default PreviewGoogle;
