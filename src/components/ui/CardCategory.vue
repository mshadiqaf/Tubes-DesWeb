<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  name: String,
  description: String,
  image: String,
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <RouterLink :to="props.to" class="group relative flex w-full cursor-pointer flex-col justify-end overflow-hidden p-9">
    <div class="bg-primary-500 absolute inset-0 bg-cover bg-center bg-no-repeat brightness-[0.7] transition-all duration-700 group-hover:scale-105 group-hover:brightness-100" :style="{ backgroundImage: `url(${props.image})` }"></div>
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative z-10 flex flex-col">
      <h2 class="text-8xl text-white">
        {{ props.name }}
      </h2>
      <h3 class="text-xl text-white/50">
        {{ props.description }}
      </h3>
    </div>
  </RouterLink>
</template>
