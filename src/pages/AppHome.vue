<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

export default {
  name: "AppHome",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
};
</script>

<template>
  <section class="home" id="home">
    <div class="home-content">
      <h1>Hi, it's <span>Gianluca</span></h1>
      <h3 class="text-animation">I'm a <span></span></h3>
      <p>
        💁🏻‍♂️ Sono un Jr. Full Stack Web Developer, ambizioso e appassionato del
        mondo Tech in tutte le sue sfaccettature. Ho appena concluso con
        successo il corso di Boolean Academy, dove ho acquisito competenze nelle
        principali tecnologie di sviluppo sia per il Frontend che per il
        Backend. <br />💪🏻 Con una solida base di conoscenze tecniche e una forte
        predisposizione al lavoro di squadra, sono pronto ad affrontare sfide
        stimolanti nel campo dello sviluppo software.
      </p>

      <div class="social-icons">
        <a href="https://www.linkedin.com/in/gianluca-nieddu-8149a3236/"
          ><i class="fa-brands fa-linkedin"></i
        ></a>
        <a href="https://github.com/gianlucanied"
          ><i class="fa-brands fa-github"></i
        ></a>
        <a href="https://www.instagram.com/gianlucanied/"
          ><i class="fa-brands fa-instagram"></i
        ></a>
      </div>

      <div class="btn-group">
        <a href="#projects" class="btn">I miei progetti</a>
      </div>
    </div>
    <div class="home-img">
      <img src="/public/IMG_5576.jpg" alt="profile-photo" />
    </div>
  </section>

  <section data-aos="flip-up" id="services" class="services">
    <h2 class="heading">Servizi</h2>

    <div class="services-container">
      <div class="service-box">
        <div class="service-info">
          <h4>Backend Development</h4>
          <p>
            Ho studiato i linguaggi di programmazione backend PHP e Laravel,
            approfondendo le tecniche per sviluppare applicazioni web robuste e
            scalabili. Inoltre, ho acquisito competenze nell'uso di phpMyAdmin
            per la gestione e l'amministrazione dei database, garantendo una
            gestione efficiente e sicura delle informazioni.
          </p>
        </div>
      </div>
      <div class="service-box">
        <div class="service-info">
          <h4>Frontend Development</h4>
          <p>
            Ho studiato i linguaggi e le tecnologie frontend HTML, CSS,
            JavaScript, e Vue.js, approfondendo le tecniche per creare
            interfacce utente intuitive e responsive. Inoltre, ho acquisito
            competenze nell'uso di Bootstrap per sviluppare design eleganti e
            funzionali, garantendo un'esperienza utente ottimale su diverse
            piattaforme e dispositivi.
          </p>
        </div>
      </div>
    </div>
    <div data-aos="zoom-in" class="icons-container">
      <i class="bx bxl-html5"></i>
      <i class="bx bxl-css3"></i>
      <i class="bx bxl-javascript"></i>
      <i class="bx bxl-vuejs"></i>
      <i class="fa-brands fa-bootstrap"></i>
      <i class="fa-brands fa-sass"></i>
      <i class="bx bxl-php"></i>
      <i class="fa-brands fa-laravel"></i>
    </div>
  </section>

  <section data-aos="fade-up" class="testimonials" id="projects">
    <div class="testimonial-box">
      <h2 data-aos="zoom-in" class="heading">Progetti</h2>

      <div class="wrapper">
        <div class="testimonial-item">
          <swiper
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              ><img src="/public/home-padel.png" alt=""
            /></swiper-slide>
            <swiper-slide
              ><img src="/public/about-padel.png" alt="" /></swiper-slide
            ><swiper-slide
              ><img src="/public/contacts-padel.png" alt=""
            /></swiper-slide>
          </swiper>
          <h2>Padel Club Alghero</h2>
          <p>
            Ho creato un sito vetrina completamente responsive, realizzato
            interamente con Vue.js. <br />Il mio obiettivo era quello di offrire
            un'esperienza intuitiva e semplice per tutti i visitatori, sia da
            desktop che da dispositivi mobili.
          </p>
          <div class="icons-project">
            <a href="https://github.com/gianlucanied/pclub-project"
              ><i class="fa-brands fa-github"></i
            ></a>
            <a href="https://padelalghero.netlify.app/"
              ><i class="fa-solid fa-globe"></i
            ></a>
          </div>
        </div>

        <div class="testimonial-item">
          <swiper
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              ><img src="/public/homepage-btrainer.png" alt=""
            /></swiper-slide>
            <swiper-slide>
              <img src="/public/btrainer-2.png" alt="" /></swiper-slide
            ><swiper-slide>
              <img src="/public/btrainer3.png" alt=""
            /></swiper-slide>
          </swiper>
          <h2>BTrainer</h2>
          <p>
            Ho creato, in collaborazione con un team, una web app funzionante
            per la ricerca del personal trainer ideale. Per il frontend abbiamo
            utilizzato Vue.js, mentre per il backend abbiamo impiegato PHP. La
            gestione del database è stata realizzata tramite phpMyAdmin.
          </p>
          <div class="icons-project">
            <a href="https://github.com/gianlucanied/BTrainer"
              ><i class="fa-brands fa-github"></i
            ></a>
          </div>
        </div>

        <div class="testimonial-item">
          <swiper
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              ><img src="/public/hp-avada.png" alt=""
            /></swiper-slide>
            <swiper-slide
              ><img src="/public/prices-avada.png" alt="" /></swiper-slide
            ><swiper-slide
              ><img src="/public/about-avada.png" alt=""
            /></swiper-slide>
          </swiper>
          <h2>Avada Driving School</h2>
          <p>
            In gruppo abbiamo creato un sito vetrina per un possibile Rent a car
            utilizzando Vue.js. Il sito contiene 3 pagine navigabili e
            compleatmente responsive.
          </p>
          <div class="icons-project">
            <a href="https://github.com/gianlucanied/proj-html-vuejs"
              ><i class="fa-brands fa-github"></i
            ></a>
            <a href="https://avadadriving.netlify.app/"
              ><i class="fa-solid fa-globe"></i
            ></a>
          </div>
        </div>

        <div class="testimonial-item">
          <swiper
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              ><img src="/public/Discord.png" alt=""
            /></swiper-slide>
            <swiper-slide><img src="/public/Spotify.png" alt="" /></swiper-slide
            ><swiper-slide
              ><img src="/public/Boolzapp.png" alt=""
            /></swiper-slide>
            <swiper-slide><img src="/public/Dropbox.png" alt="" /></swiper-slide
            ><swiper-slide
              ><img src="/public/Social Posts.png" alt=""
            /></swiper-slide>
            <swiper-slide
              ><img src="/public/FizzBuzz.png" alt="" /></swiper-slide
            ><swiper-slide
              ><img src="/public/Biglietto treno.png" alt=""
            /></swiper-slide>
          </swiper>
          <h2>Altri progetti</h2>
          <p>
            Tutti altri piccoli progetti creati da me, principalmente
            utilizzando HTML5, CSS e JavaScript
          </p>
          <div class="icons-project">
            <a href="https://github.com/gianlucanied?tab=repositories"
              ><i class="fa-brands fa-github"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="education" id="experiences">
    <h2 data-aos="fade-up" class="heading">Esperienza</h2>

    <div class="timeline-items">
      <div data-aos="fade-right" class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2023-2024</div>
        <div class="timeline-content">
          <h3>Boolean Academy</h3>
          <p>
            Ho portato a termine un corso intensivo di 700 ore per diventare
            Junior Full Stack Web Developer, grazie al quale ho imparato le
            tecnlogie più moderne e richieste dal mercato attuale.
          </p>
        </div>
      </div>
      <div data-aos="fade-left" class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2021-2023</div>
        <div class="timeline-content">
          <h3>Consulente Assicurativo</h3>
          <p>
            Ho gestito come consulente per due anni un portafoglio clienti
            diversificato, comprendente oltre 500 clienti. Durante il mio ruolo,
            ho svolto un ruolo attivo nella gestione e nell'assistenza di ogni
            aspetto delle esigenze dei clienti, garantendo un servizio
            personalizzato e di alta qualità.
          </p>
        </div>
      </div>
      <div data-aos="fade-right" class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">2021</div>
        <div class="timeline-content">
          <h3>Responsabile di sala</h3>
          <p>
            Durante più stagioni lavorative presso un ristorante, ho sviluppato
            competenze nell'organizzazione e nella gestione delle attività
            quotidiane della sala, oltre a migliorare significativamente le mie
            soft skills, tra cui comunicazione efficace, gestione dello stress e
            capacità di problem solving.
          </p>
        </div>
      </div>
    </div>
  </section> -->
</template>

<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

html,
body {
  position: relative;
  height: 100%;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper {
  width: 240px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
</style>
