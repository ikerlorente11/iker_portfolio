# Contexto del proyecto — Iker Portfolio

Portfolio personal de Iker Lorente Calvo. Sitio estático multiidioma generado con Astro. Sin backend, sin base de datos.

---

## Qué hace la aplicación

- Muestra secciones: Hero, Skills, Experience, Education, Projects (servidores, webs y apps)
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
    robots.txt.ts        → robots.txt dinámico
    sitemap.xml.ts       → sitemap dinámico

  components/
    Nav.astro            → Barra de navegación + selector de idioma + toggle tema
    Hero.astro           → Sección hero: foto, nombre animado, contactos, typing effect
    Skills.astro         → Grid de skills con GSAP scroll animations
    Experience.astro     → Timeline de experiencia laboral
    Education.astro      → Educación y certificaciones
    Projects.astro       → Proyectos: servidores PiStation + carousel de webs + carousel de apps (Swiper)
    Webs.astro           → Carousel de webs públicas (soundlift, retobox, f1); se renderiza dentro de Projects
    CVDownload.astro     → Botón que genera y descarga el CV en PDF
    Footer.astro         → Footer con redes sociales

  layouts/
    Layout.astro         → Layout maestro: meta tags, OG, JSON-LD, tema (previene FOUC)

  i18n/
    index.ts             → getTranslations(locale), helpers para experiencia/educación
    es.ts                → Traducciones ES + skillsData + experienceData + educationData
    en.ts                → Traducciones EN (estructura igual que es.ts)
    eu.ts                → Traducciones EU (estructura igual que es.ts)

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
```bash
./build.sh [all|dev|prod]   # Por defecto: all
```

| Opción | Contenedor | Puerto | Descripción |
|--------|-----------|--------|-------------|
| `dev` | `iker_portfolio` | 8084 | Astro dev server, hot reload, volúmenes montados |
| `prod` | `iker_portfolio_prod` | 8085 | Nginx sirve build estático |
| `all` | ambos | 8084 + 8085 | Por defecto |

**Contenedor dev (`Dockerfile.dev`):**
- Node 22 Alpine, `astro dev --host 0.0.0.0`
- Volúmenes: `./src` y `./public` montados → hot reload
- File watching con polling (interval: 1s) — necesario en Docker/Windows

**Contenedor prod (`Dockerfile`):**
- Multi-stage: instala deps → copia fuentes → `docker-prod-entrypoint.sh` ejecuta `astro build` al arrancar → Nginx sirve `./dist/`
- `nginx.conf`: 302 en `/` por idioma, SPA fallback (`try_files`), gzip, cache 1 año para assets hasheados, no-cache para HTML
- ⚠️ `nginx.conf` se copia en la imagen: cambiarlo requiere `./build.sh prod` (el watcher del entrypoint solo reconstruye Astro)

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
| `ikl-dev.pistation.dev` | Puerto 8084 (contenedor dev, hot reload) |
| `ikl-dev-prod.pistation.dev` | Puerto 8085 (contenedor prod en RPi dev) |

### Túnel `piprod` → Raspberry Pi de producción
| Dominio | Apunta a |
|---------|---------|
| `ikl.pistation.dev` | Puerto 8085 (contenedor prod — URL pública real) |

La configuración de los túneles es **externa al repo** (Cloudflare dashboard + `cloudflared` en cada RPi). Solo se despliega en los RPi copiando/clonando el repo y ejecutando `./build.sh`.

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
./build.sh       # Despliegue Docker (all/dev/prod)
```
