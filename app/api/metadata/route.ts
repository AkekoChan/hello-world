import * as cheerio from "cheerio";

export const POST = async (req: Request) => {
  const protocol = /^(https?:\/\/)/;
  const formData = await req.formData();
  let baseUrl = formData.get("url") as string;
  baseUrl.trim();
  if (!baseUrl) {
    return new Response(
      JSON.stringify({ error: "Please Enter an URL.", code: 400 }),
      {
        status: 400,
      }
    );
  }
  if (!baseUrl.match(protocol)) {
    const parsedUrl = `https://${baseUrl}`;
    baseUrl = parsedUrl;
  }

  const res = await fetch(baseUrl);
  const html = await res.text();

  let $ = cheerio.load(html);
  const title =
    $('meta[property="og:title"]').attr("content") ||
    $("title").text() ||
    $('meta[name="title"]').attr("content");
  const description =
    $('meta[property="og:description"]').attr("content") ||
    $('meta[name="description"]').attr("content");
  const url = $('meta[property="og:url"]').attr("content");
  const site_name = $('meta[property="og:site_name"]').attr("content");
  const image =
    $('meta[property="og:image"]').attr("content") ||
    $('meta[property="og:image:url"]').attr("content");
  const icon =
    $('link[rel="icon"]').attr("href") ||
    $('link[rel="shortcut icon"]').attr("href");

  return Response.json({
    title: title,
    description: description,
    url: url,
    site_name: site_name,
    image: image,
    icon: icon,
  });
};
