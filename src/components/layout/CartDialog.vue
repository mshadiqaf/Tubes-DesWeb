<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { X, Trash2, ShoppingBag, PackageX, ArrowRight } from "lucide-vue-next";
import AppButton from "../ui/AppButton.vue";
import { toRupiah } from "@/utils/currency";
import { useCartStore } from "@/store/cart";
import { useStockStore } from "@/store/stock";
import QuantityPicker from "../ui/QuantityPicker.vue";

const { cart, totalItems, totalPrice, removeItem, incrementItem, decrementItem } = useCartStore();
const { getStock } = useStockStore();

const dialogRef = ref(null);

const showDialog = () => dialogRef.value?.showModal();
const closeDialog = () => dialogRef.value?.close();

defineExpose({
  show: showDialog,
  close: closeDialog,
});

function closeFromEvent(e) {
  if (e.target === e.currentTarget) {
    closeDialog();
  }
}

const router = useRouter();

const handleEmptyCartAction = () => {
  closeDialog();
  router.push({ name: "ProductPage" });
};

const getAvailableStock = (item) => {
  return getStock(item.id, item.size);
};

const handleIncrement = (item) => {
  incrementItem(item);
};

const handleDecrement = (item) => {
  decrementItem(item);
};
</script>

<template>
  <dialog
    ref="dialogRef"
    class="m-auto h-fit w-full max-w-full self-center justify-self-center overflow-hidden rounded-none border bg-white shadow-xl backdrop:bg-black/50 backdrop:backdrop-blur-[2px] md:max-w-lg md:rounded-4xl"
    @click="closeFromEvent"
  >
    <div class="flex flex-col">
      <div class="flex items-center justify-between border-b border-gray-100 p-6">
        <h2 class="flex items-center gap-2 text-2xl font-medium md:text-4xl">
          Shopping Cart
          <span class="bg-primary-50 text-primary-600 border-primary-100 flex h-fit w-fit items-center justify-center rounded-full border px-2 py-0.5 text-sm font-medium md:text-base">{{ totalItems }} items</span>
        </h2>
        <button @click="closeDialog" class="text-muted-foreground bg-muted hover:bg-muted-foreground/15 hover:text-primary-600 outline-primary-500 cursor-pointer rounded-full p-2 transition-colors duration-300">
          <X class="h-5 w-5" />
        </button>
      </div>

      <div class="flex max-h-[60vh] flex-col gap-8 overflow-y-auto p-6">
        <div v-if="cart.length === 0" class="flex flex-col items-center justify-center py-8 text-gray-500">
          <PackageX stroke-width="1.5" size="50" />
          <p class="text-lg font-medium">Your cart is empty...</p>
        </div>

        <div v-else v-for="item in cart" :key="`${item.id}-${item.size}`" class="flex flex-row gap-4">
          <div class="relative flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-md bg-stone-200/50 p-2.5">
            <img :src="item.image" :alt="item.name" class="h-full w-full object-contain" />
          </div>
          <div class="flex w-full flex-col gap-4">
            <div class="flex w-full flex-row gap-1">
              <div class="flex w-full flex-col">
                <h2 class="line-clamp-1 text-base font-medium md:text-xl">{{ item.name }}</h2>
                <h4 class="text-muted-foreground text-xs tracking-wider md:text-sm">Size: {{ item.size }}</h4>
                <span class="text-muted-foreground/75 text-xs">{{ getAvailableStock(item) }} available in stock</span>
              </div>
              <button @click="removeItem(item)" class="text-muted-foreground/50 flex h-fit cursor-pointer items-center justify-center p-0.5 transition-colors duration-300 hover:text-red-500">
                <Trash2 size="20" />
              </button>
            </div>
            <div class="flex flex-row items-center justify-between">
              <QuantityPicker :modelValue="item.quantity" @increment="handleIncrement(item)" @decrement="handleDecrement(item)" :max="getAvailableStock(item) + item.quantity" />
              <p class="text-muted-foreground text-base">{{ toRupiah(item.price * item.quantity) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 border-t p-6">
        <div class="flex flex-row items-center justify-between">
          <h3 class="text-muted-foreground text-lg">Total</h3>
          <p class="text-xl font-medium">{{ toRupiah(totalPrice) }}</p>
        </div>
        <AppButton v-if="cart.length === 0" variant="secondary" class="w-full" @click="handleEmptyCartAction">
          <template #icon>
            <ArrowRight size="18" stroke-width="2.5" />
          </template>
          Go Find Products
        </AppButton>
        <AppButton v-else class="w-full">
          <template #icon>
            <ShoppingBag size="18" stroke-width="2.5" />
          </template>
          Checkout
        </AppButton>
      </div>
    </div>
  </dialog>
</template>
