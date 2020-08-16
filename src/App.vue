<template>
  <router-view></router-view>
</template>

<script>
import { ref, provide } from "vue";

export default {
  name: "App",
  setup() {
    const documentWidth = document.documentElement.clientWidth;
    const asideVisible = ref(documentWidth < 500 ? false : true);
    provide("asideVisible", asideVisible);
  }
};
</script>
