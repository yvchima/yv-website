<template>
  <div class="relative app min-h-screen flex flex-col">
    <div class="fixed z-40 w-full">
      <RegTechHeader />
      <!-- <Header /> -->
      <AppHeader />
    </div>
    <div class="flex-grow">
      <Nuxt />
    </div>
    <footer class="bg-blue-300 pt-20">
      <Footer />
    </footer>
    <CookiesBanner class="fixed bottom-2 inset-x-2 z-100" />
  </div>
</template>

<script>
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header.vue";
import AppHeader from "~/components/layout/AppHeader.vue";
import RegTechHeader from "~/components/layout/RegTechHeader.vue";
import CookiesBanner from "~/components/layout/CookiesBanner.vue";
export default {
  name: "youverify",
  components: {
    Footer,
    Header,
    AppHeader,
    RegTechHeader,
    CookiesBanner,
  },
  mounted() {
    !(function (e, a, t, n, c, s, d) {
      e.ntag ||
        ((c = e.ntag =
          function () {
            c.callMethod
              ? c.callMethod.apply(c, arguments)
              : c.queue.push(arguments);
          }),
        e.ntag || (e.ntag = c),
        (c.push = c),
        (c.loaded = !0),
        (c.version = "1.0"),
        (c.queue = []),
        ((s = a.createElement(t)).async = !0),
        (s.src = n),
        (d = a.getElementsByTagName(t)[0]).parentNode.insertBefore(s, d));
    })(
      window,
      document,
      "script",
      "https://www.nivaai.com/ntag.js?id=9b430bff-265b-4a6b-9e7c-86eba619c6bf"
    );
    ntag("config", "9b430bff-265b-4a6b-9e7c-86eba619c6bf");
  },
};
</script>
