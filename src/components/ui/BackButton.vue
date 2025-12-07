<template>
  <button class="group text-muted-foreground hover:text-primary-500 duration-300 flex w-fit cursor-pointer items-center gap-2 transition-colors" @click="router.back()">
    <ArrowLeft stroke-width="1.2" class="transition-transform duration-300 group-hover:-translate-x-1" />
    <span>Back {{ previousLabel ? `to ${previousLabel}` : "" }}</span>
  </button>
</template>

<script setup>
import { ArrowLeft } from "lucide-vue-next";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

const router = useRouter();
const previousLabel = ref("");

onMounted(() => {
  const previousPath = router.options.history.state.back;
  if (previousPath) {
    const resolvedRoute = router.resolve(previousPath);
    if (resolvedRoute && resolvedRoute.meta && resolvedRoute.meta.label) {
      previousLabel.value = resolvedRoute.meta.label;
    }
  }
});
</script>
