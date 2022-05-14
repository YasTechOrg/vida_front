import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import store from "../store";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/services",
        component: () => import("../views/Services.vue")
    },
    {
        path: "/projects",
        component: () => import("../views/Projects.vue")
    },
    {
        path: "/projects/add",
        component: () => import("../views/AddProjects.vue")
    },
    {
        path: "/articles",
        component: () => import("../views/Articles.vue")
    },
    {
        path: "/about",
        component: () => import("../views/About.vue")
    },
    {
        path: "/team",
        component: () => import("../views/Team.vue")
    },
    {
        path: "/projects/add2",
        component: () => import("../views/AddProjects2.vue")
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

router.beforeEach(() => store.commit("setMenuState", false))

export default router