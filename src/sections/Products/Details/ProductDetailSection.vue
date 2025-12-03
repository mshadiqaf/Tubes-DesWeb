<script setup lang="js">
import { onMounted, ref } from "vue";
import { products } from "@/data/products";

const props = defineProps({
  productId: String,
});

const product = ref(null);

onMounted(() => {
  product.value = products.find((p) => p.id === parseInt(props.productId));
});

</script>

<template>
  <section v-if="product" class="relative flex w-full justify-center px-12 py-16">
    <div class="relative grid w-full max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <img :src="product.imagePath" alt="" class="w-full"></img>
      </div>
      <div class="sticky top-12 w-fit h-fit">
        <h1>{{ product.name }}</h1>
        <p class="text-gray-500">{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.category }}</p>
      </div>
    </div>
  </section>
</template>
