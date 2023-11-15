<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Gaming and Casino"
      title="Compliant KYC for Online Gaming and Casinos"
      intro="Stay compliant with gaming and casino AML laws while onboarding new customers globally."
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
          src="~/assets/images/illustrations/hero-solutions-gaming-casino.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Stats :stats="stats" />
    <Features :features="features" />
    <Offers title="Effective Compliance with Age Laws" :offers="offers" />

    <section class="px-6 max-w-screen-xl mx-auto py-20">
      <h2
        class="font-semibold text-blue-300 text-2xl md:text-5xl text-center max-w-4xl mx-auto"
      >
        How we help you stay compliant
      </h2>
      <div class="mt-28 space-y-3 md:space-y-8">
        <div
          @click="currentIndex = index"
          v-for="(feature, index) in aml"
          :key="index"
          class="flex gap-6 lg:gap-12"
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
              v-if="currentIndex === index && index !== aml.length - 1"
              class="border-l border-grey absolute left-1/2 h-4/5 top-20"
            ></div>
            <div
              v-if="currentIndex !== index && index !== aml.length - 1"
              class="border-l border-grey absolute left-1/2 h-full top-16"
            ></div>
          </div>
          <div
            @click="currentIndex = index"
            class="rounded-2xl px-4 lg:px-7 flex justify-between items-center gap-8 lg:gap-16 cursor-pointer duration-300 ease-in-out w-full"
            :class="
              currentIndex === index
                ? 'bg-blue-300 h-72 sm:h-60 md:h-72 lg:h-56'
                : 'bg-blue-150 h-16'
            "
          >
            <div class="max-w-3xl">
              <h3
                class="font-medium text-lg md:text-xl"
                :class="{ 'text-white': currentIndex === index }"
              >
                {{ feature.heading }}
              </h3>
              <p
                v-show="currentIndex === index"
                class="mt-3 text-white md:text-lg"
              >
                {{ feature.note }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      title: "Onboard Verified Customers",
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
          content: "Compliant KYC for Online Gaming and Casinos",
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
          title: "Onboard players globally and Optimize Costs",
          note: "Sign up players quickly from across the world. Onboard new players in over 100+ countries and reduce operating costs.",
        },
        {
          icon: "compliant",
          title: "Integrate your Gaming Onboarding Process",
          note: "Simplify and automate your gaming onboarding process for players seamlessly in seconds using Youverify Compliance Workflow Builder.",
        },
        {
          icon: "onboarding",
          title: "Verify Players' Identity",
          note: "Rapidly and accurately verify players' true identities in a few seconds with a 99.9% accuracy with Youverify liveness detection.",
        },
      ],
      offers: [
        {
          illustration: "slot-machine",
          title: "Seamlessly Verify Player's Age",
          note: "Prevent minors from becoming compromised when you verify the age of players with an approved age verification service and automatic ID document scan.",
        },
        {
          illustration: "game-analytics",
          title: "Successfully Restrict Savvy Minors",
          note: "Restrict minors' access to age-restricted content using our liveness check tool to prevent them from signing up and verify account holders' identities.",
        },
        {
          illustration: "borderless",
          title: "Maintain Compliance with KYC Laws",
          note: "By utilising the Youverify KYC solution, maintain compliance with KYC laws and regulations, to keep your business free from fines by verifying player' age to protect your reputation.",
        },
      ],

      aml: [
        {
          heading: "Real-Time ID Verification",
          note: "Combine government-issued identification documents with Youverify live selfies from customers, to eliminate any possibility of tampering or manipulation.",
        },
        {
          heading: "Monitor and Track Player's Gaming Behaviour and Pattern",
          note: "Identify how players are financing their gaming accounts and if there is any potential for criminal activity needs to be examined.",
        },
        {
          heading: "Prevent Identity Fraud",
          note: "Detect fake ID documents and thwart Identity theft at the point of cash withdrawal with automated technology.",
        },
      ],
      faqs: [
        {
          question: "What are KYC and AML for Players?",
          answer: `KYC (Know Your Customer) for players in the gaming industry refers to the process of verifying the identity of players who use gaming and casino platforms. It involves gaming operators performing customer due diligence on players by verifying their identity, age, documents, and gaming accounts.
          
          AML (Anti-Money Laundering) in gaming refers to the measures that gaming and casino operators put in place to prevent their platforms from being used to launder money or finance criminal activities.`,
        },
        {
          question:
            "Why are KYC and AML Compliance Important for Gaming and Casino Operators? ",
          answer:
            "KYC and AML compliance is important for players as it helps operators to identify and mitigate risks associated with their customers. This is important for responsible gambling and ensuring the safety and security of the gaming environment. KYC checks can help to identify vulnerable customers who may be at risk of developing gambling problems, while AML checks can help to prevent criminal activity in the industry. Gaming and casino operators are required by law to comply with these regulations to prevent illegal activities such as money laundering, terrorist financing, and other financial crimes.",
        },
        {
          question:
            "What is the best way to Achieve Compliance in the Gaming Industry?",
          answer: `To achieve compliance in the gaming industry, gaming operators need to:
          - Understand regulatory  requirements for KYC and AML compliance
          - Establish policies and procedures
          - Implement technology solutions such as identity verification software
          - Regularly conduct audits and assessments`,
        },
      ],
    };
  },
};
</script>
