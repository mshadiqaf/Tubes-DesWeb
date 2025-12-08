<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";
import AppToast from "./components/ui/AppToast.vue";
import CartDialog from "./components/layout/CartDialog.vue";
import { ref } from "vue";

const dialogTarget = ref(null);
const showDialog = () => dialogTarget.value?.show();
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppToast />
    <AppHeader @show-dialog="showDialog" />
    <CartDialog ref="dialogTarget" />

    <main class="flex-1">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>
