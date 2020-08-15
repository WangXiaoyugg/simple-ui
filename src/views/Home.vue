<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>简单UI</h1>
      <h2>一个非常简单的UI框架</h2>
      <p class="actions">
        <a href>GitHub</a>
        <a href>开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav
  }
};
</script>


<style scoped lang="scss">
</style>