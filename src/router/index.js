import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
// import BrazilView from "@/views/BrazilView.vue";
// import PanamaView from "@/views/PanamaView.vue";
// import HawaiView from "@/views/HawaiView.vue";
// import JamaicaView from "@/views/JamaicaView.vue";
// import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/brazil",
    name: "brazil",
    // it's called lazy loadinig like assign import to component arrow function
    component: () =>
      // /* */ called magic comment
      import(/*webPackChunkName: "brazilView" */ "@/views/BrazilView.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () => import("@/views/PanamaView.vue"),
  },
  {
    path: "/hawai",
    name: "hawai",
    component: () => import("@/views/HawaiView.vue"),
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () => import("@/views/JamaicaView.vue"),
  },
  {
    path: "/destination/:id",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // assign router link active classs
  linkActiveClass: "vue-school-active-link",
});

export default router;
