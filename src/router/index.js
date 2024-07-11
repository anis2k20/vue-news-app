import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Business from "../views/Business.vue";
import Entertainment from "../views/Entertainment.vue";
import Lifestyle from "../views/Lifestyle.vue";
import Sports from "../views/Sports.vue";
import Youth from "../views/Youth.vue"

export default createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: "/",
            component: Home,
        },
        {
            path: "/business",
            component: Business,
        },
        {
            path: "/entertainment",
            component: Entertainment,
        },
        {
            path: "/lifestyle",
            component: Lifestyle,
        },
        {
            path: "/sports",
            component: Sports,
        },
        {
            path: "/youth",
            component: Youth,
        },
    ]
})