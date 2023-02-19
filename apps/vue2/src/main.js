import Vue from 'vue';
import '@/assets/main.css';

import App from './App.vue';
import store from './store';
import router from './router';

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
