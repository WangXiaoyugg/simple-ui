<template>
  <div>Button 示例</div>
  <section>
    <h2>示例1</h2>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </section>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  },
  setup() {
    const onClick = () => {
      console.log("click");
    };
    return { onClick };
  }
};
</script>