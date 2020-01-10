import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import App from '../App';
import Login from '../App'
import Startseite from '../App';
import Profilseite from '../';
import Profilseite Artist from '../';
import Profilseite Studio from '../';
import

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Message.html
        },
        {
            path: '/login',
            component: Login
        },
    ]
})
