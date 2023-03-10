<template>
  <div>
    <div v-if="seen" class="page flex-col">
      <div class="section_14 flex-col">
        <div class="search-top">
          <el-row>
            <el-col :span="12">
              <el-radio-group v-model="radio" size="medium " class="m4050">
                <el-radio :label="1">场景</el-radio>
                <el-radio :label="2">演员</el-radio>
                <el-radio :label="3">住宿</el-radio>
                <el-radio :label="4">车辆</el-radio>
                <el-radio :label="5">道具</el-radio>
                <el-radio :label="6">服装</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :span="12">
              <el-input
                v-model="input2"
                placeholder="搜索场景关键词、编号"
                size="medium "
                class="right_search"
              >
                <template slot="append">搜索</template>
              </el-input>
            </el-col>
          </el-row>
        </div>
        <div
          class="box_8 flex-row justify-between wfc"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="block_3 flex-col" style="height: 488px">
            <!-- <div class="box_1 flex-col" /> -->
            <router-link
              :to="{
                path: '/goodOutreach/details',
                query: { id: item.id },
              }"
            >
              <img :src="item.avatar" class="box_1 flex-col"
            /></router-link>
            <div class="text-group_11 flex-col justify-between">
              <router-link
                :to="{
                  path: '/goodOutreach/details',
                  query: { id: item.id },
                }"
              >
                <span class="text_14">{{ item.nick }}</span></router-link
              >
              <span class="text_15"
                >场景&nbsp;{{ item.chang_num }} ｜评分 {{ item.eva }}</span
              >
            </div>
            <div
              class="text-wrapper_5 flex-col gzBtn"
              :class="{ activeBtn: actBtn }"
              @click="concern(item.id)"
            >
              <span class="text_16">{{ actBtn ? "已关注" : "关注" }}</span>
            </div>
          </div>
          <div class="section_15 flex-col justify-between">
            <div class="block_13 flex-row justify-between w1100">
              <el-row style="width: 100%" :gutter="20">
                <el-col
                  :span="8"
                  style="padding-bottom: 20px"
                  v-for="(changItem, changKey) in item.chang"
                  :key="changKey"
                >
                  <router-link
                    :to="{
                      path: '/shotDetails/details',
                      query: { id: changItem.id },
                    }"
                  >
                    <div class="shotbox card_cls">
                      <img
                        class="img"
                        :src="
                          changItem.img
                            ? changItem.img.split(',')[0]
                            : 'static/img/a5.373f4f29.jpg'
                        "
                        alt=""
                      />
                      <div class="txt-five">
                        <div class="oneRow">{{ changItem.title }}</div>
                        <div>
                          <div class="fl">
                            <img
                              :src="
                                changItem.avatar ||
                                require('@/assets/img/spzy/defaultImg.png')
                              "
                              alt=""
                              class="bot-img"
                            /><span class="tyf12">{{
                              changItem.nick || "默认用户"
                            }}</span>
                          </div>
                          <div class="fr">
                            <div class="pcmon phoneMon">
                              {{ changItem.zujin }}/天
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </el-col>
              </el-row>
              <!-- <div class="text-wrapper_6 flex-col card_cls w540" :class="{ textBlack: !item.chang[0].img }"
                v-if="item.chang[0]" @click="handleClick(item)"
                :style="{ backgroundImage: 'url(' + item.chang[0].img + ')' }">
                <span class="text_17">{{ item.chang[0].title }}</span>
              </div>
              <div class="text-wrapper_7 flex-col card_cls" :class="{ textBlack: !item.chang[0].img }"
                v-if="item.chang[1]" @click="handleClick(item)"
                :style="{ backgroundImage: 'url(' + item.chang[1].img + ')' }">
                <span class="text_18">{{ item.chang[1].title }}</span>
              </div> -->
            </div>
            <div
              class="text-wrapper_8 flex-col card_cls w1100"
              :class="{ textBlack: !item.chang[0].img }"
              v-if="item.chang[2]"
              @click="handleClick(item)"
              :style="{ backgroundImage: `url(${item.chang[2].img})` }"
            >
              <span class="text_19">{{ item.chang[2].title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <des v-else />
  </div>
</template>
<script>
import { homeOuterLink } from "@/api/home";
import { addGuanzhu } from "@/api/user";
import des from "./phoneDes.vue";
export default {
  components: {
    des,
  },
  data() {
    return {
      actBtn: false,
      seen: true,
      radio: 1,
      input2: "",
      list: [],
    };
  },
  mounted() {
    this.getHomeOuterLink();
    this.imgObj = this.$route.query.imgObj;
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
    async getHomeOuterLink() {
      let res = await homeOuterLink();
      if (res.status == 200) {
        this.list = res.data.data;
      }
    },
    async concern(gid) {
      const loginUserId = this.$store.state.user.id;
      if (!loginUserId) {
        this.$message.error("失败，请先登录");
        return;
      }
      const paramsData = {
        uid: loginUserId,
        gid,
      };
      const res = await addGuanzhu(paramsData);
      if (res.status == 200) {
        this.$message({
          type: "success",
          message: "关注成功",
        });
        this.getHomeOuterLink();
      } else {
        this.$message.error("失败，请刷新重试");
      }
    },
    handClickBtn() {
      this.actBtn = true;
    },
    handleClick(id) {
      this.$router.push({
        name: "goodOutreachdetails",
        params: { id },
      });
    },
  },
};
</script>
<style scoped>
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  max-width: 1400px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
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
  margin: 36px 250px 0 16px;
}

.section_14 {
  position: relative;
  width: 1920px;
  height: auto;
  margin-bottom: 1px;
}

.box_7 {
  width: 1419px;
  height: 66px;
  margin: 56px 0 0 0;
}

.text-wrapper_2 {
  background-color: rgba(246, 240, 232, 1);
  border-radius: 33px;
  height: 66px;
  width: 160px;
}

.text_11 {
  width: 61px;
  height: 42px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 30px;
  letter-spacing: 0.5px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 42px;
  margin: 12px 0 0 49px;
}

.text-wrapper_3 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  height: 66px;
  margin-left: 40px;
  width: 160px;
}

