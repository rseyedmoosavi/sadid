import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Deposit from '../components/money/Deposit'
import LastLogin from '../views/LastLogin'
import News from '../views/News'
import Transactions from "../views/Transactions";
import Graphql from "../views/Graphql";
import Login from "../views/Login";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/test',
        name: 'Test',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
    },
    {
        path: '/deposit',
        name: 'Deposit',
        component: Deposit
    },
    {
        path: '/lastLogin',
        name: 'LastLogin',
        component: LastLogin
    },
    {
        path: '/news',
        name: 'News',
        component: News
    },
    {
        path: '/transaction',
        name: 'Transaction',
        component: Transactions
    },
    {
        path: '/graphql',
        name: 'Graphql',
        component: Graphql
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
