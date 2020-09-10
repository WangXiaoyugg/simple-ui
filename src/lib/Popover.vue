<template>
  <div class="simple-popover" ref="popoverWrapper" @click="onPopoverClick">
    <div
      class="content-wrapper"
      :class="{[`position-${position}`]:true}"
      ref="contentWrapper"
      v-if="visible"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="trigger-wrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { ref, nextTick } from "vue";

export default {
  name: "SimplePopover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].includes(value);
      }
    }
  },
  setup(props, context) {
    let contentWrapper = ref<HTMLDivElement>(null);
    let triggerWrapper = ref<HTMLDivElement>(null);
    let popoverWrapper = ref<HTMLDivElement>(null);
    let visible = ref(false);

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

      if (position === "top") {
        contentWrapper.value.style.top = top + window.scrollY + "px";
        contentWrapper.value.style.left = left + window.scrollX + "px";
      } else if (position === "bottom") {
        contentWrapper.value.style.top = top + height + window.scrollY + "px";
        contentWrapper.value.style.left = left + window.scrollX + "px";
      } else if (position === "left") {
        contentWrapper.value.style.top =
          top + (height - height2) / 2 + window.scrollY + "px";
        contentWrapper.value.style.left = left + window.scrollX + "px";
      } else if (position === "right") {
        contentWrapper.value.style.top =
          top + (height - height2) / 2 + window.scrollY + "px";
        contentWrapper.value.style.left = left + width + window.scrollX + "px";
      }
    };

    let onClickDocument = e => {
      if (
        (popoverWrapper && popoverWrapper.value.contains(e.target)) ||
        popoverWrapper.value === e.target
      ) {
        return;
      }
      if (
        (contentWrapper && contentWrapper.value.contains(e.target)) ||
        contentWrapper === e.target
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

    return {
      visible,
      onPopoverClick,
      contentWrapper,
      triggerWrapper,
      popoverWrapper
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
      top: 100%;
    }
    &::after {
      border-top-color: white;
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
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
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
      left: 100%;
    }
    &::after {
      border-left-color: white;
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
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>