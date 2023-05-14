
import { createApp } from 'vue'
// import App from '@/counterComponents/App.vue'
import App from "@/axios/Main.vue"
import './assets/tailwind.css'
// import header from "@/counterComponents/AppHeader.vue"
const app=createApp(App)
// app.component("appHeader",header)

app.mount("#app")
