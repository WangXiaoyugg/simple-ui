<template>
  <button class="simple-btn" :class="classes" :disabled="disabled">
    <span v-if="loading" class="simple-loading-indicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button"
    },
    size: {
      type: String,
      default: "normal"
    },
    level: {
      type: String,
      default: "normal"
    },
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean
    }
  },
  setup(props, context) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`simple-theme-${theme}`]: theme,
        [`simple-${size}`]: size,
        [`simple-level-${level}`]: level
      };
    });
    return { classes };
  }
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: #ff4d4f;
$grey: rgba(0, 0, 0, 0.25);
.simple-btn {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  white-space: nowrap;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.simple-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    background: none;
    &:hover,
    &:focus {
      color: lighten($blue, 0.1);
    }
  }
  &.simple-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    background: none;
    &:hover,
    &:focus {
      color: darken(white, 0.05);
    }
  }
  &.simple-theme-button {
    &.simple-big {
      height: 40px;
      padding: 8px 16px;
      font-size: 24px;
      border-radius: 2px;
    }
    &.simple-small {
      height: 24px;
      padding: 0 4px;
      font-size: 14px;
      border-radius: 2px;
    }
  }

  &.simple-big {
    height: 40px;
    padding: 8px 16px;
    font-size: 24px;
    border-radius: 2px;
    > .simple-loading-indicator {
      width: 24px;
      height: 24px;
      border-radius: 12px;
    }
  }
  &.simple-small {
    height: 24px;
    padding: 0 4px;
    font-size: 14px;
    border-radius: 2px;
    > .simple-loading-indicator {
      width: 8px;
      height: 8px;
      border-radius: 4px;
    }
  }

  &.simple-theme-button {
    &.simple-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 0.1);
        border-color: darken($blue, 0.1);
      }
    }
    &.simple-level-danger {
      background: $red;
      border-color: $red;
      color: #fff;
      &:focus,
      &:hover {
        background: darken($red, 0.1);
        border-color: darken($red, 0.1);
      }
    }
  }

  &.simple-theme-text {
    &.simple-level-main {
      color: $blue;
      &:hover,
      &:focus {
        border-color: darken($blue, 0.1);
      }
    }
    &.simple-level-danger {
      color: $red;
      &:focus,
      &:hover {
        color: darken($red, 0.1);
      }
    }
  }
  &.simple-theme-link {
    &.simple-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 0.1);
      }
    }
  }

  &.simple-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.simple-theme-link,
  &.simple-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .simple-loading-indicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: simple-spin 1s infinite linear;
  }

  @keyframes simple-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>