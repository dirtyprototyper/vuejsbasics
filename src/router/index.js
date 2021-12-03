import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Databinding from "../views/databinding.vue";
import Vueexperiements from "../views/Vueexperiements.vue";
import thevuexmodule from "../views/module.vue";
import mytrading from "../views/mytrading.vue";
//after creating the routes, remember to update app.vue js for the router-link
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/databinding",
    name: "databinding",
    component: Databinding,
  },

  {
    path: "/Vueexperiements",
    name: "Vueexperiements",
    component: Vueexperiements,
  },

  {
    path: "/Vuexmodule",
    name: "Vuexmodule",
    component: thevuexmodule,
  },

  {
    path: "/mytrading",
    name: "mytrading",
    component: mytrading,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
