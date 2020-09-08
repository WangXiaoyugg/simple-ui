<template>
  <div class="simple-aside" :style="{width}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SimpleAside",
  props: {
    width: {
      type: String,
      default: "300px"
    }
  }
};
</script>

<style lang="scss" scoped>
.simple-aside {
  background-color: #d3dce6;
  text-align: center;
  line-height: 200px;
}
</style>