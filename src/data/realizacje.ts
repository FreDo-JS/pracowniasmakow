/* ============================================================
   REALIZACJE — kafle w galerii.
   Dodajesz nowy wpis w tej tablicy i pojawia się na stronie.

   `zdjecie` wskazuje na zdjęcia STOCKOWE (patrz zdjecia.ts) —
   materiał zastępczy, dopóki nie ma własnych fotografii. Podmień pliki
   w `src/assets/zdjecia/`; opisy alternatywne budują się z tytułu
   i opisu, więc zostaną poprawne. Tytuły muszą opisywać to, co widać
   na zdjęciu — inaczej galeria myli podwójnie.
   Puste `zdjecie` = stylizowany placeholder z samym opisem.
   ============================================================ */

import { zdjeciaRealizacji } from "./zdjecia";

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
  { tytul: "Stół weselny w stodole", kategoria: "wesele", opis: "Słodki stół i tort na 120 gości, kolory pudrowe i zieleń.", zdjecie: zdjeciaRealizacji[0] },
  { tytul: "Tarty cytrynowe i koreczki", kategoria: "wytrawne", opis: "Stół powitalny przy lampce wina.", zdjecie: zdjeciaRealizacji[1] },
  { tytul: "Wieża ze słodkości na stojakach", kategoria: "wesele", opis: "Alternatywa dla drugiego tortu, przyjęcie w plenerze.", zdjecie: zdjeciaRealizacji[2] },
  { tytul: "Osiemnastka z rozmachem", kategoria: "urodziny", opis: "Duży tort, kwiaty i dekoracja spięta z salą.", zdjecie: zdjeciaRealizacji[3] },
  { tytul: "Świece i polne kwiaty", kategoria: "wesele", opis: "Aranżacja stołu spięta z dekoracją sali.", zdjecie: zdjeciaRealizacji[4] },
  { tytul: "Tort z truskawkami", kategoria: "urodziny", opis: "Biszkopt waniliowy, owoce sezonowe.", zdjecie: zdjeciaRealizacji[5] },
  { tytul: "Tort komunijny", kategoria: "komunia", opis: "Jasna, spokojna dekoracja i delikatne smaki.", zdjecie: zdjeciaRealizacji[6] },
  { tytul: "Deska z przekąskami", kategoria: "wytrawne", opis: "Koreczki, sery i zioła na drewnianej desce.", zdjecie: zdjeciaRealizacji[7] },
  { tytul: "Tort trzypiętrowy z różami", kategoria: "wesele", opis: "Trzy piętra i żywe kwiaty na każdym z nich.", zdjecie: zdjeciaRealizacji[8] },
  { tytul: "Monoporcje w szkle", kategoria: "wesele", opis: "Sześć rodzajów, wydawane w dwóch turach.", zdjecie: zdjeciaRealizacji[9] },
  { tytul: "Chrzciny w bieli", kategoria: "komunia", opis: "Tort, ciasteczka z imieniem i drobne upominki.", zdjecie: zdjeciaRealizacji[10] },
  { tytul: "Słodki stół na jubileusz", kategoria: "urodziny", opis: "Jubileusz firmy — złote detale i kompozycja kwiatowa.", zdjecie: zdjeciaRealizacji[11] },
];
