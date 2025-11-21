<script setup>
import CategoryCard from "@/components/ui/CategoryCard.vue";

const categories = [
  {
    name: "Apparels",
    description: "Jahim, PDH, Kaos Inforce",
    image_url: "/src/assets/images/bg_category_apparels.png",
  },
  {
    name: "Accessories",
    description: "Lanyard, Keychain, Stiker, Pin",
    image_url: "/src/assets/images/bg_category_accessories.png",
  },
  {
    name: "Others",
    description: "Standing Banner, Bouquet",
    image_url: "/src/assets/images/bg_category_others.png",
  },
];
</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center">
    <div class="relative flex w-full max-w-[1920px] flex-col justify-center gap-4 px-12 py-12">
      <div class="relative flex flex-col">
        <h2 class="text-primary-500 text-xl uppercase">Belanja Berdasarkan Kebutuhan Kamu</h2>
        <h1 class="text-8xl font-medium tracking-tight capitalize">Categories</h1>
      </div>
      <p class="max-w-2xl text-xl leading-[150%] font-normal text-gray-500">Bukan sekadar tempat membeli merchandise — HMIF Store adalah bagian dari perjalananmu sebagai Informatics People.</p>
    </div>
    <div class="relative grid min-h-[720px] w-full grid-cols-2">
      <CategoryCard v-for="(category, index) in categories" :key="index" :image="category.image_url" :name="category.name" :description="category.description" :class="index === 0 ? 'row-span-2' : ''" />
    </div>
  </section>
</template>
