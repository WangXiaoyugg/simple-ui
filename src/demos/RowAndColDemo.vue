<template>
  <h1>栅格布局示例</h1>
  <section>
    <h2>示例1</h2>
    <Row gutter="20">
      <Col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
        <div class="box"></div>
      </Col>
      <Col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
        <div class="box"></div>
      </Col>
      <Col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
        <div class="box"></div>
      </Col>
      <Col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
        <div class="box"></div>
      </Col>
      <Col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
        <div class="box"></div>
      </Col>
      <Col span="24" :ipad="{span:12}" :narrow-pc="{span:8}">
        <div class="box"></div>
      </Col>
    </Row>
  </section>
  <section>
    <h2>示例3</h2>
    <Row gutter="20">
      <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
      <Col>4</Col>
    </Row>
  </section>
  <section>
    <h2>示例4</h2>
    <Row gutter="20">
      <Col span="2">2</Col>
      <Col span="8" offset="8">8</Col>
      <Col span="4" offset="2">4</Col>
    </Row>
  </section>
  <section>
    <h2>示例5</h2>
    <Row gutter="20">
      <Col span="4" offset="4">4</Col>
      <Col span="20">16</Col>
    </Row>
  </section>
  <section>
    <h2>示例6</h2>
    <Row gutter="20">
      <Col span="2">2</Col>
      <Col span="20" offset="2">20</Col>
    </Row>
  </section>
</template>

<script>
import Row from "../lib/Row.vue";
import Col from "../lib/Col.vue";
export default {
  components: {
    Row,
    Col
  }
};
</script>

<style lang="scss" scoped>
section {
  .box {
    height: 50px;
    background: grey;
    border: 1px solid red;
  }
}
</style>