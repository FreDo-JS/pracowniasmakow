/* ============================================================
   TREŚĆ PODSTRON OFERTY.
   Każdy wpis generuje osobną podstronę pod /oferta/[slug].
   Ceny celowo zostawione jako [widełki] — uzupełnij własnymi.
   ============================================================ */

import { zdjeciaOferty } from "./zdjecia";

export type Dodatek = { nazwa: string; opis: string };
export type Wariant = { nazwa: string; opis: string };
export type Pytanie = { pytanie: string; odpowiedz: string };

export type Oferta = {
  slug: string;
  /** Zdjęcie na kaflu w siatce oferty. Teraz poglądowe — patrz zdjecia.ts. */
  zdjecie?: string;
  /** Krótka nazwa: okruszki, karty oferty, nawigacja, stopka. */
  tytul: string;
  /** Jeszcze krótsza — lista rozwijana w formularzu. */
  tytulKrotki: string;
  /** Nagłówek H1 podstrony. Zawiera frazę wyszukiwania razem z miastem. */
  naglowek: string;
  /** Tytuł w wynikach Google. Layout dokleja „ | nazwa firmy”, więc długość
   *  liczymy razem z tym doklejeniem — całość ma się zmieścić w 60 znakach. */
  tytulSeo: string;
  etykieta: string;
  lead: string;
  opisSeo: string;
  wstep: string[];
  warianty: Wariant[];
  wskazowka: { tytul: string; wstep: string; punkty: string[] };
  dodatki: Dodatek[];
  smaki?: string[];
  faq: Pytanie[];
  cena: string;
  /** Domyślnie true. False = wpis ma własną podstronę, ale nie zajmuje
   *  miejsca w siatce czterech kart (jest w menu, stopce i odnośnikach). */
  wKartach?: boolean;
  /** Odnośniki do pokrewnych podstron. Anchor niesie frazę, więc mówi
   *  wyszukiwarce, o czym jest strona docelowa — inaczej niż „zobacz więcej”. */
  powiazane?: { tekst: string; url: string }[];
};

