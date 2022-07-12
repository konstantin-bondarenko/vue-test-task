import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import InvoiceCalc from "../views/InvoiceCalc.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "InvoiceCalc",
    component: InvoiceCalc,
  },
  {
    path: "/about",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
