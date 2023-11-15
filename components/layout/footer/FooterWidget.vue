<template>
  <section>
    <div
      class="mb-20 rounded-xl lg:h-40 flex justify-center items-center duration-150 ease-in-out"
      :class="message ? 'bg-white' : 'bg-blue'"
    >
      <div
        class="lg:flex w-full justify-between items-center py-5 xl:py-0 px-5 lg:px-10 xl:px-20"
      >
        <h2
          class="text-2xl lg:w-1/2 duration-150 ease-in-out"
          :class="message ? 'text-blue' : 'text-white'"
        >
          Subscribe to our newsletter
        </h2>
        <div
          v-if="message"
          :class="status === 'success' ? 'bg-green-400' : 'bg-red-500'"
          class="text-white text-sm font-semibold py-5 px-7 rounded-xl flex items-center gap-2.5"
        >
          {{ message }}
          <img
            :src="require(`~/assets/images/icons/subscription-${status}.svg`)"
            alt=""
          />
        </div>
        <div v-else class="sm:w-full lg:w-1/2">
          <form
            @submit.prevent="subscribe"
            class="mt-10 md:mt-5 lg:mt-0 md:flex gap-4"
          >
            <div
              class="w-full flex gap-4 px-4 sm:px-6 py-2.5 font-semibold rounded-lg outline-none border border-white text-blue-900 bg-blue-150"
            >
              <img
                src="~/assets/images/icons/email.svg"
                class="w-4 md:w-7"
                alt=""
              />
              <input
                class="focus:outline-none bg-transparent w-full"
                placeholder="Enter your email"
                type="email"
                v-model="email"
                required
              />
            </div>

            <AppButton
              :disabled="!checkbox"
              text="Subscribe"
              size="sm"
              theme="white"
              class="mt-2 md:mt-0"
              :class="!checkbox ? 'cursor-not-allowed' : ''"
            />
          </form>
          <div class="flex items-center mt-3.5 md:mt-1.5 gap-2 cursor-pointer">
            <input type="checkbox" id="checkbox" v-model="checkbox" />
            <label
              for="checkbox"
              class="text-white leading-none"
              style="font-size: 9px"
              >I agree to receive emails on real-time product updates, industry
              tips, news and guides</label
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      checkbox: null,
      message: null,
      status: null,
    };
  },
  methods: {
    async subscribe() {
      this.status = null;
      this.message = null;
      try {
        const response = await this.$axios.$post(
          `${process.env.baseUrl}/newsletter-emails`,
          {
            Email: this.email,
          }
        );
        this.message = "You are now on the list";
        this.status = "success";
        this.checkbox = null;
      } catch (error) {
        if (
          error.response.data.message === "This email address already exists!"
        ) {
          this.message = "This email is already in our subscription list.";
          this.status = "error";
        }
      }
    },
  },
};
</script>

<style></style>
