<script setup>
import AppButton from "@/components/ui/AppButton.vue";
</script>

<template>
  <section class="relative flex justify-center border-t p-12">
    <div class="relative w-full max-w-[1440px] overflow-hidden rounded-[96px] corner-squircle shadow-xl">
      <div class="absolute inset-y-0 -top-100 -right-60 w-4/5 bg-[url(@/assets/images/bg_faq_cta.png)] bg-cover" />
      <div class="from-secondary-500 via-secondary-400 to-primary-400/0 absolute inset-0 bg-linear-to-r via-40%" />
      <div class="relative flex px-18 py-32">
        <div class="flex flex-col justify-center gap-6">
          <div class="flex flex-col gap-2">
            <h2 class="text-6xl font-medium tracking-tight text-white">Masih Bingung?</h2>
            <p class="max-w-xl text-2xl leading-[150%] font-normal text-white">Mimin HMIF Store siap sedia untuk bantu kamu loh! Yuk hubungi kami lewat kontak dibawah.</p>
          </div>
          <AppButton to="/about" variant="secondary" size="xl"> Kontak Kami </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>
