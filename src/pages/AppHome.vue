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
      lightbox: {
        open: false,
        slides: [],
        index: 0,
      },
      skills: [
        {
          label: "Angular",
          icon: "devicon-angularjs-plain",
          color: "#ff4d4d",
          bg: "rgba(255,77,77,0.1)",
          border: "rgba(255,77,77,0.35)",
        },
        {
          label: "TypeScript",
          icon: "devicon-typescript-plain",
          color: "#3b9eff",
          bg: "rgba(59,158,255,0.1)",
          border: "rgba(59,158,255,0.35)",
        },
        {
          label: "Vue.js",
          icon: "devicon-vuejs-plain",
          color: "#42d392",
          bg: "rgba(66,211,146,0.1)",
          border: "rgba(66,211,146,0.35)",
        },
        {
          label: "JavaScript",
          icon: "devicon-javascript-plain",
          color: "#f7df1e",
          bg: "rgba(247,223,30,0.1)",
          border: "rgba(247,223,30,0.35)",
        },
        {
          label: "HTML5",
          icon: "devicon-html5-plain",
          color: "#e34f26",
          bg: "rgba(227,79,38,0.1)",
          border: "rgba(227,79,38,0.35)",
        },
        {
          label: "CSS3",
          icon: "devicon-css3-plain",
          color: "#264de4",
          bg: "rgba(38,77,228,0.1)",
          border: "rgba(38,77,228,0.35)",
        },
        {
          label: "SASS",
          icon: "devicon-sass-original",
          color: "#cc6699",
          bg: "rgba(204,102,153,0.1)",
          border: "rgba(204,102,153,0.35)",
        },
        {
          label: "Bootstrap",
          icon: "devicon-bootstrap-plain",
          color: "#7952b3",
          bg: "rgba(121,82,179,0.1)",
          border: "rgba(121,82,179,0.35)",
        },
        {
          label: "VS Code",
          icon: "devicon-vscode-plain",
          color: "#0078d7",
          bg: "rgba(0,120,215,0.1)",
          border: "rgba(0,120,215,0.35)",
        },
      ],
      clientProjects: [
        {
          titleKey: "padelTitle",
          descKey: "padelDesc",
          tagsKey: "padelTags",
          live: "https://padelalghero.com/",
          github: "https://github.com/gianlucanied/pclub-project",
          slides: ["home-padel.png", "about-padel.png", "contacts-padel.png"],
        },
        {
          titleKey: "rentTitle",
          descKey: "rentDesc",
          tagsKey: "rentTags",
          live: null,
          github: null,
          slides: ["hp-avada.png", "prices-avada.png", "about-avada.png"],
        },
        {
          titleKey: "pesceTitle",
          descKey: "pesceDesc",
          tagsKey: "pesceTags",
          live: null,
          github: null,
          slides: ["home-padel.png", "about-padel.png", "contacts-padel.png"],
        },
      ],
      serviceKeys: [
        {
          icon: "fa-solid fa-laptop-code",
          titleKey: "service1Title",
          descKey: "service1Desc",
        },
        {
          icon: "fa-solid fa-mobile-screen",
          titleKey: "service2Title",
          descKey: "service2Desc",
        },
        {
          icon: "fa-solid fa-language",
          titleKey: "service3Title",
          descKey: "service3Desc",
        },
        {
          icon: "fa-solid fa-magnifying-glass",
          titleKey: "service4Title",
          descKey: "service4Desc",
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
    window.addEventListener("keydown", this.handleKey);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKey);
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
        dots.forEach((d) => {
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
          dots.slice(i + 1).forEach((b) => {
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
    openLightbox(slides, index = 0) {
      this.lightbox.slides = slides;
      this.lightbox.index = index;
      this.lightbox.open = true;
      document.body.style.overflow = "hidden";
    },
    closeLightbox() {
      this.lightbox.open = false;
      document.body.style.overflow = "";
    },
    lightboxNext() {
      this.lightbox.index =
        (this.lightbox.index + 1) % this.lightbox.slides.length;
    },
    lightboxPrev() {
      this.lightbox.index =
        (this.lightbox.index - 1 + this.lightbox.slides.length) %
        this.lightbox.slides.length;
    },
    handleKey(e) {
      if (!this.lightbox.open) return;
      if (e.key === "ArrowRight") this.lightboxNext();
      if (e.key === "ArrowLeft") this.lightboxPrev();
      if (e.key === "Escape") this.closeLightbox();
    },
  },
};
</script>

<template>
  <!-- ── LIGHTBOX ── -->
  <Teleport to="body">
    <div
      v-if="lightbox.open"
      class="lightbox-overlay"
      @click.self="closeLightbox"
    >
      <button class="lightbox-close" @click="closeLightbox">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <button class="lightbox-arrow lightbox-arrow-left" @click="lightboxPrev">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <div class="lightbox-img-wrap">
        <img
          :src="`/${lightbox.slides[lightbox.index]}`"
          :key="lightbox.index"
          class="lightbox-img"
          alt="preview"
        />
      </div>
      <button class="lightbox-arrow lightbox-arrow-right" @click="lightboxNext">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      <div class="lightbox-counter">
        {{ lightbox.index + 1 }} / {{ lightbox.slides.length }}
      </div>
      <div class="lightbox-dots">
        <span
          v-for="(_, i) in lightbox.slides"
          :key="i"
          class="lightbox-dot"
          :class="{ active: i === lightbox.index }"
          @click="lightbox.index = i"
        ></span>
      </div>
    </div>
  </Teleport>

  <!-- ── HERO ── -->
  <section class="home" id="home">
    <canvas ref="particles" class="particles-canvas"></canvas>
    <div class="home-content">
      <div class="home-subtitle">{{ $t("heroSubtitle") }}</div>
      <h1 v-html="$t('heroTitle').replace('\n', '<br>')"></h1>
      <p class="hero-desc">{{ $t("heroDesc") }}</p>
      <div class="btn-group">
        <a href="#clienti" class="btn">{{ $t("clientiTitle") }}</a>
        <a href="#contacts" class="btn btn-outline">{{ $t("contacts") }}</a>
      </div>
      <div class="hero-badge-row">
        <div class="hero-badge">
          <i class="fa-solid fa-check"></i> {{ $t("heroBadge1") }}
        </div>
        <div class="hero-badge">
          <i class="fa-solid fa-check"></i> {{ $t("heroBadge2") }}
        </div>
        <div class="hero-badge">
          <i class="fa-solid fa-check"></i> {{ $t("heroBadge3") }}
        </div>
      </div>
    </div>
  </section>

  <!-- ── SERVIZI ── -->
  <section id="services" class="services" data-aos="fade-up">
    <h2 class="heading">{{ $t("servicesTitle") }}</h2>
    <div class="services-grid">
      <div v-for="s in serviceKeys" :key="s.titleKey" class="service-card">
        <div class="service-card-icon"><i :class="s.icon"></i></div>
        <h4>{{ $t(s.titleKey) }}</h4>
        <p>{{ $t(s.descKey) }}</p>
      </div>
    </div>
  </section>

  <!-- ── PROGETTI CLIENTI ── -->
  <section id="clienti" class="clienti" data-aos="fade-up">
    <div class="section-tag">{{ $t("clientiTag") }}</div>
    <h2 class="heading">{{ $t("clientiTitle") }}</h2>
    <div class="clienti-grid">
      <div v-for="p in clientProjects" :key="p.titleKey" class="client-card">
        <div class="client-card-top">
          <swiper
            :effect="'cards'"
            :grabCursor="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide v-for="(slide, i) in p.slides" :key="slide">
              <img
                :src="`/${slide}`"
                :alt="$t(p.titleKey)"
                @click="openLightbox(p.slides, i)"
              />
              <div class="slide-zoom-hint">
                <i class="fa-solid fa-magnifying-glass-plus"></i>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="client-card-body">
          <div class="client-type">{{ $t("projectType") }}</div>
          <h3>{{ $t(p.titleKey) }}</h3>
          <p>{{ $t(p.descKey) }}</p>
          <div class="project-tags">
            <span
              v-for="tag in $t(p.tagsKey)
                .split(',')
                .map((t) => t.trim())"
              :key="tag"
              class="tag"
              >{{ tag }}</span
            >
          </div>
          <div class="client-links">
            <a v-if="p.live" :href="p.live" target="_blank" class="btn btn-sm">
              <i class="fa-solid fa-globe"></i> {{ $t("visitSite") }}
            </a>
            <a
              v-if="p.github"
              :href="p.github"
              target="_blank"
              class="btn btn-sm btn-ghost-sm"
            >
              <i class="fa-brands fa-github"></i> {{ $t("viewCode") }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── CHI SONO ── -->
  <section id="about" class="about" data-aos="fade-up">
    <div class="about-inner">
      <div class="about-text">
        <div class="section-tag">{{ $t("aboutTag") }}</div>
        <h2 class="about-title">Gianluca <span>Nieddu</span></h2>
        <p v-html="$t('aboutText1')"></p>
        <p v-html="$t('aboutText2')"></p>
        <div class="about-cta">
          <a href="#contacts" class="btn">{{ $t("aboutCta") }}</a>
        </div>
      </div>
      <div class="about-skills">
        <div class="section-tag">{{ $t("stackTag") }}</div>
        <div class="conveyor">
          <div class="track">
            <div
              v-for="(skill, i) in trackItems"
              :key="'t1-' + i"
              class="skill-chip"
              :style="{ background: skill.bg, borderColor: skill.border }"
            >
              <i :class="skill.icon" :style="{ color: skill.color }"></i>
              <span class="chip-name" :style="{ color: skill.color }">{{
                skill.label
              }}</span>
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
              <span class="chip-name" :style="{ color: skill.color }">{{
                skill.label
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ── CONTATTI ── -->
  <section class="contacts" id="contacts" data-aos="fade-up">
    <div class="contacts-inner">
      <div class="contacts-tag">{{ $t("contactsTag") }}</div>
      <h2
        class="contacts-title"
        v-html="$t('contactsTitle').replace('\n', '<br>')"
      ></h2>
      <p class="contacts-sub">{{ $t("contactsSub") }}</p>
      <a href="mailto:gianluca.nieddu96@gmail.com" class="contacts-email">
        gianluca.nieddu96@gmail.com
        <i class="fa-solid fa-arrow-right"></i>
      </a>
      <div class="contacts-socials">
        <a
          href="https://www.linkedin.com/in/gianluca-nieddu-8149a3236/"
          target="_blank"
          class="contacts-social-link"
        >
          <i class="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/gianlucanied"
          target="_blank"
          class="contacts-social-link"
        >
          <i class="fa-brands fa-github"></i>
          <span>GitHub</span>
        </a>
        <a
          href="https://www.instagram.com/gianlucanied/"
          target="_blank"
          class="contacts-social-link"
        >
          <i class="fa-brands fa-instagram"></i>
          <span>Instagram</span>
        </a>
      </div>
      <div class="contacts-footer">
        <span
          >© {{ new Date().getFullYear() }} Gianluca Nieddu — Built with
          Vue.js</span
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── LIGHTBOX ── */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: lb-fade 0.2s ease;
}

@keyframes lb-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.lightbox-img-wrap {
  max-width: 85vw;
  max-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 12px;
  box-shadow:
    0 0 60px rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(255, 140, 0, 0.2);
  animation: lb-zoom 0.2s ease;
  object-fit: contain;
}

@keyframes lb-zoom {
  from {
    transform: scale(0.92);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 140, 0, 0.15);
  border: 1px solid rgba(255, 140, 0, 0.3);
  color: var(--main-color);
  font-size: 1.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;
  z-index: 2;
}

.lightbox-close:hover {
  background: rgba(255, 140, 0, 0.3);
  transform: scale(1.1);
}

.lightbox-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 140, 0, 0.15);
  border: 1px solid rgba(255, 140, 0, 0.3);
  color: var(--main-color);
  font-size: 1.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease;
  z-index: 2;
}

.lightbox-arrow:hover {
  background: rgba(255, 140, 0, 0.35);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-arrow-left {
  left: 2rem;
}
.lightbox-arrow-right {
  right: 2rem;
}

.lightbox-counter {
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.4rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.1em;
}

.lightbox-dots {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.lightbox-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  cursor: pointer;
  transition: 0.2s ease;
}

.lightbox-dot.active {
  background: var(--main-color);
  transform: scale(1.3);
}

/* ── SLIDE ZOOM HINT ── */
.swiper-slide {
  position: relative;
  cursor: zoom-in;
}

.slide-zoom-hint {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 140, 0, 0.4);
  color: var(--main-color);
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.2s ease;
  pointer-events: none;
}

.swiper-slide:hover .slide-zoom-hint {
  opacity: 1;
}

/* ── PARTICLES ── */
.particles-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* ── HERO ── */
.home-subtitle {
  font-size: 1.3rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--main-color);
  text-shadow: 0 0 10px rgba(255, 140, 0, 0.6);
  margin-bottom: 2rem;
}

.home-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.hero-desc {
  font-size: 1.8rem;
  color: rgba(230, 237, 243, 0.7);
  line-height: 1.8;
  margin-bottom: 3.5rem;
  max-width: 600px;
}

.hero-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 3rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 1.3rem;
  font-weight: 600;
  color: rgba(230, 237, 243, 0.6);
  background: rgba(255, 140, 0, 0.06);
  border: 1px solid rgba(255, 140, 0, 0.2);
  padding: 6px 14px;
  border-radius: 20px;
}
.hero-badge i {
  color: var(--main-color);
  font-size: 11px;
}

/* ── SERVIZI ── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.service-card {
  background: transparent;
  border: 1px solid rgba(255, 140, 0, 0.15);
  border-radius: 12px;
  padding: 3.5rem;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--main-color), #ffcc00, transparent);
  opacity: 0;
  transition: 0.3s ease;
}

.service-card:hover {
  border-color: rgba(255, 140, 0, 0.4);
  background: rgba(255, 140, 0, 0.03);
  transform: translateY(-4px);
}
.service-card:hover::before {
  opacity: 1;
}

.service-card-icon {
  font-size: 3rem;
  color: var(--main-color);
  margin-bottom: 1.8rem;
}
.service-card h4 {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-color);
  margin-bottom: 1rem;
}
.service-card p {
  font-size: 1.4rem;
  color: rgba(230, 237, 243, 0.6);
  line-height: 1.7;
}

/* ── SECTION TAG ── */
.section-tag {
  font-size: 1.2rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 140, 0, 0.55);
  margin-bottom: 1rem;
}

