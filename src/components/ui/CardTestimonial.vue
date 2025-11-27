<script setup>
import { Quote } from "lucide-vue-next";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="corner-squircle relative flex aspect-11/12 max-w-md min-w-sm flex-col items-end justify-end overflow-hidden rounded-[36px] border bg-cover bg-position-[center_30%] bg-no-repeat shadow-xl"
    :style="{ backgroundImage: `url(${props.image})` }"
  >
    <div class="relative z-20 flex flex-col gap-8 p-6">
      <Quote size="32" class="absolute -top-[10%] -scale-100" />
      <h2 class="text-2xl leading-[130%] font-medium text-balance">{{ props.quote }}</h2>
      <h3 class="text-muted-foreground text-right text-xs font-normal tracking-[2.5px] uppercase">— {{ props.name }}, {{ props.position }}</h3>
    </div>
    <div class="absolute bottom-0 z-10 h-[65%] w-full bg-linear-to-t from-white from-40% to-white/0" />
  </div>
</template>
