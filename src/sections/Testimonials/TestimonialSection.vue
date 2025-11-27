<script setup lang="ts">
import CardTestimonial from "@/components/ui/CardTestimonial.vue";
import { testimonials } from "@/data/testimonials";

</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center px-16 py-24">
    <div class="relative flex w-full max-w-[1920px] flex-col items-center justify-center gap-8 text-center">
      <div class="relative flex flex-col gap-2">
        <h2 class="text-primary-500 text-lg tracking-widest uppercase">Apa Kata Mereka?</h2>
        <h1 class="text-9xl font-normal tracking-tight capitalize">Testimonials</h1>
      </div>
      <p class="max-w-2xl text-xl leading-[150%] font-normal text-black/50">Produk HMIF Store selalu digemari oleh customer. Mereka menyampaikan 'kualitas' melalui pesan & kesan mereka.</p>
    </div>
    <div class="relative flex flex-1 flex-wrap justify-center gap-x-6 gap-y-4 overflow-hidden p-12 mask-y-from-80% mask-y-to-97%">
      <CardTestimonial v-for="(testimoni, index) in testimonials" :key="index" :name="testimoni.name" :position="testimoni.position" :quote="testimoni.quote" :image="testimoni.image" />
    </div>
  </section>
</template>
