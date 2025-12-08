<script setup>
import AppButton from "@/components/ui/AppButton.vue";
</script>

<template>
  <section class="relative flex justify-center py-12">
    <div class="relative grid w-full max-w-[1920px] grid-cols-1 items-center gap-8 overflow-hidden p-4 md:p-8 lg:grid-cols-2">
      <div class="relative flex min-h-80 w-full justify-center md:min-h-[480px] lg:min-h-[640px]">
        <div class="relative w-full max-w-xl">
          <div class="absolute top-0 left-0 max-w-[480px] object-contain">
            <h3 class="text-xs font-medium tracking-widest uppercase md:text-sm lg:text-base">─ Tampak Depan</h3>
            <img class="" src="/src/assets/images/jahim_depan.png" />
          </div>
          <div class="absolute right-0 bottom-0 flex max-w-84 flex-col gap-4 object-contain">
            <img class="" src="/src/assets/images/jahim_belakang.png" />
            <h3 class="text-right text-xs font-medium tracking-widest uppercase md:text-sm lg:text-base">Tampak Belakang ─</h3>
          </div>
        </div>
      </div>
      <div class="relative flex flex-col justify-start gap-4">
        <div class="flex flex-col gap-1 tracking-tight">
          <h3 class="text-3xl font-medium md:text-5xl lg:text-6xl">Introducing,</h3>
          <h2 class="text-4xl font-medium md:text-6xl lg:text-7xl">
            <span class="from-primary-500 to bg-primary-700 bg-linear-to-r bg-clip-text text-transparent">The New HMIF Jacket.</span>
          </h2>
        </div>
        <div>
          <p class="max-w-xl text-base text-balance text-black/50 md:text-xl lg:text-2xl">Refined materials. Timeless design. Crafted for comfort, built for pride.</p>
        </div>
        <AppButton variant="primary" size="lg" class="md:size-xl" href="/products/1"> Pesan Sekarang </AppButton>
      </div>
    </div>
  </section>
</template>
