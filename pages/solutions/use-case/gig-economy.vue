<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Gig Economy"
      title="Full Cycle Onboarding Solution for Gig Economy Platforms"
      intro="Keep your customers safe. Prevent imposters from onboarding your gig economy platform."
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
          src="~/assets/images/illustrations/hero-solutions-gig-economy.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Stats :stats="stats" />
    <Features :features="features" />
    <Offers
      title="Stay User Friendly While Keeping Fraudsters Away"
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
      title:
        "KYC Solution for Securing the Gig and Digital Economy",
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
          content: "Full Cycle Onboarding Solution for Gig Economy Platforms",
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
          title: "Global Coverage",
          note: "Confidently expand into new markets with our global solution that allows you to verify users anywhere in the world.",
        },
        {
          icon: "compliant",
          title: "Tailored Security for Your Business",
          note: "Connect customers with only verified individuals on your platform for optimal security.",
        },
        {
          icon: "onboarding",
          title: "Build Public Trust",
          note: "Win public trust with customer verification during onboarding. Provide a safe and secure marketplace for your users.",
        },
      ],
      offers: [
        {
          illustration: "connected-globally",
          title: "Global Verification",
          note: "Know the true identity of gig providers on your platform to hold them accountable for their actions.",
        },
        {
          illustration: "sales-consulting",
          title: "Drive Customer Loyalty",
          note: "Drive customer loyalty through user-friendly experience and prioritising their security.",
        },
        {
          illustration: "borderless",
          title: "No Border, No Limits",
          note: "Onboard users from 100+ countries without compromising compliance or increasing operational cost.",
        },
        {
          illustration: "toggle",
          title: "Set Your own Rules",
          note: "Customise the compliance workflow to the specific needs of your business. Set criteria for automatic acceptance or rejection of user applications.",
        },
      ],
      faqs: [
        {
          question: "What is KYC for Gig Economy Businesses?",
          answer:
            "Know Your Customer simply refers to the process of verifying an individual identity to ascertain that they are really who they claim to be.",
        },
        {
          question: "Why is KYC Important for Gig Economy Businesses?",
          answer:
            "For gig economy platforms, it ensures that the business only onboards legitimate clients and eliminates fraudsters before they even become a threat.",
        },
        {
          question:
            "Is it Compulsory for Gig Economy Businesses to Perform KYC?",
          answer:
            "The KYC requirements for gig economy businesses differ from one jurisdiction to another. However, although it might not be compulsory in some countries, it is important that businesses still perform KYC to gain public trust and protect their users.",
        },
      ],
    };
  },
};
</script>
