<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="MarketPlaces and Community"
      title="Grow Your Community Faster. Stay Compliant."
      intro="Onboard new Users faster with a customisable no-code drag-and-drop compliance Workflow Builder that gives you the convenience that your business requires to perform optimally and stay compliant."
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
          src="~/assets/images/illustrations/hero-solutions-marketplace.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Stats :stats="stats" />
    <Features :features="features" />
    <Offers
      title="Stay Compliant with AML Regulations in the Marketplace"
      :offers="offers"
    />
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
      title: "Know Your Buyers and Vendors",
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
          content: "Grow Your Community Faster. Stay Compliant.",
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
          icon: "globe",
          title: "Protect your Brand Reputation with Robust KYC",
          note: "Protect your reputation and your business reputation by onboarding legitimate buyers and sellers with real-time access to global data sources",
        },
        {
          icon: "compliant",
          title: "Verify the Identity of Buyers and Sellers",
          note: "Implement a real-time liveness tool to confirm the identity of users in your marketplace platform.",
        },
        {
          icon: "onboarding",
          title: "Connect buyers and sellers in the safest way",
          note: "Create a secure environment between buyers and sellers using Youverify KYC tool to verify the identities of users.",
        },
      ],
      offers: [
        {
          illustration: "checks",
          title: "Sanctions and PEPs checks",
          note: "Conduct sanctions and PEPs (politically Exposed Persons) checks to avoid onboarding risky and fraudulent users on your market platform. Screen users using the over 350 databases issued by the government and financial authorities.",
        },
        {
          illustration: "quality",
          title: "Stay True to AML Compliance",
          note: "Monitor buyers' and sellers' transaction processes with the best KYT compliance tool and avoid being sanctioned by regulatory bodies.",
        },
        {
          illustration: "track-transaction",
          title: "Protect your Market Place Against Money Launderers",
          note: "Leverage Real-Time Insights and Reports. Minimize fraud and risk when you eliminate illegitimate users by leveraging KYT solutions",
        },
      ],
      faqs: [
        {
          question: "What is KYC and AML for Marketplaces",
          answer: `KYC for marketplaces and communities is the process of verifying the identity of customers and buyers in the marketplaces or community.
          
          AML compliance for marketplaces is the process of performing KYC checks on users, monitoring transactions for unusual patterns, and employing risk-based strategies to detect and mitigate potential money laundering activity.`,
        },
        {
          question:
            "Why are KYC and AML Compliance Important for Marketplaces and Communities",
          answer:
            "KYC and AML compliance for marketplaces and communities is essential for maintaining the safety and security of online marketplaces and their communities, as well as ensuring regulatory compliance and protecting the reputation of the marketplace and its users.",
        },
        {
          question:
            "What is the best way to Achieve Compliance in the Marketplaces and Communities?",
          answer:
            "The best way to achieve compliance in the marketplaces and communities involves implementing a robust KYC and AML program, conducting regular risk assessments, using advanced technology solutions and staying up to date with regulatory changes.",
        },
      ],
    };
  },
};
</script>
