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
      component: InfoPage,
      props: {
        eyebrow: 'Pro developery',
        title: 'Pravidla soutěže a pokyny k přihlašování',
        description:
          'Tato stránka je připravena na kompletní pravidla po zveřejnění ročníku, požadavky a proces přihlašování. Sdílené rozvržení je již připraveno, takže obsah lze postupně rozšiřovat.',
      },
    },
    {
      path: '/pro-partnery',
      name: 'for-partners',
      component: InfoPage,
      props: {
        eyebrow: 'Pro partnery',
        title: 'Partnerské balíčky a mediální příležitosti',
        description:
          'Tento zástupný text udržuje navigaci kompletní. V dalším kroku z ní pod záštitami asociací můžeme vytvořit plnohodnotnou partnerskou stránku.',
      },
    },
  ],
})

export default router
