<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot />
  </div>
</template>

<script>
import { provide, computed } from "vue";
export default {
  name: "SimpleRow",
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator(value) {
        return ["left", "right", "center"].includes(value);
      }
    }
  },
  setup(props, ctx) {
    const rowStyle = computed(() => {
      let { gutter } = props;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px"
      };
    });
    const rowClass = computed(() => {
      let { align } = props;
      return [align && `align-${align}`];
    });
    provide("gutter", props.gutter);
    return {
      rowStyle,
      rowClass
    };
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>