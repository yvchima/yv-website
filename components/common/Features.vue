<template>
  <section class="py-20">
    <div class="relative">
      <div
        class="hidden md:block absolute inset-x-0 bottom-0"
        style="z-index: -1"
      >
        <img src="~/assets/images/illustrations/element.svg" alt="" />
      </div>
      <div
        class="flex flex-col md:flex-row md:justify-center gap-7 md:gap-4 px-6 max-w-screen-xl mx-auto"
      >
        <div
          v-for="feature in features"
          :key="feature.title"
          class="px-5 lg:px-9 pt-14 pb-20 shadow-md flex flex-col items-center text-center rounded-xl bg-white md:max-w-sm"
        >
          <LazyImage
            class="w-20"
            :src="require(`~/assets/images/icons/solutions/${feature.icon}.svg`)"
            :alt="feature.title"
          />
          <h2 class="text-2xl font-semibold mt-8">{{ feature.title }}</h2>
          <p class="mt-4 lg:max-w-xs">{{ feature.note }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
    },
  },
};
</script>
