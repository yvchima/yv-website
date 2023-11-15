<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Transaction Monitoring Solution"
      title="Flag and Report Suspicious Transactions On-The-Go"
      intro="Satisfy regulatory compliance and protect your business from financial losses through our adaptive real-time transaction monitoring solution. Leverage AI-generated rules, based on global fraud patterns to identify and flag potentially fraudulent transactions"
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
          src="~/assets/images/illustrations/hero-transaction-monitoring-solution.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Features :features="features" />

    <section class="py-24 px-6 max-w-screen-xl mx-auto">
      <h2
        class="text-3xl md:text-5xl font-semibold text-blue-300 text-center max-w-4xl mx-auto capitalize px-8"
      >
        Youverify Transaction Monitoring Solution: How it works
      </h2>

      <div
        class="mt-28 flex flex-col-reverse md:flex-row items-center gap-16 lg:gap-24"
      >
        <div class="md:w-1/2">
          <div>
            <h3 class="font-semibold text-3xl">Harness Intelligent AI</h3>
            <p class="mt-10">
              Eliminate false positives through our dynamic Artificial
              intelligence (AI) and Machine Learning (ML) algorithms that
              monitors 6000+ global data sources, helping to accurately flag
              fraudulent transactions before they occur.
            </p>
          </div>
          <div class="mt-16">
            <h3 class="font-semibold text-3xl">
              Synchronize Customer Transaction Data
            </h3>
            <p class="mt-10">
              Share customer, transaction, payment, and other relevant data with
              Youverify through secure APIs.
            </p>
          </div>
        </div>
        <div class="md:w-1/2">
          <LazyImage
            src="~/assets/images/screenshots/transaction-monitoring.svg"
          />
        </div>
      </div>

      <div
        class="mt-28 flex flex-col-reverse md:flex-row-reverse items-center gap-16 lg:gap-24"
      >
        <div class="md:w-1/2">
          <div>
            <h3 class="font-semibold text-3xl">Transaction Monitoring</h3>
            <p class="mt-10">
              Transaction data is run through a series of pre-determined rules
              that you can tailor to meet your business needs. Leveraging AI and
              machine learning to detect patterns, transactions that satisfy
              your business suspicions criteria are flagged with superior
              accuracy.
            </p>
          </div>
          <div class="mt-16">
            <h3 class="font-semibold text-3xl">User Management</h3>
            <p class="mt-10">
              Assign access levels and manage users easily through the admin
              authorisation on our transaction monitoring solution. Ensure team
              members only have access to the information they need to carry out
              their job. Not more, not less.
            </p>
          </div>
        </div>
        <div class="md:w-1/2">
          <LazyImage
            src="~/assets/images/screenshots/transaction-monitoring-3.svg"
          />
        </div>
      </div>

      <div
        class="mt-28 flex flex-col-reverse md:flex-row items-center gap-16 lg:gap-24"
      >
        <div class="md:w-1/2">
          <div>
            <h3 class="font-semibold text-3xl">Transaction Risk score</h3>
            <p class="mt-10">
              Receive real-time risk score report on every transaction to
              identify high-risk from low-risk activities and take corresponding
              compliance actions.
            </p>
          </div>
          <div class="mt-16">
            <h3 class="font-semibold text-3xl">
              Real-Time Investigation and Reporting
            </h3>
            <p class="mt-10">
              Review red flag alerts and make informed decisions based on data
              through our user-friendly case management dashboard. Design your
              AML transaction monitoring workflow, document findings, and report
              to regulatory authorities, all from a single interface.
            </p>
          </div>
        </div>
        <div class="md:w-1/2">
          <LazyImage
            src="~/assets/images/screenshots/transaction-monitoring-2.svg"
          />
        </div>
      </div>
    </section>

    <ProductSpotlight :spotlight="spotlight" title="Product Spotlight" prefix="kyt"/>
    <Integrate />
    <Testimonials />
    <ContactUs
      id="contact"
      heading="Secure Your Business Today Through Our Real-Time Transaction Monitoring Solution"
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
import TrustedClients from "~/components/common/TrustedClients.vue";
import Features from "~/components/products/Features.vue";
import Offers from "~/components/products/Offers.vue";
import ProductSpotlight from "~/components/products/ProductSpotlight.vue";
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
    ProductSpotlight,
    Integrate,
    Testimonials,
    ContactUs,
    Faqs,
    KnowMore,
  },
  head() {
    return {
      title: "KYT Global Transaction Monitoring",
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
          content: "Flag and Report Suspicious Transactions On-The-Go",
        },
      ],
    };
  },
  data() {
    return {
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
      spotlight: [
        {
          icon: "personalization",
          heading: "Business Risk Personalization",
          note: "Create custom rules to address your business risks using our seamless interface and let our AI system do the rest.",
        },
        {
          icon: "risk-learning",
          heading: "Accurate Risk Classification",
          note: "Accurately classify customers based on risk assessment results into high, medium and low risk for equivalent monitoring for compliance.",
        },
        {
          icon: "analytics",
          heading: "Adverse Media Screening",
          note: "Verify high-risk customers for adverse media before onboarding and receive real-time subsequent insights for the latest developments.",
        },
        {
          icon: "wide-capacity",
          heading: "Consumable APIs",
          note: "Seamlessly integrate our transaction monitoring solution with your existing system and share data in your preferred format.",
        },
        {
          icon: "detection",
          heading: "Real-Time Risk Detection",
          note: "Our transaction monitoring solution detects and blocks suspicious transactions in real-time based on the red flags criteria selected per customer risk.",
        },
        {
          icon: "reporting",
          heading: "Direct Reporting",
          note: "Export data from suspicious transactions potentially indicative of money laundering, fraud, and other financial crimes and report directly to regulators.",
        },
      ],
      faqs: [
        {
          question: "What is Transaction Monitoring?",
          answer:
            "Transaction monitoring refers to the process of monitoring a customer's transaction including deposits, withdrawals and transfers. There are several ways in which a business can go about the transaction monitoring process.",
        },
        {
          question: "Why is Transaction Monitoring Important?",
          answer:
            "Transaction monitoring is very important to an institution's AML processes because of its ability to detect suspicious transactions early on and curtail fraudulent activities. An adequate AML transaction monitoring system is able to detect and monitor suspicious large cash deposits or wire transfers, allowing financial institutions to spot crimes before they occur.",
        },
        {
          question: "How Does AML Transaction Monitoring Work?",
          answer: `Transaction monitoring in anti-money laundering essentially operates largely by following the procedures below: 
            Step 1: Identify suspicious customer behaviours and possible terrorist financing and assign a respective risk level. 
            Step 2: Prioritise through automation by reducing unnecessary alerts and focusing on regulatory requirements. 
            Step 3: Increase the effectiveness of the transaction monitoring automation over time. 
            Step 4: Implement and upscale the system across relevant transactions in the financial institution.`,
        },
      ],
    };
  },
};
</script>
