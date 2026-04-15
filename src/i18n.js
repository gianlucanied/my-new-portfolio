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
    testoPresentazione:
      " I currently work as a <span><b>Frontend Developer</b></span> at <span><b>Nuvyta</b></span>, an innovative company that develops a cloud-native clinical operating system for the healthcare sector. The platform, built on the <span><b>FHIR</b></span> data standard, helps hospitals and clinical structures digitize and optimize their care processes. I build and maintain the components and modules of the <span><b>NuPlatform</b></span> interface, working daily with Angular, TypeScript, and RxJS. I completed an intensive full stack development program at <span><b>Boolean Academy</b></span>, where I gained solid skills in modern frontend technologies.",
    pFrontend:
      "I work daily with <b>Angular</b> and <b>TypeScript</b> to build complex, scalable interfaces for a healthcare platform. I use <b>RxJS</b> for reactive data flows and state management, and <b>Lodash</b> for data manipulation. My background also includes <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>Vue.js</b>, <b>Bootstrap</b>, and <b>SASS</b>, allowing me to build intuitive and responsive user interfaces across different frameworks and contexts.",
    pProgetto:
      "I created an innovative marketplace that, thanks to a powerful API call, allows you to instantly view the updated prices of Pokémon cards, easily searchable through the search bar. A unique experience for enthusiasts who want to stay always informed!",
    pProgetto1:
      "I created a fully responsive showcase website entirely built with Vue.js. My goal was to provide an intuitive and straightforward experience for all visitors, whether on desktop or mobile devices.",
    pProgetto2:
      "I collaborated with a team to create a functional web app for finding the ideal personal trainer. For the frontend, we used Vue.js, while for the backend, we employed PHP. Database management was handled through phpMyAdmin.",
    pProgetto3:
      "As a team, we created a showcase website for a potential car rental service using Vue.js. The site includes three navigable and fully responsive pages.",
    pProgetto4:
      "All other small projects were created by me, primarily using HTML5, CSS, and JavaScript.",
    pProgetto5:
      "I developed a Pokédex using JavaScript that makes an API call to PokeAPI to retrieve Pokémon data. Then, I implemented a search bar that allows filtering Pokémon by name, returning only those that match the entered search term.",
    otherProjects: "Other projects",
  },
  it: {
    welcome: "Benvenuto",
    buttonText: "Cambia Lingua",
    home: "Home",
    services: "Servizi",
    projects: "Miei Progetti",
    contacts: "Contatti",
    testoPresentazione:
      " Lavoro attualmente come <span><b>Frontend Developer</b></span> presso <span><b>Nuvyta</b></span>, un'azienda innovativa che sviluppa un sistema operativo clinico cloud-native per il settore sanitario. La piattaforma, costruita sullo standard dati <span><b>FHIR</b></span>, aiuta ospedali e strutture cliniche a digitalizzare e ottimizzare i propri processi di cura. Mi occupo della costruzione e manutenzione dei componenti e dei moduli dell'interfaccia di <span><b>NuPlatform</b></span>, lavorando quotidianamente con Angular, TypeScript e RxJS. Ho completato un percorso intensivo di sviluppo full stack presso <span><b>Boolean Academy</b></span>, dove ho acquisito solide competenze nelle principali tecnologie frontend moderne.",
    pFrontend:
      "Lavoro quotidianamente con <b>Angular</b> e <b>TypeScript</b> per costruire interfacce complesse e scalabili per una piattaforma in ambito sanitario. Utilizzo <b>RxJS</b> per la gestione dei flussi di dati reattivi e <b>Lodash</b> per la manipolazione dei dati. Il mio background comprende anche <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>Vue.js</b>, <b>Bootstrap</b> e <b>SASS</b>, permettendomi di costruire interfacce utente intuitive e responsive in diversi framework e contesti.",
    pProgetto:
      "Ho creato un marketplace innovativo che, grazie a una potente chiamata API, consente di visualizzare istantaneamente i prezzi aggiornati delle carte dei Pokémon, facilmente ricercabili tramite la barra di ricerca. Un'esperienza unica per gli appassionati che vogliono rimanere sempre informati!",
    pProgetto1:
      "Ho creato un sito vetrina completamente responsive, realizzato interamente con Vue.js. Il mio obiettivo era quello di offrire un'esperienza intuitiva e semplice per tutti i visitatori, sia da desktop che da dispositivi mobili.",
    pProgetto2:
      "Ho creato, in collaborazione con un team, una web app funzionante per la ricerca del personal trainer ideale. Per il frontend abbiamo utilizzato Vue.js, mentre per il backend abbiamo impiegato PHP. La gestione del database è stata realizzata tramite phpMyAdmin.",
    pProgetto3:
      "In gruppo abbiamo creato un sito vetrina per un possibile Rent a car utilizzando Vue.js. Il sito contiene 3 pagine navigabili e completamente responsive.",
    pProgetto4:
      "Tutti altri piccoli progetti creati da me, principalmente utilizzando HTML5, CSS e JavaScript.",
    pProgetto5:
      "Ho realizzato un Pokédex utilizzando JavaScript che effettua una chiamata API a PokeAPI per ottenere i dati dei Pokémon. Successivamente, ho implementato una barra di ricerca che permette di filtrare i Pokémon in base al nome, restituendo solo quelli che corrispondono al termine di ricerca inserito.",
    otherProjects: "Altri progetti",
  },
};

const i18n = createI18n({
  locale: "it",
  messages,
});

export default i18n;