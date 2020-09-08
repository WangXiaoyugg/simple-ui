<template>
  <div class="simple-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SimpleContent"
};
</script>

<style lang="scss" scoped>
.simple-content {
  flex-grow: 1;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>