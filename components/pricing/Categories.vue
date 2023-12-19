<template>
  <section class="px-6 max-w-screen-xl mx-auto">
    <div v-if="modifiedValue < 99">
      <div
        class="py-14 hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
      >
        <div
          v-for="(pricing, index) in pricings"
          :key="index"
          class="rounded-3xl border border-blue pt-10 md:pt-12 pb-6 px-5 duration-500 ease-linear relative"
          :class="[indexValue === index ? 'bg-blue-300' : 'bg-white']"
        >
          <span
            v-show="indexValue === index"
            style="z-index: -1"
            class="absolute inset-x-0 -top-11 bg-blue-150 pt-2.5 pb-6 text-blue text-center rounded-t-3xl text-base"
          >
            Recommended
          </span>
          <div
            v-if="multiple && index === 0"
            class="shadow-lg px-2 py-1.5 rounded-xl flex bg-gray-100 -mt-5"
          >
            <div
              @click="
                plan = p;
                $emit('planSelected', i);
              "
              v-for="(p, i) in plans"
              :key="p"
              class="py-3.5 px-6 xl:px-9 rounded-xl cursor-pointer font-semibold text-base flex-1"
              :class="
                p === plan
                  ? 'bg-white text-blue-300 shadow-lg'
                  : 'bg-transparent text-grey'
              "
            >
              {{ p }}
            </div>
          </div>
          <h2
            v-else
            class="text-3xl font-semibold duration-300 ease-in-out"
            :class="indexValue === index ? 'text-white' : 'text-blue-300'"
          >
            {{ pricing.name }}
          </h2>
          <p
            class="text-sm mt-5 h-20 duration-300 ease-in-out pr-5"
            :class="[indexValue === index ? 'text-white' : 'text-grey']"
          >
            <!-- { 'lg:pr-14 lg:mr-0.5': index === 0 || index === 3 }, -->
            {{ pricing.teaser }}
            <AppTooltip
              position="top"
              :backgroundColor="indexValue === index ? 'white' : 'blue-300'"
            >
              <div
                slot="trigger"
                class="w-3 h-3 rounded-full flex items-center justify-center relative"
                :class="indexValue === index ? 'bg-white' : 'bg-blue'"
              >
                <svg
                  width="9px"
                  height="9px"
                  viewBox="0 0 0.27 0.27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.137 0.073C0.137 0.082 0.13 0.09 0.12 0.09C0.111 0.09 0.103 0.082 0.103 0.073C0.103 0.064 0.111 0.056 0.12 0.056C0.13 0.056 0.137 0.064 0.137 0.073Z"
                    :fill="indexValue === index ? 'black' : 'white'"
                  />
                  <path
                    d="M0.135 0.211L0.135 0.121L0.101 0.121"
                    :stroke="indexValue === index ? 'black' : 'white'"
                    stroke-width="0.0225"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.135 0.211H0.158"
                    :stroke="indexValue === index ? 'black' : 'white'"
                    stroke-width="0.0225"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span
                style="font-size: 10px"
                :class="indexValue === index ? 'text-blue-900' : 'text-white'"
                >{{ pricing.tool_tip }}</span
              >
            </AppTooltip>
          </p>
          <!-- <h3
          class="font-semibold text-3xl mt-4 duration-300 ease-in-out"
          :class="indexValue === index ? 'text-white' : 'text-blue-900'"
        >
          {{ pricing[period].price }}
        </h3>
        <span
          style="min-height: 60px"
          class="text-sm font-semibold mt-6 duration-300 ease-in-out"
          :class="indexValue === index ? 'text-white' : 'text-blue'"
        >
          {{ pricing[period].max }}</span
        > -->
          <!-- <p
          style="font-size: 10px"
          class="duration-300 ease-in-out"
          :class="indexValue === index ? 'text-white' : ''"
        >
          {{ pricing[period].total }}
        </p>
        <span
          class="font-semibold mt-2 duration-300 ease-in-out"
          :class="indexValue === index ? 'text-white' : 'text-blue'"
          >{{ pricing.member }}</span
        > -->
          <AppButton
            id="pricing-cta"
            @click="buttonclicked(index, pricing)"
            :text="pricing.ctaText"
            :theme="indexValue === index ? 'white' : 'secondary'"
            :outline="indexValue !== index"
            rounded="lg"
            fontWeight="semibold"
            size="sm"
            :href="pricing.ctaLink"
            class="mt-9"
          />

          <div
            class="mt-12 self-start space-y-3"
            :class="index === 0 ? 'pt-2' : ''"
          >
            <span
              v-if="index !== 0"
              class="font-bold"
              style="font-size: 13px"
              :class="indexValue === index ? 'text-white' : 'text-grey'"
              >All features in {{ pricings[index - 1].name }} +</span
            >
            <div
              v-for="feature in pricing.features"
              :key="feature.name"
              class="flex items-center gap-2"
              :class="indexValue === index ? 'text-white' : 'text-grey'"
            >
              <svg
                width="12px"
                height="12px"
                viewBox="0 0 12 12"
                :fill="indexValue === index ? 'currentColor' : '#81DD6A'"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.018 7.739A1.988 1.988 0 0 0 2 8c0 1.189 1.069 2.142 2.26 1.982C4.607 10.599 5.267 11 6 11s1.393 -0.401 1.74 -1.018C8.928 10.142 10 9.189 10 8c0 -0.086 -0.006 -0.173 -0.018 -0.261C10.599 7.393 11 6.732 11 6s-0.401 -1.393 -1.018 -1.74C9.994 4.173 10 4.087 10 4c0 -1.189 -1.071 -2.144 -2.26 -1.982C7.393 1.401 6.733 1 6 1s-1.393 0.401 -1.74 1.018C3.069 1.856 2 2.811 2 4c0 0.086 0.006 0.173 0.018 0.261C1.401 4.607 1 5.268 1 6s0.401 1.393 1.018 1.74zm0.721 -2.701 0.551 -0.146 -0.217 -0.526A0.966 0.966 0 0 1 3 4c0 -0.551 0.449 -1 1 -1 0.123 0 0.249 0.025 0.365 0.072l0.527 0.217 0.146 -0.551a0.995 0.995 0 0 1 1.923 0l0.146 0.551 0.527 -0.217C7.75 3.025 7.877 3 8 3c0.551 0 1 0.449 1 1 0 0.123 -0.025 0.25 -0.072 0.365l-0.217 0.526 0.551 0.146a0.997 0.997 0 0 1 0 1.924l-0.551 0.146 0.217 0.526c0.048 0.115 0.072 0.241 0.072 0.365 0 0.551 -0.449 1 -1 1 -0.123 0 -0.249 -0.025 -0.365 -0.072l-0.527 -0.217 -0.146 0.551a0.995 0.995 0 0 1 -1.923 0l-0.146 -0.551 -0.527 0.217A0.968 0.968 0 0 1 4 9c-0.551 0 -1 -0.449 -1 -1 0 -0.123 0.025 -0.25 0.072 -0.365l0.217 -0.526 -0.551 -0.146a0.997 0.997 0 0 1 0 -1.924z"
                />
                <path
                  d="m7.871 5.355 -0.704 -0.71 -1.665 1.649 -0.648 -0.648 -0.707 0.707 1.352 1.352z"
                />
              </svg>
              <p class="text-xs text-left">{{ feature.name }}</p>
              <AppTooltip
                v-if="feature.tool_tip"
                position="top"
                :backgroundColor="indexValue === index ? 'white' : 'blue-300'"
              >
                <div
                  slot="trigger"
                  class="w-3 h-3 rounded-full flex items-center justify-center relative"
                  :class="indexValue === index ? 'bg-white' : 'bg-blue'"
                >
                  <svg
                    width="9px"
                    height="9px"
                    viewBox="0 0 0.27 0.27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.137 0.073C0.137 0.082 0.13 0.09 0.12 0.09C0.111 0.09 0.103 0.082 0.103 0.073C0.103 0.064 0.111 0.056 0.12 0.056C0.13 0.056 0.137 0.064 0.137 0.073Z"
                      :fill="indexValue === index ? 'black' : 'white'"
                    />
                    <path
                      d="M0.135 0.211L0.135 0.121L0.101 0.121"
                      :stroke="indexValue === index ? 'black' : 'white'"
                      stroke-width="0.0225"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M0.135 0.211H0.158"
                      :stroke="indexValue === index ? 'black' : 'white'"
                      stroke-width="0.0225"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span
                  style="font-size: 10px"
                  :class="indexValue === index ? 'text-blue-900' : 'text-white'"
                  >{{ feature.tool_tip }}</span
                >
              </AppTooltip>
            </div>
            <div>
              <div
                @click="toggleAddOn(index)"
                v-if="pricing.add_ons.length > 0"
                class="flex gap-2 items-center cursor-pointer"
                :class="indexValue === value ? 'text-white' : 'text-blue'"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 12 12"
                  enable-background="new 0 0 32 32"
                  xml:space="preserve"
                  width="12"
                  height="12"
                  fill="currentColor"
                >
                  <path
                    x="10"
                    y="15"
                    width="12"
                    height="2"
                    d="M3.75 5.625H8.25V6.375H3.75V5.625z"
                  />
                  <path
                    x="15"
                    y="10"
                    width="2"
                    height="12"
                    d="M5.625 3.75H6.375V8.25H5.625V3.75z"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.75"
                    stroke-miterlimit="10"
                    cx="16"
                    cy="16"
                    r="12"
                    d="M10.5 6A4.5 4.5 0 0 1 6 10.5A4.5 4.5 0 0 1 1.5 6A4.5 4.5 0 0 1 10.5 6z"
                  />
                </svg>
                <span class="font-semibold text-xs">Add Ons</span>
              </div>
              <div
                v-show="pricing.add_on"
                v-for="feature in pricing.add_ons"
                :key="feature.name"
                style="font-size: 11px"
                class="pl-5"
                :class="indexValue === index ? 'text-white' : 'text-grey'"
              >
                <span>
                  {{ feature.name }}
                </span>
                <AppTooltip
                  v-if="feature.tool_tip"
                  position="top"
                  :backgroundColor="indexValue === index ? 'white' : 'blue-300'"
                >
                  <div
                    slot="trigger"
                    class="w-3 h-3 rounded-full flex items-center justify-center relative"
                    :class="indexValue === index ? 'bg-white' : 'bg-blue'"
                  >
                    <svg
                      width="9px"
                      height="9px"
                      viewBox="0 0 0.27 0.27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.137 0.073C0.137 0.082 0.13 0.09 0.12 0.09C0.111 0.09 0.103 0.082 0.103 0.073C0.103 0.064 0.111 0.056 0.12 0.056C0.13 0.056 0.137 0.064 0.137 0.073Z"
                        :fill="indexValue === index ? 'black' : 'white'"
                      />
                      <path
                        d="M0.135 0.211L0.135 0.121L0.101 0.121"
                        :stroke="indexValue === index ? 'black' : 'white'"
                        stroke-width="0.0225"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M0.135 0.211H0.158"
                        :stroke="indexValue === index ? 'black' : 'white'"
                        stroke-width="0.0225"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    style="font-size: 9px"
                    :class="
                      indexValue === index ? 'text-blue-900' : 'text-white'
                    "
                    >{{ feature.tool_tip }}</span
                  >
                </AppTooltip>
              </div>
            </div>
            <div v-if="pricing.education_verifications">
              <div
                @click="
                  pricing.education_verification =
                    !pricing.education_verification
                "
                class="flex gap-2 items-center cursor-pointer"
                :class="indexValue === value ? 'text-white' : 'text-blue'"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 12 12"
                  enable-background="new 0 0 32 32"
                  xml:space="preserve"
                  width="12"
                  height="12"
                  fill="currentColor"
                >
                  <path
                    x="10"
                    y="15"
                    width="12"
                    height="2"
                    d="M3.75 5.625H8.25V6.375H3.75V5.625z"
                  />
                  <path
                    x="15"
                    y="10"
                    width="2"
                    height="12"
                    d="M5.625 3.75H6.375V8.25H5.625V3.75z"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.75"
                    stroke-miterlimit="10"
                    cx="16"
                    cy="16"
                    r="12"
                    d="M10.5 6A4.5 4.5 0 0 1 6 10.5A4.5 4.5 0 0 1 1.5 6A4.5 4.5 0 0 1 10.5 6z"
                  />
                </svg>
                <span class="font-semibold text-xs"
                  >Education Verification</span
                >
              </div>
              <div
                v-show="pricing.education_verification"
                v-for="feature in pricing.education_verifications"
                :key="feature.name"
                style="font-size: 11px"
                class="pl-5"
                :class="indexValue === index ? 'text-white' : 'text-grey'"
              >
                <span>
                  {{ feature.name }}
                </span>
                <AppTooltip
                  v-if="feature.tool_tip"
                  position="top"
                  :backgroundColor="indexValue === index ? 'white' : 'blue-300'"
                >
                  <div
                    slot="trigger"
                    class="w-3 h-3 rounded-full flex items-center justify-center relative"
                    :class="indexValue === index ? 'bg-white' : 'bg-blue'"
                  >
                    <svg
                      width="9px"
                      height="9px"
                      viewBox="0 0 0.27 0.27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.137 0.073C0.137 0.082 0.13 0.09 0.12 0.09C0.111 0.09 0.103 0.082 0.103 0.073C0.103 0.064 0.111 0.056 0.12 0.056C0.13 0.056 0.137 0.064 0.137 0.073Z"
                        :fill="indexValue === index ? 'black' : 'white'"
                      />
                      <path
                        d="M0.135 0.211L0.135 0.121L0.101 0.121"
                        :stroke="indexValue === index ? 'black' : 'white'"
                        stroke-width="0.0225"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M0.135 0.211H0.158"
                        :stroke="indexValue === index ? 'black' : 'white'"
                        stroke-width="0.0225"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <ul>
                    <li
                      v-for="tip in feature.tool_tip"
                      :key="tip"
                      style="font-size: 9px"
                      class="list-disc"
                      :class="
                        indexValue === index ? 'text-blue-900' : 'text-white'
                      "
                    >
                      {{ tip }}
                    </li>
                  </ul>
                </AppTooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-12 md:hidden">
        <div
          v-show="indexValue === index"
          v-for="(pricing, index) in pricings"
          :key="index"
          class="rounded-3xl border border-blue pt-10 md:pt-12 pb-6 px-5 duration-500 ease-linear relative"
          :class="[indexValue === index ? 'bg-blue-300' : 'bg-white']"
        >
          <span
            v-show="indexValue === index"
            style="z-index: -1"
            class="absolute inset-x-0 -top-11 bg-blue-150 pt-2.5 pb-6 text-blue text-center rounded-t-3xl text-base"
          >
            Recommended
          </span>
          <div
            v-if="multiple && index === 0"
            class="shadow-lg px-2 py-1.5 rounded-xl flex justify-center bg-gray-100 -mt-5"
          >
            <div
              @click="
                plan = p;
                $emit('planSelected', i);
              "
              v-for="(p, i) in plans"
              :key="p"
              class="py-3.5 px-4 sm:px-9 rounded-xl cursor-pointer font-semibold text-base flex-1"
              :class="
                p === plan
                  ? 'bg-white text-blue-300 shadow-lg'
                  : 'bg-transparent text-grey'
              "
            >
              {{ p }}
            </div>
          </div>
          <h2
            v-else
            class="text-3xl font-semibold duration-300 ease-in-out"
            :class="indexValue === index ? 'text-white' : 'text-blue-300'"
          >
            {{ pricing.name }}
          </h2>
          <p
            class="text-sm mt-5 duration-300 ease-in-out"
            :class="[
              indexValue === index ? 'text-white' : 'text-grey',
              { 'lg:pr-14 lg:mr-0.5': index === 0 || index === 3 },
            ]"
          >
            {{ pricing.teaser }}
            <AppTooltip
              position="top"
              :backgroundColor="indexValue === index ? 'white' : 'blue-300'"
            >
              <div
                slot="trigger"
                class="w-3 h-3 rounded-full flex items-center justify-center relative"
                :class="indexValue === index ? 'bg-white' : 'bg-blue'"
              >
                <svg
                  width="9px"
                  height="9px"
                  viewBox="0 0 0.27 0.27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.137 0.073C0.137 0.082 0.13 0.09 0.12 0.09C0.111 0.09 0.103 0.082 0.103 0.073C0.103 0.064 0.111 0.056 0.12 0.056C0.13 0.056 0.137 0.064 0.137 0.073Z"
                    :fill="indexValue === index ? 'black' : 'white'"
                  />
                  <path
                    d="M0.135 0.211L0.135 0.121L0.101 0.121"
                    :stroke="indexValue === index ? 'black' : 'white'"
                    stroke-width="0.0225"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.135 0.211H0.158"
                    :stroke="indexValue === index ? 'black' : 'white'"
                    stroke-width="0.0225"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <span
                style="font-size: 10px"
                :class="indexValue === index ? 'text-blue-900' : 'text-white'"
                >{{ pricing.tool_tip }}</span
              >
            </AppTooltip>
          </p>
          <!-- <h3
          class="font-semibold text-3xl mt-4 duration-300 ease-in-out"
          :class="indexValue === index ? 'text-white' : 'text-blue-900'"
        >
          {{ pricing[period].price }}
        </h3>
        <span
          style="min-height: 60px"
          class="text-sm font-semibold mt-6 duration-300 ease-in-out"
          :class="indexValue === index ? 'text-white' : 'text-blue'"
        >
          {{ pricing[period].max }}</span
        > -->
          <!-- <p
          style="font-size: 10px"
          class="duration-300 ease-in-out"
          :class="indexValue === index ? 'text-white' : ''"
        >
          {{ pricing[period].total }}
        </p>
        <span
          class="font-semibold mt-2 duration-300 ease-in-out"
          :class="indexValue === index ? 'text-white' : 'text-blue'"
          >{{ pricing.member }}</span
        > -->
          <AppButton
            id="pricing-cta"
            @click="buttonclicked(index)"
            :text="pricing.ctaText"
            :theme="indexValue === index ? 'white' : 'secondary'"
            :outline="indexValue !== index"
            rounded="lg"
            fontWeight="semibold"
            size="sm"
            :href="pricing.ctaLink"
            class="mt-9"
          />

          <div class="mt-12 self-start space-y-3">
            <span
              v-if="index !== 0"
              class="font-bold"
              style="font-size: 13px"
              :class="indexValue === index ? 'text-white' : 'text-grey'"
              >All features in {{ pricings[index - 1].name }} +</span
            >
            <div
              v-for="feature in pricing.features"
              :key="feature.name"
              class="flex gap-2"
              :class="indexValue === index ? 'text-white' : 'text-grey'"
            >
              <svg
                width="12px"
                height="12px"
                viewBox="0 0 12 12"
                :fill="indexValue === index ? 'currentColor' : '#81DD6A'"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.018 7.739A1.988 1.988 0 0 0 2 8c0 1.189 1.069 2.142 2.26 1.982C4.607 10.599 5.267 11 6 11s1.393 -0.401 1.74 -1.018C8.928 10.142 10 9.189 10 8c0 -0.086 -0.006 -0.173 -0.018 -0.261C10.599 7.393 11 6.732 11 6s-0.401 -1.393 -1.018 -1.74C9.994 4.173 10 4.087 10 4c0 -1.189 -1.071 -2.144 -2.26 -1.982C7.393 1.401 6.733 1 6 1s-1.393 0.401 -1.74 1.018C3.069 1.856 2 2.811 2 4c0 0.086 0.006 0.173 0.018 0.261C1.401 4.607 1 5.268 1 6s0.401 1.393 1.018 1.74zm0.721 -2.701 0.551 -0.146 -0.217 -0.526A0.966 0.966 0 0 1 3 4c0 -0.551 0.449 -1 1 -1 0.123 0 0.249 0.025 0.365 0.072l0.527 0.217 0.146 -0.551a0.995 0.995 0 0 1 1.923 0l0.146 0.551 0.527 -0.217C7.75 3.025 7.877 3 8 3c0.551 0 1 0.449 1 1 0 0.123 -0.025 0.25 -0.072 0.365l-0.217 0.526 0.551 0.146a0.997 0.997 0 0 1 0 1.924l-0.551 0.146 0.217 0.526c0.048 0.115 0.072 0.241 0.072 0.365 0 0.551 -0.449 1 -1 1 -0.123 0 -0.249 -0.025 -0.365 -0.072l-0.527 -0.217 -0.146 0.551a0.995 0.995 0 0 1 -1.923 0l-0.146 -0.551 -0.527 0.217A0.968 0.968 0 0 1 4 9c-0.551 0 -1 -0.449 -1 -1 0 -0.123 0.025 -0.25 0.072 -0.365l0.217 -0.526 -0.551 -0.146a0.997 0.997 0 0 1 0 -1.924z"
                />
                <path
                  d="m7.871 5.355 -0.704 -0.71 -1.665 1.649 -0.648 -0.648 -0.707 0.707 1.352 1.352z"
                />
              </svg>
              <p class="text-xs text-left">{{ feature.name }}</p>
              <AppTooltip
                v-if="feature.tool_tip"
                position="top"
                :backgroundColor="indexValue === index ? 'white' : 'blue-300'"
              >
                <div
                  slot="trigger"
                  class="w-3 h-3 rounded-full flex items-center justify-center relative"
                  :class="indexValue === index ? 'bg-white' : 'bg-blue'"
                >
                  <svg
                    width="9px"
                    height="9px"
                    viewBox="0 0 0.27 0.27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.137 0.073C0.137 0.082 0.13 0.09 0.12 0.09C0.111 0.09 0.103 0.082 0.103 0.073C0.103 0.064 0.111 0.056 0.12 0.056C0.13 0.056 0.137 0.064 0.137 0.073Z"
                      :fill="indexValue === index ? 'black' : 'white'"
                    />
                    <path
                      d="M0.135 0.211L0.135 0.121L0.101 0.121"
                      :stroke="indexValue === index ? 'black' : 'white'"
                      stroke-width="0.0225"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M0.135 0.211H0.158"
                      :stroke="indexValue === index ? 'black' : 'white'"
                      stroke-width="0.0225"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span
                  style="font-size: 10px"
                  :class="indexValue === index ? 'text-blue-900' : 'text-white'"
                  >{{ feature.tool_tip }}</span
                >
              </AppTooltip>
            </div>
            <div>
              <div
                @click="toggleAddOn(index)"
                v-if="pricing.add_ons.length > 0"
                class="flex gap-2 items-center cursor-pointer"
                :class="indexValue === value ? 'text-white' : 'text-blue'"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 12 12"
                  enable-background="new 0 0 32 32"
                  xml:space="preserve"
                  width="12"
                  height="12"
                  fill="currentColor"
                >
                  <path
                    x="10"
                    y="15"
                    width="12"
                    height="2"
                    d="M3.75 5.625H8.25V6.375H3.75V5.625z"
                  />
                  <path
                    x="15"
                    y="10"
                    width="2"
                    height="12"
                    d="M5.625 3.75H6.375V8.25H5.625V3.75z"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.75"
                    stroke-miterlimit="10"
                    cx="16"
                    cy="16"
                    r="12"
                    d="M10.5 6A4.5 4.5 0 0 1 6 10.5A4.5 4.5 0 0 1 1.5 6A4.5 4.5 0 0 1 10.5 6z"
                  />
                </svg>
                <span class="font-semibold text-xs">Add Ons</span>
              </div>
              <div
                v-show="pricing.add_on"
                v-for="feature in pricing.add_ons"
                :key="feature.name"
                style="font-size: 11px"
                class="pl-5"
                :class="indexValue === index ? 'text-white' : 'text-grey'"
              >
                <span>
                  {{ feature.name }}
                </span>
                <AppTooltip
                  v-if="feature.tool_tip"
                  position="top"
                  :backgroundColor="indexValue === index ? 'white' : 'blue-300'"
                >
                  <div
                    slot="trigger"
                    class="w-3 h-3 rounded-full flex items-center justify-center relative"
                    :class="indexValue === index ? 'bg-white' : 'bg-blue'"
                  >
                    <svg
                      width="9px"
                      height="9px"
                      viewBox="0 0 0.27 0.27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.137 0.073C0.137 0.082 0.13 0.09 0.12 0.09C0.111 0.09 0.103 0.082 0.103 0.073C0.103 0.064 0.111 0.056 0.12 0.056C0.13 0.056 0.137 0.064 0.137 0.073Z"
                        :fill="indexValue === index ? 'black' : 'white'"
                      />
                      <path
                        d="M0.135 0.211L0.135 0.121L0.101 0.121"
                        :stroke="indexValue === index ? 'black' : 'white'"
                        stroke-width="0.0225"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M0.135 0.211H0.158"
                        :stroke="indexValue === index ? 'black' : 'white'"
                        stroke-width="0.0225"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    style="font-size: 9px"
                    :class="
                      indexValue === index ? 'text-blue-900' : 'text-white'
                    "
                    >{{ feature.tool_tip }}</span
                  >
                </AppTooltip>
              </div>
            </div>
            <div v-if="pricing.education_verifications">
              <div
                @click="
                  pricing.education_verification =
                    !pricing.education_verification
                "
                class="flex gap-2 items-center cursor-pointer"
                :class="indexValue === value ? 'text-white' : 'text-blue'"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 12 12"
                  enable-background="new 0 0 32 32"
                  xml:space="preserve"
                  width="12"
                  height="12"
                  fill="currentColor"
                >
                  <path
                    x="10"
                    y="15"
                    width="12"
                    height="2"
                    d="M3.75 5.625H8.25V6.375H3.75V5.625z"
                  />
                  <path
                    x="15"
                    y="10"
                    width="2"
                    height="12"
                    d="M5.625 3.75H6.375V8.25H5.625V3.75z"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="0.75"
                    stroke-miterlimit="10"
                    cx="16"
                    cy="16"
                    r="12"
                    d="M10.5 6A4.5 4.5 0 0 1 6 10.5A4.5 4.5 0 0 1 1.5 6A4.5 4.5 0 0 1 10.5 6z"
                  />
                </svg>
                <span class="font-semibold text-xs"
                  >Education Verification</span
                >
              </div>
              <div
                v-show="pricing.education_verification"
                v-for="feature in pricing.education_verifications"
                :key="feature.name"
                style="font-size: 11px"
                class="pl-5"
                :class="indexValue === index ? 'text-white' : 'text-grey'"
              >
                <span>
                  {{ feature.name }}
                </span>
                <AppTooltip
                  v-if="feature.tool_tip"
                  position="top"
                  :backgroundColor="indexValue === index ? 'white' : 'blue-300'"
                >
                  <div
                    slot="trigger"
                    class="w-3 h-3 rounded-full flex items-center justify-center relative"
                    :class="indexValue === index ? 'bg-white' : 'bg-blue'"
                  >
                    <svg
                      width="9px"
                      height="9px"
                      viewBox="0 0 0.27 0.27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.137 0.073C0.137 0.082 0.13 0.09 0.12 0.09C0.111 0.09 0.103 0.082 0.103 0.073C0.103 0.064 0.111 0.056 0.12 0.056C0.13 0.056 0.137 0.064 0.137 0.073Z"
                        :fill="indexValue === index ? 'black' : 'white'"
                      />
                      <path
                        d="M0.135 0.211L0.135 0.121L0.101 0.121"
                        :stroke="indexValue === index ? 'black' : 'white'"
                        stroke-width="0.0225"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M0.135 0.211H0.158"
                        :stroke="indexValue === index ? 'black' : 'white'"
                        stroke-width="0.0225"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <ul>
                    <li
                      v-for="tip in feature.tool_tip"
                      :key="tip"
                      style="font-size: 9px"
                      class="list-disc"
                      :class="
                        indexValue === index ? 'text-blue-900' : 'text-white'
                      "
                    >
                      {{ tip }}
                    </li>
                  </ul>
                </AppTooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mt-12">
      <div v-if="submitted" class="py-24 shadow-lg">
        <div class="text-center">
          <img
            class="mx-auto"
            src="~/assets/images/icons/completed.svg"
            alt=""
          />
          <h3 class="font-semibold text-4xl mt-10">Thank you</h3>
          <p class="mt-8 font-medium">
            One of our sales expert will contact you shortly.
          </p>
        </div>
      </div>
      <div v-else class="shadow-lg py-12">
        <h1 class="font-semibold text-2xl md:text-5xl text-center">
          Enterprise plan
        </h1>
      <contact-form @submit-form='submitForm' />
      </div>
      <div></div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import contactForm from "@/components/contactForm.vue";
