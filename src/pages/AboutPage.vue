<script setup lang="ts">
import ContactSection from "@/sections/About/ContactSection.vue";
import HeroSection from "@/components/shared/HeroSection.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<template>
  <HeroSection :image="'/src/assets/images/bg_hero_about.png'"> Tentang Kami </HeroSection>
  <ContactSection />
  <AppFooter />
</template>
