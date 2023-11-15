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
      <form
        @submit.prevent="submitForm"
        class="w-full mt-7 md:mt-16 max-w-md mx-auto"
      >
        <div class="space-y-4 form-group w-full">
          <div class="flex gap-4">
            <input
              type="text"
              placeholder="First name"
              v-model="first_name"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              v-model="last_name"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Company name"
            v-model="company"
            required
          />
          <!-- <div
            class="pr-4 border border-grey focus-within:border-blue bg-white rounded"
          >
            <select v-model="solution" required class="border-none">
              <option hidden selected disabled value="">Solution</option>
              <option v-for="product in solutions" :key="product">
                {{ product }}
              </option>
            </select>
          </div> -->
          <app-select-input
            class="bg-white text-left"
            placeholder="Select Solution"
            v-model="solution"
            :options="solutions"
            :has-custom-list-item="true"
          >
            <template v-slot:list-item="{ option }">
              <div v-if="option" class="flex space-x-2">
                <div>{{ option }}</div>
              </div>
            </template>
          </app-select-input>
          <div>
            <div
              v-if="isCommonEmail"
              class="text-xs mt-0 text-right text-red-600"
            >
              Please use a valid work email!
            </div>
            <input
              type="email"
              placeholder="Type your corporate email address"
              v-model="email"
              required
            />
          </div>
          <!-- <input type="tel" placeholder="Phone number" v-model="phone_number" /> -->
          <div class="flex space-x-1">
            <app-select-input
              class="bg-white"
              :options="countryCodes"
              v-model="tel_code"
              :allow-search="true"
              :has-custom-selected-view="true"
              :has-custom-list-item="true"
            >
              <template v-slot:selected-view="{ item }">
                <div v-if="item" class="flex items-center space-x-1">
                  <div>{{ item.emoji }}</div>
                  <div>{{ item.name }}</div>
                </div>
              </template>
              <template v-slot:list-item="{ option }">
                <div v-if="option" class="flex space-x-2">
                  <div>{{ option.emoji }}</div>
                  <div>{{ option.listName }}</div>
                </div>
              </template>
            </app-select-input>
            <input
              type="digit"
              required
              v-model="mobile"
              placeholder="Phone Number"
              class="flex-1"
            />
          </div>
          <input
            type="text"
            v-model="whereDidYouHear"
            placeholder="Where did you hear about us?"
            required
          />
          <textarea
            placeholder="Type your message here"
            v-model="message"
            rows="8"
            minlength="60"
            required
          ></textarea>
        </div>
        <div class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="check" v-model="checkbox" class="w-4" />
          <label for="check" class="text-grey" style="font-size: 10px"
            >I agree to receive emails on real-time product updates, industry
            tips, news and guides</label
          >
        </div>
        <AppButton
          text="Get a free demo"
          class="w-full mt-14"
          :disabled="isCommonEmail"
        />
        <p class="text-xs text-left mt-3">
          By clicking the button you agree with our
          <a
            href="/privacy-policy"
            class="text-blue cursor-pointer font-semibold underline"
          >
            Privacy Policy</a
          >
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { commonEmails } from "~/data/emails";
export default {
  props: {
    heading: String,
    note: String,
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      company: "",
      solution: "",
      email: "",
      whereDidYouHear: "",
      tel_code: "+1",
      mobile: null,
      message: "",
      checkbox: null,
      submitted: false,
      solutions: [
        "Customer Risk Assessment",
        "KYT (Know Your Transaction)",
        "KYB (Know Your Business)",
        "KYE (Know Your Employee)",
        "KYC (Know Your Customer)",
        "Compliance Management",
        "Workflow Builder",
      ],
    };
  },
  computed: {
    ...mapState({
      countriesMap: (state) => state.countries.countries,
    }),
    countryCodes() {
      return this.countriesMap
        ? Object.keys(this.countriesMap).map((key) => {
            const country = this.countriesMap[key];
            return {
              emoji: country.emoji,
              name: "+" + country.phone,
              value: "+" + country.phone,
              listName: country.name,
            };
          })
        : [];
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
    async submitForm() {
      try {
        await this.$store.dispatch("contact/submitForm", {
          firstName: this.first_name,
          lastName: this.last_name,
          companyName: this.company,
          solution: this.solution,
          email: this.email,
          whereDidYouHear: this.whereDidYouHear,
          countryCode: this.tel_code,
          phoneNumber: this.mobile,
          message: this.message,
          formOn: this.$route.fullPath,
          type: "support",
        });
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
      } catch (e) {}
    },
  },
  async created() {
    await this.$store.dispatch("countries/getCountries");
  },
};
</script>
