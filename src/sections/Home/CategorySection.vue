<script setup>
import CategoryCard from "@/components/ui/CategoryCard.vue";
import SectionHeader from "@/components/ui/SectionHeader.vue";

const categories = [
  {
    name: "Apparels",
    description: "Jahim, PDH, Kaos Inforce",
    image_url: "/src/assets/images/bg_category_apparels.png",
    to: "/products?category=Apparel",
  },
  {
    name: "Accessories",
    description: "Lanyard, Keychain, Stiker, Pin",
    image_url: "/src/assets/images/bg_category_accessories.png",
    to: "/products?category=Accessories",
  },
  {
    name: "Others",
    description: "Standing Banner, Bouquet",
    image_url: "/src/assets/images/bg_category_others.png",
    to: "/products?category=Others",
  },
];
</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center gap-8 border-t border-black/10 py-24">
    <div class="relative flex w-full max-w-[1920px] flex-col lg:flex-row justify-between gap-12 px-12">
      <SectionHeader align="left">
        <template #header>Categories</template>
        <template #sub-header>Belanja Berdasarkan Kebutuhan Kamu</template>
      </SectionHeader>
      <p class="max-w-2xl text-lg leading-[150%] font-normal text-black/50">Bukan sekadar tempat membeli merchandise — HMIF Store adalah bagian dari perjalananmu sebagai Informatics People.</p>
    </div>
    <div class="relative grid min-h-[720px] w-full grid-cols-2 gap-px">
      <CategoryCard v-for="(category, index) in categories" :to="category.to" :key="index" :image="category.image_url" :name="category.name" :description="category.description" :class="index === 0 ? 'row-span-2' : ''" />
    </div>
  </section>
</template>
