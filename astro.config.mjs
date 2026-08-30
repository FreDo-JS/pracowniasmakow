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
    /* "auto" zostawiało arkusz jako osobny plik (9 KB), a PageSpeed liczył
       za niego 160 ms blokowania renderowania. Przy jednym wspólnym arkuszu
       na dwanaście stron wklejenie go w HTML jest tańsze niż dodatkowe
       żądanie — zwłaszcza na telefonie, gdzie liczy się każdy obrót sieci.
       Kosztem jest brak wspólnego cache'u między podstronami; przy tej
       wadze arkusza to dobry interes. */
    inlineStylesheets: "always",
  },
  compressHTML: true,
});
