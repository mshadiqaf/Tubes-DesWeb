import AboutPage from "@/pages/AboutPage.vue";
import COTSPage from "@/pages/COTSPage.vue";
import FaqPage from "@/pages/FaqPage.vue";
import HomePage from "@/pages/HomePage.vue";
import ProductDetailPage from "@/pages/ProductDetailPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import TestimonialPage from "@/pages/TestimonialPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    meta: { label: "Home" },
  },
  {
    path: "/products",
    name: "ProductPage",
    component: ProductPage,
    meta: { label: "Products" },
  },
  {
    path: "/products/:id",
    name: "ProductDetailPage",
    component: ProductDetailPage,
    props: true,
    meta: { label: "Products" },
  },
  {
    path: "/testimonials",
    name: "TestimonialPage",
    component: TestimonialPage,
    meta: { label: "Testimonials" },
  },
  {
    path: "/faq",
    name: "FaqPage",
    component: FaqPage,
    meta: { label: "FaQ" },
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
    meta: { label: "About Us" },
  },
  {
    path: "/cots",
    name: "COTSPage",
    component: COTSPage,
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
