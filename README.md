# Iker Lorente — Portfolio

Portfolio personal de Iker Lorente Calvo, Software Engineer con +7 años de experiencia. Sitio estático multiidioma con animaciones, descarga de CV en PDF y un easter egg.

**Producción:** [ikl.pistation.dev](https://ikl.pistation.dev)

---

## Tech Stack

| Capa | Tecnología |
|------|-----------|
| Framework | [Astro](https://astro.build) 6.3.1 (SSG, TypeScript) |
| Animaciones | [GSAP](https://gsap.com) 3.15 + ScrollTrigger |
| Carousel | [Swiper](https://swiperjs.com) 12.1.4 |
| PDF | [jsPDF](https://github.com/parallax/jsPDF) 4.2.1 |
| Contenedor | Docker + Nginx |
| Infraestructura | 2× Raspberry Pi + Cloudflare Tunnels |

---

## Idiomas

Soporte para **Español** (`/es/`), **Inglés** (`/en/`) y **Euskera** (`/eu/`). La raíz `/` redirige en servidor (nginx, 302) según la cookie `lang` que fija el selector de idioma o, si no existe, la cabecera `Accept-Language` (`eu` → `/eu/`, `es` → `/es/`, resto → `/en/`; sin cabecera → `/es/`).

---

## Estructura del proyecto

```
iker_portfolio/
├── src/
│   ├── pages/
│   │   ├── index.astro          # Redirect automático por idioma/timezone
│   │   ├── es/ en/ eu/          # Rutas por idioma
│   │   │   ├── index.astro      # Página principal del portfolio
│   │   │   └── easter-egg.astro # Página secreta (Konami Code)
│   │   ├── robots.txt.ts        # SEO robots.txt dinámico
│   │   └── sitemap.xml.ts       # Sitemap dinámico
│   ├── components/              # Componentes Astro (Nav, Hero, Skills, etc.)
│   ├── layouts/
│   │   └── Layout.astro         # Layout maestro (SEO, OG, JSON-LD, tema)
│   ├── i18n/
│   │   ├── index.ts             # Loader de traducciones
│   │   ├── es.ts                # ES: textos + datos de skills/experiencia/educación
│   │   ├── en.ts                # EN: traducciones
│   │   └── eu.ts                # EU: traducciones
│   └── styles/
│       └── global.css           # Variables CSS, temas claro/oscuro, animaciones globales
├── public/                      # Assets estáticos (imágenes, música, favicon)
├── Dockerfile                   # Imagen: Astro compila el sitio y Nginx lo sirve
├── docker-compose.yml           # El contenedor en las Pis (imagen de GHCR, puerto 8021)
├── nginx.conf                   # Config Nginx: SPA routing, gzip, cache headers
├── .github/workflows/ci.yml     # CI común: build en cada push, imagen arm64 a GHCR en master
├── astro.config.mjs             # Config Astro (i18n, Vite, polling watch)
└── .env.example                 # Plantilla de variables de entorno
```

---

## Variables de entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `PUBLIC_SITE_URL` | URL base del sitio (canonical, OG tags, JSON-LD) | `https://ikl.pistation.dev` |

Copiar `.env.example` a `.env.development` o `.env.production` según el entorno.

---

## Desarrollo local

```bash
# Sin Docker
npm install
npm run dev        # Dev server en localhost:4321
npm run build      # Build de producción en ./dist/
npm run preview    # Preview del build en local

# La imagen tal cual en local
docker compose up --build   # → localhost:8021
```

---

## Imagen y despliegue

El CI ([github.com/ikerlorente11/ci](https://github.com/ikerlorente11/ci)) construye el sitio en cada push y, en `master`, publica la imagen arm64 en `ghcr.io/ikerlorente11/iker-portfolio` (`:latest` y `:<sha>`). Los lunes la reconstruye sin caché. En las Pis:

```bash
docker compose pull && docker compose up -d
```

---

## Infraestructura y despliegue

El proyecto corre en **dos Raspberry Pi** (PiStation) expuestas a internet mediante **Cloudflare Tunnels** — sin abrir puertos en el router.

### Túneles Cloudflare

| Túnel | Raspberry Pi | Dominios del portfolio |
|-------|-------------|----------------------|
| `pidev` | RPi desarrollo | `ikl-dev-prod.pistation.dev` |
| `piprod` | RPi producción | `ikl.pistation.dev` |

- `ikl-dev-prod.pistation.dev` → contenedor del RPi de dev (puerto 8021)
- `ikl.pistation.dev` → contenedor del RPi de producción (puerto 8021) — **URL pública real**

La configuración de los túneles es externa al repositorio (gestionada en el dashboard de Cloudflare y en los propios RPi).

---

## SEO

- Canonical URLs y hreflang por idioma
- Open Graph (og:type profile, og:image, og:locale)
- Twitter Card (summary_large_image)
- JSON-LD (schema.org/Person)
- `robots.txt` y `sitemap.xml` generados dinámicamente

---

## Easter Egg

Solo los mas curiosos encontraran, aunque como pista, dire que esta en el core de las arcades
## Licencia

Puedes usar, modificar y compartir este proyecto libremente para fines **no comerciales**.
No está permitido venderlo ni ganar dinero con él. Ver [LICENSE](LICENSE) (PolyForm Noncommercial 1.0.0).
