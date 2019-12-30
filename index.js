import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import HelloWorld from "../components/HelloWorld";
import Startseite from '../views/Startseite'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/Startseite',
            component: Startseite
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/login',
            component: Login
        },
    ]
})
