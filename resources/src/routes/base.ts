import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    { path: "/", name: "index", component: () => import("@/views/menu.vue") },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login.vue"),
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
