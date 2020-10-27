import Vue from "vue";
import App from "./App.vue";
import common from "./css/common.scss";
import layouts from "./css/layout.scss";
import mainVisual from "./css/main.scss";
import reset from "./css/reset.scss";

Vue.config.productionTip = false;
Vue.use(common);
Vue.use(layouts);
Vue.use(mainVisual);
Vue.use(reset);

new Vue({
  render: h => h(App)
}).$mount("#app");
