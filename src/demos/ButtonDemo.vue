<template>
  <div>Button 示例</div>
  <section>
    <h2>示例1</h2>
    <Button @click="onClick" @focus="onClick" @mouseover="onClick" size="large">你好</Button>
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