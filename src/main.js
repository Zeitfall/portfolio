import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion';
import Vue3Resize from 'vue3-resize';

createApp(App)
  .use(router)
  .use(MotionPlugin)
  .use(Vue3Resize)
  .mount('#app')
