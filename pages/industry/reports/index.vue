<template>
  <div class="pt-20 max-w-screen-xl mx-auto px-6">
    <ResourceHeader
      tag="Industry Reports"
      title="Industry Reports, Insights & Tips"
      description="Real-time reports into the world of compliance, digital identity verification and market trends from Youverify experts."
    />
    <main>
      <content-placeholders v-if="loading" class="w-full">
        <content-placeholders-heading />
        <content-placeholders-img />
        <content-placeholders-text :lines="5" />
      </content-placeholders>
      <div v-else-if="errors" class="w-full">
        <h2 class="text-2xl text-center text-gray-500">
          Oops! An error has occured.
        </h2>
      </div>
      <div v-else class="">
        <div v-if="reports.length === 0" class="">
          <h2 class="text-2xl text-center text-gray-500">
            There are no reports yet.
          </h2>
        </div>
        <div v-else class="">
          <h2 class="mb-12 text-2xl md:text-3xl">Most Recent Article</h2>
          <div
            is="nuxt-link"
            :to="`/industry/reports/${featuredReport.slug}`"
            class="md:flex hover:shadow-md"
          >
            <LazyImage
              :src="featuredReport.image.formats.large.url"
              :alt="
                featuredReport.image.alternativeText || featuredReport.title
              "
              class="md:w-1/2 lg:w-1/3"
            />
            <div class="py-8 md:py-12 px-4 md:px-6 md:w-1/2 lg:w-2/3">
              <span class="text-blue">{{
                featuredReport.published_at | formatDate
              }}</span>
              <div class="mt-3 md:mt-6 w-full overflow-hidden">
                <h2 class="text-xl md:text-2xl text-blue-300 font-semibold">
                  {{ featuredReport.title }}
                </h2>
                <p class="truncate">{{ featuredReport.description }}</p>
              </div>
            </div>
          </div>
          <hr class="mt-20" />
          <section class="my-16 md:my-32">
            <h2 class="text-2xl md:text-3xl font-semibold mb-10">
              Other Reports
            </h2>
            <template v-if="popularReports.length > 0">
              <div
                class="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 lg:gap-10"
              >
                <Report
                  v-for="article in popularReports"
                  :key="article.id"
                  :article="article"
                />
              </div>
            </template>
            <div v-else class="flex flex-col items-center mt-10">
              <img
                class="w-40 md:w-auto"
                src="~/assets/images/icons/big-search.svg"
                alt=""
              />
              <h3 class="text-xl font-medium mt-8">There are no reports</h3>
            </div>
          </section>
        </div>
      </div>
    </main>
    <KnowMore />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ResourceHeader from "@/components/resources/header.vue";
import KnowMore from "~/components/common/KnowMore.vue";
import Report from "@/components/reports/Report";
// import readTime from "@/helpers/readTime.js";

export default {
  components: {
    Report,
    ResourceHeader,
    KnowMore,
  },
  head() {
    return {
      title: "Industry Report",
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.path,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      reports: "reports/reports",
      errors: "reports/errors",
      loading: "reports/loading",
    }),
    featuredReport() {
      return this.reports[0];
    },
    popularReports() {
      return this.reports.slice(1, this.reports.length);
    },
  },
  async mounted() {
    await this.getPopularReports();
  },
  methods: {
    ...mapActions({
      getPopularReports: "reports/fetchReports",
      getReports: "reports/searchReport",
    }),
  },
};
</script>
