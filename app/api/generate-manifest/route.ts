import {
  getFileNameFromUrl,
  removeBaseDirectory,
  stringifyAttributes,
} from "@/app/utils";
import Image, { ImageOptions } from "@11ty/eleventy-img";
import JSZip from "jszip";
import fs from "node:fs/promises";
import path from "path";

export const POST = async (req: Request) => {
  try {
    let imagesToDelete = [];
    const formData = await req.formData();

    const name = formData.get("name");
    const shortName = formData.get("short-name");
    const description = formData.get("description");
    const themeColor = formData.get("themeColor");
    const bgColor = formData.get("bgColor");
    const display = formData.get("display");
    const scope = formData.get("scope");
    const startURL = formData.get("start-url");
    const file = formData.get("file") as File;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const uploadDir = path.join(process.cwd(), "uploads");
    const filePath = path.join(uploadDir, file.name);

    imagesToDelete.push(filePath);

    await fs.mkdir(uploadDir, { recursive: true });
    await fs.writeFile(filePath, buffer);

    const props = {
      widths: [16, 32, 57, 76, 96, 128, 180, 192, 228, 512],
      formats: ["png"],
      outputDir: path.join(uploadDir, "favicons"),
      urlPath: path.join(removeBaseDirectory(uploadDir), "favicons"),
      filenameFormat: (_hash: any, _src: any, width: any, format: any) => {
        return `favicon-${width}.${format}`;
      },
    };

    const metadata = await Image(filePath, props as ImageOptions);

    const faviconHTML = metadata["png"]
      ?.map((img) => {
        const isAppleTouchIcon = img.width === 180;
        const attributes = stringifyAttributes({
          href: `/your-path-folder/favicons/${getFileNameFromUrl(img?.url)}`,
          rel: isAppleTouchIcon ? "apple-touch-icon" : "icon",
          ...(isAppleTouchIcon ? {} : { sizes: `${img.width}x${img.height}` }),
        });
        return `<link ${attributes}>`;
      })
      .join("\n");

    const zip = new JSZip();
    zip.file("favicons.html", faviconHTML as string);

    const manifest = `{
      "theme_color": "${themeColor}",
      "background_color": "${bgColor}",
      "display": "${display}",
      "scope": "${scope}",
      "start_url": "${startURL}",
      "short_name": "${shortName}",
      "name": "${name}",
      "description": "${description}"
      }`;
    zip.file("manifest.json", manifest);
    const faviconDir = zip.folder("favicons");

    await Promise.all(
      Object.values(metadata)
        .flat()
        .map(async (image) => {
          const imagePath = path.join(
            uploadDir,
            "favicons",
            getFileNameFromUrl(image.outputPath) as string
          );
          imagesToDelete.push(imagePath);
          const imageBuffer = await fs.readFile(imagePath);
          faviconDir?.file(
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
        "Content-Disposition": `attachment; filename="manifest.zip"`,
      },
    });
  } catch (e: any) {
    console.error(e);
    return new Response(JSON.stringify({ message: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
