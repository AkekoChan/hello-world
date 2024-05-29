import { Suspense } from "react";
import CopyPasteInput from "./components/metadata/CopyPasteInput";
import MetadataForm from "./components/metadata/MetadataForm";
import Modal from "./components/metadata/Modal";
import PreviewFacebook from "./components/metadata/PreviewFacebook";
import PreviewGoogle from "./components/metadata/PreviewGoogle";
import PreviewTwitter from "./components/metadata/PreviewTwitter";
import { MetadataContextProvider } from "./context/metadata/metadataContext";

const HomePage = async () => {
  return (
    <>
      <MetadataContextProvider>
        <section className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">Hello World !</h1>
          <p>
            Hello World is a site that gathers a set of tools to make developers
            tasks easier!
          </p>
          <Suspense>
            <CopyPasteInput />
          </Suspense>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="w-full">
            <div className="flex flex-col gap-4 sticky top-[1rem]">
              <h2 className="text-2xl font-bold">Metadata</h2>
              <MetadataForm />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Preview</h2>
            <PreviewGoogle />
            <PreviewFacebook />
            <PreviewTwitter />
          </div>
        </section>
        <Modal />
      </MetadataContextProvider>
    </>
  );
};

export default HomePage;
