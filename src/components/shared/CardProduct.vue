<script setup>

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: "Product Name",
  },
  price: {
    type: Number,
    required: false,
    default: 0,
  },
  image: {
    type: String,
    required: true,
    default: "/src/assets/images/jahim_depan.png",
  },
});

</script>

<template>
  <div class="relative flex w-full flex-col items-center justify-center gap-4 max-w-lg">
    <div class="bg-stone-200/50 p-12 rounded-lg aspect-square">
      <img :src="props.image" alt="">
    </div>
    <div class="relative flex flex-row justify-between w-full">
      <h3>{{ props.name }}</h3>
      <h3>{{ props.price }}</h3>
    </div>
  </div>
</template>
