// src/i18n.js
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    welcome: "Welcome",
    buttonText: "Change Language",
    home: "Home",
    services: "Services",
    projects: "Projects",
    contacts: "Contacts",

    heroSubtitle: "// Freelance Web Developer - Alghero",
    heroTitle: "I create websites for your",
    heroTitleSpan: "business",
    heroDesc: "I build modern, fast, search-engine-optimized showcase websites for local businesses. From restaurants to gyms, from shops to hotels.",
    heroBadge1: "Frontend Developer at Nuvyta",
    heroBadge2: "3+ satisfied clients",
    heroBadge3: "Multilingual websites",

    servicesTitle: "What I can do for you",
    service1Title: "Showcase Website",
    service1Desc: "Present your business online with a professional, fast website optimized for search engines.",
    service2Title: "Responsive Design",
    service2Desc: "Your site adapts perfectly to smartphones, tablets and desktops. Your customers find you everywhere.",
    service3Title: "Multilingual Website",
    service3Desc: "Reach customers worldwide with a site available in Italian, English and Spanish.",
    service4Title: "SEO & Visibility",
    service4Desc: "Search engine optimization to help your business be found on Google by the right customers.",

    clientiTag: "// Client work",
    clientiTitle: "Websites built",
    projectType: "Showcase website",

    padelTitle: "Padel Club Alghero",
    padelDesc: "Responsive website for the padel club in Alghero. Modern design, booking section and photo gallery.",
    padelTags: "Vue.js,Responsive,SEO",

    rentTitle: "Rent a Car Express",
    rentDesc: "Multilingual website for a car rental service. Available in Italian, English and Spanish with fleet section and quotes.",
    rentTags: "Vue.js,Multilingual,Responsive",

    pesceTitle: "Il Pesce d'Oro",
    pesceDesc: "Showcase website for a seafood restaurant in Alghero. Digital menu, dish gallery and Google Maps integration.",
    pesceTags: "Vue.js,Responsive,SEO",

    visitSite: "Visit site",
    viewCode: "Code",

    aboutTag: "// About me",
    aboutText1: "I am a Frontend Developer from Alghero, Sardinia. By day I work at Nuvyta, a company that develops cloud-native platforms for the healthcare sector, where I build complex interfaces with Angular, TypeScript and RxJS.",
    aboutText2: "In my spare time I help local businesses build a professional online presence with fast, SEO-optimized showcase websites.",
    aboutCta: "Talk about your project",
    stackTag: "// Tech stack",

    contactsTag: "// Contacts",
    contactsTitle: "Got a business?",
    contactsTitleSpan: "Let's talk.",
    contactsSub: "I build showcase websites for local businesses in Alghero and across Sardinia. Contact me for a free quote.",

    pFrontend: "I work daily with Angular and TypeScript to build complex, scalable interfaces for a healthcare platform. I use RxJS for reactive data flows and Lodash for data manipulation. My background also includes HTML, CSS, JavaScript, Vue.js, Bootstrap, and SASS.",
  },
  it: {
    welcome: "Benvenuto",
    buttonText: "Cambia Lingua",
    home: "Home",
    services: "Servizi",
    projects: "Progetti",
    contacts: "Contatti",

    heroSubtitle: "// Web Developer Freelance - Alghero",
    heroTitle: "Creo siti web per la tua",
    heroTitleSpan: "attivita'",
    heroDesc: "Realizzo siti vetrina moderni, veloci e ottimizzati per le attivita' locali. Dal ristorante alla palestra, dal negozio all'hotel.",
    heroBadge1: "Frontend Developer at Nuvyta",
    heroBadge2: "3+ clienti soddisfatti",
    heroBadge3: "Siti multilingue",

    servicesTitle: "Cosa posso fare per te",
    service1Title: "Sito Vetrina",
    service1Desc: "Presenti la tua attivita' online con un sito professionale, veloce e ottimizzato per i motori di ricerca.",
    service2Title: "Design Responsive",
    service2Desc: "Il tuo sito si adatta perfettamente a smartphone, tablet e desktop. I tuoi clienti ti trovano ovunque.",
    service3Title: "Sito Multilingue",
    service3Desc: "Raggiungi clienti in tutto il mondo con un sito disponibile in italiano, inglese e spagnolo.",
    service4Title: "SEO e Visibilita'",
    service4Desc: "Ottimizzazione per i motori di ricerca per far trovare la tua attivita' su Google dai clienti giusti.",

    clientiTag: "// Lavori per clienti",
    clientiTitle: "Siti realizzati",
    projectType: "Sito vetrina",

    padelTitle: "Padel Club Alghero",
    padelDesc: "Sito responsive per il club di padel di Alghero. Design moderno, sezione prenotazioni e galleria fotografica.",
    padelTags: "Vue.js,Responsive,SEO",

    rentTitle: "Rent a Car Express",
    rentDesc: "Sito multilingue per servizio di noleggio auto. Disponibile in italiano, inglese e spagnolo con sezione flotta e preventivi.",
    rentTags: "Vue.js,Multilingue,Responsive",

    pesceTitle: "Il Pesce d'Oro",
    pesceDesc: "Sito vetrina per ristorante di pesce ad Alghero. Menu digitale, galleria piatti e integrazione Google Maps.",
    pesceTags: "Vue.js,Responsive,SEO",

    visitSite: "Visita il sito",
    viewCode: "Codice",

    aboutTag: "// Chi sono",
    aboutText1: "Sono un Frontend Developer di Alghero, Sardegna. Di giorno lavoro in Nuvyta, un'azienda che sviluppa piattaforme cloud-native per il settore sanitario, dove costruisco interfacce complesse con Angular, TypeScript e RxJS.",
    aboutText2: "Nel tempo libero aiuto le attivita' locali a essere presenti online con siti vetrina professionali, veloci e ottimizzati per i motori di ricerca.",
    aboutCta: "Parliamo del tuo progetto",
    stackTag: "// Stack tecnico",

    contactsTag: "// Contatti",
    contactsTitle: "Hai un'attivita'?",
    contactsTitleSpan: "Parliamone.",
    contactsSub: "Realizzo siti vetrina per attivita' locali ad Alghero e in tutta la Sardegna. Contattami per un preventivo gratuito.",

    pFrontend: "Lavoro quotidianamente con Angular e TypeScript per costruire interfacce complesse e scalabili per una piattaforma in ambito sanitario. Utilizzo RxJS per la gestione dei flussi di dati reattivi e Lodash per la manipolazione dei dati. Il mio background comprende anche HTML, CSS, JavaScript, Vue.js, Bootstrap e SASS.",
  },
};

const i18n = createI18n({
  locale: "it",
  legacy: false,
  messages,
  warnHtmlMessage: false,
  missingWarn: false,
  fallbackWarn: false,
});

export default i18n;