<script setup>
import HeroSection from "@/components/shared/HeroSection.vue";
import CTASection from "@/sections/FaQ/CTASection.vue";
import FaqSection from "@/sections/FaQ/FaqSection.vue";
</script>

<template>
  <HeroSection :image="'/src/assets/images/bg_hero_faq.png'"> Frequently Asked Questions </HeroSection>
  <FaqSection />
  <CTASection />
</template>
