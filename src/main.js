import Vue from "vue";
import App from "./App.vue";
import router from "router";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";

// import VueSlider from "vue-slider-component";
// import "@/components/commonComponents.js";

// import sassLoader from "sass-loader";
Vue.config.productionTip = false;
// Vue.use(VueSlider);
Vue.prototype.$http = axios;

new Vue({
  Swiper,
  SwiperSlide,
  router,
  render: h => h(App)
}).$mount("#app");
