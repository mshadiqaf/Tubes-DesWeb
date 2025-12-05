<script setup>
const props = defineProps({
  active: String,
});

const emit = defineEmits(["change"]);
const categories = ["All", "Apparel", "Accessories", "Others"];
</script>

<template>
  <div class="flex gap-2 rounded-full border shadow bg-stone-100 p-1.5">
    <button
      v-for="cat in categories"
      :key="cat"
      @click="emit('change', cat)"
      :class="[
        'cursor-pointer rounded-full px-4 py-2 text-xl font-medium whitespace-nowrap transition-all duration-300 ease-in-out',
        active === cat ? 'bg-primary-500 shadow-primary-500/20 text-white shadow-md' : 'bg-transparent text-stone-700 hover:bg-stone-200',
      ]"
    >
      {{ cat }}
    </button>
  </div>
</template>
