<template>
  <h1>Input 示例</h1>
  <section>
    <h2>示例1</h2>
    <s-input value="张三" class="input"></s-input>
    <s-input value="李四" disabled class="input"></s-input>
    <s-input value="王五" readonly class="input"></s-input>
  </section>
  <section>
    <h2>示例2</h2>
    <s-input value="张" error="姓名不能少于2个字"></s-input>
  </section>
  <section>
    <h2>示例3</h2>
    <s-input value="" @change="onChange" @focus="onFocus" @blur="onBlur" @input="onInput"></s-input>
  </section>
  <section>
    <h2>示例4</h2>
    <s-input v-model:value="message" @input="onMessageChange"></s-input>
    <p>{{message}}</p>
    <button @click="modify">修改</button>
  </section>
</template>

<script lang="ts">
import {ref} from 'vue'
import SInput from "../lib/Input.vue";
export default {
  components: {
    SInput
  },
  setup() {
    const message = ref('hello world')

    const onChange = (e) => {
      console.log('onChange:', e.target.value)
    }
    const onInput = (e) => {
      console.log('onInput:', e.target.value)
    }
    const onFocus = (e) => {
      console.log('onFocus:', e.target.value)
    }
    const onBlur = (e) => {
      console.log('onBlur:', e.target.value)
    }

    const onMessageChange= (e) => {
      console.log("onMessageChange:", message.value)
    }
    const modify = () => {
      message.value = 'update success'
    }
    return {
      onChange,
      onInput,
      onFocus,
      onBlur,
      message,
      onMessageChange,
      modify,
    };
  }
};
</script>

<style lang="scss" scoped>
.input {
  margin-right: .5em;
}
</style>