<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Crypto Monitoring Solution Tool"
      title="End-to-End KYC/ AML Crypto Compliance Solution"
      intro="Robust crypto KYC/AML verification compliance solution for all your needs. Spot suspicious crypto transactions on the go with low false positives."
    >
      <div slot="buttons" class="flex flex-wrap gap-4 sm:gap-6">
        <AppButton
          text="Get early access"
          href="https://forms.gle/xMGG2Yg2RE2j8T367"
          target="_blank"
        />
      </div>
      <div slot="illustration">
        <LazyImage
          class="h-full md:ml-auto"
          src="~/assets/images/illustrations/hero-employee-credit-check.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Features :features="features" />

    <section class="py-24 px-6 max-w-screen-xl mx-auto">
      <h2
        class="text-3xl md:text-5xl font-semibold text-blue-300 text-center max-w-4xl mx-auto capitalize px-8"
      >
        How Does it Work?
      </h2>

      <div class="mt-20 space-y-12">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex flex-col-reverse md:flex-row items-center gap-14 lg:gap-20"
        >
          <div class="md:w-1/2">
            <LazyImage
              :src="require(`~/assets/images/screenshots/${step.image}.svg`)"
            />
          </div>
          <div class="md:w-1/2">
            <p class="font-semibold">Step {{ index + 1 }}: {{ step.name }}</p>
            <p class="font-medium">{{ step.note }}</p>
          </div>
        </div>
      </div>
    </section>

    <Offers :offers="offers" />

    <Integrate />
    <Testimonials />

    <ContactUs
      id="contact"
      heading="Begin Your Crypto Monitoring Journey with Youverify Today"
      note="Leave us a message right away! Our experts will reach out with the best crypto monitoring solution process recommendation for your business today. Book a demo below."
    />
    <!-- <section id="contact" class="py-20 bg-blue-100">
      <div class="px-8 max-w-5xl mx-auto text-center">
        <h2 class="text-xl md:text-3xl font-semibold">Excited?</h2>
        <p class="text-xl font-medium mt-3">
          Get exclusive access to the product once it launches.
        </p>
        <form class="w-full mt-7 md:mt-16 max-w-md mx-auto">
          <div class="space-y-4 form-group w-full">
            <div class="flex gap-4">
              <input
                type="text"
                placeholder="First name"
                name="First Name"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                name="Last Name"
                required
              />
            </div>

            <input type="text" placeholder="Role" name="Role" required />
            <input
              type="text"
              placeholder="Company name"
              name="Company"
              required
            />
            <input
              type="email"
              placeholder="Corporate email address"
              name="Email"
              required
            />
            <input type="tel" placeholder="Phone number" name="Phone" />
          </div>
          <div class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" id="check" v-model="checkbox" class="w-4" />
            <label for="check" class="text-grey" style="font-size: 10px"
              >I agree to receive emails on real-time product updates, industry
              tips, news and guides</label
            >
          </div>
          <AppButton
            :disabled="!checkbox"
            text="Keep me updated"
            class="w-full mt-14"
          />
          <p class="text-xs text-left mt-3">
            By clicking the button you agree with our
            <a
              href="/privacy-policy"
              class="text-blue cursor-pointer font-semibold underline"
            >
              Privacy Policy</a
            >
          </p>
        </form>
      </div>
    </section> -->
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
      title: "KYT Global Crypto Monitoring",
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
          content: "End-to-End KYC/ AML Crypto Compliance Solution",
        },
      ],
    };
  },
  data() {
    return {
      checkbox: null,
      currentIndex: 0,
      features: [
        {
          title: "Realtime Scanning",
          note: "Verify the identity of crypto traders to curtail illegal activities and satisfy compliance through effective crypto monitoring solutions.",
        },
        {
          title: "Simplified Decisions",
          note: "Leverage our comprehensive crypto KYC/ AML tool kit to make informed decisions.",
        },
        {
          title: "Save Cost",
          note: "Save costs and improve efficiency with the all-in-one toolkit for crypto compliance.",
        },
      ],
      steps: [
        {
          image: "first-level-verification",
          name: "First Level Verification",
          note: "Automate user identity verification processes, screen addresses and evaluate risks.",
        },
        {
          image: "risk-profiling",
          name: "Risk Profiling",
          note: "Receive a comprehensive report, profiling users and highlighting their respective risk ratings. Investigate suspicious addresses and take required action.",
        },
      ],
      offers: [
        {
          illustration: "global",
          title: "Real-Time Transaction Screening",
          note: "Monitor and screen user crypto transactions for AML compliance. Retain records for regulatory reports according to global FATF standards.",
        },
        {
          illustration: "real-time",
          title: "Report Screening Positives",
          note: "Easily export data and report to relevant authorities after investigating suspicious transactions.",
        },
        {
          illustration: "fingerprint-cuate",
          title: "Case Management Capabilities",
          note: "Manage screening results on a case-by-case basis. Spot suspicious patterns through illustrative access to historic transactions and user behavioural data.",
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
