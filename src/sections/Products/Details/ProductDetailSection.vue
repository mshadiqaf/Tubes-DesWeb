<script setup lang="js">
import { onMounted, ref, computed, watch } from "vue";
import { products } from "@/data/products";
import { toRupiah } from "@/utils/currency.js";
import BackButton from "@/components/ui/BackButton.vue";
import AppButton from "@/components/ui/AppButton.vue";
import { ShoppingCart, ShoppingBag } from "lucide-vue-next";
import { useCartStore } from "@/store/cart";
import { useStockStore } from "@/store/stock";
import QuantityPicker from "@/components/ui/QuantityPicker.vue";
import StockBadge from "@/components/ui/StockBadge.vue";

const { addItem } = useCartStore();
const { getStock, getStockStatus } = useStockStore();

const props = defineProps({
  productId: String,
});

const product = ref(null);
const selectedSize = ref(product.value?.sizes?.[0]);
const quantity = ref(1);

const currentStock = computed(() => {
  if (!product.value) return 0;
  return getStock(product.value.id, selectedSize.value);
});

const stockStatus = computed(() => {
  if (!product.value) return "out-of-stock";
  return getStockStatus(product.value.id, selectedSize.value);
});

const isOutOfStock = computed(() => stockStatus.value === "out-of-stock");
const isLowStock = computed(() => stockStatus.value === "low-stock");

watch(selectedSize, () => {
  quantity.value = 1;
});

watch(currentStock, (newStock) => {
  if (quantity.value > newStock) {
    quantity.value = Math.max(1, newStock);
  }
});

onMounted(() => {
  product.value = products.find((p) => p.id === parseInt(props.productId));
  if (product.value && product.value.sizes?.length > 0) {
    selectedSize.value = product.value.sizes[0];
  }
});

const handleAddToCart = () => {
  if (!product.value || isOutOfStock.value) return;
  const itemToAdd = {
    id: product.value.id,
    name: product.value.name,
    price: product.value.price,
    image: product.value.imagePath,
    category: product.value.category,
    size: selectedSize.value,
    quantity: quantity.value,
  };
  addItem(itemToAdd);
  console.log(`Added ${quantity.value}x ${product.value.name} (${selectedSize.value}) to cart`);
  quantity.value = 1;
};

const handleBuyNow = () => {
  // handleAddToCart();
};
</script>

<template>
  <section v-if="product" class="relative flex w-full flex-col items-center justify-center py-12 md:py-24">
    <span class="bg-muted-foreground/25 w-full border-t mask-x-from-85% mask-x-to-100%" />
    <div class="relative grid w-full grid-cols-1 justify-center gap-6 px-4 md:gap-12 md:px-12 lg:grid-cols-[3fr_2fr]">
      <div class="relative flex items-center justify-center px-4 py-4 md:px-8 md:py-8 lg:border-r">
        <div class="relative flex aspect-square max-w-2xl items-center justify-center overflow-hidden rounded-lg bg-stone-200/50 p-12">
          <img :src="product.imagePath" alt="{{ product.name }} Image" class="max-h-full max-w-full object-contain drop-shadow-xl transition-all duration-500 ease-out" />
        </div>
      </div>
      <div class="top-12 flex h-full w-full flex-col gap-6 py-6 md:gap-8 md:py-12 lg:sticky">
        <BackButton />
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <h1 class="text-2xl font-medium md:text-3xl lg:text-4xl">{{ product.name }}</h1>
            <p class="text-muted-foreground text-xl font-medium md:text-2xl">{{ toRupiah(product.price) }}</p>
          </div>
          <p class="text-muted-foreground/75 text-sm font-normal tracking-wide">{{ product.description }}</p>
        </div>

        <div class="flex flex-row items-center gap-2">
          <StockBadge :stockStatus="stockStatus" />
          <span v-if="!isOutOfStock" class="text-muted-foreground text-sm"> {{ currentStock }} {{ currentStock === 1 ? "unit" : "units" }} available </span>
        </div>

        <div v-if="product.sizes?.length > 0" class="flex flex-col gap-2">
          <label class="text-muted-foreground" for="size">Select your size:</label>
          <ul id="size" class="flex flex-row flex-wrap gap-2">
            <li
              v-for="size in product.sizes"
              :key="size"
              :class="[
                'text-muted-foreground hover:text-primary-500 border-muted-foreground flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border text-sm font-normal transition-all duration-300 ease-out' +
                  (selectedSize === size ? ' shadow-primary-700/25 ring-primary-700 bg-primary-500 border-primary-500 -translate-y-0.5 font-medium! text-white shadow-lg ring-2 hover:text-white' : ''),
              ]"
              @click="selectedSize = size"
            >
              {{ size }}
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-6">
          <div class="flex flex-row items-center gap-2">
            <label class="text-muted-foreground" for="quantity">Quantity:</label>
            <QuantityPicker v-model="quantity" :max="currentStock" :disabled="isOutOfStock" />
            <span v-if="isLowStock && !isOutOfStock" class="text-sm font-medium text-orange-600"> Only {{ currentStock }} left! </span>
          </div>
          <div class="flex flex-row gap-3">
            <AppButton variant="secondary" size="md" class="w-full" @click="handleAddToCart" :disabled="isOutOfStock">
              <template #icon>
                <ShoppingCart size="20" stroke-width="2.5" />
              </template>
              {{ isOutOfStock ? "Out of Stock" : "Add to Cart" }}
            </AppButton>
            <AppButton variant="primary" size="md" class="w-full" @click="handleBuyNow" :disabled="isOutOfStock">
              <template #icon>
                <ShoppingBag size="20" stroke-width="2.5" />
              </template>
              Buy Now
            </AppButton>
          </div>
        </div>
      </div>
    </div>
    <span class="bg-muted-foreground/25 w-full border-t mask-x-from-85% mask-x-to-100%" />
  </section>
</template>
