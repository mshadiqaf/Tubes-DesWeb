<script setup lang="js">
import { onMounted, ref } from "vue";
import { products } from "@/data/products";
import { toRupiah } from "@/utils/currency.js";
import BackButton from "@/components/ui/BackButton.vue";
import AppButton from "@/components/ui/AppButton.vue";
import { Plus, ShoppingCart } from "lucide-vue-next";
import { useCartStore } from "@/store/cart";

const { addItem } = useCartStore();

const props = defineProps({
  productId: String,
});

const product = ref(null);
const selectedSize = ref(product.value?.sizes?.[0]);

onMounted(() => {
  product.value = products.find((p) => p.id === parseInt(props.productId));
  if (product.value && product.value.sizes?.length > 0) {
    selectedSize.value = product.value.sizes[0];
  }
});

const handleAddToCart = () => {
  if (!product.value) return;
  const itemToAdd = {
    id: product.value.id,
    name: product.value.name,
    price: product.value.price,
    image: product.value.imagePath,
    category: product.value.category,
    size: selectedSize.value,
  };
  addItem(itemToAdd);
  console.log(`Added ${product.value.name} (${selectedSize.value}) to cart`);
};

const handleBuyNow = () => {
  // handleAddToCart();
};
</script>

<template>
  <section v-if="product" class="relative flex w-full flex-col items-center justify-center py-24">
    <span class="bg-muted-foreground/25 w-full border-t mask-x-from-85% mask-x-to-100%" />
    <div class="relative grid w-full grid-cols-[3fr_2fr] justify-center gap-12 px-12">
      <div class="relative flex items-center justify-center border-r px-8 py-8">
        <div class="relative flex aspect-square max-w-2xl items-center justify-center overflow-hidden rounded-lg bg-stone-200/50 p-12">
          <img :src="product.imagePath" alt="{{ product.name }} Image" class="max-h-full max-w-full object-contain drop-shadow-xl transition-all duration-500 ease-out" />
        </div>
      </div>
      <div class="sticky top-12 flex h-full w-full flex-col gap-8 py-12">
        <BackButton />
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <h1 class="text-4xl font-medium">{{ product.name }}</h1>
            <p class="text-muted-foreground text-2xl font-medium">{{ toRupiah(product.price) }}</p>
          </div>
          <p class="text-muted-foreground/75 text-sm font-normal tracking-wide">{{ product.description }}</p>
        </div>
        <div v-if="product.sizes?.length > 0" class="flex flex-col gap-2">
          <label class="text-muted-foreground" for="size">Select your size:</label>
          <ul id="size" class="flex flex-row gap-2">
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
        <div class="flex flex-col gap-4">
          <AppButton variant="secondary" size="lg" class="w-full" @click="handleAddToCart">
            <template #icon>
              <Plus />
            </template>
            Add to Cart
          </AppButton>
          <AppButton variant="primary" size="lg" class="w-full gap-3" @click="handleBuyNow">
            <template #icon>
              <ShoppingCart size="20" stroke-width="2.5" />
            </template>
            Buy Now
          </AppButton>
        </div>
      </div>
    </div>
    <span class="bg-muted-foreground/25 w-full border-t mask-x-from-85% mask-x-to-100%" />
  </section>
</template>
