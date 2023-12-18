<template>
  <section class="py-20 bg-blue-100">
    <div v-if="submitted">
      <div class="text-center py-16">
        <img class="mx-auto" src="~/assets/images/icons/completed.svg" alt="" />
        <h3 class="font-semibold text-4xl mt-10">Thank you</h3>
        <p class="mt-8 font-medium">
          Our customer support expert will contact you shortly.
        </p>
      </div>
    </div>
    <div v-else class="px-8 max-w-5xl mx-auto text-center">
      <h2 class="text-xl md:text-3xl font-semibold">{{ heading }}</h2>
      <p class="text-xl font-medium mt-12">
        {{ note }}
      </p>
      <contact-form type='support' @submit-form='submitForm' />
    </div>
  </section>
</template>

<script>
import contactForm from "@/components/contactForm.vue";

export default {
  components: { contactForm },
  props: {
    heading: String,
    note: String,
  },
  data() {
    return {
      submitted: false,
    };
  },
  methods: {
    async submitForm(data) {
      try {
        await this.$store.dispatch("zoho-crm/createLeads", {...data });
        this.submitted = true;
        window.dataLayer.push({
          event: "demoFormSubmitted",
        });
        if (this.checkbox) {
          // subscribe to newsletter
          await this.$axios.$post(`${process.env.baseUrl}/newsletter-emails`, {
            Email: this.email,
          });
        }
      } catch (e) {
        this.toast.error('Failed to submit form, please try again')
      }
    },
  },
};
</script>
