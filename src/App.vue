<template>
  <div>
    导航栏 |
    <router-link to="/">Garen</router-link>|
    <router-link to="/xxx">Garen2</router-link>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
import Garen from "./components/Garen.vue";

export default {
  name: "App",
  components: {
    Garen
  }
};
</script>
