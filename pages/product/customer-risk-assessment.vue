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
            Customer Risk Assessment
          </div>
          <h1
            class="font-semibold text-2xl text-center md:text-left md:text-3xl lg:text-5xl mt-4 text-blue-900"
          >
            Persistently Monitor Customer Risks with AI
          </h1>

          <p class="text-center md:text-left my-6">
            Stay ahead of emerging financial crimes and cut fraud by over 70%
            with Youverify's AI-powered customer risk assessment solution.
            Leverage adaptive and dynamic risk assessments to stay on par with
            constantly changing financial fraud patterns for effective risk
            management.
          </p>

          <AppButton
            theme="white"
            text="Request for demo"
            href="#contact"
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
            src="~/assets/images/illustrations/hero-customer-risk-assessment.svg"
          />
        </div>
      </div>
    </section>
    <TrustedClients />
    <Features :features="features" />
    <Offers
      title="Youverify Customer Risk Intelligence Solution Product Spotlight"
      :offers="offers"
    />
    <ProductSpotlight
      :spotlight="spotlight"
      title="Perform Customer Due Diligence with Actionable & Auditable Results"
      paragraph="Enjoy insightful and accurate risk assessment with our patent-pending solution."
      prefix="ra"
    />

    <section class="px-6 max-w-screen-xl mx-auto py-20">
      <h2
        class="font-semibold text-blue-300 text-2xl md:text-5xl text-center max-w-4xl mx-auto"
      >
        Cutting Edge AI-Powered Technology to Enhance Your Risk Management
        Processes
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
                ? 'bg-blue-300 h-52 md:h-48 lg:h-44 pt-7 sm:pt-10'
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
    <Integrate />
    <Testimonials />
    <ContactUs
      id="contact"
      heading="Start Protecting Your Business with the Youverify Risk Intelligence Solution Today"
      note="Leave us a message! Our team will reach out with a Risk Intelligence solution tailored to fit your specific business needs. Book a demo below."
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
      title: "Customer Risk Assessment",
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
      currentIndex: 0,
      features: [
        {
          title: "Real-Time Monitor Customer Risk",
          note: "Access results from a wide range of data sources to real-time monitor emerging customer risks and make informed decisions to protect your business from fraud.",
        },
        {
          title: "Build Elaborate Risk Scores",
          note: "Our risk intelligence solution builds customer risk ratings and assigns a risk score based on data collected from a wide range of public, and private sources and risk factors. Automatically identify and monitor potentially risky customers.",
        },
        {
          title: "Global Coverage",
          note: "Leverage our robust risk intelligence solution to monitor customers globally.",
        },
      ],
      offers: [
        {
          illustration: "patent-intelligent-ai",
          title: "Patent-Pending Intelligent AI",
          note: "Our solution is powered by a patent-pending algorithm that consistently analyses data from a wide range of sources and risk factors to provide you with individually tailored customer risk scores.",
        },
        {
          illustration: "dynamic-risk-scoring",
          title: "Dynamic Risk Scoring",
          note: "Improve your risk rating processes through our dynamic risk solution that monitors and analyses data from multiple sources and risk factors. These include the customer's countries or geographical areas, products, services, transactions, delivery channels, industry and historical alert data. Enjoy better accuracy over time through advanced machine learning.",
        },
        {
          illustration: "low-false-positives",
          title: "Low False Positives",
          note: "Organise and prioritise alerts based on your business needs to improve your overall compliance investigation process and cut down false positives by over 50%.",
        },
        {
          illustration: "alert-reporting",
          title: "Alert and Reporting",
          note: "Set up alerts and report triggers tailored to your business needs through continuous and on-demand risk scoring. Receive insightful updates on customer risks to stay ahead of compliance requirements.",
        },
      ],
      spotlight: [
        {
          icon: "quick-onboarding",
          heading: "Accuracy",
          note: "Get rid of the guesswork associated with risk assessment investigations through Youverify’s patent-pending AI-powered risk intelligence solution.",
        },
        {
          icon: "false-positives",
          heading: "Transparency",
          note: "Youverify's risk intelligence solution offers transparent customer risk-scoring processes for easy review.",
        },
        {
          icon: "trail",
          heading: "Full Audit Trail",
          note: "Fully audit customer risk analysis results by accessing the breakdown of customer data that was collected and analysed.",
        },
      ],
      products: [
        {
          heading: "Informed Decision Making",
          note: "Our solution gives you a 360-degree view of customer risk, which will help you make better decisions.",
        },
        {
          heading: "Preset Rules",
          note: "Choose what best suits your business needs with our preconfigured and  adjustable risk assessment algorithm.",
        },
        {
          heading: "Comprehensive Risk Management",
          note: "Enjoy comprehensive risk analysis that integrates customer profiles, transaction history, past alert data, and other risk factors. ",
        },
      ],
      faqs: [
        {
          question: "What is Intelligence in Risk Management?",
          answer:
            "Risk intelligence simply refers to the solution that empowers businesses to constantly identify and mitigate/ contian the impact of risks on their operations. Businesses implement different risk intelligence strategies tailored to their compliance needs.",
        },
        {
          question: "What is Customer Risk Analysis or Assessment?",
          answer:
            "Customer risk analysis or assessment refers to a series of processes put in place by a business when establishing new customer relationships or during a transaction. The process helps businesses perform an accurate analysis of the potential risks that a new or existing customer might bring. ",
        },
        {
          question: "What are the Common Customer Risk Factors?",
          answer: `The most important customer risk factors according to the FATF global money laundering regulations include:
- Countries or geographical areas
- Products
- Services 
- Transactions 
- Delivery channels
- Industry
`,
        },
      ],
    };
  },
};
</script>
