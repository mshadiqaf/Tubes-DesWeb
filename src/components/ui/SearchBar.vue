<script setup lang="ts">
import { SearchIcon } from "lucide-vue-next";
import { ref } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const searchInput = ref<HTMLInputElement | null>(null);

const focus = () => {
  searchInput.value?.focus();
};

defineExpose({
  focus,
});
</script>

<template>
  <div
    class="group focus-within:border-primary-500 focus-within:ring-primary-500 focus-within:shadow-primary-500/10 flex min-w-sm gap-4 overflow-hidden rounded-full border px-4 py-2.5 shadow-sm transition-all duration-300 ease-in-out focus-within:shadow-xl focus-within:ring"
  >
    <SearchIcon class="text-muted-foreground group-focus-within:text-primary-600 group-focus-within:drop-shadow-primary-500/50 drop-shadow-sm drop-shadow-black/5 transition-all duration-300 ease-in-out" :size="32" />
    <input
      ref="searchInput"
      :value="props.modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      ,
      name="searchBar"
      type="search"
      placeholder="Search products..."
      class="w-full bg-transparent text-xl text-gray-600 outline-none"
    />
  </div>
</template>
