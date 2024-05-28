import CopyPasteInput from "./components/metadata/CopyPasteInput";
import MetadataForm from "./components/metadata/MetadataForm";
import PreviewFacebook from "./components/metadata/PreviewFacebook";
import PreviewGoogle from "./components/metadata/PreviewGoogle";
import PreviewTwitter from "./components/metadata/PreviewTwitter";
import { MetadataContextProvider } from "./context/metadata/metadataContext";

const HomePage = () => {
  return (
    <>
      <MetadataContextProvider>
        <section className="flex flex-col gap-4">
          <h1 className="text-5xl grid-rows-2 font-bold">Hello World !</h1>
          <p>
            Hello World is a site that gathers a set of tools to make developers
            tasks easier!
          </p>
          <CopyPasteInput />
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4 min-w-96">
            <h2 className="text-2xl font-bold">Metadata</h2>
            <MetadataForm />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Preview</h2>
            <PreviewGoogle />
            <PreviewFacebook />
            <PreviewTwitter />
          </div>
        </section>
      </MetadataContextProvider>
    </>
  );
};

export default HomePage;
