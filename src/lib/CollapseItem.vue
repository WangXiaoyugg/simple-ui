<template>
  <div class="collpase-item">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, inject, onMounted } from "vue";
import { Emitter } from "mitt";
export default {
  name: "CollapseItem",
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(props, context) {
    let open = ref<Boolean>(false);
    let eventBus = inject<Emitter>("eventBus");
    onMounted(() => {
      eventBus &&
        eventBus.on("update:selected", names => {
          console.log("names", names);
          if (names.includes(props.name)) {
            open.value = true;
          } else {
            open.value = false;
          }
        });
    });

    let toggle = () => {
      if (open.value) {
        eventBus && eventBus.emit("update:removeSelected", props.name);
      } else {
        eventBus && eventBus.emit("update:addSelected", props.name);
      }
    };
    return {
      open,
      toggle
    };
  }
};
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collpase-item {
  > .title {
    padding: 0 8px;
    min-height: 32px;
    display: flex;
    align-items: center;
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    cursor: pointer;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>