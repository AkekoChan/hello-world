import { Metadata } from "next";
import ManifestForm from "../components/manifest/ManifestForm";
import ManifestPreview from "../components/manifest/ManifestPreview";
import { ManifestContextProvider } from "../context/manifest/manifestContext";

export const metadata: Metadata = {
  title: "Hello World - Manifest Generator",
};

const ManifestPage = () => {
  return (
    <>
      <ManifestContextProvider>
        <section className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">Manifest Generator</h1>
          <p>Generate your own manifest with icons for your PWA </p>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Metadata</h2>
            <ManifestForm />
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-4 sticky top-[1rem]">
              <h2 className="text-2xl font-bold">Preview</h2>
              <ManifestPreview />
            </div>
          </div>
        </section>
      </ManifestContextProvider>
    </>
  );
};

export default ManifestPage;
