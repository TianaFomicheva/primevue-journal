import { createRouter, createWebHashHistory } from 'vue-router';
import TableView from '@/components/TableView.vue';
import CardView from '@/components/CardView.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [

        {
            path: '/',
            component: TableView
        },
        {
            path: '/cardview',
            component: CardView,
        }
    ]
});

export default router;
