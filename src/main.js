import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import i18n from "./i18n";

// Crea l'app Vue
const app = createApp(App);

// Usa i plugin necessari
app.use(i18n);
app.use(router);

// Monta l'app sull'elemento DOM
app.mount("#app");

// Inizializza AOS dopo che l'app è stata montata
AOS.init();

// Esegui il codice DOM solo dopo che il contenuto è pronto
document.addEventListener("DOMContentLoaded", () => {
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach((sec) => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          let activeLink = document.querySelector(`header nav a[href*=${id}]`);
          if (activeLink) {
            activeLink.classList.add("active");
          }
        });
      }
    });
  };

  if (menuIcon) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  }
});
