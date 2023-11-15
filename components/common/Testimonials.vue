<template>
  <section class="py-16 md:py-24 px-6">
    <div
      class="bg-blue-300 pt-16 pb-10 max-w-screen-xl mx-auto px-8 sm:pl-12 md:pr-16 md:pl-20 lg:pr-24 lg:pl-32"
    >
      <div class="flex gap-5 md:gap-14 items-center">
        <div>
          <img class="" src="~/assets/images/icons/quotation.svg" alt="" />
        </div>
        <h2 class="text-white font-semibold text-xl md:text-3xl">
          {{ heading }}
        </h2>
      </div>

      <div class="flex gap-2 mt-10">
        <VueSlickCarousel ref="carousel" v-bind="settings" class="w-full">
          <div
            v-for="testimonial in filteredTestimonials"
            :key="testimonial.id"
            class="sm:pr-3"
          >
            <div class="sm:max-w-xs rounded-2xl overflow-hidden">
              <LazyImage
                class="h-36 w-full object-cover"
                :src="testimonial.FeaturedImage.url"
              />
              <div class="h-3 bg-blue relative">
                <div class="absolute top-1/2 transform -translate-y-1/2 left-4">
                  <img src="~/assets/images/icons/quote-small.svg" alt="" />
                </div>
              </div>
              <div class="text-center py-6 px-5 md:px-8 bg-white">
                <p class="text-xs leading-5 h-36 overflow-scroll">
                  {{ testimonial.Content }}
                </p>

                <div class="mt-1.5">
                  <span class="text-blue text-xs font-semibold">{{
                    testimonial.Name
                  }}</span>
                  <p class="text-blue text-xs">{{ testimonial.Position }}</p>
                </div>
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>

      <div
        class="flex items-center gap-3 mt-9"
        :class="filteredTestimonials.length < 4 ? 'lg:hidden' : ''"
      >
        <div
          @click="showPrev"
          class="h-6 w-6 rounded-full flex items-center justify-center cursor-pointer border-2 border-white"
        >
          <svg
            fill="white"
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
          class="h-6 w-6 rounded-full flex items-center justify-center cursor-pointer border-2 border-white"
        >
          <svg
            fill="white"
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
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    category: {
      default: "Customers",
    },
    heading: {
      default: "What our Customers Have to Say Will Convince You",
    },
  },
  data() {
    return {
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1500,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 640,
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
    ...mapState({
      testimonials: (state) => state.testimonials.testimonials,
      loading: (state) => state.testimonials.loading,
    }),
    filteredTestimonials() {
      return this.testimonials.filter(
        (testimonial) => testimonial.Category.Title === this.category
      );
    },
  },
  methods: {
    showPrev() {
      this.$refs.carousel.prev();
    },
    showNext() {
      this.$refs.carousel.next();
    },
  },
  async fetch() {
    await this.$store.dispatch("testimonials/getTestimonials");
  },
};
</script>
