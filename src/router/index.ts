import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import ForDevelopersPage from '@/pages/ForDevelopersPage.vue'
import ForPartnersPage from '@/pages/ForPartnersPage.vue'
import ProjectDetailPage from '@/pages/ProjectDetailPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/projekty',
      name: 'projects',
      component: ProjectsPage,
    },
    {
      path: '/projekty/:slug',
      name: 'project-detail',
      component: ProjectDetailPage,
    },
    {
      path: '/pro-developery',
      name: 'for-developers',
      component: ForDevelopersPage,
    },
    {
      path: '/pro-partnery',
      name: 'for-partners',
      component: ForPartnersPage,
    },
  ],
})

export default router
