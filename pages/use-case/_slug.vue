<template>
  <div class="pt-40">
    <div
      class="flex flex-col md:flex-row-reverse max-w-screen-xl mx-auto"
    >
      <header class="relative md:w-3/4 py-20">
        <section class="px-6">
          <div class="">
            <div class="">
              <div
                class="text-center mb-8 bg-white w-full py-5"
                style="top: 79px"
              >
                <h1 class="text-3xl lg:text-5xl">
                  Use Case:
                  {{ formattedIndustries ? formattedIndustries.name : "" }}
                </h1>
              </div>

              <div class="border-solid border-2 border-blue p-4 shadow-iframe">
                <iframe
                  id="Iframe"
                  title="User Guarantor Form"
                  width="100%"
                  height="800px"
                  :src="formattedIndustries ? formattedIndustries.link : ''"
                  frameborder="0"
                  class=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; camera; microphone"
                ></iframe>
              </div>
              <div class="mt-3 justify-center sm:mt-4 lg:mt-6 flex flex-wrap">
                <AppButton
                  text="Use Template"
                  target="_blank"
                  :href="`https://os.youverify.co/v-forms/${
                    formattedIndustries ? formattedIndustries.vFormId : ''
                  }/edit/add-fields`"
                >
                  <svg
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
          </div>
        </section>
      </header>

      <section class="py-12 md:pt-52 px-6 md:space-y-1 md:w-1/4 grid md:block gap-4 grid-cols-2">
        <div
          is="nuxt-link"
          :to="`/use-case/${industry.slug}`"
          v-for="industry in industries"
          :key="industry.name"
          :class="
            industry.slug === $route.params.slug ? 'bg-blue-300' : 'bg-white'
          "
          class="flex items-center gap-5 px-5 py-4 md:py-4 rounded-xl"
        >
          <img :src="industry.icons.url" class="h-7 w-7 text-blue hidden md:block" alt="" />
          <h2
            :class="industry.slug === $route.params.slug ? 'text-white' : ''"
            class="font-semibold text-sm "
          >
            {{ industry.name }}
          </h2>
        </div>
      </section>
    </div>

    <Integrate />
    <KnowMore />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Integrate from "~/components/products/Integrate.vue";
import KnowMore from "~/components/common/KnowMore.vue";
export default {
  components: {
    Integrate,
    KnowMore,
  },
  head() {
    return {
      title: this.formattedIndustries.name,
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.params.slug,
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.formattedIndustries.name,
        },
      ],
    };
  },
  methods: {
    async getSingleIndustry() {
      const singleIndustries = await this.$store.dispatch(
        "industries/getSingleIndustries",
        this.$route.params.slug
      );
    },
    async getAllIndustries() {
      await this.$store.dispatch("industries/getIndustries");
    },
  },
  mounted() {
    this.getSingleIndustry();
    this.getAllIndustries();
  },
  computed: {
    ...mapState({
      singleIndustries: (state) => state.industries.singleIndustries,
      industries: (state) => state.industries.industries,
    }),
    formattedIndustries() {
      return this.singleIndustries ? this.singleIndustries[0] : [];
    },
  },
};
</script>

<style></style>
