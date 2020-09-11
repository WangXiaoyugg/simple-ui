<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { provide, onMounted } from "vue";
import mitt from "mitt";
export default {
  name: "Collapse",
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  setup(props, context) {
    let eventBus = mitt();
    console.log(context);

    provide("eventBus", eventBus);

    onMounted(() => {
      eventBus.emit("update:selected", props.selected);

      eventBus.on("update:addSelected", name => {
        let selectedCopy = JSON.parse(JSON.stringify(props.selected));

        if (props.single) {
          selectedCopy = [name];
        } else {
          selectedCopy.push(name);
        }
        eventBus.emit("update:selected", selectedCopy);
        console.log("selectedCopy:", selectedCopy);
        context.emit("update:selected", selectedCopy);
      });

      eventBus.on("update:removeSelected", name => {
        let selectedCopy = JSON.parse(JSON.stringify(props.selected));
        let index = selectedCopy.indexOf(name);
        selectedCopy.splice(index, 1);
        eventBus.emit("update:selected", selectedCopy);
        context.emit("update:selected", selectedCopy);
      });
    });

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