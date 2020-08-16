<template>
  <router-view></router-view>
</template>

<script>
import { ref, provide } from "vue";
import { router } from "./router";

export default {
  name: "App",
  setup() {
    const documentWidth = document.documentElement.clientWidth;
    const asideVisible = ref(documentWidth <= 500 ? false : true);
    provide("asideVisible", asideVisible);
    router.afterEach(() => {
      if (documentWidth <= 500) {
        asideVisible.value = false;
      }
    });
  }
};
</script>
