<script setup>
import { CircleCheck } from "lucide-vue-next";
import { useToastStore } from "@/store/toast";

const { isVisible, message } = useToastStore();
</script>

<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="transform translate-y-full opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-full opacity-0"
  >
    <div v-if="isVisible" class="fixed bottom-8 left-1/2 z-9999 flex -translate-x-1/2 flex-row items-center gap-2 rounded-xl border bg-white p-4 shadow-lg">
      <CircleCheck class="text-green-500 drop-shadow-sm drop-shadow-green-500/25" size="24" stroke-width="1.5" />
      <p class="text-base text-black/75">{{ message }}</p>
    </div>
  </Transition>
</template>
