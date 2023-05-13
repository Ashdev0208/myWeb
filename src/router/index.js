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
        path: '/movie/:id/:directLink',
        name: "movie",
        component: () => import('../components/moviePage.vue')
    },
    {
        path: '/search',
        name: "search",
        component: () => import('../components/search.vue')
    },
];
const router = createRouter({
    routes,
    history: createWebHistory(),
});


export default router;