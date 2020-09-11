<template>
  <h1>Collapse 示例</h1>
  <section>
    <h2>示例1</h2>
    <s-collapse v-model:selected="selectedTab1">
      <s-collapse-item name="1" title="标题1">内容1</s-collapse-item>
      <s-collapse-item name="2" title="标题2">内容2</s-collapse-item>
      <s-collapse-item name="3" title="标题3">内容3</s-collapse-item>
    </s-collapse>
  </section>
  <section>
    <h2>示例2</h2>
    <s-collapse v-model:selected="selectedTab2">
      <s-collapse-item name="1" title="标题1">内容1</s-collapse-item>
      <s-collapse-item name="2" title="标题2">内容2</s-collapse-item>
      <s-collapse-item name="3" title="标题3">内容3</s-collapse-item>
    </s-collapse>
  </section>
  <section>
    <h2>示例3</h2>
    <s-collapse v-model:selected="selectedTab3" single>
      <s-collapse-item name="1" title="标题1">内容1</s-collapse-item>
      <s-collapse-item name="2" title="标题2">内容2</s-collapse-item>
      <s-collapse-item name="3" title="标题3">内容3</s-collapse-item>
    </s-collapse>
  </section>
</template>

<script lang="ts">
import SCollapse from "../lib/Collapse.vue";
import SCollapseItem from "../lib/CollapseItem.vue";
import { ref } from "vue";

export default {
  components: {
    SCollapse,
    SCollapseItem
  },
  setup() {
    let selectedTab1 = ref([]);
    let selectedTab2 = ref(["1", "2"]);
    let selectedTab3 = ref(["1", "3"]);
    return {
      selectedTab1,
      selectedTab2,
      selectedTab3
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  margin: 20px 0;
  > h2 {
    margin-bottom: 10px;
  }
}
</style>