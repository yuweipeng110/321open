<template>
  <div class="demand_content" :class="{ seenCls: !seen }">
    <div class="box_10 flex-col">
      <div v-if="seen" class="group_14 flex-row">
        <div
          v-if="btn1"
          class="text-wrapper_3 flex-col top_btn_l newtabBtn"
          :class="{ accc: param.status === '0' }"
          @click="fetchData({ status: '0' })"
        >
          <span class="text_12 f18 sadasd">进行中</span>
        </div>
        <div
          v-if="!btn1"
          class="text-wrapper_3 flex-col top_btn_l newtabBtn"
          :class="{ accc: param.status === '0' }"
          @click="fetchData({ status: '0' })"
        >
          <span class="text_12 f18 sadasd">进行中</span>
        </div>
        <div
          v-if="!btn1"
          class="text-wrapper_3 flex-col top_btn_l newtabBtn"
          :class="{ accc: param.status === '1' }"
          @click="fetchData({ status: '1' })"
        >
          <span class="text_12 f18 sadasd">圆满结束</span>
        </div>
        <div
          v-if="btn1"
          class="text-wrapper_3 flex-col top_btn_l newtabBtn"
          :class="{ accc: param.status === '1' }"
          @click="fetchData({ status: '1' })"
        >
          <span class="text_12 f18 sadasd">圆满结束</span>
        </div>
        <div
          v-if="tabtn === 1"
          class="box_1 flex-row top_btn_r"
          @click="handle(2)"
        >
          <span class="text_13 f18 m13p">发布时间</span>
          <i class="el-icon-caret-bottom thumbnail_3" />
        </div>
        <div
          v-if="tabtn === 2"
          class="box_1 flex-row top_btn_r"
          @click="handle(1)"
        >
          <span class="text_13 f18 m13p">发布时间</span>
          <i class="el-icon-caret-top thumbnail_3" />
        </div>
        <div
          v-if="tabtn1 === 1"
          class="box_2 flex-row top_btn_r"
          @click="handle1(2)"
        >
          <span class="text_14 f18 m48p">投标量</span>
          <i class="el-icon-caret-bottom thumbnail_3" />
        </div>
        <div
          v-if="tabtn1 === 2"
          class="box_2 flex-row top_btn_r"
          @click="handle1(1)"
        >
          <span class="text_14 f18 m48p">投标量</span>
          <i class="el-icon-caret-top thumbnail_3" />
        </div>
        <div
          v-if="tabtn2 === 1"
          class="box_3 flex-row top_btn_r"
          @click="handle2(2)"
        >
          <span class="text_15 f18 m59p">预算</span>
          <i class="el-icon-caret-bottom thumbnail_3" />
        </div>
        <div
          v-if="tabtn2 === 2"
          class="box_3 flex-row top_btn_r"
          @click="handle2(1)"
        >
          <span class="text_15 f18 m59p">预算</span>
          <i class="el-icon-caret-top thumbnail_3" />
        </div>
      </div>
      <pho v-if="!seen" />
      <img
        class="image_2"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng52bfd8ea1b96be5c613c4e62f54b780066b3530017e03b29de9d2985430339fb"
      />
      <div class="card_cls">
        <el-row :gutter="10">
          <template v-if="seen">
            <el-col v-for="(item,index) in xuqiuHome" :key="index" :span="seen ? 8 : 12">
              <el-card shadow="hover" @click.native="handleClick(item.id)">
                <img :src="item.img" class="image" />
                <div class="a_con" style="padding: 14px">
                  <span class="top_w_z">{{ item.title }}</span>

                  <div class="bottom clearfix">
                    <span
                      style="
                        float: right;
                        color: #c37b21;
                        position: relative;
                        top: 15px;
                      "
                      >预算:{{ parseInt(item.money) }}</span
                    >
                    <img
                      class="bot-img"
                      :src="
                        item.avatar ||
                        require('@/assets/img/spzy/defaultImg.png')
                      "
                      alt=""
                    />
                    <span class="tyf12">{{
                      item.nick || "默认发布人" + item.id
                    }}</span>
                  </div>
                  <div class="bottom clearfix">
                    <time class="dow_w_z">发布时间：{{ item.addtime }}</time>
                  </div>
                </div>
              </el-card>
            </el-col>
          </template>
        </el-row>

        <el-row v-if="seen">
          <el-col :span="24" class="tc">
            <el-pagination background layout="prev, pager, next" :total="100" />
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import pho from "./phone.vue";
export default {
  components: {
    pho,
  },
  data() {
    return {
      seen: true,
      tabtn: 1,
      btn1: true,
      tabtn1: 1,
      tabtn2: 1,
      param: {
        page: "1",
        limit: "10",
        status: "0",
        area_id: "1",
        addtime: "1",
        t_num: "1",
      },
    };
  },
  computed: {
    xuqiuHome: function () {
      // console.log('this.$store.state.user.homeNeedCenter', this.$store.state.user.homeNeedCenter);
      return this.$store.state.user.homeNeedCenter;
    },
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        if (document.body.clientWidth > 700) {
          this.seen = true;
        } else {
          this.seen = false;
        }
      },
      // 深度观察监听
      deep: true,
    },
  },
  mounted() {
    if (document.body.clientWidth > 700) {
      this.seen = true;
    } else {
      this.seen = false;
    }
    window.addEventListener("setItem", () => {
      const clientWidth = sessionStorage.getItem("seen");
      // console.log(clientWidth, 'this.seen')
      if (clientWidth > 700) {
        this.seen = true;
      } else {
        this.seen = false;
      }
    });

    this.fetchData();
  },
  methods: {
    fetchData(param) {
      if (param && param.status) {
        this.param.status = param.status;
      }

      this.param.addtime = "" + this.tabtn;
      this.param.t_num = "" + this.tabtn1;
      this.param.money = "" + this.tabtn2;
      console.log("fetchData", JSON.stringify(this.param));
      this.$store.dispatch("user/get_contentAct", this.param);
    },
    handleClick(id) {
      this.$router.push({
        path: "/demand/details",
        query: { id: id },
      });
    },
    handle(val) {
      this.tabtn = val;
      this.fetchData();
    },
    handle1(val) {
      this.tabtn1 = val;
      this.fetchData();
    },
    handle2(val) {
      this.tabtn2 = val;
      this.fetchData();
    },
    handleCheck(val) {
      this.btn1 = !this.btn1;
    },
  },
};
</script>

