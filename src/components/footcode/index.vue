<template>
  <div>
    <div class="section_24 flex-row">
      <div class="text-group_20 flex-col">
        <span class="text_64">咨询电话</span>
        <span class="text_65">010-86460612</span>
        <span class="text_66">工作时间9:30-18:30(周一至周五)</span>
      </div>
      <div class="group_28 flex-col justify-between">
        <div class="text-group_21 flex-col justify-between">
          <span class="text_67">在线客服</span>
          <span class="text_68 hover">QQ在线客服</span>
        </div>
        <span class="text_69 hover">微信客服</span>
      </div>
      <div class="group_29 flex-col justify-between">
        <div class="text-group_22 flex-col justify-between">
          <span class="text_70 ">关于我们</span>
          <span class="text_71 hover">加入我们</span>
        </div>
        <span class="text_72 hover">联系我们</span>
      </div>
      <div class="text-group_23 flex-col justify-between">
        <span class="text_73">帮助中心</span>
        <span class="text_74 hover">网站协议</span>
      </div>
      <div class="group_30 flex-col justify-between">
        <span class="text_75 ">关注公众号</span>
        <div class="group_23 flex-col" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardLisy: [
        {
          title: '工厂电影空间',
          cj: '场景 6',
          pf: '评分 3',
          pj: '评价 0',
          url: require('@/assets/y1.png')
        },
        {
          title: '工厂电影空间',
          cj: '场景 6',
          pf: '评分 3',
          pj: '评价 0',
          url: require('@/assets/y2.png')
        },
        {
          title: '工厂电影空间',
          cj: '场景 6',
          pf: '评分 3',
          pj: '评价 0',
          url: require('@/assets/y3.png')
        },
        {
          title: '工厂电影空间',
          cj: '场景 6',
          pf: '评分 3',
          pj: '评价 0',
          url: require('@/assets/y4.png')
        },
        {
          title: '工厂电影空间',
          cj: '场景 6',
          pf: '评分 3',
          pj: '评价 0',
          url: require('@/assets/y5.png')
        }
      ],
      imgUrl: require('@/assets/y5.png')
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
.section_24 {
  background-color: rgba(34, 38, 43, 1);
  position: inherit;
  left: 0;
  top: 6798px;
  width: 100%;
  height: 273px;
}

.text-group_20 {
  width: 273px;
  height: 124px;
  margin: 45px 0 0 auto;
}

.text_64 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_65 {
  width: 253px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 36px;
  letter-spacing: 0.6000000238418579px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 50px;
  margin-top: 9px;
}

.text_66 {
  width: 273px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin-top: 7px;
}

.group_28 {
  width: 113px;
  height: 129px;
  margin: 45px 0 0 113px;
}

.text-group_21 {
  width: 113px;
  height: 81px;
}

.text_67 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_68 {
  width: 113px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(184, 186, 187, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 20px;
}

.text_69 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(184, 186, 187, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 20px;
}

.group_29 {
  width: 98px;
  height: 129px;
  margin: 45px 0 0 112px;
}

.text-group_22 {
  width: 98px;
  height: 81px;
}

.text_70 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_71 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(184, 186, 187, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 20px;
}

.text_72 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(184, 186, 187, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 20px;
}

.text-group_23 {
  width: 98px;
  height: 81px;
  margin: 45px 0 0 113px;
}

.text_73 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_74 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(184, 186, 187, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 20px;
}

.group_30 {
  width: 126px;
  height: 183px;
  margin: 45px 332px 0 292px;
}

.text_75 {
  width: 123px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.group_23 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fd57f1c06ad24de0a6711f511660e3cc_mergeImage.png);
  width: 126px;
  height: 126px;
  margin-top: 24px;
}

.hover {
  cursor: pointer
}

.hover:hover {
  color: #fff
}

@media (max-width: 1360px) {
  .group_30 {
    width: 126px;
    height: 183px;
    margin: 45px 299px 0 30px;
  }
}
@media (max-width: 1400px) {
  .text-group_20 {
    margin: 45px 0 0 20px;
  }
}
@media (max-width: 1620px) {
  .text-group_20 {
    margin: 45px 0 0 20px;
  }
}
.text-group_20 {
    margin: 45px 0 0 20px;
  }
</style>
