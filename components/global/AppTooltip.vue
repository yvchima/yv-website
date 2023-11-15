<template>
  <div class="tooltip">
    <slot name="trigger" />
    <div
      :class="`tooltip-content ${position} bg-${backgroundColor} text-${backgroundColor} text-sm`"
      v-show="showContent"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTooltip",
  props: {
    position: {
      default: "right",
      validator: function (value) {
        // The value must match one of these strings
        return ["top", "bottom", "left", "right"].includes(value);
      },
    },
    showContent: {
      default: true,
    },
    backgroundColor: {},
  },
};
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip .tooltip-content {
  display: none;
  opacity: 0;
  min-width: 180px;
  padding: 16px;
  border-radius: 6px;
  transition: opacity 1s;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}
.tooltip:hover .tooltip-content {
  display: block;
  opacity: 1;
}
.tooltip .tooltip-content::after {
  content: " ";
  position: absolute;
  border-width: 9px;
  border-style: solid;
  /* margin-top: -5px; */
}
.tooltip .tooltip-content.right {
  top: 50%;
  left: 105%;
  transform: translate(0%, -50%);
}
.tooltip .tooltip-content.left::after {
  top: 50%;
  left: 100%; /* To the right of the tooltip */
  border-color: transparent transparent transparent currentColor;
}
.tooltip .tooltip-content.left {
  top: 50%;
  right: 105%;
  transform: translate(0%, -50%);
}
.tooltip .tooltip-content.right::after {
  top: 50%;
  right: 100%; /* To the left of the tooltip */
  border-color: transparent currentColor transparent transparent;
}
.tooltip .tooltip-content.top {
  bottom: 200%;
  left: 50%;
  transform: translate(-50%, 0);
}
.tooltip .tooltip-content.bottom::after {
  bottom: 100%; /* At the top of the tooltip */
  left: 50%;
  border-color: transparent transparent currentColor transparent;
  transform: translate(-50%, 0%);
}
.tooltip .tooltip-content.bottom {
  top: 200%;
  left: 50%;
  /*margin-left: 50%; !* Use half of the width (120/2 = 60), to center the tooltip *!*/
  transform: translate(-50%, 0%);
}
.tooltip .tooltip-content.top::after {
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  border-color: currentColor transparent transparent transparent;
  transform: translate(-50%, 0%);
}
</style>
