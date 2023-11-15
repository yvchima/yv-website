<template>
  <div class="pt-20 px-6 max-w-screen-xl mx-auto">
    <ResourceHeader
      tag="Case Studies"
      title="Our Case Studies"
      description="See how we help our customers solve real-life compliance problems and simplify complex workflows."
    />
    <!-- <TrustedClients /> -->
    <content-placeholders v-if="loading" class="w-full my-12">
      <content-placeholders-heading />
      <content-placeholders-img />
      <content-placeholders-text :lines="5" />
    </content-placeholders>
    <section v-else>
      <div v-if="error" class="w-full">
        <h2 class="text-2xl text-center text-gray-500">
          Oops! An error has occured.
        </h2>
      </div>
      <div v-else-if="caseStudies.length" class="grid gap-5 md:gap-7">
        <Card v-for="caseStudy in caseStudies" :key="caseStudy.id" />
      </div>
      <div v-else class="w-full py-8">
        <h2 class="text-3xl text-center text-gray-500">
          No case studies found.
        </h2>
      </div>
    </section>
    <KnowMore />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ResourceHeader from "@/components/resources/header.vue";
import Card from "@/components/resources/CaseStudyCard.vue";
import TrustedClients from "@/components/common/TrustedClients.vue";
import KnowMore from "@/components/common/KnowMore.vue";
export default {
  components: { ResourceHeader, Card, TrustedClients, KnowMore },
  head() {
    return {
      title: "Case Studies",
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
      loading: "cases/loading",
      caseStudies: "cases/caseStudies",
      error: "cases/error",
    }),
  },
  // async asyncData({ store }) {
  //   await Promise.all([store.dispatch("cases/getCaseStudies")]); 
  // },
};
</script>
