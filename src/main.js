import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import PrimeVue from 'primevue/config';

import '@/assets/styles.scss'

createApp(App).use(router).use(PrimeVue).mount('#app');
