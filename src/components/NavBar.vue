<script setup lang="ts">
import { ShoppingCart } from "lucide-vue-next";
import { RouterLink } from "vue-router";
</script>

<template>
  <header
    class="fixed z-50 flex w-full border-b-2 border-white/25 bg-white/50 backdrop-blur-lg"
  >
    <nav class="flex w-full justify-center">
      <div
        class="flex w-full max-w-7xl flex-row items-center justify-between px-8"
      >
        <RouterLink to="/">
          <img
            class="size-16"
            src="/src/assets/images/logo_hmif_store.png"
            alt="Logo HMIF Store"
          />
        </RouterLink>
        <div>
          <ul class="flex flex-row gap-6 text-xl">
            <li class="p-3">
              <RouterLink
                to="/"
                class="hover:text-primary-500 font-medium transition-colors duration-300"
                >Home</RouterLink
              >
            </li>
            <li class="p-3">
              <RouterLink
                to="/products"
                class="hover:text-primary-500 font-medium transition-colors duration-300"
                >Products</RouterLink
              >
            </li>
            <li class="p-3">
              <RouterLink
                to="/testimonials"
                class="hover:text-primary-500 font-medium transition-colors duration-300"
                >Testimonials</RouterLink
              >
            </li>
            <li class="p-3">
              <RouterLink
                to="/faq"
                class="hover:text-primary-500 font-medium transition-colors duration-300"
                >FaQ</RouterLink
              >
            </li>
            <li class="p-3">
              <RouterLink
                to="/about"
                class="hover:text-primary-500 font-medium transition-colors duration-300"
                >About Us</RouterLink
              >
            </li>
          </ul>
        </div>
        <div>
          <button class="flex cursor-pointer items-center justify-center">
            <ShoppingCart :size="32" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
