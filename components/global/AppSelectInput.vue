<template>
  <div>
    <div>
      <input type="hidden" :value="value" />
      <app-dropdown
        :class="[{ disabled: disabled }, 'w-full']"
        :close-on-click="!allowSearch"
        :show-pointer="false"
        :offset="offset"
        ref="dropdown"
        :disabled="disabled"
        :boundary="dropdownBoundary"
        trigger-parent-class="w-full"
      >
        <div
          slot="trigger"
          class="relative flex flex-1 items-center border border-grey focus:border-blue py-3 px-4 text-xs rounded"
        >
          <template>
            <div v-if="value" :class="`flex-1 truncate`">
              <template v-if="!hasCustomSelectedView">
                {{ (displayValue && displayValue.name) || value }}
              </template>
              <slot v-else name="selected-view" :item="displayValue" />
            </div>
            <div
              :style="{ color: placeholderColor }"
              v-else-if="placeholder"
              class="flex-1 placeholder text-gray-secondary truncate"
            >
              {{ placeholder }}
            </div>
          </template>

          <svg
            :class="`fill-current ${caretSize} ${
              caretStrokeWidth && 'stroke-current'
            }`"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.80942 8.3582C5.10162 8.06014 5.55887 8.03305 5.88107 8.27691L5.97339 8.3582L12.5684 15.0857L19.1633 8.3582C19.4555 8.06014 19.9128 8.03305 20.235 8.27691L20.3273 8.3582C20.6195 8.65626 20.6461 9.12268 20.407 9.45135L20.3273 9.54551L13.1503 16.8664C12.8581 17.1645 12.4009 17.1916 12.0787 16.9477L11.9864 16.8664L4.80942 9.54551C4.488 9.21764 4.488 8.68607 4.80942 8.3582Z"
            />
          </svg>
        </div>
        <div
          class="bg-white"
          style="min-width: 150px; max-height: 200px; overflow-y: auto"
        >
          <div class="px-4 pt-4 form-group w-full" v-if="allowSearch">
            <input type="text" placeholder="Search..." v-model="search"/>
          </div>
          <div
            @click="selectOption(option)"
            class="cursor-pointer px-4 py-2 hover:bg-gray-100"
            v-for="(option, i) in optionsComputed"
            :key="`option-${i}`"
          >
            <div v-if="!hasCustomListItem">
              {{ option.listName || option.name || option }}
            </div>
            <slot name="list-item" :option="option" />
          </div>
        </div>
      </app-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSelectInput",
  props: {
    allowSearch: {
      default: false,
    },
    hasCustomListItem: {
      default: false,
    },
    hasCustomSelectedView: {
      default: false,
    },
    placeholder: String,
    labelColor: {
      default: null,
    },
    placeholderColor: String,
    isDefault: {
      default: true,
    },
    required: {
      default: false,
    },
    theme: {
      default: "white",
    },
    info: {
      default: null,
    },
    label: String,
    icon: String,
    options: {
      default: () => {
        return [];
      },
    },
    value: {
      default: null,
    },
    caretSize: {
      default: "h-5",
    },
    addonLeft: {
      default: null,
    },
    hideErrors: {
      default: false,
    },
    caretStrokeWidth: String,
    name: String,
    spacing: {
      default: "",
    },
    hint: String,
    labelSize: {
      default: "sm",
    },
    rules: {
      default: "",
    },
    boxLength: {
      default: "",
    },
    size: {
      default: "md",
    },
    loading: {
      default: false,
    },
    disabled: {
      default: false,
    },
    dropdownBoundary: {
      default: "parent",
    },
    offset: {
      default: 0,
    },
  },
  data() {
    return {
      focused: false,
      search: "",
    };
  },
  computed: {
    optionsComputed() {
      let options = this.options;
      if (!Array.isArray(this.options)) {
        for (let key in options) {
          options[key].value = key;
        }
      }

      if (this.allowSearch && this.search) {
        if (!Array.isArray(options)) {
          options = Object.values(options);
        }
        return options.filter((option) => {
          const item = option.listName || option.name || option;
          return item.toLowerCase().includes(this.search.toLowerCase());
        });
      }
      return options;
    },
    // optionsMap(){
    //   let map = {};
    //   for(let option of this.options){
    //     map[option.value || option.id] = option;
    //   }
    //   return map;
    // },
    displayValue() {
      return this.$options.filters.selected_value(
        this.value,
        this.optionsComputed,
        null
      );
    },
  },
  methods: {
    selectOption(option) {
      const _option = option.value || option.id || option;
      // console.log(_option);
      if (_option !== this.value) {
        this.$emit("change", _option);
      }
      this.$emit("input", _option);
      if (this.allowSearch) {
        this.$refs.dropdown.forceClose();
      }
    },
  },
};
</script>

<style scoped>
.disabled {
  background: #eee;
  cursor: not-allowed;
}
</style>
