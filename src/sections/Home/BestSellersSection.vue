<script setup>
import ProductCard from "@/components/shared/ProductCard.vue";
import SectionHeader from "@/components/ui/SectionHeader.vue";
import { products } from "@/data/products";

const product = products.slice(0, 1);
</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center gap-12 border-t border-black/10 py-24">
    <div class="flex flex-col gap-4">
      <SectionHeader>
        <template #header> BestSellers </template>
        <template #sub-header> Produk Terlaris Kami </template>
      </SectionHeader>
      <p class="max-w-2xl text-center text-lg leading-[150%] font-normal text-black/50">
        Produk pilihan yang paling digemari warga Informatika. Dari Jahim hingga Kaos INFORCE — temukan item favorit yang selalu jadi incaran di setiap periode.
      </p>
    </div>
    <div class="relative flex w-full justify-center gap-4 px-12">
      <ProductCard v-for="(product, index) in product" :id="product.id" :key="index" :name="product.name" :imagePath="product.imagePath" :price="product.price" :category="product.category" :sizes="product.sizes" />
    </div>
  </section>
</template>
