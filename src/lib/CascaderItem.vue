<template>
  <div class="cascader-item" :style="{height:height}">
    <div class="left">
      <div v-for="item in items" class="label" @click="onClickLabel(item)">
        <span class="name">{{item.name}}</span>
        <svg
          v-if="rightArrowVisible(item)"
          class="icon"
          t="1599908965403"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3378"
          width="32"
          height="32"
        >
          <path
            d="M648.817778 479.004444l-293.831111-284.444444a31.004444 31.004444 0 0 0-40.96 0A26.737778 26.737778 0 0 0 312.888889 233.244444l280.177778 269.653334a16.497778 16.497778 0 0 1 0 23.893333L312.888889 796.444444a26.737778 26.737778 0 0 0 0 37.546667 31.004444 31.004444 0 0 0 40.96 0l293.831111-284.444444a49.493333 49.493333 0 0 0 1.137778-70.542223z"
            p-id="3379"
          />
        </svg>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item
        :items="rightItems"
        :height="height"
        :selected="selected"
        :level="level+1"
        @update:selected="updateSelected"
      ></cascader-item>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
export default {
  name: "CascaderItem",
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    },
    loadData: {
      type: Function
    }
  },
  setup(props, context) {
    const leftSelected = ref(null);
    const rightItems = computed(() => {
      if (props.selected[props.level]) {
        let selected = props.items.filter(
          item => item.name === props.selected[props.level].name
        );
        if (
          selected &&
          selected[0].children &&
          selected[0].children.length > 0
        ) {
          return selected[0].children;
        }
      }
    });

    const onClickLabel = item => {
      const copy = JSON.parse(JSON.stringify(props.selected));
      copy[props.level] = item;
      copy.splice(props.level + 1);
      context.emit("update:selected", copy);
    };
    const updateSelected = newSelected => {
      context.emit("update:selected", newSelected);
    };
    const rightArrowVisible = item => {
      return props.loadData ? !item.isLeaf : item.children;
    };

    return {
      leftSelected,
      rightItems,
      onClickLabel,
      updateSelected,
      rightArrowVisible
    };
  }
};
</script>

<style lang="scss" scoped>
.cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;

  .left {
    height: 100%;
    padding: 0.3em 0;
    overflow: auto;
  }
  .right {
    border-left: 1px solid rgba(152, 152, 152, 0.5);
    height: 100%;
  }
  .label {
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      background: #eee;
    }
    .name {
      margin-right: 1em;
      user-select: none;
    }
    .icon {
      width: 16px;
      height: 16px;
      margin-left: auto;
    }
  }
}
</style>