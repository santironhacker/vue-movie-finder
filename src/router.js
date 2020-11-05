import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import MoviesView from './views/MoviesView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {
      path: '/home', component: HomeView
    },
    {
      path: '/movies', component: MoviesView, props: true
    }
  ]
});

export default router;