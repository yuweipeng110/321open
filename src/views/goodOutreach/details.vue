<template>
  <div>
    <div v-if="seen" class="page flex-col">
      <div class="group_5 flex-col">
        <div class="box_1 flex-row">
          <div class="box_2" >
            <img :src="detail.avatar || require('@/assets/img/spzy/defaultImg.png')" />
        </div>
          <div class="section_4 flex-col justify-between">
            <div class="section_5 flex-row">
              <span class="text_11">{{ detail.nick || '默认用户' }}</span>
            </div>
            <span class="text_14"
              >{{
                detail.chang_num
              }}{{ detail.chang.length }}场景&nbsp;｜&nbsp;{{ detail.like }}关注&nbsp;｜&nbsp;{{ detail.haoping }}好评&nbsp;｜&nbsp;{{
                detail.pingfen
              }}分

            <el-popover placement="top" trigger="hover">
              <img
                class="label_3"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga0ed5a19746374fe5af5430d0cf3ac6d10b4608aef02422a466db4d5f68d930d"
                slot="reference"
              /><qrCode :text="currentUrl" />
            </el-popover>
              <template v-if="detail.renzheng === 1">
              <img
                class="image_2"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng59a5b9c82a4bd30748c82d3694de71969bf45a102764a8cc4c0f1c17f0dd9ebc"
              />
              <span class="text_12">实名认证</span>
              <img
                class="thumbnail_3"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng864db6eba90f65d7aedf199058cab4ae316477c6f87761bfbb286bf7ad61b4ea"
              />
              <span class="text_13">企业认证</span>
            </template>
              </span
            >
          </div>
          <div class="text-wrapper_2 flex-col gzBtn" @click="isFollow = true">
            <span class="text_15"> {{ isFollow ? "已关注" : "关注" }}</span>
          </div>
          <div class="text-wrapper_3 flex-col gzBtn" @click="handleClickCall">
            <span class="text_16">拨打电话</span>
          </div>
        </div>
        <div style="width: 1421px">
          <el-row style="width: 100%" :gutter="20">
            <el-col
              :span="8"
              style="padding-bottom: 20px"
              v-for="(item, key) in detail.chang"
              :key="key"
            >
              <div class="shotbox card_cls">
                <img
                  class="img"
                  :src="
                    item.img
                      ? item.img.split(',')[0]
                      : 'static/img/a5.373f4f29.jpg'
                  "
                  alt=""
                />
                <div class="txt-five">
                  <div class="fl" style="font-size: 20px">{{ item.title }}</div>

                  <div class="fr">{{ item.zujin }}</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <el-dialog
        title="电话拨打"
        :visible.sync="centerDialogVisible"
        width="30%"
        center
        class="desDio"
      >
        <span class="tc"> <i class="el-icon-phone" /> +86 1388888888888</span>
        <span slot="footer" class="dialog-footer tc">
          <el-button class="btn" @click="centerDialogVisible = false"
            >取 消</el-button
          >
          <el-button
            class="btn"
            type="primary"
            @click="centerDialogVisible = false"
            >呼 叫</el-button
          >
        </span>
      </el-dialog>
      <div class="mb50 tc mt50">
        <!-- <el-pagination background layout="prev, pager, next" :total="1000" /> -->
      </div>
    </div>
    <des v-else />
  </div>
</template>
<script>
import des from "./desdes.vue";
import { homeOuterLinkDetail } from "@/api/home";
import qrCode from "@/components/qrCode";
export default {
  components: {
    des,
    qrCode,
  },
  data() {
    return {
      seen: true,
      constants: {},
      tabRadio: "分类",
      isFollow: false,
      hasFiest: true,
      centerDialogVisible: false,
      detail: {},
      currentUrl: window.location.href,
    };
  },
  watch: {
    seen: {
      handler: function (val, oldVal) {
        if (document.body.clientWidth > 700) {
          this.seen = true;
        } else {
          this.seen = false;
        }
        console.log("this.seen ", this.seen);
      },
      // 深度观察监听
      deep: true,
    },
  },

  mounted() {
    this.getDetial(this.$route.query.id);
    // console.log(this.detail);
    // // this.imgObj = this.$route.query.imgObj
    // this.imgObj = this.$route.query.imgObj
    if (document.body.clientWidth > 700) {
      this.seen = true;
    } else {
      this.seen = false;
    }
    window.addEventListener("setItem", () => {
      const clientWidth = sessionStorage.getItem("seen");
      if (clientWidth > 700) {
        this.seen = true;
      } else {
        this.seen = false;
      }
    });
  },
  methods: {
    handleClickCall() {
      this.centerDialogVisible = true;
    },
    handleChange(val) {
      if (val === "棚(6)") {
        this.hasFiest = false;
      } else {
        this.hasFiest = true;
      }
    },

    async getDetial(id) {
      const res = await homeOuterLinkDetail({ uid: id });
      if (res.status == 200 && res.data.data) {
        console.log('detail',res.data.data);
        this.detail = res.data.data;
        console.log('detail',this.detail);
      }
    },
  },
};
</script>
<style scoped>
.aa-enter-active {
  animation: aniName 0.5s linear;
}

