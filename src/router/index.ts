import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import HomePage from '../views/HomePage.vue';
import PondsPage from '../views/PondsPage.vue';
import PondRegistrationPage from '../views/PondRegistrationPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        name: 'Home',
        component: HomePage
      },
      {
        path: 'ponds',
        name: 'PondsPage',
        component: PondsPage
      }
    ]
  },
  {
    path: '/pondregistration',
    name: 'PondRegistration',
    component: PondRegistrationPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
