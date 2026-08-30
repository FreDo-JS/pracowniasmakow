/* ============================================================
   ZDJĘCIA — NAZWY PLIKÓW Z `src/assets/zdjecia/`.

   To są zdjęcia STOCKOWE z serwisu Pexels (licencja Pexels: użytek
   komercyjny bez atrybucji). Stoją tu jako materiał zastępczy, dopóki
   nie ma własnych fotografii z pracowni.

   ⚠ ZANIM ZOSTANĄ NA STAŁE — zwłaszcza w sekcji „Realizacje":
   podpisy mówią o konkretnych zleceniach („Stół weselny w stodole”),
   a na zdjęciach są cudze prace. Klient ma prawo czytać to jako
   portfolio pracowni. Wymień je na własne, gdy tylko będą.

   JAK PODMIENIĆ NA WŁASNE — trzy kroki, nic więcej:
   1. wrzuć plik do `src/assets/zdjecia/` (dowolny .jpg/.png/.webp/.avif),
   2. w tym pliku wpisz jego nazwę zamiast obecnej,
   3. gotowe.

   Astro przy budowaniu przepuszcza każdy z tych plików przez sharp:
   przycina do kilku szerokości, zapisuje w AVIF i WebP (z JPEG-iem
   jako zapasem) i buduje `srcset` — telefon pobiera mały kadr, a nie
   ten sam plik co ekran 27-calowy. Dlatego wpisujemy NAZWY PLIKÓW,
   a nie adresy: adres zewnętrzny omija całą tę obróbkę.

   Opisy alternatywne (alt) budują się z tytułów i opisów realizacji,
   więc po podmianie plików zostają poprawne same z siebie.

   Kadry: realizacje 4:5 (pionowe), oferta 4:3 (poziome), slider szeroki,
   portret 4:5. Kadrowaniem zajmuje się CSS (`object-fit:cover`), więc
   zdjęcie o innych proporcjach też zadziała — zostanie przycięte.
   ============================================================ */

/** Kafle galerii realizacji — kolejność odpowiada `realizacje.ts`. */
export const zdjeciaRealizacji = [
  "stol-weselny-w-stodole.jpg",
  "tarty-i-koreczki.jpg",
  "wieza-ze-slodkosci.jpg",
  "osiemnastka.jpg",
  "swiece-i-kwiaty.jpg",
  "tort-z-truskawkami.jpg",
  "tort-komunijny.jpg",
  "deska-z-przekaskami.jpg",
  "tort-z-rozami.jpg",
  "monoporcje-w-szkle.jpg",
  "chrzciny-w-bieli.jpg",
  "slodki-stol-jubileusz.jpg",
];

/** Kafle w siatce oferty — klucz to `slug` z `oferta.ts`. */
export const zdjeciaOferty = {
  torty: "oferta-torty.jpg",
  "torty-urodzinowe": "oferta-torty-urodzinowe.jpg",
  "slodkie-kompozycje": "oferta-slodkie-kompozycje.jpg",
  "wytrawny-stol": "oferta-wytrawny-stol.jpg",
  "upominki-dla-gosci": "oferta-upominki.jpg",
} as const;

/** Slajdy na stronie głównej — kadr szeroki. */
export const zdjeciaSlidera = [
  "slider-slodki-stol.jpg",
  "slider-wytrawny-stol.jpg",
  "slider-tort-weselny.jpg",
];

/** Portret na stronie „O mnie”. */
export const zdjeciePortretu = "portret-pracownia.jpg";
