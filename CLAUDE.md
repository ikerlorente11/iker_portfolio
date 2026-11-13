# Contexto del proyecto — Iker Portfolio

Portfolio personal de Iker Lorente Calvo. Sitio estático multiidioma generado con Astro. Sin backend, sin base de datos.

---

## Qué hace la aplicación

- Muestra secciones: Hero, Skills, Experience, Education, Projects (infraestructura, webs, apps Android y apps de escritorio, cada bloque con su subtítulo)
- Descarga de CV en PDF generado en cliente con jsPDF
- Soporte para 3 idiomas (es/en/eu) con detección automática en servidor (cookie / Accept-Language)
- Tema claro/oscuro persistido en localStorage
- Easter egg
- SEO completo: canonical, hreflang, OG, Twitter Card, JSON-LD, sitemap, robots.txt

---

## Tech stack

- **Astro 6.3.1** — SSG, TypeScript strict, routing basado en ficheros
- **GSAP 3.15** + ScrollTrigger — animaciones de entrada y scroll
- **Swiper 12.1.4** — carousel de apps en la sección Projects
- **jsPDF 4.2.1** — generación de CV en PDF en el cliente
- **Docker + Nginx** — contenedores para dev y producción
- **Cloudflare Tunnels** — exposición a internet sin abrir puertos

---

## Estructura de ficheros clave

```
src/
  pages/
    index.astro          → Fallback solo para `astro dev` (en prod nginx redirige "/" con 302)
    es/index.astro       → Página principal en español
    en/index.astro       → Página principal en inglés
    eu/index.astro       → Página principal en euskera
    {locale}/easter-egg.astro → Página secreta
    [lang]/projects/index.astro  → Índice de proyectos (/{locale}/projects/)
    [lang]/projects/[slug].astro → Página de detalle de cada proyecto (texto propio, JSON-LD, breadcrumb)
    robots.txt.ts        → robots.txt dinámico
    sitemap.xml.ts       → sitemap dinámico

  components/
    Nav.astro            → Barra de navegación + selector de idioma + toggle tema
    Hero.astro           → Sección hero: foto, nombre animado, contactos, typing effect
    Skills.astro         → Grid de skills con GSAP scroll animations
    Experience.astro     → Timeline de experiencia laboral
    Education.astro      → Educación y certificaciones
    Projects.astro       → Proyectos: servidores PiStation + carousel de webs + carousel de apps Android (Swiper, array `apps`) + apps de escritorio
    Webs.astro           → Carousel de webs públicas (soundlift, retobox, lapizarra, blindbox); se renderiza dentro de Projects
    Desktop.astro        → Tarjetas de apps de escritorio para Windows (PC Toolkit, La Estantería); dentro de Projects
    CVDownload.astro     → Botón que genera y descarga el CV en PDF
    Footer.astro         → Footer con redes sociales

  layouts/
    Layout.astro         → Layout maestro: meta tags, OG, JSON-LD, tema (previene FOUC)

  i18n/
    index.ts             → getTranslations(locale), helpers para experiencia/educación
    es.ts                → Traducciones ES + skillsData + experienceData + educationData
    en.ts                → Traducciones EN (estructura igual que es.ts)
    eu.ts                → Traducciones EU (estructura igual que es.ts)
    projects.ts          → Contenido de las páginas de proyecto (los 3 idiomas) + textos UI de esas páginas

  styles/
    global.css           → Variables CSS (--text, --accent, --bg, --border…), temas, animations globales

public/
  images/
    profile.jpg          → Foto de perfil
    counters/            → Screenshots de la app Counters
    worca/               → Screenshots de la app Worca
    soundlift/, f1/      → Logo y captura (screenshot.webp) para el carousel de webs
    nes.png              → Imagen del mando NES para el easter egg
```

---

## Sistema i18n

**Localización de contenido:**
- Todo el texto editable está en `src/i18n/{es,en,eu}.ts`
- `es.ts` es el fichero de referencia: contiene traducciones UI + `skillsData` + `experienceData` + `educationData`
- Para añadir/modificar texto: editar los 3 ficheros de idioma

**Detección de idioma (raíz `/`):**
- **Producción (nginx, `nginx.conf`):** `location = /` responde **302** a `/{locale}/`. El locale sale de:
  1. Cookie `lang` (la fija el selector de idioma de `Nav.astro` junto con `localStorage`)
  2. `Accept-Language` del navegador (`eu` → eu, `es` → es, resto → en)
  3. Sin cabecera (bots, curl) → `es`
- **Dev (`src/pages/index.astro`):** fallback con redirección JS (localStorage `lang-preference` o timezone) y `noindex`; en prod nunca se sirve.
- Motivo: la raíz era una página vacía con redirección JS, Google la trataba como soft 404 y era el destino del hreflang `x-default`. Ahora `x-default` apunta a `/es/`.

**Rutas:** Todas las páginas usan prefijo de idioma (`prefixDefaultLocale: true` en `astro.config.mjs`). El locale por defecto es `es`.

---

## Animaciones

**GSAP (entrada de elementos):**
- Hero: timeline lineal al cargar — eyebrow → nombre → rol → contactos → foto → chips de stats
- Implementado en `Hero.astro` dentro de `<script>`

