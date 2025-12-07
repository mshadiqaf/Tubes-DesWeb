<script setup>
import ProductDetailSection from "@/sections/Products/Details/ProductDetailSection.vue";

const props = defineProps({
  id: String,
});
</script>

<template>
  <ProductDetailSection :productId="props.id" />
</template>
