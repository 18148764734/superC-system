import { createApp } from 'vue'
import 'bulma/css/bulma.css'
import './style.css'
import App from './App.vue' 
import bulma from 'bulma'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App);
app.use(router).use(ElementPlus).use(store).use(bulma).mount('#app')
  