<style scoped>
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

.text-wrapper_1 {
  background-color: rgba(195, 123, 33, 1);
  height: 100px;
  margin-left: 25px;
  width: 120px;
}

.text_4 {
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
  margin: 36px 0 0 24px;
}

.text_5 {
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
  margin: 36px 0 0 16px;
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
  margin: 36px 0 0 30px;
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

.box_10 {
  position: relative;
  width: 1920px;
  height: auto;
  margin-bottom: 1px;
}

.group_14 {
  width: 1419px;
  height: 66px;
  margin: 56px 0 0 0;
}

.text-wrapper_2 {
  background-color: rgba(246, 240, 232, 1);
  border-radius: 33px;
  height: 56px;
  width: 153px;
}

.text_11 {
  width: 92px;
  height: 42px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 24px;
  letter-spacing: 0.5px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 42px;
  margin: 7px 0 0 40px;
}

.text-wrapper_3 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  height: 66px;
  margin-left: 30px;
  width: 160px;
}

.text_12 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 43px;
  margin: 16px 0 0 31px;
}

.box_1 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  width: 160px;
  height: 46px;
  margin: 20px 0 0 529px;
}

.text_13 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 8px 0 0 29px;
}

.thumbnail_3 {
  width: 13px;
  height: 13px;
  margin: 16px 28px 0 8px;
}

.box_2 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  width: 160px;
  height: 46px;
  margin: 20px 0 0 20px;
}

.text_14 {
  width: 61px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 8px 0 0 40px;
}

.thumbnail_4 {
  width: 13px;
  height: 13px;
  margin: 16px 38px 0 8px;
}

.box_3 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  width: 160px;
  height: 46px;
  margin: 20px 0 0 20px;
}

.text_15 {
  width: 41px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 8px 0 0 50px;
}

.thumbnail_5 {
  width: 13px;
  height: 13px;
  margin: 16px 48px 0 8px;
}

.image_2 {
  width: 1421px;
  height: 1px;
  margin: 29px 0 0 0;
}