.text_12 {
  width: 74px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 16px 0 0 43px;
}

.text-wrapper_4 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  height: 66px;
  margin-left: 40px;
  width: 140px;
}

.text_13 {
  width: 49px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 16px 0 0 45px;
}

.group_1 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  width: 160px;
  height: 46px;
  margin: 20px 0 0 359px;
}

.group_2 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  width: 160px;
  height: 46px;
  margin: 20px 0 0 20px;
}

.group_3 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  width: 160px;
  height: 46px;
  margin: 20px 0 0 20px;
}

.image_2 {
  width: 1421px;
  height: 1px;
  margin: 29px 0 0 0;
}

.box_8 {
  width: 1421px;
  height: 511px;
  margin: 25px 0 0 0;
}

.block_3 {
  background-color: rgba(246, 240, 232, 1);
  width: 289px;
  height: 511px;
}

.box_1 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/6daeb23e441149d7b6e902641dafb896_mergeImage.png);
  width: 120px;
  height: 120px;
  margin: 87px 0 0 84px;
}

.text-group_11 {
  width: 147px;
  height: 75px;
  margin: 22px 0 0 70px;
}

.text_14 {
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
}

.text_15 {
  width: 137px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 17px 0 0 6px;
}

.text-wrapper_5 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 165px;
  margin: 39px 0 114px 62px;
}

.text_16 {
  width: 41px;
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
  margin: 14px 0 0 62px;
}

.section_15 {
  width: 1106px;
  height: 511px;
}

.block_13 {
  width: 1106px;
  height: 270px;
}

.text-wrapper_6 {
  /* background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e8906c062f684b5ca649b5529a59a5c4_mergeImage.png); */
  height: 270px;
  width: 550px;
}

.text_17 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_7 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/aa777c9227e144b2bda90cf3398c538c_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_18 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_8 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/2c6a65c1682f4c0b8a7c28c89af627d2_mergeImage.png);
  height: 231px;
  margin-top: 10px;
  width: 1106px;
}

.text_19 {
  width: 56px;
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
  margin: 180px 0 0 30px;
}

.box_9 {
  width: 1421px;
  height: 511px;
  margin: 72px 0 0 0;
}

