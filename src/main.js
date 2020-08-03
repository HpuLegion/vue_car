import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugin/aMap.js'  //引入高德地图

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
