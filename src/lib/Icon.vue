<template>
  <i :style="style">
    <svg class="simple-icon" @click="onClick">
      <use :xlink:href="`#icon-${name}`" />
    </svg>
  </i>
</template>

<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    style: {
      type: Object
    }
  },
  setup(props, context) {
    const onClick = e => {
      context.emit("click", e);
    };
    return {
      onClick
    };
  }
};
</script>

<style lang="scss" scoped>
.simple-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
  fill: currentColor;
}
</style>