<template>
  <div>Button 示例</div>
  <section>
    <h2>示例1</h2>
    <Button @click="onClick">普通</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接</Button>
    <Button theme="text">文本</Button>
  </section>
  <section>
    <h2>示例2</h2>
    <div>
      <Button>普通</Button>
      <Button size="big">大按钮</Button>
      <Button size="small">小按钮</Button>
    </div>
    <div>
      <Button theme="link">链接</Button>
      <Button size="big" theme="link">大链接</Button>
      <Button size="small" theme="link">小链接</Button>
    </div>
    <div>
      <Button theme="text">文本</Button>
      <Button size="big" theme="text">大文本</Button>
      <Button size="small" theme="text">小文本</Button>
    </div>
  </section>
  <section>
    <h2>示例3</h2>
    <div>
      <Button>普通</Button>
      <Button size="big" level="main">主要</Button>
      <Button size="small" level="danger">危险</Button>
    </div>
    <div>
      <Button theme="link">链接</Button>
      <Button size="big" theme="link" level="main">主要</Button>
      <Button size="small" theme="link" level="danger">危险</Button>
    </div>
    <div>
      <Button theme="text">文本</Button>
      <Button size="big" theme="text" level="main">主要</Button>
      <Button size="small" theme="text" level="danger">危险</Button>
    </div>
  </section>
  <section>
    <h2>示例4</h2>
    <Button disabled @click="onClick">禁用</Button>
    <Button theme="link" :disabled="true">禁用</Button>
    <Button theme="text" disabled>禁用</Button>
  </section>
  <section>
    <h2>示例5</h2>
    <Button loading size="big">加载中</Button>
    <Button :loading="true" size="small">加载中</Button>
    <Button loading>加载中</Button>
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

<style lang="scss" scoped>
section {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 10px 20px;
}
</style>