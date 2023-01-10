import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// import VCalendar from 'v-calendar';
// Vue.use(VCalendar);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXGToHnNRRoMyKAHCeXxPm-uJcKhe7w8A",
  authDomain: "vue2vuetify2router.firebaseapp.com",
  projectId: "vue2vuetify2router",
  storageBucket: "vue2vuetify2router.appspot.com",
  messagingSenderId: "378525866132",
  appId: "1:378525866132:web:7c6ee68c9046501f673c81"
};

// Initialize Firebase
initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
