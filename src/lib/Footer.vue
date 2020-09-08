<template>
  <div class="simple-footer" :style="{height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SimpleFooter",
  props: {
    height: {
      type: String,
      default: "60px"
    }
  }
};
</script>

<style lang="scss" scoped>
.simple-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
</style>