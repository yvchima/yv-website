<template>
  <!-- The class below 'max-w-screen-xl mx-auto md:px-8 px-4' is also used the mobile dev to hide the footer on certain parts of his application. If you need to change the class, please inform the mobile developer. It is IMPORTANT! -->
  <div class="max-w-screen-xl mx-auto md:px-8 px-4">
    <footer-widget />

    <footer-links />

    <hr class="border-white sm:mb-0 mb-4" />

    <footer-copyright />
  </div>
</template>

<script>
import FooterCopyright from "./FooterCopyright.vue";
import FooterWidget from "./FooterWidget.vue";
import FooterLinks from "./FooterLinks.vue";

export default {
  name: "Footer",
  components: {
    FooterCopyright,
    FooterWidget,
    FooterLinks,
  },
};
</script>

<style></style>
