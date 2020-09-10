<template>
  <h1>Collapse 示例</h1>
  <section>
    <h2>示例1</h2>
    <s-collapse>
      <s-collapse-item title="标题1">内容1</s-collapse-item>
      <s-collapse-item title="标题2">内容2</s-collapse-item>
      <s-collapse-item title="标题3">内容3</s-collapse-item>
    </s-collapse>
  </section>
</template>

<script lang="ts">
import SCollapse from "../lib/Collapse.vue";
import SCollapseItem from "../lib/CollapseItem.vue";

export default {
  components: {
    SCollapse,
    SCollapseItem
  },
  setup() {
    return {};
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