.grid_2 {
  width: 1419px;
  height: 2162px;
  flex-wrap: wrap;
  margin: 73px 0 0 0;
}

.section_3 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4bf676745856430cb4d2f17174858547_mergeImage.png);
  height: 324px;
  margin-right: 25px;
  width: 456px;
}

.section_3:nth-child(3n) {
  margin-right: 0;
}

.section_3:nth-last-child(-n + 3) {
  margin-bottom: 0;
}

.text-wrapper_4 {
  background-color: rgba(207, 119, 0, 1);
  height: 45px;
  width: 120px;
}

.text_16 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 9px 0 0 19px;
}

.section_4 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4ab798a4c2214c0e904bf05df11d538e_mergeImage.png);
  height: 324px;
  margin-right: 26px;
  width: 456px;
}

.text-wrapper_5 {
  background-color: rgba(207, 119, 0, 1);
  height: 45px;
  width: 120px;
}

.text_17 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 9px 0 0 19px;
}

.section_5 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/65c564b43f2a4c9b86493346f320f722_mergeImage.png);
  height: 324px;
  width: 456px;
}

.text-wrapper_6 {
  background-color: rgba(207, 119, 0, 1);
  height: 45px;
  width: 120px;
}

.text_18 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 9px 0 0 19px;
}

.section_6 {
  background-color: rgba(249, 249, 249, 1);
  width: 456px;
  height: 197px;
  margin-right: 25px;
}

.text_19 {
  width: 274px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 32px 0 0 30px;
}

.box_11 {
  width: 131px;
  height: 41px;
  margin: 26px 0 0 30px;
}

.section_7 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/a84411f7f9ff4ab78a39784171681f90_mergeImage.png);
  width: 41px;
  height: 41px;
}

.text_20 {
  width: 82px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 10px;
}

.text_21 {
  width: 171px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin: 20px 0 23px 30px;
}

.section_8 {
  background-color: rgba(249, 249, 249, 1);
  width: 456px;
  height: 197px;
  margin-right: 26px;
}

.text_22 {
  width: 293px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 32px 0 0 30px;
}

.group_15 {
  width: 131px;
  height: 41px;
  margin: 26px 0 0 30px;
}

.section_9 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/cfad78b68cf44e38b63d8dc01420b175_mergeImage.png);
  width: 41px;
  height: 41px;
}

.text_23 {
  width: 82px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 10px;
}

.text_24 {
  width: 171px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin: 20px 0 23px 30px;
}

.section_10 {
  background-color: rgba(249, 249, 249, 1);
  width: 456px;
  height: 197px;
}

.text_25 {
  width: 309px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 32px 0 0 30px;
}

.section_34 {
  width: 130px;
  height: 41px;
  margin: 26px 0 0 30px;
}

.box_4 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/05a175f109f54580adcffa78c7d5d110_mergeImage.png);
  width: 41px;
  height: 41px;
}

.text_26 {
  width: 82px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 10px;
}

.text_27 {
  width: 171px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin: 20px 0 23px 30px;
}

.section_12 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/cf8ff4a018ed4636a11a6cb64fa1559c_mergeImage.png);
  height: 324px;
  margin-right: 25px;
  width: 456px;
}

.text-wrapper_7 {
  background-color: rgba(207, 119, 0, 1);
  height: 45px;
  width: 120px;
}

.text_28 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 8px 0 0 19px;
}

.section_13 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19247e1a19b6400486fd5e4b0fb0cb8d_mergeImage.png);
  height: 324px;
  margin-right: 26px;
  width: 456px;
}

.text-wrapper_8 {
  background-color: rgba(207, 119, 0, 1);
  height: 45px;
  width: 120px;
}

.text_29 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 8px 0 0 19px;
}

.section_14 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ae1b894030274487b1d81ecb40c925ff_mergeImage.png);
  height: 324px;
  width: 456px;
}

.text-wrapper_9 {
  background-color: rgba(207, 119, 0, 1);
  height: 45px;
  width: 120px;
}

.text_30 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 8px 0 0 19px;
}

.section_15 {
  background-color: rgba(249, 249, 249, 1);
  width: 456px;
  height: 197px;
  margin-right: 25px;
}

.text_31 {
  width: 274px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 32px 0 0 30px;
}

.block_5 {
  width: 130px;
  height: 41px;
  margin: 27px 0 0 30px;
}

