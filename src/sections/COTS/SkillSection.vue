<script setup>
const skills = [
  {
    name: "Gaming",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At quam odio voluptatum eligendi nisi ipsam ea reprehenderit.",
  },
  {
    name: "Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At quam odio voluptatum eligendi nisi ipsam ea reprehenderit.",
  },
  {
    name: "Coding",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At quam odio voluptatum eligendi nisi ipsam ea reprehenderit.",
  },
];
</script>

<template>
  <section class="relative flex justify-center px-8 py-12 md:py-24">
    <div class="relative flex h-full w-full max-w-[1440px] flex-row items-center justify-center gap-12 px-4 text-center md:gap-8">
      <div class="relative grid h-fit w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div v-for="(skill, index) in skills" :key="index" class="bg-primary-500 hover:bg-amber-500 duration-300 ease-in-out flex min-h-60 w-full flex-col items-center justify-center gap-4 p-4 text-xl text-white">
          <h2 class="text-medium text-4xl">{{ skill.name }}</h2>
          <p>{{ skill.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
