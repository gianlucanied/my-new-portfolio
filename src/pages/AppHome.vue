<script>
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "AppHome",
  components: { Swiper, SwiperSlide },
  setup() {
    return { modules: [EffectCards] };
  },
  data() {
    return {
      skills: [
        { label: "Angular",    icon: "devicon-angularjs-plain",    color: "#ff4d4d", bg: "rgba(255,77,77,0.1)",    border: "rgba(255,77,77,0.35)" },
        { label: "TypeScript", icon: "devicon-typescript-plain",   color: "#3b9eff", bg: "rgba(59,158,255,0.1)",   border: "rgba(59,158,255,0.35)" },
        { label: "Vue.js",     icon: "devicon-vuejs-plain",        color: "#42d392", bg: "rgba(66,211,146,0.1)",   border: "rgba(66,211,146,0.35)" },
        { label: "JavaScript", icon: "devicon-javascript-plain",   color: "#f7df1e", bg: "rgba(247,223,30,0.1)",   border: "rgba(247,223,30,0.35)" },
        { label: "HTML5",      icon: "devicon-html5-plain",        color: "#e34f26", bg: "rgba(227,79,38,0.1)",    border: "rgba(227,79,38,0.35)" },
        { label: "CSS3",       icon: "devicon-css3-plain",         color: "#264de4", bg: "rgba(38,77,228,0.1)",    border: "rgba(38,77,228,0.35)" },
        { label: "SASS",       icon: "devicon-sass-original",      color: "#cc6699", bg: "rgba(204,102,153,0.1)",  border: "rgba(204,102,153,0.35)" },
        { label: "Bootstrap",  icon: "devicon-bootstrap-plain",    color: "#7952b3", bg: "rgba(121,82,179,0.1)",   border: "rgba(121,82,179,0.35)" },
        { label: "VS Code",    icon: "devicon-vscode-plain",       color: "#0078d7", bg: "rgba(0,120,215,0.1)",    border: "rgba(0,120,215,0.35)" },
      ],
    };
  },
  computed: {
    trackItems() {
      return [...this.skills, ...this.skills, ...this.skills, ...this.skills];
    },
    trackItemsReverse() {
      const reversed = [...this.skills].reverse();
      return [...reversed, ...reversed, ...reversed, ...reversed];
    },
  },
};
</script>