.aa-leave-active {
  animation: aniName 0.5s linear reverse;
}

@keyframes aniName {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
}

.block_1 {
  background-color: rgba(255, 255, 255, 0.88);
  width: 1920px;
  height: 100px;
}

.thumbnail_1 {
  width: 15px;
  height: 18px;
  margin: 54px 0 0 60px;
}

.text_1 {
  width: 37px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 50px 0 0 6px;
}

.thumbnail_2 {
  width: 9px;
  height: 5px;
  margin: 63px 0 0 4px;
}

.image_3 {
  width: 202px;
  height: 40px;
  margin: 30px 0 0 119px;
}

.text_2 {
  width: 41px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 76px;
}

.text_3 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 49px;
}

.text_4 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 49px;
}

.text-wrapper_1 {
  background-color: rgba(195, 123, 33, 1);
  height: 100px;
  margin-left: 11px;
  width: 120px;
}

.text_5 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 19px;
}

.text_6 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 11px;
}

.text_7 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 30px;
}

.text_8 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 30px;
}

.text_9 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 30px;
}

.label_1 {
  width: 38px;
  height: 38px;
  margin: 31px 0 0 83px;
}

.label_2 {
  width: 38px;
  height: 38px;
  margin: 31px 0 0 12px;
}

.text_10 {
  width: 92px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: right;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 16px;
}

.group_5 {
  position: relative;
  width: 1920px;
  height: auto;
  margin-bottom: 1px;
}

.box_1 {
  background-color: rgba(249, 249, 249, 1);
  width: 1421px;
  height: 193px;
  margin: 61px 0 0 0;
}

.box_2 {
  /* border-radius: 50%; */
  /* background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/994bdd6072524efc9063d2125e0f37b6_mergeImage.png); */
  width: 128px;
  margin-left:40px;
  /* margin: 32px 0 0 41px; */
  display: flex;
    justify-content: center;
    align-items: center;
  
}
.box_2 img{
  border-radius: 100%;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    width: 128px;
    height: 128px;
}

.section_4 {
  width: 496px;
  height: 75px;
  margin: 62px 0 0 29px;
}

.section_5 {
  width: 496px;
  height: 42px;
}

.text_11 {
  width: 183px;
  height: 42px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 30px;
  letter-spacing: 0.5px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 42px;
}

.label_3 {
  width: 22px;
  height: 22px;
  margin: 10px 0 0 7px;
}

.image_2 {
  width: 25px;
  height: 19px;
  margin: 10px 0 0 38px;
}

.text_12 {
  width: 74px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 7px 0 0 7px;
}

.thumbnail_3 {
  width: 20px;
  height: 20px;
  margin: 9px 0 0 38px;
}

.text_13 {
  width: 74px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 7px 0 0 8px;
}

.text_14 {
  width: 468px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin-top: 8px;
}

.text-wrapper_2 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 165px;
  margin: 69px 0 0 350px;
}

.text_15 {
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 13px auto;
}

.text-wrapper_3 {
  background-color: rgba(255, 255, 255, 1);
  height: 54px;
  border: 1px solid rgba(195, 123, 33, 1);
  width: 165px;
  margin: 69px 32px 0 15px;
}

.text_16 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 13px 0 0 42px;
}

.box_13 {
  width: 396px;
  height: 46px;
  margin: 72px 0 0 0;
}

.image-text_2 {
  width: 81px;
  height: 33px;
  margin-top: 6px;
}

.label_4 {
  width: 23px;
  height: 23px;
  margin-top: 6px;
}

.text-group_1 {
  width: 49px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text-wrapper_4 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 23px;
  height: 46px;
  margin-left: 25px;
  width: 140px;
}

.text_17 {
  width: 67px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 28px;
  margin: 9px 0 0 37px;
}

.text-wrapper_5 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 23px;
  height: 46px;
  margin-left: 20px;
  width: 130px;
}

.text_18 {
  width: 47px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 28px;
  margin: 9px 0 0 42px;
}

.box_14 {
  width: 1420px;
  height: 519px;
  margin: 52px 0 0 0;
}

.section_1 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/095d6b50b17a49028c1c33fbbd1ed015_mergeImage.png);
  width: 456px;
  height: 519px;
}

.text-group_14 {
  width: 147px;
  height: 120px;
  margin: 363px 0 0 37px;
}

