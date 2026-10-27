import type { Locale } from "./index";

// Páginas de detalle de proyecto: /{locale}/projects/{slug}/
// Aquí vive todo su contenido (no traducible arriba, textos por idioma abajo).
// Para añadir un proyecto: nueva entrada en `projects` con los 3 idiomas;
// la página, el índice y el sitemap se generan solos.

export interface ProjectLink {
    kind: "play" | "web" | "github";
    href: string;
}

export interface ProjectText {
    title: string;
    tagline: string;
    /** meta description (~150 caracteres) */
    description: string;
    intro: string[];
    features: string[];
    how: string[];
}

export interface Project {
    slug: string;
    type: "android" | "web" | "infra";
    /** schema.org applicationCategory */
    category?: string;
    logo?: string;
    /** capturas de móvil: [oscuro, claro] */
    phone?: [string, string];
    /** captura de escritorio */
    screenshot?: string;
    stack: string[];
    links: ProjectLink[];
    text: Record<Locale, ProjectText>;
}

export const projects: Project[] = [
    {
        slug: "counters",
        type: "android",
        category: "UtilitiesApplication",
        logo: "/images/counters/logo_square_round.webp",
        phone: ["/images/counters/Home_dark.webp", "/images/counters/Home_light.webp"],
        stack: ["React Native", "Expo", "JavaScript", "EAS Build", "EAS Update"],
        links: [
            { kind: "play", href: "https://play.google.com/store/apps/details?id=com.ikerlorente11.counters" },
            { kind: "github", href: "https://github.com/ikerlorente11/counters" },
        ],
        text: {
            es: {
                title: "Counters",
                tagline: "App Android para llevar la cuenta de cualquier cosa, con historial e informes anuales",
                description: "Counters, app Android de contadores de Iker Lorente: historial, informes anuales en PDF, reordenación y feedback háptico. Hecha con React Native y Expo.",
                intro: [
                    "Counters nació de una necesidad sencilla: contar cosas del día a día sin depender de una hoja de cálculo. Cada contador se suma o se resta con un toque, y la app guarda el historial para poder ver la evolución a lo largo del año.",
                    "Está publicada en Google Play y la mantengo como proyecto personal: la uso a diario y cada versión sale de algo que he echado en falta.",
                ],
                features: [
                    "Botones +/− con sonido y vibración, con volumen e intensidad ajustables",
                    "Reinicio de un contador o de todos sin perder el historial, con opción de deshacer el mismo día",
                    "Informe anual por contador, copiable al portapapeles o exportable a PDF",
                    "Reordenación por arrastrar y soltar, vista de lista o cuadrícula y archivo de contadores",
                    "Tema claro y oscuro, interfaz en castellano e inglés según el idioma del dispositivo",
                    "Escala de interfaz en cinco tamaños (xs–xl) pensada para accesibilidad",
                ],
                how: [
                    "Está hecha con React Native sobre Expo (SDK 54). Los builds de producción se generan con EAS Build y se suben a Play Console automáticamente.",
                    "Los cambios que solo tocan JavaScript llegan a los usuarios como actualizaciones OTA con EAS Update, sin pasar por la tienda; los cambios nativos sí requieren una nueva versión. El proyecto tiene lint, tests unitarios y comprobaciones de expo-doctor antes de cada release.",
                ],
            },
            en: {
                title: "Counters",
                tagline: "Android app to keep count of anything, with history and yearly reports",
                description: "Counters, an Android counter app by Iker Lorente: history, yearly PDF reports, drag-and-drop ordering and haptic feedback. Built with React Native and Expo.",
                intro: [
                    "Counters started from a simple need: counting everyday things without a spreadsheet. Each counter goes up or down with a single tap, and the app keeps its history so you can see how it evolves over the year.",
                    "It is published on Google Play and I maintain it as a personal project: I use it every day and each release comes from something I found missing.",
                ],
                features: [
                    "+/− buttons with sound and vibration, with adjustable volume and strength",
                    "Reset one counter or all of them without losing history, with same-day undo",
                    "Yearly report per counter, copied to the clipboard or exported to PDF",
                    "Drag-and-drop ordering, list or grid layout and archived counters",
                    "Light and dark theme, Spanish and English UI based on the device language",
                    "Five-step UI scale (xs–xl) for accessibility",
                ],
                how: [
                    "It is built with React Native on Expo (SDK 54). Production builds are produced with EAS Build and uploaded to Play Console automatically.",
                    "JavaScript-only changes reach users as OTA updates through EAS Update, without going through the store; native changes ship as a new version. Every release goes through lint, unit tests and expo-doctor checks.",
                ],
            },
            eu: {
                title: "Counters",
                tagline: "Edozer zenbatzeko Android aplikazioa, historiarekin eta urteko txostenekin",
                description: "Counters, Iker Lorenteren Android kontagailu aplikazioa: historia, urteko txostenak PDFn, ordenazioa eta feedback haptikoa. React Native eta Exporekin egina.",
                intro: [
                    "Counters behar sinple batetik sortu zen: eguneroko gauzak zenbatzea kalkulu-orririk gabe. Kontagailu bakoitza ukitu batekin igo edo jaisten da, eta aplikazioak historia gordetzen du urtean zehar nola aldatzen den ikusteko.",
                    "Google Playn argitaratuta dago eta proiektu pertsonal gisa mantentzen dut: egunero erabiltzen dut eta bertsio bakoitza falta nuen zerbaitetik dator.",
                ],
                features: [
                    "+/− botoiak soinu eta bibrazioarekin, bolumena eta indarra doigarriak",
                    "Kontagailu bat edo guztiak berrabiarazi historia galdu gabe, egun bereko desegitearekin",
                    "Urteko txostena kontagailu bakoitzeko, arbelera kopiatu edo PDFra esportatu daitekeena",
                    "Arrastatu eta jareginez ordenatzea, zerrenda edo sareta ikuspegia eta kontagailuen artxiboa",
                    "Gai argia eta iluna, interfazea gaztelaniaz eta ingelesez gailuaren hizkuntzaren arabera",
                    "Interfazearen eskala bost tamainatan (xs–xl), irisgarritasunerako",
                ],
                how: [
                    "React Native eta Expo (SDK 54) erabiliz egina dago. Ekoizpeneko buildak EAS Buildekin sortzen dira eta Play Consolera automatikoki igotzen dira.",
                    "JavaScript soilik ukitzen duten aldaketak OTA eguneraketa gisa iristen zaizkie erabiltzaileei EAS Updaten bidez, dendatik pasatu gabe; aldaketa natiboek bertsio berria behar dute. Bertsio bakoitzak lint, unitate-testak eta expo-doctor egiaztapenak pasatzen ditu.",
                ],
            },
        },
    },
    {
        slug: "worca",
        type: "android",
        category: "BusinessApplication",
        logo: "/images/worca/logo_square_round.webp",
        phone: ["/images/worca/Home_dark.webp", "/images/worca/Home_light.webp"],
        stack: ["React Native", "Expo", "SQLite", "Supabase", "Expo Notifications"],
        links: [
            { kind: "play", href: "https://play.google.com/store/apps/details?id=com.ikerlorente11.worca" },
        ],
        text: {
            es: {
                title: "Worca",
                tagline: "Calendario de turnos de trabajo local-first, con calendarios compartidos y recordatorios",
                description: "Worca, app Android de Iker Lorente para planificar turnos de trabajo: calendario mensual, turnos personalizados, calendarios compartidos e informes. React Native + Supabase.",
                intro: [
                    "Worca es un planificador de turnos para quien trabaja con horarios rotativos. Cada día del calendario se marca con un turno (mañana, tarde, noche, libranza, vacaciones…) definido por el propio usuario, con sus iniciales, color y horario.",
                    "Funciona sin conexión y sin cuenta: los datos viven en el móvil. Si se activa la sincronización, se puede compartir el calendario en solo lectura con pareja, familia o compañeros.",
                ],
                features: [
                    "Calendario mensual con navegación rápida y salto directo a cualquier mes",
                    "Editor de día con turno principal, turno secundario opcional, notas y recordatorio con tantos avisos previos como se quiera",
                    "Selección múltiple con pulsación larga para asignar turnos a varios días de golpe",
                    "Biblioteca de turnos con iniciales, nombre, color, horario y marcas de libranza o vacaciones",
                    "Calendarios compartidos de solo lectura: el propietario decide si se ven notas y recordatorios, y quien se suscribe puede silenciarlos",
                    "Informes de turnos y jornadas filtrables por calendario y rango de fechas",
                    "Tema claro/oscuro, castellano/inglés y escala de interfaz (S–XL) independiente del tamaño de fuente del sistema",
                ],
                how: [
                    "La app es local-first: React Native con Expo y persistencia en SQLite para turnos, calendarios y entradas diarias. Sin las variables de Supabase configuradas, funciona completamente offline.",
                    "La sincronización en la nube usa Supabase con autenticación por dispositivo: cada dispositivo se registra y se aprueba antes de sincronizar, y sube o descarga solo los datos que le pertenecen. Los recordatorios se programan como notificaciones locales del sistema.",
                ],
            },
            en: {
                title: "Worca",
                tagline: "Local-first work shift calendar, with shared calendars and reminders",
                description: "Worca, an Android app by Iker Lorente to plan work shifts: monthly calendar, custom shifts, shared calendars and reports. React Native + Supabase.",
                intro: [
                    "Worca is a shift planner for people who work rotating schedules. Each calendar day is tagged with a shift (morning, afternoon, night, day off, holiday…) defined by the user, with its own initials, colour and time range.",
                    "It works offline and without an account: data lives on the phone. With sync enabled, the calendar can be shared read-only with a partner, family or colleagues.",
                ],
                features: [
                    "Monthly calendar with quick navigation and direct jump to any month",
                    "Day editor with main shift, optional secondary shift, notes and a reminder with as many advance notices as you want",
                    "Multi-select with a long press to assign a shift to several days at once",
                    "Shift library with initials, name, colour, time range and day-off or holiday flags",
                    "Read-only shared calendars: the owner decides whether notes and reminders are visible, and subscribers can mute them",
                    "Shift and workday reports filtered by calendar and date range",
                    "Light/dark theme, Spanish/English and a UI scale (S–XL) independent of the system font size",
                ],
                how: [
                    "The app is local-first: React Native with Expo and SQLite storage for shifts, calendars and daily entries. Without the Supabase variables configured it runs fully offline.",
                    "Cloud sync uses Supabase with device-based auth: each device is registered and approved before syncing, and only pushes or pulls the data it owns. Reminders are scheduled as local system notifications.",
                ],
            },
            eu: {
                title: "Worca",
                tagline: "Lan-txanden egutegia, local-first, egutegi partekatuekin eta oroigarriekin",
                description: "Worca, Iker Lorenteren Android aplikazioa lan-txandak planifikatzeko: hileko egutegia, txanda pertsonalizatuak, egutegi partekatuak eta txostenak. React Native + Supabase.",
                intro: [
                    "Worca txanda-planifikatzaile bat da, ordutegi aldakorrekin lan egiten dutenentzat. Egutegiko egun bakoitza erabiltzaileak definitutako txanda batekin markatzen da (goiza, arratsaldea, gaua, jaieguna, oporrak…), bere inizialekin, kolorearekin eta ordutegiarekin.",
                    "Konexiorik eta konturik gabe dabil: datuak mugikorrean gordetzen dira. Sinkronizazioa aktibatuz gero, egutegia irakurtzeko moduan parteka daiteke bikotearekin, familiarekin edo lankideekin.",
                ],
                features: [
                    "Hileko egutegia, nabigazio azkarrarekin eta edozein hilabetera zuzenean joateko aukerarekin",
                    "Egunaren editorea: txanda nagusia, aukerako bigarren txanda, oharrak eta nahi adina abisu dituen oroigarria",
                    "Hautapen anitza sakatze luzearekin, hainbat egunetan txanda bera batera jartzeko",
                    "Txanden liburutegia: inizialak, izena, kolorea, ordutegia eta jaiegun edo opor markak",
                    "Irakurtzeko soilik diren egutegi partekatuak: jabeak erabakitzen du oharrak eta oroigarriak ikusten diren, eta harpidedunak isilarazi ditzake",
                    "Txanden eta lanaldien txostenak, egutegiaren eta data-tartearen arabera iragaz daitezkeenak",
                    "Gai argia/iluna, gaztelania/ingelesa eta interfazearen eskala (S–XL), sistemaren letra-tamainatik independentea",
                ],
                how: [
                    "Aplikazioa local-first da: React Native Exporekin eta SQLite biltegiratzea txandetarako, egutegietarako eta eguneko sarreretarako. Supabaseren aldagaiak konfiguratu gabe, guztiz offline dabil.",
                    "Hodeiko sinkronizazioak Supabase erabiltzen du gailuan oinarritutako autentifikazioarekin: gailu bakoitza erregistratu eta onartu egiten da sinkronizatu aurretik, eta berea den datuak soilik igo edo jaisten ditu. Oroigarriak sistemaren jakinarazpen lokal gisa programatzen dira.",
                ],
            },
        },
    },
    {
        slug: "retobox",
        type: "web",
        category: "GameApplication",
        logo: "/images/retobox/logo_square_round.webp",
        phone: ["/images/retobox/Home_dark.webp", "/images/retobox/Home_light.webp"],
        screenshot: "/images/retobox/screenshot.webp",
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "SQLite", "Expo", "Docker"],
        links: [
            { kind: "web", href: "https://retobox.pistation.dev" },
            { kind: "play", href: "https://play.google.com/store/apps/details?id=com.ikerlorente11.retobox" },
            { kind: "github", href: "https://github.com/ikerlorente11/retobox" },
        ],
        text: {
            es: {
                title: "RetoBox",
                tagline: "Retos al azar para fiestas y quedadas, en web y en app Android offline",
                description: "RetoBox, de Iker Lorente: app de retos al azar con tragaperras y dado 3D, colecciones y cuentas. Web con React + FastAPI y app Android offline con Expo.",
                intro: [
                    "RetoBox es un juego de retos al azar pensado para usar con el móvil en fiestas y quedadas. Se añaden los jugadores, se elige una colección de retos y la app sortea un reto compatible con quién está jugando, con una animación de tragaperras o de dado 3D.",
                    "Existe como web, con cuentas y colecciones públicas, y como app Android que funciona sin conexión. Las dos comparten la misma lógica de negocio.",
                ],
                features: [
                    "Revelado animado del reto: máquina tragaperras o dado 3D",
                    "Cada reto indica cuántos jugadores necesita; solo salen los que se pueden hacer con la gente disponible",
                    "Tres modos de sorteo: sin jugadores, jugadores al azar o jugadores elegidos",
                    "Anti-repetición: los retos no repetibles no vuelven a salir y los repetibles salen con probabilidad decreciente",
                    "Colecciones públicas listas para jugar (Fiesta, En familia, Cena de amigos, Oficina, Viaje…) y colecciones propias",
                    "Combos: grupos de palabras que se mezclan en varias tragaperras a la vez",
                    "Cuentas con email o Google, modo invitado que se fusiona al iniciar sesión, importación y exportación de retos",
                ],
                how: [
                    "La web es una SPA en React + Vite + TypeScript con Tailwind, Framer Motion y Zustand, sobre una API en FastAPI con SQLite. Se despliega con Docker Compose: nginx sirve la SPA y hace de proxy de /api al backend.",
                    "La app móvil está hecha con Expo y usa su propia base de datos SQLite, sin backend. La lógica del sorteo, las validaciones y las colecciones viven en un paquete TypeScript compartido (@retobox/shared) con tests de paridad contra el backend, incluidos tests estadísticos del aleatorio.",
                ],
            },
            en: {
                title: "RetoBox",
                tagline: "Random challenges for parties and get-togethers, on the web and as an offline Android app",
                description: "RetoBox by Iker Lorente: a random challenge app with slot machine and 3D dice, collections and accounts. React + FastAPI web and an offline Expo Android app.",
                intro: [
                    "RetoBox is a random challenge game meant to be played on a phone at parties and get-togethers. Add the players, pick a challenge collection and the app draws a challenge that fits who is playing, revealed with a slot machine or a 3D dice animation.",
                    "It exists as a website, with accounts and public collections, and as an Android app that works offline. Both share the same business logic.",
                ],
                features: [
                    "Animated reveal: slot machine or 3D dice",
                    "Each challenge states how many players it needs; only doable ones are drawn",
                    "Three draw modes: no players, random players or chosen players",
                    "No repeats: one-off challenges never come back and repeatable ones come up with decreasing probability",
                    "Ready-to-play public collections (Party, Family, Dinner with friends, Office, Trip…) and your own",
                    "Combos: word groups mixed across several slot machines at once",
                    "Email or Google accounts, a guest mode merged on sign-in, and challenge import/export",
                ],
                how: [
                    "The website is a React + Vite + TypeScript SPA with Tailwind, Framer Motion and Zustand, on top of a FastAPI + SQLite API. It is deployed with Docker Compose: nginx serves the SPA and proxies /api to the backend.",
                    "The mobile app is built with Expo and uses its own SQLite database, with no backend. Draw logic, validations and collections live in a shared TypeScript package (@retobox/shared) with parity tests against the backend, including statistical tests of the randomness.",
                ],
            },
            eu: {
                title: "RetoBox",
                tagline: "Ausazko erronkak jai eta topaketetarako, webean eta offline Android aplikazioan",
                description: "RetoBox, Iker Lorenterena: ausazko erronken aplikazioa txanpon-makina eta 3D dadoarekin, bildumak eta kontuak. React + FastAPI weba eta Expo Android aplikazio offlinea.",
                intro: [
                    "RetoBox ausazko erronken joko bat da, jai eta topaketetan mugikorrarekin jolasteko pentsatua. Jokalariak gehitu, erronka-bilduma bat aukeratu eta aplikazioak jokatzen ari direnei egokitzen zaien erronka bat zozketatzen du, txanpon-makina edo 3D dado animazio batekin.",
                    "Web gisa dago, kontu eta bilduma publikoekin, eta konexiorik gabe dabilen Android aplikazio gisa. Biek negozio-logika bera partekatzen dute.",
                ],
                features: [
                    "Erronkaren agerpen animatua: txanpon-makina edo 3D dadoa",
                    "Erronka bakoitzak zenbat jokalari behar dituen adierazten du; egin daitezkeenak soilik ateratzen dira",
                    "Hiru zozketa modu: jokalaririk gabe, ausazko jokalariak edo aukeratutako jokalariak",
                    "Errepikapenik ez: errepikaezinak ez dira berriro ateratzen eta errepikagarriak probabilitate beheranzkoarekin ateratzen dira",
                    "Jolasteko prest dauden bilduma publikoak (Jaia, Familian, Lagunekin afaria, Bulegoa, Bidaia…) eta norberarenak",
                    "Konbinazioak: hitz-taldeak hainbat txanpon-makinatan batera nahasten dira",
                    "Kontuak emailarekin edo Googlerekin, saioa hastean batzen den gonbidatu modua eta erronken inportazioa/esportazioa",
                ],
                how: [
                    "Weba React + Vite + TypeScript SPA bat da, Tailwind, Framer Motion eta Zustandekin, FastAPI + SQLite API baten gainean. Docker Composerekin hedatzen da: nginx-ek SPA zerbitzatzen du eta /api backendera bideratzen du.",
                    "Mugikorreko aplikazioa Exporekin egina dago eta bere SQLite datu-basea erabiltzen du, backendik gabe. Zozketaren logika, balidazioak eta bildumak TypeScript pakete partekatu batean daude (@retobox/shared), backendaren aurkako paritate-testekin, ausazkotasunaren test estatistikoak barne.",
                ],
            },
        },
    },
    {
        slug: "soundlift",
        type: "web",
        category: "MultimediaApplication",
        logo: "/images/soundlift/logo.svg",
        screenshot: "/images/soundlift/screenshot.webp",
        stack: ["Python", "API REST", "SSE", "SQLite", "WebDAV", "Docker"],
        links: [
            { kind: "web", href: "https://soundlift.pistation.dev" },
        ],
        text: {
            es: {
                title: "Soundlift",
                tagline: "Descarga de playlists a la mejor calidad disponible, con cada pista puntuada y verificada",
                description: "Soundlift, de Iker Lorente: descarga playlists a la mejor calidad disponible, puntuando y verificando cada pista. Web, API REST con eventos en tiempo real y Docker.",
                intro: [
                    "Soundlift convierte una playlist en una biblioteca de música local, cuidando la calidad. Para cada canción prueba varias fuentes en orden de calidad, empezando por las sin pérdida, y descarta directos, versiones, remixes y grabaciones con ruido.",
                    "Cada candidata se puntúa y se verifica antes de guardarse. Las dudosas quedan marcadas para revisarlas a mano desde la web, viendo las alternativas.",
                ],
                features: [
                    "Acepta enlaces de Spotify, YouTube / YouTube Music, Deezer, Apple Music y SoundCloud, o una búsqueda por artista y título",
                    "Puntuación y verificación de cada pista, con nivel de confianza y revisión de las dudosas",
                    "Organización de la lista por carpeta plana, orden de la playlist, álbum o artista, con su .m3u8",
                    "Trabajos duraderos: cerrar el navegador no para la descarga y un reinicio retoma donde se quedó",
                    "Entrega por ZIP, a una carpeta montada o por WebDAV a OpenCloud, ownCloud o Nextcloud",
                    "Modo multiusuario sobre OpenCloud, con un widget de música integrado en su web",
                ],
                how: [
                    "El núcleo está en Python y se ejecuta en Docker, con una CLI y una interfaz web sobre una API REST documentada con OpenAPI. El progreso de cada trabajo se emite en tiempo real por Server-Sent Events y cada evento se registra en SQLite, de modo que el resultado se puede consultar aunque el proceso se haya reiniciado.",
                    "En modo multiusuario delega la identidad en OpenCloud: no guarda contraseñas ni sesiones, aísla trabajos y colecciones por usuario y sube cada pista terminada al espacio personal del usuario con un token cifrado.",
                ],
            },
            en: {
                title: "Soundlift",
                tagline: "Playlist downloads at the best available quality, with every track scored and verified",
                description: "Soundlift by Iker Lorente: downloads playlists at the best available quality, scoring and verifying every track. Web UI, REST API with live events, Docker.",
                intro: [
                    "Soundlift turns a playlist into a local music library while caring about quality. For every song it tries several sources in order of quality, lossless first, and skips live recordings, covers, remixes and noisy rips.",
                    "Every candidate is scored and verified before it is saved. Doubtful ones are flagged for manual review in the web UI, with the alternatives side by side.",
                ],
                features: [
                    "Accepts Spotify, YouTube / YouTube Music, Deezer, Apple Music and SoundCloud links, or an artist and title search",
                    "Scoring and verification for every track, with a confidence level and review of doubtful ones",
                    "List layout as a flat folder, playlist order, album or artist, with its .m3u8",
                    "Durable jobs: closing the browser never stops a download and a restart resumes where it left off",
                    "Delivery as a ZIP, to a mounted folder or over WebDAV to OpenCloud, ownCloud or Nextcloud",
                    "Multi-user mode on top of OpenCloud, with a music widget built into its web UI",
                ],
                how: [
                    "The core is written in Python and runs in Docker, with a CLI and a web UI on top of a REST API documented with OpenAPI. Job progress is streamed live over Server-Sent Events and every event is journaled in SQLite, so the outcome can be read even after the process restarts.",
                    "In multi-user mode it delegates identity to OpenCloud: it stores no passwords or sessions, scopes jobs and collections per user and uploads every finished track to the user's personal space with an encrypted token.",
                ],
            },
            eu: {
                title: "Soundlift",
                tagline: "Playlistak eskuragarri dagoen kalitate onenean deskargatzea, pista bakoitza puntuatu eta egiaztatuta",
                description: "Soundlift, Iker Lorenterena: playlistak kalitate onenean deskargatzen ditu, pista bakoitza puntuatu eta egiaztatuz. Weba, API REST denbora errealeko gertaerekin, Docker.",
                intro: [
                    "Soundliftek playlist bat musika-liburutegi lokal bihurtzen du, kalitatea zainduz. Abesti bakoitzerako hainbat iturri probatzen ditu kalitatearen arabera, galerarik gabekoetatik hasita, eta zuzenekoak, bertsioak, remixak eta zarata duten grabazioak baztertzen ditu.",
                    "Hautagai bakoitza puntuatu eta egiaztatu egiten da gorde aurretik. Zalantzazkoak markatuta geratzen dira webetik eskuz berrikusteko, aukerak ondoan ikusiz.",
                ],
                features: [
                    "Spotify, YouTube / YouTube Music, Deezer, Apple Music eta SoundCloud estekak onartzen ditu, edo artista eta izenburuaren bidezko bilaketa",
                    "Pista bakoitzaren puntuazioa eta egiaztapena, konfiantza-mailarekin eta zalantzazkoen berrikuspenarekin",
                    "Zerrendaren antolaketa: karpeta laua, playlistaren ordena, albuma edo artista, bere .m3u8-arekin",
                    "Lan iraunkorrak: nabigatzailea ixteak ez du deskarga gelditzen eta berrabiarazteak utzitako lekutik jarraitzen du",
                    "Entrega ZIP bidez, muntatutako karpeta batera edo WebDAV bidez OpenCloud, ownCloud edo Nextcloudera",
                    "Erabiltzaile anitzeko modua OpenCloud gainean, bere webean integratutako musika-widget batekin",
                ],
                how: [
                    "Muina Pythonen idatzita dago eta Dockerren exekutatzen da, CLI batekin eta OpenAPIrekin dokumentatutako API REST baten gaineko web-interfaze batekin. Lan bakoitzaren aurrerapena denbora errealean igortzen da Server-Sent Events bidez eta gertaera bakoitza SQLiten erregistratzen da, prozesua berrabiarazi ondoren ere emaitza kontsulta dadin.",
                    "Erabiltzaile anitzeko moduan identitatea OpenCloudi eskuordetzen dio: ez du pasahitzik ez saiorik gordetzen, lanak eta bildumak erabiltzaileka bereizten ditu eta amaitutako pista bakoitza erabiltzailearen espazio pertsonalera igotzen du token zifratu batekin.",
                ],
            },
        },
    },
    {
        slug: "pistation",
        type: "infra",
        stack: ["Raspberry Pi", "Docker Compose", "Cloudflare Tunnels", "Tailscale", "GHCR", "Uptime Kuma", "Nginx"],
        links: [
            { kind: "web", href: "https://prod.pistation.dev" },
            { kind: "web", href: "https://dev.pistation.dev" },
        ],
        text: {
            es: {
                title: "PiStation",
                tagline: "Homelab con Raspberry Pi que aloja mis webs y servicios, sin abrir puertos al exterior",
                description: "PiStation, el homelab de Iker Lorente: Raspberry Pi con Docker Compose, Cloudflare Tunnels y Tailscale, separando desarrollo y producción. Aloja este portfolio y otros proyectos.",
                intro: [
                    "PiStation es la infraestructura casera donde despliego mis proyectos: este portfolio, RetoBox, Soundlift, una instancia de F1 Dash y servicios propios. Son varias Raspberry Pi con un reparto de papeles claro, como en un entorno profesional.",
                    "Una Pi de desarrollo para probar, una de producción que solo sirve lo que ya está validado y una tercera de soporte con monitorización y acceso remoto.",
                ],
                features: [
                    "Entornos separados: desarrollo (con hot reload y builds de prueba) y producción",
                    "Exposición a internet mediante Cloudflare Tunnels: ningún puerto abierto en el router",
                    "Acceso de administración privado por Tailscale",
                    "Producción no compila: las imágenes se publican en GitHub Container Registry y la Pi de producción solo hace pull",
                    "Un stack de Docker Compose por servicio, con secretos fuera del repositorio y datos persistentes en SSD",
                    "Monitorización de disponibilidad con Uptime Kuma y logs centralizados con Dozzle",
                ],
                how: [
                    "Toda la infraestructura está descrita como código en un repositorio: una carpeta por máquina y otra por stack, cada una con su compose.yaml. Los ficheros .env viven en un repositorio privado aparte y nunca en el principal.",
                    "Cada proyecto tiene su propio repositorio; el de infraestructura solo define cómo se despliega. Los túneles se gestionan desde Cloudflare Zero Trust, así que añadir un subdominio nuevo no requiere tocar el router ni la red local.",
                ],
            },
            en: {
                title: "PiStation",
                tagline: "A Raspberry Pi homelab that hosts my websites and services, with no ports open to the internet",
                description: "PiStation, Iker Lorente's homelab: Raspberry Pis running Docker Compose, Cloudflare Tunnels and Tailscale, with separate development and production. Hosts this portfolio and other projects.",
                intro: [
                    "PiStation is the home infrastructure where I deploy my projects: this portfolio, RetoBox, Soundlift, an F1 Dash instance and my own services. It is a set of Raspberry Pis with clearly split roles, as in a professional environment.",
                    "One Pi for development and testing, one for production that only serves what has already been validated, and a third one for support with monitoring and remote access.",
                ],
                features: [
                    "Separate environments: development (hot reload and test builds) and production",
                    "Exposed to the internet through Cloudflare Tunnels: no ports open on the router",
                    "Private admin access over Tailscale",
                    "Production never builds: images are published to GitHub Container Registry and the production Pi only pulls",
                    "One Docker Compose stack per service, secrets kept out of the repository and persistent data on SSD",
                    "Uptime monitoring with Uptime Kuma and centralised logs with Dozzle",
                ],
                how: [
                    "The whole infrastructure is described as code in a repository: one folder per machine and one per stack, each with its compose.yaml. The .env files live in a separate private repository, never in the main one.",
                    "Every project has its own repository; the infrastructure one only defines how it is deployed. Tunnels are managed from Cloudflare Zero Trust, so adding a new subdomain never requires touching the router or the local network.",
                ],
            },
            eu: {
                title: "PiStation",
                tagline: "Raspberry Pi homelaba, nire webguneak eta zerbitzuak ostatatzen dituena, kanpora atakarik ireki gabe",
                description: "PiStation, Iker Lorenteren homelaba: Raspberry Pi-ak Docker Compose, Cloudflare Tunnels eta Tailscalerekin, garapena eta ekoizpena bereizita. Portfolio hau eta beste proiektu batzuk ostatatzen ditu.",
                intro: [
                    "PiStation nire proiektuak hedatzen ditudan etxeko azpiegitura da: portfolio hau, RetoBox, Soundlift, F1 Dash instantzia bat eta zerbitzu propioak. Hainbat Raspberry Pi dira, rol argi bereiziekin, ingurune profesional batean bezala.",
                    "Pi bat garapenerako eta probetarako, bat ekoizpenerako, dagoeneko balidatutakoa soilik zerbitzatzen duena, eta hirugarren bat laguntzarako, monitorizazioarekin eta urruneko sarbidearekin.",
                ],
                features: [
                    "Ingurune bereiziak: garapena (hot reload eta proba-buildak) eta ekoizpena",
                    "Internetera Cloudflare Tunnels bidez irekita: ez dago atakarik irekita routerrean",
                    "Administrazio-sarbide pribatua Tailscale bidez",
                    "Ekoizpenak ez du konpilatzen: irudiak GitHub Container Registryn argitaratzen dira eta ekoizpeneko Pi-ak pull bakarrik egiten du",
                    "Zerbitzu bakoitzeko Docker Compose stack bat, sekretuak biltegitik kanpo eta datu iraunkorrak SSDan",
                    "Erabilgarritasunaren monitorizazioa Uptime Kumarekin eta log zentralizatuak Dozzlerekin",
                ],
                how: [
                    "Azpiegitura osoa kode gisa deskribatuta dago biltegi batean: karpeta bat makina bakoitzeko eta beste bat stack bakoitzeko, bakoitza bere compose.yaml-arekin. .env fitxategiak aparteko biltegi pribatu batean daude, inoiz ez nagusian.",
                    "Proiektu bakoitzak bere biltegia du; azpiegiturarenak nola hedatzen den soilik definitzen du. Tunelak Cloudflare Zero Trusten kudeatzen dira, beraz azpidomeinu berri bat gehitzeko ez da routerra edo sare lokala ukitu behar.",
                ],
            },
        },
    },
];

