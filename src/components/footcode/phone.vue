<template>
  <div class="footContent">
    <div class="tc wie">Copyright @2020</div>
    <div class="tc wie">版权所有:河南都城建筑工程有限公司豫ICP备19013849号</div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    handleImg(url) {
      this.imgUrl = url
    }
  }
}
</script>

<style scoped>
.footContent {
  background-color: rgba(34, 38, 43, 1);
  position: inherit;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 62px;
  padding-top: 10px;
}
.wie{
  color: #ffffff;
  font-size: 0.8rem;
  margin-bottom: 5px;
}
</style>
