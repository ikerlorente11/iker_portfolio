export const es = {
    lang: "es",
    nav: {
        skills: "Conocimientos",
        experience: "Experiencia",
        education: "Formación",
        projects: "Proyectos",
    },
    hero: {
        role: "Ingeniero Informático",
        location: "Logroño, La Rioja, España",
        contact: "Contacto",
    },
    skills: {
        title: "Conocimientos",
        categories: {
            languages: "Lenguajes de Programación",
            frontend: "Frameworks Frontend",
            backend: "Frameworks Backend",
            databases: "Bases de Datos",
            devops: "DevOps & Cloud",
            tools: "Herramientas",
            ai: "Inteligencia Artificial",
        },
    },
    experience: {
        title: "Experiencia Laboral",
        technologies: "Tecnologías",
        present: "Actualidad",
    },
    education: {
        title: "Formación",
        achievements: "Logros",
    },
    projects: {
        title: "Proyectos",
        visit: "Visitar",
        download: "Ver en Play Store",
        pistation_dev: {
            title: "PiStation Dev",
            description: "Entorno de desarrollo personal",
        },
        pistation_prod: {
            title: "PiStation Prod",
            description: "Entorno de producción personal",
        },
        counters: {
            title: "Counters",
            description: "App de seguimiento de contadores",
        },
        worca: {
            title: "Worca",
            description: "App de gestión de calendarios y turnos de trabajo",
        },
        retobox: {
            title: "RetoBox",
            description: "App de retos al azar para animar fiestas y quedadas",
        },
        liftlog: {
            title: "LiftLog",
            description: "Registro de entrenos de fuerza con planes por semanas, descansos automáticos y récords",
        },
        isaacguide: {
            title: "Isaac Guide",
            description: "Guía no oficial y sin conexión de The Binding of Isaac: Repentance con un único buscador",
        },
        estanteria: {
            title: "La Estantería",
            description: "Lector de cómics, manga y libros: tus archivos, sin conexión y sin cuentas",
        },
        sections: {
            infra: "Infraestructura",
            webs: "Webs",
            android: "Apps Android",
            desktop: "Apps de escritorio",
        },
        closedTest: "En prueba cerrada",
        details: "Ver detalles",
    },
    webs: {
        visit: "Visitar",
        soundlift: {
            title: "Soundlift",
            description: "Descarga playlists de Spotify a la mejor calidad disponible: cada pista se puntúa y verifica antes de guardarse",
        },
        retobox: {
            title: "RetoBox",
            description: "Versión web de la app de retos al azar: tragaperras, dado 3D, usuarios y colecciones de retos",
        },
        lapizarra: {
            title: "La Pizarra",
            description: "Tiempos de F1, MotoGP, Moto2 y Moto3 en directo y en diferido, sincronizados con la tele: tabla de tiempos, mapa del circuito, dirección de carrera y modo sin spoilers",
        },
        blindbox: {
            title: "Blindbox",
            description: "Reúne en una sala privada las fotos y vídeos de todos los invitados; nadie los ve hasta que el creador abre la caja",
        },
    },
    desktop: {
        download: "Descargar para Windows",
        github: "Ver en GitHub",
        platform: "Windows",
        pctoolkit: {
            title: "PC Toolkit",
            description: "Utilidades para Windows con un solo instalador y un gestor en la bandeja: audio, barra de tareas, buscador, traductor y juegos",
        },
        estanteria: {
            title: "La Estantería",
            description: "La versión de escritorio del lector: tus carpetas, catálogos públicos y bibliotecas propias, con el progreso sincronizado con el móvil",
        },
    },
    footer: {
        rights: "Todos los derechos reservados",
    },
    easterEgg: {
        title: "🎮 Enhorabuena!",
        text: "Se nota que eres un experto encontrando todos los entresijos. La mayoría solo llega hasta el CV.",
    },
    langBadges: [
        { lang: "Español", level: "Nativo" },
        { lang: "Inglés", level: "Alto" },
        { lang: "Euskera", level: "Alto" },
    ],
};

