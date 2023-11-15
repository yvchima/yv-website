<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="NBFI"
      title="End to End KYC/ AML Checks for Non-Banking and Financial Institutions (NBFIs)"
      intro="Optimize customer onboarding with a swift and precise KYC and AML process to combat fraud."
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
          src="~/assets/images/illustrations/hero-solutions-trading.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Stats :stats="stats" />
    <Features :features="features" />
    <Offers
      title="Anti-Money Laundering AML Compliance"
      paragraph="Implement a seamless no-code solution to ensure compliance with AML regulations."
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
        "Improve Identity Trust and Compliance Management Processes",
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
            "End to End KYC/ AML Checks for Non-Banking and Financial Institutions (NBFIs)",
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
          title: "Verify Account Holders' Credentials",
          note: "Authenticate customers' certificates and credentials with KYC compliance tools.",
        },
        {
          icon: "compliant",
          title: "Customise Verification",
          note: "Every account holder has a different risk profile. Customize your identity verification workflows for different customers for a fast onboarding process with little to no friction.",
        },
        {
          icon: "onboarding",
          title: "Reduce Onboarding Cost",
          note: "Minimize cost and reduce customer onboarding time while staying compliant with KYC regulations. Use Youverify Compliance Workflow Builder.",
        },
      ],
      offers: [
        {
          illustration: "connected-globally",
          title: "Stay Ahead with Anti-Money Laundering Compliance",
          note: "Leverage custom-made market-leading anti-money laundering technology to combat financial crimes and maintain your market position and competitive edge. Join 100+ companies in staying ahead of the game.",
        },
        {
          illustration: "monitoring",
          title: "Implement Ongoing AML Monitoring Watchlist and Screening",
          note: "Monitor and Screen Customers and businesses against 6000+ database, and watchlists.",
        },
        {
          illustration: "track-transaction",
          title: "Track Customer Transactions to Stay Compliant",
          note: "Use Youverify KYT tool to monitor, trace and track customer transactions and financial behaviour to control fraud and money laundering.",
        },
      ],
      faqs: [
        {
          question: "What is KYC and AML for NBFI?",
          answer: `KYC (Know Your Customer) for NBFI is a set of processes and procedures that non-banking financial institutions,  use to verify the identity of their clients and assess their potential risks. It involves collecting identifying information from customers, such as their name, address, date of birth, and government-issued identification documents
          
          AML (Anti-Money Laundering ) for NBFI are policies which help to identify and prevent money laundering by detecting and reporting suspicious activities. 
          NBFI are required to implement AML policies and procedures to ensure they are compliant with regulatory requirements, which can include things like customer due diligence, transaction monitoring, and reporting of suspicious transactions.`,
        },
        {
          question: "Why are KYC and AML Compliance Important for NBFI",
          answer:
            "KYC and AML compliance is important for NBFI to comply with legal and regulatory requirements, to prevent financial crimes, manage risks and avoid getting fined.",
        },
        {
          question:
            "What is the best way to Achieve Compliance in the NBFI Industry?",
          answer:
            "One of the best ways to achieve compliance in the non-banking financial institution industry is to have a robust KYC program that includes customer due diligence, ongoing monitoring of customer transactions, and risk-based approaches to identify and manage high-risk customers.",
        },
      ],
    };
  },
};
</script>
