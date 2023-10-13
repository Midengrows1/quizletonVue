import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "../src/router/index";
import Header from "./components/Header.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App).use(router);
app.component("Header", Header);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
