<template>
  <div class="pt-20">
    <div v-if="submitted" class="px-6 max-w-screen-xl mx-auto mt-36 py-12">
      <div class="text-center py-16 shadow-lg">
        <img class="mx-auto" src="~/assets/images/icons/completed.svg" alt="" />
        <h3 class="font-semibold text-4xl mt-10">Thank you</h3>
        <p class="mt-8 font-medium">
          One of our sales expert will contact you shortly.
        </p>
      </div>
    </div>
    <div v-else>
      <section
        class="mt-28 pt-16 px-8 max-w-3xl mx-auto flex flex-col items-center"
      >
        <div
          style="background-color: #c2e2e9"
          class="py-2 px-4 text-sm font-semibold mb-10 text-blue rounded"
        >
          KYC Pricing
        </div>
        <h1
          class="md:text-5xl text-2xl font-semibold text-center text-blue-300"
        >
          Flexible pricing structure with no upfront cost.
        </h1>

        <!-- <div class="mt-9 shadow-lg p-1.5 rounded-xl flex bg-white">
        <div
          @click="period = p"
          v-for="p in periods"
          :key="p"
          class="py-3 px-12 rounded-xl cursor-pointer font-medium text-lg"
          :class="
            p === period ? 'bg-blue text-white' : 'bg-transparent text-blue-900'
          "
        >
          {{ p }}
        </div>
      </div> -->

        <p class="mt-12 font-medium text-2xl text-center">
          How many customers do you onboard monthly?
        </p>
      </section>
      <div class="px-6 max-w-screen-xl mx-auto py-24">
        <div class="relative cursor-pointer">
          <input
            type="range"
            min="0"
            max="100"
            step="33.33"
            v-model="value"
            class="styled-slider slider-progress w-full relative z-10 pt-5 pb-16 cursor-pointer bg-transparent"
            ref="rangeInput"
          />
          <!-- <span
            :style="`left: ${percentage}%`"
            class="absolute top-12 transform -translate-x-1/2 font-semibold text-white text-xl bg-blue-300 px-6 py-2.5 rounded-xl"
            >{{ value }}</span
          > -->

          <div class="flex justify-between items-center w-full absolute bottom-2">
            <span
              @click="jumpToValue(index)"
              v-for="(figure, index) in range"
              :key="figure"
              class="font-semibold text-blue-300 text-xl cursor-pointer"
              >{{ figure }}</span
            >
          </div>
        </div>
      </div>

      <Categories
        :value="value"
        :pricings="pricings"
        @formSubmitted="submitted = true"
      />

      <Faqs :faqs="faqs" />
    </div>
  </div>
</template>

<script>
import { kyc_pricing } from "~/data/pricing";
import Categories from "~/components/pricing/Categories.vue";
import Faqs from "~/components/products/faqs.vue";
export default {
  components: { Categories, Faqs },
  data() {
    return {
      pricings: kyc_pricing,
      // period: "Monthly",
      // periods: ["Monthly", "Yearly"],
      range: ["200", "500", "1000", "1000+"],
      submitted: false,
      value: 33.33,
      faqs: [
        {
          question: "Are there any Charges for Setup?",
          answer:
            "No, setting up and integrating with our tech infrastructure is totally free.",
        },
        {
          question: "I Cannot Find all my Needs in one Plan, What do I do?",
          answer:
            "Opt for the custom plan as this will help you customize your request. We will then tailor a solution that specifically meets your needs.",
        },
        {
          question: "Can I Opt for Addons After Subscribing to a Plan?",
          answer:
            "Yes, you can opt for extra solutions after subscribing to a plan. However, this will attract extra costs per month that will be billed separately. Note that some solutions are not available in certain plans and you will have to upgrade to a higher plan to enjoy them.",
        },
        {
          question:
            "What Happens if I do not meet the Minimum Number of Verification for my Plan?",
          answer:
            "The cost of a plan only applies once you hit the minimum number of verifications for that plan. Otherwise, you will be advised to subscribe to a lower plan.",
        },
      ],
    };
  },
  computed: {
    // percentage() {
    //   return (this.value / 1200) * 100;
    // },
  },
  methods: {
    jumpToValue(index) {
      switch (index) {
        case 0:
          this.value = 0;
          return;
        case 1:
          this.value = 33.33;
          return;
        case 2:
          this.value = 66.66;
          return;
        case 3:
          this.value = 99.99;
          return;
      }
    },
  },
  mounted() {
    for (let e of document.querySelectorAll(
      'input[type="range"].slider-progress'
    )) {
      e.style.setProperty("--value", e.value);
      e.style.setProperty("--min", e.min == "" ? "0" : e.min);
      e.style.setProperty("--max", e.max == "" ? "100" : e.max);
      e.addEventListener("input", () =>
        e.style.setProperty("--value", e.value)
      );
    }
  },
};
</script>

<style scoped>
input[type="range"].styled-slider {
  height: 10px;
  -webkit-appearance: none;
}

/*progress support*/
input[type="range"].styled-slider.slider-progress {
  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--value) - var(--min)) / var(--range));
  --sx: calc(0.5 * 40px + var(--ratio) * (100% - 40px));
}

input[type="range"].styled-slider:focus {
  outline: none;
}

/*webkit*/
input[type="range"].styled-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #46b2c8;
  border: 9px solid #ffffff;
  box-shadow: 0 6px 12px #0000001a;
  margin-top: calc(10px * 0.5 - max(40px * 0.5, 9px));
}

input[type="range"].styled-slider::-webkit-slider-runnable-track {
  height: 10px;
  border: none;
  border-radius: 7px;
  background: #d9d9d9;
  box-shadow: none;
}

input[type="range"].styled-slider.slider-progress::-webkit-slider-runnable-track {
  background: linear-gradient(#46b2c8, #46b2c8) 0 / var(--sx) 100% no-repeat,
    #d9d9d9;
}

/*mozilla*/
input[type="range"].styled-slider::-moz-range-thumb {
  width: max(calc(40px - 9px - 9px), 0px);
  height: max(calc(40px - 9px - 9px), 0px);
  border-radius: 50%;
  background: #46b2c8;
  border: 9px solid #ffffff;
  box-shadow: 0 6px 12px #0000001a;
}

input[type="range"].styled-slider::-moz-range-track {
  height: 10px;
  border: none;
  border-radius: 7px;
  background: #d9d9d9;
  box-shadow: none;
}

input[type="range"].styled-slider.slider-progress::-moz-range-track {
  background: linear-gradient(#46b2c8, #46b2c8) 0 / var(--sx) 100% no-repeat,
    #d9d9d9;
}

/*ms*/
input[type="range"].styled-slider::-ms-fill-upper {
  background: transparent;
  border-color: transparent;
}

input[type="range"].styled-slider::-ms-fill-lower {
  background: transparent;
  border-color: transparent;
}

input[type="range"].styled-slider::-ms-thumb {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #46b2c8;
  border: 9px solid #ffffff;
  box-shadow: 0 6px 12px #0000001a;
  margin-top: 0;
  box-sizing: border-box;
}

input[type="range"].styled-slider::-ms-track {
  height: 10px;
  border-radius: 7px;
  background: #d9d9d9;
  border: none;
  box-shadow: none;
  box-sizing: border-box;
}

input[type="range"].styled-slider.slider-progress::-ms-fill-lower {
  height: 10px;
  border-radius: 7px 0 0 7px;
  margin: -undefined 0 -undefined -undefined;
  background: #46b2c8;
  border: none;
  border-right-width: 0;
}
</style>
