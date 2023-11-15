<template>
  <section class="bg-blue-300 py-16">
    <div
      class="px-6 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-20"
    >
      <div class="md:w-1/2">
        <LazyImage src="~/assets/images/screenshots/salesforce.svg" />
      </div>
      <div class="md:w-1/2">
        <h2 class="text-white font-semibold text-2xl md:text-4xl lg:text-5xl">
          Interact with our solution on third-party platforms
        </h2>
        <p class="text-white font-medium text-xl mt-8">
          {{ description }}
        </p>
        <img class="mt-8" src="~/assets/images/icons/salesforce.svg" alt="" />
        <AppButton class="mt-8" text="Try Now" theme="white"
          ><svg
            slot="append"
            viewBox="0 0 20 20"
            fill="none"
            class="w-5 ml-1.5"
          >
            <path
              d="M6 10H14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10 6L14 10L10 14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    description: {
      default:
        "Use business verifications directly within Salesforce to enhance your business processes.",
    },
  },
};
</script>
