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
          src="~/assets/images/illustrations/hero-solutions-trading.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Stats :stats="stats" />
    <Features :features="features" />
    <Offers
      title="Personalize your Verification Processes to Anti-Money Laundering (AML) Standards."
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
        "Protect Exchanges and Trading Platforms with our KYC KYB Suite",
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
          title: "Scale Globally",
          note: "Welcome clients from all over the world with access to ID verification across 100+ countries.",
        },
        {
          icon: "compliant",
          title: "Onboard More Traders at a Low Cost",
          note: "Accelerate your onboarding process using our KYC solution in seconds. Get more clients at a reduced cost and achieve an error-free onboarding process.",
        },
        {
          icon: "onboarding",
          title: "Rapid and Seamless Trader Onboarding",
          note: "Onboarding just got easier and faster when you onboard your traders with Youverify digital onboarding software.",
        },
      ],
      offers: [
        {
          illustration: "connected-globally",
          title: "Automate Your Transaction Monitoring Solution",
          note: "Use automated financial transaction monitoring tools to identify any unusual or unexpected transactions by fraudulent traders. Establish traders' destination of funds using automated monitoring tools.",
        },
        {
          illustration: "sales-consulting",
          title: "Monitor and Track Traders' Transaction",
          note: "Satisfy Anti-Money regulatory requirements by Identifying suspicious behaviour that may indicate money laundering when you use Youverify's AML screening for compliance and risk detection on all your traders' transactions.",
        },
        {
          illustration: "borderless",
          title: "Detect High-Risk Customers Faster",
          note: "Identify fraudulent traders by verifying their identities and the nature of their business using automated solutions with low error margins. Accurately access the criminal risk level of your prospective customer with robust risk profiling.",
        },
        {
          illustration: "toggle",
          title: "Conduct Customer Verification Process following AML Standard",
          note: "Conduct proper customer due diligence processes using Youverify KYC solutions.",
        },
      ],
      faqs: [
        {
          question: "What are KYC and AML for Traders?",
          answer: `Know Your Customer (KYC) and Anti-Money Laundering (AML) are the regulations which directly impact client onboarding for brokerages. 
            KYC for traders is the important process of verifying the identity of a trader when opening an account. Brokers are mandated to conduct customer identification and due diligence procedure to prevent onboarding a highly risky customer.
            
            On the other hand, due to the large sum of money and frequent heavy money transactions brokers are often involved in on behalf of their customers globally,  they are at high risk of money laundering. Consequently, there are strict AML/CFT regulations in place to curb money laundering and terrorist financing.`,
        },
        {
          question: "Why are KYC and AML Compliance Important for Traders?",
          answer:
            "KYC and Aml compliance is important for brokers and traders because of the high risk of fraudulent activities in the industry. It is essential to prevent money laundering, fraud, and other financial crimes.",
        },
        {
          question: "What is the best way to Achieve Compliance for Traders?",
          answer:
            "Brokers deal with traders globally. Hence, the best way to achieve compliance for brokers is to ensure they follow due diligence in all onboarding processes. One way to achieve that is to automate the process using a reliable compliance solution provider to ensure a transparent onboarding process.",
        },
      ],
    };
  },
};
</script>
