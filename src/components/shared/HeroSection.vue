<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
    default: "/src/assets/images/bg_hero_2.png",
  },
});
</script>

<template>
  <section class="relative flex h-[360px] items-center justify-center">
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${props.image})` }"></div>
    <div class="absolute inset-0 bg-black/75" />
    <div class="flex w-full px-8 justify-center">
      <h1 class="relative text-5xl font-medium text-white uppercase tracking-[24px]">
        <slot />
      </h1>
    </div>
  </section>
</template>