.group_4 {
  background-color: rgba(246, 240, 232, 1);
  width: 289px;
  height: 511px;
}

.block_5 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ab92df70229e4d4996b78f7f27740773_mergeImage.png);
  width: 120px;
  height: 120px;
  margin: 88px 0 0 84px;
}

.text-group_12 {
  width: 147px;
  height: 75px;
  margin: 22px 0 0 70px;
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
}

.text_21 {
  width: 137px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 17px 0 0 6px;
}

.text-wrapper_9 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 165px;
  margin: 39px 0 113px 62px;
}

.text_22 {
  width: 41px;
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
  margin: 12px 0 0 62px;
}

.group_12 {
  width: 1106px;
  height: 511px;
}

.box_10 {
  width: 1106px;
  height: 270px;
}

.text-wrapper_10 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/c774401bbd47471b969aa1a18fa92812_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_23 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_11 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/2a0d4df76799482d9d461d41918dbbf4_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_24 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_12 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fc13b44056584e1ea6aab05480575dbc_mergeImage.png);
  height: 231px;
  margin-top: 10px;
  width: 1106px;
}

.text_25 {
  width: 56px;
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
  margin: 180px 0 0 30px;
}

.box_11 {
  width: 1421px;
  height: 511px;
  margin: 72px 0 0 0;
}

.box_3 {
  background-color: rgba(246, 240, 232, 1);
  width: 289px;
  height: 511px;
}

.group_7 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/68b2238010d64548a46750069be829de_mergeImage.png);
  width: 120px;
  height: 120px;
  margin: 87px 0 0 84px;
}

.text-group_13 {
  width: 147px;
  height: 75px;
  margin: 22px 0 0 70px;
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
}

.text_27 {
  width: 137px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 17px 0 0 6px;
}

.text-wrapper_13 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 165px;
  margin: 39px 0 114px 62px;
}

.text_28 {
  width: 41px;
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
  margin: 14px 0 0 62px;
}

.group_13 {
  width: 1106px;
  height: 511px;
}

.section_16 {
  width: 1106px;
  height: 270px;
}

.text-wrapper_14 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/85ea58f83b44432190c6cf7583db57d9_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_29 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_15 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/80b65457947046a09b3eec4b8aa99bb6_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_30 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_16 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4793e79580df43e5a551302d9fb1acee_mergeImage.png);
  height: 231px;
  margin-top: 10px;
  width: 1106px;
}

.text_31 {
  width: 56px;
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
  margin: 180px 0 0 30px;
}

.box_12 {
  width: 1421px;
  height: 511px;
  margin: 72px 0 0 0;
}

.section_6 {
  background-color: rgba(246, 240, 232, 1);
  width: 289px;
  height: 511px;
}

.block_6 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fed564fb56364618b3829c458a6a0e6a_mergeImage.png);
  width: 120px;
  height: 120px;
  margin: 88px 0 0 84px;
}

.text-group_14 {
  width: 147px;
  height: 75px;
  margin: 22px 0 0 70px;
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
}

.text_33 {
  width: 137px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 17px 0 0 6px;
}

.text-wrapper_17 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 165px;
  margin: 39px 0 113px 62px;
}

.text_34 {
  width: 41px;
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
  margin: 12px 0 0 62px;
}

.group_14 {
  width: 1106px;
  height: 511px;
}

.section_17 {
  width: 1106px;
  height: 270px;
}

.text-wrapper_18 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/8786c5294d3840ff8c5a90066c7e9662_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_35 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_19 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/9852a663a8be4e1ea83b8c3d4efb60a2_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_36 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_20 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/eeb82499e98b49cd8d8f78966ff64b6b_mergeImage.png);
  height: 231px;
  margin-top: 10px;
  width: 1106px;
}

.text_37 {
  width: 56px;
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
  margin: 180px 0 0 30px;
}

.box_13 {
  width: 1421px;
  height: 511px;
  margin: 72px 0 0 0;
}

.group_9 {
  background-color: rgba(246, 240, 232, 1);
  width: 289px;
  height: 511px;
}

.section_9 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/304e917171b2473eb657ba370d340c34_mergeImage.png);
  width: 120px;
  height: 120px;
  margin: 87px 0 0 84px;
}

