<script setup>
import { computed } from "vue";
import { toRupiah } from "@/utils/currency.js";
import { Star, Plus } from "lucide-vue-next";
import CategoryBadge from "../ui/CategoryBadge.vue";
import StockBadge from "../ui/StockBadge.vue";
import { useCartStore } from "@/store/cart";
import { useStockStore } from "@/store/stock";

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
  sizes: {
    type: Array,
  },
});

const { addItem } = useCartStore();
const { getStock, getStockStatus } = useStockStore();

const handleAddToCart = (size) => {
  const itemToAdd = {
    id: props.id,
    name: props.name,
    price: props.price,
    image: props.imagePath,
    category: props.category,
    size: size,
  };
  addItem(itemToAdd);
  console.log(`Added ${props.name} (${size}) to cart`);
};

const getSizeStock = (size) => {
  return getStock(props.id, size);
};

const getSizeStockStatus = (size) => {
  return getStockStatus(props.id, size);
};

const isSizeOutOfStock = (size) => {
  return getSizeStockStatus(size) === "out-of-stock";
};

const productStockStatus = computed(() => {
  if (props.sizes && props.sizes.length > 0) {
    const totalStock = props.sizes.reduce((total, size) => {
      return total + getSizeStock(size);
    }, 0);

    if (totalStock === 0) return "out-of-stock";
    if (totalStock < 5) return "low-stock";
    return "in-stock";
  }
  return getStockStatus(props.id);
});
</script>

<template>
  <div class="group/size relative flex w-full max-w-xl flex-col items-center justify-center gap-4">
    <RouterLink :to="`/products/${props.id}`" class="group relative aspect-square w-full overflow-hidden rounded-lg border bg-stone-200/50 p-8 sm:p-12 lg:p-16">
      <div class="flex h-full w-full items-center justify-center">
        <div
          v-if="sizes"
          class="absolute right-0 bottom-0 left-0 z-10 flex w-full cursor-default items-center justify-center border-t bg-white/50 py-4 opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover/size:opacity-100"
        >
          <ul w class="relative flex flex-row gap-8">
            <li
              v-for="size in sizes"
              @click.prevent.stop="!isSizeOutOfStock(size) && handleAddToCart(size)"
              :key="size"
              :class="['cursor-pointer rounded-md text-lg font-medium transition-all duration-300 select-none', isSizeOutOfStock(size) ? 'cursor-not-allowed line-through opacity-30' : 'opacity-75 hover:underline hover:opacity-100']"
              :title="isSizeOutOfStock(size) ? `${size} - Out of Stock` : `Add ${size} to cart (${getSizeStock(size)} available)`"
            >
              {{ size }}
            </li>
          </ul>
        </div>
        <Plus
          @click.prevent.stop="handleAddToCart(props.sizes?.[0])"
          :class="['text-muted-foreground border-muted-foreground absolute bottom-4 left-4 cursor-pointer rounded-sm transition-all duration-300 hover:scale-130', sizes ? 'group-hover/size:opacity-0' : 'opacity-100']"
        />
        <CategoryBadge :category="props.category" class="absolute z-500 top-4 left-4" />
        <StockBadge :stockStatus="productStockStatus" class="absolute top-4 z-500 right-4" />
        <img class="max-h-full max-w-full object-contain drop-shadow-xl transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105 group-hover:drop-shadow-2xl" :src="props.imagePath" alt="" />
      </div>
    </RouterLink>
    <div class="relative flex w-full flex-row">
      <div class="relative flex w-full flex-col justify-between">
        <RouterLink :to="`/products/${props.id}`" class="hover:text-primary-500 w-fit text-base font-medium tracking-wide uppercase transition-colors duration-200 ease-in-out">
          {{ props.name }}
        </RouterLink>
        <h3 class="text-muted-foreground text-lg">{{ toRupiah(props.price) }}</h3>
      </div>
    </div>
  </div>
</template>
