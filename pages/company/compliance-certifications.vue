<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Compliance Certifications"
      title="Compliance Certifications"
      intro="Youverify is designed with advanced engineering practices and strict security measures in mind. Our certifications and recurring testing back this up."
      ><div slot="illustration">
        <LazyImage
          class="h-full md:ml-auto"
          src="~/assets/images/illustrations/hero-certification.svg"
        />
      </div>
    </HeroSection>
    <section class="pt-28 px-6 max-w-screen-xl mx-auto">
      <div class="text-center max-w-2xl mx-auto">
        <h1 class="font-semibold text-xl md:text-4xl">
          Certifications and attestations
        </h1>
        <p class="text-lg md:text-xl mt-4 md:mt-7">
          Explore the different ways you can intergate Youverify Operating
          System in your flows and apps
        </p>
      </div>
      <div class="space-y-10 mt-14 md:mt-28">
        <div
          v-for="certificate in certifications"
          :key="certificate.name"
          class="shadow-md rounded-md py-5 px-8 md:py-9 md:px-14 space-y-5"
        >
          <figure class="flex gap-3 items-center flex-wrap">
            <LazyImage
              v-for="image in certificate.image"
              :key="image"
              :src="
                require(`~/assets/images/logos/certifications/${image}.svg`)
              "
            />
          </figure>
          <h1 class="font-medium text-xl md:text-2xl">
            {{ certificate.name }}
          </h1>
          <p class="text-lg">{{ certificate.body }}</p>
        </div>
      </div>
    </section>
    <MoreYouverify />
  </div>
</template>

<script>
import MoreYouverify from "~/components/company/MoreYouverify.vue";
import HeroSection from "~/components/common/HeroSection.vue";
export default {
  components: { MoreYouverify, HeroSection },
  head() {
    return {
      title: "Compliance Certifications",
      link: [
        {
          rel: "canonical",
          href: "https://youverify.co" + this.$route.path,
        },
      ],
    };
  },
  data() {
    return {
      certifications: [
        {
          image: ["ndpr"],
          name: "NITDA Certificate",
          body: "This is evidence of the company's annual compliance status with the National Information Technology Development Agency of Nigeria.",
        },
        {
          image: ["iso-27018", "iso-27001"],
          name: "ISO/IEC 27018:2019",
          body: "This certificate attests to Youverify's compliance with the International Organization of Standardization. It symbolizes the existence of a management system and documentation procedure that has all the requirements for standardization and quality assurance.",
        },
        {
          image: ["kenya"],
          name: "Office of the Data Protection Commissioner Kenya",
          body: "We are compliant with Kenya's personal data protection Act.",
        },
        {
          image: ["popia"],
          name: "POPIA (Protection of Personal Information Act)",
          body: "We are compliant with the South African Act on personal data protection. See our PAIA Manual",
        },
        {
          image: ["gdpr"],
          name: "Data Protection and Privacy Compliance",
          body: "As a data Processor and controller, we are fully compliant with the EU GDPR.",
        },
        {
          image: ["delaware", "canada", "cipc", "brs", "cac", "cote-dvoire"],
          name: "Incorporation Documents",
          body: "These show the active status of the company as a legally subsisting enterprise in each jurisdiction. We are incorporated in USA, Canada, Kenya, South Africa, Ivory Coast and Nigeria.",
        },
      ],
    };
  },
};
</script>
