
import "./style.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { registerGlobalComponents } from './globalComponents'


const pinia = createPinia()
const app = createApp(App)
registerGlobalComponents(app)
app.use(router)
app.use(pinia)
app.mount('#app')