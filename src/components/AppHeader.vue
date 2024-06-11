<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";

export default {
  name: "AppHeader",
  components: {
    LanguageSwitcher,
  },
};
</script>

<template>
  <header class="header">
    <a href="#home" class="logo">Gianluca <span>Nieddu</span></a>

    <i id="menu-icon" class="bx bx-menu fa-solid fa-bars fa-lg"></i>

    <nav class="navbar">
      <a href="#home" class="active">{{ $t("home") }}</a>
      <a href="#services">{{ $t("services") }}</a>
      <a href="#projects">{{ $t("projects") }}</a>
      <!-- <a href="#experiences">Esperienza</a> -->
      <a href="#contacts">{{ $t("contacts") }}</a>
    </nav>

    <!-- Aggiungi qui il componente per cambiare lingua -->
    <LanguageSwitcher />
  </header>
</template>

<style scoped>
/* Aggiungi qui il tuo CSS */
</style>
