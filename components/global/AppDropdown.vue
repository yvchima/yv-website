<template>
  <div
    ref="container"
    :class="[
      {
        'cursor-not-allowed': disabled,
        static: boundary !== 'parent',
        relative: boundary === 'parent',
      },
    ]"
  >
    <div
      ref="trigger"
      :class="[
        { 'pointer-events-none': disabled },
        `z-0 ${triggerParentClass}`,
      ]"
    >
      <slot name="trigger" />
    </div>
    <div
      v-if="showMenu"
      :style="{
        top: 0,
        left: 0,
        ...menuStyle,
      }"
      :class="`absolute z-20 menu`"
      ref="menu"
    >
      <div
        :class="{ 'opacity-0': !showPointer }"
        ref="pointer"
        :style="{ ...directive.arrowPosition }"
        class="pointer"
      ></div>
      <div class="h-full w-full bg-white overflow-hidden rounded-md">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppDropdown",
  data() {
    return {
      directive: {
        position: null,
        arrowPosition: {
          top: 0,
          bottom: 0,
        },
      },
      menuStyle: {},
      showMenu: false,
      tabIndex: -1,
    };
  },
  props: {
    menuMaxHeight: {
      default: 200,
    },
    menuMaxWidth: {
      default: 500,
    },
    arrowPosition: {
      default: 0,
    },
    showPointer: {
      default: true,
    },
    offset: {
      default: 10,
    },
    closeOnClick: {
      default: false,
    },
    disabled: {
      default: false,
    },
    boundary: {
      default: "parent", //could be parent, offsetParent, reference to HTML element
    },
    triggerParentClass: {
      default: "inline-block",
    },
  },
  methods: {
    setElementPosition() {
      const container = this.$refs.container;
      const menu = this.$refs.menu;

      if (!this.showMenu || !container || !menu) return;

      const containerBoundingRect = container.getBoundingClientRect();
      const menuBoundingRect = menu.getBoundingClientRect();
      let style = {
        transform: "",
        minWidth: containerBoundingRect.width + "px",
      };

      //check for overflowing width;
      const computedWidth = containerBoundingRect.x + menuBoundingRect.width;
      const computedHeight =
        containerBoundingRect.y +
        this.offset +
        menuBoundingRect.height +
        containerBoundingRect.height;

      if (this.boundary === "parent") {
        if (computedWidth >= window.innerWidth) {
          style.transform += ` translateX(-${
            menuBoundingRect.width - containerBoundingRect.width
          }px) `;
        }
        if (computedHeight >= window.innerHeight) {
          style.transform += ` translateY(-${
            menuBoundingRect.height + this.offset
          }px) `;
        } else {
          style.transform += ` translateY(${
            containerBoundingRect.height + this.offset
          }px) `;
        }
      } else {
        let offsetTop = 0;
        let offsetLeft = 0;
        const trigger = this.$refs.trigger;
        const triggerBoundingClient = trigger.getBoundingClientRect();

        if (this.boundary === "offsetParent") {
          offsetTop = trigger.offsetTop;
          offsetLeft = trigger.offsetLeft;

          let parent = container.parentElement;
          if (!container.offsetParent || !parent) return;

          while (container.offsetParent.contains(parent)) {
            offsetTop -= parent.scrollTop;
            parent = parent.parentElement;
            //console.log(parent.scrollTop)
          }
        }
        //if(this.boundary === 'window')
        else {
          const offsetParent = document.scrollingElement;
          offsetTop = triggerBoundingClient.top + offsetParent.scrollTop;
          offsetLeft = triggerBoundingClient.left;
        }

        if (computedWidth >= window.innerWidth) {
          style.transform += ` translateX(${
            triggerBoundingClient.x -
            (menuBoundingRect.width - containerBoundingRect.width)
          }px) `;
        } else {
          style.transform += ` translateX(${offsetLeft}px) `;
        }
        if (computedHeight >= window.innerHeight) {
          style.transform += ` translateY(${
            offsetTop - (menuBoundingRect.height + this.offset)
          }px) `;
        } else {
          style.transform += ` translateY(${
            offsetTop + (containerBoundingRect.height + this.offset)
          }px) `;
        }
      }

      this.menuStyle = style;
      // console.log(style);
    },
    triggerShowMenu(e) {
      this.showMenu = true;
      this.$nextTick(() => {
        this.setElementPosition(e);
      });
    },
    stuff(e) {
      // if(e.target === this.$refs.trigger){
      //   this.toggleShowMenu(e)
      // }

      if (this.$refs.container.contains(e.target)) {
        // Clicked in box
        //alert()
        // console.log("inside");
        if (!this.$refs.trigger.contains(e.target) && this.closeOnClick) {
          //if trigger wasn't clicked and closeOnClick is true
          // console.log("closed cos menu was clicked");
          this.showMenu = false;
        }
      } else {
        // Clicked outside the box
        if (this.showMenu) {
          // console.log("outside fam");
          this.showMenu = false;
        }

        // this.toggleShowMenu(e)
      }
    },
    forceClose() {
      this.showMenu = false;
    },
    resolveScrollOfOffsetParent(addEventListener = true) {
      if (this.boundary !== "offsetParent") return;

      const container = this.$refs.container;
      let parent = container.parentElement;
      if (!parent || !container.offsetParent) return;

      while (container.offsetParent.contains(parent)) {
        if (
          ["auto", "scroll"].includes(parent.style.overflow) ||
          ["auto", "scroll"].includes(parent.style.overflowY) ||
          parent.classList.contains("overflow-auto") ||
          parent.classList.contains("overflow-scroll")
        ) {
          // console.log("mahn");
          if (addEventListener)
            parent.addEventListener("scroll", this.setElementPosition);
          else {
            parent.removeEventListener("scroll", this.setElementPosition);
          }
        }
        parent = parent.parentElement;
      }
    },
    triggerClicked(event) {
      //event.stopPropagation()
      event.preventDefault();
      this.triggerShowMenu();
    },
  },
  mounted() {
    //setTimeout(() => {
    const target =
      this.$refs.trigger.firstElementChild || this.$refs.trigger.firstChild;
    // console.log(this.$refs.trigger)
    // console.log(target)
    if (target) {
      target.addEventListener("click", this.triggerClicked);
    }
    //}, 1000)

    window.addEventListener("click", this.stuff);
    window.addEventListener("resize", this.forceClose);
    this.$nextTick(() => this.resolveScrollOfOffsetParent(true));

    //document.querySelector(`${this.boundary} *`)
  },
  beforeDestroy() {
    const target = this.$refs.trigger.firstElementChild;
    if (target) {
      target.removeEventListener("click", this.triggerClicked);
    }
    window.removeEventListener("click", this.stuff);
    window.removeEventListener("resize", this.forceClose);
    this.resolveScrollOfOffsetParent(false);
  },
};
</script>

<style scoped>
/*.menu.right:before{*/
/*  content: "";*/
/*  height: 0;*/
/*  width: 0;*/
/*  position: absolute;*/
/*  right: 20px; top: -10px;*/
/*  border-left: 10px solid transparent;*/
/*  border-right: 10px solid transparent;*/
/*  border-bottom: 10px solid white;*/
/*}*/
/*.menu.left:before{*/
/*  content: "";*/
/*  height: 0;*/
/*  width: 0;*/
/*  position: absolute;*/
/*  left: 20px; top: -10px;*/
/*  border-left: 10px solid transparent;*/
/*  border-right: 10px solid transparent;*/
/*  border-bottom: 10px solid white;*/
/*}*/
.menu {
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.15));
}

.pointer {
  height: 0;
  width: 0;
  position: absolute;
  /*//bottom: 100%;*/
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
}
</style>
