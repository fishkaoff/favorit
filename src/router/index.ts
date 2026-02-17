import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import PdAgreement from '@/views/PdAgreement.vue'
import MarketingAgreement from '@/views/MarketingAgreement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      component: PrivacyPolicy,
    },
    {
      path: '/pd-agreement',
      name: 'pd-agreement',
      component: PdAgreement,
    },
    {
      path: '/marketing',
      name: 'marketing',
      component: MarketingAgreement,
    },
  ],
})

export default router
