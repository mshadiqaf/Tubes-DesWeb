<script setup>
import { ref } from "vue";
import { ShoppingCart, Menu, X } from "lucide-vue-next";
import { RouterLink } from "vue-router";
import { useCartStore } from "@/store/cart";

const { cart, totalItems } = useCartStore();
const emit = defineEmits(["show-dialog"]);
const showDialog = () => emit("show-dialog");

const mobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <header class="fixed z-999 flex w-full border-b border-white/10 bg-[#f5f5f5]/50 backdrop-blur-sm">
    <nav class="flex w-full justify-center">
      <div class="flex w-full flex-row items-center justify-between px-4 md:px-8">
        <!-- Logo -->
        <RouterLink to="/">
          <img class="size-12 md:size-16" src="/src/assets/images/logo_hmif_store.png" alt="Logo HMIF Store" />
        </RouterLink>

        <!-- Desktop Navigation -->
        <ul class="hidden flex-row gap-8 text-lg md:flex lg:gap-12 lg:text-xl">
          <li class="p-3">
            <RouterLink to="/" class="hover:text-primary-500 font-normal transition-all duration-300 hover:tracking-wider">Home</RouterLink>
          </li>
          <li class="p-3">
            <RouterLink to="/products" class="hover:text-primary-500 font-normal transition-all duration-300 hover:tracking-wider">Products</RouterLink>
          </li>
          <li class="p-3">
            <RouterLink to="/testimonials" class="hover:text-primary-500 font-normal transition-all duration-300 hover:tracking-wider">Testimonials</RouterLink>
          </li>
          <li class="p-3">
            <RouterLink to="/faq" class="hover:text-primary-500 font-normal transition-all duration-300 hover:tracking-wider">FaQ</RouterLink>
          </li>
          <li class="p-3">
            <RouterLink to="/about" class="hover:text-primary-500 font-normal transition-all duration-300 hover:tracking-wider">About Us</RouterLink>
          </li>
        </ul>

        <!-- Right side: Cart + Mobile Menu Button -->
        <div class="flex items-center gap-4">
          <!-- Cart Button -->
          <button @click="showDialog" class="relative flex cursor-pointer items-center justify-center">
            <span v-if="cart.length > 0" class="bg-primary-500 absolute -top-1 -right-1 flex size-4.5 items-center justify-center rounded-full text-xs text-white md:text-sm">{{ totalItems }}</span>
            <ShoppingCart :size="28" class="md:size-8" />
          </button>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu" class="flex items-center justify-center p-2 md:hidden">
            <Menu v-if="!mobileMenuOpen" :size="28" />
            <X v-else :size="28" />
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <div v-if="mobileMenuOpen" class="absolute top-full left-0 w-full border-b border-white/10 bg-[#f5f5f5] backdrop-blur-sm md:hidden">
        <ul class="flex flex-col py-4">
          <li class="border-b border-gray-200">
            <RouterLink @click="toggleMobileMenu" to="/" class="hover:bg-primary-50 hover:text-primary-500 block px-6 py-4 text-lg transition-colors">Home</RouterLink>
          </li>
          <li class="border-b border-gray-200">
            <RouterLink @click="toggleMobileMenu" to="/products" class="hover:bg-primary-50 hover:text-primary-500 block px-6 py-4 text-lg transition-colors">Products</RouterLink>
          </li>
          <li class="border-b border-gray-200">
            <RouterLink @click="toggleMobileMenu" to="/testimonials" class="hover:bg-primary-50 hover:text-primary-500 block px-6 py-4 text-lg transition-colors">Testimonials</RouterLink>
          </li>
          <li class="border-b border-gray-200">
            <RouterLink @click="toggleMobileMenu" to="/faq" class="hover:bg-primary-50 hover:text-primary-500 block px-6 py-4 text-lg transition-colors">FaQ</RouterLink>
          </li>
          <li>
            <RouterLink @click="toggleMobileMenu" to="/about" class="hover:bg-primary-50 hover:text-primary-500 block px-6 py-4 text-lg transition-colors">About Us</RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
