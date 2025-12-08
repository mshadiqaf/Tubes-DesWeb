import { reactive, computed } from "vue";
import { products } from "@/data/products";

const initializeStock = () => {
  const stockState = {};

  products.forEach((product) => {
    if (product.sizes && product.stockBySizes) {
      stockState[product.id] = { ...product.stockBySizes };
    } else if (product.stock !== undefined) {
      stockState[product.id] = product.stock;
    }
  });

  return stockState;
};

const state = reactive({
  stock: initializeStock(),
});

const getStock = (productId, size = null) => {
  const productStock = state.stock[productId];

  if (!productStock) return 0;

  if (size && typeof productStock === "object") {
    return productStock[size] || 0;
  }

  if (typeof productStock === "object") {
    return Object.values(productStock).reduce((sum, stock) => sum + stock, 0);
  }

  return productStock;
};

const checkAvailability = (productId, size = null, quantity = 1) => {
  const availableStock = getStock(productId, size);
  return availableStock >= quantity;
};

const reserveStock = (productId, size = null, quantity = 1) => {
  const productStock = state.stock[productId];

  if (!productStock) return false;

  if (size && typeof productStock === "object") {
    if (productStock[size] >= quantity) {
      productStock[size] -= quantity;
      return true;
    }
    return false;
  }

  if (typeof productStock === "number") {
    if (productStock >= quantity) {
      state.stock[productId] -= quantity;
      return true;
    }
    return false;
  }

  return false;
};

const releaseStock = (productId, size = null, quantity = 1) => {
  const productStock = state.stock[productId];

  if (!productStock && productStock !== 0) return;

  if (size && typeof productStock === "object") {
    productStock[size] = (productStock[size] || 0) + quantity;
  } else if (!size && typeof productStock === "number") {
    state.stock[productId] = productStock + quantity;
  }
};

const getStockStatus = (productId, size = null) => {
  const stock = getStock(productId, size);

  if (stock === 0) return "out-of-stock";
  if (stock < 5) return "low-stock";
  return "in-stock";
};

const isLowStock = (productId, size = null) => {
  const stock = getStock(productId, size);
  return stock > 0 && stock < 5;
};

const getAllStock = computed(() => state.stock);

export const useStockStore = () => ({
  stock: getAllStock,
  getStock,
  checkAvailability,
  reserveStock,
  releaseStock,
  getStockStatus,
  isLowStock,
});
