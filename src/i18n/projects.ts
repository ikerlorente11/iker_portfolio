import type { Locale } from "./index";

// Páginas de detalle de proyecto: /{locale}/projects/{slug}/
// Aquí vive todo su contenido (no traducible arriba, textos por idioma abajo).
// Para añadir un proyecto: nueva entrada en `projects` con los 3 idiomas;
// la página, el índice y el sitemap se generan solos.

export interface ProjectLink {
    kind: "play" | "web" | "github" | "download";
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
    type: "android" | "web" | "desktop" | "infra";
    /** en prueba cerrada de Google Play: aún sin ficha pública */
    closedTest?: boolean;
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
        slug: "liftlog",
        type: "android",
        closedTest: true,
        category: "HealthApplication",
        logo: "/images/liftlog/logo_square_round.webp",
        phone: ["/images/liftlog/Home_dark.webp", "/images/liftlog/Home_dark.webp"],
        stack: ["React Native", "Expo", "TypeScript", "expo-router", "SQLite", "Zustand", "EAS Build", "EAS Update"],
        links: [
            { kind: "github", href: "https://github.com/ikerlorente11/liftlog" },
        ],
        text: {
            es: {
                title: "LiftLog",
                tagline: "Registro de entrenamientos de fuerza con planes por semanas, descansos automáticos y récords",
                description: "LiftLog, de Iker Lorente: app Android para registrar entrenos de fuerza con planes por semanas, temporizador de descanso, récords y gráficas. React Native, Expo y SQLite.",
                intro: [
                    "LiftLog nació porque la versión gratuita de las apps de gimnasio limita el número de rutinas y yo quería cargar un plan de 24 semanas completo. Es un registro de entrenamientos de fuerza rápido, sin cuentas y que funciona sin conexión.",
                    "Está en prueba cerrada en Google Play antes de su publicación. Lo uso en cada entreno y cada versión sale de algo que he echado en falta en el gimnasio.",
                ],
                features: [
                    "Rutinas ilimitadas en carpetas, con superseries, calentamientos, drop sets y descanso propio por ejercicio",
                    "Planes de varias semanas con bloques, descargas y semanas de test: la app sabe en qué semana estás",
                    "Entreno en curso con la columna «anterior», descanso automático con aviso en segundo plano y temporizador para isométricos",
                    "Progresión guiada: récords detectados al terminar y sugerencias de peso o repeticiones para la semana siguiente",
                    "Casi 900 ejercicios en castellano con imágenes, músculos e instrucciones, de una base de datos de dominio público",
                    "Gráficas de 1RM estimado, volumen y medidas corporales; copia de seguridad en JSON",
                ],
                how: [
                    "Está hecha con React Native sobre Expo, en TypeScript, con expo-router para la navegación, SQLite como base de datos local y Zustand para el estado. El plan de entrenamiento y la biblioteca de ejercicios se siembran en el primer arranque.",
                    "Los builds se generan con EAS Build y los cambios que solo tocan JavaScript llegan como actualizaciones OTA con EAS Update. La biblioteca de ejercicios sale de free-exercise-db con un script que traduce nombres e instrucciones.",
                ],
            },
            en: {
                title: "LiftLog",
                tagline: "Strength training log with week-based plans, automatic rest timers and personal records",
                description: "LiftLog by Iker Lorente: Android app to log strength workouts with week-based plans, rest timer, personal records and charts. React Native, Expo and SQLite.",
                intro: [
                    "LiftLog was born because the free tier of gym apps caps the number of routines and I wanted to load a full 24-week plan. It is a fast strength-training log, with no accounts and fully offline.",
                    "It is in closed testing on Google Play ahead of its release. I use it every workout and every version comes from something I missed at the gym.",
                ],
                features: [
                    "Unlimited routines in folders, with supersets, warm-ups, drop sets and a rest time per exercise",
                    "Multi-week plans with blocks, deloads and test weeks: the app knows which week you are on",
                    "Live workout with a 'previous' column, automatic rest timer with background alerts and a timer for isometric sets",
                    "Guided progression: records detected when you finish and weight or rep suggestions for next week",
                    "Almost 900 exercises with images, muscles and instructions, from a public-domain database",
                    "Charts for estimated 1RM, volume and body measurements; JSON backup",
                ],
                how: [
                    "It is built with React Native on Expo, in TypeScript, with expo-router for navigation, SQLite as the local database and Zustand for state. The training plan and the exercise library are seeded on first launch.",
                    "Builds are produced with EAS Build and JavaScript-only changes ship as OTA updates with EAS Update. The exercise library comes from free-exercise-db through a script that translates names and instructions.",
                ],
            },
            eu: {
                title: "LiftLog",
                tagline: "Indar-entrenamenduen erregistroa, asteka antolatutako planekin, atseden automatikoekin eta errekorrekin",
                description: "LiftLog, Iker Lorenterena: indar-entrenamenduak erregistratzeko Android aplikazioa, asteko planekin, atseden-tenporizadorearekin, errekorrekin eta grafikoekin. React Native, Expo eta SQLite.",
                intro: [
                    "LiftLog jaio zen gimnasioko aplikazioen doako bertsioak errutina kopurua mugatzen duelako eta nik 24 asteko plan osoa kargatu nahi nuelako. Indar-entrenamenduen erregistro azkarra da, konturik gabe eta konexiorik gabe dabilena.",
                    "Google Playn proba itxian dago argitaratu aurretik. Entrenamendu guztietan erabiltzen dut eta bertsio bakoitza gimnasioan faltan bota dudan zerbaitetik dator.",
                ],
                features: [
                    "Errutina mugagabeak karpetetan, supersérie, berotze, drop set eta ariketa bakoitzeko atsedenarekin",
                    "Hainbat asteko planak blokeekin, deskargekin eta test-asteekin: aplikazioak badaki zein astetan zauden",
                    "Martxan dagoen entrenamendua «aurrekoa» zutabearekin, atseden automatikoa bigarren planoko abisuekin eta isometrikoetarako tenporizadorea",
                    "Progresio gidatua: amaitzean detektatutako errekorrak eta hurrengo asterako pisu edo errepikapen iradokizunak",
                    "Ia 900 ariketa irudiekin, muskuluekin eta argibideekin, domeinu publikoko datu-base batetik",
                    "1RM estimatuaren, bolumenaren eta gorputz-neurrien grafikoak; JSON segurtasun-kopia",
                ],
                how: [
                    "React Native eta Exporekin egina dago, TypeScripten, expo-router nabigaziorako, SQLite datu-base lokal gisa eta Zustand egoerarako. Entrenamendu-plana eta ariketen liburutegia lehen abioan kargatzen dira.",
                    "Buildak EAS Buildekin sortzen dira eta JavaScript soilik ukitzen duten aldaketak OTA eguneratze gisa iristen dira EAS Updaterekin. Ariketen liburutegia free-exercise-db-tik dator, izenak eta argibideak itzultzen dituen script batekin.",
                ],
            },
        },
    },
    {
        slug: "isaacguide",
        type: "android",
        closedTest: true,
        category: "ReferenceApplication",
        logo: "/images/isaacguide/logo_square_round.webp",
        phone: ["/images/isaacguide/Home_dark.webp", "/images/isaacguide/Home_dark.webp"],
        stack: ["React Native", "Expo", "TypeScript", "Zustand", "expo-image", "Node.js", "MediaWiki API", "EAS Update"],
        links: [],
        text: {
            es: {
                title: "Isaac Guide",
                tagline: "Guía no oficial y sin conexión de The Binding of Isaac: Repentance, con un único buscador",
                description: "Isaac Guide, de Iker Lorente: guía no oficial y sin conexión de The Binding of Isaac: Repentance con casi 1.500 fichas enlazadas y un único buscador. React Native y Expo.",
                intro: [
                    "Isaac Guide reúne en una sola app casi 1.500 fichas de The Binding of Isaac: Repentance: objetos, baratijas, cartas, pastillas, personajes, jefes, pisos, retos y transformaciones. Las webs y apps que usaba tenían un buscador por tipo y no funcionaban sin conexión.",
                    "Es una guía de fan, no oficial, que está en prueba cerrada en Google Play. Todo el contenido va dentro de la app y se consulta sin internet.",
                ],
                features: [
                    "Un único buscador sobre nombres, citas, descripciones y texto completo, con resultados mientras escribes",
                    "Fichas completas: calidad, recarga, precios, desbloqueo, efectos, sinergias y estrategias",
                    "Todo enlazado: cada mención a otro objeto, jefe o piso abre su ficha, y cada ficha muestra sus relacionados",
                    "Filtro por edición del juego (Rebirth, Afterbirth, Afterbirth+, Repentance)",
                    "Interfaz, nombres y descripciones en castellano o en inglés, cada uno por separado",
                    "Tema oscuro, claro y uno de colores para cada piso del juego",
                ],
                how: [
                    "Los datos se generan en desarrollo con scripts de Node.js que leen la wiki del juego por su API de MediaWiki (wikitexto y tablas Cargo), el mod External Item Descriptions y notas de platinumgod. El resultado es un JSON de unos 9 MB y las imágenes en WebP, empaquetados con la app.",
                    "La app es React Native sobre Expo con TypeScript, Zustand y expo-image. Un índice de búsqueda propio cubre ambos idiomas, y las actualizaciones de datos llegan como OTA con EAS Update cuando el juego cambia.",
                ],
            },
            en: {
                title: "Isaac Guide",
                tagline: "Unofficial offline guide to The Binding of Isaac: Repentance, with a single search box",
                description: "Isaac Guide by Iker Lorente: an unofficial, offline guide to The Binding of Isaac: Repentance with almost 1,500 linked entries and one search box. React Native and Expo.",
                intro: [
                    "Isaac Guide gathers almost 1,500 entries of The Binding of Isaac: Repentance in a single app: items, trinkets, cards, pills, characters, bosses, floors, challenges and transformations. The sites and apps I used had one search per type and did not work offline.",
                    "It is an unofficial fan guide, now in closed testing on Google Play. All content ships inside the app and works without internet.",
                ],
                features: [
                    "One search box over names, quotes, descriptions and full text, with results as you type",
                    "Complete entries: quality, recharge, prices, unlocks, effects, synergies and strategies",
                    "Everything linked: every mention of another item, boss or floor opens its entry, and each entry lists related ones",
                    "Filter by game edition (Rebirth, Afterbirth, Afterbirth+, Repentance)",
                    "Interface, names and descriptions in Spanish or English, each set separately",
                    "Dark and light themes, plus a colour theme for each floor of the game",
                ],
                how: [
                    "The data is generated at development time by Node.js scripts that read the game wiki through its MediaWiki API (wikitext and Cargo tables), the External Item Descriptions mod and platinumgod notes. The result is a ~9 MB JSON plus WebP images bundled with the app.",
                    "The app is React Native on Expo with TypeScript, Zustand and expo-image. A custom search index covers both languages, and data updates ship as OTA updates with EAS Update when the game changes.",
                ],
            },
            eu: {
                title: "Isaac Guide",
                tagline: "The Binding of Isaac: Repentance-ren gida ez-ofiziala eta konexiorik gabekoa, bilatzaile bakar batekin",
                description: "Isaac Guide, Iker Lorenterena: The Binding of Isaac: Repentance-ren gida ez-ofiziala eta konexiorik gabekoa, ia 1.500 fitxa lotuekin eta bilatzaile bakarrarekin. React Native eta Expo.",
                intro: [
                    "Isaac Guidek The Binding of Isaac: Repentance-ren ia 1.500 fitxa biltzen ditu aplikazio bakarrean: objektuak, apaingarriak, kartak, pilulak, pertsonaiak, buruzagiak, solairuak, erronkak eta eraldaketak. Erabiltzen nituen webguneek eta aplikazioek mota bakoitzeko bilatzaile bat zuten eta ez zebiltzan konexiorik gabe.",
                    "Zale batek egindako gida ez-ofiziala da, Google Playn proba itxian. Eduki guztia aplikazioaren barruan doa eta internetik gabe kontsultatzen da.",
                ],
                features: [
                    "Bilatzaile bakarra izenetan, aipuetan, deskribapenetan eta testu osoan, idatzi ahala emaitzekin",
                    "Fitxa osoak: kalitatea, kargatzea, prezioak, desblokeoa, efektuak, sinergiak eta estrategiak",
                    "Dena lotuta: beste objektu, buruzagi edo solairu baten aipamen bakoitzak bere fitxa irekitzen du",
                    "Jokoaren edizioaren araberako iragazkia (Rebirth, Afterbirth, Afterbirth+, Repentance)",
                    "Interfazea, izenak eta deskribapenak gaztelaniaz edo ingelesez, bakoitza bere aldetik",
                    "Gai iluna, argia eta jokoaren solairu bakoitzeko kolore-gai bat",
                ],
                how: [
                    "Datuak garapenean sortzen dira Node.js scriptekin, jokoaren wikia bere MediaWiki APIaren bidez irakurriz (wikitestua eta Cargo taulak), External Item Descriptions moda eta platinumgod-en oharrak. Emaitza 9 MB inguruko JSON bat eta WebP irudiak dira, aplikazioarekin paketatuta.",
                    "Aplikazioa React Native eta Expo da, TypeScript, Zustand eta expo-imagerekin. Bilaketa-indize propio batek bi hizkuntzak hartzen ditu, eta datuen eguneraketak OTA gisa iristen dira EAS Updaterekin jokoa aldatzen denean.",
                ],
            },
        },
    },
    {
        slug: "estanteria",
        type: "android",
        closedTest: true,
        category: "BookApplication",
        logo: "/images/estanteria/logo_square_round.webp",
        phone: ["/images/estanteria/Home_dark.webp", "/images/estanteria/Home_dark.webp"],
        screenshot: "/images/estanteria/desktop.webp",
        stack: ["Vue", "TypeScript", "Expo", "Kotlin", "Tauri", "Rust", "foliate-js", "WebAssembly", "Python"],
        links: [
            { kind: "github", href: "https://github.com/ikerlorente11/estanteria" },
            { kind: "download", href: "https://github.com/ikerlorente11/pc-toolkit" },
        ],
        text: {
            es: {
                title: "La Estantería",
                tagline: "Lector de cómics, manga y libros para Android y Windows: tus archivos, sin conexión y sin cuentas",
                description: "La Estantería, de Iker Lorente: lector de cómics, manga y libros (CBZ, CBR, PDF, EPUB, MOBI, DjVu…) para Android y Windows, con catálogos públicos y bibliotecas propias.",
                intro: [
                    "La Estantería es un lector para cómics, manga y libros que funciona igual en Android y en Windows. Eliges las carpetas donde guardas tus archivos y aparecen ordenados por series, con sus portadas, listos para leer sin conexión y sin crear ninguna cuenta.",
                    "Además se conecta, si quieres, a catálogos públicos de dominio público y a bibliotecas propias (Komga, Kavita, OPDS, WebDAV o un servidor propio), con el progreso y las notas sincronizados. La app Android está en prueba cerrada en Google Play y la de escritorio se instala con PC Toolkit.",
                ],
                features: [
                    "Cómics y manga en CBZ, CBR, CB7, CBT y ZIP; libros en EPUB, MOBI, AZW3, FB2 y TXT; documentos en PDF y DjVu",
                    "Lector de cómics a una o dos páginas o en tira vertical, con sentido manga",
                    "Lector de libros con letra, tamaño, márgenes y tema a elegir, índice, marcadores, notas y subrayados",
                    "Catálogos públicos (Project Gutenberg, Internet Archive y otros) para descargar libros de dominio público",
                    "Bibliotecas propias: Komga, Kavita, OPDS, WebDAV, Suwayomi o el servidor propio, con progreso sincronizado",
                    "Sin anuncios ni analíticas, con bloqueo opcional por huella y copia de seguridad",
                ],
                how: [
                    "El visor es una aplicación Vue con TypeScript compartida por las tres plataformas. Los libros se pintan con foliate-js y los DjVu con un decodificador en Rust compilado a WebAssembly. En Android va dentro de un WebView en una app Expo con un módulo nativo en Kotlin que lee las carpetas, descomprime los archivos y renderiza los PDF.",
                    "La versión de escritorio es una app Tauri (Rust) que hace lo mismo con pdfium y descargas sin conexión. El servidor propio es un servicio en Python con su API. El visor llega por OTA a Android con EAS Update y el escritorio se publica con una release etiquetada que compila el CI.",
                ],
            },
            en: {
                title: "La Estantería",
                tagline: "Comic, manga and book reader for Android and Windows: your files, offline, no accounts",
                description: "La Estantería by Iker Lorente: a comic, manga and book reader (CBZ, CBR, PDF, EPUB, MOBI, DjVu…) for Android and Windows, with public catalogues and your own libraries.",
                intro: [
                    "La Estantería ('The Bookshelf') is a reader for comics, manga and books that works the same on Android and Windows. Pick the folders where you keep your files and they show up grouped by series, with their covers, ready to read offline and without creating any account.",
                    "It can also connect to public-domain catalogues and to your own libraries (Komga, Kavita, OPDS, WebDAV or a self-hosted server), with progress and notes in sync. The Android app is in closed testing on Google Play and the desktop app installs through PC Toolkit.",
                ],
                features: [
                    "Comics and manga in CBZ, CBR, CB7, CBT and ZIP; books in EPUB, MOBI, AZW3, FB2 and TXT; documents in PDF and DjVu",
                    "Comic reader in single page, double page or vertical strip, with manga direction",
                    "Book reader with your choice of font, size, margins and theme, plus table of contents, bookmarks, notes and highlights",
                    "Public catalogues (Project Gutenberg, Internet Archive and more) to download public-domain books",
                    "Your own libraries: Komga, Kavita, OPDS, WebDAV, Suwayomi or the self-hosted server, with progress in sync",
                    "No ads or analytics, optional biometric lock and backups",
                ],
                how: [
                    "The viewer is a Vue and TypeScript app shared by all three platforms. Books are rendered with foliate-js and DjVu files with a Rust decoder compiled to WebAssembly. On Android it runs in a WebView inside an Expo app with a native Kotlin module that reads folders, unpacks archives and renders PDFs.",
                    "The desktop version is a Tauri (Rust) app that does the same with pdfium and offline downloads. The self-hosted server is a Python service with its own API. The viewer reaches Android as an OTA update with EAS Update, and the desktop app ships as a tagged release built by CI.",
                ],
            },
            eu: {
                title: "La Estantería",
                tagline: "Komiki, manga eta liburuen irakurgailua Android eta Windowserako: zure fitxategiak, konexiorik eta konturik gabe",
                description: "La Estantería, Iker Lorenterena: komiki, manga eta liburuen irakurgailua (CBZ, CBR, PDF, EPUB, MOBI, DjVu…) Android eta Windowserako, katalogo publikoekin eta liburutegi propioekin.",
                intro: [
                    "La Estantería komiki, manga eta liburuentzako irakurgailua da, berdin dabilena Androiden eta Windowsen. Zure fitxategiak gordetzen dituzun karpetak aukeratzen dituzu eta serieka ordenatuta agertzen dira, azalekin, konexiorik gabe irakurtzeko prest eta konturik sortu gabe.",
                    "Nahi izanez gero, domeinu publikoko katalogoetara eta liburutegi propioetara ere konektatzen da (Komga, Kavita, OPDS, WebDAV edo zerbitzari propioa), aurrerapena eta oharrak sinkronizatuta. Android aplikazioa Google Playn proba itxian dago eta mahaigainekoa PC Toolkitekin instalatzen da.",
                ],
                features: [
                    "Komikiak eta manga CBZ, CBR, CB7, CBT eta ZIP formatuetan; liburuak EPUB, MOBI, AZW3, FB2 eta TXTn; dokumentuak PDF eta DjVun",
                    "Komiki-irakurgailua orri bakarrean, bi orritan edo zerrenda bertikalean, manga noranzkoarekin",
                    "Liburu-irakurgailua letra, tamaina, marjinak eta gaia aukeratuta, aurkibidea, laster-markak, oharrak eta azpimarrak",
                    "Katalogo publikoak (Project Gutenberg, Internet Archive eta beste batzuk) domeinu publikoko liburuak deskargatzeko",
                    "Liburutegi propioak: Komga, Kavita, OPDS, WebDAV, Suwayomi edo zerbitzari propioa, aurrerapena sinkronizatuta",
                    "Iragarkirik eta analitikarik gabe, aukerako hatz-marka bidezko blokeoarekin eta segurtasun-kopiarekin",
                ],
                how: [
                    "Bisorea Vue eta TypeScripteko aplikazio bat da, hiru plataformek partekatzen dutena. Liburuak foliate-js-ekin marrazten dira eta DjVu fitxategiak WebAssemblyra konpilatutako Rust deskodetzaile batekin. Androiden WebView batean doa, Expo aplikazio baten barruan, karpetak irakurri, artxiboak deskonprimatu eta PDFak errendatzen dituen Kotlin modulu natibo batekin.",
                    "Mahaigaineko bertsioa Tauri (Rust) aplikazio bat da, gauza bera egiten duena pdfium eta konexiorik gabeko deskargekin. Zerbitzari propioa Python zerbitzu bat da bere APIarekin. Bisorea OTA gisa iristen da Androidera EAS Updaterekin, eta mahaigainekoa CIak konpilatzen duen etiketadun release batekin argitaratzen da.",
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
        slug: "blindbox",
        type: "web",
        category: "MultimediaApplication",
        logo: "/images/blindbox/logo.svg",
        screenshot: "/images/blindbox/screenshot.webp",
        stack: ["Python", "FastAPI", "SQLite", "JavaScript", "OAuth 2.0", "Docker"],
        links: [
            { kind: "web", href: "https://blindbox.pistation.dev" },
        ],
        text: {
            es: {
                title: "Blindbox",
                tagline: "Salas compartidas para reunir las fotos y vídeos de todos y descubrirlos juntos al final",
                description: "Blindbox, de Iker Lorente: web para reunir en una sala privada las fotos y vídeos de una boda, un viaje o una fiesta, que nadie ve hasta que el creador abre la caja. FastAPI y Docker.",
                intro: [
                    "Blindbox reúne en una sala privada las fotos y los vídeos que hace cada invitado en una boda, un viaje o una fiesta. Cada uno sube lo suyo desde el navegador, sin instalar nada y sin cuenta, y nadie ve el contenido de los demás hasta que el creador decide abrir la caja.",
                    "Mientras la sala está cerrada solo se publican contadores agregados; al abrirla, todos pueden verlo en un visualizador a pantalla completa o descargarlo en un ZIP.",
                ],
                features: [
                    "Salas con un código de acceso para invitados y otro de creador, sin necesidad de cuenta",
                    "Subida de fotos y vídeos de hasta 1 GB por archivo, con vista previa, renombrado y reemplazo de lo propio",
                    "Contenido oculto hasta que el creador abre el visualizador, y se puede volver a cerrar",
                    "Visualizador a pantalla completa con gestos, zoom, tira de miniaturas y presentación automática",
                    "Descarga de toda la sala en un ZIP y presentación filtrando por fotos o vídeos",
                    "Cuentas opcionales (usuario y contraseña o Google) para tener las salas en todos los dispositivos",
                ],
                how: [
                    "El backend es Python con FastAPI y sirve también la interfaz, escrita en JavaScript sin framework. Los datos y archivos viven en SQLite y en un volumen de Docker; las contraseñas se guardan con scrypt y las sesiones van en una cookie HttpOnly. El acceso con Google usa OAuth 2.0 y solo aparece si está configurado.",
                    "Los códigos de sala funcionan como credenciales de portador y cada subida lleva una clave de gestión aleatoria guardada en el navegador que la hizo. Se despliega con Docker Compose en PiStation detrás de un túnel de Cloudflare.",
                ],
            },
            en: {
                title: "Blindbox",
                tagline: "Shared rooms to gather everyone's photos and videos and reveal them together at the end",
                description: "Blindbox by Iker Lorente: a web app to gather the photos and videos of a wedding, trip or party in a private room nobody sees until its creator opens the box. FastAPI and Docker.",
                intro: [
                    "Blindbox gathers the photos and videos every guest takes at a wedding, a trip or a party in one private room. Everyone uploads their own from the browser, with nothing to install and no account, and nobody sees anyone else's content until the creator decides to open the box.",
                    "While the room is closed only aggregated counters are shown; once it is open, everyone can browse it in a full-screen viewer or download it as a ZIP.",
                ],
                features: [
                    "Rooms with an access code for guests and a creator code, no account needed",
                    "Photo and video uploads of up to 1 GB per file, with preview, renaming and replacing your own uploads",
                    "Content hidden until the creator opens the viewer, and it can be closed again",
                    "Full-screen viewer with gestures, zoom, thumbnail strip and automatic slideshow",
                    "Download the whole room as a ZIP and present it filtered by photos or videos",
                    "Optional accounts (username and password or Google) to keep rooms on every device",
                ],
                how: [
                    "The backend is Python with FastAPI, which also serves the interface, written in framework-free JavaScript. Data and files live in SQLite and a Docker volume; passwords are stored with scrypt and sessions travel in an HttpOnly cookie. Google sign-in uses OAuth 2.0 and only appears when configured.",
                    "Room codes work as bearer credentials and every upload carries a random management key stored in the browser that made it. It is deployed with Docker Compose on PiStation behind a Cloudflare tunnel.",
                ],
            },
            eu: {
                title: "Blindbox",
                tagline: "Gela partekatuak denon argazkiak eta bideoak biltzeko eta amaieran elkarrekin ezagutzeko",
                description: "Blindbox, Iker Lorenterena: ezkontza, bidaia edo festa bateko argazkiak eta bideoak gela pribatu batean biltzeko weba; inork ez ditu ikusten sortzaileak kutxa ireki arte. FastAPI eta Docker.",
                intro: [
                    "Blindboxek gonbidatu bakoitzak ezkontza, bidaia edo festa batean ateratzen dituen argazkiak eta bideoak gela pribatu batean biltzen ditu. Bakoitzak berea igotzen du nabigatzailetik, ezer instalatu gabe eta konturik gabe, eta inork ez du besteen edukia ikusten sortzaileak kutxa irekitzea erabaki arte.",
                    "Gela itxita dagoen bitartean kontagailu bateratuak baino ez dira argitaratzen; ireki ondoren, denek ikus dezakete pantaila osoko ikustaile batean edo ZIP batean deskargatu.",
                ],
                features: [
                    "Gelak gonbidatuentzako sarbide-kode batekin eta sortzailearen beste batekin, konturik behar gabe",
                    "Argazki eta bideoen igoera fitxategiko 1 GBra arte, aurrebista, izena aldatzea eta norberarena ordezkatzea",
                    "Edukia ezkutatuta sortzaileak ikustailea ireki arte, eta berriro itxi daiteke",
                    "Pantaila osoko ikustailea keinuekin, zoomarekin, miniaturen zerrendarekin eta aurkezpen automatikoarekin",
                    "Gela osoa ZIP batean deskargatzea eta argazki edo bideoen arabera iragazitako aurkezpena",
                    "Aukerako kontuak (erabiltzailea eta pasahitza edo Google) gelak gailu guztietan izateko",
                ],
                how: [
                    "Backenda Python eta FastAPI da, eta interfazea ere zerbitzatzen du, frameworkik gabeko JavaScriptean idatzia. Datuak eta fitxategiak SQLiten eta Docker bolumen batean daude; pasahitzak scrypt-ekin gordetzen dira eta saioak HttpOnly cookie batean doaz. Googlerekin sartzeak OAuth 2.0 erabiltzen du eta konfiguratuta badago bakarrik agertzen da.",
                    "Gela-kodeek bearer kredentzial gisa funtzionatzen dute eta igoera bakoitzak egin zuen nabigatzailean gordetako ausazko kudeaketa-gako bat darama. Docker Composerekin hedatzen da PiStationen, Cloudflare tunel baten atzean.",
                ],
            },
        },
    },
    {
        slug: "pctoolkit",
        type: "desktop",
        category: "UtilitiesApplication",
        logo: "/images/pctoolkit/logo.webp",
        screenshot: "/images/pctoolkit/screenshot.webp",
        stack: ["PowerShell", "WPF", "XAML", "C#", "Win32 API", "GitHub Actions"],
        links: [
            { kind: "download", href: "https://github.com/ikerlorente11/pc-toolkit/releases/latest/download/PCToolkit-Setup.exe" },
            { kind: "github", href: "https://github.com/ikerlorente11/pc-toolkit" },
        ],
        text: {
            es: {
                title: "PC Toolkit",
                tagline: "Utilidades para Windows con un solo instalador y un gestor en la bandeja del sistema",
                description: "PC Toolkit, de Iker Lorente: utilidades para Windows (audio, barra de tareas, buscador, traductor, juegos…) con un instalador y un gestor en la bandeja al estilo PowerToys. PowerShell y WPF.",
                intro: [
                    "PC Toolkit es mi colección de pequeñas utilidades para Windows con un solo instalador y un gestor en la bandeja del sistema, al estilo de PowerToys, para activarlas, configurarlas, instalarlas o quitarlas.",
                    "Funciona en Windows 10 y 11 sin permisos de administrador y sin instalar nada aparte de PowerShell, que ya viene con Windows. Desde él también se instala y actualiza la versión de escritorio de La Estantería.",
                ],
                features: [
                    "Audio AutoSwitch: cambia la salida de audio al conectar auriculares y vuelve a la anterior al desconectarlos",
                    "Barra de tareas: perfiles de posición, ocultación y tamaño, con uno propio para Escritorio remoto",
                    "Buscador de archivos al instante con Everything y traductor de textos con un atajo de teclado",
                    "Juegos: quita el HDR y pone en ventana sin bordes cada juego, y un modo de arranque sin hipervisor para emuladores",
                    "LocalSend integrado en el menú Enviar a, sonidos de teclado y de conexión de dispositivos",
                    "Actualizaciones automáticas por herramienta y un instalador que siempre descarga la última versión",
                ],
                how: [
                    "Está escrito en PowerShell, con la interfaz del gestor en WPF/XAML (panel redondeado con fondo de cristal y el color de acento de Windows) y tipos en C# compilados al vuelo para llamar a la API de Win32: atajos globales, ventanas sin activar y audio.",
                    "Cada herramienta es una carpeta con su manifiesto, sus scripts de instalación y de ajustes, y lo que muestra en su tarjeta. El instalador es un pequeño ejecutable en C# y el CI de GitHub Actions publica las releases.",
                ],
            },
            en: {
                title: "PC Toolkit",
                tagline: "Windows utilities with one installer and a manager in the system tray",
                description: "PC Toolkit by Iker Lorente: Windows utilities (audio, taskbar, file search, translator, games…) with one installer and a PowerToys-style tray manager. PowerShell and WPF.",
                intro: [
                    "PC Toolkit is my collection of small Windows utilities with a single installer and a manager in the system tray, PowerToys-style, to turn them on, configure, install or remove them.",
                    "It runs on Windows 10 and 11 with no admin rights and nothing to install besides PowerShell, which ships with Windows. It also installs and updates the desktop version of La Estantería.",
                ],
                features: [
                    "Audio AutoSwitch: switches the audio output when headphones connect and goes back when they disconnect",
                    "Taskbar: position, auto-hide and size profiles, with a separate one for Remote Desktop",
                    "Instant file search with Everything and a text translator, each behind a keyboard shortcut",
                    "Games: turns HDR off and runs each game borderless, plus a hypervisor-free boot mode for emulators",
                    "LocalSend in the Send to menu, keyboard sounds and device connection sounds",
                    "Per-tool automatic updates and an installer that always downloads the latest version",
                ],
                how: [
                    "It is written in PowerShell, with the manager UI in WPF/XAML (a rounded glass panel using the Windows accent colour) and C# types compiled on the fly to call the Win32 API: global hotkeys, non-activating windows and audio.",
                    "Each tool is a folder with its manifest, install and settings scripts, and what it shows on its card. The installer is a small C# executable and GitHub Actions CI publishes the releases.",
                ],
            },
            eu: {
                title: "PC Toolkit",
                tagline: "Windowserako utilitateak, instalatzaile bakarrarekin eta sistema-erretiluko kudeatzaile batekin",
                description: "PC Toolkit, Iker Lorenterena: Windowserako utilitateak (audioa, ataza-barra, bilatzailea, itzultzailea, jokoak…) instalatzaile batekin eta PowerToys estiloko erretiluko kudeatzailearekin. PowerShell eta WPF.",
                intro: [
                    "PC Toolkit Windowserako utilitate txikien nire bilduma da, instalatzaile bakarrarekin eta sistema-erretiluko kudeatzaile batekin, PowerToysen estiloan, horiek aktibatu, konfiguratu, instalatu edo kentzeko.",
                    "Windows 10 eta 11n dabil, administratzaile-baimenik gabe eta PowerShell ez den beste ezer instalatu gabe. La Estanteríaren mahaigaineko bertsioa ere hortik instalatu eta eguneratzen da.",
                ],
                features: [
                    "Audio AutoSwitch: entzungailuak konektatzean audio-irteera aldatzen du eta deskonektatzean aurrekora itzultzen da",
                    "Ataza-barra: posizio, ezkutatze eta tamaina profilak, Urruneko mahaigainerako bereziki bat",
                    "Fitxategien berehalako bilatzailea Everythingekin eta testu-itzultzailea, bakoitza lasterbide batekin",
                    "Jokoak: HDRa kentzen du eta joko bakoitza ertzik gabeko leihoan jartzen du, eta hipervisorerik gabeko abio-modua emuladoreentzat",
                    "LocalSend Bidali menuan, teklatuaren soinuak eta gailuak konektatzeko soinuak",
                    "Tresna bakoitzeko eguneratze automatikoak eta beti azken bertsioa deskargatzen duen instalatzailea",
                ],
                how: [
                    "PowerShellen idatzita dago, kudeatzailearen interfazea WPF/XAMLen (kristal-hondoko panel biribildua Windowsen azentu-kolorearekin) eta hegan konpilatutako C# motekin Win32 APIari deitzeko: lasterbide globalak, aktibatzen ez diren leihoak eta audioa.",
                    "Tresna bakoitza karpeta bat da bere manifestuarekin, instalazio- eta ezarpen-scriptekin eta bere txartelean erakusten duenarekin. Instalatzailea C#-eko exekutagarri txiki bat da eta GitHub Actions CIak argitaratzen ditu releaseak.",
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
                    "PiStation es la infraestructura casera donde despliego mis proyectos: este portfolio, RetoBox, Soundlift, Blindbox, La Pizarra (tiempos de F1 y MotoGP) y servicios propios. Son varias Raspberry Pi con un reparto de papeles claro, como en un entorno profesional.",
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
                    "PiStation is the home infrastructure where I deploy my projects: this portfolio, RetoBox, Soundlift, Blindbox, La Pizarra (F1 and MotoGP timing) and my own services. It is a set of Raspberry Pis with clearly split roles, as in a professional environment.",
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
                    "PiStation nire proiektuak hedatzen ditudan etxeko azpiegitura da: portfolio hau, RetoBox, Soundlift, Blindbox, La Pizarra (F1 eta MotoGPko denborak) eta zerbitzu propioak. Hainbat Raspberry Pi dira, rol argi bereiziekin, ingurune profesional batean bezala.",
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
        closedTest: string;
        types: Record<Project["type"], string>;
        linkLabels: Record<ProjectLink["kind"], string>;
    }
> = {
    es: {
        home: "Inicio",
        projects: "Proyectos",
        indexTitle: "Proyectos de Iker Lorente Calvo — Apps Android, webs, apps de escritorio e infraestructura",
        indexDescription: "Proyectos personales de Iker Lorente Calvo: apps Android en Google Play, webs self-hosted, apps de escritorio para Windows e infraestructura propia con Raspberry Pi y Docker.",
        indexIntro: "Proyectos personales que diseño, desarrollo y mantengo de principio a fin: apps Android en Google Play, webs que alojo yo mismo, apps de escritorio para Windows y la infraestructura sobre la que corren.",
        features: "Qué hace",
        how: "Cómo está hecho",
        stack: "Tecnologías",
        links: "Enlaces",
        others: "Otros proyectos",
        more: "Ver detalles",
        all: "Ver todos los proyectos",
        closedTest: "En prueba cerrada en Google Play",
        types: { android: "App Android", web: "Aplicación web", desktop: "App de escritorio", infra: "Infraestructura" },
        linkLabels: { play: "Google Play", web: "Abrir web", github: "Código en GitHub", download: "Descargar para Windows" },
    },
    en: {
        home: "Home",
        projects: "Projects",
        indexTitle: "Projects by Iker Lorente Calvo — Android apps, websites, desktop apps and infrastructure",
        indexDescription: "Personal projects by Iker Lorente Calvo: Android apps on Google Play, self-hosted websites, Windows desktop apps and home infrastructure built on Raspberry Pi and Docker.",
        indexIntro: "Personal projects I design, build and maintain end to end: Android apps on Google Play, websites I host myself, Windows desktop apps and the infrastructure they run on.",
        features: "What it does",
        how: "How it is built",
        stack: "Technologies",
        links: "Links",
        others: "Other projects",
        more: "View details",
        all: "View all projects",
        closedTest: "In closed testing on Google Play",
        types: { android: "Android app", web: "Web app", desktop: "Desktop app", infra: "Infrastructure" },
        linkLabels: { play: "Google Play", web: "Open website", github: "Code on GitHub", download: "Download for Windows" },
    },
    eu: {
        home: "Hasiera",
        projects: "Proiektuak",
        indexTitle: "Iker Lorente Calvoren proiektuak — Android aplikazioak, webguneak, mahaigaineko aplikazioak eta azpiegitura",
        indexDescription: "Iker Lorente Calvoren proiektu pertsonalak: Google Playko Android aplikazioak, self-hosted webguneak, Windowserako mahaigaineko aplikazioak eta Raspberry Pi eta Dockerrekin egindako azpiegitura.",
        indexIntro: "Hasieratik bukaeraraino diseinatu, garatu eta mantentzen ditudan proiektu pertsonalak: Google Playko Android aplikazioak, neuk ostatatzen ditudan webguneak, Windowserako mahaigaineko aplikazioak eta horiek exekutatzen diren azpiegitura.",
        features: "Zer egiten du",
        how: "Nola dago egina",
        stack: "Teknologiak",
        links: "Estekak",
        others: "Beste proiektu batzuk",
        more: "Xehetasunak ikusi",
        all: "Proiektu guztiak ikusi",
        closedTest: "Google Playn proba itxian",
        types: { android: "Android aplikazioa", web: "Web aplikazioa", desktop: "Mahaigaineko aplikazioa", infra: "Azpiegitura" },
        linkLabels: { play: "Google Play", web: "Weba ireki", github: "Kodea GitHuben", download: "Windowserako deskargatu" },
    },
};
