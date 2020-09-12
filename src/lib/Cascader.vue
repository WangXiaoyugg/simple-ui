<template>
  <div class="cascader">
    <div class="trigger" @click="toggle">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVibsile">
      <div class="panel">
        <div v-for="item in dataSource">
          <div @click="level1Selected=item">{{item.name}}</div>
        </div>
      </div>
      <div class="panel">
        <div v-for="item in level2Items">
          <div @click="level2Selected=item">{{item.name}}</div>
        </div>
      </div>
      <div class="panel">
        <div v-for="item in level3Items">
          <div>{{item.name}}</div>
        </div>
      </div>
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
    const level1Selected = ref({});
    const level2Selected = ref({});
    const level2Items = computed(() => {
      if (level1Selected.value.children) {
        return level1Selected.value.children;
      } else {
        return [];
      }
    });
    const level3Items = computed(() => {
      if (level2Selected.value.children) {
        return level2Selected.value.children;
      } else {
        return [];
      }
    });
    const toggle = () => {
      popoverVibsile.value = !popoverVibsile.value;
    };
    return {
      popoverVibsile,
      toggle,
      level1Selected,
      level2Selected,
      level2Items,
      level3Items
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
    display: flex;
    flex-wrap: nowrap;

    > .panel {
      border: 1px solid black;
    }
  }
}
</style>