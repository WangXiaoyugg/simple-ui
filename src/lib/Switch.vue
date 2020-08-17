<template>
  <button class="simple-switch" :class="{'simple-checked':value}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.simple-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #dddfe5;
  border-radius: $h / 2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: #fff;
    border-radius: $h / 2;
    transition: left 0.25s;
  }
  &.simple-checked {
    background: #5a9df8;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active > span {
    width: $h2 + 4px;
  }
  &.simple-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>