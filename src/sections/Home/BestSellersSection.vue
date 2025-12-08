<script setup>
import ProductCard from "@/components/shared/ProductCard.vue";
import SectionHeader from "@/components/ui/SectionHeader.vue";
import { products } from "@/data/products";

const product = products.slice(0, 3);
</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center gap-8 border-t border-black/10 px-4 py-12 md:gap-12 md:py-24">
    <div class="flex flex-col gap-4">
      <SectionHeader>
        <template #header> BestSellers </template>
        <template #sub-header> Produk Terlaris Kami </template>
      </SectionHeader>
      <p class="max-w-2xl px-4 text-center text-base leading-[150%] font-normal text-black/50 md:text-lg">
        Produk pilihan yang paling digemari warga Informatika. Dari Jahim hingga Kaos INFORCE — temukan item favorit yang selalu jadi incaran di setiap periode.
      </p>
    </div>
    <div class="relative flex w-full flex-wrap justify-center gap-8 px-4 md:px-12">
      <ProductCard v-for="(product, index) in product" :id="product.id" :key="index" :name="product.name" :imagePath="product.imagePath" :price="product.price" :category="product.category" :sizes="product.sizes" />
    </div>
  </section>
</template>