.text-group_15 {
  width: 147px;
  height: 75px;
  margin: 22px 0 0 70px;
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
}

.text_39 {
  width: 137px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 17px 0 0 6px;
}

.text-wrapper_21 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 165px;
  margin: 39px 0 114px 62px;
}

.text_40 {
  width: 41px;
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
  margin: 14px 0 0 62px;
}

.group_15 {
  width: 1106px;
  height: 511px;
}

.group_16 {
  width: 1106px;
  height: 270px;
}

.text-wrapper_22 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ab2a4bb885bf40309588955b2a7fb635_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_41 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_23 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/71875c71f3184106a67a579ef0e53a71_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_42 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_24 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/a31c624ca4b549b59558cbb5cd0bd5d3_mergeImage.png);
  height: 231px;
  margin-top: 10px;
  width: 1106px;
}

.text_43 {
  width: 56px;
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
  margin: 180px 0 0 30px;
}

.box_14 {
  width: 1421px;
  height: 511px;
  margin: 72px 0 0 0;
}

.block_8 {
  background-color: rgba(246, 240, 232, 1);
  width: 289px;
  height: 511px;
}

.section_11 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/5640454ecbfa41328768c2374b58e8c7_mergeImage.png);
  width: 120px;
  height: 120px;
  margin: 88px 0 0 84px;
}

.text-group_16 {
  width: 147px;
  height: 75px;
  margin: 22px 0 0 70px;
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
}

.text_45 {
  width: 137px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 17px 0 0 6px;
}

.text-wrapper_25 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 165px;
  margin: 39px 0 113px 62px;
}

.text_46 {
  width: 41px;
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
  margin: 12px 0 0 62px;
}

.group_17 {
  width: 1106px;
  height: 511px;
}

.block_14 {
  width: 1106px;
  height: 270px;
}

.text-wrapper_26 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/91288dfe954a4667912ca67f40dd9b2d_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_47 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_27 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4f0c0f4609af42be80b5f636d265c92e_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_48 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_28 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/f967cbb76a8a48f68389e72201290069_mergeImage.png);
  height: 231px;
  margin-top: 10px;
  width: 1106px;
}

.text_49 {
  width: 56px;
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
  margin: 180px 0 0 30px;
}

.text-wrapper_29 {
  background-color: rgba(13, 15, 17, 1);
  height: 67px;
  width: 1920px;
  margin: 522px 0 1px 0;
}

.text_50 {
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

.section_12 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 7px;
  position: absolute;
  left: 43%;
  top: 56px;
  width: 546px;
  height: 66px;
  border: 1px solid rgba(195, 123, 33, 1);
}

