<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { X, Minus, Plus, Trash2, ShoppingBag, PackageX, ArrowRight } from "lucide-vue-next";
import AppButton from "../ui/AppButton.vue";
import { toRupiah } from "@/utils/currency";

const cart = ref([
  {
    id: 1,
    name: "Jaket Himpunan",
    price: 100000,
    quantity: 1,
    image: "/src/assets/images/jahim_depan.png",
    size: "M",
  },
  {
    id: 2,
    name: "Kaos Event",
    price: 75000,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=2680",
    size: "L",
  },
]);

const totalItems = computed(() => cart.value.reduce((total, item) => total + item.quantity, 0));
const total = computed(() => cart.value.reduce((total, item) => total + item.price * item.quantity, 0));

const incrementQuantity = (item) => {
  item.quantity++;
};

const decrementQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
  }
};

const removeItem = (id) => {
  cart.value = cart.value.filter((item) => item.id !== id);
};

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
</script>

<template>
  <dialog ref="dialogRef" class="m-auto h-fit w-full max-w-lg self-center justify-self-center overflow-hidden rounded-4xl border bg-white shadow-xl backdrop:bg-black/50 backdrop:backdrop-blur-[2px]" @click="closeFromEvent">
    <div class="flex flex-col">
      <!-- Header -->
      <div class="flex items-center justify-between border-b border-gray-100 p-6">
        <h2 class="flex items-center gap-2 text-4xl font-medium">
          Shopping Cart
          <span class="bg-primary-50 text-primary-600 border-primary-100 flex h-fit w-fit items-center justify-center rounded-full border px-2 py-0.5 text-base font-medium">{{ totalItems }} items</span>
        </h2>
        <button @click="closeDialog" class="text-muted-foreground bg-muted hover:bg-muted-foreground/15 hover:text-primary-600 cursor-pointer rounded-full p-2 transition-colors duration-300 outline-primary-500">
          <X class="h-5 w-5" />
        </button>
      </div>

      <!-- Content -->
      <div class="flex max-h-[60vh] flex-col gap-8 overflow-y-auto p-6">
        <div v-if="cart.length === 0" class="flex flex-col items-center justify-center py-8 text-gray-500">
          <PackageX stroke-width="1.5" size="50" />
          <p class="text-lg font-medium">Your cart is empty...</p>
        </div>

        <div v-else v-for="item in cart" :key="item.id" class="flex flex-row gap-4">
          <div class="relative flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-md bg-stone-200/50 p-2.5">
            <img :src="item.image" :alt="item.name" class="h-full w-full object-contain" />
          </div>
          <div class="flex w-full flex-col gap-4">
            <div class="flex w-full flex-row gap-1">
              <div class="flex w-full flex-col">
                <h2 class="line-clamp-1 text-xl font-medium">{{ item.name }}</h2>
                <h4 class="text-muted-foreground text-sm tracking-wider">Size: {{ item.size }}</h4>
              </div>
              <button @click="removeItem(item.id)" class="text-muted-foreground/50 flex h-fit cursor-pointer items-center justify-center p-0.5 transition-colors duration-300 hover:text-red-500">
                <Trash2 size="20" />
              </button>
            </div>
            <div class="flex flex-row items-center justify-between">
              <div class="flex h-fit w-fit flex-row">
                <button
                  @click="decrementQuantity(item)"
                  :disabled="item.quantity <= 1"
                  class="text-muted-foreground disabled:hover:text-muted-foreground flex aspect-square size-8 cursor-pointer items-center justify-center border p-0.5 transition-colors duration-300 hover:text-red-500 disabled:opacity-50"
                >
                  <Minus size="20" />
                </button>
                <input
                  type="number"
                  class="w-12 [appearance:textfield] justify-self-center border-y text-center text-lg font-medium focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  v-model="item.quantity"
                  min="1"
                />
                <button @click="incrementQuantity(item)" class="text-muted-foreground flex aspect-square size-8 cursor-pointer items-center justify-center border p-0.5 transition-colors duration-300 hover:text-red-500">
                  <Plus size="20" />
                </button>
              </div>
              <p class="text-muted-foreground text-base">{{ toRupiah(item.price * item.quantity) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="flex flex-col gap-4 border-t p-6">
        <div class="flex flex-row items-center justify-between">
          <h3 class="text-muted-foreground text-lg">Total</h3>
          <p class="text-xl font-medium">{{ toRupiah(total) }}</p>
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
