<template>
  <h1>Icon 示例</h1>
  <section>
    <h2>示例1</h2>
    <s-icon name="left-arrow"></s-icon>
    <s-icon name="right-arrow"></s-icon>
    <s-icon name="loading"></s-icon>
  </section>

  <section>
    <h2>示例2</h2>
    <s-icon name="left-arrow" :style="{fontSize: '20px'}"></s-icon>
    <s-icon name="right-arrow" :style="{fontSize: '32px', color: 'red'}"></s-icon>
    <s-icon name="loading" :style="{fontSize: '32px', color: 'green'}"></s-icon>
  </section>
</template>

<script lang="ts">
import SIcon from "../lib/Icon.vue";
export default {
  components: {
    SIcon
  }
};
</script>

<style lang="scss" scoped>
</style>