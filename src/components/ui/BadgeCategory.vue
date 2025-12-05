<script setup>
const props = defineProps({
  category: String,
});
</script>

<template>
  <span class="text-sm bg-black/5 border border-black/5 px-2 py-1 rounded-sm font-medium uppercase tracking-widest">{{ props.category }}</span>
</template>