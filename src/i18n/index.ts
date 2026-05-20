import { es, skillsData, experienceData, educationData } from "./es";
import { en } from "./en";
import { eu } from "./eu";

export type Locale = "es" | "en" | "eu";

const translations = { es, en, eu } as const;

export function getTranslations(locale: Locale) {
    return translations[locale];
}

export function getExperienceData(locale: Locale) {
    if (locale === "es") return experienceData;

    // English / Basque experience — roles and periods translated
    const enData = [
        { period: "Mar 2025 – Present", company: "Encore-Lab", role: "IT Engineer", techs: experienceData[0].techs },
        { period: "Jan 2024 – Jan 2025", company: "Cucunver", role: "Technical Leader", techs: experienceData[1].techs },
        { period: "Jan 2023 – Jan 2024", company: "Creast", role: "Technical Leader", techs: experienceData[2].techs },
        { period: "Sep 2022 – Jan 2023", company: "Serikat", role: "IT Engineer · TicketBai (Invoice management)", techs: experienceData[3].techs },
        { period: "Jan 2021 – Sep 2022", company: "Nabla Wind Power", role: "IT Engineer · Wind Energy", techs: experienceData[4].techs },
        { period: "Feb 2020 – Feb 2022", company: "TheThingsFlow", role: "Developer · Production management", techs: experienceData[5].techs },
        { period: "Nov 2017 – Jun 2018", company: "CEAP Informática", role: "Web & Multiplatform Developer", techs: experienceData[6].techs },
        { period: "Mar 2017 – May 2017", company: "Veiss", role: "Web Application Developer", techs: experienceData[7].techs },
    ];

    const euData = [
        { period: "2025eko mar. – Gaur egun", company: "Encore-Lab", role: "IT Ingeniaria", techs: experienceData[0].techs },
        { period: "2024ko urt. – 2025eko urt.", company: "Cucunver", role: "Buru Teknikoa", techs: experienceData[1].techs },
        { period: "2023ko urt. – 2024ko urt.", company: "Creast", role: "Buru Teknikoa", techs: experienceData[2].techs },
        { period: "2022ko ira. – 2023ko urt.", company: "Serikat", role: "IT Ingeniaria · TicketBai", techs: experienceData[3].techs },
        { period: "2021eko urt. – 2022ko ira.", company: "Nabla Wind Power", role: "IT Ingeniaria · Energia Eolikoa", techs: experienceData[4].techs },
        { period: "2020ko ots. – 2022ko ots.", company: "TheThingsFlow", role: "Garatzailea · Ekoizpen kudeaketa", techs: experienceData[5].techs },
        { period: "2017ko aza. – 2018ko eka.", company: "CEAP Informática", role: "Web & Multiplatforma Garatzailea", techs: experienceData[6].techs },
        { period: "2017ko mar. – 2017ko mai.", company: "Veiss", role: "Web Aplikazio Garatzailea", techs: experienceData[7].techs },
    ];

    return locale === "eu" ? euData : enData;
}

export function getEducationData(locale: Locale) {
    if (locale === "es") return educationData;

    const enData = [
        {
            period: "2018 – 2022",
            title: "Degree in Computer Engineering of Management and Information Systems",
            achievements: ["Distinction in 5 subjects", "Distinction in Degree Final Project"],
        },
        { period: "2013 – 2017", title: "Higher Technician in Multiplatform Application Development", achievements: [] },
        { period: "2013 – 2015", title: "Higher Technician in Web Application Development", achievements: [] },
    ];

    const euData = [
        {
            period: "2018 – 2022",
            title: "Kudeaketa eta Informazio Sistemetako Informatika Ingeniaritzako Gradua",
            achievements: ["Matrikula ohorezko 5 irakasgaitan", "Matrikula ohorezko Gradu Amaierako Lanean"],
        },
        { period: "2013 – 2017", title: "Goi Mailako Teknikaria Multiplatforma Aplikazioen Garapenean", achievements: [] },
        { period: "2013 – 2015", title: "Goi Mailako Teknikaria Web Aplikazioen Garapenean", achievements: [] },
    ];

    return locale === "eu" ? euData : enData;
}

export { skillsData };
