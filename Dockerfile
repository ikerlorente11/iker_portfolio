# ── Stage 1: dependencias ───────────────────────────────────────
FROM node:22-alpine AS deps

WORKDIR /app
COPY package*.json ./
RUN npm ci

# ── Stage 2: runtime (node + nginx) ─────────────────────────────
FROM node:22-alpine

RUN apk add --no-cache nginx

WORKDIR /app

# node_modules precargados — no se reinstalan al detectar cambios
COPY --from=deps /app/node_modules ./node_modules

# Ficheros de config del proyecto (no src ni public — se montan como volúmenes)
COPY package*.json astro.config.mjs tsconfig.json ./

# nginx config
COPY nginx.conf /etc/nginx/http.d/default.conf
RUN mkdir -p /usr/share/nginx/html

COPY docker-prod-entrypoint.sh /docker-prod-entrypoint.sh
RUN sed -i 's/\r$//' /docker-prod-entrypoint.sh && chmod +x /docker-prod-entrypoint.sh

EXPOSE 80

CMD ["/docker-prod-entrypoint.sh"]
