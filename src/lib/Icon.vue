<template>
  <i :style="style">
    <svg class="simple-icon">
      <use :xlink:href="`#icon-${name}`" />
    </svg>
  </i>
</template>

<script lang="ts">
import "./svg.js";
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    style: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.simple-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
  fill: currentColor;
}
</style>