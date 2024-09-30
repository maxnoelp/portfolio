import GuestBookView from '@/view/GuestBookView.vue';
import HomeView from '@/view/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/guestbook',
      name: 'guestbook',
      component: GuestBookView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
});

export default router;
