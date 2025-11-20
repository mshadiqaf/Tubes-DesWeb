import AboutPage from "@/pages/AboutPage.vue";
import FaqPage from "@/pages/FaqPage.vue";
import HomePage from "@/pages/HomePage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import TestimonialPage from "@/pages/TestimonialPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { 
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  { 
    path: '/products',
    name: 'ProductPage',
    component: ProductPage,
  },
  { 
    path: '/testimonials',
    name: 'TestimonialPage',
    component: TestimonialPage,
  },
  { 
    path: '/faq',
    name: 'FaqPage',
    component: FaqPage,
  },
  { 
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router