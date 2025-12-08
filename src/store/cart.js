import { reactive, computed } from "vue";
import { useToastStore } from "./toast";
import { useStockStore } from "./stock";

const state = reactive({
  items: [],
});

const items = computed(() => state.items);

const totalItems = computed(() => state.items.reduce((total, item) => total + item.quantity, 0));

const totalPrice = computed(() => state.items.reduce((total, item) => total + item.price * item.quantity, 0));

const addItem = (product) => {
  const { checkAvailability, reserveStock, getStock } = useStockStore();
  const { showToast } = useToastStore();

  const existingItem = state.items.find((item) => item.id === product.id && item.size === product.size);
  const quantityToAdd = product.quantity || 1;

  const availableStock = getStock(product.id, product.size);

  if (!checkAvailability(product.id, product.size, quantityToAdd)) {
    showToast(`Sorry, only ${availableStock} units available for ${product.name}${product.size ? ` (${product.size})` : ""}`, "error");
    return false;
  }

  if (!reserveStock(product.id, product.size, quantityToAdd)) {
    showToast(`Failed to add ${product.name} to cart. Please try again.`, "error");
    return false;
  }

  if (existingItem) {
    existingItem.quantity += quantityToAdd;
  } else {
    state.items.push({ ...product, quantity: quantityToAdd });
  }

  showToast(`Successfully added ${quantityToAdd}x ${product.name} to the cart!`);
  return true;
};

const removeItem = (itemToRemove) => {
  const { releaseStock } = useStockStore();

  const item = state.items.find((i) => i.id === itemToRemove.id && i.size === itemToRemove.size);
  if (item) {
    releaseStock(itemToRemove.id, itemToRemove.size, item.quantity);
  }

  state.items = state.items.filter((item) => !(item.id === itemToRemove.id && item.size === itemToRemove.size));
};

const incrementItem = (itemToInc) => {
  const { checkAvailability, reserveStock, getStock } = useStockStore();
  const { showToast } = useToastStore();

  const item = state.items.find((i) => i.id === itemToInc.id && i.size === itemToInc.size);
  if (item) {
    const newQuantity = item.quantity + 1;
    const availableStock = getStock(itemToInc.id, itemToInc.size);

    if (!checkAvailability(itemToInc.id, itemToInc.size, newQuantity)) {
      showToast(`Maximum stock reached (${availableStock} available)`, "error");
      return false;
    }

    if (reserveStock(itemToInc.id, itemToInc.size, 1)) {
      item.quantity++;
      return true;
    }
  }
  return false;
};

const decrementItem = (itemToDec) => {
  const { releaseStock } = useStockStore();

  const item = state.items.find((i) => i.id === itemToDec.id && i.size === itemToDec.size);
  if (item && item.quantity > 1) {
    item.quantity--;
    releaseStock(itemToDec.id, itemToDec.size, 1);
  } else if (item && item.quantity === 1) {
    removeItem(itemToDec);
  }
};

const clearCart = () => {
  const { releaseStock } = useStockStore();

  state.items.forEach((item) => {
    releaseStock(item.id, item.size, item.quantity);
  });

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
