import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "../src/router/index";
const app = createApp(App).use(router);
app.mount("#app");
