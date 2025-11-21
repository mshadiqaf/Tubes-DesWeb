<script setup lang="ts">
import AppFooter from "@/components/layout/AppFooter.vue";
import HeroSection from "@/components/shared/HeroSection.vue";
import ProductSection from "@/sections/Products/ProductSection.vue";
</script>

<template>
  <HeroSection :image="'/src/assets/images/bg_hero_products.png'">Produk Kami</HeroSection>
  <ProductSection />
  <AppFooter />
</template>
