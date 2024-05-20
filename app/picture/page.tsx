import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World - Picture Generator",
};

const PicturePage = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-waikawa-gray-950">Picture</h1>
    </>
  );
};

export default PicturePage;
