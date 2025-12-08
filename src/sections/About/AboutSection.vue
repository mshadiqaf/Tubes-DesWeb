<script setup>
import SectionHeader from "@/components/ui/SectionHeader.vue";
</script>

<template>
  <section class="relative flex justify-center py-24">
    <div class="relative flex w-full max-w-[1920px] flex-col items-center justify-center gap-8 text-center">
      <div class="flex flex-col gap-4">
        <SectionHeader>
          <template #header>Tentang Kami</template>
          <template #sub-header>Siapa Kami?</template>
        </SectionHeader>
        <p class="max-w-7xl text-center text-xl leading-[200%] font-normal text-black/50">
          Kami adalah kumpulan mahasiswa Informatika yang bergerak bersama di bawah satu semangat: menciptakan impact nyata bagi civitas akademika, kampus, dan masyarakat. Melalui kolaborasi lintas bidang — dari riset dan teknologi hingga
          desain dan pengabdian masyarakat — IMPACT hadir untuk menjadi ruang tumbuh yang profesional, adaptif, dan relevan dengan tantangan zaman.
        </p>
      </div>
    </div>
  </section>
</template>
