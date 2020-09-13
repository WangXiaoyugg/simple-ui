<template>
  <h1>Cascader示例</h1>
  <section>
    <h2>示例1</h2>
    <Cascader :dataSource="dataSource" popoverHeight="200px" v-model:selected="selected"></Cascader>
  </section>
  <section>
    <h2>示例2</h2>
    <Cascader
      :dataSource="dataSource1"
      popoverHeight="200px"
      v-model:selected="selected1"
      @update:selected="onUpdateSelected"
    ></Cascader>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import Cascader from "../lib/Cascader.vue";
import db from "../db/index";

function ajax(parent_id = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id === parent_id);

      resolve(result);
    }, 2000);
  });
}

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
    const dataSource1 = ref([]);
    const selected = ref([]);
    const selected1 = ref([]);

    onMounted(() => {
      ajax().then(result => {
        dataSource1.value = result;
      });
    });

    const onUpdateSelected = () => {
      console.log(selected1.value[0].id);
      ajax(selected1.value[0].id).then(result => {
        let lastSelected = dataSource1.value.filter(
          item => item.id === selected1.value[0].id
        )[0];
        lastSelected.children = result;
        // dataSource1[0].children = result;
      });
    };

    return {
      dataSource,
      selected,
      selected1,
      dataSource1,
      onUpdateSelected
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 30px;
}
</style>