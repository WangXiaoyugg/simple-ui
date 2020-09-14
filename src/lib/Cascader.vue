<template>
  <div class="cascader" v-click-outside="close">
    <div class="trigger" @click="toggle">{{result|| '&nbsp;'}}</div>
    <div class="popover" v-if="popoverVibsile">
      <cascader-item
        :items="dataSource"
        :height="popoverHeight"
        :selected="selected"
        @update:selected="updateSelected"
        :loadData="loadData"
        :loadingItem="loadingItem"
      ></cascader-item>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
import CascaderItem from "./CascaderItem.vue";
import ClickOutside from "./click-outside.js";
export default {
  name: "Cascader",
  directives: {
    ClickOutside
  },
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
    },
    loadData: {
      type: Function
    }
  },
  components: {
    CascaderItem
  },
  setup(props, context) {
    const popoverVibsile = ref(false);
    const loadingItem = ref({});
    const toggle = () => {
      popoverVibsile.value = !popoverVibsile.value;
    };
    const close = () => {
      popoverVibsile.value = false;
    };

    const updateSelected = newSelected => {
      context.emit("update:selected", newSelected);
      let lastItem = newSelected[newSelected.length - 1];
      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0];
      };
      let complex = (children, id) => {
        let noChildren = [];
        let hasChildren = [];
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item);
          } else {
            noChildren.push(item);
          }
        });
        let found = simplest(noChildren, id);
        if (found) {
          return found;
        } else {
          found = simplest(hasChildren, id);
          if (found) {
            return found;
          } else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          }
        }
      };

      let updateSource = result => {
        console.log("result:", result);
        loadingItem.value = {};
        let copy = JSON.parse(JSON.stringify(props.dataSource));
        let toUpdate = complex(copy, lastItem.id);
        toUpdate.children = result;
        context.emit("update:dataSource", copy);
      };

      if (!lastItem.isLeaf && props.loadData) {
        props.loadData(lastItem, updateSource);
        loadingItem.value = lastItem;
      }
    };
    const result = computed(() => {
      return props.selected.map(item => item.name).join("/");
    });
    return {
      popoverVibsile,
      toggle,
      updateSelected,
      result,
      close,
      loadingItem
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
    z-index: 1;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  }
}
</style>