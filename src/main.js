import './plugins/axios'
import ElementPlus from "element-plus";
import 'element-plus/lib/theme-chalk/index.css'
import ZhLocale from 'element-plus/lib/locale/lang/zh-cn'
import EhLocale from 'element-plus/lib/locale/lang/en'
import I18n from "@/lang/index";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import {store} from "core-js/internals/reflect-metadata";

const app = createApp(App)
installElementPlus(app)

let locale = ''
//控制element-ui组件语言
if(I18n.global.fallbackLocale == 'zh'){
    locale = ZhLocale
}else {
    locale = EhLocale
}

app.use(router).use(ElementPlus, { locale }).use(I18n).mount('#app')