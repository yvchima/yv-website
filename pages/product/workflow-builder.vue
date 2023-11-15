<template>
  <div class="pt-20">
    <section class="py-20 mt-28 bg-blue-150">
      <div
        class="px-6 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-28"
      >
        <div class="md:w-3/5 flex flex-col items-center md:items-start">
          <div
            class="py-2 px-5 font-medium text-blue bg-white rounded capitalize"
          >
            Compliance Workflow Builder
          </div>
          <h1
            class="font-semibold text-2xl text-center md:text-left md:text-3xl lg:text-5xl mt-4 text-blue-900"
          >
            Build Custom Workflows to Suit Specific Compliance Needs
          </h1>

          <p class="text-center md:text-left my-6">
            Simplify your decision-making process through automated no-code
            workflow builder and improve user onboarding rate while satisfying
            regulatory requirements.
          </p>

          <AppButton
            theme="white"
            text="See how it Works"
            href="/use-case/business-account-opening"
          >
            <svg
              slot="append"
              viewBox="0 0 20 20"
              fill="none"
              class="w-5 ml-1.5"
            >
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
        <div class="h-72 md:h-auto md:w-2/5">
          <LazyImage
            class="h-full md:ml-auto"
            src="~/assets/images/illustrations/hero-workflow-builder.svg"
          />
        </div>
      </div>
    </section>
    <TrustedClients />
    <Features :features="features" />
    <!-- <section class="bg-blue-300 py-28">
      <div class="px-6 max-w-screen-xl mx-auto flex gap-8 items-center">
        <div class="space-y-7 lg:space-y-20 w-full md:w-1/2">
          <div
            @click="benefitIndex = index"
            v-for="(benefit, index) in benefits"
            :key="index"
            class="cursor-pointer"
          >
            <h2
              class="font-semibold text-center md:text-left text-xl lg:text-3xl"
              :class="
                benefitIndex === index
                  ? 'text-white'
                  : 'text-white md:text-grey'
              "
            >
              {{ benefit.title }}
            </h2>
            <div class="md:hidden mt-4">
              <LazyImage
                class="sm:h-72 mx-auto"
                :src="
                  require(`~/assets/images/screenshots/${benefit.image}.svg`)
                "
              />
            </div>

            <p
              v-if="benefitIndex === index"
              class="text-white hidden md:block text-lg lg:text-2xl mt-3 lg:mt-5"
              :class="benefitIndex === index ? 'text-white' : 'text-grey'"
            >
              {{ benefit.note }}
            </p>
          </div>
        </div>

        <div
          class="border-l-2 border-white self-stretch hidden md:block relative"
        >
          <div class="flex items-center absolute top-1/2 left-0">
            <div class="w-8 h-0.5 bg-white"></div>
            <div class="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <div class="hidden md:block pl-4 lg:pl-8 w-1/2">
          <img
            :src="
              require(`~/assets/images/screenshots/${benefits[benefitIndex].image}.svg`)
            "
          />
        </div>
      </div>
    </section> -->
    <Offers
      title="Build Code-Free Compliance Workflows"
      paragraph="Design verification workflows based on user demographics and other preset conditions for the best blend of high pass rates, fraud protection and compliance satisfaction."
      :offers="offers"
    />
    <Integrate />
    <Testimonials />
    <ContactUs
      id="contact"
      heading="Start Building No-Code Compliance Workflows with Youverify Today"
      note="Send us a message right away! Our experts will reach out to help you determine the most important verification flow for your industry and get started with building right away. Book a demo below."
    />
    <Faqs :faqs="faqs" />
    <KnowMore />
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
import TrustedClients from "~/components/common/TrustedClients.vue";
import Features from "~/components/products/Features.vue";
import Offers from "~/components/products/Offers.vue";
import Integrate from "~/components/products/Integrate.vue";
import Testimonials from "~/components/common/Testimonials.vue";
import ContactUs from "~/components/products/ContactUs.vue";
import Faqs from "~/components/products/faqs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
export default {
  components: {
    HeroSection,
    TrustedClients,
    Features,
    Offers,
    Integrate,
    Testimonials,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "Compliance Workflow Builder",
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
          content: "Build Custom Workflows to Suit Specific Compliance Needs",
        },
      ],
    };
  },
  data() {
    return {
      benefitIndex: 0,
      steps: [
        " Customer provides accepted identity information (e.g Driver's licence number, Passport number, etc)",
        "This number is collected and verified against our 300m+ global government-backed database and document verification services.",
        "The result comes out positive if there's a match and negative if there is none. Response time is immediate.",
      ],
      features: [
        {
          title: "Setup Your Verification Flow",
          note: "Our no-code tool allows you to build a step-by-step compliance verification solution tailored to your specific need. Receive guidance from our compliance solution support team in picking the right conditions, verification steps, triggers and reactive actions.",
        },
        {
          title: "Set Condition-Specific Triggers",
          note: "Set up automatic verification requests for your customers based on data supplied by prospective users.",
        },
        {
          title: "Make Smart Compliance Decisions",
          note: "Automate your customer onboarding decision-making process with preset rules and actions while retaining control to manually review cases of interest.",
        },
      ],
      benefits: [
        {
          title: "Simple and Flexible Customisable Flow for Your Brand.",
          note: "Customise our workflow builder to suit your brand. Add custom colours, logos, backgrounds and other elements for a more customer-friendly interface and overall onboarding experience.",
          image: "workflow-builder",
        },
        {
          title: "Verify IDs Across 100+ Countries",
          note: "Verify customer identities from 100+ countries globally via Optical Character Recognition (OCR) or directly from government-backed databases.",
          image: "workflow-builder-3",
        },
        {
          title: "All Your Compliance Needs in One Place",
          note: "Our workflow builder allows you to custom-build your customer compliance journey from a wide range of options including identity and address verification, business search, AML checks, and liveness detection all in one place.",
          image: "workflow-builder-2",
        },
      ],
      offers: [
        {
          illustration: "workflow-screen-1",
          title: "Design Step-by-Step User Verification Stages",
          note: "Set up step-by-step customer verification processes based on jurisdictions, demographics and your specific industry best practices. Some users might only need KYC verification - simplify their flow and help them onboard instantly.",
        },
        {
          illustration: "workflow-screen-2",
          title: "Verify IDs Across 100+ Countries",
          note: "Verify customer identities from 100+ countries globally via Optical Character Recognition (OCR) or directly from government-backed databases.",
        },
        {
          illustration: "workflow-screen-3",
          title: "All Your Compliance Needs in One Place",
          note: "Our workflow builder allows you to custom-build your customer compliance journey from a wide range of options including identity and address verification, business search, AML checks, and liveness detection all in one place.",
        },
      ],
      faqs: [
        {
          question: "What is a Compliance Workflow?",
          answer:
            "Compliance workflows allow you to build step-by-step compliance processes which a user needs to pass to get onboarded on your platform. It can be tailored to fit your specific needs like identity verification, AML screening, address verification, and biometric authentication. Etc. Depending on the compliance regulatory requirements for your business and industry. ",
        },
        {
          question: "What Aspects of Customer Onboarding can you Automate?",
          answer:
            "You can automate every part of the customer onboarding process with the right automated compliance tool. An excellent example is the Youveriffy compliance workflow builder, vForms.",
        },
        {
          question:
            "How Does a Compliance Onboarding Software Solution Operate?",
          answer:
            "A compliance onboarding software is an elaborate solution that incorporates the necessary KYC/AML verification suite to help businesses verify customers and satisfy regulatory requirements. A good compliance onboarding software should offer important services like KYB, KYC, AML checks, PEP checks, etc. A good example of this is the Youverify OS.",
        },
      ],
    };
  },
};
</script>
