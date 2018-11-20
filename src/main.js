import '@babel/polyfill'
import Vue from "vue"
import './plugins/vuetify'
import App from "./App.vue"
import router from "./router"
import store from "./store"

/* ==================================
CUSTOM DIRECTIVE
===================================*/
Vue.directive('shadow', {
  bind(el) {
    el.style.boxShadow = '0px 3px 5px #666';
  }
})

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");