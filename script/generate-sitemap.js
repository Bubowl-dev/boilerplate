require("dotenv").config({
  path: "./.env.production",
});

const fs = require("fs");
const glob = require("glob");
const { SitemapStream, streamToPromise } = require("sitemap");

(async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_URL;

    if (!baseUrl) {
      throw new Error("A variável de ambiente NEXT_PUBLIC_URL não está definida.");
    }

    const pages = glob.sync("pages/**/*.tsx", { ignore: ["pages/_*.tsx", "pages/api"] });

    const sitemapStream = new SitemapStream({
      hostname: baseUrl.trim(),
    });

    pages.forEach((page) => {
      const path = page
        .replace("pages", "")
        .replace(".tsx", "")
        .replace(/\/index$/, "/");

      sitemapStream.write({ url: path });
    });

    sitemapStream.write({ url: process.env.NEXT_PUBLIC_URL });

    sitemapStream.end();

    const sitemapXML = await streamToPromise(sitemapStream);
    fs.writeFileSync("./public/sitemap.xml", sitemapXML);

    console.log("Sitemap gerado com sucesso!");
  } catch (error) {
    console.error(error);
  }
})();
