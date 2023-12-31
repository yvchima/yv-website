<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Transaction Screening Solution"
      title="Satisfy Regulations & Protect Your Business Through Real-time Transaction Screening"
      intro="Spot fraudulent transactions before they go through and satisfy compliance through our transaction screening solution."
      :white="false"
    >
      <div slot="buttons" class="flex flex-wrap gap-4 sm:gap-6">
        <AppButton
          text="Get early access"
          theme="white"
          href="https://forms.gle/xMGG2Yg2RE2j8T367"
          target="_blank"
        />
      </div>
      <div slot="illustration">
        <LazyImage
          class="h-full md:ml-auto"
          src="~/assets/images/illustrations/hero-transaction-screening-solution.svg"
        />
      </div>
    </HeroSection>

    <section class="px-6 max-w-screen-xl mx-auto py-20">
      <h2
        class="font-semibold text-blue-300 text-2xl md:text-5xl text-center max-w-4xl mx-auto"
      >
        How Youverify Transaction Screening Action Works
      </h2>
      <div class="mt-28 space-y-3 md:space-y-8">
        <div
          @click="currentIndex = index"
          v-for="(solution, index) in solutions"
          :key="index"
          class="flex gap-12"
          :class="{ 'items-center': currentIndex !== index }"
        >
          <div class="relative hidden md:block">
            <div
              @click="currentIndex = index"
              class="h-14 rounded-full flex justify-center items-center cursor-pointer text-white font-semibold text-2xl duration-300 ease-in-out"
              style="min-width: 56px"
              :class="
                currentIndex === index ? 'bg-blue-300 mt-5' : 'bg-blue-150'
              "
            >
              {{ index + 1 }}
            </div>
            <div
              v-if="currentIndex === index && index !== solutions.length - 1"
              class="border-l border-black absolute left-1/2 h-4/5 top-20"
            ></div>
            <div
              v-if="currentIndex !== index && index !== solutions.length - 1"
              class="border-l border-black absolute left-1/2 h-full top-16"
            ></div>
          </div>
          <div
            @click="currentIndex = index"
            class="rounded-2xl px-4 lg:px-7 flex justify-between items-center gap-8 lg:gap-16 cursor-pointer duration-300 ease-in-out w-full"
            :class="
              currentIndex === index
                ? 'bg-blue-300 h-72 lg:h-56'
                : 'bg-blue-150 h-16'
            "
          >
            <div class="max-w-3xl">
              <h3
                class="font-medium text-lg md:text-xl"
                :class="{ 'text-white': currentIndex === index }"
              >
                {{ solution.heading }}
              </h3>
              <p
                v-show="currentIndex === index"
                class="mt-3 text-white md:text-lg"
              >
                {{ solution.note }}
              </p>
            </div>
            <div
              v-show="currentIndex === index"
              :class="[
                currentIndex === index ? 'opacity-100' : 'opacity-0',
                'duration-1000 min-w-max hidden sm:block',
              ]"
            >
              <img
                :src="
                  require(`~/assets/images/icons/products/kyt/${solution.icon}.svg`)
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Offers
      :offers="offers"
    />

    <Integrate />
    <Testimonials />
    <ContactUs
      id="contact"
      heading="Secure Your Business Today Through Our Real-Time Transaction Screening Solution"
      note="Send us a message right away! Our experts will reach out to help you start verifying customer data faster than ever. This is how we build reliable compliance solutions. Book a demo below."
    />
    <!-- <section id="contact" class="bg-blue-100 py-16">
      <div class="px-6 max-w-screen-xl mx-auto">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeMQLJynV6ZWqJwEyTdVIFn7Z6FET6g_2OWqr2ZkrzsWhOo6g/viewform?embedded=true"
          width="100%"
          height="768"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </section> -->
    <Faqs :faqs="faqs" />
    <KnowMore />
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
import Offers from "~/components/products/Offers.vue";
import Integrate from "~/components/products/Integrate.vue";
import Testimonials from "~/components/common/Testimonials.vue";
import ContactUs from "~/components/products/ContactUs.vue";
import Faqs from "~/components/products/faqs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
export default {
  components: {
    HeroSection,
    Offers,
    Integrate,
    Testimonials,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "KYT Transaction Screening",
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
            "Satisfy Regulations & Protect Your Business Through Real-time Transaction Screening",
        },
      ],
    };
  },
  data() {
    return {
      currentIndex: 0,
      features: [
        {
          title: "Stay Compliant",
          note: "Compliment your business KYC and AML structure with AI-powered real-time transaction monitoring for a more effective compliance system.",
        },
        {
          title: "Protect your Business",
          note: "Prevent financial losses due to money laundering and fraudulent activities by criminals. Detect suspicious transactions in real-time.",
        },
        {
          title: "Transact in Confidence",
          note: "Onboard customers without the fear of compromising compliance. Detect potential money launderers before transactions go through.-",
        },
      ],
      offers: [
        {
          illustration: "global",
          title: "Real-Time Transaction Screening",
          note: "Screen customer transactions based on preset rules, risk levels, compliance lists and payment sources. Identify and block suspicious transactions in real-time.",
        },
        {
          illustration: "real-time",
          title: "Intelligent Adaptive AI Technology",
          note: "Our adaptive AI memorizes all your decisions, resulting in fewer re-screening processes. Screen customer transactions while receiving lesser alerts and lower false positives.",
        },
        {
          illustration: "fingerprint-cuate",
          title: "Facilitate Payments with Low Risk",
          note: "Seamlessly facilitate customer transactions in confidence. Our AI-powered system screens all relevant fields of a payment transaction including name, addresses, message, beneficiaries, countries and more. Red flags are flagged on the go.",
        },
        {
          illustration: "friendly-case-management",
          title: "Intelligent Name Matching & Compliance Alert",
          note: "Receive real-time alerts on the outcome of transaction screening processes with low false positives through the power of our intelligent AI. Automatically identify and match customer names against watch and sanction lists.-",
        },
        {
          illustration: "advanced-customisation",
          title: "User-Friendly Case Management Platform",
          note: "Our unified case management platform helps you track and manage every case to make informed decisions during investigations. Easily collaborate with your team on individual alerts with access to a comprehensive summary of screening results, fraud alerts, KYC and AML reviews.",
        },
      ],
      solutions: [
        {
          icon: "transaction-initiation",
          heading: "Transaction Initiation",
          note: "The customer initiates a wire transfer transaction request",
        },
        {
          icon: "screening",
          heading: "Screening",
          note: "Youverify intelligent transaction screening AI screens the receiver and sender against third-party government-backed data sources, high-risk jurisdiction checks, and other conditions set by your business for AML.",
        },
        {
          icon: "satisfy-compliance",
          heading: "Satisfy Compliance",
          note: "The transaction is frozen if certain conditions are satisfied and the transaction is sent for manual AML review, otherwise, it is passed. If frozen, the sender is alerted and updated on the process.",
        },
        {
          icon: "decision-making",
          heading: "Informed Decision Making",
          note: "The decision falls on your business to pass, reject or report based on the result of the manual review and facts presented by our system.",
        },
      ],
      faqs: [
        {
          question: "What is Transaction Screening?",
          answer:
            "Transaction screening involves verifying customer identities and real-time screening of their transactions to spot suspicious patterns.",
        },
        {
          question: "Why is Transaction Screening Important?",
          answer:
            "Transaction screening helps businesses spot and stop financial crimes in their tracks. The process focuses on ensuring that the business does not process transactions on behalf of a restricted party for both the sender, beneficiary and other elements involved in the transaction.",
        },
        {
          question: "What are Customer Transactions Screened Against?",
          answer:
            "Customer transactions are screened against a predefined set of rules that may include global sanction lists and official watch lists. Depending on the needs of the organisation, the rules are frequently updated to satisfy changing compliance requirements. ",
        },
      ],
    };
  },
};
</script>
