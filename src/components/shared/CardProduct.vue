<script setup>
import { toRupiah } from "@/utils/currency.js";
import { Plus } from "lucide-vue-next";
import BadgeCategory from "../ui/BadgeCategory.vue";

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
  category: {
    type: String,
    required: true,
    default: "Category",
  },
});

const sizes = ["XS", "S", "M", "L", "XL", "2XL"];

const handleAddToCart = (size) => {
  console.log(`Added ${props.name} (${size}) to cart`);
};
</script>

<template>
  <div class="group/size relative flex w-full flex-col items-center justify-center gap-4">
    <RouterLink :to="`/products/${props.id}`" class="group relative aspect-square w-full overflow-hidden border rounded-lg bg-stone-200/50 p-8 sm:p-12 lg:p-16">
      <div class="flex h-full w-full items-center justify-center">
        <div class="absolute right-0 bottom-0 left-0 z-10 flex w-full cursor-default items-center justify-center bg-white/50 py-4 opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover/size:opacity-100">
          <ul class="relative flex flex-row gap-8">
            <li v-for="size in sizes" @click="handleAddToCart(size)" :key="size" class="cursor-pointer rounded-md text-lg font-medium transition-all duration-300 select-none hover:underline" :title="`Add ${size} to cart`">
              {{ size }}
            </li>
          </ul>
        </div>
        <BadgeCategory :category="props.category" class="absolute top-4 left-4" />
        <Plus class="absolute bottom-4 left-4 cursor-pointer text-stone-700 transition-all duration-300 group-hover/size:opacity-0" />
        <img class="max-h-full max-w-full object-contain drop-shadow-xl transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:drop-shadow-2xl" :src="props.imagePath" alt="" />
      </div>
    </RouterLink>
    <div class="relative flex w-full flex-row">
      <div class="relative flex w-full flex-col justify-between">
        <RouterLink :to="`/products/${props.id}`" class="hover:text-primary-500 transition-colors ease-in-out duration-200 w-fit text-base font-medium tracking-wide uppercase">
          {{ props.name }}
        </RouterLink>
        <h3 class="text-muted-foreground text-lg">{{ toRupiah(props.price) }}</h3>
      </div>
    </div>
  </div>
</template>
