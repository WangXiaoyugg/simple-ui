<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: {
    Topnav
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return {
      asideVisible
    };
  }
};
</script>


<style scoped lang="scss">
aside {
  background: skyblue;
  width: 150px;
  padding: 16px;

  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    li {
      padding: 4px 0;
    }
  }
  @media (width: 500px) {
    aside {
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 70px;
    }
  }
}
</style>