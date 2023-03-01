<template>
  <div class="page flex-col">
    <div class="group_3 flex-row justify-between">
      <div class="image-text_1 flex-row justify-between">
        <div class="single-avatar_1 flex-col" />
        <div class="text-group_1">
          <span class="text_9">工厂影像空间</span>
          <span class="text_10" />
          <span class="text_11">场景6｜评分3.0</span>
        </div>
      </div>
      <button class="button_2 flex-col" @click="onClick_2">
        <span class="text_12">关注</span>
      </button>
    </div>
    <div class="group_4 flex-row justify-between">
      <div class="text-wrapper_4 flex-col" @click="handleClick">
        <span class="text_13">影棚A</span>
      </div>
      <div class="text-wrapper_5 flex-col" @click="handleClick">
        <span class="text_14">影棚B</span>
      </div>
    </div>
    <div class="text-wrapper_6 flex-col" @click="handleClick">
      <span class="text_15">影棚C</span>
    </div>

    <div class="group_3 flex-row justify-between mt20">
      <div class="image-text_1 flex-row justify-between">
        <div class="single-avatar_1 flex-col" />
        <div class="text-group_1">
          <span class="text_9">工厂影像空间</span>
          <span class="text_10" />
          <span class="text_11">场景6｜评分3.0</span>
        </div>
      </div>
      <button class="button_2 flex-col" @click="onClick_2">
        <span class="text_12">关注</span>
      </button>
    </div>
    <div class="group_5 flex-row justify-between">
      <div class="text-wrapper_7 flex-col" @click="handleClick">
        <span class="text_16">影棚A</span>
      </div>
      <div class="text-wrapper_8 flex-col" @click="handleClick">
        <span class="text_17">影棚B</span>
      </div>
    </div>
    <div class="text-wrapper_9 flex-col" @click="handleClick">
      <span class="text_18">影棚C</span>
    </div>
    <div class="group_3 flex-row justify-between mt20">
      <div class="image-text_1 flex-row justify-between">
        <div class="single-avatar_1 flex-col" />
        <div class="text-group_1">
          <span class="text_9">工厂影像空间</span>
          <span class="text_10" />
          <span class="text_11">场景6｜评分3.0</span>
        </div>
      </div>
      <button class="button_2 flex-col" @click="onClick_2">
        <span class="text_12">关注</span>
      </button>
    </div>
    <div class="group_5 flex-row justify-between">
      <div class="text-wrapper_7 flex-col" @click="handleClick">
        <span class="text_16">影棚A</span>
      </div>
      <div class="text-wrapper_8 flex-col" @click="handleClick">
        <span class="text_17">影棚B</span>
      </div>
    </div>
    <div class="text-wrapper_9 flex-col" @click="handleClick">
      <span class="text_18">影棚C</span>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      constants: {}
    }
  },
  methods: {
    handleClick() {
      this.$router.push({
        path: '/goodOutreach/details',
        query: { imgObj: '' }
      })
    },
    onClick_2() {
      alert('多谢关注')
    }
  }
}
</script>
<style scoped>
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 10px 0 39px 0;
}

.flex-col {
  background-size: cover;
}

.group_3 {
  background-color: rgba(249, 249, 249, 1);
  width: 345px;
  align-self: center;
  margin-top: 15px;
  padding: 11px 10px 11px 12px;
}

.image-text_1 {
  width: 226px;
}

.single-avatar_1 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/b951423adb254628819e4e9bfae502a4_mergeImage.png);
  width: 38px;
  height: 38px;
}

.text-group_1 {
  width: 177px;
  height: 20px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin: 9px 0 9px 0;
}

.text_9 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 14px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_10 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_11 {
  overflow-wrap: break-word;
  color: rgba(194, 194, 194, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;

  margin-left: 10px;
}

.button_2 {
  background-color: rgba(195, 123, 33, 1);
  margin: 6px 0 6px 0;
  padding: 4px 12px 3px 13px;
}

.text_12 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.group_4 {
  width: 345px;
  align-self: center;
  margin-top: 6px;
}

.text-wrapper_4 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/a854ef1566cd4e0fb67cc09fe1149f9a_mergeImage.png);
  padding: 115px 118px 12px 13px;
}

.text_13 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text-wrapper_5 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4bd79fe1049444d085d6d8ab4001cafc_mergeImage.png);
  padding: 115px 117px 12px 14px;
}

.text_14 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text-wrapper_6 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/15e99e49066d48a3aa1f28b20d54bc09_mergeImage.png);
  align-self: center;
  margin-top: 6px;
  width: 345px;
  padding: 106px 293px 13px 13px;
}

.text_15 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.group_5 {
  width: 345px;
  align-self: center;
  margin-top: 8px;
}

.text-wrapper_7 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/7857f3c0f7f1441faa846e50b66d6d7e_mergeImage.png);
  padding: 115px 118px 12px 13px;
}

.text_16 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text-wrapper_8 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/b0dc02029a01453696329ca9cf74fd3f_mergeImage.png);
  padding: 115px 117px 12px 14px;
}

.text_17 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text-wrapper_9 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/cccd84e3128c46d2abb3cd7bc4e50c25_mergeImage.png);
  align-self: center;
  margin-top: 6px;
  width: 345px;
  padding: 106px 293px 13px 13px;
}

.text_18 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.group_6 {
  width: 345px;
  align-self: center;
  margin-top: 8px;
}

.text-wrapper_10 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/edf3867c4d5b4f669801b2e23c52e8cd_mergeImage.png);
  padding: 115px 118px 12px 13px;
}

.text_19 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text-wrapper_11 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/d0d13e8da1ff41ceb4c8f9c3f2cd90cc_mergeImage.png);
  padding: 115px 117px 12px 14px;
}

.text_20 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text-wrapper_12 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/b23fb83bf8114137a20d01a5e4be8cc7_mergeImage.png);
  align-self: center;
  margin-top: 6px;
  width: 345px;
  padding: 106px 293px 13px 13px;
}

.text_21 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

@media only screen and (min-width: 390px) and (max-width: 400px) {

   .group_4,
  .group_5 {
    width: 89%;
       transform: translateX(0) scaleX(1.05);
  }

  .text-wrapper_6,
  .text-wrapper_9 {
    width: 89%;
        transform: translateX(0) scaleX(1.05);
  }

  .group_3 {

    width: 94%;
  }

}

@media only screen and (min-width: 401px) and (max-width: 460px) {

  .group_4,
  .group_5 {
    width: 84%;
    transform: translateX(0) scaleX(1.12);
  }

  .text-wrapper_6,
  .text-wrapper_9 {
    width: 84%;
    transform: translateX(0) scaleX(1.12);
  }

  .group_3 {

    width: 94%;
  }

}
</style>
