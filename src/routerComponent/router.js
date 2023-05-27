import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/routerComponent/views/Home.vue";
import About from "@/routerComponent/views/About.vue";
import Detay from "@/routerComponent/views/Detay.vue";
const routes = [
  {name:"HomePage",
    path: "/",
    component: Home,
  },
  {name:"AboutPage",
    path: "/about",
    component: About,
  },
  {name:"DetayPage",
    path: "/detay/:userId",
    component: Detay,
  },
];
const router = createRouter({
  routes: routes,
  history:createWebHashHistory()
});
export default router;
