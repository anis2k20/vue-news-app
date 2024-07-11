import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Business from "../views/Business.vue";
import Entertainment from "../views/Entertainment.vue";
import Sports from "../views/Sports.vue";
import Health from "../views/Health.vue";
import Technology from "../views/Technology.vue";
import SearchResult from "../views/SearchResult.vue";

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
            path: "/health",
            component: Health,
        },
        {
            path: "/sports",
            component: Sports,
        },
        {
            path: "/search-result",
            component: SearchResult,
        },
        {
            path: "/technology",
            component: Technology,
        },
    ]
})