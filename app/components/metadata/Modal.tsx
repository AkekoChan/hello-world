"use client";

import { useMetadataContext } from "@/app/context/metadata/metadataContext";
import { LuCopy } from "react-icons/lu";
import { toast } from "react-toastify";

const Modal = () => {
  const { metadata } = useMetadataContext();

  const metadataTemplate = `
  <!-- General Metadata -->
  <title>${metadata?.title}</title>
  <meta property="description" content="${metadata?.description}" />

  <!-- Metadata Opengraph for Twitter -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${metadata?.url}" />
  <meta property="og:title" content="${metadata?.title}" />
  <meta property="og:site_name" content="${metadata?.title}" />
  <meta property="og:description" content="${metadata?.description}" />
  <meta property="og:image" content="your-link-image" />

  <!-- Metadata for Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="${metadata?.url}" />
  <meta property="twitter:title" content="${metadata?.title}" />
  <meta property="twitter:description" content="${metadata?.description}" />
  <meta property="twitter:image" content="your-link-image" />
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(metadataTemplate);
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
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
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
            <code className="text-waikawa-gray-600">
              &lt;!-- General Metadata --&gt;
            </code>
          </pre>
          <pre>
            <code className="text-waikawa-gray-800">
              <span className="font-bold">&lt;title&gt;</span>
              {metadata?.title}
              <span className="font-bold">&lt;/title&gt;</span>
            </code>
          </pre>
          <pre>
            <code className="text-waikawa-gray-800">
              <span className="font-bold">&lt;meta</span>{" "}
              <span className="font-bold">property</span>
              =&quot;description&quot;{" "}
              <span className="font-bold">content</span>=&quot;
              {metadata?.description}&quot;{" "}
              <span className="font-bold">/&gt;</span>
            </code>
          </pre>
          <br />
          <pre>
            <code className="text-waikawa-gray-600">
              &lt;!-- Metadata Opengraph for Twitter --&gt;
            </code>
          </pre>
          <pre>
            <code className="text-waikawa-gray-800">
              <span className="font-bold">&lt;meta</span>{" "}
              <span className="font-bold">property</span>=&quot;og:type&quot;{" "}
              <span className="font-bold">content</span>=&quot;website&quot;
              <span className="font-bold">/&gt;</span>
            </code>
          </pre>
          <pre>
            <code className="text-waikawa-gray-800">
              <span className="font-bold">&lt;meta</span>{" "}
              <span className="font-bold">property</span>=&quot;og:url&quot;{" "}
              <span className="font-bold">content</span>=&quot;{metadata?.url}
              &quot;
              <span className="font-bold">/&gt;</span>
            </code>
          </pre>
          <pre>
            <code className="text-waikawa-gray-800">
              <span className="font-bold">&lt;meta</span>{" "}
              <span className="font-bold">property</span>=&quot;og:title&quot;{" "}
              <span className="font-bold">content</span>=&quot;{metadata?.title}
              &quot;
              <span className="font-bold">/&gt;</span>
            </code>
          </pre>
          <pre>
            <code className="text-waikawa-gray-800">
              <span className="font-bold">&lt;meta</span>{" "}
              <span className="font-bold">property</span>
              =&quot;og:site_name&quot;{" "}
              <span className="font-bold">content</span>=&quot;{metadata?.title}
              &quot;
              <span className="font-bold">/&gt;</span>
            </code>
          </pre>
          <pre>
            <code className="text-waikawa-gray-800">
              <span className="font-bold">&lt;meta</span>{" "}
              <span className="font-bold">property</span>
              =&quot;og:description&quot;{" "}
              <span className="font-bold">content</span>=&quot;
              {metadata?.description}&quot;
              <span className="font-bold">/&gt;</span>
            </code>
          </pre>
          <pre>
            <code className="text-waikawa-gray-800">
              <span className="font-bold">&lt;meta</span>{" "}
              <span className="font-bold">property</span>=&quot;og:image&quot;{" "}
              <span className="font-bold">content</span>
              =&quot;your-link-image&quot;
              <span className="font-bold">/&gt;</span>
            </code>
          </pre>
          <br />
          <pre>
            <code className="text-waikawa-gray-600">
              &lt;!-- Metadata for Twitter --&gt;
            </code>
          </pre>
          <pre>
            <code className="text-waikawa-gray-800">
              <span className="font-bold">&lt;meta</span>{" "}
              <span className="font-bold">property</span>
              =&quot;twitter:card&quot;{" "}
              <span className="font-bold">content</span>
              =&quot;summary_large_image&quot;
              <span className="font-bold">/&gt;</span>;
            </code>
          </pre>
          <pre>
            <code className="text-waikawa-gray-800">
              <span className="font-bold">&lt;meta</span>{" "}
              <span className="font-bold">property</span>
              =&quot;twitter:url&quot;{" "}
              <span className="font-bold">content</span>=&quot;{metadata?.url}
              &quot;
              <span className="font-bold">/&gt;</span>
            </code>
          </pre>
          <pre>
            <code className="text-waikawa-gray-800">
              <span className="font-bold">&lt;meta</span>{" "}
              <span className="font-bold">property</span>
              =&quot;twitter:title&quot;{" "}
              <span className="font-bold">content</span>=&quot;{metadata?.title}
              &quot;
              <span className="font-bold">/&gt;</span>
            </code>
          </pre>
          <pre>
            <code className="text-waikawa-gray-800">
              <span className="font-bold">&lt;meta</span>{" "}
              <span className="font-bold">property</span>
              =&quot;twitter:description&quot;{" "}
              <span className="font-bold">content</span>=&quot;
              {metadata?.description}&quot;
              <span className="font-bold">/&gt;</span>
            </code>
          </pre>
          <pre>
            <code className="text-waikawa-gray-800">
              <span className="font-bold">&lt;meta</span>{" "}
              <span className="font-bold">property</span>
              =&quot;twitter:image&quot;{" "}
              <span className="font-bold">content</span>
              =&quot;your-link-image&quot;{" "}
              <span className="font-bold">/&gt;</span>
            </code>
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
