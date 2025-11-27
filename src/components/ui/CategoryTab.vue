<script setup>
const props = defineProps({
  active: String,
});

const emit = defineEmits(["change"]);
const categories = ["All", "Apparel", "Accessories", "Others"];
</script>

<template>
  <div class="flex gap-2 rounded-full bg-muted p-2">
    <button v-for="cat in categories" :key="cat" @click="emit('change', cat)" :class="['rounded-full px-4 py-2 text-xl transition', active === cat ? 'bg-black text-white' : 'bg-gray-200']">
      {{ cat }}
    </button>
  </div>
</template>
