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
        { label: "Angular",    icon: "devicon-angularjs-plain",  color: "#ff4d4d", bg: "rgba(255,77,77,0.1)",   border: "rgba(255,77,77,0.35)" },
        { label: "TypeScript", icon: "devicon-typescript-plain", color: "#3b9eff", bg: "rgba(59,158,255,0.1)",  border: "rgba(59,158,255,0.35)" },
        { label: "Vue.js",     icon: "devicon-vuejs-plain",      color: "#42d392", bg: "rgba(66,211,146,0.1)",  border: "rgba(66,211,146,0.35)" },
        { label: "JavaScript", icon: "devicon-javascript-plain", color: "#f7df1e", bg: "rgba(247,223,30,0.1)",  border: "rgba(247,223,30,0.35)" },
        { label: "HTML5",      icon: "devicon-html5-plain",      color: "#e34f26", bg: "rgba(227,79,38,0.1)",   border: "rgba(227,79,38,0.35)" },
        { label: "CSS3",       icon: "devicon-css3-plain",       color: "#264de4", bg: "rgba(38,77,228,0.1)",   border: "rgba(38,77,228,0.35)" },
        { label: "SASS",       icon: "devicon-sass-original",    color: "#cc6699", bg: "rgba(204,102,153,0.1)", border: "rgba(204,102,153,0.35)" },
        { label: "Bootstrap",  icon: "devicon-bootstrap-plain",  color: "#7952b3", bg: "rgba(121,82,179,0.1)",  border: "rgba(121,82,179,0.35)" },
        { label: "VS Code",    icon: "devicon-vscode-plain",     color: "#0078d7", bg: "rgba(0,120,215,0.1)",   border: "rgba(0,120,215,0.35)" },
      ],
      projects: [
        {
          featured: true,
          title: "Marketplace Pokémon",
          descKey: "pProgetto",
          tags: ["Vue.js", "API"],
          github: "https://github.com/gianlucanied/Pokemon-marketplace",
          live: "https://marketplacepokemon.netlify.app/",
          slides: ["Marketplace.png", "Marketplace1.png", "Marketplace2.png"],
        },
        {
          featured: true,
          title: "Padel Club Alghero",
          descKey: "pProgetto1",
          tags: ["Vue.js", "Responsive"],
          github: "https://github.com/gianlucanied/pclub-project",
          live: "https://padelalghero.com/",
          slides: ["home-padel.png", "about-padel.png", "contacts-padel.png"],
        },
        {
          featured: false,
          title: "Pokèdex",
          descKey: "pProgetto5",
          tags: ["Vue.js", "PokeAPI"],
          github: "https://github.com/gianlucanied/proj-html-vuejs",
          live: "https://pokedexgnieddu.netlify.app/",
          slides: ["Pokedex2.png", "pokedex1.png", "pokedex3.png"],
        },
        {
          featured: false,
          title: "BTrainer",
          descKey: "pProgetto2",
          tags: ["Vue.js", "PHP"],
          github: "https://github.com/gianlucanied/BTrainer",
          live: null,
          slides: ["homepage-btrainer.png", "btrainer-2.png", "btrainer3.png"],
        },
        {
          featured: false,
          title: "Avada Driving School",
          descKey: "pProgetto3",
          tags: ["Vue.js"],
          github: "https://github.com/gianlucanied/proj-html-vuejs",
          live: null,
          slides: ["hp-avada.png", "prices-avada.png", "about-avada.png"],
        },
        {
          featured: false,
          title: null,
          descKey: "pProgetto4",
          tags: ["HTML5", "CSS", "JS"],
          github: "https://github.com/gianlucanied?tab=repositories",
          live: null,
          slides: ["Discord.png", "Spotify.png", "Boolzapp.png", "Dropbox.png", "Social Posts.png", "FizzBuzz.png", "Biglietto treno.png"],
        },
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
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      const canvas = this.$refs.particles;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      const dots = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        o: Math.random() * 0.4 + 0.1,
      }));

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dots.forEach(d => {
          ctx.beginPath();
          ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,140,0,${d.o})`;
          ctx.fill();
          d.x += d.dx;
          d.y += d.dy;
          if (d.x < 0 || d.x > canvas.width) d.dx *= -1;
          if (d.y < 0 || d.y > canvas.height) d.dy *= -1;
        });

        dots.forEach((a, i) => {
          dots.slice(i + 1).forEach(b => {
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(255,140,0,${0.06 * (1 - dist / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        });

        requestAnimationFrame(draw);
      };
      draw();

      window.addEventListener("resize", () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      });
    },
  },
};
</script>

<template>
  <section class="home" id="home">
    <canvas ref="particles" class="particles-canvas"></canvas>

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
        <img src="/IMG_5576.jpg" alt="profile-photo" />
      </div>
    </div>
  </section>

  <!-- SERVICES -->
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

  <!-- PROGETTI -->
  <section data-aos="fade-up" class="testimonials" id="projects">
    <div class="testimonial-box">
      <h2 class="heading">{{ $t("projects") }}</h2>

      <div class="wrapper">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="testimonial-item"
          :class="{ featured: project.featured }"
        >
          <div v-if="project.featured" class="featured-badge">
            <i class="fa-solid fa-star"></i> Featured
          </div>

          <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="slide in project.slides" :key="slide">
              <img :src="`/${slide}`" :alt="project.title" />
            </swiper-slide>
          </swiper>

          <h2>{{ project.title ?? $t("otherProjects") }}</h2>
          <p>{{ $t(project.descKey) }}</p>

          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>

          <div class="icons-project">
            <a :href="project.github" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a v-if="project.live" :href="project.live" target="_blank"><i class="fa-solid fa-globe"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTATTI CTA -->
  <section class="contacts" id="contacts" data-aos="fade-up">
    <div class="contacts-inner">
      <div class="contacts-tag">// Contatti</div>
      <h2 class="contacts-title">Let's work <span>together</span></h2>
      <p class="contacts-sub">Hai un progetto in mente? Sono disponibile per opportunità freelance e collaborazioni.</p>

      <a href="mailto:gianluca.nieddu96@gmail.com" class="contacts-email">
        gianluca.nieddu96@gmail.com
        <i class="fa-solid fa-arrow-right"></i>
      </a>

      <div class="contacts-socials">
        <a href="https://www.linkedin.com/in/gianluca-nieddu-8149a3236/" target="_blank" class="contacts-social-link">
          <i class="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/gianlucanied" target="_blank" class="contacts-social-link">
          <i class="fa-brands fa-github"></i>
          <span>GitHub</span>
        </a>
        <a href="https://www.instagram.com/gianlucanied/" target="_blank" class="contacts-social-link">
          <i class="fa-brands fa-instagram"></i>
          <span>Instagram</span>
        </a>
      </div>

      <div class="contacts-footer">
        <span>© {{ new Date().getFullYear() }} Gianluca Nieddu — Built with Vue.js</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── PARTICLES ── */
.particles-canvas {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* ── HOME ── */
.home-subtitle {
  font-size: 1.4rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--main-color);
  text-shadow: 0 0 10px rgba(255, 140, 0, 0.6);
  margin-bottom: 0.8rem;
}

.home-content {
  position: relative;
  z-index: 1;
}

.home-img {
  position: relative;
  z-index: 1;
}

/* ── ANGOLINI HUD ── */
.img-corners {
  position: relative;
  display: inline-block;
}

.corner {
  position: absolute;
  width: 16px; height: 16px;
  border-color: var(--main-color);
  border-style: solid;
  z-index: 2;
}
.corner.tl { top: -4px; left: -4px; border-width: 2px 0 0 2px; }
.corner.tr { top: -4px; right: -4px; border-width: 2px 2px 0 0; }
.corner.bl { bottom: -4px; left: -4px; border-width: 0 0 2px 2px; }
.corner.br { bottom: -4px; right: -4px; border-width: 0 2px 2px 0; }

/* ── SWIPER ── */
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

/* ── NASTRO COMPETENZE ── */
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
  left: 0; top: 0; bottom: 0; width: 120px;
  background: linear-gradient(90deg, var(--second-bg-color), transparent);
  z-index: 2; pointer-events: none;
}

.conveyor::after {
  content: '';
  position: absolute;
  right: 0; top: 0; bottom: 0; width: 120px;
  background: linear-gradient(270deg, var(--second-bg-color), transparent);
  z-index: 2; pointer-events: none;
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
.track:hover { animation-play-state: paused; }

.track-reverse {
  display: flex;
  gap: 20px;
  width: max-content;
  animation: scroll-left 36s linear infinite;
}
.track-reverse:hover { animation-play-state: paused; }

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
  transition: box-shadow 0.25s, transform 0.25s;
  white-space: nowrap;
  flex-shrink: 0;
}
.skill-chip:hover { transform: scale(1.08) translateY(-2px); }
.skill-chip i { font-size: 22px; }

.chip-name {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

/* ── CARD PROGETTI ── */
.testimonial-item {
  position: relative;
}

.testimonial-item.featured {
  border-color: rgba(255, 140, 0, 0.35) !important;
  box-shadow: 0 0 30px rgba(255, 140, 0, 0.08);
}

.testimonial-item.featured::before {
  opacity: 1 !important;
}

.featured-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, var(--main-color), var(--main-color-alt));
  color: #07070a;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 14px;
  border-radius: 20px;
  white-space: nowrap;
  z-index: 2;
}

.featured-badge i {
  font-size: 10px;
  margin-right: 4px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  margin-top: 4px;
}

.tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 3px 10px;
  border-radius: 20px;
  background: rgba(255, 140, 0, 0.1);
  color: var(--main-color);
  border: 1px solid rgba(255, 140, 0, 0.25);
}

/* ── SEZIONE CONTATTI ── */
.contacts {
  min-height: 60vh;
  background: var(--second-bg-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 12%;
  position: relative;
  overflow: hidden;
}

.contacts::before {
  content: '';
  position: absolute;
  top: -200px; left: 50%;
  transform: translateX(-50%);
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(255, 140, 0, 0.06) 0%, transparent 65%);
  border-radius: 50%;
  pointer-events: none;
}

.contacts-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 700px;
}

.contacts-tag {
  font-size: 1.2rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 140, 0, 0.55);
  margin-bottom: 2rem;
}

.contacts-title {
  font-size: 7rem;
  font-weight: 800;
  color: var(--text-color);
  line-height: 1.1;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
}

.contacts-title span {
  background: linear-gradient(90deg, var(--main-color), #ffcc00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contacts-sub {
  font-size: 1.6rem;
  color: rgba(230, 237, 243, 0.6);
  line-height: 1.8;
  margin-bottom: 4rem;
  max-width: 500px;
}

.contacts-email {
  display: inline-flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--main-color);
  letter-spacing: 0.02em;
  border-bottom: 2px solid rgba(255, 140, 0, 0.3);
  padding-bottom: 4px;
  transition: 0.3s ease;
  margin-bottom: 5rem;
}

.contacts-email:hover {
  border-bottom-color: var(--main-color);
  text-shadow: 0 0 20px rgba(255, 140, 0, 0.4);
  gap: 1.8rem;
}

.contacts-email i {
  font-size: 1.8rem;
  transition: 0.3s ease;
}

.contacts-socials {
  display: flex;
  gap: 3rem;
  margin-bottom: 6rem;
}

.contacts-social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(230, 237, 243, 0.5);
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: 0.3s ease;
}

.contacts-social-link i {
  font-size: 2.4rem;
  width: 50px; height: 50px;
  border: 1px solid rgba(255, 140, 0, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
}

.contacts-social-link:hover {
  color: var(--main-color);
}

.contacts-social-link:hover i {
  border-color: var(--main-color);
  background: rgba(255, 140, 0, 0.08);
  box-shadow: 0 0 16px rgba(255, 140, 0, 0.3);
  transform: translateY(-4px);
}

.contacts-footer {
  font-size: 1.2rem;
  color: rgba(230, 237, 243, 0.25);
  letter-spacing: 0.05em;
  border-top: 1px solid rgba(255, 140, 0, 0.08);
  padding-top: 3rem;
  width: 100%;
  text-align: center;
}
</style>