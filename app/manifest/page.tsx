import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World - Manifest Generator",
};

const ManifestPage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-waikawa-gray-950">Manifest</h1>
    </>
  );
};

export default ManifestPage;
