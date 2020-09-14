<template>
  <div class="simple-pager">
    <span
      class="simple-pager-item"
      :class="{active: page === currentPage, separator: page === '...'}"
      v-for="(page, index) in pages"
    >{{page}}</span>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
const unique = array => {
  let o = {};
  array.forEach(item => {
    o[item] = true;
  });
  return Object.keys(o).map(n => parseInt(n, 10));
};

export default {
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      required: true
    }
  },
  setup(props, context) {
    const { currentPage, totalPage } = props;

    let initPages = [
      1,
      totalPage,
      currentPage,
      currentPage - 1,
      currentPage - 2,
      currentPage + 1,
      currentPage + 2
    ];

    let uniqPages = unique(initPages.sort((a, b) => a - b).filter(n => n > 0));
    let finalPages = uniqPages.reduce((prev, curr, index, array) => {
      prev.push(curr);
      if (
        array[index + 1] !== undefined &&
        array[index + 1] - array[index] > 1
      ) {
        prev.push("...");
      }
      return prev;
    }, []);
    let pages = ref(finalPages);

    return {
      pages
    };
  }
};
</script>

<style scoped lang="scss">
.simple-pager {
  &-item {
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    padding: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    min-width: 20px;
    height: 20px;
    margin: 0 4px;
    cursor: pointer;
    &.active,
    &:hover {
      border-color: #1890ff;
    }
    &.separator {
      border: none;
    }
    &.active {
      cursor: default;
    }
  }
}
</style>