.block_2 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fe7d7c5142564f5c98b40ba6c51dd457_mergeImage.png);
  width: 41px;
  height: 41px;
}

.text_32 {
  width: 82px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 9px;
}

.text_33 {
  width: 171px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin: 19px 0 23px 30px;
}

.section_16 {
  background-color: rgba(249, 249, 249, 1);
  width: 456px;
  height: 197px;
  margin-right: 26px;
}

.text_34 {
  width: 293px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 32px 0 0 30px;
}

.group_16 {
  width: 131px;
  height: 41px;
  margin: 27px 0 0 30px;
}

.box_6 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/1fbabe072a864167a3c043ef897ef70e_mergeImage.png);
  width: 41px;
  height: 41px;
}

.text_35 {
  width: 82px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 9px;
}

.text_36 {
  width: 171px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin: 19px 0 23px 30px;
}

.section_17 {
  background-color: rgba(249, 249, 249, 1);
  width: 456px;
  height: 197px;
}

.text_37 {
  width: 309px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 32px 0 0 30px;
}

.box_12 {
  width: 130px;
  height: 41px;
  margin: 27px 0 0 30px;
}

.section_18 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/41fff9177fcb431caafdfa5916068ae1_mergeImage.png);
  width: 41px;
  height: 41px;
}

.text_38 {
  width: 82px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 9px;
}

.text_39 {
  width: 171px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin: 19px 0 23px 30px;
}

.section_19 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e594ed5f95dc4ffb9b9645b7e18a71f3_mergeImage.png);
  height: 324px;
  margin-right: 25px;
  width: 456px;
}

.text-wrapper_10 {
  background-color: rgba(207, 119, 0, 1);
  height: 45px;
  width: 120px;
}

.text_40 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 9px 0 0 19px;
}

.section_20 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/3c91f42a8a7f4672b3d5093b5b0c5cb9_mergeImage.png);
  height: 324px;
  margin-right: 26px;
  width: 456px;
}

.text-wrapper_11 {
  background-color: rgba(207, 119, 0, 1);
  height: 45px;
  width: 120px;
}

.text_41 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 9px 0 0 19px;
}

.section_21 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/c4833275dabc4f05a83fe65e34ec647b_mergeImage.png);
  height: 324px;
  width: 456px;
}

.text-wrapper_12 {
  background-color: rgba(207, 119, 0, 1);
  height: 45px;
  width: 120px;
}

.text_42 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 9px 0 0 19px;
}

.section_22 {
  background-color: rgba(249, 249, 249, 1);
  width: 456px;
  height: 197px;
  margin-right: 25px;
}

.text_43 {
  width: 274px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 32px 0 0 30px;
}

.group_17 {
  width: 130px;
  height: 41px;
  margin: 26px 0 0 30px;
}

.group_5 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fd4686eb221a4503a6f977aa2dad9e07_mergeImage.png);
  width: 41px;
  height: 41px;
}

.text_44 {
  width: 82px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 10px;
}

.text_45 {
  width: 171px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin: 20px 0 23px 30px;
}

.section_23 {
  background-color: rgba(249, 249, 249, 1);
  width: 456px;
  height: 197px;
  margin-right: 26px;
}

.text_46 {
  width: 293px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 32px 0 0 30px;
}

.box_13 {
  width: 131px;
  height: 41px;
  margin: 26px 0 0 30px;
}

.section_24 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/425b98e8affb47be8b6305120a51a84f_mergeImage.png);
  width: 41px;
  height: 41px;
}

.text_47 {
  width: 82px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 10px;
}

.text_48 {
  width: 171px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin: 20px 0 23px 30px;
}

.section_25 {
  background-color: rgba(249, 249, 249, 1);
  width: 456px;
  height: 197px;
}

.text_49 {
  width: 309px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 32px 0 0 30px;
}

.block_6 {
  width: 130px;
  height: 41px;
  margin: 26px 0 0 30px;
}

.group_7 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/df66fd8e87ca4a98ade67b0d2014c67e_mergeImage.png);
  width: 41px;
  height: 41px;
}

.text_50 {
  width: 82px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 10px;
}

.text_51 {
  width: 171px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin: 20px 0 23px 30px;
}

