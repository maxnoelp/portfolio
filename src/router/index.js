
import HomeView from '@/view/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ProjectDetail from '@/view/ProjectDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/project/:id', name: 'ProjectDetail', component: ProjectDetail, props: true }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
});

export default router;
