import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/router-app/view/HomePage.vue";
import NewBookmark from "@/router-app/view/NewBookmark.vue";

const routes = [
  { name: "HomePage", path: "/", component: Home },
  { name: "Bookmark", path: "/bookmark", component: NewBookmark },
];
const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
});
export default router;
