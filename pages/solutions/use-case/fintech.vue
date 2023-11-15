<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Fintech"
      title="Rapidly Onboard Global Customers on Your Fintech Solution without Compromising Compliance"
      intro="Stop losing customers to elaborate compliance processes during onboarding. Rapidly verify users for KYC and AML compliance as they onboard your fintech solution."
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
          src="~/assets/images/illustrations/hero-solutions-fintech.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Stats :stats="stats" />
    <Features :features="features" />
    <Offers
      title="Remain on The Right Side of Compliance While you Scale"
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
      title: "KYC Workflow for FinTechs",
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
            "Rapidly Onboard Global Customers on Your Fintech Solution without Compromising Compliance",
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
          title: "Automate Onboarding Processes",
          note: "Automate customer onboarding flow from start to finish and receive real-time updates on customer verification status.",
        },
        {
          icon: "compliant",
          title: "Integrate Seamlessly",
          note: "Our webhooks enable fintechs seamlessly integrate our technology infrastructure into their platform. This keeps the onboarding cycle from start to finish, on your platform.",
        },
        {
          icon: "onboarding",
          title: "Streamline Customer Onboarding",
          note: "Improve your customer onboarding experience by tailoring their verification requirements to their specific risk level. More verification steps will be triggered for high-risk customers.",
        },
      ],
      offers: [
        {
          illustration: "intelligent-ai",
          title: "Grow Your Business in Confidence",
          note: "Secure your business from the potential compliance problems that arise with rapidly acquiring new customers.",
        },
        {
          illustration: "digital-nomad",
          title: "Allow only Harmless Customers Through",
          note: "Identify and reject applications from ill-intent customers during onboarding to protect your platform from being exploited for illegal activities.",
        },
      ],

      faqs: [
        {
          question: "What is KYC and AML for Fintechs?",
          answer:
            "Know Your Customer (KYC) is one of the key components of verifying a customer's identity.  fintechs are advised to perform KYC checks to authenticate a customer before onboarding. Anti Money Laundering, on the other hand, is a series of regulations put in place to mitigate the risk and activities of money and terrorist financing. Fintechs are advised to monitor clients and report to the relevant authorities when they detect irregular activities.",
        },
        {
          question: "Why are KYC and AML Compliance Important for Fintechs?",
          answer:
            "Although not fully mandatory in some jurisdictions, KYC and AML processes are advised for fintechs and startups looking to build public trust. It also protects them from being leveraged for criminal activities, keeping compliance fines and punishments away.",
        },
        {
          question: "What is the Best way to Achieve Compliance for Fintechs? ",
          answer:
            "The best way to achieve compliance for fintechs is to automate the process using a reliable compliance solution provider. Essentially, fintechs can plugin verification services from the such provider to their tech infrastructure, adopting it as part of their customer onboarding process.",
        },
      ],
    };
  },
};
</script>
