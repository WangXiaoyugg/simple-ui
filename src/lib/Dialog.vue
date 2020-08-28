<template>
  <div class="overlay"></div>
  <div class>
    <header>这是标题</header>
    <main>
      <p>第一行文字</p>
      <p>第二行文字</p>
    </main>
    <footer>
      <Button>取消</Button>
      <Button>确定</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: {
    Button
  }
};
</script>