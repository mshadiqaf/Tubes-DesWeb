<script setup>
import CardProduct from "@/components/shared/CardProduct.vue";
import CategoryTab from "@/components/ui/CategoryTab.vue";
import SearchBar from "@/components/ui/SearchBar.vue";
import { products } from "@/data/products";
import { ref, computed, onMounted, onUnmounted } from "vue";

const searchBarRef = ref(null);

const selectedCategory = ref("All");
const searchQuery = ref("");

const filteredProducts = computed(() => {
  let result = products;

  if (selectedCategory.value !== "All") {
    result = result.filter((product) => product.category === selectedCategory.value);
  }

  if (searchQuery.value.trim() !== "") {
    const keyword = searchQuery.value.toLowerCase().trim();
    result = result.filter((product) => {
      return Object.values(product).join(" ").toLowerCase().includes(keyword);
    });
  }

  return result;
});

const handleCategoryChange = (category) => {
  selectedCategory.value = category;
};

console.log(filteredProducts.value);

const handleKeydown = (event) => {
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "f") {
    event.preventDefault();
    searchBarRef.value?.focus();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center">
    <div class="relative flex w-full max-w-[1660px] flex-col justify-center gap-12 p-6 sm:p-8 md:p-12">
      <div class="relative flex flex-row items-end justify-between gap-4">
        <div class="relative flex flex-col items-start justify-start gap-6">
          <h2 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">Shop by Category</h2>
          <CategoryTab :active="selectedCategory" @change="handleCategoryChange" />
        </div>
        <div class="flex flex-col items-end gap-4">
          <p for="search" class="text-muted-foreground/60 flex w-full flex-row items-center gap-2 text-sm tracking-widest text-nowrap uppercase">
            <span class="from-muted-foreground/50 to-muted-foreground/0 block h-px w-full bg-linear-to-l" /> Press Ctrl + Shift + F to search
          </p>
          <SearchBar ref="searchBarRef" :modelValue="searchQuery" @update:modelValue="($event) => (searchQuery = $event)" />
        </div>
      </div>
      <div class="relative flex flex-1 flex-col items-center justify-center gap-8">
        <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <CardProduct v-for="(product, index) in filteredProducts" :id="product.id" :key="index" :name="product.name" :imagePath="product.imagePath" :price="product.price" :category="product.category" :sizes="product.sizes" />
        </div>
      </div>
    </div>
  </section>
</template>
