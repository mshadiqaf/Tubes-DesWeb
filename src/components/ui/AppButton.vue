<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (val) => ["primary", "secondary", "ghost", "glass"].includes(val),
  },
  size: {
    type: String,
    default: "md",
    validator: (val) => ["sm", "md", "lg", "xl"].includes(val),
  },
  iconPosition: {
    type: String,
    default: "left",
    validator: (val) => ["left", "right"].includes(val),
  },
  to: String,
  href: String,
  loading: Boolean,
  disabled: Boolean,
});

const base = "flex w-fit h-fit rounded-full font-medium flex-row items-center justify-center cursor-pointer gap-2 duration-300 transition-all whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white shadow-lg shadow-primary-500/10 hover:shadow-lg hover:shadow-primary-500/25 duration-300",
  secondary: "bg-transparent border-primary-500 border-2 text-primary-500 font-normal hover:bg-primary-50 active:bg-primary-100",
  ghost: "border text-muted-foreground",
  glass: "border border-white/25 bg-white/25 text-white backdrop-blur-lg hover:border-white/50 hover:bg-white/30",
};

const sizes = {
  sm: "px-2 py-1 text-base",
  md: "px-3 py-2 text-lg",
  lg: "px-4 py-3 text-xl",
  xl: "px-6 py-4 text-2xl",
};

const classes = computed(() => `${base} ${variants[props.variant]} ${sizes[props.size]}`);
const tag = computed(() => (props.to ? RouterLink : props.href ? "a" : "button"));
</script>

<template>
  <component :is="tag" :to="to" :href="href" :class="classes">
    <span v-if="iconPosition === 'left' && $slots.icon">
      <span v-if="loading" class="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent"></span>
      <slot v-else name="icon" />
    </span>

    <span><slot /></span>

    <span v-if="iconPosition === 'right' && $slots.icon">
      <span v-if="loading" class="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent"></span>
      <slot v-else name="icon" />
    </span>
  </component>
</template>
