<template>
  <div>
    <h1>容器组件示例</h1>
    <section>
      <h2>示例1</h2>
      <s-layout>
        <s-header>Header</s-header>
        <s-content>Content</s-content>
        <s-footer>Footer</s-footer>
      </s-layout>
    </section>

    <section>
      <h2>示例2</h2>
      <s-layout>
        <s-header height="80px">Header</s-header>
        <s-layout>
          <s-aside width="200px">Aside</s-aside>
          <s-content>Content</s-content>
        </s-layout>
        <s-footer>Footer</s-footer>
      </s-layout>
    </section>

    <section>
      <h2>示例3</h2>
      <s-layout>
        <s-header height="80px">Header</s-header>
        <s-layout>
          <s-content>Content</s-content>
          <s-aside width="200px">Aside</s-aside>
        </s-layout>
        <s-footer>Footer</s-footer>
      </s-layout>
    </section>

    <section>
      <h2>示例4</h2>
      <s-layout>
        <s-aside width="200px">Aside</s-aside>

        <s-layout>
          <s-header height="80px">Header</s-header>
          <s-content>Content</s-content>
          <s-footer>Footer</s-footer>
        </s-layout>
      </s-layout>
    </section>
  </div>
</template>

<script>
import SLayout from "../lib/Layout.vue";
import SHeader from "../lib/Header.vue";
import SFooter from "../lib/Footer.vue";
import SContent from "../lib/Content.vue";
import SAside from "../lib/Aside.vue";
export default {
  components: {
    SLayout,
    SHeader,
    SFooter,
    SContent,
    SAside
  }
};
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 20px;
  div {
    text-align: center;
  }
}
</style>