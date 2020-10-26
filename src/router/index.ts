import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Info from "../views/Info.vue"
import Mylist from "../views/MyList.vue";
import Nofavorite from "@/views/NoFavorite.vue";
import Loading from "@/views/Loading.vue";
import NetError from "@/views/NetError.vue";
import SpecialInfo from "@/components/SpecialInfo.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Info/:id&&:type",
    name: "Info",
    component: Info
  },
  {
    path: "/list/:id",
    name: "List",
    component: Mylist
  },
  {
    path: "/nofavorite",
    name: "Nofavorite",
    component: Nofavorite
  },
  {
    path: "/netError",
    name: "NetError",
    component: NetError
  },
  {
      path: "/SpecialInfo",
    name: "SpecialInfo",
    component: SpecialInfo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
