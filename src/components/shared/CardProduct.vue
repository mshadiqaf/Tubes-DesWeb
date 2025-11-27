<script setup>
import { toRupiah } from "@/utils/currency.js";
import { computed } from "vue";
import AppButton from "../ui/AppButton.vue";
import { ShoppingCart } from "lucide-vue-next";

const props = defineProps({
  name: {
    type: String,
    required: true,
    default: "Product Name",
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
    type: String,
    required: true,
    default: "/src/assets/images/jahim_depan.png",
  },
});

const formattedPrice = computed(() => toRupiah(props.price));
</script>

<template>
  <div class="relative flex w-full max-w-lg flex-col items-center justify-center gap-4">
    <div class="aspect-square rounded-lg bg-stone-200/50 p-20">
      <img class="drop-shadow-xl" :src="props.image" alt="" />
    </div>
    <div class="relative flex w-full flex-row">
      <div class="relative flex w-full flex-col justify-between">
        <h3 class="text-xl font-medium">{{ props.name }}</h3>
        <h3>{{ formattedPrice }}</h3>
      </div>
      <AppButton variant="primary" size="lg"> Add to Cart </AppButton>
    </div>
  </div>
</template>
