<template>
  <div class="pt-20 max-w-screen-xl mx-auto w-full px-6">
    <ResourceHeader
      tag="Industry Reports"
      title="Industry Reports, Insights & Tips"
      description="Real-time reports into the world of compliance, digital identity verification and market trends from Youverify experts."
    />
    <main class="">
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

      <article v-else class="">
        <div>
          <header class="flex flex-col lg:flex-row gap-7 justify-between">
            <div class="max-w-3xl">
              <h2 class="text-2xl text-blue-300">{{ singleReport.title }}</h2>
              <p class="text-blue-300 leading-normal mt-4">
                {{ singleReport.description }}
              </p>
            </div>
            <div class="flex items-center gap-5 text-sm self-end">
              <span class="text-blue">{{
                singleReport.published_at | formatDate
              }}</span>
              <div class="w-2 h-2 bg-blue rounded-full"></div>
              <span class="text-blue">
                {{ computeReadTime(singleReport.word_count) }} mins read</span
              >
            </div>
          </header>

          <div class="mt-12">
            <LazyImage
              :src="singleReport.image.formats.large.url"
              :alt="singleReport.image.alternativeText || singleReport.title"
              class="w-full md:h-120 object-cover"
            />
          </div>
          <section
            v-html="singleReport.excerpt"
            class="my-6 text-black"
          ></section>
        </div>

        <section class="my-8 block md:flex">
          <div class="px-4 w-full md:w-2/3">
            <section class="my-12">
              <h1 class="font-bold text-base text-gray-800">
                👇 Enter your information for immediate access to this report
              </h1>
              <hr class="mb-6 border-gray-200 mt-4" />
              <GetReportForm :report="singleReport" />
            </section>
          </div>
        </section>
      </article>
    </main>
    <!-- <section v-if="report" class="mt-8 mb-24 mx-4">
      <div
        class="w-full max-w-5xl rounded-lg bg-blue-100 px-4 py-8 md:py-12 flex flex-col mx-auto"
      >
        <div class="mx-auto max-w-3xl">
          <h1
            class="md:text-4xl text-2xl mb-2 md:mb-4 font-bold text-center text-blue-200"
          >
            Search for Articles
          </h1>
          <h2 class="text-base font-normal text-gray-800 text-center">
            Read articles, updates and announcements from the team at Yoverify.
            If you have an
          </h2>
          <form
            class="flex gap-3 w-full items-center justify-center mt-6 mx-auto"
          >
            <text-input
              v-model="searchTerm"
              type="text"
              name="search term"
              placeholder="Search Article"
              required
              class="flex-grow !bg-white"
            />
            <button
              type="submit"
              class="outline-0 m-0 select-none capitalize whitespace-nowrap font-semibold px-4 sm:px-8 py-3 text-sm shadow-sm transition-colors rounded"
              :class="[buttonStyles]"
              :disabled="searching"
              @click="getReports(searchTerm)"
            >
              {{ searching ? "searching" : "search" }}
            </button>
          </form>
          <section class="my-4">
            <content-placeholders v-if="searching">
              <content-placeholders-heading />
            </content-placeholders>
            <div v-else-if="searchError" class="w-full">
              <h2 class="text-center text-grey">
                A error occured, please try again later
              </h2>
            </div>
            <template v-else>
              <div class="w-full mt-2 flex justify-end">
                <button
                  v-if="searchResults.length > 0"
                  class="box-border outline-0 m-0 select-none whitespace-nowrap px-4 py-1.5 text-sm border-gray-300 rounded transition-colors hover:border-gray-500 text-gray-800 border"
                  @click="clearSearch()"
                >
                  Clear
                </button>
              </div>
              <Report
                v-for="article in searchResults"
                :key="article.id"
                :article="article"
              />
            </template>
          </section>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ResourceHeader from "@/components/resources/header.vue";
import GetReportForm from "@/components/reports/GetReportForm";
import Report from "@/components/reports/Report";
import TextInput from "@/components/form/TextInput";
import readTime from "@/helpers/readTime.js";

export default {
  components: {
    ResourceHeader,
    Report,
    TextInput,
    GetReportForm,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    ...mapGetters({
      report: "reports/report",
      errors: "reports/errors",
      loading: "reports/loading",
      searchResults: "reports/searchResults",
      searching: "reports/searching",
      searchError: "reports/searchError",
    }),
    singleReport() {
      return this.report[0];
    },
  },
  async asyncData({ store, params }) {
    await store.dispatch("reports/fetchReport", params.report);
  },
  methods: {
    ...mapActions({
      getPopularReports: "reports/fetchReports",
      getReports: "reports/searchReport",
      clearSearch: "reports/clearSearch",
    }),
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en-US", options);
    },
    clearSearch() {
      this.searchTerm = "";
      this.$store.commit("reports/setSearchResults", []);
    },
    computeReadTime(wordCount) {
      return readTime(wordCount);
    },
  },
};
</script>