export function getProject(slug: string) {
    return projects.find((p) => p.slug === slug);
}

export const projectUi: Record<
    Locale,
    {
        home: string;
        projects: string;
        indexTitle: string;
        indexDescription: string;
        indexIntro: string;
        features: string;
        how: string;
        stack: string;
        links: string;
        others: string;
        more: string;
        all: string;
        types: Record<Project["type"], string>;
        linkLabels: Record<ProjectLink["kind"], string>;
    }
> = {
    es: {
        home: "Inicio",
        projects: "Proyectos",
        indexTitle: "Proyectos de Iker Lorente Calvo — Apps Android, webs e infraestructura",
        indexDescription: "Proyectos personales de Iker Lorente Calvo: apps Android publicadas en Google Play, webs self-hosted e infraestructura propia con Raspberry Pi y Docker.",
        indexIntro: "Proyectos personales que diseño, desarrollo y mantengo de principio a fin: apps Android publicadas en Google Play, webs que alojo yo mismo y la infraestructura sobre la que corren.",
        features: "Qué hace",
        how: "Cómo está hecho",
        stack: "Tecnologías",
        links: "Enlaces",
        others: "Otros proyectos",
        more: "Ver detalles",
        all: "Ver todos los proyectos",
        types: { android: "App Android", web: "Aplicación web", infra: "Infraestructura" },
        linkLabels: { play: "Google Play", web: "Abrir web", github: "Código en GitHub" },
    },
    en: {
        home: "Home",
        projects: "Projects",
        indexTitle: "Projects by Iker Lorente Calvo — Android apps, websites and infrastructure",
        indexDescription: "Personal projects by Iker Lorente Calvo: Android apps published on Google Play, self-hosted websites and home infrastructure built on Raspberry Pi and Docker.",
        indexIntro: "Personal projects I design, build and maintain end to end: Android apps published on Google Play, websites I host myself and the infrastructure they run on.",
        features: "What it does",
        how: "How it is built",
        stack: "Technologies",
        links: "Links",
        others: "Other projects",
        more: "View details",
        all: "View all projects",
        types: { android: "Android app", web: "Web app", infra: "Infrastructure" },
        linkLabels: { play: "Google Play", web: "Open website", github: "Code on GitHub" },
    },
    eu: {
        home: "Hasiera",
        projects: "Proiektuak",
        indexTitle: "Iker Lorente Calvoren proiektuak — Android aplikazioak, webguneak eta azpiegitura",
        indexDescription: "Iker Lorente Calvoren proiektu pertsonalak: Google Playn argitaratutako Android aplikazioak, self-hosted webguneak eta Raspberry Pi eta Dockerrekin egindako azpiegitura.",
        indexIntro: "Hasieratik bukaeraraino diseinatu, garatu eta mantentzen ditudan proiektu pertsonalak: Google Playn argitaratutako Android aplikazioak, neuk ostatatzen ditudan webguneak eta horiek exekutatzen diren azpiegitura.",
        features: "Zer egiten du",
        how: "Nola dago egina",
        stack: "Teknologiak",
        links: "Estekak",
        others: "Beste proiektu batzuk",
        more: "Xehetasunak ikusi",
        all: "Proiektu guztiak ikusi",
        types: { android: "Android aplikazioa", web: "Web aplikazioa", infra: "Azpiegitura" },
        linkLabels: { play: "Google Play", web: "Weba ireki", github: "Kodea GitHuben" },
    },
};
