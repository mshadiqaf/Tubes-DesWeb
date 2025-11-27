<script setup>
import { ShoppingCart } from "lucide-vue-next";
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="fixed z-9999 flex w-full border-b border-white/10 bg-[#f5f5f5]/50 backdrop-blur-sm">
    <nav class="flex w-full justify-center">
      <div class="flex w-full flex-row items-center justify-between px-8">
        <RouterLink to="/">
          <img class="size-16" src="/src/assets/images/logo_hmif_store.png" alt="Logo HMIF Store" />
        </RouterLink>
        <ul class="flex w-2/5 flex-row justify-between text-xl">
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
        <div>
          <button class="flex cursor-pointer items-center justify-center">
            <ShoppingCart :size="32" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
