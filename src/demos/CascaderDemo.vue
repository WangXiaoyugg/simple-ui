<template>
  <h1>Cascader示例</h1>
  <section>
    <h2>示例1</h2>
    <p>{{selected}}</p>
    <Cascader
      :dataSource="dataSource"
      popoverHeight="200px"
      :selected="selected"
      @update:selected="selected = $event"
    ></Cascader>
  </section>
</template>

<script>
import { ref } from "vue";
import Cascader from "../lib/Cascader.vue";
export default {
  components: {
    Cascader
  },
  setup() {
    const dataSource = ref([
      {
        name: "安徽",
        children: [
          { name: "合肥", children: [{ name: "蜀山" }, { name: "包河" }] },
          { name: "芜湖", children: [{ name: "湾沚" }, { name: "鸠江" }] }
        ]
      },
      {
        name: "江苏",
        children: [
          { name: "南京", children: [{ name: "玄武" }, { name: "青浦" }] },
          { name: "苏州", children: [{ name: "姑苏" }, { name: "昆山" }] }
        ]
      },
      {
        name: "浙江",
        children: [
          { name: "杭州", children: [{ name: "西湖" }, { name: "萧山" }] }
        ]
      }
    ]);
    const selected = ref([]);

    return {
      dataSource,
      selected
    };
  }
};
</script>

<style lang="scss" scoped>
</style>