**GSAP ScrollTrigger (scroll):**
- Títulos de sección y cards aparecen en stagger al hacer scroll
- Implementado en cada componente de sección (`Skills.astro`, `Experience.astro`, etc.)

**Swiper (carousel):**
- En `Projects.astro`, sección de apps Android
- Autoplay 4s, paginación, navegación, responsive (1 slide visible)

**Blobs animados:**
- Elementos decorativos en Hero con CSS keyframes (float, pulse)

---

## Despliegue

### Local (desarrollo)
```bash
npm run dev          # Astro dev server en localhost:4321
npm run build        # Build en ./dist/
npm run preview      # Preview del build
```

### Docker (entorno real)
La imagen la construye el CI común (github.com/ikerlorente11/ci): `npm run build` en cada push y, en `master`, la imagen arm64 a `ghcr.io/ikerlorente11/iker-portfolio`. En las Pis, `docker compose pull && docker compose up -d` (contenedor `iker_portfolio_prod`, puerto 8021). Ya no hay contenedor de desarrollo con hot reload: se desarrolla con `npm run dev` en local.

**Imagen (`Dockerfile`):**
- Etapa de build en la arquitectura del runner (`--platform=$BUILDPLATFORM`): `npm ci` y `astro build`
- Nginx sirve `dist/` con `nginx.conf`: 302 en `/` por idioma, SPA fallback (`try_files`), gzip, cache 1 año para assets hasheados, no-cache para HTML

### Variables de entorno
| Variable | Uso | Ejemplo |
|----------|-----|---------|
| `PUBLIC_SITE_URL` | URL base para canonical, OG tags, JSON-LD schema.org | `https://ikl.pistation.dev` |

Ficheros: `.env.development` (dev), `.env.production` (prod). Plantilla en `.env.example`.

---

## Infraestructura (PiStation)

Dos Raspberry Pi expuestas a internet mediante **Cloudflare Tunnels** — sin abrir puertos en el router.

### Túnel `pidev` → Raspberry Pi de desarrollo
| Dominio | Apunta a |
|---------|---------|
| `ikl-dev-prod.pistation.dev` | Puerto 8021 (contenedor en RPi dev) |

### Túnel `piprod` → Raspberry Pi de producción
| Dominio | Apunta a |
|---------|---------|
| `ikl.pistation.dev` | Puerto 8021 (contenedor — URL pública real) |

La configuración de los túneles es **externa al repo** (Cloudflare dashboard + `cloudflared` en cada RPi). En los RPi se despliega con `docker compose pull && docker compose up -d` (imagen del CI).

---

## Convenciones y patrones

**Añadir texto/traducción:**
1. Añadir clave en `src/i18n/es.ts`
2. Replicar clave en `src/i18n/en.ts` y `src/i18n/eu.ts`
3. Usar en el componente: `const t = getTranslations(locale)`

**Añadir una sección nueva:**
1. Crear `src/components/NuevaSeccion.astro`
2. Importar en `src/pages/{locale}/index.astro`
3. Añadir traducciones en los 3 ficheros i18n
4. Añadir link en `Nav.astro` si es necesario

**Añadir un proyecto con página propia:**
- Nueva entrada en `projects` de `src/i18n/projects.ts` con los 3 idiomas. La página, el índice, los enlaces de la home (al final de Projects) y el sitemap se generan solos.
- Las páginas de proyecto existen para SEO: dan a Google contenido único e indexable más allá de la home.

**Apps en prueba cerrada de Google Play** (LiftLog, Isaac Guide, La Estantería): sin ficha pública (Play da 404 a quien no es tester), así que su tarjeta enlaza a la página del proyecto y lleva `closedTest: true` en projects.ts. Al publicarlas en producción: añadir `play` en el array `apps` de Projects.astro, el enlace `play` en projects.ts y quitar `closedTest`.

**Experiencia:** cada entrada admite `highlights` (logros destacados, p. ej. el proyecto europeo NitroScope en Encore-Lab), que se pintan en la web y en el CV en PDF.

**SEO:** el host dev (`ikl-dev…`) lleva `X-Robots-Tag: noindex` desde nginx.conf para no competir con producción.

**Añadir una skill:**
- Editar `skillsData` en `src/i18n/es.ts` (y equivalentes en en/eu si tienen variantes)

**Añadir experiencia/educación:**
- Editar `experienceData` / `educationData` en los ficheros i18n

**Estilos:**
- Variables CSS en `src/styles/global.css` (usar siempre variables, no valores hardcoded)
- Tema claro/oscuro vía clase en `<html>` — se aplica antes del render para evitar FOUC

**Easter egg:**
- Código Konami en `src/pages/{locale}/easter-egg.astro` y lógica en `Hero.astro`
- Estado en `sessionStorage`
- Activable por teclado, tap ×5 en logo, o agitar dispositivo

---

## Scripts disponibles

```bash
npm run dev      # astro dev
npm run build    # astro build
npm run preview  # astro preview
npm run astro    # CLI de Astro
docker compose pull && docker compose up -d   # Despliegue en los RPi (imagen del CI)
```
