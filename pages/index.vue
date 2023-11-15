<template>
  <main class="pt-20">
    <section class="mt-16 bg-blue-300 py-12">
      <div
        class="px-6 max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-12 pb-16 md:pb-0 hero"
      >
        <div
          class="md:w-7/12 flex flex-col items-center md:items-start pt-12 md:pt-0"
        >
          <h1
            class="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-4"
          >
            Compliance <br class="hidden md:block" />
            Made Simple
          </h1>

          <p class="mt-5 text-white text-center md:text-left">
            Automate your AML strategy, prevent fraudulent transactions and
            manage risks, all in one place.
          </p>

          <div class="flex gap-4 justify-center flex-wrap mt-10">
            <AppButton
              text="Book a demo"
              theme="white"
              href="/company/contact-us#contact"
            />
            <AppButton
              text="Try now"
              theme="white"
              :outline="true"
              href="https://os.youverify.co/auth/create-account"
              ><svg
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
        </div>

        <div class="md:w-1/2">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_wu2exiph.json"
            background="transparent"
            speed="1"
            class="h-full w-full"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </section>

    <section class="py-12">
      <div class="flex items-center gap-3 px-6 max-w-screen-xl mx-auto">
        <img src="~/assets/images/icons/heart.svg" alt="" />
        <span class="text-sm text-blue-900"
          >TRUSTED BY LEADING FINTECHS, LENDERS, BROKERAGES, EXCHANGES, AND
          CRYPTO COMPANIES</span
        >
      </div>
      <VueSlickCarousel v-bind="settings" class="py-10">
        <figure v-for="logo in logos" :key="logo" class="">
          <div class="w-28 h-36 flex items-center">
            <LazyImage
              :src="require(`~/assets/images/logos/trusted/${logo}.svg`)"
              alt=""
            />
          </div>
        </figure>
      </VueSlickCarousel>
    </section>

    <section class="py-16">
      <h2
        class="text-2xl sm:text-3xl md:text-5xl font-semibold text-blue-900 max-w-4xl mx-auto px-8 text-center capitalize"
      >
        Reduce fraud without compromising on your growth from one platform
      </h2>
    </section>

    <section class="bg-blue py-16 md:py-24 relative">
      <div class="hidden md:block absolute inset-x-0 bottom-8">
        <img src="~/assets/images/illustrations/element-2.svg" alt="" />
      </div>
      <div
        class="flex flex-col md:flex-row justify-between gap-4 px-8 relative z-10 max-w-screen-xl mx-auto space-y-8 md:space-y-0"
      >
        <div
          v-for="stat in stats"
          :key="stat.name"
          class="text-center md:w-1/4 mx-auto"
          style="max-width: 250px"
        >
          <h2 class="font-bold text-4xl md:text-5xl lg:text-6xl text-white">
            {{ stat.figure }}
          </h2>
          <p class="mt-1 md:mt-4 font-medium text-base text-white h-16">
            {{ stat.name }}
          </p>
          <p v-if="stat.teaser" class="mt-2.5 text-xs text-white">
            {{ stat.teaser }}
          </p>
        </div>
      </div>
    </section>

    <section class="bg-blue-300 py-20 md:py-32">
      <div
        class="px-6 max-w-screen-xl mx-auto flex gap-8 lg:gap-16 items-center justify-between"
      >
        <div class="space-y-7 lg:space-y-12 md:min-w-max">
          <div
            @click="productsIndex = index"
            v-for="(product, index) in products"
            :key="index"
            class="flex items-start md:items-center gap-5 lg:gap-9 cursor-pointer"
          >
            <img
              class="w-10 sm:w-auto duration-200 ease-in-out"
              :class="productsIndex === index ? 'opacity-100' : 'opacity-30'"
              :src="
                require(`~/assets/images/icons/products/${product.icon}.svg`)
              "
              :alt="product.icon"
            />
            <div>
              <h2
                class="font-semibold text-xl lg:text-3xl duration-200 ease-in-out"
                :class="productsIndex === index ? 'text-white' : 'text-grey'"
              >
                {{ product.name }}
              </h2>

              <p
                class="text-white font-medium md:hidden transition-colors duration-200 ease-in-out"
                :class="productsIndex === index ? 'text-white' : 'text-grey'"
              >
                {{ product.teaser }}
              </p>

              <AppButton
                text="Let's help you get started"
                theme="white"
                :outline="true"
                :target="product.target"
                :href="products[productsIndex].link"
                class="mt-4 md:hidden duration-200 ease-in-out"
                :class="productsIndex === index ? 'opacity-100 ' : 'opacity-40'"
              >
                <svg
                  slot="append"
                  viewBox="0 0 20 20"
                  fill="none"
                  class="w-5 ml-1.5 transition-transform duration-75 transform group-hover:translate-x-0.5 hidden lg:block"
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
          </div>
        </div>

        <div
          class="border-l-2 border-white self-stretch hidden md:block relative"
        >
          <div class="flex items-center absolute top-1/2 left-0">
            <div class="w-14 h-0.5 bg-white"></div>
            <div class="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        <div class="hidden md:block pl-4 lg:pl-8">
          <p class="text-white font-medium text-xl">
            {{ products[productsIndex].teaser }}
          </p>

          <AppButton
            text="Let's help you get started"
            theme="white"
            :outline="true"
            :target="products[productsIndex].target"
            :href="products[productsIndex].link"
            class="mt-16"
          >
            <svg
              slot="append"
              viewBox="0 0 20 20"
              fill="none"
              class="w-5 ml-1.5 transition-transform duration-75 transform group-hover:translate-x-0.5 hidden lg:block"
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
      </div>
    </section>

    <section class="py-20 px-6 max-w-screen-xl mx-auto">
      <div class="flex flex-col items-center pb-12">
        <h2
          class="font-semibold text-blue-900 text-2xl md:text-5xl text-center max-w-4xl mx-auto"
        >
          Unlock the Full Power of Youverify
        </h2>

        <p class="text-center max-w-5xl mx-auto mt-7">
          Acquire more customers without waiting around for traditional
          compliance systems. Youverify compliance builder simplifies your
          onboarding by combining 300+ data sources into a single workflow
          allowing you to make automated decisions with accuracy.
        </p>

        <div
          class="mt-16 shadow-lg p-1.5 rounded-xl flex bg-white border border-grey-200 w-auto text-center"
        >
          <div
            @click="showService = true"
            class="p-4 sm:px-8 rounded-xl cursor-pointer font-medium text-sm md:text-lg"
            :class="
              showService
                ? 'bg-blue text-white'
                : 'bg-transparent text-blue-900'
            "
          >
            With Youverify
          </div>
          <div
            @click="showService = false"
            class="p-4 sm:px-8 rounded-xl cursor-pointer font-medium text-sm md:text-lg"
            :class="
              !showService
                ? 'bg-blue text-white'
                : 'bg-transparent text-blue-900'
            "
          >
            Without Youverify
          </div>
        </div>
      </div>
      <div class="">
        <transition name="fade">
          <div
            class="w-full flex justify-center items-center"
            v-if="showService"
          >
            <lottie-player
              class="h-full w-full"
              src="https://assets10.lottiefiles.com/packages/lf20_vgxxp1nq.json"
              background="transparent"
              speed="0.8"
              loop
              autoplay
            ></lottie-player>
          </div>
        </transition>
        <transition name="fade">
          <div
            class="w-full flex justify-center items-center"
            v-if="!showService"
          >
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_7yi0ptca.json"
              background="transparent"
              speed="0.8"
              class="h-full w-full"
              loop
              autoplay
            ></lottie-player>
          </div>
        </transition>
      </div>
    </section>

    <section class="bg-blue-300 py-20 relative">
      <div
        class="px-6 max-w-screen-xl mx-auto flex gap-6 lg:gap-24 items-center"
      >
        <div
          class="absolute -left-40 -lg:left-8 top-1/2 transform -translate-y-1/2 h-full hidden md:block w-1/2"
        >
          <img
            v-if="selectedBenefit === 'Global Coverage'"
            class="h-full w-full"
            src="~/assets/images/illustrations/globe.svg"
            alt=""
          />
          <img
            v-if="selectedBenefit === 'Record Time Customer Success'"
            class="h-full w-full"
            src="~/assets/images/illustrations/ai.svg"
            alt=""
          />
        </div>
        <div
          class="space-y-8 md:space-y-12 lg:space-y-16 md:w-3/5 lg:w-1/2 ml-auto relative z-10"
        >
          <div
            @click="selectedBenefit = benefit.name"
            v-for="benefit in benefits"
            :key="benefit.name"
            class="cursor-pointer"
          >
            <h2
              class="text-white font-semibold text-2xl md:text-3xl"
              :class="
                selectedBenefit === benefit.name ? 'opacity-100' : 'opacity-30'
              "
            >
              {{ benefit.name }}
            </h2>
            <p
              class="text-white mt-3 md:mt-5"
              :class="
                selectedBenefit === benefit.name ? 'opacity-100' : 'opacity-30'
              "
            >
              {{ benefit.teaser }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 max-w-screen-xl mx-auto">
      <h2
        class="font-semibold text-blue-900 text-2xl md:text-5xl text-center max-w-4xl mx-auto"
      >
        Reduce Regulatory and Compliance Risk across all Your Markets
      </h2>

      <div class="mt-20 relative">
        <VueSlickCarousel
          ref="carousel"
          v-bind="settings2"
          class="px-1 flex gap-8"
        >
          <div
            v-for="useCase in useCases"
            :key="useCase.name"
            is="a"
            :href="useCase.link"
            class="sm:px-2 lg:px-4"
          >
            <div class="p-6 lg:p-9 hover:shadow-md my-2 cursor-pointer">
              <img
                :src="
                  require(`~/assets/images/icons/use-case/${useCase.icon}.svg`)
                "
                :alt="useCase.name"
              />
              <h3 class="text-xl md:text-3xl font-semibold mt-8 lg:mt-12">
                {{ useCase.name }}
              </h3>
              <p class="mt-3 text-sm md:max-w-xs min-h-28">
                {{ useCase.teaser }}
              </p>
            </div>
          </div>
        </VueSlickCarousel>
        <div
          @click="$refs.carousel.prev()"
          class="absolute -left-5 top-1/2 transform -translate-y-1/2 h-7 w-7 sm:w-11 sm:h-11 rounded-full flex justify-center items-center border-2 border-blue-300 cursor-pointer"
        >
          <svg
            fill="#115766"
            width="18px"
            height="18px"
            viewBox="0 0 5.76 5.76"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.6 4.95a0.269 0.269 0 0 1 -0.191 -0.079l-1.8 -1.8a0.27 0.27 0 0 1 0 -0.382l1.8 -1.8a0.27 0.27 0 0 1 0.382 0.382L2.182 2.88l1.609 1.609A0.27 0.27 0 0 1 3.6 4.95Z"
            />
          </svg>
        </div>

        <div
          @click="$refs.carousel.next()"
          class="absolute -right-5 top-1/2 transform -translate-y-1/2 h-7 w-7 sm:w-11 sm:h-11 rounded-full flex justify-center items-center border-2 border-blue-300 cursor-pointer"
        >
          <svg
            fill="#115766"
            width="18px"
            height="18px"
            viewBox="0 0 5.76 5.76"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.16 4.95a0.27 0.27 0 0 1 -0.191 -0.461L3.578 2.88 1.969 1.271a0.27 0.27 0 0 1 0.382 -0.382l1.8 1.8a0.27 0.27 0 0 1 0 0.382l-1.8 1.8A0.269 0.269 0 0 1 2.16 4.95Z"
            />
          </svg>
        </div>
      </div>
      <div class="text-center mt-16">
        <AppButton
          text="Talk to an expert"
          href="/company/contact-us#contact"
        />
      </div>
    </section>

    <section class="py-32 px-6 max-w-screen-xl mx-auto space-y-40">
      <div
        class="flex flex-col md:flex-row gap-16 items-center justify-between"
      >
        <div class="md:w-1/2 mt-8 md:mt-0">
          <h2 class="font-semibold text-2xl md:text-3xl">
            Transaction Monitoring to Prevent Fraud Before they Occur
          </h2>
          <p class="mt-8">
            Detecting suspicious activities or potential fraud goes beyond
            monitoring transactions. Youverify's AI-powered solution monitors
            all data of interest beyond transactions with options for
            customisations based on your industry needs. Get started with 100+
            tested rules and threshold activation conditions.
          </p>

          <AppButton
            theme="secondary"
            :outline="true"
            text="See How it Works"
            href="/product/kyt/transaction-monitoring-solution"
            class="mt-6"
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
        <div class="md:w-1/2 relative">
          <LazyImage
            :class="initial ? 'opacity-100' : 'opacity-0'"
            class="duration-500 transition-opacity ease-in"
            src="~/assets/images/screenshots/transaction-monitoring.svg"
          />
          <LazyImage
            :class="!initial ? 'opacity-100' : 'opacity-0'"
            class="absolute inset-0 duration-500 transition-opacity ease-in"
            src="~/assets/images/screenshots/transaction-monitoring-2.svg"
          />
        </div>
      </div>

      <div
        class="flex flex-col-reverse md:flex-row gap-16 items-center justify-between"
      >
        <div class="md:w-1/2 relative">
          <LazyImage
            :class="initial ? 'opacity-100' : 'opacity-0'"
            class="duration-500 transition-opacity ease-in"
            src="~/assets/images/screenshots/workflow-builder.svg"
          />
          <LazyImage
            :class="!initial ? 'opacity-100' : 'opacity-0'"
            class="absolute inset-0 duration-500 transition-opacity ease-in"
            src="~/assets/images/screenshots/workflow-builder-2.svg"
          />
        </div>
        <div class="md:w-1/2 mt-8 md:mt-0">
          <h2 class="font-semibold text-2xl md:text-3xl">
            Scale With No-Code Compliance Workflow Builder
          </h2>
          <p class="mt-8">
            Bring your specific business compliance flow to life with
            Youverify's no-code workflow builder. Custom design KYC, KYB and KYE
            processes for rapid customer onboarding without compromising
            compliance.
          </p>

          <AppButton
            theme="secondary"
            :outline="true"
            text="See How it Works"
            href="/product/workflow-builder"
            class="mt-6"
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
      </div>
    </section>
    <section class="bg-blue-300 py-20">
      <div
        class="px-6 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-14 md:gap-9 lg:gap-16"
      >
        <div class="w-full md:w-1/2">
          <Integration />
        </div>
        <div class="md:w-1/2">
          <h2
            class="text-white font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            Seamlessly Integrate Your Tech Infrastructure with the Youverify OS
          </h2>
          <p class="mt-6 text-white">
            Integrate with Youverify OS via our plug-and-play SDKs or API to
            start enjoying our services today. The process is simple and easy to
            complete with 99.9% uptime.
          </p>

          <AppButton
            class="mt-8 md:mt-14"
            theme="white"
            text="Explore our Developer Kit"
            href="/resources/developer"
          />
        </div>
      </div>
    </section>

    <section
      class="py-20 px-6 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between"
    >
      <div class="md:w-1/2 lg:w-2/5 mb-10 md:mt-0">
        <h2
          class="text-blue-900 font-semibold text-2xl md:text-4xl lg:text-5xl"
        >
          Begin Your Journey with Youverify Today
        </h2>
        <p class="mt-8 text-blue-900 leading-normal">
          See how Youverify can improve your risk management and compliance
          operations.
        </p>

        <AppButton
          text="Book demo"
          href="/company/contact-us#contact"
          class="mt-9 md:mt-16"
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
      <div class="">
        <LazyImage
          class="md:ml-auto"
          src="~/assets/images/illustrations/login-interface.svg"
        />
      </div>
    </section>

    <Testimonials />

    <section class="py-20 px-6 max-w-screen-xl mx-auto">
      <h2 class="text-2xl md:text-4xl text-blue-900 max-w-2xl">
        Keep up to date with insights and resources
      </h2>

      <div
        class="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-10 mt-14"
      >
        <BlogCard
          v-for="blog in blogs"
          :key="blog.id"
          :blog="blog"
          :short="true"
        />
      </div>

      <div class="text-center">
        <AppButton
          text="View all resources"
          href="/blogs"
          class="mt-12 md:mt-20"
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
    </section>

    <section class="py-20 px-8 max-w-screen-lg mx-auto text-center">
      <span
        class="text-blue tracking-widest px-4 py-2 uppercase sm:text-sm text-xs rounded mb-3 leading-none inline-block"
        >We Are Highly Rated In The Industry</span
      >
      <div class="flex justify-center flex-wrap gap-10 items-center mt-6">
        <div
          is="a"
          :href="review.link"
          target="_blank"
          rel="noreferrer"
          v-for="review in reviews"
          :key="review.id"
          class="h-20"
        >
          <LazyImage
            class="h-full"
            :src="review.image"
            :alt="review.platform"
          />
        </div>
      </div>
    </section>

    <section class="py-20 px-8 max-w-screen-lg mx-auto text-center">
      <span
        class="text-blue tracking-widest px-4 py-2 uppercase sm:text-sm text-xs rounded mb-3 leading-none inline-block"
        >As featured on</span
      >
      <div class="flex justify-center flex-wrap gap-10 items-center mt-6">
        <div
          is="a"
          :href="media.Link"
          target="_blank"
          rel="noreferrer"
          v-for="media in featuredMedias"
          :key="media.id"
        >
          <LazyImage width="156" height="33" :src="media.Image.url" />
        </div>
      </div>
    </section>

    <section class="bg-blue-150 py-20">
      <div
        class="px-6 max-w-screen-xl mx-auto flex gap-12 flex-col md:flex-row items-center"
      >
        <div class="md:w-1/3">
          <h3 class="text-blue-900">Optimized for security</h3>
          <p class="mt-6">
            With ISO 27001 and ISO 27018 certifications, as well as a NITDA NDPR
            assessment, the security of your data is our top priority.
          </p>
        </div>
        <div class="flex flex-wrap gap-6 justify-center items-center md:w-2/3">
          <div v-for="(logo, index) in certificationLogos" :key="index">
            <LazyImage
              :src="require(`~/assets/images/logos/security/${logo}.png`)"
              :alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import HeroSection from "~/components/common/HeroSection.vue";
import Stats from "~/components/common/Stats.vue";
import Integration from "~/components/common/Integration.vue";
import Testimonials from "~/components/common/Testimonials.vue";
import BlogCard from "~/components/resources/BlogCard.vue";
export default {
  components: { HeroSection, Stats, Integration, Testimonials, BlogCard },
  head() {
    return {
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
      showService: true,
      productsIndex: 0,
      selectedBenefit: "Global Coverage",
      initial: true,
      logos: [
        "mtn",
        "workpay",
        "fidelity",
        "chipper",
        // "lipalater",
        "sikafx",
        "mwananchi",
        "pesakit",
        "expedier",
        "leadway",
        "wema",
        "standard_chartered",
        "sterling",
        "pesapeer",
        "swapmoney",
      ],
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      },
      settings2: {
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 768,
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
      stats: [
        {
          figure: "60%+",
          name: "Reduction in Fraud Losses",
          teaser:
            "Youverify compliance solutions help customers reduce fraud losses by over 60%, positively impacting company financials.",
        },
        {
          figure: "90%+",
          name: "Reduction in Customer Onboarding Friction",
          teaser:
            "Cut down on customer onboarding duration by over 90% with Youverify's seamless compliance solutions.",
        },
        {
          figure: "50%+",
          name: "Reduction in False Positives",
          teaser:
            "Youverify clients experience more than 50% reduction in the number of false positives through customisable rules and intelligent algorithms.",
        },
        {
          figure: "60%+",
          name: "Reduction in Reporting Time",
          teaser:
            "Cut down on reporting time through comprehensive exportable data and automated actions for SAR filing.",
        },
      ],
      products: [
        {
          icon: "risk",
          name: "Risk Intelligence Solution",
          teaser:
            "AI-powered customer risk intelligence solution to help businesses consistently monitor emerging customer risks and stay one step ahead of fraud. Our patent-pending intelligent algorithm analyses data across a 4-year span and updates customer risk scores every 30 days.",
          target: "_self",
          // link: "https://forms.gle/8V9x39wv5EkahtkM9",
          link: "/product/customer-risk-assessment",
        },
        {
          icon: "transaction",
          name: "Know Your Transaction (KYT)",
          teaser:
            "Satisfy regulatory compliance and protect your business from financial losses through our adaptive real-time transaction monitoring solution. Leverage AI-generated rules, based on global fraud patterns to identify and flag potentially fraudulent transactions.",
          target: "_self",
          link: "/product/kyt/pricing",
        },
        {
          icon: "business",
          name: "Know Your Business (KYB)",
          teaser:
            "Leverage our Know Your Business solution to uncover hidden threats to your business early in the relationship. Perform registry, customers, board and ultimate beneficial owners (UBOs) screening on our robust KYB solution.",
          target: "_self",
          link: "/product/kyb/pricing",
        },
        {
          icon: "career",
          name: "Know Your Employee (KYE)",
          teaser:
            "Improve your overall employee onboarding experience through our seamless address verification system. New employees can get verified on the go and absorbed into company operations.",
          target: "_self",
          link: "/product/kye/pricing",
        },
        {
          icon: "search",
          name: "Know Your Customer (KYC)",
          teaser:
            "Our KYC service satisfies KYC compliance requirements so that you can focus on securing other important areas of your business. Identify and verify customer IDs in seconds to improve the overall customer onboarding experience.",
          target: "_self",
          link: "/product/kyc/pricing",
        },
      ],
      benefits: [
        {
          name: "Global Coverage",
          teaser:
            "Stay compliant, prevent fraud and onboard customers from anywhere in the world. Our clients span across  Europe, America, Middle East, Sub Saharan Africa and the UK.",
        },
        {
          name: "Record Time Customer Success",
          teaser:
            "Enjoy access to industry-leading customer support and training throughout the integration and consumption of our services. Receive responses to your questions in minutes and chat with a customer success representative. We provide immediate and long-term solutions to help you get ahead of subsequent problems and arising opportunities.",
        },
      ],
      useCases: [
        {
          icon: "bank",
          name: "Banks",
          teaser:
            "End-to-end compliance solution that is designed to specifically meet the needs of your organisation. Satisfy, KYC and AML compliance through our elaborate solution for the banking and finance industry.",
          link: "/solutions/use-case/banks",
        },
        {
          icon: "money",
          name: "Fintech",
          teaser:
            "Improve your customer onboarding experience by tailoring their verification requirements to their specific risk level. Authorise loans faster, and automate your entire compliance need without losing customers.",
          link: "/solutions/use-case/fintech",
        },
        {
          icon: "ethereum",
          name: "Crypto",
          teaser:
            "Mitigate the high financial crime risk associated with cryptocurrencies through quick and secure global verification solutions. Comply with regulatory requirements across various jurisdictions.",
          link: "/solutions/use-case/crypto",
        },
        {
          icon: "gig",
          name: "Gig Economy",
          teaser:
            "Use data and technology to establish the profile of all users on your platform. Perform document/address verification, biometric authentication, and other checks to quickly identify trusted customers through our robust KYE solution.",
          link: "/solutions/use-case/gig-economy",
        },
        {
          icon: "stocks",
          name: "Trading",
          teaser:
            "Manage onboarding processes, compliance, and fraud challenges on your online and traditional trading platforms with the Youverify OS where you can access identity solutions for individuals and businesses, and comply with the industry transaction reporting standards.",
          link: "/solutions/use-case/trading",
        },
        {
          icon: "spade",
          name: "Gaming and Casino",
          teaser:
            "Stay compliant with gaming and casino AML laws while onboarding new customers globally.",
          link: "/solutions/use-case/gaming-and-casino",
        },
        {
          icon: "global",
          name: "NBFI",
          teaser:
            "Improve identity trust and compliance management processes on your platform through a reliable customer authentication solution.",
          link: "/solutions/use-case/nbfi",
        },
        {
          icon: "shopping-bag",
          name: "MarketPlaces",
          teaser:
            "Onboard new Users faster with a customisable no-code drag-and-drop compliance Workflow Builder that gives you the convenience that your business requires to perform optimally and stay compliant.",
          link: "/solutions/use-case/marketplace-and-community",
        },
      ],
      featured: [],
      certificationLogos: [
        "data-protection-framework",
        "data-protection-kenya",
        "iso-iec-27001",
        "iso-iec-27018",
        "popia",
        "ndpr-audit",
        "eu-gdpr",
      ],
    };
  },
  computed: {
    ...mapGetters({
      blogs: "blogs/blogs",
    }),
    ...mapState({
      featuredMedias: (state) => state.press.featuredMedias,
      reviews: (state) => state.press.reviews,
    }),
  },
  async asyncData({ store }) {
    await Promise.all([
      store.dispatch("blogs/getBlogs", {
        currentPage: 0,
        limit: 3,
      }),
      store.dispatch("press/getFeaturedMedias"),
      store.dispatch("press/getReviews"),
    ]);
  },
  methods: {
    toggleScreenshot() {
      setInterval(() => {
        this.initial = !this.initial;
      }, 3000);
    },
  },
  mounted() {
    this.toggleScreenshot();
  },
};
</script>

<style scoped>
.hero {
  min-height: calc(100vh - 215px);
}
</style>
