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
      "💁🏻‍♂️ I am currently a Product Owner at <span><b>AirBanker</b></span>, a startup dedicated to financial consulting and education. In this role, I manage the design and implementation of the platform's key features, driving my commitment to effective digital solutions. As a Full Stack Developer, I combine my passion with solid skills in the tech industry, cultivated through an intensive program at the <span><b>Boolean Academy</b></span>, where I gained proficiency in the main Frontend and Backend development technologies. I also completed an academy with <span><b>ITconsulting</b></span>, where I strengthened my knowledge of Java SE and Java EE, focusing on Back-End development.",
    pBackend:
      "I have studied backend programming languages such as <b>PHP</b> and <b>Laravel</b>, delving into techniques to develop robust and scalable web applications. Additionally, I have gained skills in using <b>phpMyAdmin</b> for database management and administration, ensuring efficient and secure handling of information. I have also studied <b>Java SE</b> and <b>Java EE</b>, as well as <b>MySQL</b>, to further expand my skills in backend development and database management.",
    pFrontend:
      "I have studied frontend languages and technologies such as <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>Vue.js</b>, delving into techniques for creating intuitive and responsive user interfaces. Additionally, I have gained skills in using <b>Bootstrap</b> to develop elegant and functional designs, ensuring an optimal user experience across various platforms and devices.",
    pProgetto: "I created an innovative marketplace that, thanks to a powerful API call, allows you to instantly view the updated prices of Pokémon cards, easily searchable through the search bar. A unique experience for enthusiasts who want to stay always informed!",
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
      "💁🏻‍♂️ Attualmente sono Product Owner per <span><b>AirBanker</b></span>, una startup dedicata alla consulenza e formazione finanziaria. In questo ruolo, gestisco la progettazione e implementazione delle funzionalità principali della piattaforma, portando avanti il mio impegno verso soluzioni digitali efficaci. Come Full Stack Developer, unisco passione e competenze solide nel settore tech, coltivate attraverso un percorso intensivo alla <span><b>Boolean Academy</b></span>, dove ho acquisito padronanza nelle principali tecnologie di sviluppo Frontend e Backend. Ho inoltre completato un’academy con <span><b>ITconsulting</b></span>, dove ho consolidato le mie conoscenze in Java SE e Java EE, con un focus sul Back-End. ",
    pBackend:
      "Ho studiato i linguaggi di programmazione backend <b>PHP</b> e <b>Laravel</b>, approfondendo le tecniche per sviluppare applicazioni web robuste e scalabili. Inoltre, ho acquisito competenze nell'uso di <b>phpMyAdmin</b> per la gestione e l'amministrazione dei database, garantendo una gestione efficiente e sicura delle informazioni. Ho anche studiato <b>Java SE</b> e <b>Java EE</b>, oltre a <b>MySQL</b>, per ampliare ulteriormente le mie competenze nello sviluppo backend e nella gestione dei database.",
    pFrontend:
      "Ho studiato i linguaggi e le tecnologie frontend <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, e <b>Vue.js</b>, approfondendo le tecniche per creare interfacce utente intuitive e responsive. Inoltre, ho acquisito competenze nell'uso di <b>Bootstrap</b> per sviluppare design eleganti e funzionali, garantendo un'esperienza utente ottimale su diverse piattaforme e dispositivi. ",
    pProgetto: "Ho creato un marketplace innovativo che, grazie a una potente chiamata API, consente di visualizzare istantaneamente i prezzi aggiornati delle carte dei Pokémon, facilmente ricercabili tramite la barra di ricerca. Un'esperienza unica per gli appassionati che vogliono rimanere sempre informati!",
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
