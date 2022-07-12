import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import "./registerComponentHooks";
import store from "./store";
Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");