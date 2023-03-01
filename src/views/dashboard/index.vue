<template>
  <div>
    <carousel v-if="seen" />
    <carouselphone v-if="!seen" />
    <div v-if="seen">
      <div class="solve head-label ">
        <div class="font_size_24 server-p mt50">
          服务项目
        </div>
        <div class="font_size_24 server-p-b mb50" />
      </div>
      <servepro />
      <div class="solve head-label ">
        <div class="font_size_24 server-p mt50">
          服务案例
        </div>
        <div class="font_size_24 server-p-b mb50" />
      </div>
      <div class="heng-cas">
        <el-carousel :interval="5000" type="card" height="400px" class="carousel-cls">
          <el-carousel-item v-for="(item, index) in imgList" :key="index">
            <el-image style="height: inherit;" :src="item.url" fit="cover" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="text-wrapper_btn flex-col">
        <span class="text_btn">查看更多&gt;</span>
      </div>
      <div class="solve head-label ">
        <div class="font_size_24 server-p mt50">
          最新资讯
        </div>
        <div class="font_size_24 server-p-b mb50" />
      </div>
      <information />
      <div class="solve head-label ">
        <div class="font_size_24 server-p mt50">
          需求中心
        </div>
        <div class="font_size_24 server-p-b mb50" />
      </div>
      <casesever />
      <div class="text-wrapper_btn flex-col">
        <span class="text_btn">查看更多&gt;</span>
      </div>
      <div class="solve head-label ">
        <div class="font_size_24 server-p mt50">
          优质外联
        </div>
        <div class="font_size_24 server-p-b mb50" />
      </div>
      <outreach />
      <div class="text-wrapper_btn flex-col">
        <span class="text_btn">查看更多&gt;</span>
      </div>
      <div class="solve head-label ">
        <div class="font_size_24 server-p mt50">
          视频精选
        </div>
        <div class="font_size_24 server-p-b mb50" />
      </div>
      <vedio />
      <div class="text-wrapper_btn flex-col mb50" @click="handleGoVedio">
        <span class="text_btn">查看更多&gt;</span>
      </div>
    </div>

  </div>
</template>

<script>
import carousel from '@/components/carousel'
import carouselphone from '@/components/carousel/phone.vue'
import servepro from '@/components/servepro'
import information from '@/components/information'
import casesever from '@/components/casesever'
import outreach from '@/components/outreach'
import vedio from '@/components/vedio'

export default {
  name: 'Dashboard',
  components: {
    carousel,
    carouselphone,
    information,
    servepro,
    outreach,
    vedio,
    casesever
  },
  data() {
    return {
      sliders: [],
      seen: true,
      screenWidth: 0,
      imgList: [
        {
          url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        },
        {
          url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
        },
        {
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        },
        {
          url: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
        }
      ]
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
      const titleWatch = sessionStorage.getItem('title')
      console.log(clientWidth, 'this.seen')
      console.log(titleWatch, 'titleWatch')
      if (clientWidth > 700) {
        this.seen = true
      } else {
        this.seen = false
      }
    })
  },
  methods: {
    handleGoVedio() {
      this.$router.push({
        path: '/vedioList/vedioList'
      })
    },



  }
}
</script>

<style scoped>
.border_parent {
  width: 90%;
  margin: auto;
}

.slider_img {
  height: 550px;
  width: 100%;
}

.solve {
  margin-top: 66px;
  display: inline-block;
  margin-bottom: 10px;
  width: 100%;
}

