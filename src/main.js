
import { createApp } from 'vue'
// import App from '@/counterComponents/App.vue'
// import App from "@/axios/Main.vue"
// import App from '@/vuex/VuexMain.vue'
import App from '@/routerComponent/App.vue'
import './assets/tailwind.css'
import store from './vuex/store'

import router from '@/routerComponent/router'
// import header from "@/counterComponents/AppHeader.vue"
const app=createApp(App)
// app.component("appHeader",header)
app.use(store)
app.use(router)

app.mount("#app")
