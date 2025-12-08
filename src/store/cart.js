import { reactive, computed } from "vue";
import { useToastStore } from "./toast";

const state = reactive({
  items: [],
});

const items = computed(() => state.items);

const totalItems = computed(() => state.items.reduce((total, item) => total + item.quantity, 0));

const totalPrice = computed(() => state.items.reduce((total, item) => total + item.price * item.quantity, 0));

const addItem = (product) => {
  const existingItem = state.items.find((item) => item.id === product.id && item.size === product.size);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    state.items.push({ ...product, quantity: 1 });
  }

  const { showToast } = useToastStore();
  showToast(`Successfully added ${product.name} to the cart!`);
};

const removeItem = (itemToRemove) => {
  state.items = state.items.filter((item) => !(item.id === itemToRemove.id && item.size === itemToRemove.size));
};

const incrementItem = (itemToInc) => {
  const item = state.items.find((i) => i.id === itemToInc.id && i.size === itemToInc.size);
  if (item) {
    item.quantity++;
  }
};

const decrementItem = (itemToDec) => {
  const item = state.items.find((i) => i.id === itemToDec.id && i.size === itemToDec.size);
  if (item && item.quantity > 1) {
    item.quantity--;
  } else if (item && item.quantity === 1) {
    removeItem(itemToDec);
  }
};

const clearCart = () => {
  state.items = [];
};

export const useCartStore = () => ({
  cart: items,
  totalItems,
  totalPrice,
  addItem,
  removeItem,
  incrementItem,
  decrementItem,
  clearCart,
});
