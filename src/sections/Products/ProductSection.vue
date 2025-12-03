<script setup>
import CardProduct from "@/components/shared/CardProduct.vue";
import CategoryTab from "@/components/ui/CategoryTab.vue";
import { products } from "@/data/products";
</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center">
    <div class="relative flex w-full max-w-[1660px] flex-col justify-center gap-8 p-6 sm:p-8 md:p-12">
      <div class="relative flex flex-col items-center justify-center gap-4">
        <h2 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">Category</h2>
      </div>
      <div class="relative flex flex-1 flex-col items-center justify-center gap-8">
        <CategoryTab />
        <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <CardProduct v-for="(product, index) in products" :id="product.id" :key="index" :name="product.name" :imagePath="product.imagePath" :price="product.price" />
        </div>
      </div>
    </div>
  </section>
</template>
