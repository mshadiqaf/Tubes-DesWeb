<script setup lang="ts">
import SectionHeader from "@/components/ui/SectionHeader.vue";
import TestimonialCard from "@/components/ui/TestimonialCard.vue";
import { testimonials } from "@/data/testimonials";

const half = Math.ceil(testimonials.length / 2);

const firstHalf = testimonials.slice(0, half);
const secondHalf = testimonials.slice(half);
</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center gap-12 overflow-hidden py-24">
    <div class="relative flex w-full max-w-[1920px] flex-col items-center justify-center gap-8 text-center">
      <div class="flex flex-col gap-4">
        <SectionHeader>
          <template #header>Testimonials</template>
          <template #sub-header>Apa Kata Mereka?</template>
        </SectionHeader>
        <p class="max-w-2xl text-center text-lg leading-[150%] font-normal text-black/50">Produk HMIF Store selalu digemari oleh customer. Mereka menyampaikan 'kualitas' melalui pesan & kesan mereka.</p>
      </div>
    </div>
    <!-- Marquee Container -->
    <div class="relative flex flex-col justify-center gap-12 w-full mask-x-from-75% mask-x-to-100% py-12">
      <div class="animate-walking-card relative justify-center flex w-max min-w-full gap-x-10">
        <TestimonialCard v-for="(testimoni, index) in [...firstHalf, ...firstHalf]" :key="index" v-bind="testimoni" class="shrink-0" />
      </div>
      <div class="animate-walking-card-reverse relative justify-end flex w-max min-w-full gap-x-10">
        <TestimonialCard v-for="(testimoni, index) in [...secondHalf, ...secondHalf]" :key="index" v-bind="testimoni" class="shrink-0" />
      </div>
    </div>
  </section>
</template>