import { commonEmails } from "~/data/emails";

export default {
  props: {
    value: {},
    pricings: Array,
    product: String,
    multiple: Boolean,
  },
  components: {
    'contact-form': contactForm,
  },
  data() {
    return {
      modifiedValue: this.value,
      submitted: false,
      plans: ["Free", "Startup"],
      plan: "Free",
    };
  },
  computed: {
    indexValue() {
      if (this.value < 33.33) {
        return 0;
      } else if (this.value < 66.66) {
        return 1;
      } else if (this.value < 99.99) {
        return 2;
      } else {
        return 3;
      }
    },
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
    buttonclicked(index, pricing) {
      window.dataLayer = window.dataLayer || [];
      if (index === 0) {
        window.dataLayer.push({
          event: "basicPlanSelected",
        });
      }
      if (index === 1) {
        window.dataLayer.push({
          event: "growthPlanSelected",
        });
      }
      if (index === 2) {
        window.dataLayer.push({
          event: "standardPlanSelected",
        });
      }
      if (index === 3 || this.product === "kyt" || this.product === "kye") {
        if (!pricing.ctaLink) {
          this.modifiedValue = 99.99;
        }
        window.dataLayer.push({
          event: "enterprisePlanSelected",
        });
      }
    },
    async submitForm(data) {
      try {
        const formData = {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          companyName: data.company,
          countryOfOperations: data.country,
          countryCode: data.tel_code,
          phoneNumber: data.mobile,
          type: 'sales',
          whereDidYouHear: data.firstContactPoint,
          formOn: this.$route.fullPath,
        };

        const { queryType, partnershipType, tel_code, mobile, ...rest } = data;

        await this.$store.dispatch("contact/submitForm", formData);
        await this.$store.dispatch("zoho-crm/createLeads", rest);

        this.submitted = true
        
        this.$emit("formSubmitted");
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "enterpriseFormSubmitted",
        });
      } catch (e) {}
    },
    toggleAddOn(index) {
      this.pricings[index].add_on = !this.pricings[index].add_on;
      this.$forceUpdate();
    },
  },
  watch: {
    value() {
      this.modifiedValue = this.value;
    },
  },
  async created() {
    await this.$store.dispatch("countries/getCountries");
  },
};
</script>
