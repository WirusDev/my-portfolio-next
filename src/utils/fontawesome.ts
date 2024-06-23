// src/utils/fontawesome.ts
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Импортируйте стили

config.autoAddCss = false; // Предотвратите автоматическое добавление CSS

library.add(faInstagram, faTelegram, faWhatsapp, faGithub);
