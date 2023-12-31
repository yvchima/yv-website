<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="KYC | Liveness Detection"
      title="Intelligent Liveness Detection to Spot Spoofing Attacks"
      intro="Protect your business from biometric attacks and deep fakes. Scan and validate customer faces using intelligent AI algorithms to prevent spoofing attacks."
    >
      <div slot="buttons" class="flex flex-wrap gap-4 sm:gap-6">
        <AppButton text="Get started" href="/product/kyc/pricing" />
        <AppButton
          theme="secondary"
          :outline="true"
          text="Book a free Demo"
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
          src="~/assets/images/illustrations/hero-liveness-detection.svg"
        />
      </div>
    </HeroSection>
    <TrustedClients />
    <Stats :stats="stats" />
    <Features :features="features" />
    <section class="pt-24 px-6 max-w-screen-xl mx-auto">
      <h2
        class="font-semibold text-blue-300 text-2xl md:text-5xl text-center max-w-4xl mx-auto"
      >
        How the Youverify Liveness Detection Technology Works
      </h2>

      <div
        class="flex flex-col md:flex-row justify-between items-center gap-10 mt-24"
      >
        <LazyImage
          class="md:w-1/3 lg:w-1/2 h-96 md:h-auto"
          src="~/assets/images/products/liveness-detection.png"
        />

        <div class="space-y-5 w-full">
          <div v-for="(step, index) in steps" :key="index" class="text-xl">
            <span class="font-semibold">Step {{ index + 1 }}</span>
            <p class="">{{ step }}</p>
          </div>
        </div>
      </div>
    </section>
    <Offers
      title="Secure Your Business Against Spoofing Attacks"
      :offers="offers"
    />
    <Integrate />
    <Testimonials />
    <ContactUs
      id="contact"
      heading="Enjoy an Extra Layer of Protection For Your Business with Real-Time Liveness Detection Today"
      note="Send us a message right away and our experts will reach out to help you get started on the best solution for your business. This is how we build reliable compliance solutions. Book a demo below"
    />
    <Faqs :faqs="faqs" />
    <KnowMore />
  </div>
</template>

<script>
import HeroSection from "~/components/common/HeroSection.vue";
import TrustedClients from "~/components/common/TrustedClients.vue";
import Stats from "~/components/common/Stats.vue";
import Features from "~/components/products/Features.vue";
import Offers from "~/components/products/Offers.vue";
import Integrate from "~/components/products/Integrate.vue";
import ContactUs from "~/components/products/ContactUs.vue";
import Faqs from "~/components/products/faqs.vue";
import KnowMore from "~/components/common/KnowMore.vue";
import Testimonials from "~/components/common/Testimonials.vue";
export default {
  components: {
    HeroSection,
    TrustedClients,
    Stats,
    Features,
    Offers,
    Integrate,
    ContactUs,
    Faqs,
    KnowMore,
    Testimonials,
  },
  head() {
    return {
      title: "Liveness Detection",
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
          content: "Intelligent Liveness Detection to Spot Spoofing Attacks",
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
          figure: "30min",
          name: "Quick integration with YV SDK",
        },
        {
          figure: "99%",
          name: "Completion rate",
        },
      ],
      steps: [
        "It requests the user to open their selfie camera and make certain specific gestures.",
        "Leveraging artificial intelligence and deep convolutional neural networks (DCNNs), our system detects fake presentations like 3D masks, projections, etc.",
        "Our system scans for conditions where a recaptured version of a person is presented instead of a real person.",
      ],
      features: [
        {
          title: "Grow Your Business",
          note: "Rapidly onboard customers to your platform without the fear of spoofing or deep fake attacks. Liveness detection records a live video of the customer, where they are prompted to perform specific actions such as smiling or tilting their head which is verified for legitimacy.",
        },
        {
          title: "Spot Criminals On-The-Go",
          note: "Add an extra layer of security to your customer onboarding process and helps to prevent fraud. It is quick and easy to use and can be integrated seamlessly into your existing KYC process.",
        },
        {
          title: "2FA Extra Layer of Security",
          note: "Suspicious transaction patterns? Add liveness detection as 2-factor authentication to verify customer transactions before they go through.",
        },
      ],
      offers: [
        {
          illustration: "intelligent-ai",
          title: "Intelligent AI",
          note: "Leverage the best AI technology for liveness detection mechanism and preventing anti-spoofing. With one of the world's most complete and powerful biometric anti-spoofing algorithms, businesses can reliably identify and prevent identity theft.",
        },
        {
          illustration: "id-card",
          title: "High Accuracy",
          note: "Our AI technology prevents forgery through replay attacks like videos, recorded deep fakes or avatars. Real-time customer video feed is compared to a government-issued ID, such as a passport or driver's license, to confirm that the person in the video is the same person as the one on the ID with high accuracy.",
        },
        {
          illustration: "motion-detection",
          title: "2D/3D Motion Detection",
          note: "Seamlessly detect 2D photos and 3D facial movements through our superior liveness detection technology that leverages optical flow algorithms. This prevents criminal spoofing action of preventing two slightly different photos.",
        },
      ],
      faqs: [
        {
          question: "What is Liveness Detection?",
          answer:
            "Liveness detection technology is used to differentiate life persons from spoofing attacks like masks, videos, photos and other deep fakes. It is generally used for facial recognition fraud detection. ",
        },
        {
          question: "Why Liveness Detection?",
          answer:
            "Liveness detection is important because it acts as authentication to a platform or user account. For example, a criminal may use the customer's video, photo or mask to fool facial recognition algorithm to get unauthorized access to the account or data. Liveness detection identifies and flags such fakes. ",
        },
        {
          question: "How Does Liveness Detection Work?",
          answer:
            "Liveness detection analyses user images and videos to verify their legitimacy - whether they come from a fake or live person.",
        },
      ],
    };
  },
};
</script>
