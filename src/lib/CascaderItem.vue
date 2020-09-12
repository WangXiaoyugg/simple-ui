<template>
  <div class="cascader-item">
    <div class="left">
      <div v-for="item in items">
        <div @click="leftSelected=item">{{item.name}}</div>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item :items="rightItems"></cascader-item>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
export default {
  name: "CascaderItem",
  props: {
    items: {
      type: Array
    }
  },
  setup() {
    const leftSelected = ref(null);
    const rightItems = computed(() => {
      if (leftSelected.value && leftSelected.value.children) {
        return leftSelected.value.children;
      } else {
        return null;
      }
    });
    return {
      leftSelected,
      rightItems
    };
  }
};
</script>

<style lang="scss" scoped>
.cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  .left {
    width: 100px;
    border: 1px solid red;
  }
}
</style>