import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('../components/firstPage.vue')
    },
    {
        path: '/lists/:type',
        name: "lists",
        component: () => import('../components/listsPage.vue'),
    },
    {
        path: '/movie/:id',
        name: "movie",
        component: () => import('../components/moviePage.vue')
    },
];
const router = createRouter({
    routes,
    history: createWebHistory(),
});


export default router;