.text_19 {
  width: 114px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_20 {
  width: 147px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 13px;
}

.text_21 {
  width: 127px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_6 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
  margin: 409px 31px 0 74px;
}

.text_22 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.text_23 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 50px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_24 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.section_2 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ae0a75c648084131844916ac5b52f9e6_mergeImage.png);
  width: 456px;
  height: 519px;
  margin-left: 26px;
}

.text-group_15 {
  width: 147px;
  height: 120px;
  margin: 363px 0 0 37px;
}

.text_25 {
  width: 114px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_26 {
  width: 147px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 13px;
}

.text_27 {
  width: 127px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_7 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
  margin: 409px 31px 0 74px;
}

.text_28 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.text_29 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 50px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_30 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.section_3 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/6c416c171bbc416a8d234263d0eed1e8_mergeImage.png);
  width: 456px;
  height: 519px;
  margin-left: 26px;
}

.text-group_16 {
  width: 147px;
  height: 120px;
  margin: 363px 0 0 38px;
}

.text_31 {
  width: 114px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_32 {
  width: 147px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 13px;
}

.text_33 {
  width: 127px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_8 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
  margin: 409px 31px 0 73px;
}

.text_34 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.text_35 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 50px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_36 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.box_6 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/f48cdb6c9557467496bd27c77dc1e7b3_mergeImage.png);
  width: 1420px;
  height: 519px;
  margin: 26px 0 0 0;
}

.text-group_17 {
  width: 147px;
  height: 120px;
  margin: 70px 0 0 1168px;
}

.text_37 {
  width: 114px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_38 {
  width: 147px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 13px;
}

.text_39 {
  width: 127px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_9 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
  margin: 171px 0 88px 1168px;
}

.text_40 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.text_41 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 50px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_42 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.box_15 {
  width: 1420px;
  height: 519px;
  margin: 26px 0 0 0;
}

.box_8 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ab39b749f56c47e2826894331abe8221_mergeImage.png);
  width: 456px;
  height: 519px;
}

.text-group_18 {
  width: 147px;
  height: 120px;
  margin: 363px 0 0 37px;
}

.text_43 {
  width: 114px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_44 {
  width: 147px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 13px;
}

.text_45 {
  width: 127px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_10 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
  margin: 409px 31px 0 74px;
}

.text_46 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.text_47 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 50px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_48 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.box_9 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/167bbd7b598643efbabb57c876f01be3_mergeImage.png);
  width: 456px;
  height: 519px;
  margin-left: 26px;
}

.text-group_19 {
  width: 147px;
  height: 120px;
  margin: 363px 0 0 37px;
}

.text_49 {
  width: 114px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_50 {
  width: 147px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 13px;
}

.text_51 {
  width: 127px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_11 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
  margin: 409px 31px 0 74px;
}

.text_52 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.text_53 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 50px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_54 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.box_10 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e52c002faefc483b9541d0bf3bcccc0a_mergeImage.png);
  width: 456px;
  height: 519px;
  margin-left: 26px;
}

.text-group_20 {
  width: 147px;
  height: 120px;
  margin: 363px 0 0 38px;
}

.text_55 {
  width: 114px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_56 {
  width: 147px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 13px;
}

.text_57 {
  width: 127px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_12 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
  margin: 409px 31px 0 73px;
}

.text_58 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.text_59 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 50px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_60 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.box_11 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/3083e71d5a5b43b2815176e0408ad982_mergeImage.png);
  width: 1420px;
  height: 519px;
  margin: 26px 0 0 0;
}

.text-group_21 {
  width: 147px;
  height: 120px;
  margin: 70px 0 0 1168px;
}

