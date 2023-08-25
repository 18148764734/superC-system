import { createApp } from 'vue'
import 'bulma/css/bulma.css'

import App from './App.vue' 
import bulma from 'bulma'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'ant-design-vue/dist/reset.css';

import { Field, Lazyload } from "vant";
import "vant/lib/index.css";

//覆盖组件样式
import './style.css'

const app = createApp(App);
app.config.warnHandler = () => null
app.use(router).use(ElementPlus).use(store).use(bulma).use(Field).use(Lazyload).mount('#app');

