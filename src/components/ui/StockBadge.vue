<script setup>
import { computed } from "vue";
import { PackageCheck, AlertCircle } from "lucide-vue-next";

const props = defineProps({
  stockStatus: {
    type: String,
    required: true,
    validator: (value) => ["in-stock", "low-stock", "out-of-stock"].includes(value),
  },
});

const getStockStatusLabel = (status) => {
  const labels = {
    "in-stock": "In Stock",
    "low-stock": "Low Stock",
    "out-of-stock": "Out of Stock",
  };
  return labels[status] || "Unknown";
};

const getStockBadgeColor = (status) => {
  const colors = {
    "in-stock": "bg-green-100 text-green-700 border-green-300",
    "low-stock": "bg-orange-100 text-orange-700 border-orange-300",
    "out-of-stock": "bg-red-100 text-red-700 border-red-300",
  };
  return colors[status] || "bg-gray-100 text-gray-700 border-gray-300";
};

const stockStatusLabel = computed(() => getStockStatusLabel(props.stockStatus));
const stockBadgeColor = computed(() => getStockBadgeColor(props.stockStatus));
const isOutOfStock = computed(() => props.stockStatus === "out-of-stock");
</script>

<template>
  <div class="flex w-fit items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium" :class="stockBadgeColor">
    <PackageCheck v-if="!isOutOfStock" :size="16" />
    <AlertCircle v-else :size="16" />
    <span>{{ stockStatusLabel }}</span>
  </div>
</template>
