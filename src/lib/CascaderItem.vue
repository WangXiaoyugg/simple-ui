<template>
  <div class="cascader-item">
    {{sourceItem.name}}
    <cascader-item
      v-for="item in sourceItem.children"
      v-if="sourceItem.children"
      :sourceItem="item"
    ></cascader-item>
  </div>
</template>

<script lang="ts">
export default {
  name: "CascaderItem",
  props: {
    sourceItem: {
      type: Object
    }
  },
  setup() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.cascader-item {
  border: 1px solid red;
  margin: 10px;
}
</style>