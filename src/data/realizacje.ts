/* ============================================================
   REALIZACJE — kafle w galerii.
   Dodajesz nowy wpis w tej tablicy i pojawia się na stronie.
   `zdjecie` zostaw puste, dopóki nie masz fotografii —
   wyświetli się wtedy stylizowany placeholder z opisem.
   ============================================================ */

export type Kategoria = "wesele" | "urodziny" | "komunia" | "wytrawne";

export type Realizacja = {
  tytul: string;
  kategoria: Kategoria;
  opis?: string;
  zdjecie?: string;
};

export const kategorie: { id: Kategoria | "wszystko"; nazwa: string }[] = [
  { id: "wszystko", nazwa: "Wszystko" },
  { id: "wesele", nazwa: "Wesela" },
  { id: "urodziny", nazwa: "Urodziny i 18-tki" },
  { id: "komunia", nazwa: "Komunia i chrzest" },
  { id: "wytrawne", nazwa: "Wytrawny stół" },
];

export const realizacje: Realizacja[] = [
  { tytul: "Stół weselny w stodole", kategoria: "wesele", opis: "Słodki stół i tort na 120 gości, kolory pudrowe i zieleń." },
  { tytul: "Tarty cytrynowe i koreczki", kategoria: "wytrawne", opis: "Stół powitalny przy lampce wina." },
  { tytul: "Wieża z croissantów", kategoria: "wesele", opis: "Alternatywa dla drugiego tortu, przyjęcie w plenerze." },
  { tytul: "Osiemnastka z neonem", kategoria: "urodziny", opis: "Mocne kolory, tort dwupiętrowy i monoporcje." },
  { tytul: "Świece i polne kwiaty", kategoria: "wesele", opis: "Aranżacja stołu spięta z dekoracją sali." },
  { tytul: "Tort z truskawkami", kategoria: "urodziny", opis: "Biszkopt waniliowy, owoce sezonowe." },
  { tytul: "Tort komunijny", kategoria: "komunia", opis: "Jasna, spokojna dekoracja i delikatne smaki." },
  { tytul: "Deska serów i wędlin", kategoria: "wytrawne", opis: "Z konfiturami, orzechami i pieczywem." },
  { tytul: "Tort na drewnianym wozie", kategoria: "wesele", opis: "Trzy piętra, ręcznie malowane detale." },
  { tytul: "Monoporcje w szkle", kategoria: "wesele", opis: "Sześć rodzajów, wydawane w dwóch turach." },
  { tytul: "Chrzciny w bieli", kategoria: "komunia", opis: "Tort, ciasteczka z imieniem i drobne upominki." },
  { tytul: "Słodki stół firmowy", kategoria: "urodziny", opis: "Jubileusz firmy, logo odwzorowane ręcznie." },
];
