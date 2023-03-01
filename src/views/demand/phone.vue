<template>
  <div>
    <div class="box_2 flex-row">
      <div v-if="btn1" class="text-wrapper_2 flex-col accc" @click="handleCheck(1)">
        <span class="text_5">进行中</span>
      </div>
      <div v-if="!btn1" class="text-wrapper_2 flex-col" @click="handleCheck(0)">
        <span class="text_5">进行中</span>
      </div>
      <div v-if="!btn1" class="text-wrapper_2 flex-col accc" @click="handleCheck(1)">
        <span class="text_5">圆满结束</span>
      </div>
      <div v-if="btn1" class="text-wrapper_2 flex-col" @click="handleCheck(0)">
        <span class="text_5">圆满结束</span>
      </div>
      <template v-if="tabtn === 1">
        <span class="text_6" @click="handle(2)">发布时间</span>
        <i class="el-icon-caret-bottom thumbnail_3" @click="handle(2)" />
      </template>
      <template v-if="tabtn === 2">
        <span class="text_6" @click="handle(1)">发布时间</span>
        <i class="el-icon-caret-top thumbnail_3" @click="handle(1)" />
      </template>
      <template v-if="tabtn1 === 1">
        <span class="text_7" @click="handle1(2)">投标量</span>
        <i class="el-icon-caret-bottom thumbnail_3" @click="handle1(2)" />
      </template>
      <template v-if="tabtn1 === 2">
        <span class="text_7" @click="handle1(1)">投标量</span>
        <i class="el-icon-caret-top thumbnail_3" @click="handle1(1)" />
      </template>
      <template v-if="tabtn2 === 1">
        <div class="image-text_1 flex-row justify-between">
          <span class="text-group_1" @click="handle2(2)">预算</span>
          <i class="el-icon-caret-bottom ccc" @click="handle2(2)" />
        </div>
      </template>
      <template v-if="tabtn2 === 2">
        <div class="image-text_1 flex-row justify-between">
          <span class="text-group_1" @click="handle2(1)">预算</span>
          <i class="el-icon-caret-top ccc" @click="handle2(1)" />
        </div>
      </template>

    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      seen: true,
      tabtn: 1,
      tabtn1: 1,
      btn1: true,
      tabtn2: 1
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        if (document.body.clientWidth > 700) {
          this.seen = true
        } else {
          this.seen = false
        }
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted() {
    if (document.body.clientWidth > 700) {
      this.seen = true
    } else {
      this.seen = false
    }
    window.addEventListener('setItem', () => {
      const clientWidth = sessionStorage.getItem('seen')
      console.log(clientWidth, 'this.seen')
      if (clientWidth > 700) {
        this.seen = true
      } else {
        this.seen = false
      }
    })
  },
  methods: {

    handle(val) {
      this.tabtn = val
    },
    handle1(val) {
      this.tabtn1 = val
    },
    handle2(val) {
      this.tabtn2 = val
    },
    handleCheck(val) {
      this.btn1 = !this.btn1
    }
  }
}
</script>
<style scoped>
.box_2 {
  width: 345px;
  align-self: center;
  margin-top: 23px;
  margin-left: 5px;
}

.text-wrapper_1 {
  background-color: rgba(246, 240, 232, 1);
  border-radius: 33px;
  padding: 4px 14px 4px 13px;
}

.text_4 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text-wrapper_2 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  margin-left: 8px;
  padding: 6px 16px 5px 15px;
}

.text_5 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_6 {
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 6px 0 0 31px;
}

.icon_4 {
  width: 6px;
  height: 6px;
  margin: 11px 0 11px 2px;
}

.text_7 {
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 6px 0 0 10px;
}

.thumbnail_1 {
  width: 6px;
  height: 6px;
  margin: 11px 0 11px 2px;
}

.image-text_1 {
  width: 33px;
  margin: 6px 0 5px 11px;
}

.text-group_1 {
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.thumbnail_2 {
  width: 6px;
  height: 6px;
  margin: 5px 0 6px 0;
}

.thumbnail_3 {
  transform: translateY(5px);
  color: #C37B21;
}

.ccc {
  color: #C37B21;
}
.accc{
     background-color: #C37B21;

}
.accc span{
  color: #fff !important;
}
</style>
