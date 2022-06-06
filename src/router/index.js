import { createWebHashHistory,createRouter } from "vue-router";
import Main from "../components/content/main.vue"
import Info from "../components/content/info.vue"
import Gallery from "../components/content/gallery.vue"

const routes = [
    {
        path: '/',
        redirect: '/main'
    }  ,
    {
        path: "/main",
        name: "Main",
        component: Main
    },
    {
        path: "/info",
        name: "Info",
        component: Info
    },
    {
        path: "/gallery",
        name: "Gallery",
        component: Gallery
    }
];

const router = createRouter({
  history : createWebHashHistory(),
  routes
});

export default router;
