<script setup>
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
    <div class="relative flex w-full max-w-[1660px] flex-col justify-center gap-8 p-12">
      <div class="relative flex flex-col items-center justify-center gap-4">
        <h2 class="text-6xl font-medium tracking-tight">Category</h2>
      </div>
      <div class="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <CardProduct v-for="(product, index) in products" :key="index" :name="product.name" :image="product.image_url" :price="product.price" />
      </div>
    </div>
  </section>
</template>