export const skillsData = {
    languages: [
        { name: "PHP", level: 5 },
        { name: "Python", level: 4 },
        { name: "JavaScript", level: 5 },
        { name: "Java", level: 4 },
        { name: "TypeScript", level: 3 },
        { name: "Arduino", level: 3 },
    ],
    frontend: [
        { name: "React", level: 4 },
        { name: "Vue", level: 4 },
        { name: "Astro", level: 4 },
        { name: "Angular", level: 4 },
        { name: "React Native", level: 4 },
        { name: "Flutter", level: 3 },
        { name: "Bootstrap", level: 5 },
        { name: "Phonegap", level: 4 },
        { name: "HTML", level: 5 },
        { name: "CSS", level: 5 },
        { name: "AJAX", level: 5 },
        { name: "jQuery", level: 5 },
    ],
    backend: [
        { name: "Laravel", level: 5 },
        { name: "FastAPI", level: 4 },
    ],
    databases: [
        { name: "SQL / MySQL", level: 5 },
        { name: "MongoDB", level: 4 },
    ],
    devops: [
        { name: "Docker", level: 5 },
        { name: "Google Cloud", level: 4 },
        { name: "AWS", level: 4 },
        { name: "Azure", level: 3 },
        { name: "Vercel", level: 3 },
        { name: "Composer", level: 5 },
    ],
    tools: [
        { name: "WordPress", level: 3 },
        { name: "Android Studio", level: 4 },
        { name: "Git", level: 5 },
    ],
    ai: [
        { name: "Claude", level: 5 },
        { name: "Copilot", level: 5 },
        { name: "ChatGPT", level: 5 },
        { name: "Gemini", level: 3 },
    ],
};

export const experienceData = [
    {
        period: "Mar 2025 – Actualidad",
        company: "Encore-Lab",
        role: "Ingeniero IT",
        highlights: [
            "Proyecto europeo NitroScope (Horizonte Europa, Misión Suelo de la UE; 25 socios de 15 países): desarrollo de la tarea T5.1, arquitectura cloud y armonización de datos",
            "Plataforma de datos del consorcio: API REST con Symfony y API Platform sobre PostgreSQL, catálogo geoespacial STAC y servicio de ingesta en FastAPI, todo en Docker",
            "Unos 83.000 registros armonizados de 12 sitios experimentales europeos; hito MS4 alcanzado y presentado en la reunión de consorcio de Oslo (2026)",
        ],
        techs: ["PHP", "Symfony", "API Platform", "Angular", "Python", "FastAPI", "PostgreSQL", "MySQL", "STAC", "JavaScript", "Docker", "GitLab CI", "Composer", "HTML", "CSS", "AI Models"],
    },
    {
        period: "Ene 2024 – Ene 2025",
        company: "Cucunver",
        role: "Líder Técnico",
        techs: ["PHP", "Laravel", "MySQL", "React", "Vue", "Astro", "JavaScript", "Google Cloud", "AWS", "Vercel", "Docker", "Composer", "HTML", "CSS", "Bootstrap", "WordPress"],
    },
    {
        period: "Ene 2023 – Ene 2024",
        company: "Creast",
        role: "Líder Técnico",
        techs: ["PHP", "Laravel", "Python", "MySQL", "MongoDB", "JavaScript", "Docker", "Composer", "HTML", "CSS", "Bootstrap"],
    },
    {
        period: "Sep 2022 – Ene 2023",
        company: "Serikat",
        role: "Ingeniero IT · TicketBai (Gestión de facturas)",
        techs: ["Java", "MySQL", "JavaScript", "HTML", "CSS", "Hibernate", "AngularJS"],
    },
    {
        period: "Ene 2021 – Sep 2022",
        company: "Nabla Wind Power",
        role: "Ingeniero IT · Energía Eólica",
        techs: ["PHP", "Python", "MySQL", "MongoDB", "JavaScript", "AJAX", "jQuery", "HTML", "CSS", "Bootstrap", "XML", "Android"],
    },
    {
        period: "Feb 2020 – Feb 2022",
        company: "TheThingsFlow",
        role: "Desarrollador · Gestión de producción",
        techs: ["PHP", "Python", "MySQL", "JavaScript", "jQuery", "AJAX", "HTML", "CSS", "Bootstrap", "XML", "Phonegap", "Arduino"],
    },
    {
        period: "Nov 2017 – Jun 2018",
        company: "CEAP Informática",
        role: "Desarrollador Web y Multiplataforma",
        techs: ["PHP", "MySQL", "JavaScript", "AJAX", "jQuery", "HTML", "CSS", "Bootstrap", "XML", "Phonegap", "Velneo"],
    },
    {
        period: "Mar 2017 – May 2017",
        company: "Veiss",
        role: "Desarrollador de Aplicaciones Web",
        techs: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap", "WordPress"],
    },
];

export const educationData = [
    {
        period: "2018 – 2022",
        title: "Grado en Ingeniería Informática de Gestión y Sistemas de Información",
        achievements: ["Matrícula de honor en 5 asignaturas", "Matrícula de honor en el Trabajo Fin de Grado"],
    },
    {
        period: "2013 – 2017",
        title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
        achievements: [],
    },
    {
        period: "2013 – 2015",
        title: "Técnico Superior en Aplicaciones Web",
        achievements: [],
    },
];
