<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Customer Verification"
      title="Grow your business with a robust KYC compliance solution."
      intro="Automate customer verification and onboarding with an all-in-one KYC compliance solution, YVOS. Onboard customers globally in seconds at a single click."
    >
      <div slot="buttons" class="flex flex-wrap gap-4 sm:gap-6">
        <AppButton
          text="Get started"
          href="https://os.youverify.co/auth/create-account"
        />
        <AppButton
          theme="secondary"
          :outline="true"
          text="View demo"
          href="#contact"
        >
          <svg slot="append" viewBox="0 0 20 20" fill="none" class="w-5 ml-1.5">
            <path
              d="M6 10H14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10 6L14 10L10 14"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </AppButton>
      </div>
      <div slot="illustration">
        <LazyImage
          class="h-full md:ml-auto"
          src="~/assets/images/illustrations/hero-pep-and-sanction.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Features :features="features" />
    <Offers
      title="Automate KYC Steps to fit your Business Needs"
      :offers="offers"
    />

    <section class="py-24 px-6 max-w-screen-xl mx-auto">
      <h2
        class="text-3xl md:text-5xl font-semibold text-blue-900 text-center max-w-4xl mx-auto capitalize px-8"
      >
        Automate KYC Steps to fit your Business Needs
      </h2>
      <div
        class="mt-28 flex flex-col-reverse md:flex-row items-center gap-16 lg:gap-24"
      >
        <div class="md:w-1/2">
          <div>
            <h3 class="font-semibold text-3xl">
              Build No-Code Workflows for Easy KYC Using our Workflow Builder
            </h3>
            <p class="mt-7">
              Build systematic verification structures to fit your customer risk
              profile, automatically perform verifications based on their
              actions and set up triggers for manual review without writing a
              single line of code.
            </p>
          </div>
          <div class="mt-16">
            <h3 class="font-semibold text-3xl">
              Leverage the Power of our Workflow Builder
            </h3>
            <p class="mt-7">
              The no-code compliance automation tool for your all-in-one Know
              Your Customer (KYC) compliance service solution. Enjoy the latest
              industry updates through our thoroughly researched digital
              identity market report and compliance insights.
            </p>
          </div>
        </div>
        <div class="md:w-1/2">
          <LazyImage src="~/assets/images/screenshots/workflow-builder.svg" />
        </div>
      </div>
    </section>

    <Stats :stats="stats" />
    <ContactUs
      id="contact"
      heading="Start Building Industry Tailored Customer Verification Solutions With Youverify"
      note="Send us a message right away! Our experts will reach out to help you determine the most important customer verification flow for your industry and business. Book a demo below."
    />
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
import ContactUs from "~/components/products/ContactUs.vue";
import Faqs from "~/components/products/faqs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
export default {
  components: {
    HeroSection,
    TrustedClients,
    Features,
    Offers,
    Stats,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "Customer Verification Solution",
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
          content: "Grow your business with a robust KYC compliance solution",
        },
      ],
    };
  },
  data() {
    return {
      stats: [
        {
          figure: "20+",
          name: "platforms and banks have partnered with Youverify",
        },
        {
          figure: "2000+",
          name: "Clients worldwide",
        },
        {
          figure: "94%",
          name: "of customers are likely to recommend Youverify",
        },
        {
          figure: "16%",
          name: "average upsell revenue growth",
        },
      ],
      features: [
        {
          icon: "identify-fraudsters",
          title: "Identify Fraudsters",
          note: "Identify fraudulent customers early through an effective KYC solution. Secure your business against document fraud and verify customer data in seconds.",
        },
        {
          icon: "compliant",
          title: "Stay Compliant",
          note: "Satisfy KYC/AML requirements and avoid fines no matter your jurisdiction across Africa.",
        },
        {
          icon: "onboarding",
          title: "Seamlessly Onboard Users",
          note: "Seamlessly onboard new customers and transact in confidence. Grow your business with fewer compliance worries.",
        },
      ],
      offers: [
        {
          illustration: "identity-verification",
          title: "Realtime Identity Verification",
          note: "Identify and verify your customers in real-time through our easy-to-use data collection and verification platform. Eliminate poor customer onboarding rate.",
        },
        {
          illustration: "address-verification",
          title: "Robust Address Verification",
          note: "With one of the most advanced global address verification systems, we help you verify the address of customers anywhere in the world.",
        },
        {
          illustration: "aml-pep-checks",
          title: "AML/ PEP Checks",
          note: "Identify and classify risky customers on the go through effective AML/ PEP checks to avoid regulatory fines. Our platform scans through sanction lists, watch lists, and adverse media.",
        },
        {
          illustration: "ai-liveness-detection",
          title: "AI-Powered Liveness Detection",
          note: "Our AI-powered liveness detection technology identifies spoofing activities of customers with ill intent. You can also add it as a layer of authentication for enhanced customer security.",
        },
      ],
      // offers: [
      //   {
      //     illustration: "easy-kyc",
      //     title: "Build No-Code Workflows for Easy KYC Using vForms",
      //     note: "Build systematic verification structures to fit your customer risk profile, automatically perform verifications based on their actions and set up triggers for manual review without writing a single line of code.",
      //   },
      //   {
      //     illustration: "v-forms",
      //     title: "Leverage the Power of vForms",
      //     note: "The no-code compliance automation tool for your all-in-one Know Your Customer (KYC) compliance service solution. Enjoy the latest industry updates through our thoroughly researched digital identity market report and compliance insights.",
      //   },
      // ],
      faqs: [
        {
          question: "What is KYC and why is it important?",
          answer:
            "Know Your Customer (KYC) is the process a business undergoes to verify the identity of its customers. KYC aims to prevent the business from being used for criminal activities like money laundering and terrorism funding.",
        },
        {
          question: "Is KYC a legal requirement?",
          answer:
            "Yes. KYC is a legal requirement for all businesses that operate in the regulated industry. Examples include banking, forex trading, gambling and casino, insurance, and more.",
        },
        {
          question: "What are the four elements of KYC?",
          answer: `KYC generally consists of the following elements: 
          \nCustomer Acceptance Policy. 
          \nCustomer Identification Procedures. 
          \nMonitoring of Transactions. 
          \nRisk Management.`,
        },
        {
          question: "How does Youverify provide KYC verification results?",
          answer:
            "Connected to 5000+ data sources, Youverify KYC solution compares the data provided by your customer with the relevant government-backed databases for a match.",
        },
        {
          question: "Which Countries Does Youverify KYC Service Cover?",
          answer:
            "With Youverify's KYC compliance solution (YVOS), you can verify customer data all globally.",
        },
      ],
    };
  },
};
</script>
