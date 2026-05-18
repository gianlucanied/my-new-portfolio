<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";

export default {
  name: "AppHeader",
  components: { LanguageSwitcher },
  data() {
    return { activeSection: "home" };
  },
  mounted() {
    const sections = ["home", "services", "clienti", "contacts", "about"];
    this._onScroll = () => {
      const offset = 120;
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      this.activeSection = current;
    };
    window.addEventListener("scroll", this._onScroll, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this._onScroll);
  },
};
</script>

<template>
  <header class="header">
    <a href="#home" class="logo">Gianluca <span>Nieddu</span></a>

    <nav class="navbar">
      <a href="#home" :class="{ active: activeSection === 'home' }">{{ $t("home") }}</a>
      <a href="#services" :class="{ active: activeSection === 'services' }">{{ $t("services") }}</a>
      <a href="#clienti" :class="{ active: activeSection === 'clienti' }">{{ $t("projects") }}</a>
      <a href="#contacts" :class="{ active: activeSection === 'contacts' }">{{ $t("contacts") }}</a>
      <a href="#about" :class="{ active: activeSection === 'about' }">{{ $t("about") }}</a>
    </nav>

    <LanguageSwitcher />

    <i id="menu-icon" class="fa-solid fa-bars"></i>
  </header>
</template>

<style scoped>
/* Aggiungi qui il tuo CSS */
</style>
