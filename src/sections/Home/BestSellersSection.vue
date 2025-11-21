<script setup lang="ts">
import CardProduct from "@/components/shared/CardProduct.vue";

const products = [
  {
    name: "Kaos INFORCE",
    // image_url: "/src/assets/images/product_kaos_inforce.png",
    price: 75000,
  },
  {
    name: "Jahim HMIF",
    image_url: "/src/assets/images/jahim_belakang.png",
    price: 120000,
  },
  {
    name: "Lanyard HMIF",
    // image_url: "/src/assets/images/product_lanyard_hmif.png",
    price: 25000,
  },
];
</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center">
    <div class="relative flex w-full max-w-[1920px] flex-col items-center justify-center gap-4 px-12 py-12 text-center">
      <div class="relative flex flex-col">
        <h2 class="text-primary-500 text-xl uppercase">Produk Terlaris Kami</h2>
        <h1 class="text-8xl font-medium tracking-tight capitalize">Bestsellers</h1>
      </div>
      <p class="max-w-2xl text-xl leading-[150%] font-normal text-gray-500">Produk pilihan yang paling digemari warga Informatika. Dari Jahim hingga Kaos INFORCE — temukan item favorit yang selalu jadi incaran di setiap periode.</p>
    </div>

    <div class="relative flex w-full justify-center gap-4 px-12">
      <CardProduct v-for="(product, index) in products" :key="index" :name="product.name" :image="product.image_url" :price="product.price" />
    </div>
  </section>
</template>
