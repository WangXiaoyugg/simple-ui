<template>
  <div>Button 示例</div>
  <section>
    <h2>示例1</h2>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </section>
  <section>
    <h2>示例2</h2>
    <div>
      <Button>你好</Button>
      <Button size="big">你好</Button>
      <Button size="small">你好</Button>
    </div>
    <div>
      <Button theme="link">你好</Button>
      <Button size="big" theme="link">你好</Button>
      <Button size="small" theme="link">你好</Button>
    </div>
    <div>
      <Button theme="text">你好</Button>
      <Button size="big" theme="text">你好</Button>
      <Button size="small" theme="text">你好</Button>
    </div>
  </section>
  <section>
    <h2>示例3</h2>
    <div>
      <Button>你好</Button>
      <Button size="big" level="main">你好</Button>
      <Button size="small" level="danger">你好</Button>
    </div>
    <div>
      <Button theme="link">你好</Button>
      <Button size="big" theme="link" level="main">你好</Button>
      <Button size="small" theme="link" level="danger">你好</Button>
    </div>
    <div>
      <Button theme="text">你好</Button>
      <Button size="big" theme="text" level="main">你好</Button>
      <Button size="small" theme="text" level="danger">你好</Button>
    </div>
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