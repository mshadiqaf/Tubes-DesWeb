<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  variant: {
    type: String,
    default: "Primary",
    validator: (val) => ["primary", "secondary", "glass"].includes(val),
  },
  to: String,
  href: String,
  loading: Boolean,
  disabled: Boolean,
});

const base = "inline-flex rounded-full text-medium items-center justify-center gap-2 transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-primary-500 hover:bg-primary-600 text-white",
  secondary: "border border-white/25 bg-white/25 text-white backdrop-blur-lg hover:border-white/50 hover:bg-white/30",
  glass: "border border-white/25 bg-white/25 text-white backdrop-blur-lg hover:border-white/50 hover:bg-white/30",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const classes = computed(() => `${base} ${variants[props.variant]} ${sizes[props.size]}`);
const tag = computed(() => (props.to ? RouterLink : props.href ? "a" : "button"));
</script>

<template>
  <component :is="tag" :to="to" :href="href" :class="classes">
    <span v-if="iconPosition === 'left'">
      <span v-if="loading" class="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent"></span>
      <slot v-else name="icon" />
    </span>

    <span><slot /></span>

    <span v-if="iconPosition === 'right'">
      <span v-if="loading" class="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent"></span>
      <slot v-else name="icon" />
    </span>
  </component>
</template>
