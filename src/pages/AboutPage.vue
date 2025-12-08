<script setup>
import HeroSection from "@/components/shared/HeroSection.vue";
import ContactSection from "@/sections/About/ContactSection.vue";
import VisionMissionSection from "@/sections/About/VisionMissionSection.vue";
import BoxMessageSection from "@/sections/About/BoxMessageSection.vue";
import AboutSection from "@/sections/About/AboutSection.vue";
</script>

<template>
  <HeroSection :image="'/src/assets/images/bg_hero_about.png'"> Tentang Kami </HeroSection>
  <AboutSection />
  <VisionMissionSection />
  <ContactSection />
  <BoxMessageSection />
</template>
