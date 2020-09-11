<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { provide } from "vue";
import mitt from "mitt";
export default {
  name: "Collapse",
  props: {
    single: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    let eventBus = mitt();
    if (props.single) {
      provide("eventBus", eventBus);
    }
    return {};
  }
};
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>