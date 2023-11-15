<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Compliance Management"
      title="All Your Compliance Needs in One Place"
      intro="Simplify compliance processes for your business and its customers by building easy-to-use workflows."
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
          src="~/assets/images/illustrations/hero-solutions-compliance-management.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Features :features="features" />
    <section class="py-24 px-6 max-w-screen-xl mx-auto">
      <h2
        class="text-3xl md:text-5xl font-semibold text-blue-300 text-center max-w-4xl mx-auto capitalize"
      >
        Verify Your Customer at Every Step of the Way
      </h2>

      <div
        class="py-20 flex flex-col md:flex-row gap-10 md:gap-5 justify-between"
      >
        <div>
          <h3
            class="font-semibold text-2xl bg-blue-300 rounded-lg text-white py-4 px-5 text-center"
          >
            Customer Verification
          </h3>
          <div class="flex flex-col items-center mt-1">
            <div class="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
            <div class="border-l border-blue-900 h-8"></div>
            <div class="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
          </div>
          <div
            class="border-dashed border border-blue-900 bg-blue-300 bg-opacity-20 pl-12 pr-9 py-11 rounded-lg mt-2 md:max-w-xs"
          >
            <ul class="text-blue-900 text-lg font-medium list-disc">
              <li>AML screening</li>
              <li>Biometric Authentication</li>
              <li>Reusable KYC</li>
              <li>Identity Verification</li>
              <li>Address Verification</li>
            </ul>
          </div>
        </div>

        <div>
          <h3
            class="font-semibold text-2xl bg-blue-300 rounded-lg text-white py-4 px-5 text-center"
          >
            Business Verification
          </h3>
          <div class="flex flex-col items-center mt-1">
            <div class="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
            <div class="border-l border-blue-900 h-8"></div>
            <div class="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
          </div>
          <div
            class="border-dashed border border-blue-300 bg-blue-300 bg-opacity-20 pl-12 pr-9 py-11 rounded-lg mt-2 md:max-w-xs"
          >
            <ul class="text-blue-300 text-lg font-medium list-disc">
              <li>Registry Verification</li>
              <li>Address Verification</li>
              <li>Beneficial Ownership Verification</li>
            </ul>
          </div>
        </div>

        <div>
          <h3
            class="font-semibold text-2xl bg-blue rounded-lg text-white py-4 px-5 text-center"
          >
            Monitoring
          </h3>
          <div class="flex flex-col items-center mt-1">
            <div class="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
            <div class="border-l border-blue-900 h-8"></div>
            <div class="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
          </div>
          <div
            class="border-dashed border border-blue bg-blue bg-opacity-20 pl-12 pr-9 py-11 rounded-lg mt-2 md:max-w-xs"
          >
            <ul class="text-blue text-lg font-medium list-disc">
              <li>Transaction Monitoring</li>
              <li>Transaction Screening</li>
              <li>Crypto Monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

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
            class="rounded-2xl px-4 lg:px-7 flex justify-between items-center gap-8 lg:gap-16 cursor-pointer duration-300 ease-in-out w-full md:w-2/3"
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
          <div v-show="currentIndex === index" class="hidden md:block">
            <!-- <img
                :src="
                  require(`~/assets/images/icons/solutions/${product.icon}.svg`)
                "
              /> -->
            <LazyImage
              class="h-56"
              :src="require(`~/assets/images/products/${product.image}.png`)"
            />
          </div>
        </div>
      </div>
    </section>

    <div>
      <div class="py-24">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-12 px-6 max-w-screen-xl mx-auto"
        >
          <div class="w-full">
            <lottie-player
              src="https://assets9.lottiefiles.com/packages/lf20_cvruqprn.json"
              background="transparent"
              speed="1"
              style="width: 505; height: 545"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div class="w-full">
            <h3 class="capitalize font-semibold text-3xl">
              Design Your Compliance Process
            </h3>
            <p class="mt-3 md:mt-7">
              Leverage our drag-and-drop no-code tool to build your custom
              compliance process. Set up flexible workflows that adapt to the
              customer choices and regulatory needs of your business.
            </p>
          </div>
        </div>
      </div>

      <div class="py-24">
        <div
          class="flex flex-col md:flex-row-reverse justify-between items-center gap-12 px-6 max-w-screen-xl mx-auto"
        >
          <div class="w-full">
            <LazyImage
              class="mx-auto md:ml-auto"
              src="~/assets/images/screenshots/workflow-builder-dashboard.svg"
            />
          </div>
          <div class="w-full">
            <h3 class="capitalize font-semibold text-3xl">
              Interactive Management Dashboard
            </h3>
            <p class="mt-3 md:mt-7">
              Set up and control the customer verification flow and ongoing
              monitoring in our interactive management dashboard. Analyse every
              detail and set conditions for cases to be reviewed manually to
              make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <section class="py-24 bg-blue-100">
      <div
        class="px-6 max-w-screen-xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12"
      >
        <LazyImage
          class="mx-auto md:mx-0 h-24 md:h-auto"
          src="~/assets/images/icons/solutions/compliance-and-security.svg"
        />

        <div class="md:w-2/3">
          <h2 class="font-semibold text-xl md:text-3xl">
            Compliance and Security? We Lead by Example
          </h2>
          <p class="mt-9">
            Trusting us with your data means we need to take extra precautions
            and pay attention to security. All data is encrypted and protected
            in adherence to global standards.
          </p>

          <div class="flex flex-wrap gap-6 items-center mt-16">
            <div v-for="(logo, index) in certificationLogos" :key="index">
              <LazyImage
                :src="require(`~/assets/images/logos/security/${logo}.png`)"
                :alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Testimonials />

    <ContactUs
      id="contact"
      heading="Custom Design Your Business Compliance Needs Today With Youverify"
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
import ContactUs from "~/components/products/ContactUs.vue";
import Faqs from "~/components/products/faqs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
import Testimonials from "~/components/common/Testimonials.vue";
export default {
  components: {
    HeroSection,
    TrustedClients,
    Features,
    ContactUs,
    Faqs,
    KnowMore,
    Testimonials,
  },
  head() {
    return {
      title: "Compliance Management Solution",
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
          content: "All Your Compliance Needs in One Place",
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
          title: "Satisfy Regulatory Requirements & Avoid Fines",
          note: "Verify customer data according to laid down global and jurisdictional compliance guidelines.",
        },
        {
          icon: "onboarding",
          title: "Real-Time Customer Monitoring",
          note: "With Youverify compliance solution, you have everything you need to verify customers and detect fraud on the go.",
        },
        {
          icon: "onboarding",
          title: "Speed Up Onboarding With Minimal Compliance Risk",
          note: "Satisfy global AML and CFT compliance laws without clogging your user onboarding process.",
        },
      ],
      products: [
        {
          image: "kyt",
          heading: "Know Your Transaction (KYT)",
          note: "Monitor and detect suspicious customer activities through our elaborate transaction monitoring solution. Get access to ready-to-use scenery or create your industry-tailored custom rules.",
        },

        {
          image: "kyb",
          heading: "Know Your Business (KYB)",
          note: "Verify the legal existence and registry of a business including its address, incorporation documents, the identity of directors and ultimate beneficial owners.",
        },
        {
          image: "kye",
          heading: "Know Your Employee (KYE)",
          note: "Protect your business by screening employees for adequate risk assessment. Verify their identity, work history and certificates.",
        },
        {
          image: "kyc",
          heading: "Know Your Customer (KYC)",
          note: "Perform full KYC verification globally to satisfy compliance. Perform ID, address, biometric, and phone number verification. AML screen and criminal/ fraud check customers for PEP and sanction listing.",
        },
        {
          image: "workflow",
          heading: "Workflow Automation",
          note: "Custom build your compliance workflow to suit the needs of your business, creating a seamless onboarding experience for customers.",
        },
      ],
      certificationLogos: [
        "data-protection-kenya",
        "iso-iec-27001",
        "iso-iec-27018",
        "popia",
        "ndpr-audit",
        "eu-gdpr",
      ],
      faqs: [
        {
          question: "Why is Compliance Important?",
          answer:
            "Compliance is important because it helps businesses identify and report potential threats before any damage is done. Adhering to compliance also ensures that the business is not at risk of being fined for regulatory violations.",
        },
        {
          question: "What is an AML Compliance Software?",
          answer:
            "An AML compliance software is a program designed to manage customer verification processes and other compliance needs of a business. With AML compliance software, businesses can easily satisfy compliance requirements while combating terrorist financing, money laundering and other financial crimes.",
        },
        {
          question: "How do I Select an AML Compliance Software?",
          answer:
            "The most important criterion to consider when choosing AML compliance software is that it should contain the necessary tools to meet your specific industry compliance requirements. However, it should generally possess the following - customer verification, AML monitoring, transaction screening and address verification. The price is also another worthy note.",
        },
      ],
    };
  },
};
</script>