.border {
  border-radius: 6px;
  border: 1px solid #EBEEF5;
  height: auto;
  margin: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

.border_one {
  margin-left: 0;
}

.border_img_parent {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.product_mobile_content {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.product_mobile_img {
  width: 50%;
}

.product_mobile_title {
  font-weight: bold;
  text-align: center;
}

.product_pc_one {
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.font_size_30 {
  font-size: 1.875em;
}

.product_font_style {
  font-size: 1.125em;
}

.product_pc_img {
  width: 100%
}

.product_pc_img_div {
  width: 50%;
  float: left;
  display: flex;
  align-items: center;
}

.product_pc {
  display: flex;
  width: 90%;
  margin: 20px auto;
  background: #F2F6FC;
  align-items: center;
}

.product_spec_title {
  margin-top: 30px;
  margin-bottom: 10px
}

.product_spec_parent {
  display: flex;
  width: 90%;
  margin: 20px auto;
  align-items: center;
  height: auto
}

.cooperation_parent {
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 20px auto;
  align-items: center;
  height: auto
}

.border_spec {
  border-radius: 6px;
  border: 1px solid #EBEEF5;
  float: left;
  width: 25%;
  height: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.about_me_p {
  font-size: 1.25em;
  font-weight: normal;
  padding: 0 20px;
  margin: 10px;
}

.border_title {
  font-family: "PingFang SC";
  margin-top: 10px;
  font-size: 1.125em;
  font-weight: bold;
  text-align: center;
}

.border_content_one {
  margin-top: 20px;
  font-size: 1.125em;
  text-align: center;
}

.border_content_two {
  margin-top: 5px;
  font-size: 1.125em;
  margin-bottom: 25px;
  text-align: center;
}

.img_border {
  margin-top: 15px;
  width: 80px;
  height: 80px
}

.border_spec_inner_one {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  height: 70px;
}

.border_spec_content_one {
  margin-top: 15px;
  font-size: 1.125em;
  float: left;
  text-align: center;
}

.border_spec_inner_last {
  margin-top: 15px;
  font-size: 1.125em;
  float: left;
  margin-bottom: 25px;
  text-align: center;
}

.cooperation {
  margin-top: 30px;
  width: 100%;
}

.about_me {
  display: flex;
  margin-top: 30px;
  justify-content: center;
  width: 100%;
}

.product_mobile {
  width: 90%;
  align-items: center;
  margin: 20px auto;
  background: #F2F6FC;
}

.product_mobile_img_div {
  width: 50%;
  height: auto;
}

.product_mobile_content_one {
  margin-top: 20px;
  text-align: center;
}

.product_mobile_content_two {
  margin-top: 10px;
  text-align: center;
}

/* 屏幕设备适配 max-device-width: 400px */
@media screen and (max-device-width: 415px) {
  .slider_img {
    height: 250px;
    width: 100%;
  }

  .border_parent {
    display: flex;
    width: 90%;
    margin: auto;
    height: auto;
    flex-direction: column;
  }

  .border {
    border-radius: 6px;
    border: 1px solid #EBEEF5;
    float: left;
    width: 100%;
    height: auto;
    margin: 10px 0 auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
      /*background: aquamarine;*/
  }

  .border_img_parent {
    margin-top: 0;

  }

  .product_mobile {
    width: 90%;
    align-items: center;
    margin: 20px auto;
    height: auto;
    background: #F2F6FC;
  }

  .product_mobile_content {
    width: 100%;
    margin-top: 15px;
  }

  .product_mobile_content_one {
    margin-top: 5px;
  }

  .product_mobile_content_two {
    margin-top: 5px;
  }

  .product_mobile_img_div {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 15px;
  }

  .product_mobile_img {
    float: left;
  }

  .product_mobile_title {
    font-weight: bold;
  }

  .product_pc_one {
    width: 100%;
    margin-top: 15px;
  }

  .font_size_30 {
    font-size: 1.25em;
  }

  .product_font_style {
    font-size: 1em;
  }

  .product_pc_img {
    height: 280px;
    width: 320px;
  }

  .product_pc_img_div {
    width: 100%;
    float: left;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }

  .product_pc {
    display: flex;
    width: 90%;
    height: auto;
    margin: 20px auto;
    background: #F2F6FC;
    flex-direction: column;
  }

  .head-label {
    display: flex;
    margin-top: 10px;
  }

  .product_spec_parent {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    height: auto;
    flex-direction: column;
  }

  .border_spec {
    float: left;
    height: auto;
    margin: 8px;
    width: 100%;
    border-radius: 6px;
    border: 1px solid #EBEEF5;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .border_title {
    font-family: "PingFang SC";
    margin-top: 5px;
    font-size: 1.125em;
    font-weight: bold;
  }

  .border_content_one {
    margin-top: 5px;
    font-size: 1.125em;
  }

  .border_content_two {
    margin-top: 5px;
    font-size: 1.125em;
    margin-bottom: 8px;
  }

  .img_border {
    margin-top: 8px;
    width: 80px;
    height: 80px
  }

  .border_spec_inner_one {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    /*background-color: aqua;*/
    height: 70px;
  }

  .border_spec_content_one {
    margin-top: 5px;
    font-size: 1.125em;
    float: left;
  }

  .border_spec_inner_last {
    /*background-color: bisque;*/
    margin-top: 5px;
    font-size: 1.125em;
    float: left;
    margin-bottom: 8px;
  }

  .about_me {
    display: flex;
    margin-top: 10px;
    width: 100%;
  }
}

.border_spec_img {
  width: 75px;
  height: 55px;
  align-self: center
}

.font_size_24 {
  font-size: 1.5em;
}

.el-row {
  width: 100%;
}

.product_spec_parent {
  width: 72%;
}

.server-p {
  text-align: center;
  font-size: 28px;
  font-weight: 600;
}

.server-p-b {
  margin-top: 10px !important;
  border-bottom: 3px solid #c37b21;
  width: 3%;
  margin: auto;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.carousel-cls {
  width: 41%;
  margin: 0 auto;
  overflow-x: unset;

}
div/deep/.carousel-cls .el-image__inner {
    width: 100%;
    height: 100%;
    padding: 0 20px !important;
    background-color: #ffffff !important;
}

.mt50 {
  margin-top: 50px;
}

.mb50 {
  margin-bottom: 50px;
}
div/deep/.heng-cas .el-carousel__arrow {
  display: none !important;
}

.section_24 {
  background-color: rgba(34, 38, 43, 1);
  position: absolute;
  left: 0;
  top: 6798px;
  width: 100%;
  height: 273px;
}

.text-group_20 {
  width: 273px;
  height: 124px;
  margin: 45px 0 0 250px;
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
</style>
