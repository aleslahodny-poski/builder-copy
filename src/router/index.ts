import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import InfoPage from '@/pages/InfoPage.vue'
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
      path: '/projects',
      name: 'projects',
      component: ProjectsPage,
    },
    {
      path: '/projects/:slug',
      name: 'project-detail',
      component: ProjectDetailPage,
    },
    {
      path: '/for-developers',
      name: 'for-developers',
      component: InfoPage,
      props: {
        eyebrow: 'For Developers',
        title: 'Competition rules and submission guidance',
        description:
          'This page is ready for the full rules, requirements, and submission process. The shared layout and routing are already in place so the content can be expanded next without changing the overall site structure.',
      },
    },
    {
      path: '/for-partners',
      name: 'for-partners',
      component: InfoPage,
      props: {
        eyebrow: 'For Partners',
        title: 'Partnership packages and media opportunities',
        description:
          'This placeholder keeps the navigation complete and gives the page a production-ready shell. We can turn it into a full partner page with packages, contacts, and media assets in the next pass.',
      },
    },
  ],
})

export default router
