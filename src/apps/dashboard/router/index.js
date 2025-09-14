import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/dashboard",
    children: [
      {
        path: "",
        name: "home",
        component: ()=> import("@/apps/dashboard/views/Home/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
