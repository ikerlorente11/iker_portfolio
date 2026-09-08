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
        f1: {
            title: "F1 Dash",
            description: "Telemetría y tiempos de Fórmula 1 en tiempo real. Instancia self-hosted de f1-dash",
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
        techs: ["PHP", "Angular", "Python", "FastAPI", "MySQL", "JavaScript", "Docker", "Composer", "HTML", "CSS", "AI Models"],
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
