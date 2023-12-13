const axios = require("axios");

export default {
  ssr: true,
  head: {
    titleTemplate: "%s - Youverify",
    title: "Simple Compliance Automation for Businesses",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Simple global AML compliance automation solutions for businesses to ease Know your customer (KYC), transaction monitoring, business verification and overall customer onboarding process.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon-32x32.png" }],
    script: [
      {
        charset: "utf-8",
        defer: true,
        src: "https://d3js.org/d3.v5.min.js",
      },
      {
        defer: true,
        src: "https://d3js.org/d3-queue.v3.min.js",
      },
      {
        defer: true,
        src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
      },
      {
        src: "https://cdn.jsdelivr.net/npm/typewriter-effect/dist/core.min.js"
      }
    ],
  },

  generate: {
    // routes: async () => {
    //   let { data: industriesData } = await axios.get(
    //     `https://cms.dev.youverify.co/industries`
    //   );
    //   const industriesArray = industriesData.map((v) => `/use-case/${v.slug}`);

    //   let { data: blogData } = await axios.get(
    //     `https://cms.dev.youverify.co/blogs`
    //   );
    //   const blogArray = blogData.map((v) => `/blog/${v.slug}`);

    //   let { data: reportData } = await axios.get(
    //     `https://cms.dev.youverify.co/reports`
    //   );
    //   const reportsArray = reportData.map((v) => `/industry/reports/${v.slug}`);

    //   let { data: guidesData } = await axios.get(
    //     `https://cms.dev.youverify.co/compliance-guides`
    //   );
    //   const guidesArray = guidesData.map((v) => `/compliance-guides?slug=${v.slug}`);

    //   return [...industriesArray, ...blogArray, ...reportsArray, ...guidesArray];
    // },
  },

  loading: { color: "#0F808C", height: "3px" },

  css: ['~/assets/css/tailwind', '~/assets/css/main', 'vue-slick-carousel/dist/vue-slick-carousel.css'],

  env: {
    baseUrl: "https://cms.dev.youverify.co" || "http://localhost:1337",
    userServiceApiBaseUrl: "https://user.dev.svc.youverify.co",
    zohoCRMAuthService: 'https://zauth.svc.youverify.co/v1',
    zohoCRMRecordsAPI: 'https://www.zohoapis.com/crm/v5/',
  },

  plugins: [
    "@plugins/filters.js",
    "@plugins/vue-placeholders.js",
    "@/plugins/vue-lazysizes.client.js",
    "@/plugins/reuseable-component.js",
    "@/plugins/vue-slick-carousel.js",
  ],


  buildModules: ["@nuxtjs/tailwindcss"],
  serverMiddleware: ["~/api/index"],

  modules: [
    // '@nuxtjs/toast',
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "vue-social-sharing/nuxt",
    'cookie-universal-nuxt',
  ],

  sitemap: {
    hostname: "https://youverify.co",
    // routes: async () => {
    //   let { data: industriesData } = await axios.get(
    //     `https://cms.dev.youverify.co/industries`
    //   );
    //   const industriesArray = industriesData.map((v) => `/use-case/${v.slug}`);

    //   let { data: blogData } = await axios.get(
    //     `https://cms.dev.youverify.co/blogs`
    //   );
    //   const blogArray = blogData.map((v) => `/blog/${v.slug}`);

    //   let { data: reportData } = await axios.get(
    //     `https://cms.dev.youverify.co/reports`
    //   );
    //   const reportsArray = reportData.map((v) => `/industry/reports/${v.slug}`);

    //   let { data: guidesData } = await axios.get(
    //     `https://cms.dev.youverify.co/compliance-guides`
    //   );
    //   const guidesArray = guidesData.map((v) => `/compliance-guides?slug=${v.slug}`);

    //   return [...industriesArray, ...blogArray, ...reportsArray, ...guidesArray];
    // },
  },

  robots: {
    UserAgent: "*",
    Disallow: "",
    Allow: "/",
    Sitemap: "https://youverify.co/sitemap.xml",
  },

  build: {
    extend(config, { isClient, isDev, loaders: { vue } }) {
      vue.transformAssetUrls.LazyImage = ["src"];
    },
  },
  
  // toast: {
  //   position: 'top-right',
  //   duration: 7000,
  //   keepOnHover: true,
  //   className: 'my-toast',
  //         fullWidth: false,
  // },
};