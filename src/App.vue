<template>
  <router-view></router-view>
</template>

<script>
import Garen from "./components/Garen.vue";
import { ref, provide } from "vue";

export default {
  name: "App",
  components: {
    Garen
  },
  setup() {
    const documentWidth = document.documentElement.clientWidth;
    const asideVisible = ref(documentWidth < 500 ? false : true);
    provide("asideVisible", asideVisible);
  }
};
</script>
