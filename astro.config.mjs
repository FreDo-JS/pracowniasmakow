// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Adres produkcyjny — używany do mapy witryny, adresów kanonicznych i danych
// strukturalnych. Można go nadpisać zmienną SITE_URL przy budowaniu
// (tak robi to Dockerfile), a domyślna wartość działa lokalnie.
export default defineConfig({
  site: process.env.SITE_URL || "https://pracowniawielusmakow.pl",
  integrations: [sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