.section_26 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/24de3d75e41948c3a26232bd475d9a09_mergeImage.png);
  height: 324px;
  margin-right: 25px;
  width: 456px;
}

.text-wrapper_13 {
  background-color: rgba(207, 119, 0, 1);
  height: 45px;
  width: 120px;
}

.text_52 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 8px 0 0 19px;
}

.section_27 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/926e4da6f3a740f39fa7e6c5ca6c43ac_mergeImage.png);
  height: 324px;
  margin-right: 26px;
  width: 456px;
}

.text-wrapper_14 {
  background-color: rgba(207, 119, 0, 1);
  height: 45px;
  width: 120px;
}

.text_53 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 8px 0 0 19px;
}

.section_28 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/d555b2aa97b445cd89ab9fe6832a0066_mergeImage.png);
  height: 324px;
  width: 456px;
}

.text-wrapper_15 {
  background-color: rgba(207, 119, 0, 1);
  height: 45px;
  width: 120px;
}

.text_54 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 8px 0 0 19px;
}

.section_29 {
  background-color: rgba(249, 249, 249, 1);
  width: 456px;
  height: 197px;
  margin-right: 25px;
}

.text_55 {
  width: 274px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 32px 0 0 30px;
}

.block_7 {
  width: 130px;
  height: 41px;
  margin: 27px 0 0 30px;
}

.section_30 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/8776f41b130a4e39a4779a64c1afe02a_mergeImage.png);
  width: 41px;
  height: 41px;
}

.text_56 {
  width: 82px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 9px;
}

.text_57 {
  width: 171px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin: 19px 0 23px 30px;
}

.section_31 {
  background-color: rgba(249, 249, 249, 1);
  width: 456px;
  height: 197px;
  margin-right: 26px;
}

.text_58 {
  width: 293px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 32px 0 0 30px;
}

.box_14 {
  width: 131px;
  height: 41px;
  margin: 27px 0 0 30px;
}

.box_9 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/1ffa9bf81555475f8cae8ceb7245055a_mergeImage.png);
  width: 41px;
  height: 41px;
}

.text_59 {
  width: 82px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 9px;
}

.text_60 {
  width: 171px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin: 19px 0 23px 30px;
}

.section_32 {
  background-color: rgba(249, 249, 249, 1);
  width: 456px;
  height: 197px;
}

.text_61 {
  width: 309px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 32px 0 0 30px;
}

.box_15 {
  width: 130px;
  height: 41px;
  margin: 27px 0 0 30px;
}

.group_9 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/5c30fdfa3f6341f48e46058ab6416760_mergeImage.png);
  width: 41px;
  height: 41px;
}

.text_62 {
  width: 82px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 9px;
}

.text_63 {
  width: 171px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin: 19px 0 23px 30px;
}

.text-wrapper_16 {
  background-color: rgba(13, 15, 17, 1);
  height: 58px;
  width: 1920px;
  margin: 377px 0 1px 0;
}

