# Pracownia Wielu Smaków — strona

Statyczna strona zbudowana w [Astro](https://astro.build). Wynik buildu to czysty
HTML — bez frameworka po stronie przeglądarki, z minimalną ilością JavaScriptu
(slider, menu, formularz, zgody cookies).

## Uruchomienie

```bash
npm install
```

```bash
npm run dev
```

Strona ruszy pod `http://localhost:4321`. Build produkcyjny:

```bash
npm run build
```

Gotowe pliki lądują w katalogu `dist/` — to on trafia na hosting.

---

## Co zmieniasz i gdzie

| Chcę zmienić | Plik |
| --- | --- |
| telefon, e-mail, adres, godziny, social, NIP | `src/data/firma.ts` |
| pozycje w menu i podmenu „Oferta" | `src/data/firma.ts` |
| opinie klientów, liczby, lista okazji | `src/data/firma.ts` |
| treść podstron oferty, dodatki, FAQ, ceny | `src/data/oferta.ts` |
| kafle w galerii realizacji | `src/data/realizacje.ts` |
| kolory, odstępy, typografia | `src/styles/global.css` (sekcja `:root`) |
| treść slajdów na stronie głównej | `src/components/Slider.astro` |

**Najważniejsze:** dane kontaktowe są w jednym miejscu. Zmiana numeru telefonu
w `firma.ts` zmienia go w nagłówku, stopce, na stronie kontaktu i w danych
strukturalnych dla Google — nie trzeba szukać po plikach.

### Pola do uzupełnienia przed publikacją

W `src/data/firma.ts` w nawiasach kwadratowych: adres pracowni, miasta dojazdu,
NIP, numer telefonu i adres e-mail. W `src/data/oferta.ts` — widełki cenowe
(pole `cena` w każdej kategorii).

---

## Formularz kontaktowy — podłączenie wysyłki

Strona jest statyczna, więc maile wysyła zewnętrzna usługa. Formularz jest
przygotowany pod dowolną z nich — wystarczy podać adres w pliku `.env`.

### Wariant najprostszy: Web3Forms (darmowy, bez konta)

1. Wejdź na [web3forms.com](https://web3forms.com), podaj swój adres e-mail —
   klucz dostępu przyjdzie w wiadomości.
2. Skopiuj `.env.example` jako `.env`.
3. Uzupełnij:

```
PUBLIC_ENDPOINT_FORMULARZA=https://api.web3forms.com/submit
PUBLIC_WEB3FORMS_KEY=tutaj-klucz-z-maila
```

4. Zbuduj stronę na nowo (`npm run build`) i gotowe.

### Wariant alternatywny: Formspree

1. Załóż konto na [formspree.io](https://formspree.io) i utwórz formularz.
2. W `.env` wpisz otrzymany adres:

```
PUBLIC_ENDPOINT_FORMULARZA=https://formspree.io/f/TWOJ_ID
```

Klucz `PUBLIC_WEB3FORMS_KEY` zostaw pusty.

### Co się dzieje bez konfiguracji

Formularz nadal działa i waliduje pola, ale zamiast wysyłać pokazuje komunikat
z adresem e-mail i numerem telefonu. Nic nie ginie po cichu.

### Co dostajesz na maila

Imię, e-mail, telefon, rodzaj uroczystości, datę, liczbę gości, miejscowość,
zaznaczony zakres (`zakres_lista`) oraz treść wiadomości. Temat wiadomości jest
składany automatycznie, np. „Zapytanie ze strony: Wesele — Anna Kowalska".

Formularz ma ukryte pole-pułapkę na boty (`strona-www`). Jeśli zostanie
wypełnione, wiadomość nie jest wysyłana.

---

## Mapa Google

W `src/data/firma.ts` ustaw `mapaEmbed` na adres z Map Google
(**Udostępnij → Umieść mapę** → skopiuj sam adres z atrybutu `src`).
Dopóki pole jest puste, w tym miejscu wyświetla się placeholder.

---

## Logo

Logo w nagłówku i stopce to `public/logo-pws.png` — przezroczysty PNG wycięty
z pliku źródłowego. Jeśli dostaniesz nową wersję znaku, przerobisz ją tak:

```bash
node scripts/przygotuj-logo.mjs sciezka/do/logo.jpg public/logo-pws.png
```

Skrypt sam znajduje znak na obrazku, kadruje go, usuwa tło (jasne piksele stają
się przezroczyste) i przy okazji generuje `public/favicon.png` oraz
`public/og.jpg` — obrazek pokazywany przy udostępnianiu linku na Facebooku
i w komunikatorach.

---

## Zdjęcia

W miejscach przewidzianych na fotografie są teraz stylizowane placeholdery
(klasa `.foto`). Kiedy będą zdjęcia:

1. Wrzuć je do `src/assets/`.
2. W `src/data/realizacje.ts` uzupełnij pole `zdjecie`.
3. Użyj komponentu `<Image />` z `astro:assets` — Astro sam wygeneruje WebP,
   kilka rozmiarów i doda `width`/`height`, żeby układ nie skakał przy ładowaniu.

---

## Publikacja

Strona jest statyczna, więc katalog `dist/` można wrzucić praktycznie wszędzie:
na Cloudflare Pages, Netlify, zwykły hosting FTP albo własny serwer w Dockerze.
Instrukcja dla Dockera jest w następnej sekcji.

Adres domeny ustawia się w **jednym miejscu** — zmiennej `SITE_URL`. Bez niej
używana jest wartość domyślna z `astro.config.mjs`. Od tego adresu zależą
adresy kanoniczne, mapa witryny, `robots.txt` i dane strukturalne, więc musi
być poprawny przed publikacją.

---

## Docker

W repozytorium są cztery pliki obsługujące wdrożenie:

| Plik | Do czego |
| --- | --- |
| `Dockerfile` | dwuetapowy obraz: Node buduje stronę, nginx ją serwuje |
| `docker-compose.yml` | wersja lokalna, na `http://localhost:8080` |
| `docker-compose.prod.yml` | wersja produkcyjna: strona + Caddy z HTTPS |
| `docker/nginx.conf` | konfiguracja serwera (cache, kompresja, 404) |

Finalny obraz nie zawiera Node'a ani źródeł — tylko nginx i gotowe pliki.

### Rzecz, o której łatwo zapomnieć

Zmienne `PUBLIC_*` Astro **wkompilowuje w pliki wynikowe**. Trzeba je podać
przy budowaniu obrazu, a nie przy jego uruchamianiu:

```bash
docker run -e PUBLIC_ENDPOINT_FORMULARZA=... obraz   # NIE zadziała
```

Formularz jest gotowy w chwili budowania, więc później nie da się już nic
podmienić. `docker compose` robi to poprawnie, bo przekazuje wartości z `.env`
jako `build args`. Po zmianie adresu formularza trzeba przebudować obraz.

### Próba lokalna

```bash
docker compose up --build
```

Strona stanie pod `http://localhost:8080`. Zatrzymanie: `docker compose down`.

### Serwer produkcyjny

Potrzebujesz maszyny z publicznym IP (VPS: Hetzner, Mikrus, OVH…), domeny
skierowanej rekordami **A** i **AAAA** na to IP oraz otwartych portów 80 i 443.

Na serwerze:

```bash
git clone <adres-repozytorium> && cd pracowniasmakow
```

Utwórz plik `.env` (wzór w `.env.example`):

```bash
cp .env.example .env && nano .env
```

Uzupełnij `DOMENA`, `EMAIL_ADMINA` i `PUBLIC_ENDPOINT_FORMULARZA`, a potem:

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

Caddy sam pobierze certyfikat Let's Encrypt i będzie go odnawiał — nie trzeba
certbota ani wpisu w cronie. Certyfikaty leżą w wolumenie `caddy_dane`, więc
przeżywają restart kontenera.

Sprawdzenie, czy wstało:

```bash
docker compose -f docker-compose.prod.yml ps
```

Podgląd logów, gdy coś nie działa:

```bash
docker compose -f docker-compose.prod.yml logs -f caddy
```

### Aktualizacja strony po zmianach

```bash
git pull && docker compose -f docker-compose.prod.yml up -d --build
```

Przestój to kilka sekund — tyle, ile trwa podmiana kontenera.

### Uwagi

- **Port 443 musi być wolny.** Jeśli na serwerze działa już nginx albo Apache,
  najpierw je zatrzymaj (`sudo systemctl stop nginx`) albo wystaw stronę na
  innym porcie i podłącz do istniejącego proxy — wtedy użyj zwykłego
  `docker-compose.yml`, który wystawia port 8080.
- **Certyfikat nie powstanie, dopóki domena nie wskazuje na serwer.** Let's
  Encrypt sprawdza to przez połączenie z zewnątrz. Zmiany DNS potrafią iść
  do kilku godzin.
- Dla samej strony statycznej Cloudflare Pages jest mniej pracy niż VPS —
  darmowy hosting, CDN i certyfikat bez konfiguracji. Docker ma sens, jeśli
  masz już serwer i chcesz trzymać wszystko w jednym miejscu.

---

## SEO — co jest już zrobione

- osobny tytuł i opis dla każdej podstrony,
- adresy kanoniczne i mapa witryny (`/sitemap-index.xml`),
- dane strukturalne firmy (`Bakery`) z adresem, telefonem i godzinami,
- dane strukturalne FAQ na podstronach oferty i kontaktu — pytania mogą
  pokazać się bezpośrednio w wynikach Google,
- ścieżki nawigacji (okruszki) z danymi strukturalnymi,
- obrazek Open Graph przy udostępnianiu linku.

---

## Pliki z poprzedniej wersji

`pwsmakow-v3.html` oraz `Projekt bez nazwy.svg` to materiały źródłowe sprzed
migracji. Nie biorą udziału w budowaniu strony — możesz je usunąć, kiedy nowa
wersja Ci się spodoba.
