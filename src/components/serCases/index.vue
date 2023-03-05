<template>
  <div id="certify">
    <div class="swiper-container swiper-container-horizontal">
      <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-3300px, 0px, 0px);">
        <div
          class="swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index="0"
          style="transform: translateX(5096px) scale(-0.4); z-index: 929; opacity: 0; transition-duration: 0ms;"
        ><img
           src="images/certify01.png"
         >
          <p>Picture information 1</p>
        </div>
        <div
          class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
          data-swiper-slide-index="1"
          style="transform: translateX(3900px) scale(-0.2); z-index: 939; opacity: 0; transition-duration: 0ms;"
        ><img
           src="images/certify02.png"
         >
          <p>Picture information 2</p>
        </div>
        <div
          class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
          data-swiper-slide-index="2"
          style="transform: translateX(2860px) scale(0); z-index: 949; opacity: 0; transition-duration: 0ms;"
        ><img
           src="images/certify03.png"
         >
          <p>Picture information 3</p>
        </div>
        <div
          class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
          data-swiper-slide-index="3"
          style="transform: translateX(1976px) scale(0.2); z-index: 959; opacity: 0; transition-duration: 0ms;"
        ><img
           src="images/certify04.png"
         >
          <p>Picture information 4</p>
        </div>
        <div
          class="swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index="4"
          style="transform: translateX(1248px) scale(0.4); z-index: 969; opacity: 1; transition-duration: 0ms;"
        ><img
           src="images/certify05.png"
         >
          <p>Picture information 5</p>
        </div>
        <div
          class="swiper-slide"
          data-swiper-slide-index="0"
          style="transform: translateX(676px) scale(0.6); z-index: 979; opacity: 1; transition-duration: 0ms;"
        ><img
           src="images/certify01.png"
         >
          <p>Picture information 1</p>
        </div>
        <div
          class="swiper-slide swiper-slide-prev"
          data-swiper-slide-index="1"
          style="transform: translateX(260px) scale(0.8); z-index: 989; opacity: 1; transition-duration: 0ms;"
        ><img
           src="images/certify02.png"
         >
          <p>Picture information 2</p>
        </div>
        <div
          class="swiper-slide swiper-slide-active"
          data-swiper-slide-index="2"
          style="transform: translateX(0px) scale(1); z-index: 999; opacity: 1; transition-duration: 0ms;"
        ><img
           src="images/certify03.png"
         >
          <p>Picture information 3</p>
        </div>
        <div
          class="swiper-slide swiper-slide-next"
          data-swiper-slide-index="3"
          style="transform: translateX(-260px) scale(0.8); z-index: 989; opacity: 1; transition-duration: 0ms;"
        ><img
           src="images/certify04.png"
         >
          <p>Picture information 4</p>
        </div>
        <div
          class="swiper-slide"
          data-swiper-slide-index="4"
          style="transform: translateX(-676px) scale(0.6); z-index: 979; opacity: 1; transition-duration: 0ms;"
        ><img
           src="images/certify05.png"
         >
          <p>Picture information 5</p>
        </div>
        <div
          class="swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index="0"
          style="transform: translateX(-1248px) scale(0.4); z-index: 969; opacity: 1; transition-duration: 0ms;"
        ><img
           src="images/certify01.png"
         >
          <p>Picture information 1</p>
        </div>
        <div
          class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
          data-swiper-slide-index="1"
          style="transform: translateX(-1976px) scale(0.2); z-index: 959; opacity: 0; transition-duration: 0ms;"
        ><img
           src="images/certify02.png"
         >
          <p>Picture information 2</p>
        </div>
        <div
          class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
          data-swiper-slide-index="2"
          style="transform: translateX(-2860px) scale(0); z-index: 949; opacity: 0; transition-duration: 0ms;"
        ><img
           src="images/certify03.png"
         >
          <p>Picture information 3</p>
        </div>
        <div
          class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
          data-swiper-slide-index="3"
          style="transform: translateX(-3900px) scale(-0.2); z-index: 939; opacity: 0; transition-duration: 0ms;"
        ><img
           src="images/certify04.png"
         >
          <p>Picture information 4</p>
        </div>
        <div
          class="swiper-slide swiper-slide-duplicate"
          data-swiper-slide-index="4"
          style="transform: translateX(-5096px) scale(-0.4); z-index: 929; opacity: 0; transition-duration: 0ms;"
        ><img
           src="images/certify05.png"
         >
          <p>Picture information 5</p>
        </div>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"><span class="swiper-pagination-bullet" /><span
      class="swiper-pagination-bullet"
    /><span
      class="swiper-pagination-bullet swiper-pagination-bullet-active"
    /><span
      class="swiper-pagination-bullet"
    /><span class="swiper-pagination-bullet" /></div>
    <div class="swiper-button-prev" />
    <div class="swiper-button-next" />
  </div>
</template>
<script>
// 引入swiper插件的js
import Swiper from 'swiper'
export default {
  name: 'Index',
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    this.myswiper()
  },
  methods: {
    myswiper: function() {
      var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination'
        }
      })
      // console.log(swiper)
    }
  }
}
</script>
<style scoped>
/* 引入swipercss */
@import url("../../../node_modules/swiper/swiper.min.css");

.swiper-container {
  width: 100%;
  height: 9.375rem;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>
