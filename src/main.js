import { createApp } from "vue";
import { createPinia } from "pinia";
import VueLoading from "vue-loading-overlay";
import VueCarousel from "vue-carousel";
import store from "./store";
import Vuex from "vuex";

import App from "./App.vue";
import router from "./router";

// import './assets/main.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueLoading);
app.use(VueCarousel);
app.use(store);
app.use(Vuex);

app.mount("#app");
