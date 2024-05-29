import { Metadata } from "next";
import FormPicture from "./../components/picture/FormPicture";

export const metadata: Metadata = {
  title: "Hello World - Picture Generator",
};

const PicturePage = () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Picture Generator</h1>
        <p>
          Generate your images efficiently with this tool that creates a picture
          tag and the associated images.
        </p>
      </section>
      <section>
        <FormPicture />
      </section>
    </>
  );
};

export default PicturePage;
