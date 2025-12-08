<script setup>
import { ref } from "vue";
import SectionHeader from "@/components/ui/SectionHeader.vue";
import AppButton from "@/components/ui/AppButton.vue";
import { Send, CheckCircle2 } from "lucide-vue-next";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const showSuccessModal = ref(false);

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    alert("Mohon lengkapi semua field!");
    return;
  }

  showSuccessModal.value = true;

  setTimeout(() => {
    formData.value = {
      name: "",
      email: "",
      message: "",
    };
  }, 2000);
};

const closeModal = () => {
  showSuccessModal.value = false;
};
</script>

<template>
  <section class="relative flex justify-center border-t py-24">
    <div class="relative flex w-full max-w-[1920px] flex-col items-center justify-center gap-12 px-6 text-center">
      <SectionHeader>
        <template #header>Kotak Pesan</template>
        <template #sub-header>Ingin menyampaikan saran, tanggapan atau masukan?</template>
      </SectionHeader>

      <div class="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
          <div class="flex flex-col gap-2 text-left">
            <label for="name" class="text-base font-medium text-gray-700">Nama Lengkap</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              placeholder="Masukkan nama lengkap Anda"
              class="focus:border-primary-500 focus:ring-primary-500/20 rounded-lg border border-gray-300 px-4 py-3 text-base transition-all duration-200 focus:ring-2 focus:outline-none"
              required
            />
          </div>

          <div class="flex flex-col gap-2 text-left">
            <label for="email" class="text-base font-medium text-gray-700">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="nama@email.com"
              class="focus:border-primary-500 focus:ring-primary-500/20 rounded-lg border border-gray-300 px-4 py-3 text-base transition-all duration-200 focus:ring-2 focus:outline-none"
              required
            />
          </div>

          <div class="flex flex-col gap-2 text-left">
            <label for="message" class="text-base font-medium text-gray-700">Pesan</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="6"
              placeholder="Tuliskan pesan, saran, atau masukan Anda di sini..."
              class="focus:border-primary-500 focus:ring-primary-500/20 resize-none rounded-lg border border-gray-300 px-4 py-3 text-base transition-all duration-200 focus:ring-2 focus:outline-none"
              required
            ></textarea>
          </div>

          <AppButton type="submit" variant="primary" size="lg" class="w-full">
            <template #icon>
              <Send :size="20" />
            </template>
            Kirim Pesan
          </AppButton>
        </form>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="showSuccessModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" @click="closeModal">
        <div class="relative flex max-w-md flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-2xl" @click.stop>
          <div class="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 :size="48" class="text-green-600" />
          </div>

          <div class="flex flex-col gap-2 text-center">
            <h3 class="text-2xl font-semibold text-gray-900">Pesan Berhasil Terkirim!</h3>
            <p class="text-gray-600">Terima kasih atas pesan Anda. Kami akan segera merespons.</p>
          </div>

          <AppButton @click="closeModal" variant="primary" size="md" class="w-full">Tutup</AppButton>
        </div>
      </div>
    </Transition>
  </section>
</template>
