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
      "💁🏻‍♂️ I am a Jr. Full Stack Web Developer, ambitious and passionate about the Tech world in all its facets. In April, I completed the Boolean Academy course, where I developed solid skills in the main development technologies for both Frontend and Backend. During this course, I worked on practical projects that allowed me to refine my technical abilities. <br/> Subsequently, I finished an academy with ITconsulting, where I deepened my study of Java SE and Java EE, further strengthening my knowledge of Back-End technologies. <br/>💪🏻 With a solid technical background and a strong aptitude for teamwork, I am ready to tackle stimulating challenges and grow professionally in the field of software development.",
    pBackend:
      "I have studied backend programming languages such as <b>PHP</b> and <b>Laravel</b>, delving into techniques to develop robust and scalable web applications. Additionally, I have gained skills in using <b>phpMyAdmin</b> for database management and administration, ensuring efficient and secure handling of information. I have also studied <b>Java SE</b> and <b>Java EE</b>, as well as <b>MySQL</b>, to further expand my skills in backend development and database management.",
    pFrontend:
      "I have studied frontend languages and technologies such as <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>Vue.js</b>, delving into techniques for creating intuitive and responsive user interfaces. Additionally, I have gained skills in using <b>Bootstrap</b> to develop elegant and functional designs, ensuring an optimal user experience across various platforms and devices.",
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
      "💁🏻‍♂️ Sono un Jr. Full Stack Web Developer, ambizioso e appassionato del mondo Tech in tutte le sue sfaccettature. Ad aprile, ho completato il corso della Boolean Academy, dove ho sviluppato solide competenze nelle principali tecnologie di sviluppo sia per il Frontend che per il Backend. Durante questo percorso, ho lavorato su progetti pratici che mi hanno permesso di affinare le mie abilità tecniche. <br/> Successivamente, ho concluso un'academy con ITconsulting, dove ho approfondito lo studio di Java SE e Java EE, rafforzando la mia conoscenza delle tecnologie Back-End. <br/>💪🏻 Con una solida preparazione tecnica e una forte attitudine al lavoro di squadra, sono pronto ad affrontare sfide stimolanti e crescere professionalmente nel campo dello sviluppo software.",
    pBackend:
      "Ho studiato i linguaggi di programmazione backend <b>PHP</b> e <b>Laravel</b>, approfondendo le tecniche per sviluppare applicazioni web robuste e scalabili. Inoltre, ho acquisito competenze nell'uso di <b>phpMyAdmin</b> per la gestione e l'amministrazione dei database, garantendo una gestione efficiente e sicura delle informazioni. Ho anche studiato <b>Java SE</b> e <b>Java EE</b>, oltre a <b>MySQL</b>, per ampliare ulteriormente le mie competenze nello sviluppo backend e nella gestione dei database.",
    pFrontend:
      "Ho studiato i linguaggi e le tecnologie frontend <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, e <b>Vue.js</b>, approfondendo le tecniche per creare interfacce utente intuitive e responsive. Inoltre, ho acquisito competenze nell'uso di <b>Bootstrap</b> per sviluppare design eleganti e funzionali, garantendo un'esperienza utente ottimale su diverse piattaforme e dispositivi. ",
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
