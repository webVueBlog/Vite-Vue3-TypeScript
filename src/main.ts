/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from '@/router/index'
import store from './store/index'

// import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
