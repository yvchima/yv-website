<template>
  <section id="careers" class="px-6 max-w-screen-xl mx-auto py-20">
    <div class="flex flex-col items-center">
      <div
        style="background-color: #c2e2e9"
        class="py-2 px-4 text-sm font-medium mb-8 text-blue rounded"
      >
        Openings
      </div>
      <h2
        class="md:text-4xl text-2xl mb-4 md:mb-6 font-semibold text-center text-blue"
      >
        Where Do You Fit in?
      </h2>
    </div>

    <div v-if="openings.length === 0" class="flex flex-col items-center mt-10">
      <img
        class="w-40 md:w-auto"
        src="~/assets/images/icons/big-search.svg"
        alt=""
      />
      <h3 class="text-xl font-medium mt-8">No roles available right now</h3>

      <p
        class="font-medium text-lg md:text-xl text-center mt-5 md:mt-10 max-w-2xl mx-auto"
      >
        Wanna shoot your shot? Send an unsolicited email to
        <a class="text-blue" href="mailto:careers@youverify.co"
          >careers@youverify.co
        </a>
      </p>
    </div>

    <div v-else class="space-y-10 mt-10">
      <div v-for="department in departments" :key="department.id">
        <div
          style="background-color: #c2e2e9"
          class="py-2 px-4 text-sm font-semibold mb-5 text-blue rounded inline-block"
        >
          {{ department.Name }}
        </div>
        <div class="space-y-5">
          <div v-for="role in department.job_opening_roles" :key="role.id">
            <div
              @click="toggleRoles(role.Title)"
              class="py-4 md:py-5 px-6 md:px-8 border border-grey-200 flex items-center justify-between cursor-pointer"
            >
              <h3 class="text-black text-lg md:text-xl font-medium">
                {{ role.Title }}
              </h3>
              <svg
                :class="{
                  'transform rotate-180': selectedRole === role.Title,
                }"
                class="duration-300 ease-in-out transition-transform"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                id="magicoon-Filled"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <style>
                    .cls-1 {
                      fill: #41416e;
                    }
                  </style>
                </defs>
                <g id="arrow-down-Filled">
                  <path
                    id="arrow-down-Filled-2"
                    data-name="arrow-down-Filled"
                    class="cls-1"
                    d="M19.707,14.707l-7,7a1,1,0,0,1-1.414,0l-7-7a1,1,0,0,1,1.414-1.414L11,18.586V3a1,1,0,0,1,2,0V18.586l5.293-5.293a1,1,0,0,1,1.414,1.414Z"
                  />
                </g>
              </svg>
            </div>

            <div
              v-if="selectedRole === role.Title"
              class="mt-2 py-4 md:py-5 px-6 md:px-8 border border-grey-200"
            >
              <p class="text-black mb-6" v-html="role.Description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    openings: Array,
    departments: Array,
  },
  data() {
    return {
      selectedRole: null,
    };
  },
  methods: {
    toggleRoles(role) {
      if (this.selectedRole === role) {
        this.selectedRole = null;
      } else {
        this.selectedRole = role;
      }
    },
  },
};
</script>
