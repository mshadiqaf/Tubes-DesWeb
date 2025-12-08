<script setup>
import { computed } from "vue";
import { Minus, Plus } from "lucide-vue-next";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: Infinity,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "increment", "decrement"]);

const quantity = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    const numValue = parseInt(value) || props.min;
    const clampedValue = Math.max(props.min, Math.min(props.max, numValue));
    emit("update:modelValue", clampedValue);
  },
});

const increment = () => {
  if (props.modelValue < props.max) {
    emit("update:modelValue", props.modelValue + 1);
    emit("increment");
  }
};

const decrement = () => {
  if (props.modelValue > props.min) {
    emit("update:modelValue", props.modelValue - 1);
    emit("decrement");
  }
};
</script>

<template>
  <div class="flex h-fit w-fit flex-row">
    <button
      @click="decrement"
      :disabled="disabled || modelValue <= min"
      class="text-muted-foreground disabled:hover:text-muted-foreground flex aspect-square size-8 cursor-pointer items-center justify-center border p-0.5 transition-colors duration-300 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Minus size="20" />
    </button>
    <input
      type="number"
      class="w-12 [appearance:textfield] justify-self-center border-y text-center text-lg font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      v-model="quantity"
      :min="min"
      :max="max"
      :disabled="disabled"
    />
    <button
      @click="increment"
      :disabled="disabled || modelValue >= max"
      class="text-muted-foreground flex aspect-square size-8 cursor-pointer items-center justify-center border p-0.5 transition-colors duration-300 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Plus size="20" />
    </button>
  </div>
</template>
