import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '/components/Navbar.vue'
import Profilseite from ".../views/Profilseite"
import Profilseite_Artist from ".../views/Profilseite_Artist"
import Profilseite_Studio from ".../views/Profilseite_Studio"
import Choose_your_Role from ".../views/Choose_your_Role"
import Datenschutzbestimmungen from ".../views/Datenschutzbestimmungen"
import Impressum from ".../views/Impressum"


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/Startseite.vue',
            component: Navbar

        },

        {
            path: '/Profilseite.vue',
            component: Profilseite

        },
        {
            path: '/Profilseite_Artist.vue',
            component: Profilseite_Artist

        },
        {
            path: '/Profilseite_Studio.vue',
            component: Profilseite_Studio
        },
        {
            path: '/Choose_your_Role.vue',
            component: Choose_your_Role
        },
        {
            path: '/Datenschutzbestimmungen.vue',
            component: Datenschutzbestimmungen
        },
        {
            path: '/Impressum.vue',
            component: Impressum
        },
    ]
})