.text_51 {
  width: 184px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(139, 139, 139, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 20px 0 0 25px;
}

.text-wrapper_30 {
  background-color: rgba(195, 123, 33, 1);
  border-radius: 0px 7px 7px 0px;
  height: 65px;
  margin-left: 208px;
  width: 129px;
}

.text_52 {
  width: 49px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 16px 0 0 40px;
}

.section_13 {
  background-color: rgba(34, 38, 43, 1);
  position: absolute;
  left: 0;
  top: 3914px;
  width: 1920px;
  height: 273px;
}

.text-group_17 {
  width: 273px;
  height: 124px;
  margin: 45px 0 0 250px;
}

.text_53 {
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

.text_54 {
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

.text_55 {
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

.box_15 {
  width: 113px;
  height: 129px;
  margin: 45px 0 0 113px;
}

.text-group_18 {
  width: 113px;
  height: 81px;
}

.text_56 {
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

.text_57 {
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

.text_58 {
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

.box_16 {
  width: 98px;
  height: 129px;
  margin: 45px 0 0 112px;
}

.text-group_19 {
  width: 98px;
  height: 81px;
}

.text_59 {
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

.text_60 {
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

.text_61 {
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

.text-group_20 {
  width: 98px;
  height: 81px;
  margin: 45px 0 0 113px;
}

.text_62 {
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

.text_63 {
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
  width: 126px;
  height: 183px;
  margin: 45px 332px 0 292px;
}

.text_64 {
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

.box_6 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/74d23438dc834105bf258cc95e3f8014_mergeImage.png);
  width: 126px;
  height: 126px;
  margin-top: 24px;
}

.top_btn_l span {
  color: #c37b21;
}

.top_btn_l:hover span {
  color: #ffffff;
}

.top_btn_l {
  cursor: pointer;
}

.top_btn_l:hover,
.top_btn_r:hover {
  background: #c37b21;
  border-color: #c37b21;
  transition: all 0.3s ease 0s;
}

.top_btn_r {
  cursor: pointer;
}

.top_btn_r:hover {
  background: #ffffff;
  border-color: #ffffff;
  border-bottom: 1px solid #c37b21;
  border-left: 1px solid #c37b21;
  transition: all 0.3s ease 0s;
}

.top_btn_r:hover span {
  color: #c37b21;
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

.card_cls {
  cursor: pointer;
}

.card_cls:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0);
}

.w1100 {
  width: 1100px;
}

.w540 {
  width: 540px;
}

.search-top {
  max-width: 1400px;
  height: 120px;
  background-color: #f4f4f4;
  margin-top: 20px;
}

.m4050 {
  margin: 50px 40px;
}

.right_search,
div/deep/.right_search .el-input__inner {
  height: 50px;
  border-radius: 0 !important;
}

.right_search {
  margin: 35px 0;
}

.m4050 div/deep/.el-radio__label {
  font-size: 16px;
}

div/deep/.el-radio__input.is-checked + .el-radio__label {
  color: #c37b21;
}

div/deep/.el-radio__input.is-checked .el-radio__inner {
  border-color: #c37b21;
  background: #c37b21;
}

div/deep/.right_search .el-input-group__append {
  width: 130px;
  text-align: center;
  background-color: #c37b21;
  color: #ffffff;
  border-radius: 0 !important;
  transition: all 0.3s ease 0s;
  cursor: pointer;
}

div/deep/.right_search .el-input-group__append:hover {
  background-color: #ffffff;
  color: #c37b21;
}

.tab_content {
  margin: 0 10px;
}

.choice_content,
.tab_content,
.img__content {
  max-width: 1400px;
  margin: 30px 10px;
}

.choice_content {
  margin-bottom: 0;
}

.left_cho {
  max-width: 100px;
}

.w80 {
  width: 55px;
}

.ml80 {
  margin-left: 80px;
}

.cho_img {
  float: left;
  margin-top: 10px;
  width: 20px;
  height: 20px;
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
  background: #f6f0e8;
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

div/deep/.el-checkbox.is-bordered.is-checked {
  background: #c37b21;
  border-color: #c37b21;
}

div/deep/.el-checkbox.is-bordered.is-checked span {
  color: #f6f0e8 !important;
}

.tab_content {
  margin: 0 10px;
}

.active {
  font-weight: 600;
}

@media (max-width: 1400px) {
  .search-top {
    transform: translateX(0) scaleX(0.98);
  }

  .box_8,
  .box_9,
  .box_11,
  .box_12,
  .box_13,
  .box_14 {
    transform: translateX(6px) scaleX(0.98);
  }

  div/deep/.el-divider--horizontal {
    transform: translateX(-12px) scaleX(0.97);
  }
}

.activeBtn {
  background-color: #ffffff;
}

.activeBtn span {
  color: #c37b21;
  margin: 13px 0 0 52px;
}

.textBlack {
  background-color: #f1f1f1;
}

.textBlack .text_17,
.textBlack .text_18,
.textBlack .text_19 {
  color: #333;
}

@media only screen and (min-width: 390px) and (max-width: 400px) {
  .section_11 {
    width: 100%;
    transform: translateX(21px) scaleX(1.05);
  }

  .section_10 {
    width: 94%;
    background-size: cover;
  }

  .group_3 {
    margin: 7px 0 0 274px;
  }
}

@media only screen and (min-width: 401px) and (max-width: 460px) {
  .section_11 {
    width: 100%;
    transform: translateX(34px) scaleX(1.11);
  }

  .section_10 {
    width: 94%;
    background-size: cover;
  }

  .group_3 {
    margin: 7px 0 0 284px;
  }
}

.shotbox {
  position: relative;
}

.shotbox .img {
  height: 230px;
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
