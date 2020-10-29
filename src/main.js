import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
// import sassLoader from "sass-loader";
Vue.config.productionTip = false;
// import common from "./src/assets/css/uiCommon.scss";
// import layouts from "./src/assets/css/uiLayout.scss";
// import mainVisual from "./src/assets/css/main.scss";
// import reset from "./src/assets/css/reset.scss";

Vue.prototype.$http = axios;
// Vue.use(sassLoader);Vue.use(common);
// Vue.use(common);
// Vue.use(layouts);
// Vue.use(mainVisual);
// Vue.use(reset);

new Vue({
  render: h => h(App)
}).$mount("#app");
