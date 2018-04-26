import Vue from 'vue';
import App from './App';
import router from './router';
import FastClick from 'fastclick'





Vue.config.productionTip = false
FastClick.attach(document.body);


new Vue({
  el: '#app',
  router,
  components:{App},
  template: '<App/>'
});
