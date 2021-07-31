import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from './firebase/config'

// global styles
import './assets/main.css'

let app

// wait until Firebase detects the user state
projectAuth.onAuthStateChanged(() => {
  // keeps the code block from firing everytime the state changes
  if (!app) {
    app = createApp(App).use(router).mount('#app')
  }

})

