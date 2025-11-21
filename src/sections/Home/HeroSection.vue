<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const parallaxOffset = ref(0);
const heroSection = ref<HTMLElement | null>(null);

const handleScroll = () => {
  if (!heroSection.value) return;

  const scrolled = window.scrollY;
  const sectionTop = heroSection.value.offsetTop;
  const sectionHeight = heroSection.value.offsetHeight;

  if (scrolled < sectionTop + sectionHeight) {
    parallaxOffset.value = (scrolled - sectionTop) * 0.5;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <section ref="heroSection" class="relative flex min-h-dvh justify-center p-[4dvh] pt-17">
    <div class="relative flex min-h-dvh w-full max-w-[1920px] flex-col justify-between overflow-hidden rounded-[8dvh] px-[3dvw] py-[3.5dvh]">
      <div
        class="absolute inset-0 bg-[url(@/assets/images/bg_hero_1.png)] bg-cover bg-center"
        :style="{
          transform: `translate3d(0, ${parallaxOffset}px, 0)`,
          willChange: 'transform',
        }"
      ></div>

      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 flex flex-col text-right text-[5dvw] leading-[110%] font-medium tracking-tight text-nowrap text-white">
        <h1>
          Lebih dari Sekadar
          <span class="font-normal italic">Merchandise.</span> <br />
          Ini tentang rasa memiliki.
        </h1>
      </div>

      <div class="relative z-10 flex max-w-[45dvw] flex-col gap-[2dvh] text-balance">
        <p class="w-full text-[1.75dvw] leading-[150%] text-white">Official Merchandise Store Held by Badan Usaha Milik Himpunan, Himpunan Mahasiswa Informatika Institut Teknologi Kalimantan.</p>
        <div class="flex flex-row gap-[1dvw]">
          <RouterLink
            to="/about"
            class="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/25 px-[1.5dvw] py-[1.75dvh] text-[3dvh] font-medium text-white backdrop-blur-xs transition-colors hover:border-white/50 hover:bg-white/30"
          >
            Kenali Kami
          </RouterLink>
          <RouterLink to="/products" class="bg-primary-500 hover:bg-primary-600 rounded-full px-[1.5dvw] py-[1.75dvh] text-[3dvh] font-medium text-white transition-colors"> Belanja Skuy </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.absolute.inset-0 {
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
