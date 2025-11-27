<template>
  <footer class="from-secondary-300 to-secondary-700 relative flex w-full justify-center overflow-hidden bg-linear-to-br px-8 py-8">
    <div class="relative flex w-full max-w-7xl flex-col justify-between gap-8">
      <div class="flex flex-row justify-between gap-8">
        <div class="flex max-w-lg flex-col gap-2">
          <h1 class="text-8xl font-medium tracking-tight text-white">HMIF Store</h1>
          <p class="text-md w-full font-normal tracking-wide text-wrap text-white">
            Platform resmi merchandise Himpunan Mahasiswa Informatika ITK. Dikelola oleh Badan Usaha Milik Himpunan (BUMH) untuk mendukung kemandirian dan kegiatan organisasi.
          </p>
        </div>
        <div class="flex flex-row gap-16">
          <div class="relative flex flex-col gap-4">
            <h2 class="flex text-base font-bold text-white uppercase">Belanja</h2>
            <ul class="flex flex-col gap-1 text-3xl font-normal">
              <li>
                <RouterLink to="/" class="text-white transition-colors duration-300 hover:text-white/80">Apparels</RouterLink>
              </li>
              <li>
                <RouterLink to="/" class="text-white transition-colors duration-300 hover:text-white/80">Accesories</RouterLink>
              </li>
              <li>
                <RouterLink to="/" class="text-white transition-colors duration-300 hover:text-white/80">Others</RouterLink>
              </li>
            </ul>
          </div>
          <div class="relative flex flex-col gap-4">
            <h2 class="flex text-base font-bold text-white uppercase">Menu</h2>
            <ul class="flex flex-col gap-1 text-3xl font-normal">
              <li>
                <RouterLink to="/" class="text-white transition-colors duration-300 hover:text-white/80">Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/products" class="text-white transition-colors duration-300 hover:text-white/80">Products</RouterLink>
              </li>
              <li>
                <RouterLink to="/testimonials" class="text-white transition-colors duration-300 hover:text-white/80">Testimonials</RouterLink>
              </li>
              <li>
                <RouterLink to="/faq" class="text-white transition-colors duration-300 hover:text-white/80">FaQ</RouterLink>
              </li>
              <li>
                <RouterLink to="/about" class="text-white transition-colors duration-300 hover:text-white/80">About Us</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col items-center justify-center gap-8 border-t border-white/20 pt-8 text-center text-base font-medium text-white uppercase">
        <div class="flex h-12 w-fit flex-row gap-4">
          <img class="object-cover" src="/src/assets/images/logo_itk_horizontal.png" alt="Logo ITK" />
          <img src="/src/assets/images/logo_hmif_itk_white.png" alt="Logo HMIF ITK" />
          <img src="/src/assets/images/logo_kabinet_impact.png" alt="Logo Kabinet IMPACT" />
          <img src="/src/assets/images/logo_bumh.png" alt="Logo Badan Usaha Milik Himpunan" />
        </div>
        <p>
          © 2025 HMIF Store — All Rights Reserved.<br />
          Created by Muhammad Shadiq Al-Fatiy from IF07
        </p>
      </div>
    </div>
    <div class="absolute -bottom-1/12 -left-12">
      <svg xmlns="http://www.w3.org/2000/svg" width="327" height="290" viewBox="0 0 327 290" fill="none">
        <path
          opacity="0.2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M241.759 -0.000213623L78.1874 1.85743L-7.0879e-06 137.282L74.922 288.809L243.045 289.558L326.422 145.145L241.759 -0.000213623ZM278.473 217.957L319.042 147.691L254.198 147.402L213.127 218.539L278.473 217.957ZM275.503 223.102L240.098 284.426L175.254 284.137L210.157 223.684L275.503 223.102ZM204.216 223.737L169.359 284.111L80.9362 283.717L115.108 224.531L204.216 223.737ZM110.689 221.948L76.6896 280.836L37.1562 200.881L69.0937 145.564L110.689 221.948ZM72.0928 140.369L113.688 216.754L155.461 144.4L113.401 69.6003L112.947 69.6079L72.0928 140.369ZM66.2251 140.296L34.4297 195.367L5.80211 137.469L36.1046 84.9834L66.2251 140.296ZM39.1037 79.7887L69.2242 135.101L109.963 64.5392L110.55 64.5293L79.6452 9.56889L39.1037 79.7887ZM118.078 219.386L207.186 218.592L248.303 147.376L159.88 146.982L118.078 219.386ZM247.521 142.254L159.907 141.864L119.218 69.5024L204.25 68.072L247.521 142.254ZM201.293 63.0028L116.367 64.4314L84.0218 6.90974L168.018 5.95582L201.293 63.0028ZM173.904 5.88897L207.161 62.9041L271.89 61.8152L238.838 5.15152L173.904 5.88897ZM274.847 66.8844L210.118 67.9733L253.461 142.28L318.996 142.572L274.847 66.8844Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="absolute right-0 bottom-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="339" height="339" viewBox="0 0 339 339" fill="none">
        <g opacity="0.2">
          <path d="M39.1154 221.654H117.346V299.885H39.1154V221.654Z" fill="url(#paint0_radial_1886_1893)" />
          <path d="M117.346 39.1154H39.1154V117.346H117.346V39.1154Z" fill="url(#paint1_radial_1886_1893)" />
          <path d="M221.654 39.1154H299.885V117.346H221.654V39.1154Z" fill="url(#paint2_radial_1886_1893)" />
          <path d="M221.654 221.654H299.885V299.885H221.654V221.654Z" fill="url(#paint3_radial_1886_1893)" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M182.538 130.385H156.462V0H0V156.462H130.385V182.538H0V339H156.462V208.615H182.538V339H339V182.538H208.615V156.462H339V0H182.538V130.385ZM149.942 6.51923H6.51923V149.942H130.385V136.904H19.5577V19.5577H136.904V149.942H149.942V6.51923ZM149.942 156.462H136.904V182.538H149.942V156.462ZM156.462 156.462V182.538H182.538V156.462H156.462ZM182.538 149.942V136.904H156.462V149.942H182.538ZM189.058 156.462V182.538H202.096V156.462H189.058ZM189.058 6.51923H332.481V149.942H319.442V19.5577H202.096V149.942H189.058V6.51923ZM149.942 189.058H136.904V332.481H149.942V189.058ZM156.462 202.096H182.538V189.058H156.462V202.096ZM189.058 332.481H312.923V319.442H202.096V189.058H189.058V332.481ZM208.615 189.058H332.481V332.481H319.442V202.096H208.615V189.058ZM130.385 189.058V202.096H19.5577V319.442H130.385V332.481H6.51923V189.058H130.385ZM26.0769 208.615H130.385V312.923H26.0769V208.615ZM130.385 130.385H26.0769V26.0769H130.385V130.385ZM208.615 130.385H312.923V26.0769H208.615V130.385ZM208.615 136.904V149.942H312.923V136.904H208.615ZM208.615 208.615V312.923H312.923V208.615H208.615Z"
            fill="url(#paint4_radial_1886_1893)"
          />
        </g>
        <defs>
          <radialGradient id="paint0_radial_1886_1893" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(169.5 169.5) rotate(133.919) scale(244.362)">
            <stop stop-color="white" />
            <stop offset="0.476009" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient id="paint1_radial_1886_1893" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(169.5 169.5) rotate(133.919) scale(244.362)">
            <stop stop-color="white" />
            <stop offset="0.476009" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient id="paint2_radial_1886_1893" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(169.5 169.5) rotate(133.919) scale(244.362)">
            <stop stop-color="white" />
            <stop offset="0.476009" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient id="paint3_radial_1886_1893" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(169.5 169.5) rotate(133.919) scale(244.362)">
            <stop stop-color="white" />
            <stop offset="0.476009" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient id="paint4_radial_1886_1893" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(169.5 169.5) rotate(133.919) scale(244.362)">
            <stop stop-color="white" />
            <stop offset="0.476009" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </footer>
</template>
