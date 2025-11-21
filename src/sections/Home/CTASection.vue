<template>
  <section class="relative flex justify-center p-8">
    <div class="relative w-full max-w-[1440px] overflow-hidden rounded-4xl shadow-xl">
      <div class="absolute inset-y-0 -right-40 w-4/5 bg-[url(@/assets/images/bg_cta.png)] bg-cover bg-right" />
      <div class="from-primary-500 via-primary-400 to-primary-400/0 absolute inset-0 bg-linear-to-r via-35%" />
      <div class="relative flex px-18 py-32">
        <div class="flex flex-col justify-center gap-6">
          <div class="flex flex-col gap-2">
            <h2 class="text-8xl font-medium text-white">Tertarik?</h2>
            <p class="max-w-xl text-2xl leading-[150%] font-normal text-white">Langsung aja pesan sekarang — simple, cepat, dan 100% produk resmi HMIF.</p>
          </div>

          <RouterLink to="/products" class="text-primary-500 inline-flex w-fit rounded-full bg-white px-4 py-3 text-xl font-medium transition-colors hover:bg-white/90"> Pesan Sekarang </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
