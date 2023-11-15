<template>
  <main>
    <div class="w-full pt-16 md:pt-24 px-6 max-w-screen-xl mx-auto">
      <ResourceHeader
        tag="Youverify’s Global Compliance Resource"
        title="Global AML/CFT Legislation"
        description="Learn more about AML/CTF legislation in your country"
      />
    </div>
    <div class="md:-mt-20">
      <LazyImage
        class="w-full"
        src="~/assets/images/illustrations/global-map.svg"
      />
    </div>
    <div class="max-w-screen-xl mx-auto py-20 px-6">
      <h2 class="text-blue font-semibold text-2xl md:text-4xl">
        Global Coverage
      </h2>
      <p class="text-xl mt-4">
        Hover over each country for further information, or click on it for a
        more thorough overview
      </p>

      <div class="flex gap-12 overflow-scroll mt-12">
        <div
          @click="selectedRegion = region.name"
          v-for="region in regions"
          :key="region.id"
          class="cursor-pointer font-medium text-xl"
          :class="{
            'text-blue-300 font-semibold': region.name === selectedRegion,
          }"
        >
          {{ region.name }}
        </div>
      </div>
      <p v-if="!region.length" class="py-6 text-xl font-medium">
        There is no information on countries within this region
      </p>
      <div
        v-else
        class="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-16"
      >
        <div
          is="nuxt-link"
          :to="`/resources/aml-cft-legislation/${country.slug}`"
          v-for="country in region"
          :key="country.id"
        >
          <LazyImage :src="country.flag.url" :alt="`flag of ${country.name}`" />
          <h4 class="text-grey text-base font-semibold mt-8">
            {{ country.country }}
          </h4>
        </div>
      </div>
    </div>
    <AmlAssist />
    <KnowMore />
  </main>
</template>

<script>
import { mapState } from "vuex";
import ResourceHeader from "@/components/resources/header.vue";
import AmlAssist from "@/components/common/AmlAssist.vue";
import KnowMore from "@/components/common/KnowMore.vue";
export default {
  components: { ResourceHeader, AmlAssist, KnowMore },
  head() {
    return {
      title: "Global AML/CFT Legislation",
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.path,
        },
      ],
    };
  },
  data() {
    return {
      selectedRegion: "North America",
    };
  },
  computed: {
    ...mapState({
      countries: (state) => state.legislations.countries,
      regions: (state) => state.legislations.regions,
    }),
    region() {
      return this.countries.filter(
        (country) => country.legislation_category.name === this.selectedRegion
      );
    },
  },
  async asyncData({ store }) {
    await store.dispatch("legislations/getCountryLegislations");
    await store.dispatch("legislations/getAvailableRegions");
  },
};
</script>
