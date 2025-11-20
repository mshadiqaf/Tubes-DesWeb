<template>
  <footer
    class="from-secondary-400 to-secondary-700 relative flex w-full justify-center bg-linear-to-br px-8 py-10"
  >
    <div class="relative flex w-full max-w-7xl flex-col justify-between gap-12">
      <div class="flex flex-row justify-between gap-8">
        <div class="flex flex-col gap-4">
          <div class="flex h-14 w-fit flex-row gap-2">
            <img
              class="object-cover"
              src="/src/assets/images/logo_itk_horizontal.png"
              alt="Logo ITK"
            />
            <img
              src="/src/assets/images/logo_hmif_itk_white.png"
              alt="Logo HMIF ITK"
            />
          </div>
          <div class="flex max-w-lg flex-col gap-2">
            <h1 class="text-7xl font-medium tracking-tight text-white">
              HMIF Store
            </h1>
            <p class="text-normal w-full text-wrap text-white">
              Platform resmi merchandise Himpunan Mahasiswa Informatika ITK.
              Dikelola oleh Badan Usaha Milik Himpunan (BUMH) untuk mendukung
              kemandirian dan kegiatan organisasi.
            </p>
          </div>
        </div>
        <div class="flex flex-row gap-16">
          <div class="relative flex flex-col gap-4">
            <h2 class="flex text-base font-bold text-white uppercase">
              Belanja
            </h2>
            <ul class="flex flex-col gap-1 text-3xl font-normal">
              <li>
                <RouterLink
                  to="/"
                  class="text-white transition-colors duration-300 hover:text-white/80"
                  >Apparels</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="text-white transition-colors duration-300 hover:text-white/80"
                  >Accesories</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="text-white transition-colors duration-300 hover:text-white/80"
                  >Others</RouterLink
                >
              </li>
            </ul>
          </div>
          <div class="relative flex flex-col gap-4">
            <h2 class="flex text-base font-bold text-white uppercase">Menu</h2>
            <ul class="flex flex-col gap-1 text-3xl font-normal">
              <li>
                <RouterLink
                  to="/"
                  class="text-white transition-colors duration-300 hover:text-white/80"
                  >Home</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/products"
                  class="text-white transition-colors duration-300 hover:text-white/80"
                  >Products</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/testimonials"
                  class="text-white transition-colors duration-300 hover:text-white/80"
                  >Testimonials</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/faq"
                  class="text-white transition-colors duration-300 hover:text-white/80"
                  >FaQ</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/about"
                  class="text-white transition-colors duration-300 hover:text-white/80"
                  >About Us</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="flex w-full justify-center text-center text-base font-medium text-white uppercase"
      >
        <p>
          © 2025 HMIF Store — All Rights Reserved.<br />
          Created by Muhammad Shadiq Al-Fatiy from IF07
        </p>
      </div>
    </div>
  </footer>
</template>
