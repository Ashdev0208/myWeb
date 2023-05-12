import { createRouter, createMemoryHistory } from 'vue-router';

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
        component: () => import('../components/moviePage.vue'),
        props: true
    },
];
const router = createRouter({
    routes,
    history: createMemoryHistory(),
});


export default router;