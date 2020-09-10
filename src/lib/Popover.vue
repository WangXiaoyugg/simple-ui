<template>
  <div class="simple-popover" ref="popoverWrapper" @click="onPopoverClick">
    <div class="content-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { ref, nextTick } from "vue";

export default {
  name: "SimplePopover",
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
      let {
        top,
        left,
        width,
        height
      } = triggerWrapper.value.getBoundingClientRect();
      contentWrapper.value.style.top = top + window.scrollY + "px";
      contentWrapper.value.style.left = left + window.scrollY + "px";
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
.simple-popover {
  display: inline-block;
  position: relative;
}
.content-wrapper {
  border: 1px solid red;
  padding: 8px 16px;
  position: absolute;
  transform: translateY(-100%);
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  z-index: 1;
}
</style>