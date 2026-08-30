/* ============================================================
   JEDNO MIEJSCE NA WSZYSTKIE DANE FIRMY.
   Zmieniasz tutaj — zmienia się w całym serwisie
   (header, stopka, kontakt, dane strukturalne dla Google).
   Pola w [nawiasach] trzeba uzupełnić przed publikacją.
   ============================================================ */

export const firma = {
  nazwa: "Pracownia Wielu Smaków",
  /* Imię i nazwisko właścicielki. Puste = serwis mówi o „pracowni”, a nie
     o osobie: znika podpis pod portretem, „Nazywam się…” w leadzie, pole
     `founder` w danych strukturalnych i wzmianka w polityce prywatności.
     Wpisz imię, a wszystkie te miejsca wrócą same — nie trzeba nic szukać
     po szablonach. */
  wlascicielka: "",
  haslo: "Twoje przyjęcie może mieć wiele smaków",
  opis:
    "Torty na zamówienie i catering okolicznościowy w Lesznie: torty weselne, " +
    "urodzinowe i komunijne, słodkie stoły oraz wytrawne przekąski. " +
    "Projekt, wykonanie i ustawienie stołu na miejscu.",

  /* Krótkie określenie usługi z miastem — używane w nagłówkach i opisach.
     Trzymane tutaj, żeby brzmiało tak samo w każdym miejscu serwisu. */
  uslugaZMiastem: "torty i catering okolicznościowy w Lesznie",

  /* --- kontakt --- */
  telefon: "+48 000 000 000",
  telefonHref: "tel:+48000000000",
  email: "kontakt@pracowniawielusmakow.pl",

  /* --- adres pracowni ---
     Ulica jest jedyną rzeczą, której nie znam — uzupełnij ją przed publikacją.
     Dopóki zostaje w nawiasach, dane strukturalne pomijają cały adres, żeby
     nie podawać Google wypełniacza (patrz Layout.astro). */
  adres: {
    ulica: "[ulica i numer]",
    kod: "64-100",
    miasto: "Leszno",
    /* Polski wymaga odmiany, a doklejanie końcówek w szablonie dawało
       „Lesznoie”. Formy trzymamy wprost: „w Lesznie”, „z Leszna”. */
    miastoW: "Lesznie",
    miastoZ: "Leszna",
    wojewodztwo: "wielkopolskie",
  },

  /* --- godziny --- */
  godziny: "Pon.–pt. 9:00–17:00",
  godzinyOpis: "Sob.–niedz. — realizacje u klientów. Wiadomości odbieram codziennie.",
  czasOdpowiedzi: "2 dni robocze",

  /* --- zasięg ---
     Lista trafia na stronę kontaktu i do danych strukturalnych jako obszar
     działania. Skreśl te miejscowości, do których faktycznie nie dojeżdżasz. */
  miasta: [
    "Leszno",
    "Rydzyna",
    "Osieczna",
    "Święciechowa",
    "Śmigiel",
    "Kościan",
    "Gostyń",
    "Rawicz",
    "Bojanowo",
    "Wschowa",
    "Góra",
  ],
  promien: "60 km",

  /* --- social --- */
  instagram: "https://www.instagram.com/pracownia_wielu_smakow/",
  instagramNazwa: "@pracownia_wielu_smakow",
  /* Pełny adres profilu, nie samo facebook.com — goły adres serwisu jest dla
     Google fałszywym sygnałem tożsamości. Pusty ciąg ukrywa link i pomija go
     w danych strukturalnych. */
  facebook: "",

  /* --- formalne --- */
  nip: "[NIP do uzupełnienia]",

  /* --- SEO --- */
  domena: "https://pracowniawielusmakow.pl",
} as const;

/* Pola oznaczone [nawiasami] są nieuzupełnione. Sprawdzamy to w jednym miejscu,
   żeby nigdzie — a zwłaszcza w danych strukturalnych — nie wyszedł wypełniacz. */
export const uzupelnione = (wartosc: string) =>
  wartosc.trim() !== "" && !wartosc.includes("[");

/* Mapa Google — wklej sam adres URL z „Udostępnij → Umieść mapę”.
   Zostaw pusty ciąg, a w tym miejscu wyświetli się placeholder. */
export const mapaEmbed = "";

/* ============================================================
   NAWIGACJA — header ma logo na środku, więc linki są
   rozdzielone na lewą i prawą stronę.
   ============================================================ */

export type Link = { tekst: string; url: string; pod?: Link[] };

/* Telefon stoi jako pierwsza pozycja po lewej stronie. Poza tym, że jest
   przydatny, równoważy szerokość przycisku wyceny po prawej — dzięki temu
   logo wypada dokładnie na środku strony przy równych odstępach.
   Usunięcie tej pozycji przesunie logo w lewo. */
export const nawLewa: Link[] = [
  { tekst: "Realizacje", url: "/realizacje" },
  {
    tekst: "Oferta",
    url: "/oferta",
    pod: [
      { tekst: "Torty", url: "/oferta/torty" },
      { tekst: "Tort na urodziny", url: "/oferta/torty-urodzinowe" },
      { tekst: "Słodki stół", url: "/oferta/slodkie-kompozycje" },
      { tekst: "Catering okolicznościowy", url: "/oferta/wytrawny-stol" },
      { tekst: "Upominki dla gości", url: "/oferta/upominki-dla-gosci" },
    ],
  },
];

export const nawPrawa: Link[] = [
  { tekst: "O mnie", url: "/o-mnie" },
  { tekst: "Kontakt", url: "/kontakt" },
];

/* ============================================================
   LICZBY / DOWODY
   ============================================================ */

export const liczby = [
  { wartosc: "200+", opis: "zrealizowanych stołów" },
  { wartosc: "1 660", opis: "obserwujących" },
  { wartosc: "2 dni", opis: "na odpowiedź" },
];

export const okazje = [
  "Wesela",
  "Osiemnastki",
  "Komunie",
  "Chrzciny",
  "Przyjęcia firmowe",
];

/* ============================================================
   OPINIE
   Podmień na prawdziwe cytaty od klientów (imię + okazja + rok).
   ============================================================ */

export const opinie = [
  {
    tresc:
      "Tort wyglądał dokładnie jak na projekcie, a smakował lepiej, niż się spodziewaliśmy. " +
      "Basia przyjechała wcześniej i sama poustawiała cały stół — nie musieliśmy o nic pytać.",
    kto: "Ania i Marek",
    okazja: "Wesele, 2024",
  },
  {
    tresc:
      "Zamawiałam słodki stół na osiemnastkę córki. Wszystko dopięte na ostatni guzik, " +
      "a monoporcje zniknęły w pół godziny.",
    kto: "Magda",
    okazja: "Osiemnastka, 2024",
  },
  {
    tresc:
      "Najbardziej doceniam to, że dostaliśmy i słodkie, i wytrawne od jednej osoby. " +
      "Jedna rozmowa zamiast trzech.",
    kto: "Karolina i Paweł",
    okazja: "Wesele, 2023",
  },
];
