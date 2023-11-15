<template>
  <section class="py-20">
    <div v-if="submitted">
      <div class="text-center">
        <img class="mx-auto" src="~/assets/images/icons/completed.svg" alt="" />
        <h3 class="font-semibold text-4xl mt-10">Thank you</h3>
        <p class="mt-8 font-medium">
          <!-- {{ faq ? "Our customer support expert" : "One of our sales expert" }} -->
          {{
            (query_type === "Sales" &&
              "One of our sales expert will contact you shortly.") ||
            (query_type === "Support" &&
              "Our customer support expert will contact you shortly.") ||
            (query_type === "Press and Media" &&
              "Someone from the marketing team will contact you shortly.") ||
            (query_type === "Partnership" &&
              "Someone from the product team will contact you shortly.")
          }}
        </p>
      </div>
    </div>

    <div v-else class="flex flex-col md:flex-row gap-16 lg:gap-32">
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-2xl md:text-4xl">{{ title }}</h1>
        <p class="mt-3 md:mt-6 md:text-lg">
          {{ note }}
        </p>
      </div>

      <form @submit.prevent="submitForm" class="w-full md:w-1/2">
        <div class="form-group space-y-5 w-full">
          <div
            class="pr-4 border border-grey focus-within:border-blue bg-white rounded"
          >
            <select v-model="query_type" required class="border-none">
              <option hidden selected disabled value="">Type of query</option>
              <option v-for="query in queries" :key="query">
                {{ query }}
              </option>
            </select>
          </div>
          <div class="flex gap-4">
            <input
              type="text"
              v-model="first_name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              v-model="last_name"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <div
              v-if="isCommonEmail"
              class="text-xs mt-0 text-right text-red-600"
            >
              Please use a valid work email!
            </div>
            <input type="email" v-model="email" placeholder="Email" required />
          </div>
          <input type="text" v-model="company" placeholder="Company" required />
          <!-- <div
            v-if="query_type === 'Sales'"
            class="pr-4 border border-grey focus-within:border-blue bg-white rounded"
          >
            <select v-model="industry" required class="border-none">
              <option hidden selected disabled value="">Industry</option>
              <option v-for="section in industries" :key="section">
                {{ section }}
              </option>
            </select>
          </div> -->
          <app-select-input
            placeholder="Select Industry"
            v-model="industry"
            :options="industries"
            :has-custom-list-item="true"
            ><template v-slot:list-item="{ option }">
              <div v-if="option" class="flex space-x-2">
                <div>{{ option }}</div>
              </div>
            </template>
          </app-select-input>
          <app-select-input
            v-if="query_type === 'Sales'"
            placeholder="Select Country"
            v-model="country"
            :allow-search="true"
            :options="countries"
            :has-custom-selected-view="true"
            :has-custom-list-item="true"
            ><template v-slot:selected-view="{ item }">
              <div v-if="item" class="flex items-center space-x-1">
                <div>{{ item.name }}</div>
              </div> </template
            ><template v-slot:list-item="{ option }">
              <div v-if="option" class="flex space-x-2">
                <div>{{ option.emoji }}</div>
                <div>{{ option.name }}</div>
              </div>
            </template>
          </app-select-input>
          <!-- <input type="tel" v-model="phone_number" placeholder="Phone Number" /> -->
          <div class="flex space-x-1">
            <app-select-input
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
              placeholder="Enter Phone Number"
              class="flex-1"
            />
          </div>

          <!-- <div
            v-if="query_type === 'Partnership'"
            class="pr-4 border border-grey focus-within:border-blue bg-white rounded"
          >
            <select v-model="partnership_type" required class="border-none">
              <option hidden selected disabled value="">
                Partnership Type
              </option>
              <option v-for="t in types" :key="t">
                {{ t }}
              </option>
            </select>
          </div> -->

          <app-select-input
            v-if="query_type === 'Partnership'"
            placeholder="Select Partnership Type"
            v-model="partnership_type"
            :options="types"
            :has-custom-list-item="true"
            required
          >
            <template v-slot:list-item="{ option }">
              <div v-if="option" class="flex space-x-2">
                <div>{{ option }}</div>
              </div>
            </template>
          </app-select-input>
          <input
            type="text"
            v-model="whereDidYouHear"
            placeholder="Where did you hear about us?"
            required
          />
          <textarea
            placeholder="Let us know how we may be of help"
            v-model="message"
            rows="8"
            minlength="60"
            required
          ></textarea>
        </div>

        <div class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="check" v-model="checkbox" class="w-4" />
          <label for="check" class="text-grey" style="font-size: 10px"
            >I want to sign up for blog updates and other communications</label
          >
        </div>
        <AppButton
          text="Submit"
          class="w-full mt-12"
          :disabled="isCommonEmail"
        />
        <p class="text-xs mt-3">
          By clicking the button you agree with our
          <a
            href="/privacy-policy"
            class="text-blue cursor-pointer font-semibold"
          >
            Privacy Policy</a
          >
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { commonEmails } from "~/data/emails";
export default {
  props: {
    title: {
      required: true,
    },
    note: {
      required: true,
    },
  },
  data() {
    return {
      query_type: "",
      first_name: "",
      last_name: "",
      email: "",
      company: "",
      industry: "",
      country: "United States",
      tel_code: "+1",
      mobile: null,
      partnership_type: "",
      whereDidYouHear: "",
      message: "",
      checkbox: null,
      submitted: false,
      queries: ["Sales", "Support"],
      industries: [
        "Banking",
        "Fintech",
        "Telecommunications",
        "Ecommerce/Marketplace",
        "Asset/Wealth Management",
        "Insurance",
        "Transportation/Logistics",
        "Crypto",
        "Talent Management",
        "Gaming/Casinos",
        "Information Technology",
        "Others",
      ],
      types: ["Data Partner", "Technology Partner", "SaaS/PaaS Partner"],
    };
  },
  computed: {
    ...mapState({
      countriesMap: (state) => state.countries.countries,
    }),
    countries() {
      return this.countriesMap
        ? Object.keys(this.countriesMap).map((key) => {
            const country = this.countriesMap[key];
            return {
              name: country.name,
              value: country.name,
              emoji: country.emoji,
            };
          })
        : [];
    },
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
        switch (this.query_type) {
          case "Sales":
            await this.$store.dispatch("contact/submitForm", {
              queryType: this.query_type,
              firstName: this.first_name,
              lastName: this.last_name,
              companyName: this.company,
              email: this.email,
              industry: this.industry,
              countryOfOperations: this.country,
              countryCode: this.tel_code,
              phoneNumber: this.mobile,
              whereDidYouHear: this.whereDidYouHear,
              message: this.message,
              formOn: this.$route.fullPath,
              type: "sales",
            });
            this.submitted = true;
            break;

          case "Support":
            await this.$store.dispatch("contact/submitForm", {
              queryType: this.query_type,
              firstName: this.first_name,
              lastName: this.last_name,
              companyName: this.company,
              // countryOfOperations: this.country,
              email: this.email,
              countryCode: this.tel_code,
              phoneNumber: this.mobile,
              whereDidYouHear: this.whereDidYouHear,
              message: this.message,
              formOn: this.$route.fullPath,
              type: "support",
            });
            this.submitted = true;
            break;

          case "Press and Media":
            await this.$store.dispatch("contact/submitForm", {
              queryType: this.query_type,
              firstName: this.first_name,
              lastName: this.last_name,
              companyName: this.company,
              email: this.email,
              countryCode: this.tel_code,
              phoneNumber: this.mobile,
              whereDidYouHear: this.whereDidYouHear,
              message: this.message,
              formOn: this.$route.fullPath,
              type: "marketing",
            });
            this.submitted = true;
            break;

          case "Partnership":
            await this.$store.dispatch("contact/submitForm", {
              queryType: this.query_type,
              firstName: this.first_name,
              lastName: this.last_name,
              companyName: this.company,
              email: this.email,
              partnershipType: this.partnership_type,
              countryCode: this.tel_code,
              phoneNumber: this.mobile,
              whereDidYouHear: this.whereDidYouHear,
              message: this.message,
              formOn: this.$route.fullPath,
              type: "product",
            });
            this.submitted = true;
            break;
        }
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
