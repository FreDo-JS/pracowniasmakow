# Pliki źródłowe

Oryginały w pełnej rozdzielczości. **Nie trafiają na stronę** — katalog jest poza
`public/`, więc nic stąd się nie publikuje.

| Plik | Do czego |
|---|---|
| `logo-pws-760.png` | master logo 760×760. Z niego powstaje `public/logo-pws.png` (168×168). |
| `favicon-256.png` | master ikony 256×256. Z niego powstają `public/favicon.png` (48×48) i `public/apple-touch-icon.png` (180×180). |

Logo w serwisie wyświetla się w maksymalnie 84 px, więc 168 px wystarcza także na
ekranach o podwójnej gęstości. Wcześniej publikowany był master 760×760 (40 KB)
i przeglądarka skalowała go w dół — czyli pobierała dziewięć razy więcej pikseli,
niż pokazywała.

Przeskalowanie po zmianie mastera:

```bash
node -e "const s=require('sharp');s('zrodla/logo-pws-760.png').resize(168,168,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).png({compressionLevel:9,palette:true,colours:64}).toFile('public/logo-pws.png')"
```
