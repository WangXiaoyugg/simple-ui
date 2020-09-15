<template>
  <div class="simple-pager" :class="{hide: hideIfOnePage && totalPage <= 1 }">
    <span
      class="simple-pager-nav prev"
      :class="{disabled: currentPage === 1}"
      @click="onClickPage(currentPage - 1)"
    >
      <svg
        t="1600126991395"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3849"
        width="32"
        height="32"
      >
        <path
          d="M784.652701 955.6957 346.601985 517.644983c-2.822492-2.822492-2.822492-7.902977 0-11.289967l439.179713-439.179713c6.77398-6.77398 10.725469-16.370452 10.725469-25.966924L796.507166 36.692393c0-20.32194-16.370452-36.692393-36.692393-36.692393l-4.515987 0c-9.596472 0-19.192944 3.951488-25.966924 10.725469L250.072767 489.420066c-12.418964 12.418964-12.418964 32.740904 0 45.159868l477.565601 477.565601c7.338479 7.338479 17.499449 11.854465 28.224917 11.854465l0 0c22.015436 0 40.079383-18.063947 40.079383-40.079383l0 0C796.507166 973.759647 791.99118 963.598677 784.652701 955.6957z"
          p-id="3850"
        />
      </svg>
    </span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="simple-pager-item current">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <span class="simple-pager-item dots">...</span>
      </template>
      <template v-else>
        <span class="simple-pager-item other" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span
      class="simple-pager-nav next"
      :class="{disabled: currentPage === totalPage}"
      @click="onClickPage(currentPage + 1)"
    >
      <svg
        t="1600127091859"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="946"
        width="32"
        height="32"
      >
        <path
          d="M239.347299 68.3043L677.398015 506.355017c2.822492 2.822492 2.822492 7.902977 1e-8 11.289967l-439.17971301 439.179713c-6.77398 6.77398-10.725469 16.370452-10.725469 25.966924L227.492834 987.30760699c0 20.32194 16.370452 36.692393 36.692393 36.69239301l4.515987 0c9.596472 0 19.192944-3.951488 25.966924-10.725469L773.927233 534.579934c12.418964-12.418964 12.418964-32.740904 0-45.159868l-477.565601-477.565601c-7.338479-7.338479-17.499449-11.85446499-28.224917-11.854465l0 0c-22.01543601 0-40.079383 18.06394699-40.079383 40.079383l0 0C227.492834 50.240353 232.00882 60.401323 239.347299 68.3043z"
          p-id="947"
        />
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";
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
      default: true
    }
  },
  setup(props, context) {
    const { currentPage, totalPage } = props;

    const pages = computed(() => {
      return unique(
        [
          1,
          totalPage,
          currentPage,
          currentPage - 1,
          currentPage - 2,
          currentPage + 1,
          currentPage + 2
        ]
          .filter(n => n > 0 && n <= totalPage)
          .sort((a, b) => a - b)
      ).reduce((prev, curr, index, array) => {
        prev.push(curr);
        array[index + 1] !== undefined &&
          array[index + 1] - array[index] > 1 &&
          prev.push("...");
        return prev;
      }, []);
    });

    const onClickPage = page => {
      if (page > 0 && page <= totalPage) {
        context.emit("update:currentPage", page);
        context.emit("change", page);
      }
    };

    return {
      pages,
      onClickPage
    };
  }
};
</script>

<style scoped lang="scss">
.simple-pager {
  display: inline-flex;
  align-items: center;
  &.hide {
    display: none;
  }
  &-nav {
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #e1e1e1;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    > .icon {
      width: 14px;
      height: 14px;
    }
    &.disabled {
      cursor: default;
      > .icon {
        fill: darken(#e1e1e1, 30%);
      }
    }
  }
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
    user-select: none;
    &.current,
    &:hover {
      border-color: #1890ff;
    }
    &.dots {
      border: none;
      cursor: default;
    }
    &.separator {
      border: none;
      width: 20px;
      font-size: 12px;
    }
    &.current {
      cursor: default;
    }
  }
}
</style>