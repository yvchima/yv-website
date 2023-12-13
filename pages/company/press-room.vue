<template>
  <div class="pt-20">
    <HeroSection
      class="mt-28"
      tag="News room"
      title="Explore the Youverify Newsroom"
      intro="Welcome! Find the latest press release, news features and industry media information."
      illustration="hero-press-room.svg"
      :lightBlue="true"
    >
      <div slot="buttons">
        <AppButton text="Contact team" href="#contact" />
      </div>
      <div slot="illustration">
        <LazyImage
          class="h-full md:ml-auto"
          src="~/assets/images/illustrations/hero-press-room.svg"
        />
      </div>
    </HeroSection>

    <section class="py-20 px-6 max-w-screen-xl mx-auto">
      <h2 class="text-2xl md:text-4xl">Press Releases</h2>
      <div v-show="loading" class="flex items-center justify-center my-4">
        <content-placeholders
          v-for="index in 3"
          :key="index"
          style="width: 390px"
        >
          <content-placeholders-heading :img="true" />
          <content-placeholders-text :lines="3" />
        </content-placeholders>
      </div>
      <div
        v-show="!loading"
        class="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 lg:gap-10 mt-14"
      >
        <BlogCard v-for="blog in pressReleases" :key="blog.id" :blog="blog" />
      </div>
    </section>

    <section class="py-20 px-6 max-w-screen-xl mx-auto">
      <h2 class="text-2xl md:text-4xl">Featured Media</h2>
      <VueSlickCarousel ref="carousel" v-bind="settings" class="">
        <div v-for="media in featuredMedias" :key="media.id" class="pr-6">
          <div class="hover:shadow-md shadow rounded-2xl p-6 my-10">
            <LazyImage class="h-12" :src="media.Image.url" />
            <p class="text-black mt-5 mb-9 h-32 ellipsis">
              {{ media.Title }}
            </p>
            <a
              :href="media.Link"
              target="_blank"
              class="text-blue font-medium flex items-center gap-2.5"
              >Full story here
              <div
                class="h-5 w-5 rounded-full flex items-center justify-center cursor-pointer border-2 border-blue"
              >
                <svg
                  class="transform -rotate-45"
                  fill="#46B2C8"
                  width="11px"
                  height="11px"
                  viewBox="0 0 0.206 0.206"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow"
                  version="1.1"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    d="M0.114 0.031C0.119 0.026 0.128 0.026 0.134 0.031L0.195 0.093C0.201 0.099 0.201 0.107 0.195 0.113L0.134 0.174C0.128 0.18 0.119 0.18 0.114 0.174C0.108 0.17 0.108 0.16 0.114 0.156L0.151 0.117H0.02C0.014 0.117 0.007 0.111 0.007 0.103C0.007 0.096 0.014 0.09 0.02 0.09H0.151L0.114 0.051C0.108 0.046 0.108 0.037 0.114 0.031Z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </VueSlickCarousel>
      <div class="flex items-center gap-3">
        <div
          @click="showPrev"
          class="h-6 w-6 rounded-full flex items-center justify-center cursor-pointer border-2 border-blue"
        >
          <svg
            fill="#46B2C8"
            width="14px"
            height="14px"
            viewBox="0 0 0.63 0.63"
            version="1.1"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,0,0)"
          >
            <title>caret-line</title>
            <path
              class="clr-i-outline clr-i-outline-path-1"
              d="M0.517 0.394 0.315 0.185 0.113 0.394a0.03 0.03 0 0 0 0.043 0.041L0.315 0.271l0.159 0.164a0.03 0.03 0 0 0 0.043 -0.041Z"
            ></path>
            <path
              x="0"
              y="0"
              width="36"
              height="36"
              fill-opacity="0"
              d="M0 0H0.63V0.63H0V0z"
            ></path>
          </svg>
        </div>
        <div
          @click="showNext"
          class="h-6 w-6 rounded-full flex items-center justify-center cursor-pointer border-2 border-blue"
        >
          <svg
            fill="#46B2C8"
            width="14px"
            height="14px"
            viewBox="0 0 0.63 0.63"
            version="1.1"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            transform="matrix(6.123233995736766e-17,1,-1,6.123233995736766e-17,0,0)"
          >
            <title>caret-line</title>
            <path
              class="clr-i-outline clr-i-outline-path-1"
              d="M0.517 0.394 0.315 0.185 0.113 0.394a0.03 0.03 0 0 0 0.043 0.041L0.315 0.271l0.159 0.164a0.03 0.03 0 0 0 0.043 -0.041Z"
            ></path>
            <path
              x="0"
              y="0"
              width="36"
              height="36"
              fill-opacity="0"
              d="M0 0H0.63V0.63H0V0z"
            ></path>
          </svg>
        </div>
      </div>
    </section>

    <section class="press-kit flex items-center md:block">
      <div class="px-6 max-w-screen-xl mx-auto md:h-full relative">
        <div
          class="bg-white rounded-3xl p-6 md:p-12 flex items-center gap-12 md:absolute inset-x-8 -bottom-1/2 md:shadow-md"
        >
          <div class="md:w-1/2 lg:w-2/5">
            <h2 class="text-blue-900 text-3xl md:text-5xl">
              Download press kit
            </h2>
            <p class="md:text-lg my-6">
              Here you'll find our press releases, logos, product visuals, info
              about our founders, and the full Youverify story.
            </p>
            <AppButton
              href="https://drive.google.com/drive/folders/11ufOVPPnEQ4J92j61nJAAJuIbOzVgc_r"
              text="Get it here"
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
          <div class="hidden md:block w-1/2 lg:w-3/5">
            <LazyImage
              class="h-72 mx-auto"
              src="~/assets/images/illustrations/press-kit.svg"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="py-20 px-6 max-w-screen-xl mx-auto mt-52">
      <h2 class="text-2xl md:text-4xl text-center">Customer Success Stories</h2>
      <div class="w-full py-16">
        <h2 class="text-2xl text-center text-gray-500">
          There are no stories yet.
        </h2>
      </div>
    </section> -->

    <section class="py-20 mt-52 px-6 max-w-screen-xl mx-auto">
      <h2 class="text-2xl md:text-4xl text-center">Our Blog Posts</h2>

      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 lg:gap-10 mt-14"
      >
        <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </div>
    </section>

    <section class="py-20 bg-blue-100">
      <div class="px-6 max-w-screen-xl mx-auto">
        <h2 class="text-2xl md:text-4xl text-blue-300 text-center">
          Awards & Recognition
        </h2>

        <div class="flex items-center justify-center gap-16 flex-wrap mt-16">
          <LazyImage
            class="h-32"
            v-for="award in awards"
            :key="award.id"
            :src="award.Image.url"
            :alt="award.Title"
          />
        </div>
      </div>
    </section>

    <section id="contact" class="pt-40 px-6 max-w-screen-xl mx-auto">
      <div v-if="submitted">
        <div class="text-center">
          <img
            class="mx-auto"
            src="~/assets/images/icons/completed.svg"
            alt=""
          />
          <h3 class="font-semibold text-4xl mt-10">Thank you</h3>
          <p class="mt-8 font-medium">
            Someone from the marketing team will contact you shortly.
          </p>
        </div>
      </div>

      <div v-else class="flex flex-col md:flex-row gap-16 lg:gap-32">
        <div class="md:w-1/2 text-center md:text-left">
          <h1 class="text-2xl md:text-4xl">
            We Want to Be a Part of Your Story
          </h1>
          <p class="mt-3 md:mt-6 md:text-lg">
            Working on an exciting story and need Youverify's help? Reach out to
            us and our team will get back to you in less than 24 hours.
          </p>
        </div>

      <contact-form class="w-full md:w-1/2" @submit-form='submitForm' />
      </div>
    </section>

    <section
      class="py-40 px-6 max-w-screen-xl mx-auto md:flex justify-between items-center gap-6"
    >
      <div>
        <h3 class="text-3xl md:text-5xl">Stay tuned to</h3>
        <h3 class="text-3xl md:text-5xl">Youverify news</h3>
        <p class="mt-6 text-blue">with out social media channels</p>
        <div
          class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-5 mt-6 lg:mt-12"
        >
          <a
            v-for="(social, index) in socials"
            :key="index"
            :href="social.link"
            target="_blank"
            class="border-2 border-blue-300 rounded-2xl p-2 md:p-3.5 flex items-center gap-1.5 sm:gap-2.5"
          >
            <img
              :src="
                require(`~/assets/images/icons/social/${social.icon}-stroke.svg`)
              "
              :alt="social.name"
            />
            <span class="font-medium sm:text-lg text-blue-200">{{
              social.name
            }}</span>
          </a>
        </div>
      </div>

      <div class="space-y-7 mt-7 md:mt-0 md:max-w-xl w-full">
        <button
          is="a"
          href="https://www.youtube.com/@youverify8216"
          target="_blank"
          class="rounded-2xl shadow-md cursor-pointer flex justify-between items-center gap-3.5 p-6 sm:p-9"
        >
          <div class="">
            <div class="flex items-center gap-2 sm:gap-5">
              <img
                class="w-10 sm:w-auto"
                src="~/assets/images/icons/youtube.svg"
              />
              <h5 class="font-medium text-xl sm:text-2xl">
                Youtube Channel
                <span class="sm:hidden"> &nbsp; &RightArrow;</span>
              </h5>
            </div>
            <p class="text-xl mt-3.5 max-w-sm">
              KYC/AML guides, latest regulatory updates and best practices from
              the top legal and compliance speakers
            </p>
          </div>
          <svg
            class="hidden sm:block"
            width="28px"
            height="28px"
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#115766"
          >
            <path
              d="M15.4 14L12.177 10.492a0.717 0.717 0 0 1 0 -1.005 0.7 0.7 0 0 1 0.994 0l3.93 4.01a0.714 0.714 0 0 1 0 1.004l-3.93 4.01a0.697 0.697 0 0 1 -0.994 0 0.714 0.714 0 0 1 0 -1.004L15.4 14zM14 0.56a13.44 13.44 0 0 1 13.44 13.44c0 7.424 -6.017 13.44 -13.44 13.44S0.56 21.424 0.56 14A13.44 13.44 0 0 1 14 0.56zm0 25.136a11.696 11.696 0 1 0 0 -23.393 11.696 11.696 0 0 0 0 23.393z"
            />
          </svg>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { commonEmails } from "~/data/emails";
