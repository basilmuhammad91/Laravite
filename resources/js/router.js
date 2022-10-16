import { createWebHashHistory, createRouter, createWebHistory } from "vue-router";

import dashboard from './pages/dashboard.vue'
import permissions from './pages/permissions.vue'
import roles from './pages/roles.vue'
import users from './pages/users.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
    },
    {
        path: '/permissions',
        name: 'permissions',
        component: permissions
    },
    {
        path: '/roles',
        name: 'roles',
        component: roles
    },
    {
        path: '/users',
        name: 'users',
        component: users
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
