import { getFileNameFromUrl, stringifyAttributes } from "@/app/utils";
import Image, { ImageFormat } from "@11ty/eleventy-img";
import JSZip from "jszip";
import fs from "node:fs/promises";
import path from "path";

// https://www.pronextjs.dev/next-js-file-uploads-server-side-solutions
export const POST = async (req: Request) => {
  try {
    console.log("Starting POST request handler");

    let imagesToDelete = [];
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const outputFormat = formData.get("format") as string;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const uploadDir = path.join(process.cwd(), "uploads");
    const filePath = path.join(uploadDir, file.name);

    imagesToDelete.push(filePath);

    // Log directory paths
    console.log("Upload directory:", uploadDir);
    console.log("File path:", filePath);

    try {
      await fs.mkdir(uploadDir, { recursive: true });
      console.log("Directory created successfully");
    } catch (err) {
      console.error("Error creating directory:", err);
      throw err;
    }

    await fs.writeFile(filePath, buffer);
    console.log("File written successfully");

    const formats = ["webp", "jpeg"];

    const imageMetadata = await Image(filePath, {
      widths: [400, 800],
      formats: [
        "webp",
        outputFormat === "img/png"
          ? "png"
          : outputFormat === "img/jpeg"
          ? "jpeg"
          : "jpeg",
      ],
      outputDir: uploadDir,
      urlPath: "/uploads", // Use a relative URL path
    });

    const getLargestImage = (format: ImageFormat) => {
      const images = imageMetadata[format];
      if (images) {
        return images[images.length - 1];
      }
    };

    const sourceHtmlString = Object.values(imageMetadata)
      .map((images) => {
        const { sourceType } = images[0];
        const sourceAttributes = stringifyAttributes({
          type: sourceType,
          srcset: images
            .map((image) => `/uploads/${getFileNameFromUrl(image.srcset)}`)
            .join(", "),
          sizes: "100vw",
        });
        return `<source ${sourceAttributes}>`;
      })
      .join("\n");

    const largestUnoptimizedImg = getLargestImage(formats[0] as ImageFormat);
    const imgAttributes = stringifyAttributes({
      src: `/uploads/${getFileNameFromUrl(largestUnoptimizedImg?.url)}`,
      width: largestUnoptimizedImg?.width,
      height: largestUnoptimizedImg?.height,
      loading: "lazy",
      decoding: "async",
    });
    const imgHtmlString = `<img ${imgAttributes}>`;

    const picture = `<picture>
      ${sourceHtmlString}
      ${imgHtmlString}
    </picture>`;

    const zip = new JSZip();
    zip.file("picture.html", picture);
    const imgDir = zip.folder("images");

    await Promise.all(
      Object.values(imageMetadata)
        .flat()
        .map(async (image) => {
          const imagePath = path.join(
            uploadDir,
            getFileNameFromUrl(image.outputPath) as string
          );
          imagesToDelete.push(imagePath);
          const imageBuffer = await fs.readFile(imagePath);
          imgDir?.file(
            getFileNameFromUrl(image.outputPath) as string,
            imageBuffer
          );
        })
    );

    const zipContent = await zip.generateAsync({ type: "nodebuffer" });
    imagesToDelete.forEach((image) => fs.unlink(image));
    return new Response(zipContent, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="snapcial-ai.zip"`,
      },
    });
  } catch (e: any) {
    console.error("Error during POST request:", e);
    return new Response(JSON.stringify({ message: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
