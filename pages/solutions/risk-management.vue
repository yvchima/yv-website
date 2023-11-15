<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Risk Management"
      title="Assess & Manage Risks Throughout the Customer Life Cycle"
      intro="Protect your business from reputation damage and financial losses through advanced risk assessment and fraud detection solutions."
    >
      <div slot="buttons" class="flex flex-wrap gap-4 sm:gap-6">
        <AppButton
          text="Get started"
          href="https://os.youverify.co/auth/create-account"
        />
        <AppButton
          theme="secondary"
          :outline="true"
          text="Get a free demo"
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
          src="~/assets/images/illustrations/hero-solutions-risk-management.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Features :features="features" />

    <section class="px-6 max-w-screen-xl mx-auto py-20">
      <h2
        class="font-semibold text-blue-300 text-2xl md:text-5xl text-center max-w-4xl mx-auto"
      >
        How we help you stay compliant
      </h2>
      <div class="mt-28 space-y-3 md:space-y-8">
        <div
          @click="currentIndex = index"
          v-for="(product, index) in products"
          :key="index"
          class="flex gap-12"
          :class="{ 'items-center': currentIndex !== index }"
        >
          <div class="relative hidden md:block">
            <div
              @click="currentIndex = index"
              class="hidden h-14 rounded-full md:flex justify-center items-center cursor-pointer text-white font-semibold text-2xl duration-300 ease-in-out"
              style="min-width: 56px"
              :class="
                currentIndex === index ? 'bg-blue-300 mt-5' : 'bg-blue-150'
              "
            >
              {{ index + 1 }}
            </div>
            <div
              v-if="currentIndex === index && index !== products.length - 1"
              class="border-l border-black absolute left-1/2 h-4/5 top-20"
            ></div>
            <div
              v-if="currentIndex !== index && index !== products.length - 1"
              class="border-l border-black absolute left-1/2 h-full top-16"
            ></div>
          </div>
          <div
            @click="currentIndex = index"
            class="rounded-2xl px-4 lg:px-7 flex justify-between gap-8 lg:gap-16 cursor-pointer duration-300 ease-in-out w-full"
            :class="
              currentIndex === index
                ? 'bg-blue-300 h-72 md:h-64 lg:h-56 pt-10'
                : 'bg-blue-150 h-16 items-center'
            "
          >
            <div class="max-w-4xl">
              <h3
                class="font-medium text-lg md:text-xl"
                :class="{ 'text-white': currentIndex === index }"
              >
                {{ product.heading }}
              </h3>
              <p
                v-show="currentIndex === index"
                class="mt-3 text-white md:text-lg"
              >
                {{ product.note }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Testimonials />

    <ContactUs
      id="contact"
      heading="Setup a Robust Risk Management System with Youverify Compliance Solutions"
      note="Begin your journey with Youverify. Send us a message right away!"
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
    Testimonials,
    Stats,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "Industry Standard Risk Management Solution",
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
          content: "Assess & Manage Risks Throughout the Customer Life Cycle",
        },
      ],
    };
  },
  data() {
    return {
      currentIndex: 0,
      stats: [
        {
          figure: "1 sec",
          name: "Average verification time",
        },
        {
          figure: "30min",
          name: "Quick integration with YV SDK",
        },
        {
          figure: "99%",
          name: "Completion rate",
        },
      ],
      features: [
        {
          icon: "compliant",
          title: "Prevent Financial Losses from Fraud",
          note: "Secure your business from financial losses and regulatory fine payments by detecting and curtailing fraudulent acts in real-time.",
        },
        {
          icon: "onboarding",
          title: "Speed Up Onboarding Without Compromising Compliance",
          note: "Onboard customers faster with seamless compliance flows that are easy for users but flag fraudsters.",
        },
        {
          icon: "onboarding",
          title: "End-to-End Customer Lifecycle Protection",
          note: "Monitor and flag fraudulent patterns at every step of the way throughout the customer lifecycle.",
        },
      ],
      offers: [
        {
          illustration: "easy-kyc",
          title: "Design Your Compliance Process",
          note: "No-Code Compliance Builder Leverage our drag-and-drop no-code tool (vForms) to build your custom compliance process. Set up flexible workflows that adapt to the customer choices and regulatory needs of your business.",
        },
        {
          illustration: "v-forms",
          title: "Interactive Management Dashboard",
          note: "Set up and control the customer verification flow and ongoing monitoring in our interactive management dashboard. Analyse every detail and set conditions for cases to be reviewed manually to make informed decisions.",
        },
      ],
      products: [
        {
          heading: "Risk Intelligence Solutions",
          note: "AI-powered customer risk intelligence solution to help businesses consistently monitor emerging customer risks and stay one step ahead of fraud. Our patent-pending intelligent algorithm analyses data across a 4-year span and updates customer risk scores every 30 days.",
        },
        {
          heading: "Know Your Transaction (KYT)",
          note: "Monitor and detect suspicious customer activities through our elaborate transaction monitoring solution. Get access to ready-to-use scenery or create your industry-tailored custom rules.",
        },
        {
          heading: "Know Your Business (KYB)",
          note: "Verify the legal existence and registry of a business including its address, incorporation documents, the identity of directors and ultimate beneficial owners.",
        },
        {
          heading: "Know Your Employee (KYE)",
          note: "Protect your business by screening employees for adequate risk assessment. Verify their identity, work history and certificates.",
        },

        {
          heading: "Know Your Customer (KYC)",
          note: "Perform full KYC verification globally to satisfy compliance. Perform ID, address, biometric, and phone number verification. AML screen and criminal/ fraud check customers for PEP and sanction listing.",
        },
        {
          heading: "Workflow Automation",
          note: "Custom build your compliance workflow to suit the needs of your business, creating a seamless onboarding experience for customers.",
        },
      ],
      faqs: [
        {
          question: "What is Fraud Detection?",
          answer:
            "Fraud detection is the process of setting measures that detect and flag malicious user activities during onboarding or transactions. The process is mandatory for businesses in the regulated industry like banks and other financial institutions. However, unregulated businesses also employ fraud detection solutions for preventing financial losses and protecting their public image.",
        },
        {
          question: "Why is Fraud Detection Important?",
          answer:
            "Fraud detection is important because it prevents bad actors and ill-intent users from making financial transactions on legitimate platforms through illicit means. Fraud detection is a vital aspect of fraud monitoring in compliance.",
        },
        {
          question: "How does an Anti-Fraud Detection Solution Operate?",
          answer:
            "Anti-fraud detection solution operates by running customer activities through preset rules, spotting irregularities in verifications, and transactions, and screening against global watchlists. This software can be automated to detect fraudulent activities at every point of the customer journey.",
        },
      ],
    };
  },
};
</script>
