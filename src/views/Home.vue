<template>
  <div>
    <div class="topnav">
      <div class="logo">Simple UI</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
    <div class="banner">
      <h1>简单UI</h1>
      <h2>一个非常简单的UI框架</h2>
      <p class="actions">
        <a href>GitHub</a>
        <a href>开始</a>
      </p>
    </div>
  </div>
</template>



<style scoped lang="scss">
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    color: #fff;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      color: #fff;
    }
  }
}
</style>