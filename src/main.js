import { createApp } from "vue";
import App from "./App.vue";
import { router } from "../src/router/index";
import Header from "./components/Header.vue";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
const vuetify = createVuetify({
  components,
  directives,
});
const app = createApp(App).use(router);
app.use(vuetify);
app.component("Header", Header);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
