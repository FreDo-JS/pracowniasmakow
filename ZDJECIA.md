# Zdjęcia tymczasowe — lista do pobrania

Zestaw zdjęć stockowych na okres budowy strony. Wszystkie sprawdzone: to
pozycje **darmowe** z Unsplash (płatne Unsplash+ zostały odfiltrowane).

**Licencja Unsplash:** wolno używać komercyjnie, bez opłat i bez pytania o
zgodę. Autora nie trzeba podawać, ale wypada. Nie wolno odsprzedawać samych
zdjęć ani budować z nich konkurencyjnego serwisu ze zdjęciami.

## Zanim pobierzesz — jedna uwaga

To rozwiązanie **wyłącznie na czas budowy**. Cukiernia to biznes, w którym
zdjęcie jest produktem: klient wybiera tort oczami. Stockowy tort rozpoznaje
się od razu (te same kadry krążą po setkach stron) i działa odwrotnie do
zamierzenia — podważa wiarygodność zamiast ją budować. Docelowo tu mają być
zdjęcia z Twojego Instagrama.

**Portretu nie bierz ze stocku.** Podpisanie zdjęcia obcej osoby imieniem
„Basia Kot" to wprowadzanie klientów w błąd, niezależnie od licencji. Jeśli nie
masz jeszcze portretu, zostaw placeholder albo użyj kadru na dłonie przy pracy,
bez twarzy — poniżej jest taki wariant.

## Jak pobierać

Na stronie zdjęcia klikasz **Download** → wystarczy rozmiar „Large" (ok. 2400 px
szerokości). Astro i tak wygeneruje z tego mniejsze wersje i format WebP.

Pliki zapisz w `src/assets/` pod nazwami z kolumny „nazwa pliku" — dzięki temu
podpięcie ich pod kod będzie polegało na wpisaniu samej nazwy.

---

## Slider na stronie głównej — 3 zdjęcia poziome

