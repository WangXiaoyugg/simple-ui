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
    const asideVisible = ref(false);
    provide("asideVisible", asideVisible);
  }
};
</script>
