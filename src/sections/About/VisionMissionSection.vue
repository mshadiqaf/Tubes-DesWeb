<script setup>
import SectionHeader from "@/components/ui/SectionHeader.vue";
import { Eye, Goal } from "lucide-vue-next";
</script>

<template>
  <section class="relative flex w-full flex-col items-center justify-center p-6 md:p-12">
    <div class="relative flex w-full max-w-[1920px] flex-col">
      <span class="bg-muted-foreground/25 w-full border-t mask-x-from-95% mask-x-to-100%" />
      <div class="grid grow grid-cols-1 md:grid-cols-2">
        <div class="flex flex-col items-center justify-center gap-8 px-6 py-12 md:border-r md:px-12 md:py-16">
          <div class="flex flex-col items-center gap-[-48px]">
            <Eye size="96" class="text-primary-500 drop-shadow-primary-500/25 drop-shadow-md" stroke-width="1.25" />
            <SectionHeader>
              <template #header> Visi </template>
            </SectionHeader>
          </div>
          <p class="max-w-2xl text-center text-lg leading-[200%] font-normal tracking-wide text-pretty text-black/50">
            “Mewujudkan HMIF ITK sebagai wadah pengembangan bagi mahasiswa Informatika ITK dalam bidang hardskill dan softskill yang berdaya saing untuk pengembangan diri, program studi, dan organisasi, serta berkarakter SPECTA.”
          </p>
        </div>
        <div class="flex flex-col items-center justify-center gap-4 px-6 py-12 md:px-12 md:py-16">
          <div class="flex flex-col items-center gap-[-48px]">
            <Goal size="96" class="text-primary-500 drop-shadow-primary-500/25 drop-shadow-md" stroke-width="1.25" />
            <SectionHeader>
              <template #header> Misi </template>
            </SectionHeader>
          </div>
          <p class="max-w-2xl text-center text-lg leading-[200%] font-normal tracking-wide text-pretty text-black/50">
            “Mewujudkan HMIF ITK sebagai wadah pengembangan bagi mahasiswa Informatika ITK dalam bidang hardskill dan softskill yang berdaya saing untuk pengembangan diri, program studi, dan organisasi, serta berkarakter SPECTA.”
          </p>
        </div>
      </div>
      <span class="bg-muted-foreground/25 h-px w-full mask-x-from-95% mask-x-to-100%" />
    </div>
  </section>
</template>
