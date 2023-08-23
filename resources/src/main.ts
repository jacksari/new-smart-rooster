import { createApp } from "vue";

import "./assets/styles/tw.css";
import "./assets/styles/base.css";
import router from "./routes/base";
import store from "./stores/base";

import App from "./App.vue";

createApp(App).use(router).use(store).mount("#app");
