<template>
  <div class="simple-popover" ref="popoverWrapper">
    <div
      class="content-wrapper"
      :class="{[`position-${position}`]:true}"
      ref="contentWrapper"
      v-if="visible"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" class="trigger-wrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from "vue";

export default {
  name: "SimplePopover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].includes(value);
      }
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].includes(value);
      }
    }
  },
  setup(props, context) {
    let contentWrapper = ref<HTMLDivElement>(null);
    let triggerWrapper = ref<HTMLDivElement>(null);
    let popoverWrapper = ref<HTMLDivElement>(null);
    let visible = ref(false);
    let { trigger } = props;

    let open = () => {
      visible.value = true;
      nextTick(() => {
        positionContent();
        document.addEventListener("click", onClickDocument);
      });
    };
    let close = () => {
      visible.value = false;
      document.removeEventListener("click", onClickDocument);
    };

    let positionContent = () => {
      document.body.appendChild(contentWrapper.value);
      let { position } = props;
      let {
        top,
        left,
        width,
        height
      } = triggerWrapper.value.getBoundingClientRect();
      let { height: height2 } = contentWrapper.value.getBoundingClientRect();
      let positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX
        },
        left: {
          top: top + (height - height2) / 2 + window.scrollY,
          left: left + window.scrollX
        },
        right: {
          top: top + (height - height2) / 2 + window.scrollY,
          left: left + width + window.scrollX
        }
      };

      contentWrapper.value.style.top = positions[position].top + "px";
      contentWrapper.value.style.left = positions[position].left + "px";
    };

    let onClickDocument = e => {
      if (
        popoverWrapper &&
        (popoverWrapper.value.contains(e.target) ||
          popoverWrapper.value === e.target)
      ) {
        return;
      }
      if (
        contentWrapper &&
        (contentWrapper.value.contains(e.target) || contentWrapper === e.target)
      ) {
        return;
      }

      close();
    };

    let onPopoverClick = e => {
      if (!triggerWrapper.value.contains(e.target)) return;
      if (visible.value === true) {
        close();
      } else {
        open();
      }
    };

    onMounted(() => {
      if (trigger === "click") {
        popoverWrapper.value.addEventListener("click", onPopoverClick);
      } else if (trigger === "hover") {
        console.log("hover");
        popoverWrapper.value.addEventListener("mouseenter", open);
        popoverWrapper.value.addEventListener("mouseleave", close);
      }
    });
    onUnmounted(() => {
      if (trigger === "click") {
        popoverWrapper.value.removeEventListener("click", onPopoverClick);
      } else if (trigger === "hover") {
        console.log("hover");
        popoverWrapper.value.removeEventListener("mouseenter", open);
        popoverWrapper.value.removeEventListener("mouseleave", close);
      }
    });

    return {
      visible,
      contentWrapper,
      triggerWrapper,
      popoverWrapper,
      close
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.simple-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .trigger-wrapper {
    display: inline-block;
  }
}
.content-wrapper {
  border: 1px solid red;
  padding: 8px 16px;
  position: absolute;
  background: white;
  max-width: 20em;
  padding: 0.5em 1em;
  word-break: break-all;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      border-bottom: none;
      top: 100%;
    }
    &::after {
      border-top-color: white;
      border-bottom: none;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
    }
    &::before {
      border-bottom-color: black;
      border-top: none;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      border-top: none;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;

    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-left-color: black;
      border-right: none;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      border-right: none;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;

    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-right-color: black;
      border-left: none;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      border-left: none;
      right: calc(100% - 1px);
    }
  }
}
</style>