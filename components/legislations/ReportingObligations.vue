<template>
  <section class="bg-blue-300">
    <div class="py-24 px-6 max-w-screen-xl mx-auto">
      <h2 class="text-white font-semibold text-2xl md:text-5xl">
        AML/CFT Reporting Obligations in {{ country }}
      </h2>
      <p class="text-white mt-3.5 md:text-2xl">
        Financial institutions in {{ country }} have various reporting
        obligations to comply with AML/CFT regulations. Key reporting
        requirements include:
      </p>

      <div class="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="obligation in obligations"
          :key="obligation.id"
          class="p-10 bg-white hover:bg-transparent hover:border-white border-2 group transition-colors duration-300 ease-in-out"
        >
          <h3
            class="group-hover:text-white transition-colors duration-200 ease-in-out"
          >
            {{ obligation.heading }}:
          </h3>
          <p
            class="mt-3.5 text-sm leading-5 group-hover:text-white transition-colors duration-200 ease-in-out"
          >
            {{ obligation.teaser }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    obligations: {
      type: Array,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
