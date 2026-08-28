import type { APIRoute } from "astro";

/* robots.txt generowany przy budowaniu, żeby adres mapy witryny
   zawsze zgadzał się z domeną podaną w konfiguracji (SITE_URL).
   Wcześniej był to plik statyczny, który trzeba było poprawiać ręcznie. */
export const GET: APIRoute = ({ site }) => {
  const tresc = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${new URL("sitemap-index.xml", site)}`,
    "",
  ].join("\n");

  return new Response(tresc, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
