import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import store  from './store'
import router from './router'
import axios from 'axios'
import firebase from 'firebase'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=2372d018&page=1&type=movie&Content-Type=application/json'
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

// Required for side-effects
require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyC_WBWGnMKF51TUnchvswWKzsjiA_1rHkc",
  authDomain: "chatxavi-6dd94.firebaseapp.com",
  databaseURL: "https://chatxavi-6dd94.firebaseio.com",
  projectId: "chatxavi-6dd94",
  storageBucket: "chatxavi-6dd94.appspot.com",
  messagingSenderId: "711240475480",
  appId: "1:711240475480:web:6f47480c5c02612c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// var db = firebase.firestore();
// window.db= db;
// db.settings({
//   timestampsInSnapshots: true

// });
