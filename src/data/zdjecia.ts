/* ============================================================
   ZDJĘCIA POGLĄDOWE — PLIK TYMCZASOWY.

   Serwis nie ma jeszcze własnych fotografii, a bez zdjęć nie da się
   ocenić ani układu kafli, ani tego, jak paleta zachowuje się przy
   prawdziwych barwach jedzenia. Poniższe adresy prowadzą do zdjęć
   z serwisu loremflickr.com, dobranych hasłami („cake”, „canape”,
   „macaron”…), więc na kaflach są faktycznie wypieki.

   Adresy są rozwinięte do postaci docelowej (…/cache/resized/…),
   a nie do przekierowania — przekierowania ładowały się kilkanaście
   sekund i przy dwunastu kaflach naraz serwis je dławił.

   ⚠ NIE ZOSTAWIAJ TEGO NA PRODUKCJI:
   — prawa autorskie: to cudze zdjęcia z Flickra, na różnych licencjach;
   — szybkość: każdy kafel to zapytanie do obcego serwera;
   — sens: klient ma zobaczyć Twoje torty, nie cudze;
   — trwałość: to adresy z cache'u, mogą przestać działać bez ostrzeżenia.

   JAK PODMIENIĆ NA WŁASNE:
   1. wrzuć pliki do `public/zdjecia/` (np. `tort-weselny-stodola.webp`),
   2. w tym pliku podmień adresy na `/zdjecia/nazwa-pliku.webp`,
   3. gotowe — reszta serwisu bierze zdjęcia stąd, nic więcej nie ruszasz.

   Opisy alternatywne (alt) budują się z tytułów i opisów realizacji,
   więc po podmianie plików zostają poprawne same z siebie.
   ============================================================ */

/** Kafle galerii realizacji — kadr pionowy 4:5. */
export const zdjeciaRealizacji = [
  "https://loremflickr.com/cache/resized/65535_54494237857_cc6f690ee4_h_640_800_nofilter.jpg", // stół weselny
  "https://loremflickr.com/cache/resized/3310_3260033194_6a800a8427_h_640_800_nofilter.jpg", // tarty i koreczki
  "https://loremflickr.com/cache/resized/65535_54565745867_d13073ca53_b_640_800_nofilter.jpg", // wieża z croissantów
  "https://loremflickr.com/cache/resized/65535_54424896638_a70e1f05cc_h_640_800_nofilter.jpg", // osiemnastka
  "https://loremflickr.com/cache/resized/2750_4392924589_3ffa39fdc8_b_640_800_nofilter.jpg", // świece i kwiaty
  "https://loremflickr.com/cache/resized/65535_50758038236_babdec087b_b_640_800_nofilter.jpg", // tort z truskawkami
  "https://loremflickr.com/cache/resized/2447_5838246872_60ed1991bb_640_800_nofilter.jpg", // tort komunijny
  "https://loremflickr.com/cache/resized/65535_52110111247_ba567a9f51_h_640_800_nofilter.jpg", // deska serów
  "https://loremflickr.com/cache/resized/65535_53857776967_c1cff83ea3_h_640_800_nofilter.jpg", // tort na wozie
  "https://loremflickr.com/cache/resized/1597_25396652514_b4b21c5f3f_h_640_800_nofilter.jpg", // monoporcje
  "https://loremflickr.com/cache/resized/7180_6783448658_087b644069_c_640_800_nofilter.jpg", // chrzciny
  "https://loremflickr.com/cache/resized/65535_54479722759_e60d324df1_h_640_800_nofilter.jpg", // stół firmowy
];

/** Kafle w siatce oferty — kadr poziomy 4:3. */
export const zdjeciaOferty = {
  torty:
    "https://loremflickr.com/cache/resized/65535_53857777057_df396ac772_c_640_480_nofilter.jpg",
  "torty-urodzinowe":
    "https://loremflickr.com/cache/resized/65535_54425036555_6e49d63e0b_c_640_480_nofilter.jpg",
  "slodkie-kompozycje":
    "https://loremflickr.com/cache/resized/5584_15230064932_a5f5196464_b_640_480_nofilter.jpg",
  "wytrawny-stol":
    "https://loremflickr.com/cache/resized/65535_40726341123_d1d1db5ebd_b_640_480_nofilter.jpg",
  "upominki-dla-gosci":
    "https://loremflickr.com/cache/resized/3747_11376032285_4d74da4496_b_640_480_nofilter.jpg",
} as const;

/** Slajdy na stronie głównej — kadr szeroki. */
export const zdjeciaSlidera = [
  "https://loremflickr.com/cache/resized/65535_50758038236_aad3c234ae_k_1280_592_nofilter.jpg",
  "https://loremflickr.com/cache/resized/65535_52463850038_798cc62b22_h_1280_592_nofilter.jpg",
  "https://loremflickr.com/cache/resized/65535_54163933702_5b301fe79c_1280_592_nofilter.jpg",
];

/** Portret na stronie „O mnie”. */
export const zdjeciePortretu =
  "https://loremflickr.com/cache/resized/65535_54415463469_15bcdf91b5_h_640_800_nofilter.jpg";
