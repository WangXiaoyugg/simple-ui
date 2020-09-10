<template>
  <div class="simple-popover" @click.stop="toggle">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { ref, nextTick } from "vue";

export default {
  name: "SimplePopover",
  setup(props, context) {
    let visible = ref(false);
    console.log(context);
    let toggle = () => {
      visible.value = !visible.value;
      console.log(visible.value);
      if (visible.value === true) {
        nextTick(() => {
          let eventHandler = () => {
            visible.value = false;
            console.log("start");
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        });
      }
    };

    return {
      visible,
      toggle
    };
  }
};
</script>

<style lang="scss" scoped>
.simple-popover {
  display: inline-block;
  position: relative;
  .content-wrapper {
    border: 1px solid red;
    padding: 8px 16px;
    position: absolute;
    bottom: 100%;
    left: 0;
    background: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
}
</style>