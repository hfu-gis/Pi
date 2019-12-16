import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Startseite'
import Navbar from '/components/Navbar.vue'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/Startseite.vue',
            component: Navbar

        },

        {
            path: '/Startseite.vue',
            component: Login
        },
    ]
})
