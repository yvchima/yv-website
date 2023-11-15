<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Banks"
      title="Compliance Automation for Banks and Financial Institutions"
      intro="End-to-end compliance solution that is designed to specifically meet the needs of your organisation. Satisfy, KYC and AML compliance through our elaborate solution for the banking and finance industry."
    >
      <div slot="buttons" class="flex flex-wrap gap-4 sm:gap-6">
        <AppButton
          text="Get started"
          href="https://os.youverify.co/auth/create-account"
        />
      </div>
      <div slot="illustration">
        <LazyImage
          class="h-full md:ml-auto"
          src="~/assets/images/illustrations/hero-solutions-banks.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Stats :stats="stats" />
    <Features :features="features" />
    <Offers
      title="Satisfy Compliance Requirements with Automatable End-to-End Verification Solution"
      :offers="offers"
    />
    <section class="py-20 px-6 max-w-screen-xl mx-auto text-center">
      <h2
        class="text-blue-300 font-semibold text-3xl md:text-5xl max-w-5xl mx-auto"
      >
        Custom Design your Verification Processes to Industry-Standard AML
        Policy
      </h2>
      <p class="mt-8 max-w-3xl mx-auto">
        Build automated verification workflows based on customer risk levels to
        automatically trigger extra checks following certain user actions. Set
        manual case review criteria through our workflow builder without writing
        a single code.
      </p>

      <LazyImage class="mt-6 md:mt-16" src="~/assets/images/illustrations/bank-solution.svg"/>
    </section>
    <section class="py-20 px-6 max-w-screen-xl mx-auto">
      <h2 class="text-blue-300 font-semibold text-3xl md:text-5xl text-center">
        All your Compliance Needs in one Place
      </h2>

      <div class="mt-20 flex flex-col md:flex-row gap-8">
        <div
          v-for="need in needs"
          :key="need.name"
          class="px-5 lg:px-12 py-14 hover:shadow-lg md:w-1/3"
        >
          <img
            :src="require(`~/assets/images/icons/solutions/${need.icon}.svg`)"
            :alt="need.name"
          />
          <h3 class="mt-9 font-medium text-3xl">{{ need.name }}</h3>
          <p class="text-sm mt-3">{{ need.teaser }}</p>
        </div>
      </div>
    </section>
    <Integrate />
    <Testimonials />
    <Onboarding />
    <Faqs :faqs="faqs" />
    <KnowMore />
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
import TrustedClients from "~/components/common/TrustedClients.vue";
import Features from "~/components/common/Features.vue";
import Offers from "~/components/products/Offers.vue";
import Stats from "~/components/common/Stats.vue";
import Integrate from "~/components/products/Integrate.vue";
import Testimonials from "~/components/common/Testimonials.vue";
import Onboarding from "~/components/products/Onboarding.vue";
import Faqs from "~/components/products/faqs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
export default {
  components: {
    HeroSection,
    TrustedClients,
    Features,
    Offers,
    Stats,
    Integrate,
    Testimonials,
    Onboarding,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "End to End Compliance Automation for Banks",
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.path,
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Compliance Automation for Banks and Financial Institutions",
        },
      ],
    };
  },
  data() {
    return {
      stats: [
        {
          figure: "1 sec",
          name: "Average verification time",
        },
        {
          figure: "20+",
          name: "Certified legal experts",
        },
        {
          figure: "1 hour",
          name: "Integration time",
        },
      ],
      features: [
        {
          icon: "identify-fraudsters",
          title: "Eliminate Fraud",
          note: "Protect your platform and business infrastructure from being taken advantage of by fraudsters through robust compliance solutions.",
        },
        {
          icon: "compliant",
          title: "Seamlessly Comply with Regulations",
          note: "Satisfy compliance regulations while conquering new markets through necessary regulatory requirements.",
        },
        {
          icon: "onboarding",
          title: "Onboard Customers Remotely",
          note: "Automatically onboard customers in minutes without them having to visit your physical branch.",
        },
      ],
      offers: [
        {
          illustration: "intelligent-ai",
          title: "Achieve Higher Pass Rates",
          note: "Seamless customer verification process for itch-free user onboarding and achieving maximum pass rates.",
        },
        {
          illustration: "digital-nomad",
          title: "Eliminate Onboarding Barriers",
          note: "Remove onboarding obstacles and verify customers from anywhere in the world with access to government-backed identity databases of 100+ countries.",
        },
        {
          illustration: "advanced-customisation",
          title: "Secure Your Business from Fraud Losses",
          note: "Identify the most elaborate fraud activities through our AI-powered algorithm that calculates risk scores, predicting high-risk customers who are likely fraudsters before they onboard your system and cause financial losses.",
        },
      ],
      needs: [
        {
          icon: "id-card",
          name: "KYC/AML",
          teaser:
            "Verify and onboard customers anywhere in the world without compromising on compliance.",
        },
        {
          icon: "online-payment",
          name: "KYT",
          teaser:
            "Real-time monitor customer transactions for suspicious patterns and potential money laundering activities before they go through.",
        },
        {
          icon: "briefcase",
          name: "KYB",
          teaser:
            "Leverage our full-cycle business verification solution to verify businesses before establishing partnerships and transactional business relationships.",
        },
      ],

      faqs: [
        {
          question: "What is KYC in Banking?",
          answer:
            "Know Your Customer (KYC) is one of the key components of verifying a customer's identity.  Banks are required to perform KYC checks to authenticate a customer before onboarding.",
        },
        {
          question: "What is AML in Banking?",
          answer:
            "Anti Money Laundering is a series of regulations put in place to mitigate the risk and activities of money and terrorist financing. Financial institutions are mandated to monitor clients and report to the relevant authorities when they detect irregular activities.",
        },
        {
          question: "Why are KYC and AML important in Banking?",
          answer:
            "KYC and AML in banking are mandatory as they help banks identify and deal with risks associated with illegal funds and transactions. With the right KYC and AML procedures, banks can easily combat money laundering, terrorism financing and other illegal criminal activities. ",
        },
      ],
    };
  },
};
</script>
