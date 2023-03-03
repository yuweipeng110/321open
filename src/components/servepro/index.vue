<template>
  <div>
    <div class="flex-col">
      <div class="serve-box flex-row justify-between">
        <!-- <transition name="plus_lev"> -->
        <div v-show="show1" class="group_16 flex-col  card_hover" @mouseover="handleOver(1)">
          <img class="image_15" referrerpolicy="no-referrer"
            src="./assets/img/SketchPng692669e7a8e9421f62c756fbfd60b8db2672256c3991960291a9119df75421a4.png">
          <span class="text_1">企业服务</span>
        </div>
        <!-- </transition> -->
        <!-- <transition name="plus"> -->
        <div v-show="!show1" class="section_1 flex-col  box_hover" @mouseleave="handleLeave(1)" @click="go('my')">
          <div class="section_2 flex-row hover-box">
            <div class="image-text_1 flex-row justify-between">
              <img class="image_1" referrerpolicy="no-referrer"
                src="./assets/img/SketchPngdbd36df5abc1c43ffbe4a8aa130049cad34a9d6a6f5efea92c39d7ae923af63a.png">
              <span class="text-group_1">企业服务</span>
            </div>
          </div>
          <div class="section_3 flex-row hover-box">
            <div class="image-text_2 flex-row justify-between">
              <img class="thumbnail_1" referrerpolicy="no-referrer"
                src="./assets/img/SketchPng406a3c890bbb3e6314fc93a2df59dc80e029b2c460a6e2418ec2514e71cc85b4.png">
              <span class="text-group_2">注册落户</span>
            </div>
          </div>
          <img class="image_2" referrerpolicy="no-referrer"
            src="./assets/img/SketchPng115a09464887a85b65e339e9fe5f6d8ed1568e22e6f3b69948a5a076b02f6c97.png">
          <img class="image_3" referrerpolicy="no-referrer"
            src="./assets/img/SketchPnge81e8dbe8351953f23aeb91a7a2dd6b3417d945117789830e2eeb8ec79010d40.png">
          <div class="section_4 flex-row hover-box">
            <div class="image-text_3 flex-row justify-between">
              <img class="thumbnail_2" referrerpolicy="no-referrer"
                src="./assets/img/SketchPngee6b26a6c3a4f48aa96342a24fce28155da21f745d80d97279da8cb0d62c47d6.png">
              <span class="text-group_3">活动策划</span>
            </div>
          </div>
          <div class="section_5 flex-row hover-box">
            <div class="image-text_4 flex-row justify-between">
              <img class="thumbnail_3" referrerpolicy="no-referrer"
                src="./assets/img/SketchPng4339dcfb295e17b4ac3e001976b3d991b4b44f2fa4ef0242ec4af5fa0aa6f626.png">
              <span class="text-group_4">资质办理</span>
            </div>
          </div>
          <img class="image_4" referrerpolicy="no-referrer"
            src="./assets/img/SketchPnge46865ded3a9b73e76c4f9a36399855fde74870181c14271f34f50d754fbb80c.png">
          <div class="section_6 flex-row hover-box">
            <div class="image-text_5 flex-row justify-between">
              <img class="thumbnail_4" referrerpolicy="no-referrer"
                src="./assets/img/SketchPng3f3964264365a003b949190b7dec03661413190e1d7aa3dc0105ecb10126ef48.png">
              <span class="text-group_5">政策咨询</span>
            </div>
          </div>
        </div>
        <!-- </transition> -->

        <div v-show="show2" class="group_17 flex-col card_hover" @mouseover="handleOver(2)">
          <img class="image_16" referrerpolicy="no-referrer"
            src="./assets/img/SketchPng374d592f3fcb9cee2f1e62702a996fa0298aa41951db952562bf641ae431900e.png">
          <span class="text_2">剧组服务</span>
        </div>
        <div v-show="!show2" class="section_7 flex-col justify-between box_hover" @mouseleave="handleLeave(2)">
          <div class="group_2 flex-row hover-box" @click="go('shotResources')">
            <div class="image-text_6 flex-row justify-between">
              <img class="image_5" referrerpolicy="no-referrer"
                src="./assets/img/SketchPngf3d1ca8d39b9957700b04c772b4a8873bf8e7774a2849b1d66c5b46ecdd93879.png">
              <span class="text-group_6">拍摄资源</span>
            </div>
          </div>
          <div class="group_3 flex-row hover-box" @click="go('shotResources')">
            <div class="image-text_7 flex-row justify-between">
              <img class="label_1" referrerpolicy="no-referrer"
                src="./assets/img/SketchPng6c0876789e8383f78dc8029316d02f353fa2da0457c0834d9ba1a56b00dadc00.png">
              <span class="text-group_7">需求招标</span>
            </div>
          </div>
        </div>
        <div v-show="show3" class="group_18 flex-col card_hover" @mouseover="handleOver(3)">
          <img class="image_17" referrerpolicy="no-referrer"
            src="./assets/img/SketchPng2711a8f8a0cd24e9006e62194490b7f73e9ac36703c629fce0c67d6860c9fdb7.png">
          <span class="text_3">商户服务</span>
        </div>
        <div v-show="!show3" class="section_8 flex-col justify-between box_hover" @mouseleave="handleLeave(3)">
          <div class="group_4 flex-row hover-box" @click="go('demand')">
            <div class="image-text_8 flex-row justify-between">
              <img class="label_2" referrerpolicy="no-referrer"
                src="./assets/img/SketchPng2dbda5fb46a19be6d37773b617c69d0e4dcb7c73855240b306333aa5d270c319.png">
              <span class="text-group_8">发布资源</span>
            </div>
          </div>
          <div class="group_5 flex-row hover-box" @click="go('demand')">
            <div class="image-text_9 flex-row justify-between">
              <img class="label_3" referrerpolicy="no-referrer"
                src="./assets/img/SketchPngc9bb46afc6fa56db7173c24460418e7983c1d95a409668e24612c3965bd99ccc.png">
              <span class="text-group_9">需求投标</span>
            </div>
          </div>
        </div>
        <div v-show="show4" class="group_19 flex-col card_hover" @mouseover="handleOver(4)">
          <img class="image_18" referrerpolicy="no-referrer"
            src="./assets/img/SketchPngce42ab57e382d5cd8770bedfd1ff1f339f34b283ca1e74de070985444dfdcd5e.png">
          <span class="text_4">我想逛逛</span>
        </div>
        <div v-show="!show4" class="section_9 flex-col justify-between box_hover" @mouseleave="handleLeave(4)">
          <div class="group_6 flex-row justify-between">
            <div class="group_7 flex-row hover-box" @click="go('/article/article/1')">
              <div class="image-text_10 flex-row justify-between">
                <img class="image_6" referrerpolicy="no-referrer"
                  src="./assets/img/SketchPngab35d1a6af01630966b3498ced558b61c7cbab861cc5592a9b15dc728e48fde0.png">
                <span class="text-group_10">政策资讯</span>
              </div>
            </div>
            <div class="group_8 flex-row hover-box" @click="go('/article/article/1')">
              <div class="image-text_11 flex-row justify-between">
                <img class="image_7" referrerpolicy="no-referrer"
                  src="./assets/img/SketchPngcc30c7701c3078203161126969240ad6154ca62262b325aa56d42ca9af78330c.png">
                <span class="text-group_11">行业新闻</span>
              </div>
            </div>
          </div>
          <div class="group_9 flex-row hover-box" @click="go('/article/article/4')">
            <div class="image-text_12 flex-row justify-between">
              <img class="label_4" referrerpolicy="no-referrer"
                src="./assets/img/SketchPnga499400665244b8f040b1f7ef86461fbc41b0eccda0a18263337041c6ac3823f.png">
              <span class="text-group_12">服务案例</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="" :visible.sync="dialogVisible" width="400px">
      <forma :redirect="redirectObj" @showFrom="dialoFromShowFun($event)" />
    </el-dialog>
  </div>
