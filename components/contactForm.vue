<template>
  <form
    @submit.prevent="handleSubmit"
    class="w-full mt-7 md:mt-16 max-w-md mx-auto"
  >
    <div class="space-y-4 form-group w-full">
          <div
          v-if="type === 'contact'"
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
      <div>
        <div v-if="isCommonEmail" class="text-xs mt-0 text-right text-red-600">
          Please use a valid work email!
        </div>
        <input
          type="email"
          placeholder="Type your corporate email address"
          v-model="email"
          required
        />
      </div>
            <!-- <app-select-input
            v-if="type === 'partners'"
              class="text-left bg-white"
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
            </app-select-input> -->
      <!-- <app-select-input
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
          </app-select-input> -->
      <app-select-input
        class="bg-white text-left"
        placeholder="Select an Industry"
        v-model="industry"
        :options="industries"
        :required="true"
        :has-custom-list-item="true"
      >
        <template v-slot:list-item="{ option }">
          <div v-if="option" class="flex space-x-2">
            <div>{{ option }}</div>
          </div>
        </template>
      </app-select-input>
      <app-select-input
        class="bg-white text-left"
        :options="countries"
        placeholder="Country"
        v-model="country"
        :allow-search="true"
        :required="true"
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
            <div>{{ option.name }}</div>
          </div>
        </template>
      </app-select-input>
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
        v-model="firstContactPoint"
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
        >I agree to receive emails on real-time product updates, industry tips,
        news and guides</label
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
</template>

<script>
import { mapState } from "vuex";
import { commonEmails } from "~/data/emails";
export default {
  props: {
    heading: String,
    note: String,
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      company: "",
      //   solution: "",
      email: "",
      firstContactPoint: "",
      tel_code: "+1",
      mobile: null,
      partnership_type: '',
      country: "",
      industry: "",
      message: "",
      checkbox: null,
      query_type: "",
      solutions: [
        "Customer Risk Assessment",
        "KYT (Know Your Transaction)",
        "KYB (Know Your Business)",
        "KYE (Know Your Employee)",
        "KYC (Know Your Customer)",
        "Compliance Management",
        "Workflow Builder",
      ],
      industries: [
        "Commercial Bank",
        "Fintech",
        "Insurance",
        "Financial Services",
        "Information Technology & Services",
        "Transportation & Logistics",
        "Security",
        "Public Sector",
        "Telecommunication",
        "E-commerce/Marketplace",
        "Asset/Wealth Management",
        "Crypto",
        "Talent Management",
        "Gaming/Casinos",
        "Others",
      ],
      queries: ["Sales", "Support"],
      types: ["Data Partner", "Technology Partner", "SaaS/PaaS Partner"],
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
    countries() {
      return this.countriesMap
        ? Object.values(this.countriesMap).map((country) => ({
            name: country.name,
            value: country.name,
            emoji: country.emoji,
          }))
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
  async mounted() {
    try {
        await this.$store.dispatch("countries/getCountries");
    await this.$store.dispatch("zoho-crm/refreshToken");
    } catch (error) {
        console.log(error)
        this.toast.error(error.message || 'Failed to get token')
    }
    
  },
  methods: {
    async handleSubmit() {
      const formData = {
        firstName: this.first_name,
        lastName: this.last_name,
        company: this.company,
        email: this.email,
        industry: this.industry,
        country: this.country,
        firstContactPoint: this.firstContactPoint,
        phoneNumber: this.tel_code + this.mobile,
        // solution: this.solution,
        message: this.message,
        leadStatus: "New",
        leadSource: 'Website'
      };

await this.$store.dispatch("contact/submitForm", {
        ...formData,
        type: this.type,
              companyName: this.company,
              countryOfOperations: this.country,
              countryCode: this.tel_code,
              whereDidYouHear: this.firstContactPoint,
              formOn: this.$route.fullPath,
      })

      if (this.type === 'partner') {
        formData = { ...formData, partnershipType: this.partnership_type}
      }
      this.$emit("submit-form", formData);
    },
  },
};
</script>
