<template>
  <div
    :class="lightBlue ? 'bg-blue-100' : white ? 'bg-white' : 'bg-blue-300'"
    class="pt-9 md:pt-12 pb-20"
  >
    <div
      class="px-6 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-28"
    >
      <div class="md:w-3/5 flex flex-col items-start">
        <div
        :class=" !white ? 'bg-white': 'bg-blue-150'"
          class="py-2 px-5 font-medium text-blue rounded capitalize"
        >
          {{ tag }}
        </div>
        <h1
          :class="white ? 'text-blue-300' : 'text-white'"
          class="font-semibold text-2xl md:text-3xl lg:text-5xl mt-4"
        >
          {{ title }}
        </h1>

        <p
          :class="white ? '' : 'text-white'"
          class="my-6"
        >
          {{ intro }}
        </p>

        <slot name="buttons" />
      </div>
      <div class="md:w-2/5">
        <!-- <LazyImage
          class="h-full md:ml-auto"
          :src="require(`~/assets/images/illustrations/${illustration}`)"
        /> -->
        <slot name="illustration" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tag: String,
    title: String,
    intro: String,
    illustration: String,
    white: {
      typeof: Boolean,
      default: true,
    },
    lightBlue: {
      typeof: Boolean,
      default: false,
    },
  },
};
</script>
