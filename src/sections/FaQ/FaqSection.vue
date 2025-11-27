<script setup>
import { faqs } from "@/data/faqs";
import { ref } from "vue";

const openIndex = ref({});
const toggle = (sec, idx) => {
  const key = `${sec}-${idx}`;
  openIndex.value[key] = !openIndex.value[key];
};
</script>

<template>
  <section class="relative flex justify-center w-full px-12 py-16">
    <div class="relative grid w-full max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-16">
      <div v-for="(section, secIndex) in faqs" :key="secIndex" class="flex flex-col gap-6">
        <h3 class="text-4xl font-medium">{{ section.title }}</h3>
        <p class="mb-4 text-gray-600">{{ section.description }}</p>

        <div v-for="(item, idx) in section.items" :key="idx" class="border-b py-4">
          <button class="flex w-full items-center justify-between py-2 text-left" @click="toggle(secIndex, idx)">
            <span class="text-lg font-medium">{{ item.question }}</span>

            <span class="transition-transform" :class="openIndex[`${secIndex}-${idx}`] ? 'rotate-180' : 'rotate-0'"> ▼ </span>
          </button>

          <div class="overflow-hidden transition-all duration-300" :class="openIndex[`${secIndex}-${idx}`] ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'">
            <p class="py-2 text-gray-600">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
