import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // finds index.js file in folder

createApp(App).use(router).mount('#app')
