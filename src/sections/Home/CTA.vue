<template>
  <section class="relative flex justify-center p-12">
    <div class="max-w-7xl w-full flex justify-center min-h-[480px] bg-linear-90 from-primary-400 to-primary-200 rounded-[56px]">
      <div class="relative flex flex-col justify-center gap-4">
        <div class="flex flex-col gap-1">
          <h2 class="text-7xl font-medium text-white">
            Tertarik?
          </h2>
          <p class="max-w-xl text-2xl text-balance text-white">
            Langsung aja pesan sekarang — simple, cepat, dan 100% produk resmi HMIF.
          </p>
        </div>
        <RouterLink
          to="/products"
          class="bg-white hover:bg-primary-600 inline-flex w-fit rounded-full px-4 py-3 text-xl font-medium text-primary-500 transition-colors"
        >
          Pesan Sekarang
        </RouterLink>
      </div>
    </div>
  </section>
</template>