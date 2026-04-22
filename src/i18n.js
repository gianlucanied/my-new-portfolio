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

    heroSubtitle: "// Freelance Web Developer · Alghero",
    heroTitle: "I create websites<br>for your <span>business</span>", 
    heroDesc: "I build modern, fast, search-engine-optimized showcase websites for local businesses. From restaurants to gyms, from shops to hotels.",
    heroBadge1: "Frontend Developer @ Nuvyta",
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
    aboutText1: "I am a <strong>Frontend Developer</strong> from Alghero, Sardinia. By day I work at <strong>Nuvyta</strong>, a company that develops cloud-native platforms for the healthcare sector — where I build complex interfaces with Angular, TypeScript and RxJS.",
    aboutText2: "In my spare time I help <strong>local businesses</strong> build a professional online presence with fast, SEO-optimized showcase websites.",
    aboutCta: "Let's talk about your project",
    stackTag: "// Tech stack",

    contactsTag: "// Contacts",
    contactsTitle: "Got a business?<br><span>Let's talk.</span>",
    contactsSub: "I build showcase websites for local businesses in Alghero and across Sardinia. Contact me for a free quote.",

    pFrontend: "I work daily with <b>Angular</b> and <b>TypeScript</b> to build complex, scalable interfaces for a healthcare platform. I use <b>RxJS</b> for reactive data flows and <b>Lodash</b> for data manipulation. My background also includes <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>Vue.js</b>, <b>Bootstrap</b>, and <b>SASS</b>.",
  },
  it: {
    welcome: "Benvenuto",
    buttonText: "Cambia Lingua",
    home: "Home",
    services: "Servizi",
    projects: "Progetti",
    contacts: "Contatti",

    heroSubtitle: "// Web Developer Freelance · Alghero",
    heroTitle: "Creo siti web<br>per la tua <span>attività</span>",
    heroDesc: "Realizzo siti vetrina moderni, veloci e ottimizzati per le attività locali. Dal ristorante alla palestra, dal negozio all'hotel.",
    heroBadge1: "Frontend Developer @ Nuvyta",
    heroBadge2: "3+ clienti soddisfatti",
    heroBadge3: "Siti multilingue",

    servicesTitle: "Cosa posso fare per te",
    service1Title: "Sito Vetrina",
    service1Desc: "Presenti la tua attività online con un sito professionale, veloce e ottimizzato per i motori di ricerca.",
    service2Title: "Design Responsive",
    service2Desc: "Il tuo sito si adatta perfettamente a smartphone, tablet e desktop. I tuoi clienti ti trovano ovunque.",
    service3Title: "Sito Multilingue",
    service3Desc: "Raggiungi clienti in tutto il mondo con un sito disponibile in italiano, inglese e spagnolo.",
    service4Title: "SEO & Visibilità",
    service4Desc: "Ottimizzazione per i motori di ricerca per far trovare la tua attività su Google dai clienti giusti.",

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
    aboutText1: "Sono un <strong>Frontend Developer</strong> di Alghero, Sardegna. Di giorno lavoro in <strong>Nuvyta</strong>, un'azienda che sviluppa piattaforme cloud-native per il settore sanitario — dove costruisco interfacce complesse con Angular, TypeScript e RxJS.",
    aboutText2: "Nel tempo libero aiuto le <strong>attività locali</strong> a essere presenti online con siti vetrina professionali, veloci e ottimizzati per i motori di ricerca.",
    aboutCta: "Parliamo del tuo progetto",
    stackTag: "// Stack tecnico",

    contactsTag: "// Contatti",
    contactsTitle: "Hai un'attività?<br><span>Parliamone.</span>",
    contactsSub: "Realizzo siti vetrina per attività locali ad Alghero e in tutta la Sardegna. Contattami per un preventivo gratuito.",

    pFrontend: "Lavoro quotidianamente con <b>Angular</b> e <b>TypeScript</b> per costruire interfacce complesse e scalabili per una piattaforma in ambito sanitario. Utilizzo <b>RxJS</b> per la gestione dei flussi di dati reattivi e <b>Lodash</b> per la manipolazione dei dati. Il mio background comprende anche <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>Vue.js</b>, <b>Bootstrap</b> e <b>SASS</b>.",
  },
};

const i18n = createI18n({
  locale: "it",
  messages,
  warnHtmlMessage: false,
  missingWarn: false,
  fallbackWarn: false,
});

export default i18n;