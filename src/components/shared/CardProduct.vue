<script setup>
import { toRupiah } from "@/utils/currency.js";
import { computed } from "vue";
import AppButton from "../ui/AppButton.vue";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
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
  imagePath: {
    type: String,
    required: true,
    default: "/src/assets/images/jahim_depan.png",
  },
});

const formattedPrice = computed(() => toRupiah(props.price));
</script>

<template>
  <div class="relative flex w-full flex-col items-center justify-center gap-4">
    <RouterLink :to="`/products/${props.id}`" class="group relative aspect-square w-full overflow-hidden rounded-lg bg-stone-200/50 p-8 sm:p-12 lg:p-16">
      <div class="flex h-full w-full items-center justify-center">
        <img class="max-h-full max-w-full object-contain drop-shadow-xl transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:drop-shadow-2xl" :src="props.imagePath" alt="" />
      </div>
    </RouterLink>
    <div class="relative flex w-full flex-row">
      <div class="relative flex w-full flex-col justify-between gap-1">
        <RouterLink :to="`/products/${props.id}`" class="w-fit text-base font-medium tracking-wide uppercase hover:underline">
          {{ props.name }}
        </RouterLink>
        <h3 class="text-lg text-muted-foreground">{{ formattedPrice }}</h3>
      </div>
    </div>
  </div>
</template>