import HeroSection from "~/components/common/HeroSection.vue";
import BlogCard from "~/components/resources/BlogCard.vue";
import ContactForm from "@/components/contactForm.vue";

export default {
  components: { HeroSection, BlogCard, ContactForm },
  head() {
    return {
      title: "Press & Media",
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
          content: "Explore the Youverify Newsroom",
        },
      ],
    };
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      company: "",
      whereDidYouHear: "",
      tel_code: "+1",
      mobile: null,
      message: "",
      checkbox: null,
      submitted: false,
      socials: [
        {
          icon: "facebook",
          name: "Facebook",
          link: "https://www.facebook.com/youverifyID",
        },
        {
          icon: "linkedin",
          name: "LinkedIn",
          link: "https://www.linkedin.com/company/youcheckonline",
        },
        {
          icon: "twitter",
          name: "Twitter",
          link: "https://twitter.com/YoucheckOnline",
        },
        {
          icon: "instagram",
          name: "Instagram",
          link: "https://instagram.com/youcheckonline",
        },
      ],
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 2000,
        responsive: [
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters({
      blogs: "blogs/blogs",
    }),
    ...mapState({
      relatedBlogs: (state) => state.blogs.relatedBlogs,
      pressReleases: (state) => state.press.pressReleases,
      featuredMedias: (state) => state.press.featuredMedias,
      awards: (state) => state.press.awards,
      loading: (state) => state.blogs.loading,
    }),
    ...mapState({
      countriesMap: (state) => state.countries.countries,
    }),
    countries() {
      return Object.keys(this.countriesMap).map((key) => {
        const country = this.countriesMap[key];
        return {
          name: country.name,
          value: country.name,
          emoji: country.emoji,
        };
      });
    },
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
    showPrev() {
      this.$refs.carousel.prev();
    },
    showNext() {
      this.$refs.carousel.next();
    },
    async submitForm(data) {
      try {
        await this.$store.dispatch("zoho-crm/createLeads", {...data }); // type: 'marketing'
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
    await Promise.all([
      store.dispatch("blogs/getBlogs", {
        currentPage: 0,
        limit: 3,
      }),
      store.dispatch("press/getPressReleases", {
        category: "humans-of-YV",
        category2: "industry-news",
        start: 0,
        limit: 3,
      }),
      store.dispatch("press/getFeaturedMedias"),
      store.dispatch("press/getAwards"),
      store.dispatch("countries/getCountries"),
    ]);
  },
};
</script>

<style scoped>
.press-kit {
  height: 420px;
  width: 100%;
  background-image: url("~/assets/images/company/press-background.png");
  background-position: center;
  background-size: cover;
}
.ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
