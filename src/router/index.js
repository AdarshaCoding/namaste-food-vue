import Vue from "vue";
import VueRouter from "vue-router";
import SearchPage from "@/views/SearchPage.vue";
import Home from "@/components/Home.vue";
import CartPage from "@/views/CartPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search",
    name: "search",
    component: SearchPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