| Slajd | Nazwa pliku | Link | Autor |
| --- | --- | --- | --- |
| 1. Wesela i przyjęcia | `hero-1-stol-weselny.jpg` | [unsplash.com/photos/…cg6k2pmbtng](https://unsplash.com/photos/a-table-topped-with-lots-of-different-types-of-pastries-cg6k2pmbtng) | Ana Lourenço |
| 2. Wytrawny stół | `hero-2-wytrawny.jpg` | [unsplash.com/photos/…QVGVxz5SN5Y](https://unsplash.com/photos/a-wooden-table-topped-with-lots-of-different-types-of-food-QVGVxz5SN5Y) | We The Creators |
| 3. Torty | `hero-3-tort.jpg` | [unsplash.com/photos/…4on47p0-bk4](https://unsplash.com/photos/a-three-tiered-cake-with-figs-on-top-of-it-4on47p0-bk4) | Melissa Walker Horn |

Slajdy są bardzo szerokie (16:7,4), więc wybieraj kadry z zapasem po bokach.

## Karty oferty — 4 zdjęcia (kadr 4:3)

| Kategoria | Nazwa pliku | Link | Autor |
| --- | --- | --- | --- |
| Torty | `oferta-torty.jpg` | [unsplash.com/photos/…fXAuCMEYGY4](https://unsplash.com/photos/4-layered-fondant-cake-on-table-fXAuCMEYGY4) | Jason Leung |
| Słodkie kompozycje | `oferta-slodkie.jpg` | [unsplash.com/photos/…HGl1Q2Y-mbw](https://unsplash.com/photos/assorted-pastries-on-ceramic-trays-HGl1Q2Y-mbw) | Samia Liamani |
| Wytrawny stół | `oferta-wytrawny.jpg` | [unsplash.com/photos/…N1svTVXKz2s](https://unsplash.com/photos/assortment-of-gourmet-canapes-with-salmon-shrimp-and-caviar-N1svTVXKz2s) | waa towaw |
| Upominki dla gości | `oferta-upominki.jpg` | [unsplash.com/photos/…wA5VcW-oRsc](https://unsplash.com/photos/pink-and-white-polka-dot-gift-box-with-pink-ribbon-wA5VcW-oRsc) | Isaac Quesada |

## Galeria realizacji — 12 zdjęć (kadr 4:5, pionowy)

Kolejność odpowiada wpisom w `src/data/realizacje.ts`.

| Realizacja | Nazwa pliku | Link | Autor |
| --- | --- | --- | --- |
| Stół weselny w stodole | `realizacja-01.jpg` | [unsplash.com/photos/…JJOQ1gezuF8](https://unsplash.com/photos/a-variety-of-desserts-on-display-in-a-buffet-JJOQ1gezuF8) | Encal Media |
| Tarty cytrynowe i koreczki | `realizacja-02.jpg` | [unsplash.com/photos/…q439oIRNuJ4](https://unsplash.com/photos/pastries-q439oIRNuJ4) | Iryna Zaitseva |
| Wieża z croissantów | `realizacja-03.jpg` | [unsplash.com/photos/…lOW7w5-DMHk](https://unsplash.com/photos/assorted-pastry-on-clear-glass-cupcake-rack-lOW7w5-DMHk) | zeno Aras |
| Osiemnastka z neonem | `realizacja-04.jpg` | [unsplash.com/photos/…ys8qztLjJyg](https://unsplash.com/photos/cake-with-lit-sparkling-stick-ys8qztLjJyg) | Storiès |
| Świece i polne kwiaty | `realizacja-05.jpg` | [unsplash.com/photos/…22JxStzTxwo](https://unsplash.com/photos/3-layer-cake-with-flowers-accent-22JxStzTxwo) | Photos by Lanty |
| Tort z truskawkami | `realizacja-06.jpg` | [unsplash.com/photos/…Xb5c2x6wJPc](https://unsplash.com/photos/a-white-wedding-cake-with-fresh-strawberries-and-flowers-Xb5c2x6wJPc) | Mads Eneqvist |
| Tort komunijny | `realizacja-07.jpg` | [unsplash.com/photos/…U7N6XFvTBjU](https://unsplash.com/photos/round-white-floral-4-tiered-fondant-cake-U7N6XFvTBjU) | Thomas William |
| Deska serów i wędlin | `realizacja-08.jpg` | [unsplash.com/photos/…FmY1OJMwQM8](https://unsplash.com/photos/a-platter-of-cheese-crackers-strawberries-crackers-and-FmY1OJMwQM8) | American Heritage Chocolate |
| Tort na drewnianym wozie | `realizacja-09.jpg` | [unsplash.com/photos/…7ePjhwxtxCU](https://unsplash.com/photos/white-and-red-floral-cake-on-brown-wooden-stand-7ePjhwxtxCU) | David Holifield |
| Monoporcje w szkle | `realizacja-10.jpg` | [unsplash.com/photos/…4hbCj6m11To](https://unsplash.com/photos/baked-pastries-on-plate-4hbCj6m11To) | Octavio Fossatti |
| Chrzciny w bieli | `realizacja-11.jpg` | [unsplash.com/photos/…TAtTPzM95nk](https://unsplash.com/photos/white-4-tier-cake-TAtTPzM95nk) | Scott Osborn |
| Słodki stół firmowy | `realizacja-12.jpg` | [unsplash.com/photos/…bTQiq0pHfKU](https://unsplash.com/photos/a-table-topped-with-plates-of-cookies-and-cookies-bTQiq0pHfKU) | Taylor Cole |

## Portret na stronie „O mnie" — tylko kadr bez twarzy

| Wariant | Nazwa pliku | Link | Autor |
| --- | --- | --- | --- |
| Dłonie przy pracy w kuchni | `pracownia.jpg` | [unsplash.com/photos/…0sbq9Rxcx-c](https://unsplash.com/photos/a-woman-in-a-kitchen-preparing-food-on-a-cutting-board-0sbq9Rxcx-c) | Martin Baron |

Powód ograniczenia — patrz uwaga na początku pliku.

## Zapas, gdyby któreś nie pasowało

Wszystkie darmowe, sprawdzone:

- [Tort trzypiętrowy z kwiatami](https://unsplash.com/photos/3-layer-fondant-cake-CeKaBzyvxxI) — Quilia
- [Tort z różowymi kwiatami i kieliszkami](https://unsplash.com/photos/three-tier-cake-with-pink-fresh-flowers-on-table-beside-two-champagne-flute-glasses-53nLF9woXE0) — Frank Zhang
- [Krojenie tortu weselnego](https://unsplash.com/photos/a-bride-and-groom-cutting-their-wedding-cake-Hps0j8Uu8Us) — Aneta Voborilova
- [Tort urodzinowy ze świeczkami](https://unsplash.com/photos/white-and-pink-covered-cake-with-lightened-candle-gK297xpY6os) — Diliara Garifullina
- [Bufet deserowy](https://unsplash.com/photos/a-buffet-table-filled-with-lots-of-food-MkMcAtdXQjc) — Ifrah Akhter
- [Tacka makaroników](https://unsplash.com/photos/tray-of-french-macarons-fE1b8smeOM0) — Volodymyr Proskurovskyi
- [Makaroniki na stole](https://unsplash.com/photos/macarons-on-table-WbZesfqwR-A) — Heather Barnes
- [Tosty z serem i pomidorem](https://unsplash.com/photos/small-toasts-with-grated-cheese-and-tomato-slices-V5JrcOQ_b34) — Sergej
- [Tatar z tuńczyka na ciemnej paterze](https://unsplash.com/photos/artfully-arranged-tuna-tartare-bites-on-dark-platter-fpVH2Gcrosc) — Diego Arenas de Rodrigo
- [Deska z serami i owocami](https://unsplash.com/photos/sliced-fruits-on-brown-wooden-bowl-YiaDJAjD1S0) — Anto Meneghini
- [Czekolada na desce](https://unsplash.com/photos/a-wooden-cutting-board-topped-with-pieces-of-chocolate-C-sP1AJQjcQ) — Camilo Contreras
- [Pudełko prezentowe ze wstążką](https://unsplash.com/photos/a-wrapped-gift-box-with-a-ribbon-on-a-yellow-background-QRVx6D5fbpE) — khampha phimmachak

## Co dalej

Kiedy pliki znajdą się w `src/assets/`, trzeba podpiąć je pod komponent
`<Image />` z `astro:assets` — wtedy Astro wygeneruje WebP, kilka rozmiarów
i doda wymiary, żeby układ nie skakał przy ładowaniu. Miejsca na zdjęcia są już
przygotowane w kodzie (klasa `.foto` oraz pole `zdjecie` w `realizacje.ts`).
