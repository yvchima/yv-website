<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYC | Adverse Media Screening"
      title="Protect Your Business Reputation with AI-Powered Adverse Media Negative News Screening Solution"
      intro="Crawl individual and business digital footprint for direct and affiliated negative news before onboarding. Receive real-time insights for subsequent developments."
    >
      <div slot="buttons" class="flex flex-wrap gap-4 sm:gap-6">
        <AppButton text="Get started" href="/product/kyc/pricing" />
        <AppButton
          theme="secondary"
          :outline="true"
          text="Book demo"
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
          src="~/assets/images/illustrations/hero-adverse-media-screening.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Features :features="features" />
    <section class="px-6 pt-24 pb-10 max-w-screen-xl mx-auto">
      <LazyImage
        src="~/assets/images/illustrations/with-without-adverse-media.svg"
      />
    </section>
    <Offers
      title="Protect Your Reputation with Youverify’s Adverse Media"
      :offers="offers"
    />
    <ProductSpotlight
      :spotlight="spotlight"
      title="Product Spotlight"
      prefix="kyt"
    />
    <Integrate />
    <Testimonials />
    <ContactUs
      id="contact"
      heading="Secure Your Business with the Youverify Adverse Media Screening Solution"
      note="Leave us a message! Our team will reach out with the best KYC ID document verification solution that fits your specific needs in no time. Book a demo below."
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
      title: "Adverse Media Screening",
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
            "Identify and Verify High-Risk Customers with Robust Adverse Media Screening Solution",
        },
      ],
    };
  },
  data() {
    return {
      steps: [
        " Customer provides accepted identity information (e.g Driver's licence number, Passport number, etc)",
        "This number is collected and verified against our 300m+ global government-backed database and document verification services.",
        "The result comes out positive if there's a match and negative if there is none. Response time is immediate.",
      ],
      features: [
        {
          title: "Industry Leading Solution",
          note: "Our cutting-edge Adverse Media negative news screening solution uses natural language processing and machine learning algorithms to scan through vast amounts of online and offline verified media sources.",
        },
        {
          title: "LLM Trained Sentiment Models",
          note: "Our Adverse Media solution is supercharged with LLM to yield significantly better than industry average results. This results in a blend of high efficiency and low false positive rates.",
        },
        {
          title: "High Accuracy & Low False Positives",
          note: "Trained with LLM's groundbreaking algorithms, our Adverse Media solution offers high accuracy and the lowest false positives, generating results closer to human levels.",
        },
      ],
      offers: [
        {
          illustration: "adverse-media-screen-1",
          title: "Intuitive Case Management Platform",
          note: "Manage high-risk customers on a case-by-case basis through an intuitive case management platform that presents adverse media screening results as actionable data for informed decision-making.",
        },
        {
          illustration: "adverse-media-screen-2",
          title: "Adverse Media for Individuals & Businesses",
          note: "Our Adverse Media solution can be used to screen individuals during KYC onboarding or businesses for KYB verification before establishing a relationship to keep your company’s reputation intact.",
        },
        {
          illustration: "adverse-media-screen-3",
          title: "Data-Backed Risk Rating",
          note: "The Youverify Adverse Media solution assigns a customer risk rating based on results from the analysis to help you make informed decisions.",
        },
      ],
      spotlight: [
        {
          icon: "personalization",
          heading:
            "LLM Powered Machine Learning and Artificial Intelligence",
          note: "Leverage LLM trained intelligent AI and machine learning processing to analyse large-scale media information on the go for effective negative news screening.",
        },
        {
          icon: "risk-learning",
          heading: "Filter Non-Reputable Media Noise",
          note: "Eliminate general media noise and focus on the risks that are relevant to your business and high-risk customers. Whitelist low-risk clients for better filtering.",
        },
        {
          icon: "analytics",
          heading: "Improve Overall Customer Onboarding",
          note: "Improve your overall customer onboarding experience by tailoring negative media screening to your unique risk assessment approach to reduce false positives.",
        },
        {
          icon: "wide-capacity",
          heading: "Automatic AML and CFT Compliance",
          note: "Set up adverse media screening as part of your risk assessment and customer onboarding process to satisfy AML and CFT global compliance requirements.",
        },
        {
          icon: "detection",
          heading: "Database Screening",
          note: "Screen high-risk customers against reliable and robust media databases and individual profiles to get the best results rather than endless articles online.",
        },
        {
          icon: "reporting",
          heading: "Automate Ongoing Customer Monitoring",
          note: "Automatically receive alerts from customers as they change in risk status and Adverse Media rating.",
        },
      ],
      faqs: [
        {
          question: "What is Adverse Media Screening?",
          answer:
            "Adverse media screening is the process of screening prospective or high-risk customers against negative news and data sources on the internet and other databases. ",
        },
        {
          question: "What is Youverify Adverse Media Solution?",
          answer:
            "Youverify Adverse Media solution is an LLM-powered solution that crawls individual and businesses' digital footprint for direct and affiliated negative news. This helps organisations properly assess the potential risks associated with transacting with such entities and make informed decisions. ",
        },
        {
          question:
            "How Does Youverify’s Adverse Media Solution Standout from the Competition?",
          answer:
            "Our adverse media screening solution models are trained with LLM’s models, making it more accurate and efficient with very low false positives that give close-to-human results. ",
        },
        {
          question: "What Sources are Adverse Media Screening Performed on?",
          answer:
            "Adverse media screening generally runs through news sources, and publications on convictions for or alleged involvement in corruption, sanctions, money laundering, and financing of illegal activities.",
        },
        {
          question: "Why is Adverse Media Screening Important?",
          answer:
            "Adverse media screening is important because it helps businesses keep an eye on high-risk customers for negative news in the media. Appearance in such news could be an indication of money laundering activities or terrorism funding from which the business can then make an informed on how to relate with the customer.",
        },
      ],
    };
  },
};
</script>
