<template>
  <div class="simple-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "SimpleLayout",
  setup(props, context) {
    const layoutClass = reactive({ hasAside: false });
    const children = context.slots.default();
    children.forEach(child => {
      if (child.type.name === "SimpleAside") {
        layoutClass.hasAside = true;
      }
    });
    return {
      layoutClass
    };
  }
};
</script>

<style lang="scss" scoped>
.simple-layout {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  &.hasAside {
    flex-direction: row;
  }
}
</style>