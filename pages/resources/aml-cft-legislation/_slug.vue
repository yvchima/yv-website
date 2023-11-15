<template>
  <main>
    <div
      class="pt-16 md:pt-24 mt-28 px-6 max-w-screen-xl mx-auto flex flex-col items-center"
    >
      <div
        style="background-color: #c2e2e9"
        class="py-2 px-4 text-sm font-medium mb-8 text-blue rounded"
      >
        Youverify’s Global Resource
      </div>
      <h1 class="md:text-4xl text-2xl font-semibold text-center text-blue-300">
        Youverify’s Compliance Solutions in
      </h1>
      <div class="mt-6 flex items-center gap-4">
        <LazyImage class="w-20" :src="country[0].flag.url"/>
        <h2>{{ country[0].country }}</h2>
      </div>
    </div>

    <ProductSpotlight :spotlight="spotlight" title="" />
    <Supervisors
      v-if="country[0].supervisors.length > 0"
      :country="country[0].country"
      :supervisors="country[0].supervisors"
    />
    <section
      v-if="country[0].regulation_compliance"
      class="py-20 px-6 bg-blue-100 compliance"
    >
      <div class="max-w-screen-xl mx-auto">
        <article v-html="country[0].regulation_compliance"></article>
      </div>
    </section>
    <section
      v-if="country[0].regulations"
      class="py-20 px-6 max-w-screen-xl mx-auto regulations"
    >
      <article v-html="country[0].regulations"></article>
    </section>

    <ReportingObligations
      :obligations="country[0].AmlReportingObligations"
      :country="country[0].country"
      v-if="country[0].AmlReportingObligations.length > 0"
    />
    <AmlAssist />
    <Integrate />
    <KnowMore />
  </main>
</template>

<script>
import { mapState } from "vuex";
import ResourceHeader from "@/components/resources/header.vue";
import ProductSpotlight from "~/components/products/ProductSpotlight.vue";
import Supervisors from "~/components/legislations/Supervisors.vue";
import ReportingObligations from "~/components/legislations/ReportingObligations.vue";
import AmlAssist from "@/components/common/AmlAssist.vue";
import Integrate from "~/components/products/Integrate.vue";
import KnowMore from "@/components/common/KnowMore.vue";
export default {
  components: {
    ResourceHeader,
    ProductSpotlight,
    Supervisors,
    ReportingObligations,
    AmlAssist,
    Integrate,
    KnowMore,
  },
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
      spotlight: [
        {
          icon: "personalization",
          heading: "Customer Identity Verification",
          note: "Take the first step of fraud prevention, Verify the identity of your customers in compliance with local and global laws.",
        },
        {
          icon: "risk-learning",
          heading: "AdverseMedia Check",
          note: "Stay ahead of potentially risky customers with our AI powered risk classification tool",
        },
        {
          icon: "analytics",
          heading: "PEP and Sanction Check",
          note: "Verify your customers against Global sanction and PEP lists to identify potentially risky or suspicious customers.",
        },
        {
          icon: "wide-capacity",
          heading: "Business Verification",
          note: "Verify the legal existence and ultimate beneficial owners of businesses in over 40 countries.",
        },
        {
          icon: "detection",
          heading: "AML verification and Transaction monitoring solutions",
          note: "Detect suspicious transactions and flag them before they cause harm. Level up your anti money laundry compliance with our AI powered transaction monitoring and anti-money laundering solution.",
        },
        {
          icon: "reporting",
          heading: "Direct Reporting",
          note: "Export data from suspicious transactions potentially indicative of money laundering, fraud, and other financial crimes and report directly to regulators.",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      country: (state) => state.legislations.singleCountry,
    }),
  },
  async asyncData({ store, params }) {
    try {
      await store.dispatch("legislations/getSingleCountry", params.slug);
    } catch (error) {}
  },
};
</script>

<style>
.compliance h2 {
  @apply text-blue-300 text-2xl md:text-4xl lg:text-5xl;
}
.compliance h3 {
  @apply text-blue-300 text-xl md:text-2xl;
}
.regulations h2 {
  @apply text-center text-blue-300 text-2xl md:text-4xl lg:text-5xl  max-w-4xl mx-auto;
}
.regulations h4 {
  @apply text-center text-blue text-xl md:text-2xl my-10 max-w-4xl mx-auto;
}
.regulations ul li {
  @apply list-disc;
}
</style>
