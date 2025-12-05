<script setup lang="js">
import { onMounted, ref } from "vue";
import { products } from "@/data/products";
import { toRupiah } from "@/utils/currency.js";

const props = defineProps({
  productId: String,
});

const product = ref(null);

onMounted(() => {
  product.value = products.find((p) => p.id === parseInt(props.productId));
});
</script>

<template>
  <section v-if="product" class="relative flex w-full justify-center px-12 py-24">
    <div class="relative grid w-full max-w-[1440px] gap-12 lg:grid-cols-2">
      <div class="relative flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-stone-200/50 p-8">
        <img :src="product.imagePath" alt="" class="max-h-full max-w-full object-contain drop-shadow-xl transition-all duration-500 ease-out" />
      </div>
      <div class="sticky top-12 flex h-fit w-fit flex-col py-12 gap-2">
        <h1 class="text-5xl font-medium tracking-tight">{{ product.name }}</h1>
        <p class="text-muted-foreground text-2xl tracking-tight font-medium uppercase">{{ toRupiah(product.price) }}</p>
      </div>
    </div>
  </section>
</template>
