<script setup>
import CardCategory from '@/components/ui/CardCategory.vue';


const categories = [
  {
    name: "Apparels",
    description: "Jahim, PDH, Kaos Inforce",
    image_url: "/src/assets/images/bg_category_apparels.png",
    to: "/products",
  },
  {
    name: "Accessories",
    description: "Lanyard, Keychain, Stiker, Pin",
    image_url: "/src/assets/images/bg_category_accessories.png",
    to: "/products",
  },
  {
    name: "Others",
    description: "Standing Banner, Bouquet",
    image_url: "/src/assets/images/bg_category_others.png",
    to: "/products",
  },
];
</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center gap-8 border-t border-black/10 py-24">
    <div class="relative flex w-full max-w-[1920px] flex-row justify-between gap-4 px-12">
      <div class="relative flex flex-col">
        <h2 class="text-primary-500 text-lg tracking-widest uppercase">Belanja Berdasarkan Kebutuhan Kamu</h2>
        <h1 class="text-9xl font-normal tracking-tight capitalize">Categories</h1>
      </div>
      <p class="max-w-2xl text-xl leading-[150%] font-normal text-black/50">Bukan sekadar tempat membeli merchandise — HMIF Store adalah bagian dari perjalananmu sebagai Informatics People.</p>
    </div>
    <div class="relative grid min-h-[720px] w-full grid-cols-2">
      <CardCategory v-for="(category, index) in categories" :to="category.to" :key="index" :image="category.image_url" :name="category.name" :description="category.description" :class="index === 0 ? 'row-span-2' : ''" />
    </div>
  </section>
</template>
