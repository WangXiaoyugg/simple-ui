<template>
  <div class="cascader">
    <div class="trigger" @click="toggle">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVibsile">
      <cascader-item :items="dataSource"></cascader-item>
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
    }
  },
  components: {
    CascaderItem
  },
  setup() {
    const popoverVibsile = ref(false);
    const toggle = () => {
      popoverVibsile.value = !popoverVibsile.value;
    };
    return {
      popoverVibsile,
      toggle
    };
  }
};
</script>

<style scoped lang="scss">
.cascader {
  > .trigger {
    height: 32px;
    width: 200px;
    border: 1px solid red;
  }
  > .popover {
    height: 200px;
    border: 1px solid green;
  }
}
</style>