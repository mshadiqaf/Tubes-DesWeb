<script setup>
import CardProduct from "@/components/shared/CardProduct.vue";
import CategoryTab from "@/components/ui/CategoryTab.vue";
import { products } from "@/data/products";
</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center">
    <div class="relative flex w-full max-w-[1660px] flex-col justify-center gap-8 p-12">
      <div class="relative flex flex-col items-center justify-center gap-4">
        <h2 class="text-6xl font-medium tracking-tight">Category</h2>
      </div>
      <div class="relative flex flex-1 flex-col items-center justify-center gap-8">
        <CategoryTab />
        <div class="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <CardProduct v-for="(product, index) in products" :key="index" :name="product.name" :image="product.imagePath" :price="product.price" />
        </div>
      </div>
    </div>
  </section>
</template>
