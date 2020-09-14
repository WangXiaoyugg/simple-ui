<template>
  <div>
    <h1>Pager示例</h1>
    <section>
      <h2>示例1</h2>
      <s-pager :totalPage="20" :currentPage="3" @change="onPagerChange"></s-pager>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SPager from "../lib/Pager.vue";

export default {
  components: {
    SPager
  },
  setup(props, context) {
    const onPagerChange = () => {};
    return {
      onPagerChange
    };
  }
};
</script>

<style scoped>
</style>