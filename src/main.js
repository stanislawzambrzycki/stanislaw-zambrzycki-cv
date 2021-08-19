import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";
import "firebase/firestore";
import { config } from "./firebaseConfig";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
  beforeMount() {
    firebase.initializeApp(config);
  },
}).$mount("#app");