/* ── PROGETTI CLIENTI ── */
.clienti-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.client-card {
  background: var(--bg-color);
  border: 1px solid rgba(255, 140, 0, 0.12);
  border-radius: 14px;
  overflow: hidden;
  transition: 0.4s ease;
  display: flex;
  flex-direction: column;
}

.client-card:hover {
  border-color: rgba(255, 140, 0, 0.4);
  transform: translateY(-6px);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(255, 140, 0, 0.08);
}

.client-card-top {
  padding: 2rem 2rem 0;
  display: flex;
  justify-content: center;
}

.client-card-body {
  padding: 2rem 2.5rem 2.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
}

.client-type {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--main-color);
}
.client-card-body h3 {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text-color);
}
.client-card-body p {
  font-size: 1.3rem;
  color: rgba(230, 237, 243, 0.6);
  line-height: 1.7;
  flex: 1;
}

.client-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.btn-sm {
  padding: 0.7rem 1.6rem;
  font-size: 1.2rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.btn-ghost-sm {
  background: transparent;
  color: var(--main-color);
  border: 1px solid rgba(255, 140, 0, 0.4);
  box-shadow: none;
}
.btn-ghost-sm:hover {
  background: rgba(255, 140, 0, 0.08);
}

/* ── CHI SONO ── */
.about-inner {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: flex-start;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

.about-title {
  font-size: 5rem;
  font-weight: 800;
  color: var(--text-color);
  margin: 1rem 0 2.5rem;
  line-height: 1.1;
}

.about-title span {
  background: linear-gradient(90deg, var(--main-color), #ffcc00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-text p {
  font-size: 1.6rem;
  color: rgba(230, 237, 243, 0.65);
  line-height: 1.9;
  margin-bottom: 2rem;
}
.about-text strong {
  color: var(--text-color);
  font-weight: 700;
}
.about-cta {
  margin-top: 3rem;
}

.about-skills {
  width: 100%;
}

/* ── NASTRO COMPETENZE ── */
.conveyor {
  position: relative;
  overflow: hidden;
  background: var(--second-bg-color);
  border-top: 1px solid rgba(255, 140, 0, 0.2);
  border-bottom: 1px solid rgba(255, 140, 0, 0.2);
  padding: 16px 0;
}

.conveyor::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  background: linear-gradient(90deg, var(--second-bg-color), transparent);
  z-index: 2;
  pointer-events: none;
}

.conveyor::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80px;
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
  gap: 16px;
  width: max-content;
  animation: scroll-right 30s linear infinite;
}
.track:hover {
  animation-play-state: paused;
}
.track-reverse {
  display: flex;
  gap: 16px;
  width: max-content;
  animation: scroll-left 36s linear infinite;
}
.track-reverse:hover {
  animation-play-state: paused;
}

@keyframes scroll-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
@keyframes scroll-left {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.skill-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 40px;
  border: 1px solid;
  cursor: pointer;
  transition:
    box-shadow 0.25s,
    transform 0.25s;
  white-space: nowrap;
  flex-shrink: 0;
}
.skill-chip:hover {
  transform: scale(1.08) translateY(-2px);
}
.skill-chip i {
  font-size: 20px;
}
.chip-name {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

/* ── SWIPER ── */
.mySwiper {
  width: 200px;
  height: 260px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ── TAGS ── */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 0.5rem;
}

.tag {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 4px 12px;
  border-radius: 20px;
  background: rgba(255, 140, 0, 0.1);
  color: var(--main-color);
  border: 1px solid rgba(255, 140, 0, 0.25);
  white-space: nowrap;
}

/* ── CONTATTI ── */
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
  content: "";
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(255, 140, 0, 0.06) 0%,
    transparent 65%
  );
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
  font-size: 6.5rem;
  font-weight: 800;
  color: var(--text-color);
  line-height: 1.15;
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
  font-size: 2rem;
  font-weight: 700;
  color: var(--main-color);
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
  width: 50px;
  height: 50px;
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

/* ── RESPONSIVE ── */
@media (max-width: 991px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
  .clienti-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .contacts-title {
    font-size: 4.5rem;
  }
  .contacts-email {
    font-size: 1.5rem;
    word-break: break-all;
  }
  .hero-badge-row {
    flex-direction: column;
  }
  .lightbox-arrow-left {
    left: 0.5rem;
  }
  .lightbox-arrow-right {
    right: 0.5rem;
  }
}
</style>