<template>
  <section class="home" id="home">
    <div class="home-content">
      <div class="home-subtitle">// Frontend Developer</div>
      <h1>Hi, it's <span>Gianluca</span></h1>
      <h3 class="text-animation">I'm a <span></span></h3>
      <p v-html="$t('testoPresentazione')"></p>

      <div class="social-icons">
        <a href="https://www.linkedin.com/in/gianluca-nieddu-8149a3236/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/gianlucanied"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/gianlucanied/"><i class="fa-brands fa-instagram"></i></a>
      </div>

      <div class="btn-group">
        <a href="#projects" class="btn">{{ $t("projects") }}</a>
        <a href="/Gianluca.Nieddu.pdf" id="cv-button" download class="btn">Download CV</a>
      </div>
    </div>

    <div class="home-img">
      <div class="img-corners">
        <span class="corner tl"></span>
        <span class="corner tr"></span>
        <span class="corner bl"></span>
        <span class="corner br"></span>
        <img src="/public/IMG_5576.jpg" alt="profile-photo" />
      </div>
    </div>
  </section>

  <section data-aos="flip-up" id="services" class="services">
    <h2 class="heading">{{ $t("services") }}</h2>

    <div class="services-container">
      <div class="service-box">
        <div class="service-info">
          <h4>Frontend Development</h4>
          <p v-html="$t('pFrontend')"></p>
        </div>
      </div>
    </div>

    <div class="skills-section" data-aos="fade-up">
      <div class="skills-label">// Stack tecnico</div>

      <div class="conveyor">
        <div class="track">
          <div
            v-for="(skill, i) in trackItems"
            :key="'t1-' + i"
            class="skill-chip"
            :style="{ background: skill.bg, borderColor: skill.border }"
          >
            <i :class="skill.icon" :style="{ color: skill.color }"></i>
            <span class="chip-name" :style="{ color: skill.color }">{{ skill.label }}</span>
          </div>
        </div>
      </div>

      <div class="conveyor conveyor-reverse">
        <div class="track-reverse">
          <div
            v-for="(skill, i) in trackItemsReverse"
            :key="'t2-' + i"
            class="skill-chip"
            :style="{ background: skill.bg, borderColor: skill.border }"
          >
            <i :class="skill.icon" :style="{ color: skill.color }"></i>
            <span class="chip-name" :style="{ color: skill.color }">{{ skill.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section data-aos="fade-up" class="testimonials" id="projects">
    <div class="testimonial-box">
      <h2 class="heading">{{ $t("projects") }}</h2>

      <div class="wrapper">

        <div class="testimonial-item">
          <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
            <swiper-slide><img src="/public/Marketplace.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/Marketplace1.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/Marketplace2.png" alt="" /></swiper-slide>
          </swiper>
          <h2>Marketplace Pokémon</h2>
          <p>{{ $t("pProgetto") }}</p>
          <div class="icons-project">
            <a href="https://github.com/gianlucanied/Pokemon-marketplace"><i class="fa-brands fa-github"></i></a>
            <a href="https://marketplacepokemon.netlify.app/"><i class="fa-solid fa-globe"></i></a>
          </div>
        </div>

        <div class="testimonial-item">
          <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
            <swiper-slide><img src="/public/home-padel.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/about-padel.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/contacts-padel.png" alt="" /></swiper-slide>
          </swiper>
          <h2>Padel Club Alghero</h2>
          <p>{{ $t("pProgetto1") }}</p>
          <div class="icons-project">
            <a href="https://github.com/gianlucanied/pclub-project"><i class="fa-brands fa-github"></i></a>
            <a href="https://padelalghero.com/"><i class="fa-solid fa-globe"></i></a>
          </div>
        </div>

        <div class="testimonial-item">
          <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
            <swiper-slide><img src="/public/Pokedex2.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/pokedex1.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/pokedex3.png" alt="" /></swiper-slide>
          </swiper>
          <h2>Pokèdex</h2>
          <p>{{ $t("pProgetto5") }}</p>
          <div class="icons-project">
            <a href="https://github.com/gianlucanied/proj-html-vuejs"><i class="fa-brands fa-github"></i></a>
            <a href="https://pokedexgnieddu.netlify.app/"><i class="fa-solid fa-globe"></i></a>
          </div>
        </div>

        <div class="testimonial-item">
          <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
            <swiper-slide><img src="/public/homepage-btrainer.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/btrainer-2.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/btrainer3.png" alt="" /></swiper-slide>
          </swiper>
          <h2>BTrainer</h2>
          <p>{{ $t("pProgetto2") }}</p>
          <div class="icons-project">
            <a href="https://github.com/gianlucanied/BTrainer"><i class="fa-brands fa-github"></i></a>
          </div>
        </div>

        <div class="testimonial-item">
          <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
            <swiper-slide><img src="/public/hp-avada.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/prices-avada.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/about-avada.png" alt="" /></swiper-slide>
          </swiper>
          <h2>Avada Driving School</h2>
          <p>{{ $t("pProgetto3") }}</p>
          <div class="icons-project">
            <a href="https://github.com/gianlucanied/proj-html-vuejs"><i class="fa-brands fa-github"></i></a>
          </div>
        </div>

        <div class="testimonial-item">
          <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
            <swiper-slide><img src="/public/Discord.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/Spotify.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/Boolzapp.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/Dropbox.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/Social Posts.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/FizzBuzz.png" alt="" /></swiper-slide>
            <swiper-slide><img src="/public/Biglietto treno.png" alt="" /></swiper-slide>
          </swiper>
          <h2>{{ $t("otherProjects") }}</h2>
          <p>{{ $t("pProgetto4") }}</p>
          <div class="icons-project">
            <a href="https://github.com/gianlucanied?tab=repositories"><i class="fa-brands fa-github"></i></a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.home-subtitle {
  font-size: 1.4rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--main-color);
  text-shadow: 0 0 10px rgba(255, 140, 0, 0.6);
  margin-bottom: 0.8rem;
}

.img-corners {
  position: relative;
  display: inline-block;
}

.corner {
  position: absolute;
  width: 16px;
  height: 16px;
  border-color: var(--main-color);
  border-style: solid;
  z-index: 2;
}
.corner.tl { top: -4px; left: -4px; border-width: 2px 0 0 2px; }
.corner.tr { top: -4px; right: -4px; border-width: 2px 2px 0 0; }
.corner.bl { bottom: -4px; left: -4px; border-width: 0 0 2px 2px; }
.corner.br { bottom: -4px; right: -4px; border-width: 0 2px 2px 0; }

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

.skills-section {
  margin-top: 6rem;
}

.skills-label {
  font-size: 1.2rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 140, 0, 0.55);
  margin-bottom: 2rem;
  text-align: center;
}

.conveyor {
  position: relative;
  overflow: hidden;
  background: var(--second-bg-color);
  border-top: 1px solid rgba(255, 140, 0, 0.2);
  border-bottom: 1px solid rgba(255, 140, 0, 0.2);
  padding: 18px 0;
}

.conveyor::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 120px;
  background: linear-gradient(90deg, var(--second-bg-color), transparent);
  z-index: 2;
  pointer-events: none;
}

.conveyor::after {
  content: '';
  position: absolute;
  right: 0; top: 0; bottom: 0;
  width: 120px;
  background: linear-gradient(270deg, var(--second-bg-color), transparent);
  z-index: 2;
  pointer-events: none;
}

.conveyor-reverse {
  margin-top: 2px;
  border-top: none;
}

.track {
  display: flex;
  gap: 20px;
  width: max-content;
  animation: scroll-right 30s linear infinite;
}

.track:hover {
  animation-play-state: paused;
}

.track-reverse {
  display: flex;
  gap: 20px;
  width: max-content;
  animation: scroll-left 36s linear infinite;
}

.track-reverse:hover {
  animation-play-state: paused;
}

@keyframes scroll-right {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scroll-left {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.skill-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 40px;
  border: 1px solid;
  cursor: pointer;
  transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
  white-space: nowrap;
  flex-shrink: 0;
}

.skill-chip:hover {
  transform: scale(1.08) translateY(-2px);
}

.skill-chip i {
  font-size: 22px;
}

.chip-name {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
}
</style>