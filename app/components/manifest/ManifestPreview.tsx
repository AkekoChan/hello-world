"use client";

import { useManifestContext } from "@/app/context/manifest/manifestContext";

const ManifestPreview = () => {
  const { data } = useManifestContext();

  return (
    <div className="overflow-auto bg-waikawa-gray-100 p-2 rounded-xl">
      <pre>
        <pre>
          <code className="text-waikawa-gray-800">&#123;</code>
        </pre>
        <pre className="ps-4">
          <code className="text-waikawa-gray-800">
            <span className="font-bold">&quot;theme_color&quot;</span>: &quot;
            {data?.themeColor || "#49588a"}&quot;,
          </code>
        </pre>
        <pre className="ps-4">
          <code className="text-waikawa-gray-800">
            <span className="font-bold">&quot;background_color&quot;</span>:
            &quot; {data?.bgColor || "#49588a"}&quot;,
          </code>
        </pre>
        <pre className="ps-4">
          <code className="text-waikawa-gray-800">
            <span className="font-bold">&quot;display&quot;</span>: &quot;
            {data?.display}&quot;,
          </code>
        </pre>
        <pre className="ps-4">
          <code className="text-waikawa-gray-800">
            <span className="font-bold">&quot;scope&quot;</span>: &quot;
            {data?.scope || "/"}&quot;,
          </code>
        </pre>
        <pre className="ps-4">
          <code className="text-waikawa-gray-800">
            <span className="font-bold">&quot;start_url&quot;</span>: &quot;
            {data?.startURL || "/"}&quot;,
          </code>
        </pre>
        <pre className="ps-4">
          <code className="text-waikawa-gray-800">
            <span className="font-bold">&quot;short_name&quot;</span>: &quot;
            {data?.shortName}&quot;,
          </code>
        </pre>
        <pre className="ps-4">
          <code className="text-waikawa-gray-800">
            <span className="font-bold">&quot;name&quot;</span>: &quot;
            {data?.name}&quot;,
          </code>
        </pre>
        <pre className="ps-4">
          <code className="text-waikawa-gray-800">
            <span className="font-bold">&quot;description&quot;</span>: &quot;
            {data?.description}&quot;
          </code>
        </pre>
        <pre>
          <code className="text-waikawa-gray-800">&#125;</code>
        </pre>
      </pre>
    </div>
  );
};

export default ManifestPreview;
