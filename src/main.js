
import { createApp } from 'vue'
// import App from '@/counterComponents/App.vue'
// import App from "@/axios/Main.vue"
// import App from '@/vuex/VuexMain.vue'
// import App from '@/routerComponent/App.vue'
import App from '@/router-app/App.vue'
import './assets/tailwind.css'
// import store from './vuex/store'
import store from './router-app/store'

import router from '@/router-app/router'
// import header from "@/counterComponents/AppHeader.vue"
const app=createApp(App)
// app.component("appHeader",header)
app.use(store)
app.use(router)

app.mount("#app")
