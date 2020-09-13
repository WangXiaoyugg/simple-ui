<template>
  <div class="cascader">
    <div class="trigger" @click="toggle">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVibsile">
      <cascader-item
        :items="dataSource"
        :height="popoverHeight"
        :selected="selected"
        @update:selected="updateSelected"
      ></cascader-item>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import CascaderItem from "./CascaderItem.vue";
export default {
  name: "Cascader",
  props: {
    dataSource: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CascaderItem
  },
  setup(props, context) {
    const popoverVibsile = ref(false);
    const toggle = () => {
      popoverVibsile.value = !popoverVibsile.value;
    };
    const updateSelected = newSelected => {
      console.log("newSelected:", newSelected);
      context.emit("update:selected", newSelected);
    };
    return {
      popoverVibsile,
      toggle,
      updateSelected
    };
  }
};
</script>

<style scoped lang="scss">
.cascader {
  position: relative;
  > .trigger {
    height: 32px;
    width: 200px;
    border: 1px solid #666;
  }
  > .popover {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    height: 200px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  }
}
</style>