export const oferta: Oferta[] = [
  {
    slug: "torty",
    zdjecie: zdjeciaOferty["torty"],
    tytul: "Torty",
    tytulKrotki: "Torty",
    naglowek: "Torty na zamówienie w Lesznie",
    tytulSeo: "Torty na zamówienie — Leszno",
    etykieta: "Na słodko",
    lead: "Tort projektowany pod jedną datę — pod dekorację sali, kolory i smaki, które naprawdę lubicie. Leszno i okolice do 60 km.",
    opisSeo:
      "Torty weselne, urodzinowe, komunijne i firmowe z Leszna. Projekt przed wykonaniem, widełki cenowe z góry, dowóz i ustawienie na sali.",
    wstep: [
      "Każdy tort w mojej pracowni w Lesznie powstaje od zera i tylko na jedną datę — nie mam gotowych wzorów do wyboru z katalogu. Zaczynamy od rozmowy o tym, jak wygląda sala, jakie są kolory dekoracji i co lubicie jeść, a nie od tego, ile pięter „wypada” mieć.",
      "Projekt dostajesz przed rozpoczęciem prac, razem z widełkami cenowymi. Dopóki go nie zaakceptujesz, nic nie jest przesądzone — poprawki na etapie rysunku są darmowe i normalne.",
    ],
    warianty: [
      {
        nazwa: "Torty weselne",
        opis:
          "Od jednopiętrowych po kilkukondygnacyjne. Dobieram konstrukcję do liczby gości i do tego, czy tort ma być krojony przy gościach, czy wyniesiony do kuchni.",
      },
      {
        nazwa: "Urodziny i osiemnastki",
        opis:
          "Mocniejsze kolory, neony, motywy z pasji solenizanta. Tutaj jest najwięcej miejsca na szalone pomysły — i najczęściej z nich korzystamy.",
      },
      {
        nazwa: "Komunie i chrzciny",
        opis:
          "Spokojna, jasna estetyka, delikatne smaki pod dzieci i dorosłych naraz. Często w komplecie z monoporcjami dla najmłodszych.",
      },
      {
        nazwa: "Torty bezowe i musowe",
        opis:
          "Dla tych, którzy nie chcą klasycznego biszkoptu z kremem. Lżejsze, bardziej owocowe, dobrze sprawdzają się latem.",
      },
      {
        nazwa: "Torty firmowe i okolicznościowe",
        opis:
          "Jubileusze, otwarcia, podziękowania dla zespołu. Logo odwzorowuję ręcznie lub wydrukiem cukrowym — zależnie od tego, jak ma wyglądać.",
      },
    ],
    smaki: [
      "Wanilia — malina",
      "Czekolada — słony karmel",
      "Pistacja — wiśnia",
      "Cytryna — mak",
      "Kokos — marakuja",
      "Tiramisu",
      "Snickers",
      "Bezowy z owocami sezonowymi",
    ],
    wskazowka: {
      tytul: "Ile tortu zamówić",
      wstep:
        "Porcja weselna to zwykle ok. 100–120 g. Poniżej najczęstsze proporcje — traktuj je jako punkt wyjścia, dokładną wielkość policzę przy wycenie.",
      punkty: [
        "do 40 gości — jedno lub dwa piętra",
        "40–80 gości — dwa lub trzy piętra",
        "80–120 gości — trzy piętra, czasem z tortem dodatkowym na zapleczu",
        "powyżej 120 gości — tort ozdobny do krojenia i zaplecze krojone w kuchni (taniej niż same piętra)",
      ],
    },
    dodatki: [
      {
        nazwa: "Degustacja przed decyzją",
        opis:
          "Zestaw próbek smaków do odbioru w pracowni. Jeśli zdecydujesz się na zamówienie, odliczam jej koszt od wyceny.",
      },
      {
        nazwa: "Dodatkowe piętro",
        opis: "Więcej porcji i wyższa sylwetka tortu bez zmiany projektu.",
      },
      {
        nazwa: "Ręcznie malowane detale",
        opis:
          "Motywy przenoszone pędzlem z zaproszeń albo z dekoracji sali. Każdy tort staje się wtedy jedyny.",
      },
      {
        nazwa: "Kwiaty — cukrowe lub żywe",
        opis:
          "Cukrowe robię sama i zostają na pamiątkę. Żywe uzgadniam z Waszą florystką, żeby kolory się zgadzały.",
      },
      {
        nazwa: "Personalizowany topper",
        opis: "Imiona, data, kaligrafia albo motyw przewodni przyjęcia.",
      },
      {
        nazwa: "Mini tort na pierwszą rocznicę",
        opis:
          "Mała kopia tortu weselnego do zamrożenia. Zamiast odkrawania piętra z dużego tortu.",
      },
      {
        nazwa: "Wersje bez glutenu i laktozy",
        opis:
          "Osobne porcje dla gości z nietolerancjami, w tej samej dekoracji co reszta. Wystarczy podać liczbę osób.",
      },
      {
        nazwa: "Transport i ustawienie na miejscu",
        opis:
          "Przywożę tort w chłodzie, składam na sali i ustawiam na Waszym stole. Nie musicie go nigdzie przenosić.",
      },
    ],
    faq: [
      {
        pytanie: "Z jakim wyprzedzeniem zamawiać?",
        odpowiedz:
          "Na wesela najlepiej 6–9 miesięcy wcześniej, bo soboty w sezonie kończą się szybko. Mniejsze torty przyjmuję zwykle z 3–4 tygodniowym wyprzedzeniem, ale zawsze warto zapytać — czasem znajdzie się wolny termin.",
      },
      {
        pytanie: "Czy mogę przysłać zdjęcie tortu z internetu?",
        odpowiedz:
          "Tak, i bardzo pomaga. Traktuję je jako inspirację, a nie wzór do skopiowania — z kilku zdjęć składam projekt, który będzie Wasz.",
      },
      {
        pytanie: "Jak przechowywać tort na sali?",
        odpowiedz:
          "Z dala od słońca i grzejników, najlepiej w chłodniejszym miejscu, a wystawić na godzinę przed krojeniem. Przy ustawianiu zawsze mówię obsłudze, gdzie jest najlepsze miejsce.",
      },
      {
        pytanie: "Ile kosztuje tort?",
        odpowiedz:
          "Cena zależy od liczby porcji i pracochłonności dekoracji, nie od samej liczby pięter. Widełki podaję w odpowiedzi na zapytanie — zwykle w ciągu dwóch dni roboczych.",
      },
    ],
    cena: "[wycena od … zł za porcję]",
    powiazane: [
      { tekst: "tort na urodziny i osiemnastkę", url: "/oferta/torty-urodzinowe" },
      { tekst: "słodki stół na to samo przyjęcie", url: "/oferta/slodkie-kompozycje" },
    ],
  },

  /* ------------------------------------------------------------
     Osobna podstrona pod frazę „tort na urodziny”. Wydzielona z „Tortów”,
     bo urodziny to inna intencja zakupowa niż wesele: inny budżet, krótszy
     termin, inne pytania. Nie wchodzi do siatki czterech kart — prowadzą
     do niej menu, stopka i odnośnik ze strony „Torty”.
     ------------------------------------------------------------ */
  {
    slug: "torty-urodzinowe",
    zdjecie: zdjeciaOferty["torty-urodzinowe"],
    tytul: "Tort na urodziny",
    tytulKrotki: "Urodzinowe",
    naglowek: "Tort na urodziny — Leszno i okolice",
    tytulSeo: "Tort na urodziny — Leszno",
    etykieta: "Na słodko",
    lead: "Tort urodzinowy projektowany pod solenizanta — od tortów dla dzieci po osiemnastki i okrągłe jubileusze. Leszno i okolice.",
    opisSeo:
      "Tort na urodziny w Lesznie: osiemnastki, urodziny dziecka i okrągłe jubileusze. Projekt pod solenizanta, dowóz na godzinę, wycena w 2 dni.",
    wKartach: false,
    wstep: [
      "Tort urodzinowy rządzi się innymi prawami niż weselny. Rzadko chodzi o wielopiętrową konstrukcję — częściej o to, żeby jedna rzecz na stole opowiadała o konkretnej osobie: o tym, co ogląda, w co gra, co zbiera albo z czego się śmieje.",
      "Dlatego zaczynam od pytania o solenizanta, a nie o liczbę pięter. Projekt dostajesz przed rozpoczęciem prac, razem z widełkami cenowymi — poprawki na etapie rysunku są darmowe.",
      "Odbiór osobisty w Lesznie albo dowóz na wskazaną godzinę, w promieniu 60 km. Przy urodzinach to często ważniejsze niż sam tort: przywożę wtedy, kiedy trzeba, a nie „gdzieś przed południem”.",
    ],
    warianty: [
      {
        nazwa: "Osiemnastki",
        opis:
          "Najwięcej miejsca na szalone pomysły: mocne kolory, neony, złocenia, motywy z pasji albo z prywatnych żartów. Zwykle jedno duże piętro plus monoporcje dla reszty gości.",
      },
      {
        nazwa: "Urodziny dziecka",
        opis:
          "Bajki, zwierzęta, ulubiona gra. Delikatniejsze smaki i mniejsze porcje, bo połowa gości ma sześć lat. Barwniki dobieram tak, żeby nie farbowały buzi.",
      },
      {
        nazwa: "Okrągłe jubileusze",
        opis:
          "Czterdziestka, pięćdziesiątka, siedemdziesiątka. Spokojniejsza estetyka, klasyczne smaki, często cyfra albo krótki napis zamiast dekoracji figuralnej.",
      },
      {
        nazwa: "Tort ze zdjęciem lub logo",
        opis:
          "Wydruk cukrowy albo ręcznie malowany element. Przy zdjęciach potrzebuję pliku w dobrej jakości na kilka dni przed odbiorem.",
      },
      {
        nazwa: "Tort z niespodzianką",
        opis:
          "Cukierki albo kolorowe nadzienie w środku, wysypujące się przy pierwszym cięciu. Dobrze wypada na zdjęciach, więc warto uprzedzić fotografa.",
      },
      {
        nazwa: "Tort w kształcie cyfry",
        opis:
          "Numer wieku zamiast klasycznego okręgu — z biszkoptu albo na bazie bezowej. Liczy się inaczej na porcje, więc wielkość ustalamy przy wycenie.",
      },
    ],
    smaki: [
      "Wanilia — malina",
      "Czekolada — słony karmel",
      "Snickers",
      "Kinder — orzech laskowy",
      "Cytryna — mak",
      "Truskawka — biała czekolada",
      "Oreo",
      "Bezowy z owocami sezonowymi",
    ],
    wskazowka: {
      tytul: "Jaki tort na ile osób",
      wstep:
        "Porcja urodzinowa jest zwykle większa niż weselna — na urodzinach tort bywa jedynym deserem. Poniżej punkt wyjścia, dokładną wielkość policzę przy wycenie.",
      punkty: [
        "10–15 osób — jedno piętro o średnicy około 20 cm",
        "20–30 osób — jedno piętro 26 cm albo dwa niższe piętra",
        "40–60 osób — dwa piętra, przy osiemnastkach zwykle z monoporcjami",
        "powyżej 60 osób — tort główny do zdjęć plus prostszy tort do krojenia na zapleczu",
      ],
    },
    dodatki: [
      {
        nazwa: "Monoporcje w kolorach tortu",
        opis:
          "Najprostszy sposób, żeby starczyło dla wszystkich, a tort został cały do zdjęć i do przecięcia.",
      },
      {
        nazwa: "Topper z imieniem i wiekiem",
        opis:
          "Wycinany na zamówienie, w kolorze dekoracji. Zostaje po przyjęciu jako pamiątka.",
      },
      {
        nazwa: "Świeczki i zimne ognie",
        opis:
          "Dobieram do wielkości tortu, żeby nie przypaliły dekoracji. Zimne ognie tylko tam, gdzie sala na to pozwala.",
      },
      {
        nazwa: "Mini tort dla najmłodszego solenizanta",
        opis:
          "Osobny, mały tort na pierwsze urodziny — do rozgniecenia rączkami, bez barwników i z mniejszą ilością cukru.",
      },
      {
        nazwa: "Dowóz na konkretną godzinę",
        opis:
          "Leszno i okolice do 60 km. Przy urodzinach w restauracji ustawiam tort na miejscu i zabieram opakowania.",
      },
      {
        nazwa: "Pudełko transportowe",
        opis:
          "Sztywne, z uchwytem, dopasowane do wysokości tortu. Do odbioru osobistego w pracowni.",
      },
    ],
    faq: [
      {
        pytanie: "Z jakim wyprzedzeniem zamówić tort na urodziny?",
        odpowiedz:
          "Zwykle wystarczą dwa–trzy tygodnie. W maju i czerwcu, kiedy nakładają się komunie i wesela, oraz w grudniu terminy schodzą szybciej — wtedy warto napisać z miesięcznym wyprzedzeniem. Zdarza mi się przyjąć zamówienie z tygodnia na tydzień, ale wyboru dekoracji jest wtedy mniej.",
      },
      {
        pytanie: "Czy dowozisz tort urodzinowy pod wskazany adres?",
        odpowiedz:
          "Tak. Po Lesznie i w promieniu około 60 km — do domu, do sali albo do restauracji, na umówioną godzinę. Przy piętrowych tortach dowóz jest bezpieczniejszy niż odbiór własnym autem i zwykle go doradzam.",
      },
      {
        pytanie: "Ile kosztuje tort na urodziny?",
        odpowiedz:
          "Cena zależy od liczby porcji i od tego, ile pracy ręcznej jest w dekoracji — figurki i malowanie kosztują więcej niż gładkie wykończenie. Po krótkim opisie pomysłu odsyłam widełki w dwa dni robocze, zanim cokolwiek zaczniemy ustalać szczegółowo.",
      },
      {
        pytanie: "Czy zrobisz tort bez glutenu albo bez laktozy?",
        odpowiedz:
          "Tak, przy zamówieniu zgłoszonym z wyprzedzeniem. Pracownia nie jest wolna od alergenów, więc przy poważnej alergii uprzedzam o ryzyku śladowych ilości i wspólnie decydujemy, czy to bezpieczne.",
      },
      {
        pytanie: "Czy tort musi być piętrowy?",
        odpowiedz:
          "Nie. Przy urodzinach częściej lepiej wypada jedno dobrze zaprojektowane piętro plus monoporcje niż dwa piętra na siłę — wychodzi taniej, a na stole wygląda pełniej.",
      },
    ],
    cena: "[wycena od … zł za porcję]",
    powiazane: [
      { tekst: "torty weselne i komunijne", url: "/oferta/torty" },
      { tekst: "słodki stół na osiemnastkę", url: "/oferta/slodkie-kompozycje" },
    ],
  },

  {
    slug: "slodkie-kompozycje",
    zdjecie: zdjeciaOferty["slodkie-kompozycje"],
    tytul: "Słodki stół",
    tytulKrotki: "Słodkie stoły",
    naglowek: "Słodki stół na przyjęcie — Leszno",
    tytulSeo: "Słodki stół na przyjęcie — Leszno",
    etykieta: "Na słodko",
    lead: "Monoporcje, bezy, tartaletki i wieże z croissantów — razem z aranżacją stołu, nie tylko w pudełkach.",
    opisSeo:
      "Słodki stół na wesele i przyjęcia w Lesznie: monoporcje, bezy, tartaletki, wieże z croissantów oraz aranżacja stołu na miejscu.",
    wstep: [
      "Słodki stół to nie tylko to, co na paterach — to również sam stół. Przywożę obrus, patery, świeczniki i tabliczki z nazwami, a potem układam wszystko na miejscu, żeby całość wyglądała jak jedna kompozycja, a nie jak kilka osobno kupionych rzeczy.",
      "Wybieramy 4–6 rodzajów słodkości, żeby stół był różnorodny, ale nie chaotyczny. Resztę — kolory, wysokości, rozstawienie — dobieram do sali.",
    ],
    warianty: [
      {
        nazwa: "Monoporcje",
        opis:
          "Małe desery na jeden kęs w szkle lub na spodeczku. Najwygodniejsze dla gości, bo można je wziąć w tańcu.",
      },
      {
        nazwa: "Bezy i pavlovy",
        opis:
          "Lekkie, dobrze wyglądają w wysokich kompozycjach. Latem — z owocami sezonowymi.",
      },
      {
        nazwa: "Tartaletki",
        opis: "Cytrynowe, czekoladowe, z owocami. Chrupiąca baza, dużo koloru.",
      },
      {
        nazwa: "Wieża z croissantów",
        opis:
          "Efektowna alternatywa dla drugiego tortu — sprawdza się szczególnie na porankach i przyjęciach w plenerze.",
      },
      {
        nazwa: "Makaroniki i cake popsy",
        opis:
          "Drobne formy w kolorach motywu przewodniego. Dobrze wypełniają puste miejsca na stole.",
      },
      {
        nazwa: "Ciasta domowe",
        opis:
          "Sernik, szarlotka, makowiec — dla gości, którzy przy słodkim stole szukają czegoś znajomego.",
      },
    ],
    wskazowka: {
      tytul: "Ile słodkości na osobę",
      wstep:
        "Standardowo liczę 4–6 sztuk na gościa. Zależy to głównie od tego, co jeszcze pojawi się na przyjęciu.",
      punkty: [
        "jest tort i słodki stół — 4 sztuki na osobę",
        "sam słodki stół, bez tortu — 6–7 sztuk na osobę",
        "przyjęcie do czterech godzin — bliżej dolnej granicy",
        "wesele do rana — dokładam zapas i dzielę wydawanie na dwie tury",
      ],
    },
    dodatki: [
      {
        nazwa: "Pełna aranżacja stołu",
        opis:
          "Obrus, patery, świeczniki, tabliczki z nazwami deserów. Przyjeżdżam wcześniej i ustawiam wszystko sama.",
      },
      {
        nazwa: "Dekoracje kwiatowe",
        opis:
          "Kompozycje spięte z resztą dekoracji sali. Uzgadniam kolory z florystką, żeby stół nie odstawał.",
      },
      {
        nazwa: "Personalizowane etykiety i winietki",
        opis:
          "Nazwy deserów z oznaczeniem alergenów — goście nie muszą pytać, co jest w środku.",
      },
      {
        nazwa: "Kącik kawowy",
        opis: "Ciasta domowe i drobne przekąski do kawy, wydzielone obok głównego stołu.",
      },
      {
        nazwa: "Druga tura wydawania",
        opis:
          "Część słodkości zostaje w chłodzie i wjeżdża później w nocy. Stół wygląda świeżo przez całe przyjęcie.",
      },
      {
        nazwa: "Pudełka na wynos dla gości",
        opis:
          "Żeby to, co zostanie, nie zmarnowało się na sali. Goście zabierają do domu.",
      },
      {
        nazwa: "Wersje wegańskie i bezglutenowe",
        opis:
          "Osobna, oznaczona część stołu dla gości z ograniczeniami — bez wyróżniania ich przy wszystkich.",
      },
      {
        nazwa: "Wypożyczenie zastawy",
        opis:
          "Patery, klosze i szkło w mojej estetyce. Odbieram wszystko następnego dnia, nie musicie tego zwracać.",
      },
    ],
    faq: [
      {
        pytanie: "Czy stół muszę przygotować sama?",
        odpowiedz:
          "Nie. Potrzebuję tylko blatu o umówionej długości i dostępu do sali na godzinę przed gośćmi. Resztę przywożę i ustawiam.",
      },
      {
        pytanie: "Co z upałem?",
        odpowiedz:
          "Przy temperaturach powyżej 25°C proponuję zestaw odporny na ciepło — mniej kremów na bazie śmietany, więcej bez i tartaletek. Uprzedzam o tym w wycenie.",
      },
      {
        pytanie: "Czy da się zamówić sam słodki stół, bez tortu?",
        odpowiedz:
          "Oczywiście. Wtedy zwiększam liczbę sztuk na osobę i dokładam jeden element wysoki, żeby stół miał punkt centralny.",
      },
    ],
    cena: "[wycena od … zł za osobę]",
  },

  {
    slug: "wytrawny-stol",
    zdjecie: zdjeciaOferty["wytrawny-stol"],
    tytul: "Catering okolicznościowy",
    tytulKrotki: "Catering",
    naglowek: "Catering okolicznościowy w Lesznie — wytrawny stół",
    tytulSeo: "Catering okolicznościowy — Leszno",
    etykieta: "Na słono",
    lead: "Tarty, koreczki, deski serów i przekąski na powitanie gości. Catering na wesela, komunie i przyjęcia firmowe w Lesznie i okolicy.",
    opisSeo:
      "Catering na wesela, komunie i przyjęcia firmowe w Lesznie: wytrawny stół, finger food, ustawienie na miejscu. Jedna wycena zamiast trzech firm.",
    wstep: [
      "Catering okolicznościowy prowadzę w tej samej pracowni co torty i słodki stół — i to jest najczęstszy powód, dla którego ktoś do mnie wraca. Zamiast dogadywać się z dwiema firmami: jedna rozmowa, jeden styl podania i jeden termin dostawy.",
      "Wytrawny stół sprawdza się szczególnie na powitanie gości, w przerwie między daniami i późną nocą, kiedy obiad jest już dawno zjedzony, a impreza trwa. Dojeżdżam po całym Lesznie i w promieniu 60 km.",
    ],
    warianty: [
      {
        nazwa: "Tarty",
        opis:
          "Cytrynowa, ze szpinakiem, z pomidorami i serem kozim. Kroję na porcje wielkości jednego kęsa.",
      },
      {
        nazwa: "Koreczki i mini kanapki",
        opis:
          "Klasyka w nowej odsłonie — na deseczkach i w szkle, żeby wyglądały jak część dekoracji.",
      },
      {
        nazwa: "Deski serów i wędlin",
        opis:
          "Z konfiturami, orzechami i pieczywem. Najlepiej działają jako stół powitalny przy lampce wina.",
      },
      {
        nazwa: "Krokiety i przekąski na ciepło",
        opis: "Dla gości, którzy przy zimnym bufecie szukają czegoś konkretnego.",
      },
      {
        nazwa: "Sałatki w słoiczkach",
        opis:
          "Porcjowane, więc nie rozjeżdżają się po stole i można je wziąć w ręce.",
      },
      {
        nazwa: "Pasty, hummusy i pieczywo",
        opis:
          "Bezmięsna część stołu, która nie jest tylko dodatkiem dla wegetarian.",
      },
    ],
    wskazowka: {
      tytul: "Kiedy wytrawny stół ma sens",
      wstep:
        "Rzadko jest zamiast obiadu — częściej wypełnia momenty, w których goście czekają.",
      punkty: [
        "powitanie gości — 3–4 przekąski na osobę, przy lampce wina",
        "przerwa między daniami — 2–3 przekąski na osobę",
        "późna noc — 4–5 przekąsek, wjeżdżają po północy",
        "przyjęcie w plenerze — dobieram wersje odporne na ciepło",
      ],
    },
    dodatki: [
      {
        nazwa: "Stół powitalny",
        opis:
          "Przekąski ustawione na wejściu, żeby goście mieli co jeść, zanim wszyscy dojadą.",
      },
      {
        nazwa: "Przekąski po północy",
        opis:
          "Druga odsłona stołu w nocy. Cieplejsze, bardziej konkretne rzeczy — wtedy schodzą najszybciej.",
      },
      {
        nazwa: "Wersje wege, wegańskie i bezglutenowe",
        opis:
          "Wydzielona, opisana część stołu. Goście nie muszą pytać obsługi, co mogą zjeść.",
      },
      {
        nazwa: "Oznaczenie alergenów",
        opis:
          "Tabliczki przy każdej pozycji. Przy większych przyjęciach oszczędzają mnóstwo pytań.",
      },
      {
        nazwa: "Dostawa i ustawienie",
        opis:
          "Przyjeżdżam, składam stół i zabieram opakowania. Sala jest gotowa przed gośćmi.",
      },
      {
        nazwa: "Pudełka na wynos",
        opis: "To, co zostanie, pakuję dla rodziny albo dla obsługi.",
      },
      {
        nazwa: "Komplet ze słodkim stołem",
        opis:
          "Wspólna estetyka, wspólna dostawa i niższa cena niż przy dwóch osobnych zamówieniach.",
      },
    ],
    faq: [
      {
        pytanie: "Czy dowozisz na salę, która ma własny catering?",
        odpowiedz:
          "Tak, ale warto to wcześniej uzgodnić z salą — część miejsc ma zapisy o zewnętrznym jedzeniu. Zwykle wystarczy zgłoszenie na kilka tygodni przed.",
      },
      {
        pytanie: "Jak długo przekąski wytrzymują na stole?",
        odpowiedz:
          "Zimne bezpiecznie stoją około trzech godzin w normalnej temperaturze. Przy dłuższych przyjęciach planuję dwie tury zamiast jednej dużej.",
      },
      {
        pytanie: "Czy da się zamówić tylko wytrawne, bez słodkiego?",
        odpowiedz:
          "Tak. Wtedy patrzę na stół inaczej — musi się bronić sam, więc dokładam więcej rodzajów i coś na ciepło.",
      },
      {
        pytanie: "Na jakim obszarze robisz catering?",
        odpowiedz:
          "Pracownia jest w Lesznie, a dojeżdżam w promieniu około 60 km — najczęściej do Rydzyny, Osiecznej, Święciechowy, Śmigla, Kościana, Gostynia, Rawicza, Bojanowa, Wschowy i Góry. Dalsze wyjazdy też są możliwe, wtedy doliczam dojazd do wyceny. (Catering bywa zapisywany też jako „katering” — chodzi o to samo.)",
      },
    ],
    cena: "[wycena od … zł za osobę]",
    powiazane: [
      { tekst: "słodki stół w komplecie", url: "/oferta/slodkie-kompozycje" },
      { tekst: "tort na to samo przyjęcie", url: "/oferta/torty" },
    ],
  },

  {
    slug: "upominki-dla-gosci",
    zdjecie: zdjeciaOferty["upominki-dla-gosci"],
    tytul: "Upominki dla gości",
    naglowek: "Upominki dla gości weselnych — Leszno",
    tytulSeo: "Upominki dla gości — Leszno",
    tytulKrotki: "Upominki",
    etykieta: "Drobne formy",
    lead: "Ręcznie malowane tabliczki, boxy słodkości i podziękowania — drobiazg, który goście naprawdę zabierają do domu.",
    opisSeo:
      "Upominki dla gości weselnych: ręcznie malowane tabliczki czekolady, boxy słodkości, podziękowania dla świadków i rodziców.",
    wstep: [
      "Podziękowania są ostatnią rzeczą, którą goście dostają, i pierwszą, o której zapominają organizatorzy. Warto pomyśleć o nich razem z tortem, a nie na dwa tygodnie przed.",
      "Robię formy jadalne, bo takie faktycznie wracają do domu i znikają — zamiast leżeć w szufladzie razem z resztą pamiątek.",
    ],
    warianty: [
      {
        nazwa: "Ręcznie malowane tabliczki czekolady",
        opis:
          "Każda malowana osobno, w kolorach motywu przewodniego. Najczęściej wybierana pozycja.",
      },
      {
        nazwa: "Boxy słodkości",
        opis:
          "Małe pudełka z kilkoma drobiazgami — makaronik, ciastko, praline. Dobrze wyglądają przy nakryciu.",
      },
      {
        nazwa: "Ciasteczka z imionami gości",
        opis:
          "Podwójna rola: podziękowanie i winietka wskazująca miejsce przy stole.",
      },
      {
        nazwa: "Podziękowania dla świadków i rodziców",
        opis:
          "Nieco większe i bardziej dopracowane niż te dla wszystkich gości.",
      },
      {
        nazwa: "Słoiczki i konfitury",
        opis: "Wersja dla przyjęć w stylu rustykalnym, z etykietą i wstążką.",
      },
    ],
    wskazowka: {
      tytul: "Na co zwrócić uwagę",
      wstep: "Kilka rzeczy, które warto ustalić przed zamówieniem:",
      punkty: [
        "policz upominki na osobę, nie na parę — inaczej zabraknie",
        "dolicz 5–10 sztuk zapasu na gości spoza listy",
        "przy imionach na ciastkach potrzebuję ostatecznej listy trzy tygodnie przed",
        "czekolady najlepiej rozłożyć tuż przed przyjęciem, nie dzień wcześniej",
      ],
    },
    dodatki: [
      {
        nazwa: "Personalizacja imionami",
        opis:
          "Każdy upominek podpisany. Zastępuje winietki i porządkuje rozsadzenie gości.",
      },
      {
        nazwa: "Kaligrafia ręczna",
        opis: "Podpisy pisane ręcznie, nie drukiem. Widać różnicę z bliska.",
      },
      {
        nazwa: "Wstążki w kolorze motywu",
        opis: "Dobieram do zaproszeń albo do dekoracji stołów.",
      },
      {
        nazwa: "Pakowanie prezentowe",
        opis: "Gotowe do rozłożenia — nikt nie musi niczego składać na sali.",
      },
      {
        nazwa: "Próbka przed zamówieniem",
        opis:
          "Jedna sztuka do obejrzenia i skosztowania, zanim zamówisz sto. Koszt odliczam od wyceny.",
      },
      {
        nazwa: "Rozłożenie na stołach",
        opis:
          "Jeśli i tak przyjeżdżam z tortem — rozkładam upominki przy nakryciach, bez dodatkowej opłaty za dojazd.",
      },
    ],
    faq: [
      {
        pytanie: "Jaka jest minimalna liczba sztuk?",
        odpowiedz:
          "Przy tabliczkach i boxach zwykle 30 sztuk. Przy zamówieniu razem z tortem lub stołem — bez minimum.",
      },
      {
        pytanie: "Jak długo są świeże?",
        odpowiedz:
          "Czekolady i ciasteczka spokojnie trzy do czterech tygodni. Boxy z kremami krócej, dlatego robię je na dwa dni przed przyjęciem.",
      },
      {
        pytanie: "Czy mogę dostać projekt przed produkcją?",
        odpowiedz:
          "Tak, zawsze wysyłam wizualizację albo zdjęcie próbki. Produkcję zaczynam dopiero po Twojej akceptacji.",
      },
    ],
    cena: "[wycena od … zł za sztukę]",
  },
];

export const pobierzOferte = (slug: string) => oferta.find((o) => o.slug === slug);

/* Wspólny proces współpracy — pokazywany na podstronach oferty i na stronie „O mnie”. */
export const proces = [
  {
    krok: "01",
    tytul: "Zapytanie",
    opis:
      "Piszesz, jaka to okazja, ilu jest gości i kiedy. Nie musisz mieć jeszcze pomysłu na wygląd.",
  },
  {
    krok: "02",
    tytul: "Projekt i widełki",
    opis:
      "W ciągu dwóch dni roboczych dostajesz propozycję zakresu i przedział cenowy. Poprawki na tym etapie są darmowe.",
  },
  {
    krok: "03",
    tytul: "Rezerwacja terminu",
    opis:
      "Zaliczka blokuje datę w kalendarzu. Od tej chwili ta sobota jest Wasza.",
  },
  {
    krok: "04",
    tytul: "Realizacja i dostawa",
    opis:
      "Przywożę, składam i ustawiam na miejscu. Zabieram opakowania, zostawiam gotowy stół.",
  },
];
