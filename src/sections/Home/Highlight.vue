<template>
  <section class="relative flex justify-center">
    <div
      class="relative grid w-full max-w-[1920px] grid-cols-2 items-center overflow-hidden p-8"
    >
      <div class="relative flex min-h-[640px] w-full justify-center">
        <div class="relative w-full max-w-xl">
          <div class="absolute top-0 left-0 max-w-[480px] object-contain">
            <h3 class="uppercase text-base font-medium tracking-widest">─ Tampak Depan</h3>
            <img
              class=""
              src="/src/assets/images/jahim_depan.png"
            />
          </div>
          <div class="absolute right-0 bottom-0 max-w-84 object-contain flex flex-col gap-4">
            <img
              class=""
              src="/src/assets/images/jahim_belakang.png"
            />
            <h3 class="uppercase text-base font-medium tracking-widest text-right">Tampak Belakang ─</h3>
          </div>
        </div>
      </div>
      <div class="relative flex flex-col justify-center gap-4">
        <div class="flex flex-col gap-1">
          <h3 class="text-6xl font-medium">Introducing,</h3>
          <h2 class="text-7xl font-medium">
            <span
              class="from-primary-500 to bg-primary-700 bg-linear-to-r bg-clip-text text-transparent"
              >The New HMIF Jacket.</span
            >
          </h2>
        </div>
        <div>
          <p class="max-w-xl text-2xl text-balance text-gray-500">
            Refined materials. Timeless design. Crafted for comfort, built for
            pride.
          </p>
        </div>
        <RouterLink
          to="/products"
          class="bg-primary-500 hover:bg-primary-600 inline-flex w-fit rounded-full px-4 py-3 text-xl font-medium text-white transition-colors"
        >
          Pesan Sekarang
        </RouterLink>
      </div>
    </div>
  </section>
</template>
