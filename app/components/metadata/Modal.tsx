"use client";

import { useMetadataContext } from "@/app/context/metadata/metadataContext";
import { LuCopy } from "react-icons/lu";
import { toast } from "react-toastify";
import { stripHtml } from "string-strip-html";

const Modal = () => {
  const { metadata } = useMetadataContext();

  const someHtml = ` <pre>
  <pre>
    <code className="text-waikawa-gray-600">
      &lsaquo;!-- General Metadata --&rsaquo;
    </code>
  </pre>
  <pre>
    <code className="text-waikawa-gray-800">
      <span className="font-bold">&lsaquo;title&rsaquo;</span>${metadata?.title}<span className="font-bold">&lsaquo;/title&rsaquo;</span>
    </code>
  </pre>
  <pre>
    <code className="text-waikawa-gray-800">
      <span className="font-bold">&lsaquo;meta</span> <span className="font-bold">property</span>=&quot;description&quot; <span className="font-bold">content</span>=&quot;${metadata?.description}&quot; <span className="font-bold">/&rsaquo;</span>
    </code>
  </pre>
  <br />
  <pre>
    <code className="text-waikawa-gray-600">
      &lsaquo;!-- Metadata Opengraph for Twitter --&rsaquo;
    </code>
  </pre>
  <pre>
    <code className="text-waikawa-gray-800">
      <span className="font-bold">&lsaquo;meta</span> <span className="font-bold">property</span>=&quot;og:type&quot; <span className="font-bold">content</span>=&quot;website&quot; <span className="font-bold">/&rsaquo;</span>
    </code>
  </pre>
  <pre>
    <code className="text-waikawa-gray-800">
      <span className="font-bold">&lsaquo;meta</span> <span className="font-bold">property</span>=&quot;og:url&quot; <span className="font-bold">content</span>=&quot;${metadata?.url}&quot; <span className="font-bold">/&rsaquo;</span>
    </code>
  </pre>
  <pre>
    <code className="text-waikawa-gray-800">
      <span className="font-bold">&lsaquo;meta</span> <span className="font-bold">property</span>=&quot;og:title&quot; <span className="font-bold">content</span>=&quot;${metadata?.title}&quot; <span className="font-bold">/&rsaquo;</span>
    </code>
  </pre>
  <pre>
    <code className="text-waikawa-gray-800">
      <span className="font-bold">&lsaquo;meta</span> <span className="font-bold">property</span>=&quot;og:site_name&quot; <span className="font-bold">content</span>=&quot;${metadata?.title}&quot; <span className="font-bold">/&rsaquo;</span>
    </code>
  </pre>
  <pre>
    <code className="text-waikawa-gray-800">
      <span className="font-bold">&lsaquo;meta</span> <span className="font-bold">property</span>=&quot;og:description&quot; <span className="font-bold">content</span>=&quot;${metadata?.description}&quot; <span className="font-bold">/&rsaquo;</span>
    </code>
  </pre>
  <pre>
    <code className="text-waikawa-gray-800">
      <span className="font-bold">&lsaquo;meta</span> <span className="font-bold">property</span>=&quot;og:image&quot; <span className="font-bold">content</span>=&quot;your-link-image&quot; <span className="font-bold">/&rsaquo;</span>
    </code>
  </pre>
  <br />
  <pre>
    <code className="text-waikawa-gray-600">
      &lsaquo;!-- Metadata for Twitter --&rsaquo;
    </code>
  </pre>
  <pre>
    <code className="text-waikawa-gray-800">
      <span className="font-bold">&lsaquo;meta</span> <span className="font-bold">property</span>=&quot;twitter:card&quot; <span className="font-bold">content</span>=&quot;summary_large_image&quot; <span className="font-bold">/&rsaquo;</span>;
    </code>
  </pre>
  <pre>
    <code className="text-waikawa-gray-800">
      <span className="font-bold">&lsaquo;meta</span> <span className="font-bold">property</span>=&quot;twitter:url&quot; <span className="font-bold">content</span>=&quot;${metadata?.url}&quot; <span className="font-bold">/&rsaquo;</span>
    </code>
  </pre>
  <pre>
    <code className="text-waikawa-gray-800">
      <span className="font-bold">&lsaquo;meta</span> <span className="font-bold">property</span>=&quot;twitter:title&quot; <span className="font-bold">content</span>=&quot;${metadata?.title}&quot; <span className="font-bold">/&rsaquo;</span>
    </code>
  </pre>
  <pre>
    <code className="text-waikawa-gray-800">
      <span className="font-bold">&lsaquo;meta</span> <span className="font-bold">property</span>=&quot;twitter:description&quot; <span className="font-bold">content</span>=&quot;${metadata?.description}&quot; <span className="font-bold">/&rsaquo;</span>
    </code>
  </pre>
  <pre>
    <code className="text-waikawa-gray-800">
      <span className="font-bold">&lsaquo;meta</span> <span className="font-bold">property</span>=&quot;twitter:image&quot; <span className="font-bold">content</span>=&quot;your-link-image&quot; <span className="font-bold"> /&rsaquo;</span>
    </code>
  </pre>
</pre>`;

  const parsedHtml = stripHtml(someHtml).result;

  const handleCopy = () => {
    navigator.clipboard.writeText(parsedHtml);
    toast.info("Your Metadata have been copy in your clipboard.");
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box w-3/4 max-w-5xl flex flex-col">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg mb-4">Get your Metadata</h3>
        <div className="flex items-center gap-4 mb-4">
          <p className="flex items-center gap-2">
            Put this code in your
            <span className="font-bold">&lsaquo; head &rsaquo;</span>
          </p>
          <form method="dialog">
            <button className="btn btn-primary" onClick={handleCopy}>
              <LuCopy size={"1.5rem"} /> Copy the code
            </button>
          </form>
        </div>
        <div className="overflow-auto bg-waikawa-gray-100 p-2 rounded-xl">
          <pre>
            <pre>
              <code className="text-waikawa-gray-600">
                &lsaquo;!-- General Metadata --&rsaquo;
              </code>
            </pre>
            <pre>
              <code className="text-waikawa-gray-800">
                <span className="font-bold">&lsaquo;title&rsaquo;</span>
                {metadata?.title}
                <span className="font-bold">&lsaquo;/title&rsaquo;</span>
              </code>
            </pre>
            <pre>
              <code className="text-waikawa-gray-800">
                <span className="font-bold">&lsaquo;meta</span>{" "}
                <span className="font-bold">property</span>
                =&quot;description&quot;{" "}
                <span className="font-bold">content</span>=&quot;
                {metadata?.description}&quot;{" "}
                <span className="font-bold">/&rsaquo;</span>
              </code>
            </pre>
            <br />
            <pre>
              <code className="text-waikawa-gray-600">
                &lsaquo;!-- Metadata Opengraph for Twitter --&rsaquo;
              </code>
            </pre>
            <pre>
              <code className="text-waikawa-gray-800">
                <span className="font-bold">&lsaquo;meta</span>{" "}
                <span className="font-bold">property</span>=&quot;og:type&quot;{" "}
                <span className="font-bold">content</span>=&quot;website&quot;
                <span className="font-bold">/&rsaquo;</span>
              </code>
            </pre>
            <pre>
              <code className="text-waikawa-gray-800">
                <span className="font-bold">&lsaquo;meta</span>{" "}
                <span className="font-bold">property</span>=&quot;og:url&quot;{" "}
                <span className="font-bold">content</span>=&quot;
                {metadata?.url}
                &quot; <span className="font-bold">/&rsaquo;</span>
              </code>
            </pre>
            <pre>
              <code className="text-waikawa-gray-800">
                <span className="font-bold">&lsaquo;meta</span>{" "}
                <span className="font-bold">property</span>=&quot;og:title&quot;{" "}
                <span className="font-bold">content</span>=&quot;
                {metadata?.title}
                &quot; <span className="font-bold">/&rsaquo;</span>
              </code>
            </pre>
            <pre>
              <code className="text-waikawa-gray-800">
                <span className="font-bold">&lsaquo;meta</span>{" "}
                <span className="font-bold">property</span>
                =&quot;og:site_name&quot;{" "}
                <span className="font-bold">content</span>=&quot;
                {metadata?.title}
                &quot; <span className="font-bold">/&rsaquo;</span>
              </code>
            </pre>
            <pre>
              <code className="text-waikawa-gray-800">
                <span className="font-bold">&lsaquo;meta</span>{" "}
                <span className="font-bold">property</span>
                =&quot;og:description&quot;{" "}
                <span className="font-bold">content</span>=&quot;
                {metadata?.description}
                &quot; <span className="font-bold">/&rsaquo;</span>
              </code>
            </pre>
            <pre>
              <code className="text-waikawa-gray-800">
                <span className="font-bold">&lsaquo;meta</span>{" "}
                <span className="font-bold">property</span>=&quot;og:image&quot;{" "}
                <span className="font-bold">content</span>
                =&quot;your-link-image&quot;
                <span className="font-bold">/&rsaquo;</span>
              </code>
            </pre>
            <br />
            <pre>
              <code className="text-waikawa-gray-600">
                &lsaquo;!-- Metadata for Twitter --&rsaquo;
              </code>
            </pre>
            <pre>
              <code className="text-waikawa-gray-800">
                <span className="font-bold">&lsaquo;meta</span>{" "}
                <span className="font-bold">property</span>
                =&quot;twitter:card&quot;{" "}
                <span className="font-bold">content</span>
                =&quot;summary_large_image&quot;
                <span className="font-bold">/&rsaquo;</span>;
              </code>
            </pre>
            <pre>
              <code className="text-waikawa-gray-800">
                <span className="font-bold">&lsaquo;meta</span>{" "}
                <span className="font-bold">property</span>
                =&quot;twitter:url&quot;{" "}
                <span className="font-bold">content</span>=&quot;
                {metadata?.url}
                &quot; <span className="font-bold">/&rsaquo;</span>
              </code>
            </pre>
            <pre>
              <code className="text-waikawa-gray-800">
                <span className="font-bold">&lsaquo;meta</span>{" "}
                <span className="font-bold">property</span>
                =&quot;twitter:title&quot;{" "}
                <span className="font-bold">content</span>=&quot;
                {metadata?.title}
                &quot; <span className="font-bold">/&rsaquo;</span>
              </code>
            </pre>
            <pre>
              <code className="text-waikawa-gray-800">
                <span className="font-bold">&lsaquo;meta</span>{" "}
                <span className="font-bold">property</span>
                =&quot;twitter:description&quot;{" "}
                <span className="font-bold">content</span>=&quot;
                {metadata?.description}
                &quot; <span className="font-bold">/&rsaquo;</span>
              </code>
            </pre>
            <pre>
              <code className="text-waikawa-gray-800">
                <span className="font-bold">&lsaquo;meta</span>{" "}
                <span className="font-bold">property</span>
                =&quot;twitter:image&quot;{" "}
                <span className="font-bold">content</span>
                =&quot;your-link-image&quot;{" "}
                <span className="font-bold">/&rsaquo;</span>
              </code>
            </pre>
          </pre>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
