import AboutView from "@/views/AboutView.vue";
import FaqView from "@/views/FaqView.vue";
import HomeView from "@/views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";
import TestimonialView from "@/views/TestimonialView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { 
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  { 
    path: '/products',
    name: 'ProductView',
    component: ProductView,
  },
  { 
    path: '/testimonials',
    name: 'TestimonialView',
    component: TestimonialView,
  },
  { 
    path: '/faq',
    name: 'FaqView',
    component: FaqView,
  },
  { 
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router