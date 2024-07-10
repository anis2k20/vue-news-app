import {createRouter, createWebHistory} from "vue-router";
export default createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: "/",

        },
        {
            path: "/about",
            component: () => import("./components/About.vue")
        }

    ]
})