<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Crypto"
      title="End-to-End Regulatory Compliance Solution for the Crypto Industry"
      intro="Mitigate the high financial crime risk associated with cryptocurrencies through quick and secure global verification solutions."
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
          src="~/assets/images/illustrations/hero-solutions-crypto.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Stats :stats="stats" />
    <Features :features="features" />
    <Offers
      title="Confidently Scale Your Business into New Markets"
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
      title: "Complete Compliance Workflow for Crypto Platforms",
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
          content:
            "End-to-End Regulatory Compliance Solution for the Crypto Industry",
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
          icon: "automated-onboarding",
          title: "Achieve Compliance",
          note: "Stay abreast of evolving compliance regulations in existing and new markets while onboarding new customers.",
        },
        {
          icon: "compliant",
          title: "Stay Fraud-Free",
          note: "Protect your business and increase public trust through multilayered fraud detection and prevention solution.",
        },
        {
          icon: "onboarding",
          title: "Multi-Layered Verification",
          note: "Customise your verification workflow to satisfy internal policies and industry compliance requirements. Set up unique triggers and assign automatic actions based on risk profile, jurisdiction and customer behaviour.",
        },
      ],
      offers: [
        {
          illustration: "connected-globally",
          title: "Global Verification",
          note: "Acquire clients from anywhere in the world with our global KYC solution that verifies IDs across 100+ countries.",
        },
        {
          illustration: "digital-nomad",
          title: "Real-Time Monitoring",
          note: "Automatically monitor crypto transactions and flag irregular patterns that may be indicative of money laundering or criminal activities through intelligent AI.",
        },
        {
          illustration: "advanced-customisation",
          title: "Reduce Drop-Offs",
          note: "Reduce customer drop-offs during onboarding through user-friendly verification flows that take less than a minute from start to finish.",
        },
      ],

      faqs: [
        {
          question: "What is KYC and AML in Crypto?",
          answer:
            "Know Your Customer (KYC) and Anti Money Laundering (AML) in crypto are regulator obligations that mandate crypto companies to verify their users and ensure they are trusted individuals before making their services available to them. KYC and AML allow crypto companies to stay compliant, and combat money laundering and other financial crimes.",
        },
        {
          question: "Is KYC Compulsory for Crypto Companies?",
          answer:
            "KYC regulation for crypto differs from one jurisdiction to another. If the company operates in a region where it is mandated, the company is required to conduct KYC checks or risk fines and punishments from regulatory authorities.",
        },
      ],
    };
  },
};
</script>
