<template>
  <div v-if="showBanner" class="bg-white border-blue border rounded-md py-4">
    <div class="pr-5 cursor-pointer">
      <img
        @click="showBanner = false"
        class="ml-auto"
        src="~/assets/images/icons/close-icon.svg"
        alt=""
      />
    </div>
    <div
      class="lg:flex justify-between items-center max-w-screen-xl mx-auto py-3 px-6"
    >
      <div class="flex gap-6">
        <img
          class="hidden sm:block"
          src="~/assets/images/icons/cookie.svg"
          alt="cookies"
        />
        <div>
          <h4 class="text-blue-300 text-xl font-semibold">
            This website uses cookies
          </h4>
          <p class="text-blue-300 max-w-2xl lg:max-w-lg text-sm mt-2 sm:mt-3.5">
            This website uses scripts like cookies and similar technology that
            is able to read, write and store information on your browser and
            device for the purpose of enhancing your user experience. By
            clicking “Allow all”, you consent to our use of cookies in
            accordance with our
            <a href="/cookies" class="text-blue text-sm font-semibold mt-3"
              >Cookie Policy</a
            >
          </p>
        </div>
      </div>
      <div
        class="flex flex-wrap sm:justify-center lg:justify-start gap-4 mt-5 lg:mt-0"
      >
        <AppButton id="accept-cookies" @click="accept" text="Allow all" size="sm" />
        <AppButton id="deny-cookies"
          @click="deny"
          text="Deny"
          theme="secondary"
          :outline="true"
          size="sm" class="hidden sm:block"
        />
        <AppButton id="manage-preference"
          @click="showPreferences"
          text="Manage Preference"
          theme="secondary"
          :outline="true"
          size="sm"
        />
      </div>
    </div>
    <div
      @click="showModal = false"
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div @click.stop="" class="bg-white rounded-xl p-6 max-w-lg mx-6">
        <h4 class="text-blue-300 font-semibold text-base">
          Select which cookies you want to accept
        </h4>
        <div class="mt-8 space-y-5">
          <div>
            <div class="flex gap-5 items-center">
              <h5 class="text-grey text-sm font-semibold w-40">
                Essential Cookies
              </h5>
              <div
                class="w-7 h-4 rounded-lg p-0.5 cursor-pointer"
                :class="preferences.essential ? 'bg-blue' : 'bg-grey'"
              >
                <div
                  class="w-1/2 bg-white h-full rounded-full transform transition-transform duration-200 ease-in-out"
                  :class="
                    preferences.essential ? 'translate-x-full' : 'translate-x-0'
                  "
                ></div>
              </div>
            </div>
            <p class="mt-3 text-sm">
              Essential cookies are required to enable the basic features of
              this website. They are enabled by default unless you block them
              using your browser.It does not store personally identifiable
              information.
            </p>
          </div>
          <div>
            <div class="flex gap-5 items-center">
              <h5 class="text-grey text-sm font-semibold w-40">
                Performance Cookies
              </h5>
              <div
                @click="preferences.performance = !preferences.performance"
                class="w-7 h-4 rounded-lg p-0.5 cursor-pointer"
                :class="preferences.performance ? 'bg-blue' : 'bg-grey'"
              >
                <div
                  class="w-1/2 bg-white h-full rounded-full transform transition-transform duration-200 ease-in-out"
                  :class="
                    preferences.performance
                      ? 'translate-x-full'
                      : 'translate-x-0'
                  "
                ></div>
              </div>
            </div>
            <p class="mt-3 text-sm">
              These cookies are set to provide quantitative measures of this
              website's visitors. With these cookies, we are able to count
              visits and traffic sources in order to improve the performance.
            </p>
          </div>
          <div>
            <div class="flex gap-5 items-center">
              <h5 class="text-grey text-sm font-semibold w-40">
                Functionality Cookies
              </h5>
              <div
                @click="preferences.functionality = !preferences.functionality"
                class="w-7 h-4 rounded-lg p-0.5 cursor-pointer"
                :class="preferences.functionality ? 'bg-blue' : 'bg-grey'"
              >
                <div
                  class="w-1/2 bg-white h-full rounded-full transform transition-transform duration-200 ease-in-out"
                  :class="
                    preferences.functionality
                      ? 'translate-x-full'
                      : 'translate-x-0'
                  "
                ></div>
              </div>
            </div>
            <p class="mt-3 text-sm">
              These cookies enable the website to perform enhanced functionality
              and personalisation based on your interactions with the website.
              It remembers the website visitors' preferences, language, region
              etc. It does not collect or store personal information.
            </p>
          </div>
        </div>

        <div class="mt-8 flex gap-4">
          <AppButton
            @click="deny"
            text="Deny all"
            theme="secondary"
            :outline="true"
            size="sm"
          />
          <AppButton @click="savePreferences" text="Confirm" size="sm" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBanner: null,
      showModal: false,
      preferences: {
        essential: true,
        performance: true,
        functionality: true,
      },
    };
  },
  methods: {
    accept() {
      this.preferences = {
        essential: true,
        performance: true,
        functionality: true,
      };
      this.$cookies.set("preferences", JSON.stringify(this.preferences));
      this.showBanner = false;
      this.$cookies.set("cookiesBanner", "dismissed");
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cookieConsent",
        cookieConsent: this.preferences,
      });
    },
    deny() {
      this.preferences = {
        essential: true,
        performance: false,
        functionality: false,
      };
      this.$cookies.set("preferences", JSON.stringify(this.preferences));
      this.showBanner = false;
      this.$cookies.set("cookiesBanner", "dismissed");
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cookieConsent",
        cookieConsent: this.preferences,
      });
    },
    showPreferences() {
      this.showModal = true;
    },
    savePreferences() {
      this.$cookies.set("preferences", JSON.stringify(this.preferences));
      this.$cookies.set("cookiesBanner", "dismissed");
      this.showModal = false;
      this.showBanner = false;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "cookieConsent",
        cookieConsent: this.preferences,
      });
    },
  },
  mounted() {
    const cookiesBanner = this.$cookies.get("cookiesBanner");
    if (cookiesBanner === "dismissed") {
      this.showBanner = false;
    } else {
      this.showBanner = true;
    }
    const preferences = this.$cookies.get("preferences");
    if (preferences) {
      this.preferences = preferences;
    }
  },
};
</script>
