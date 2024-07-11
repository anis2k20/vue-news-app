import { createApp } from 'vue'
import {createPinia} from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/index.js'

// createApp(App).use(router).mount('#app')
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');