</template>
<script>
import forma from '@/layout/components/form.vue'
export default {
  components: {
    forma
  },
  data() {
    return {
      dialogVisible: false,
      redirectObj: null,
      constants: {},
      show1: true,
      show2: true,
      show3: true,
      show4: true
    }
  },
  methods: {
    dialoFromShowFun(e) {
      this.dialogVisible = e
    },

    handleOver(i) {
      if (i === 1) {
        this.show1 = false
        this.show2 = true
        this.show3 = true
        this.show4 = true
      } else if (i === 2) {
        this.show1 = true
        this.show2 = false
        this.show3 = true
        this.show4 = true
      } else if (i === 3) {
        this.show1 = true
        this.show2 = true
        this.show3 = false
        this.show4 = true
      } else if (i === 4) {
        this.show1 = true
        this.show2 = true
        this.show3 = true
        this.show4 = false
      }
    },
    handleLeave(i) {
      this.show1 = true
      this.show2 = true
      this.show3 = true
      this.show4 = true
    },

    go(type) {
      let redirectObj;
      switch (type) {
        case 'my':
          redirectObj = () => {
            this.$router.push({
              path: '/my/my',
              query: {
                openTab: '1'
              }
            });
          }
          break;
        // 拍摄资源 招标需求
        case 'shotResources':
          redirectObj = () => {
            this.$router.push({
              path: '/shotResources/shot'
            });
          }
          break;
        // 需求中心
        case 'demand':
          redirectObj = () => {
            this.$router.push({
              path: '/demand/demand'
            });
          }
          break;
        default:
          // 直接跳转，不判断登录
          this.$router.push({
            path: type
          });
          return;
      }

      // 判断是否登录，没登录提示登录，登录后直接跳入该界面。
      this.redirectObj = redirectObj;
      if (this.$store.state.user.id) {
        this.redirectObj();
      }
      else {
        this.dialogVisible = true
      }
    },
  }
}
</script>

