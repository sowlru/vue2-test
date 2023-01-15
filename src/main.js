import Vue from 'vue'
import App from './App.vue'
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";

// Vue.use(ElementPlus);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
