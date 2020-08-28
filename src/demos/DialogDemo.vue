<template>
  <h1>Dialog 示例</h1>
  <section>
    <h2>示例1</h2>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :overlayClosable="false" :ok="fn1" :cancel="fn2">
      <template v-slot:content>
        <div>Hello World</div>
        <div>Today is good</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
  </section>
  <section>
    <h2>示例2</h2>
    <Button @click="open">open</Button>
  </section>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/Dialog";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const fn1 = () => {
      return false;
    };
    const fn2 = () => {};

    const open = () => {
      openDialog({
        title: "Hi dialog",
        content: "Dialog Content...",
        overlayClosable: false,
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        }
      });
    };
    return {
      x,
      toggle,
      fn1,
      fn2,
      open
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 20px;
}
section {
  border: 1px solid #fff;
  padding: 10px 20px;
  margin-bottom: 16px;
  border-radius: 4px;

  > h2 {
    margin-bottom: 10px;
  }
}
</style>