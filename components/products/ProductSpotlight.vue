<template>
  <section class="px-6 max-w-screen-xl mx-auto py-20">
    <h2
      class="font-semibold text-5xl text-blue-900 text-center max-w-4xl mx-auto"
    >
      {{ title }}
    </h2>
    <p v-if="paragraph" class="mt-6 md:text-2xl font-medium text-center">
      {{ paragraph }}
    </p>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 mt-32"
    >
      <div
        v-for="(product, index) in spotlight"
        :key="index"
        class="bg-white hover:bg-blue-300 duration-300 ease-in-out pt-5 pb-12 md:pb-20 px-7 rounded-2xl shadow-md group"
      >
        <div
          class="w-20 h-20 rounded-full bg-blue group-hover:bg-white duration-300 ease-in-out bg-opacity-10 flex justify-center items-center"
        >
          <img
            :src="
              require(`~/assets/images/icons/products/${prefix}/${product.icon}.svg`)
            "
          />
        </div>

        <h3
          class="group-hover:text-white duration-300 ease-in-out mt-8 md:mt-12 font-semibold text-xl"
        >
          {{ product.heading }}
        </h3>
        <p
          class="mt-6 text-base group-hover:text-white duration-300 ease-in-out"
        >
          {{ product.note }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    spotlight: {},
    title: String,
    paragraph: String,
    prefix: {
      type: String,
      default: "kyt",
    },
  },
};
</script>