.text_61 {
  width: 114px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_62 {
  width: 147px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 13px;
}

.text_63 {
  width: 127px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_13 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
  margin: 171px 0 88px 1168px;
}

.text_64 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.text_65 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 50px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_66 {
  width: 167px;
  height: 70px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.text-wrapper_14 {
  background-color: rgba(13, 15, 17, 1);
  height: 67px;
  width: 1920px;
  margin: 441px 0 1px 0;
}

.text_67 {
  width: 447px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(253, 253, 253, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 18px 0 0 736px;
}

.box_12 {
  background-color: rgba(34, 38, 43, 1);
  position: absolute;
  left: 0;
  top: 2754px;
  width: 1920px;
  height: 273px;
}

.text-group_22 {
  width: 273px;
  height: 124px;
  margin: 45px 0 0 0;
}

.text_68 {
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

.text_69 {
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

.text_70 {
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

.box_16 {
  width: 113px;
  height: 129px;
  margin: 45px 0 0 113px;
}

.text-group_23 {
  width: 113px;
  height: 81px;
}

.text_71 {
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

.text_72 {
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

.text_73 {
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

.box_17 {
  width: 98px;
  height: 129px;
  margin: 45px 0 0 112px;
}

.text-group_24 {
  width: 98px;
  height: 81px;
}

.text_74 {
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

.text_75 {
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

.text_76 {
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

.text-group_25 {
  width: 98px;
  height: 81px;
  margin: 45px 0 0 113px;
}

.text_77 {
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

.text_78 {
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

.box_18 {
  width: 126px;
  height: 183px;
  margin: 45px 332px 0 292px;
}

.text_79 {
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

.block_3 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/3e41f357fd694a07a799bae7a04245bb_mergeImage.png);
  width: 126px;
  height: 126px;
  margin-top: 24px;
}

.gzBtn {
  cursor: pointer;
}

.gzBtn:hover {
  background: #ffffff;
  /* border-color: #c37b21; */
  /* border: 5px solid #c37b21; */
  transition: all 0.3s ease 0s;
}

.gzBtn:hover span {
  color: #c37b21;
}

.top_btn_r {
  cursor: pointer;
}

.top_btn_r:hover {
  background: #ffffff;
  border-color: #ffffff;
  transition: all 0.3s ease 0s;
}

.top_btn_r:hover span {
  color: #c37b21;
}

.card_cls {
  cursor: pointer;
}

.card_cls:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0);
}

.tc {
  font-size: 22px;
}

div/deep/.desDio .el-dialog__body {
  text-align: center;
}

div/deep/.choice_content .el-checkbox__input,
div/deep/.tab_content .el-radio__input {
  display: none;
}

div/deep/.choice_content .el-checkbox {
  width: 114px;
  margin-top: 3px;
  height: 38px;
  background: #f4f4f4;
  border-radius: 17px;
  text-align: center;
  border: none;
  margin-right: 18px;
  margin-left: 0;
}

div/deep/.tab_content .el-radio {
  width: 114px;
  margin-top: 3px;
  height: 46px;
  background: #f4f4f4;
  border-radius: 45px;
  text-align: center;
  border: none;
  margin-right: 18px;
  padding-top: 16px;
  margin-left: 0;

  transition: all 0.3s ease 0s;
}

div/deep/.tab_content .el-radio .el-radio__label {
  font-size: 16px;
}

div/deep/.choice_content .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #c37b21;
}

div/deep/.tab_content .el-radio.is-bordered.is-checked {
  background: #c37b21;
}

div/deep/.tab_content .el-radio__input.is-checked + .el-radio__label {
  color: #f6f0e8;
}

.mt56 {
  margin-top: 50px;
  /* height: 2000px; */
}

div/deep/.choice_content .el-checkbox.is-bordered + .el-checkbox.is-bordered {
  margin-left: 0;
  transition: all 0.3s ease 0s;
}

div/deep/.choice_content .el-checkbox.is-bordered:hover {
  color: #fff;
  background: #c37b21;
}

div/deep/.tab_content .el-radio.is-bordered:hover {
  color: #fff;
  background: #c37b21;
}

.tab_btn_t {
  border-radius: 20px;
  width: 113px;
  background: #f6f0e8;
  border-color: #f6f0e8;
  color: #c37b21;
  font-size: 18px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
}

.tab_btn_t:hover {
  background: #c37b21;
  border-color: #c37b21;
  color: #f6f0e8;
}

.box_centent > div {
  width: 436px;
}

.box_centent {
  width: fit-content;
}

.box_centent > div:first-child {
  margin-left: 20px;
}

.box_centent_pro {
  width: 1361px;
  margin-left: 20px;
}

.card_hover {
  opacity: 1;
  animation: fadedev 1s linear;
}

.box_hover {
  opacity: 1;
  animation: fadedev 1s linear;
}

@keyframes fadedev {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.btn {
  width: 160px;
  font-size: 16px;
}

@media (max-width: 1400px) {
  .box_1 {
    transform: translateX(-14px) scaleX(0.96);
  }

  .tab_content {
    transform: translateX(-14px) scaleX(0.96);
  }
}

.shotbox {
  position: relative;
}

.shotbox .img {
  height: 297px;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.shotbox .txt-five {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 68px;
  line-height: 37px;
  padding: 0 33px;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.shotbox .oneRow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 29px;
  font-size: 20px;
  text-align: left;
  width: 100%;
}

.shotbox .bot-img {
  width: 25px !important;
  height: 25px !important;
  border-radius: 25px !important;
  margin-top: 5px !important;
  margin-right: 10px !important;
  color: #070707;
  font-size: 15px;
  -webkit-transform: translateY(-7px);
  transform: translateY(-6px);
  object-fit: cover;
}

.shotbox .tyf12 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
}

.shotbox .pcmon {
  height: 22px;
  text-align: left;
  opacity: 0.9;
}

.shotbox .fl {
  float: left;
}

.shotbox .fr {
  float: right;
}
</style>
