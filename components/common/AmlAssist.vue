<template>
  <div
    class="flex flex-col md:flex-row items-center gap-16 max-w-screen-xl mx-auto px-6 py-32"
  >
    <div class="md:w-3/5">
      <h3 class="text-blue-300 font-semibold text-4xl">
        How can Youverify Assist?
      </h3>
      <p class="mt-5">
        Youverify offers simple compliance solutions that help you classify
        customers by risk level, monitor and identify suspicious transactions,
        and verify customer identity in seconds. <br />
        Using our PEP and sanction list search, you can verify politically
        exposed or high-risk individuals against various official blacklists,
        including sanctions, regulatory, law enforcement, and other relevant
        databases all over the world. <br />
        Leverage our AI powered risk classification to identify potentially
        risky customers before they do harm, download individual or bulk reports
        for further analysis, and use our suspicious transaction reporting
        solution to report risky transactions in real time. 
      </p>

      <p class="text-blue-300 my-4 font-medium">Need more information?</p>
      <app-button class="" text="Request a demo" to="/company/contact-us" />
    </div>
    <div class="md:w-2/5">
      <LazyImage src="~/assets/images/illustrations/youverify-support.svg" />
    </div>
  </div>
</template>