<style scoped  src="./assets/index.css" />
<style scoped>
/* .serve-box {

} */
.mt20 {
  margin-top: 20px !important;
}

.hover-box {
  -webkit-transition: border-color 0.3s;
  transition: border-color 0.3s;
  cursor: pointer;
  border: 5px solid transparent;
}

.hover-box>div {
  margin: auto;
}

.hover-box:hover {
  border: 5px solid rgb(204, 204, 204);
}

@media (min-width: 1400px) {
  .serve-box {
    max-width: 1420px;
    height: 323px;
    margin: 0 auto;
    transform: translateX(-10px) scaleX(0.96);
  }
}

/* .aa-enter-active {
   animation: aniName 0.3s linear
 }

 .aa-leave-active {
   animation: aniName 0.3s linear reverse
 }

 @keyframes aniName {
   from {
    opacity: 0;
   }
   to {
   opacity: 1;
   }
 }
 /* .a1-enter-active {
   animation: aniName1 0.3s linear
 }

 .a1-leave-active {
   animation: aniName1 0.3s linear reverse
 }

 @keyframes aniName1 {
   from {
    opacity: 1;
   }
   to {
   opacity: 0;
   }
 } */

/* .plus-leave,
.plus-enter-to {
  opacity: 1;
}
.plus-leave-active,
.plus-enter-active {
  transition: all 0.3s;
}
.plus-leave-to,
.plus-enter {
  opacity: 0;
} */
/* .card_hover {
  opacity: 1;
  animation: fadepro 0.3s linear;

}

.box_hover {
  opacity: 1;
  animation: fadedev 0.3s linear;
} */
.card_hover {
  opacity: 1;
  animation: fadepro 1s linear;

}

.box_hover {
  opacity: 0;
  animation: fadedev 1s linear;
}

.card_hover:hover {
  transition: all 1s;
  opacity: 1;
}

.box_hover:hover {
  transition: all 1s;
  opacity: 1;
}

@keyframes fadepro {

  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }

}

@keyframes fadedev {
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }

}
</style>
