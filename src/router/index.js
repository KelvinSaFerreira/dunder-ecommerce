import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
          path: '/',
          name: 'home',
          component: HomePageView,
        }
    ]
})


export default router