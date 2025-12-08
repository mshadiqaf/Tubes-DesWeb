<script setup>
import AppButton from "@/components/ui/AppButton.vue";
</script>

<template>
  <section class="relative flex justify-center border-t px-4 py-8 md:px-8 md:py-16">
    <div class="corner-squircle relative h-fit w-full max-w-[1440px] overflow-hidden rounded-[96px]">
      <div class="absolute inset-y-0 -top-100 -right-60 w-4/5 bg-[url(@/assets/images/bg_faq_cta.png)] bg-cover" />
      <div class="from-secondary-500 via-secondary-400 to-primary-400/0 absolute inset-0 bg-linear-to-r via-40%" />
      <div class="relative flex px-6 py-16 md:px-12 md:py-24 lg:px-18 lg:py-32">
        <div class="flex flex-col items-center justify-center gap-6 text-center lg:items-start lg:text-left">
          <div class="flex flex-col gap-2">
            <h2 class="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">Masih Bingung?</h2>
            <p class="max-w-xl text-base leading-[150%] font-normal text-white md:text-xl lg:text-2xl">Mimin HMIF Store siap sedia untuk bantu kamu loh! Yuk hubungi kami lewat kontak dibawah.</p>
          </div>
          <AppButton class="md:size-xl w-full border-white text-white hover:bg-white/25 md:w-auto" to="/about" variant="secondary" size="lg"> Kontak Kami </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>
