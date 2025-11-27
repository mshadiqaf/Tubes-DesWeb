<script setup>
import CardProduct from "@/components/shared/CardProduct.vue";
import { products } from "@/data/products";

const product = products.slice(0, 4);
</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center gap-12 border-t border-black/10 py-24">
    <div class="relative flex w-full max-w-[1920px] flex-col items-center justify-center gap-8 text-center">
      <div class="relative flex flex-col gap-2">
        <h2 class="text-primary-500 text-lg tracking-widest uppercase">Produk Terlaris Kami</h2>
        <h1 class="text-9xl font-normal tracking-tight capitalize">Bestsellers</h1>
      </div>
      <p class="max-w-2xl text-xl leading-[150%] font-normal text-black/50">Produk pilihan yang paling digemari warga Informatika. Dari Jahim hingga Kaos INFORCE — temukan item favorit yang selalu jadi incaran di setiap periode.</p>
    </div>

    <div class="relative flex w-full justify-center gap-4 px-12">
      <CardProduct v-for="(product, index) in product" :key="index" :name="product.name" :image="product.image_url" :price="product.price" />
    </div>
  </section>
</template>
