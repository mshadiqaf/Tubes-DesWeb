<script setup>
import AppButton from "@/components/ui/AppButton.vue";
</script>

<template>
  <section class="relative flex justify-center px-8 py-16">
    <div class="corner-squircle relative h-fit w-full max-w-[1440px] overflow-hidden rounded-[96px]">
      <div class="absolute inset-y-0 -right-40 w-4/5 bg-[url(@/assets/images/bg_home_cta.png)] bg-cover bg-right" />
      <div class="from-primary-500 via-primary-400 to-primary-400/0 absolute inset-0 bg-linear-to-r via-35%" />
      <div class="relative flex px-6 py-16 md:px-12 md:py-24 lg:px-18 lg:py-32">
        <div class="flex flex-col items-center justify-center gap-6 text-center lg:items-start lg:text-left">
          <div class="flex flex-col gap-2">
            <h2 class="text-4xl font-medium text-white md:text-6xl lg:text-8xl">Tertarik?</h2>
            <p class="max-w-xl text-base leading-[150%] font-normal text-white md:text-xl lg:text-2xl">Langsung aja pesan sekarang — simple, cepat, dan 100% produk resmi HMIF.</p>
          </div>
          <AppButton class="md:size-xl border-white text-white hover:bg-white/25" to="/products" variant="secondary" size="lg"> Pesan Sekarang </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>
