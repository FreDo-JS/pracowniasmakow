# =============================================================
#  Pracownia Wielu Smaków — obraz produkcyjny
#  Etap 1 buduje stronę, etap 2 tylko ją serwuje.
#  W finalnym obrazie nie ma Node'a ani źródeł — sam nginx
#  i gotowe pliki (ok. 60 MB).
# =============================================================

# ---------- etap 1: budowanie ----------
FROM node:22-alpine AS build
WORKDIR /app

# UWAGA: zmienne PUBLIC_* Astro wkompilowuje w pliki wynikowe.
# Muszą być znane TERAZ, w trakcie budowania — podanie ich przy
# `docker run` nie zadziała, bo strona jest już wtedy gotowa.
ARG PUBLIC_ENDPOINT_FORMULARZA=""
ARG PUBLIC_WEB3FORMS_KEY=""
ARG SITE_URL="https://pracowniawielusmakow.pl"
ENV PUBLIC_ENDPOINT_FORMULARZA=$PUBLIC_ENDPOINT_FORMULARZA \
    PUBLIC_WEB3FORMS_KEY=$PUBLIC_WEB3FORMS_KEY \
    SITE_URL=$SITE_URL

# Najpierw same zależności — dopóki package-lock.json się nie zmieni,
# Docker użyje warstwy z cache i pominie instalację.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- etap 2: serwowanie ----------
FROM nginx:1.27-alpine AS runtime

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1
