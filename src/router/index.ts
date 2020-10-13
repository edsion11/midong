import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Info from "../views/Info.vue"
import Mylist from "../views/mylist.vue";
import Favorite from "@/views/favorite.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Info",
    name: "Info",
    component: Info
  },
  {
    path: "/list/:id",
    name: "List",
    component: Mylist
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: Favorite
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
