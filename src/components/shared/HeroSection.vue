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
    <div class="flex w-full justify-center px-8">
      <h1 class="relative text-[3.5dvh] font-normal tracking-[24px] text-white uppercase italic">
        <slot />
      </h1>
    </div>
  </section>
</template>
