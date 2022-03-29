import VueRouter from 'vue-router'
const routes = [{
        path: "/",
        redirect: '/login',
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ('../view/Login.vue')
    },
    {
        path: "/home",
        name: "home",
        component: () =>
            import ('../view/Home.vue')
    }
]
const router = new VueRouter({
    routes
})


export default router