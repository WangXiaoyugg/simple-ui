<template>
  <h1>popover 示例</h1>
  <section>
    <h2>示例1</h2>
    <Popover>
      <template v-slot:content>Hello Popover</template>
      <button>点我</button>
    </Popover>
    <Popover>
      <template v-slot:content>Hello Popover</template>
      <button>点我</button>
    </Popover>
  </section>
</template>

<script lang="ts">
import Popover from "../lib/Popover.vue";
export default {
  components: {
    Popover
  }
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  margin: 20px 0;
  > h2 {
    margin-bottom: 20px;
  }
}
</style>