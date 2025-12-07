<script setup>
import { computed } from "vue";

const props = defineProps({
  align: {
    type: String,
    default: "center",
    validator: (value) => ["left", "center", "right"].includes(value),
  },
});

const alignmentClasses = computed(() => {
  switch (props.align) {
    case "left":
      return "items-start text-left";
    case "right":
      return "items-end text-right";
    default:
      return "items-center text-center";
  }
});
</script>

<template>
  <div :class="['relative flex flex-col justify-center gap-2', alignmentClasses]">
    <h2 class="text-primary-500 text-lg tracking-widest uppercase"><slot name="sub-header" /></h2>
    <h1 class="text-8xl font-normal tracking-tight capitalize"><slot name="header" /></h1>
  </div>
</template>
