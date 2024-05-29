import fs from "node:fs/promises";
import path from "path";

// https://www.pronextjs.dev/next-js-file-uploads-server-side-solutions
export const POST = async (req: Request) => {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    const filePath = path.join(uploadDir, file.name);

    await fs.mkdir(uploadDir, { recursive: true });

    await fs.writeFile(filePath, buffer);
    return Response.json({ status: "success" });
  } catch (e) {
    console.error(e);
    return Response.json({ status: "fail", error: e });
  }
};
