import { createApp } from 'vue'
import App from './App.vue'

/**
 * Material about
 */
import 'material-symbols'
import './assets/material-web'
import { createPinia } from 'pinia'

/**
 * TailwindCSS
 */
import './assets/index.css'

/**
 * Store
 */
const pinia = createPinia()

/**
 * Router
 */
import router from './router/index'

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
