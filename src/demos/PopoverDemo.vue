<template>
  <h1>popover 示例</h1>
  <section>
    <h2>示例1</h2>
    <Popover>
      <template v-slot:content="{close}">
        <div>Hello Popover</div>
        <Button @click="close">关闭</Button>
      </template>
      <Button>上</Button>
    </Popover>
    <Popover position="bottom">
      <template v-slot:content>Hello Popover</template>
      <Button>下</Button>
    </Popover>
    <Popover position="left">
      <template v-slot:content>Hello Popover</template>
      <Button>左</Button>
    </Popover>
    <Popover position="right">
      <template v-slot:content>Hello Popover</template>
      <Button>右</Button>
    </Popover>
  </section>

  <section>
    <h2>示例2</h2>
    <Popover position="left" trigger="hover">
      <template v-slot:content>Hello Popover</template>
      <Button>左</Button>
    </Popover>
    <Popover position="right" trigger="hover">
      <template v-slot:content>Hello Popover</template>
      <Button>右</Button>
    </Popover>
    <Popover position="top" trigger="hover">
      <template v-slot:content>Hello Popover</template>
      <Button>上</Button>
    </Popover>
    <Popover position="bottom" trigger="hover">
      <template v-slot:content>Hello Popover</template>
      <Button>下</Button>
    </Popover>
  </section>
</template>

<script lang="ts">
import Popover from "../lib/Popover.vue";
import Button from "../lib/Button.vue";
export default {
  components: {
    Popover,
    Button
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
  .simple-btn {
    margin: 0 4px;
  }
}
</style>