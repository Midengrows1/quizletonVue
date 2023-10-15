import { createApp } from "vue";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import "./style.css";
import App from "./App.vue";
import { router } from "../src/router/index";
import Header from "./components/Header.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App).use(router);
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});
app.component("Header", Header);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
