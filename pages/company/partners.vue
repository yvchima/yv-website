<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="Partners"
      title="Partner With the Most Innovative Global Compliance Platform"
      intro="Let's grow together. See how our global compliance products can help your business."
      illustration="hero-partnership.svg"
    >
      <div slot="buttons">
        <AppButton text="Become a partner" href="#contact">
          <svg slot="append" viewBox="0 0 20 20" fill="none" class="w-5 ml-2">
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
          src="~/assets/images/illustrations/hero-partnership.svg"
        />
      </div>
    </HeroSection>
    <Stats :stats="stats" />
    <Partners />
    <section class="py-36">
      <h1
        class="text-2xl md:text-4xl font-semibold text-center max-w-2xl mx-auto text-blue-900"
      >
        Scale Your Business, Build Profitable Partnerships Tailored to Your
        Needs
      </h1>

      <div class="relative mt-12 md:mt-28">
        <div
          class="hidden md:block absolute inset-x-0 bottom-0"
          style="z-index: -1"
        >
          <img src="~/assets/images/illustrations/element.svg" alt="" />
        </div>
        <div
          class="flex flex-col md:flex-row gap-7 md:gap-4 px-6 max-w-screen-xl mx-auto"
        >
          <div
            v-for="partner in partners"
            :key="partner.type"
            class="px-5 lg:px-14 pt-14 pb-20 shadow-md flex flex-col items-center text-center rounded-xl bg-white"
          >
            <img
              class="w-20"
              :src="
                require(`~/assets/images/illustrations/${partner.illustration}.svg`)
              "
              :alt="partner.type"
            />
            <h2 class="text-2xl font-semibold mt-8">{{ partner.type }}</h2>
            <p class="mt-4 lg:max-w-xs">{{ partner.text }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- <Testimonials /> -->
    <section id="contact" class="py-20 bg-blue-100">
      <div v-if="submitted">
        <div class="text-center">
          <img
            class="mx-auto"
            src="~/assets/images/icons/completed.svg"
            alt=""
          />
          <h3 class="font-semibold text-4xl mt-10">Thank you</h3>
          <p class="mt-8 font-medium">
            Someone from the product team will contact you shortly.
          </p>
        </div>
      </div>

      <div v-else class="px-6 max-w-screen-xl mx-auto text-center">
        <h1 class="text-2xl md:text-5xl font-semibold">
          Ready to become a partner?
        </h1>
        <p class="text-xl mt-6">Sign up to explore partnership benefits</p>
        <contact-form
         type='product'
          class="w-full mt-7 md:mt-16 max-w-md mx-auto"
          @submit-form="submitForm"
        />
      </div>
    </section>
    <MoreYouverify />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { commonEmails } from "~/data/emails";
import MoreYouverify from "~/components/company/MoreYouverify.vue";
import HeroSection from "~/components/common/HeroSection.vue";
import Stats from "~/components/common/Stats.vue";
import Testimonials from "~/components/common/Testimonials.vue";
import Partners from "~/components/company/Partners.vue";
import ContactForm from "@/components/contactForm.vue";
export default {
  components: {
    MoreYouverify,
    ContactForm,
    HeroSection,
    Stats,
    Testimonials,
    Partners,
  },
  head() {
    return {
      title: "Technology Data and Platform Partnerships",
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
      partnership_type: "",
      checkbox: null,
      submitted: false,
      types: ["Data Partner", "Technology Partner", "SaaS/PaaS Partner"],
      stats: [
        {
          figure: "200+",
          name: "Global Clients",
        },
        {
          figure: "50+",
          name: "Global Partners",
        },
        {
          figure: "94%",
          name: "Average growth after partnership",
        },
      ],
      partners: [
        {
          illustration: "artificial-intelligence",
          type: "Tech Solutions Partner",
          text: "Leverage our white labelling partnership to adopt our products and sell them as yours to customers.",
        },
        {
          illustration: "partners",
          type: "SaaS & PaaS Partner",
          text: "Improve your product offering with our KYC, KYT, KYB, KYE and Compliance workflow solutions. Offer extra added value to",
        },
        {
          illustration: "speaker",
          type: "Referrals",
          text: "Refer our products and earn a commission on every successful sign-on.",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      countriesMap: (state) => state.countries.countries,
    }),
    countryCodes() {
      return Object.keys(this.countriesMap).map((key) => {
        const country = this.countriesMap[key];
        return {
          emoji: country.emoji,
          name: "+" + country.phone,
          value: "+" + country.phone,
          listName: country.name,
        };
      });
    },
    isCommonEmail() {
      const email = this.email;
      if (email) {
        const domain = email.split("@")[1];
        return commonEmails.includes(domain);
      }
      return false;
    },
  },
  methods: {
    async submitForm(data) {
      try {
        await this.$store.dispatch("zoho-crm/createLeads", { ...data }); // type: 'product'
        this.submitted = true;
        if (this.checkbox) {
          // subscribe to newsletter
          await this.$axios.$post(`${process.env.baseUrl}/newsletter-emails`, {
            Email: this.email,
          });
        }
      } catch (e) {}
    },
  },
  async asyncData({ store }) {
    await store.dispatch("countries/getCountries");
  },
};
</script>
