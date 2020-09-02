<template>
  <div>Tabs 示例</div>
  <section>
    <h1>示例1</h1>
    <Tabs v-model:selected="x">
      <Tab title="导航1">内容1</Tab>
      <Tab title="导航2222">内容2</Tab>
    </Tabs>
  </section>
</template>

<script>
import { ref } from "vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
export default {
  name: "TabsDemo",
  components: {
    Tab,
    Tabs
  },
  setup() {
    const x = ref("导航1");
    return {
      x
    };
  }
};
</script>