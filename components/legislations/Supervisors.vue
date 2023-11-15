<template>
  <section class="py-24 px-6 max-w-screen-xl mx-auto">
    <h2
      class="font-semibold text-2xl md:text-5xl text-blue-300 text-center max-w-3xl mx-auto"
    >
      AML/CFT Supervisors in {{ country }}
    </h2>

    <div class="mt-24">
      <div
        v-for="supervisor in supervisors"
        :key="supervisor.id"
        class="flex flex-col lg:flex-row justify-between lg:items-center gap-6 md:gap-10 mb-16"
      >
        <div class="">
          <LazyImage class="w-44 md:w-72 lg:w-auto" :src="supervisor.logo.url" />
        </div>
        <div class="lg:w-3/4 xl:w-1/2">
          <h3 class="font-medium text-3xl">{{ supervisor.name }}</h3>
          <p class="mt-5">{{ supervisor.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    supervisors: {
      type: Array,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
};
</script>
