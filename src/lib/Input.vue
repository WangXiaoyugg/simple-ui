<template>
  <div class="simple-input-wrapper" :class="{error}">
    <input type="text" 
      class="input" 
      :value="value" 
      :disabled="disabled" 
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="onInput"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      
    />
    <template v-if="error">
      <icon class="icon-error" name="error"></icon><span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script lang="ts">
import Icon from "./Icon.vue";
export default {
  name: "SimpleInput",
  components: {
    Icon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  setup(props, context) {
    const onInput = (e) => {
      context.emit('input', e.target.value)
      context.emit('update:value', e.target.value)

    }
    return {
      onInput,
    };
  }
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1435d;
.simple-input-wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {margin-right: .5em;}
  > .input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    background: white;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > .input {
      border-color: $red;
      color: $red;
    }
  }

  .error-message {
    color: $red;
  }
  .icon-error {
    color: $red;
  }
  
}
</style>