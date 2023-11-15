<template>
  <div class="pt-20">
    <section class="mt-24 hero flex flex-col justify-center items-center">
      <div class="max-w-5xl mx-auto px-8">
        <h1 class="font-semibold text-2xl md:text-5xl text-white text-center">
          We Are Fighting Fraud Through Global Innovative Solutions, How Can you
          Help?
        </h1>
        <p
          class="mt-4 md:mt-8 md:text-2xl font-medium text-white text-center px-4"
        >
          Join the Humans of Youverify in a workplace that challenges your
          expertise, sparks your creativity and advances your career.
        </p>
      </div>
      <AppButton
        text="See Openings"
        theme="white"
        class="mt-4 md:mt-8"
        href="#careers"
      />
    </section>

    <section class="py-14">
      <VueSlickCarousel v-bind="settings">
        <figure v-for="(image, index) in 5" :key="index">
          <div class="px-1 md:px-3">
            <LazyImage
              class="rounded-lg"
              :src="require(`~/assets/images/company/people-${index + 1}.png`)"
              alt=""
            />
          </div>
        </figure>
      </VueSlickCarousel>
    </section>
    <section
      class="px-6 max-w-screen-xl mx-auto text-center lg:pt-20 md:pb-96 relative"
    >
      <h2 class="font-semibold text-4xl">Our Mission</h2>
      <p class="text-xl mt-8 max-w-3xl mx-auto">
        Youverify is building innovative global compliance products that will
        continue to push the boundaries of what is possible in RegTech
        compliance and fraud mitigation globally. Our core value drives how we
        work with partners and how we build our team.
      </p>

      <div
        style="height: 600px"
        class="absolute -bottom-1/2 inset-x-8 rounded-2xl hidden md:block overflow-hidden"
      >
        <iframe
          class="h-full w-full"
          src="https://www.youtube.com/embed/wQf60vo99Pg"
        ></iframe>
      </div>

      <div
        style="height: 320px"
        class="rounded-2xl overflow-hidden md:hidden mt-14"
      >
        <iframe
          class="h-full w-full"
          src="https://www.youtube.com/embed/wQf60vo99Pg"
        ></iframe>
      </div>
    </section>
    <section class="py-20 md:pt-96 bg-blue">
      <div class="px-6 max-w-screen-xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div
            v-for="(method, index) in methods"
            :key="index"
            class="bg-white rounded-2xl py-5 px-4 md:py-10 md:px-9"
          >
            <h3 class="text-xl font-medium">{{ method.name }}</h3>
            <p class="mt-3 md:mt-3 mb-8">
              {{ method.note }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <Openings :openings="openings" :departments="vacantDepartments" />

    <Testimonials
      category="Employees"
      heading="Humans of Youverify Are Happy People"
    />
    <MoreYouverify :career="true" class="px-6 max-w-screen-xl mx-auto" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Testimonials from "~/components/common/Testimonials.vue";
import Openings from "~/components/company/Openings.vue";
import MoreYouverify from "~/components/company/MoreYouverify.vue";
export default {
  components: { Testimonials, Openings, MoreYouverify },
  head() {
    return {
      title: "Global Career Opportunities",
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
      methods: [
        {
          name: "Customer focus",
          note: "We are focused on building compliance solutions that deliver the best experience and specific industry use cases for our customers and partners.",
        },
        {
          name: "Clear Communication",
          note: "We simplify our work, ideas and journey to all, for the clearest understanding.",
        },
        {
          name: "Transparency",
          note: "To be always open, honest and forthcoming in detail; even when it is difficult.",
        },
        {
          name: "Integrity",
          note: "To build and grow with a sense of ownership to all our partners, at all times.",
        },
      ],
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "60px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              centerPadding: "30px",
            },
          },
          {
            breakpoint: 560,
            settings: {
              centerPadding: "20px",
            },
          },
        ],
      },
    };
  },
  computed: {
    ...mapState({
      openings: (state) => state.teams.openings,
      departments: (state) => state.teams.openDepartments,
    }),
    vacantDepartments() {
      return this.departments.filter(
        (department) => department.job_opening_roles.length > 0
      );
    },
  },
  async asyncData({ store }) {
    await Promise.all([
      store.dispatch("teams/getOpenings"),
      store.dispatch("teams/getOpenDepartments"),
    ]);
  },
};
</script>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(~/assets/images/company/careers-hero-background.png);
  min-height: calc(100vh - 165px);
  background-position: center;
  background-size: cover;
}
</style>