.text_64 {
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

.group_10 {
  background-color: rgba(34, 38, 43, 1);
  position: absolute;
  left: 0;
  top: 2499px;
  width: 1920px;
  height: 273px;
}

.text-group_5 {
  width: 273px;
  height: 124px;
  margin: 45px 0 0 0;
}

.text_65 {
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

.text_66 {
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

.text_67 {
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

.group_18 {
  width: 113px;
  height: 129px;
  margin: 45px 0 0 113px;
}

.text-group_6 {
  width: 113px;
  height: 81px;
}

.text_68 {
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

.text_69 {
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

.text_70 {
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

.group_19 {
  width: 98px;
  height: 129px;
  margin: 45px 0 0 112px;
}

.text-group_7 {
  width: 98px;
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

.text-group_8 {
  width: 98px;
  height: 81px;
  margin: 45px 0 0 113px;
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

.group_20 {
  width: 126px;
  height: 183px;
  margin: 45px 332px 0 292px;
}

.text_76 {
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

.block_4 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/05ef5cbc05ae4eb8a8b971edbd2d99dd_mergeImage.png);
  width: 126px;
  height: 126px;
  margin-top: 24px;
}

.demand_content {
  max-width: 1400px;
  margin: 0 auto;
}

.top_btn_l {
  height: 56px;
  cursor: pointer;
  width: 133px;
}

.top_btn_r i {
  color: #c37b21;
}

.top_btn_l:hover,
.top_btn_r:hover {
  background: #c37b21;
  border-color: #c37b21;
  transition: all 0.3s ease 0s;
}

.top_btn_l:hover span,
.top_btn_r:hover span,
.top_btn_r:hover i {
  color: #ffffff;
}

.top_btn_l span {
  font-size: 24px;
  text-align: center;
  margin: 7px auto;
}

.top_btn_r {
  cursor: pointer;
}

.mtf10 {
  margin-top: -10px;
}

/*
.cart_img:hover {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
}

.cart_img {
  display: inline-block;
  -webkit-transition: all 1s ease 0s;
  transition: all 1s ease 0s;
  margin-right: 0;
}

.img_wai {
  overflow: hidden;
 width: 32.5%;
}
.cart_img .text-wrapper_4{
  transition: all 1s ease 0s;
}
.cart_img:hover .text-wrapper_4 {
  transform: scale(0.8);
} */

.img_wai {
  /* border: 2px solid transparent; */
  transition: all 1s ease 0s;
  cursor: pointer;
}

/* .img_wai:hover{
  border: 2px solid #c37b21;
  border-bottom: none;
} */
.img_wai .cart_img {
  margin-right: 0;
}

.card_cls {
  max-width: 1400px;
  margin-top: 50px;
}

div/deep/.card_cls .el-card__body {
  padding: 0;
}

div/deep/ .el-card {
  width: 100%;
  margin: 10px auto;
  overflow: hidden;
  cursor: pointer;
}

div/deep/ .card_cls .image {
  width: 100%;
  height: 370px;
  display: inline-block;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

div/deep/ .el-card:hover .image {
  /* -webkit-transform: scaleX(1.2);
  transform: scaleX(1.2); */
}

.bot-img {
  width: 41px;
  height: 41px;
  border-radius: 25px;
  margin-top: 5px;
  margin-right: 10px;
  color: #070707;
  font-size: 15px;
}

.bot-img span {
  margin-top: -29px;
  height: 21px;
  line-height: 16px;
  display: flex;
  margin-left: 54px;
}

.top_w_z {
  width: 274px;
  height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #070707;
  line-height: 33px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  display: block;
}

.dow_w_z {
  margin-top: 15px;
  color: #999999;
}

.tc {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.bottom {
  margin-bottom: 2px;
}

.f18 {
  font-size: 18px !important;
}

.m13p {
  margin: 10px 0 0 33px;
}

.m48p {
  margin: 10px 0 0 48px;
}

.m59p {
  margin: 10px 0 0 59px;
}

.el-card {
  /* border: none; */
}

div/deep/.el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0);
  box-shadow: 0 2px 12px 0 rgb(0 0 0);
}

.tyf12 {
  transform: translateY(-12px);
  display: inline-block;
}

.seenCls {
  max-width: 100%;
}

.seenCls .box_10 {
  width: 100%;
}

.seenCls .card_cls {
  max-width: 100%;
  margin: 50px auto;
  transform: translateX(0px) scaleX(0.951);
}

.seenCls .card_cls .image {
  height: 140px;
}

.seenCls .top_w_z {
  font-size: 16px;
}

.seenCls .bot-img {
  width: 36px;
  height: 34px;
  border-radius: 25px;
  margin-top: 5px;
  margin-right: 16px;
  color: #070707;
  font-size: 15px;
}

.seenCls .dow_w_z {
  font-size: 10px;
}

.seenCls .card_cls {
  margin-top: 20px;
}

.newtabBtn {
  height: 46px;
  transform: translateY(18px);
}

.sadasd {
  transform: translateY(-4px);
}

.accc {
  background-color: #c37b21;
}

.accc span {
  color: #fff !important;
}

@media (max-width: 1400px) {
  .card_cls {
    transform: translateX(3px) scaleX(0.96);
  }
}

.seenCls .card_cls .image {
  height: 130px;
}

@media only screen and (min-width: 390px) and (max-width: 400px) {
  .seenCls .card_cls .image {
    height: 126px;
  }
}

@media only screen and (min-width: 401px) and (max-width: 460px) {
  .seenCls .card_cls .image {
    height: 146px;
  }
}

.seenCls .a_con {
  padding: 0 14px !important;
}
</style>
