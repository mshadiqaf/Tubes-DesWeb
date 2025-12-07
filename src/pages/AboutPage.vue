<script setup>
import HeroSection from "@/components/shared/HeroSection.vue";
import ContactSection from "@/sections/About/ContactSection.vue";
import VisionMissionSection from "@/sections/About/VisionMissionSection.vue";
</script>

<template>
  <HeroSection :image="'/src/assets/images/bg_hero_about.png'"> Tentang Kami </HeroSection>
  <VisionMissionSection />
  <ContactSection />
</template>
