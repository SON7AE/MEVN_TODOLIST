import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '~/pages/Home.vue';
import Article from '~/pages/Article.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/:id',
            name: 'Article',
            component: Article,
        },
    ],
});
