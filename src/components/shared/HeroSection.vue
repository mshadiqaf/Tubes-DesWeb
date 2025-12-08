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
  <section class="relative flex h-60 items-center justify-center md:h-80 lg:h-[360px]">
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(${props.image})` }"></div>
    <div class="absolute inset-0 bg-black/75" />
    <div class="flex w-full justify-center px-8">
      <h1 class="relative text-2xl font-normal tracking-[8px] text-white uppercase italic text-shadow-[0_0_32px] text-shadow-white md:text-3xl md:tracking-[16px] lg:text-[3.5dvh] lg:tracking-[24px]">
        <slot />
      </h1>
    </div>
  </section>
</template>
