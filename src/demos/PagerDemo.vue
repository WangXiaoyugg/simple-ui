<template>
  <div>
    <h1>Pager示例</h1>
    <section>
      <h2>示例1</h2>
      <s-pager :totalPage="20" v-model:currentPage="currentPage" @change="onPagerChange"></s-pager>
    </section>
    <section>
      <h2>示例2</h2>
      <p>totalPage为1时不显示pager</p>
      <s-pager :totalPage="1" :currentPage="1"></s-pager>
    </section>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import SPager from "../lib/Pager.vue";

export default {
  components: {
    SPager
  },
  setup(props, context) {
    const onPagerChange = currentPage => {
      console.log("currentPage", currentPage);
    };
    const currentPage = ref(3);
    return {
      onPagerChange,
      currentPage
    };
  }
};
</script>

<style scoped lang="scss">
section {
  margin: 20px 0;
  > h2 {
    margin-bottom: 10px;
  }
}
</style>