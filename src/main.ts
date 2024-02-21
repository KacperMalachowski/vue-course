import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(store).use(pinia).mount('#app')
