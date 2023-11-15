<template>
  <button
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :target="target"
    :to="to"
    :href="href"
    v-on="$listeners"
    :disabled="disabled"
    :class="[
      themeComputed,
      fontWeightComputed,
      radiusComputed,
      sizeComputed,
      `inline-flex items-center justify-center focus:outline-none flex-shrink-0 duration-200 ease-in-out`,
      { 'cursor-not-allowed': disabled },
    ]"
  >
    <slot name="prepend"></slot>
    <span>
      {{ text }}
    </span>
    <slot name="append"></slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Pending",
    },
    theme: {
      type: String,
      default: "primary",
    },
    fontWeight: String,
    size: {
      type: String,
      default: "md",
    },
    outline: {
      type: Boolean,
      default: false,
    },
    rounded: String,
    to: {
      type: String,
      default: null,
    },
    href: {
      type: String,
    },
    target: {
      default: "_self",
    },
    disabled: {
      default: false,
    },
  },
  computed: {
    themeComputed() {
      switch (this.theme) {
        case "primary":
          if (this.outline) return "border border-blue hover:bg-grey-300";
          return "bg-blue text-white hover:bg-blue-300";

        case "secondary":
          if (this.outline)
            return "border-2 border-blue-300 text-blue-300 hover:bg-grey-300";
          return "bg-blue-300 text-white hover:bg-blue";

        case "white":
          if (this.outline)
            return "border border-white text-white hover:bg-white hover:text-blue-300";
          return "bg-white text-blue-300 border border-transparent hover:border-white hover:bg-transparent hover:text-white";

        case "transparent":
          return "bg-transparent text-blue hover:text-blue-300";
      }
    },
    fontWeightComputed() {
      switch (this.fontWeight) {
        case "light":
          return "font-light";
        case "medium":
          return "font-medium";
        case "semibold":
          return "font-semibold";
        case "normal":
          return "font-normal";
        default:
          return "font-medium";
      }
    },
    radiusComputed() {
      switch (this.rounded) {
        case "sm":
          return "rounded-sm";
        case "md":
          return "rounded-md";
        case "lg":
          return "rounded-lg";
        case "xl":
          return "rounded-xl";
        case "full":
          return "rounded-full";
        default:
          return "rounded";
      }
    },
    sizeComputed() {
      switch (this.size) {
        case "sm":
          return "py-2.5 px-5 text-sm";
        case "md":
          return "py-4 px-9 text-sm";
        case "none":
          return "p-0";
      }
    },
  },
};
</script>
