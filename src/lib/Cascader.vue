<template>
  <div class="cascader">
    <div class="trigger" @click="toggle">{{result|| '&nbsp;'}}</div>
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
      context.emit("update:selected", newSelected);
    };
    const result = computed(() => {
      return props.selected.map(item => item.name).join("/");
    });
    return {
      popoverVibsile,
      toggle,
      updateSelected,
      result
    };
  }
};
</script>

<style scoped lang="scss">
$border-radius: 4px;
.cascader {
  position: relative;
  > .trigger {
    height: 32px;
    display: inline-flex;
    padding: 0.2em 1em;
    min-width: 10em;
    border: 1px solid grey;
    border-radius: $border-radius;
  }
  > .popover {
    position: absolute;
    top: 100%;
    margin-top: 6px;
    left: 0;
    background: white;
    height: 200px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    overflow: auto;
  }
}
</style>