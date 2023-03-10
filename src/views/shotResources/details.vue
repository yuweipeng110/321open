<template>
  <div class="shotdes_content flex-col" :class="{ seenCls: !seen }">
    <div v-if="seen && objDetail" class="section_11 flex-col">
      <span class="text_11">{{ objDetail.title }}</span>
      <div class="block_9 flex-row">
        <div class="text-wrapper_2">
          <a
            href="/#/dashboard"
            class="text_12"
            style="color: rgba(177, 177, 177, 1)"
            >首页</a
          >
          <span class="text_13">&gt;</span>
          <a
            href="/#/shotResources/shot"
            class="text_14"
            style="color: rgba(177, 177, 177, 1)"
            >拍摄资源</a
          >
          <span class="text_15">&gt;{{ objDetail.title }}</span>
        </div>
        <img
          class="thumbnail_3"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng19caba79e88d36750cfc8d53b75592aec3e8d0988e8f6bde96b8b334ba7faf14"
        />
        <span class="text_16">新上线特惠</span>
        <img
          class="thumbnail_4"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng19caba79e88d36750cfc8d53b75592aec3e8d0988e8f6bde96b8b334ba7faf14"
        />
        <span class="text_17">实拍</span>
        <img
          class="thumbnail_5"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8596d8b9eaf19f22b3d17f334b9c9f8c9f86176ff30d1df4c5fea67bba9f8a3d"
        />
        <span class="text_18">优选</span>
        <img
          class="thumbnail_6"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13363d6d8c589538194b6950ce94dc0ab158bda6da439a5a7d850d498ab358d8"
        />
        <span class="text_19">验真</span>
      </div>
      <div class="block_10 flex-row">
        <div class="group_3 flex-col">
          <el-carousel
            trigger="click"
            :interval="3000"
            arrow="always"
            style="width: 100%; height: 100%"
          >
            <el-carousel-item
              v-for="item in objDetail.img.split(',')"
              :key="item"
            >
              <img :src="item" style="height: 100%; width: 100%" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="section_12 flex-col">
          <div class="text-wrapper_3">
            <span class="text_20">¥</span>
            <span class="text_21">{{ parseInt(objDetail.zujin) }}</span>
            <span class="text_22">/全天</span>
          </div>
          <div class="box_23 flex-row justify-between">
            <div class="text-wrapper_4 flex-row justify-between des_tag">
              <span class="text_23">今天</span>
              <span class="text_24">¥{{ parseInt(objDetail.zujin) }}</span>
            </div>
            <div class="text-wrapper_5 flex-row justify-between des_tag">
              <span class="text_25"
                >{{ this.$moment().add(1, "days").format("DD") }}日</span
              >
              <span class="text_26">¥{{ parseInt(objDetail.zujin) }}</span>
            </div>
          </div>
          <div class="box_24 flex-row justify-between">
            <div class="text-wrapper_6 flex-row justify-between des_tag">
              <span class="text_27"
                >{{ this.$moment().add(3, "days").format("DD") }}日</span
              >
              <span class="text_28">¥{{ parseInt(objDetail.zujin) }}</span>
            </div>
            <div class="text-wrapper_7 flex-row justify-between des_tag">
              <span class="text_29"
                >{{ this.$moment().add(4, "days").format("DD") }}日</span
              >
              <span class="text_30">¥{{ parseInt(objDetail.zujin) }}</span>
            </div>
          </div>
          <div class="text-wrapper_8" style="opacity: 0">
            <span class="text_31">优惠信息：</span>
            <span class="text_32">前5名预定9折</span>
          </div>
          <div class="text-wrapper_9 flex-col" @click="handleClick(id)">
            <span class="text_33">立即预订</span>
          </div>
          <div class="box_25 flex-row justify-between">
            <div class="image-text_24 flex-row justify-between">
              <div class="box_1 flex-col">
                <img
                  :src="
                    objDetail.avatar ||
                    require('@/assets/img/spzy/defaultImg.png')
                  "
                />
              </div>
              <span class="text-group_1"
                >&nbsp;{{ objDetail.nick || "默认用户" }}</span
              >
            </div>
          </div>
        </div>
        <div class="section_13 flex-col">
          <span class="text_35">1天起订</span>
          <div class="text-wrapper_10 flex-row justify-between des_tag">
            <span class="text_36"
              >{{ this.$moment().add(2, "days").format("DD") }}日</span
            >
            <span class="text_37">¥{{ parseInt(objDetail.zujin) }}</span>
          </div>
          <div class="text-wrapper_11 flex-row justify-between des_tag">
            <span class="text_38"
              >{{ this.$moment().add(5, "days").format("DD") }}日</span
            >
            <span class="text_39">¥{{ parseInt(objDetail.zujin) }}</span>
          </div>
          <div class="image-wrapper_2 flex-row">
            <img
              class="label_3"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng47a0e5ad956628aa58572ae15b014cb8bffb393e7e8685e030d84cfc259588fc"
              @click="requestCollect(objDetail.id)"
              v-if="objDetail.type === 0"
            />
            <img
              class="label_3"
              src="./assets/collect_1.png"
              style="width: 25px; height: 25px"
              @click="requestCancelCollect(objDetail.id)"
              v-if="objDetail.type === 1"
            />
            <el-popover placement="top" trigger="hover">
              <img
                class="label_4"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng21748b8a8fd68bd0e7ed4a780724305edbf407bf5d892265834486b7e5e8d8e5"
                slot="reference"
              /><qrCode :text="currentUrl" />
            </el-popover>
            <img
              @click="jubao"
              class="label_5"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0a6dfc18afd55bb96d77f36e2e437cca7af8747db3e2b1b4885294456e34825a"
            />
          </div>
        </div>
      </div>
      <!-- <div v-if="seen"> -->
      <div class="block_11 flex-row justify-between">
        <div class="block_1 flex-row sort_card">
          <img
            class="image_3"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge66f37d648b3f5b11d33d206480877654dbc05a27ebbf501a372b2b37d8b8cc0"
          />
          <div class="text-group_33 flex-col justify-center">
            <span class="text_40">{{ objDetail.fenlei.name }}</span>
            <!-- <span class="text_41">场景编号：000411</span> -->
          </div>
        </div>
        <div class="block_2 flex-row sort_card">
          <img
            class="image_4"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng706bd3f7f46b6c6d7bf124a6631b85cada096ba67fa73ced86bf116768daa1d5"
          />
          <div class="text-group_34 flex-col justify-between">
            <span class="text_42" v-if="objDetail.fenlei2.length > 0">{{
              objDetail.fenlei2[0].name
            }}</span>
            <span class="text_43" v-if="objDetail.fenlei2.length > 0">
              <span v-if="!objDetail.fenlei2[0].fenlei3">
                {{ objDetail.fenlei2[0].feilei3[0].name }}
              </span>
            </span>
          </div>
        </div>
        <div class="block_3 flex-row sort_card">
          <img
            class="image_5"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng576cfa03a874e1654087b70b4a17b440e4d08bccec89eb23443db989e0fa1c50"
          />
          <div class="text-group_35 flex-col justify-between">
            <span class="text_44">{{ objDetail.haoping }}好评</span>
            <span class="text_45"
              >{{ objDetail.pingfen }}分/{{ objDetail.pl_num }}条评论</span
            >
          </div>
        </div>
      </div>
      <div class="text-wrapper_12 flex-col">
        <span class="text_46">场景推荐</span>
      </div>
      <img
        class="image_6"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng665d43ea590c6167b785fb9df57736fca18ffb424f8f5c5f59d7ce965460566a"
      />

      <div
        class="block_12 flex-row"
        v-for="(item, index) in objDetail.fenlei2"
        :key="index"
      >
        <div class="box_2 flex-row">
          <div class="image-text_25 flex-col justify-between flex-center">
            <img
              v-if="item.icon"
              class="image_7"
              referrerpolicy="no-referrer"
              :src="item.icon"
            />
            <span
              :class="
                item.icon
                  ? 'text-group_5 flex-center'
                  : 'text-group_changjing flex-center'
              "
              >{{ item.name }}</span
            >
          </div>
        </div>
        <div
          style="width: calc(100% - 183px); display: flex; align-items: center"
        >
          <ul>
            <li
              class="flex-row cjtj_li"
              v-for="(childItem, childIndex) in item.feilei3"
              :key="childIndex"
            >
              <img
                v-if="childItem.icon"
                class="image_8"
                referrerpolicy="no-referrer"
                :src="childItem.icon"
              />
              <span class="text-group_6" style="margin-left: 10px">{{
                childItem.name
              }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="text-wrapper_13 flex-col">
        <span class="text_53">预定须知</span>
      </div>
      <img
        class="image_17"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng665d43ea590c6167b785fb9df57736fca18ffb424f8f5c5f59d7ce965460566a"
      />
      <div class="block_14 flex-row justify-between">
        <div class="group_10 flex-row">
          <div class="image-text_44 flex-col justify-between">
            <img
              class="image_18"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf238e4410192e0881b6864a8a0f1a82544d5f2003d80d73c75587fc3a2585b4f"
            />
            <span class="text-group_25">使用须知</span>
          </div>
        </div>
        <div class="section_16 flex-col justify-between">
          <div class="text-wrapper_14">
            <span class="text_54">起订时间：</span>
            <span class="text_55">“按天”1天起订</span>
          </div>
          <div class="text-wrapper_15">
            <span class="text_56">开放时间：</span>
            <span class="text_57">0:00-24:00</span>
          </div>
          <div class="text-wrapper_16">
            <span class="text_58">退款规则：</span>
            <span class="paragraph_1"
              >取消订单，扣除100%的租金作为违约金支付给商家；如提前退租，扣除100%剩余租金作为违约金支付给商家。使用前2天6点前取消订单，租金可全额退还。</span
            >
          </div>
          <div class="text-wrapper_17">
            <span class="text_59">租用押金：</span>
            <span class="text_60"
              >线下支付押金￥4000.00。押金于使用当天交付商家。请在使用结束时与商家办理退押金手续。</span
            >
          </div>
          <div class="text-wrapper_18">
            <span class="text_61">不提供发票：</span>
            <span class="text_62">商家不提供发票</span>
          </div>
        </div>
      </div>
      <div class="block_15 flex-row justify-between">
        <div class="box_9 flex-row">
          <div class="image-text_45 flex-col justify-between">
            <img
              class="image_19"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng84eb4e8ea1ab4eb3f1fb312b4e6ce7ba1168284a35f0cd6543ac8c833366fb44"
            />
            <span class="text-group_26">额外费用</span>
          </div>
        </div>
        <div class="text-group_37 flex-col">
          <div class="text-wrapper_19">
            <span class="text_63">电费：</span>
            <span class="text_64">2元/度</span>
          </div>
          <div class="text-wrapper_20">
            <span class="text_65">超时费：</span>
            <span class="text_66">1500元/小时</span>
          </div>
          <div class="text-wrapper_21">
            <span class="text_67">收取方式：</span>
            <span class="text_68">商家线下收取</span>
          </div>
        </div>
      </div>
      <div class="text-wrapper_22 flex-col">
        <span class="text_69">描述内容</span>
      </div>
      <img
        class="image_20"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng665d43ea590c6167b785fb9df57736fca18ffb424f8f5c5f59d7ce965460566a"
      />
      <div class="block_16 flex-row justify-between" style="height: auto">
        <div v-html="objDetail.content"></div>
      </div>

      <div class="text-wrapper_22 flex-col">
        <span class="text_69">用户评价({{ objDetail.pl_num }}条)</span>
      </div>
      <img
        class="image_20"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng665d43ea590c6167b785fb9df57736fca18ffb424f8f5c5f59d7ce965460566a"
      />
      <div class="flex-col justify-between" style="width: 100%; height: auto">
        <div
          class="appraise"
          v-for="(item, index) in objDetail.order_pinglun"
          :key="index"
        >
          <div class="appraise_left">
            <div class="appraise_left_avatar">
              <img
                class="image_21"
                style="width: 120px; height: 120px; border-radius: 100%"
                referrerpolicy="no-referrer"
                :src="item.avatar"
              />
              <span class="text-group_28">{{ item.nick }}</span>
            </div>
          </div>
          <div class="appraise_right">
            <div style="font-size: 24px">
              <span>使用评价：</span>
              <span style="color: #929292">{{ item.pinglun }} </span>
            </div>
            <div class="appraise_right_content_bottom">
              <div style="display: flex; align-items: center">
                <span style="color: #212121; font-size: 24px">评级:</span
                ><el-rate :value="item.star" disabled> </el-rate>
              </div>
              <div style="display: flex">
                <div
                  class="text-wrapper_28 flex-col des_tag"
                  style="width: auto"
                  v-for="(tagItem, tagKey) in item.tag"
                  :key="tagKey"
                >
                  <span class="text_76">{{ tagItem }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="box_10 flex-row">
          <div class="image-text_46 flex-col justify-between">
            <img
              class="image_21"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc261c5caf405739fa60d0d2c679b67715a939922c599af626b8048bf557d4fe0"
            />
            <span class="text-group_28">使用评价</span>
          </div>
        </div>
        <div class="group_33 flex-col justify-between">
          <div class="text-wrapper_23">
            <span class="text_70">使用评价：</span>
            <span class="text_71">100%好评100%好评100%好评100%好评100%好评100%好评100%好评100%好评100%好评100%好评，5分</span>
          </div>
          <div class="group_34 flex-row justify-between">
            <div class="text-wrapper_24 flex-col des_tag">
              <span class="text_72">性价比高(0)</span>
            </div>
            <div class="text-wrapper_25 flex-col des_tag">
              <span class="text_73">服务热情(0)</span>
            </div>
            <div class="text-wrapper_26 flex-col des_tag">
              <span class="text_74">交通便捷(0)</span>
            </div>
            <div class="text-wrapper_27 flex-col des_tag">
              <span class="text_75">配套齐全(0)</span>
            </div>
            <div class="text-wrapper_28 flex-col des_tag">
              <span class="text_76">干净整洁(0)</span>
            </div>
          </div>
        </div> -->
      </div>
      <div class="xg_span">
        <span class="text_77">相关推荐场景</span>
        <div class="group_14 flex-col" />
      </div>

      <el-row :gutter="10" v-if="list">
        <el-col
          v-for="(item, index) in list"
          :key="index"
          :span="6"
          :gutter="5"
        >
          <el-card shadow="hover">
            <div class="shotbox">
              <img
                class="img"
                :src="
                  item.img
                    ? item.img.split(',')[0]
                    : 'static/img/a3.926621c6.png'
                "
                alt=""
              />
              <div class="txt-five">
                <div class="oneRow">{{ item.title }}</div>
                <div>
                  <div class="fl">
                    <img
                      :src="
                        item.avatar ||
                        require('@/assets/img/spzy/defaultImg.png')
                      "
                      alt=""
                      class="bot-img"
                    /><span class="tyf12">{{ item.nick || "默认用户" }}</span>
                  </div>
                  <div class="fr">
                    <div class="pcmon phoneMon">{{ item.zujin }}/天</div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- <div class="block_17 flex-row">
        <div
          class="group_16 flex-col cart_img"
          v-for="(item,index) in list.slice(3)" :key="index"
          style="margin-right: 20px; margin-bottom: 20px"
        >
          <span class="text_78">{{ item.title }}</span>
          <div class="box_26 flex-row justify-between">
            <div
              class="section_8 flex-col"
            />
            <span class="text_79">{{ item.nick }}</span>
          </div>
          <div class="box_27 flex-row justify-between">
            <span class="text_80">
               5分/0条点评
            </span>
            <div class="text-wrapper_29">
              <span class="text_81">¥</span>
              <span class="text_82">{{ parseInt(item.zujin) }}</span>
              <span class="text_83">/天</span>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <des v-else />
    <!-- </div> -->
  </div>
</template>
<script>
import des from "./des.vue";
import qrCode from "@/components/qrCode";
import {
  homezyList,
  homezydetail,
  takeCollect,
  takeCancelCollect,
} from "@/api/home";
export default {
  components: {
    des,
    qrCode,
  },
  data() {
    return {
      seen: true,
      constants: {},
      id: "",
      imgObj: {},
      list: null,
      textarea2: "",
      objDetail: null,
      currentUrl: window.location.href,
      imgArr: [
        {
          src: require("@/assets/img/spzy/p2.png"),
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: require("@/assets/img/spzy/p2.png"),
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: require("@/assets/img/spzy/p2.png"),
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
        {
          src: require("@/assets/img/spzy/p2.png"),
          href: "https://www.baidu.com",
          info: "一些图片描述文字",
        },
      ],
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
      },
      // 深度观察监听
      deep: true,
    },
  },

  mounted() {
    // console.log('xxx',moment().add(1, 'days').format("DD"));
    this.imgObj = this.$route.query.imgObj || {};
    this.id = this.$route.query.id;
    this.zyDetail(this.id);
    this.fetchData();
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
    async fetchData() {
      let res = await homezyList();
      let list = res.data.data;
      if (list.length > 6) {
        list.length = 6;
      }
      this.list = list;
    },

    async zyDetail(id) {
      let res = await homezydetail({ id: String(id) });

      this.objDetail = res.data.data;
      // console.log("资源详情页面信息", this.objDetail,this.objDetail.fenlei2[0].feilei3[0].name);
    },
    jubao() {
      this.$msgbox({
        title: "电话拨打",
        message:
          '<span class="tc"><i class="el-icon-phone"></i> +86 1388888888888</span>',
        dangerouslyUseHTMLString: true,
        showCancelButton: true,
        cancelButtonText: "取消",
        showConfirmButton: true,
        confirmButtonText: "呼叫",
        // callback(action, instance, done) {
        //     console.log('callback', action, instance, done);
        // },
        // beforeClose(action, instance, done) {
        //     console.log('beforeClose', action, instance, done);
        // }
      }).then(
        () => {
          console.log("确定");
        },
        () => {
          console.log("取消");
        }
      );
    },

    handleClick(id) {
      if (this.$store.state.user.id) {
        this.$router.push({
          path: "/shotForm/form",
          query: { id: id },
        });
      }
    },

    async requestCollect(zid) {
      const loginUserId = this.$store.state.user.id;
      if (!loginUserId) {
        this.$message.error("失败，请先登录");
        return;
      }
      const paramsData = {
        uid: loginUserId,
        zid,
      };
      const res = await takeCollect(paramsData);
      if (res.status == 200) {
        this.$message({
          type: "success",
          message: "收藏成功",
        });
        this.zyDetail(zid);
      } else {
        this.$message.error("失败，请刷新重试");
      }
    },
    async requestCancelCollect(zid) {
      const loginUserId = this.$store.state.user.id;
      if (!loginUserId) {
        this.$message.error("失败，请先登录");
        return;
      }
      const paramsData = {
        uid: loginUserId,
        zid,
      };
      const res = await takeCancelCollect(paramsData);
      if (res.status == 200) {
        this.$message({
          type: "success",
          message: "取消收藏成功",
        });
        this.zyDetail(zid);
      } else {
        this.$message.error("失败，请刷新重试");
      }
    },
  },
};
</script>

<style scoped>
body * {
  box-sizing: border-box;
  flex-shrink: 0;
}

body {
  font-family: PingFangSC-Regular, Roboto, Helvetica Neue, Helvetica, Tahoma,
    Arial, PingFang SC-Light, Microsoft YaHei;
}

li {
  list-style: none;
  float: left;
  margin-left: 15px;
  width: 130px;
}

input {
  background-color: transparent;
  border: 0;
}

button {
  margin: 0;
  padding: 0;
  border: 1px solid transparent;
  outline: none;
  background-color: transparent;
}

button:active {
  opacity: 0.6;
}

.van-nav-bar__left:active,
.van-nav-bar__right:active {
  opacity: 1;
}

[class*="van-"]::after {
  border-bottom: 0;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}

.justify-around {
  display: flex;
  justify-content: space-around;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.align-start {
  display: flex;
  align-items: flex-start;
}

.align-center {
  display: flex;
  align-items: center;
}

.align-end {
  display: flex;
  align-items: flex-end;
}

.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 1920px;
  height: 4851px;
  overflow: hidden;
}

.section_1 {
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

.image_22 {
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

.text-wrapper_1 {
  background-color: rgba(195, 123, 33, 1);
  height: 100px;
  margin-left: 30px;
  width: 120px;
}

.text_3 {
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
  margin: 36px 0 0 30px;
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
  margin: 36px 0 0 30px;
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

.section_11 {
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 1px;
}

.text_11 {
  width: 289px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 33px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 55px 0 10px 0;
}

.block_9 {
  width: 579px;
  height: 22px;
  margin: 7px 0 0 0;
}

.text-wrapper_2 {
  width: 248px;
  height: 22px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
}

.text_12 {
  width: 248px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 16px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
}

.text_13 {
  width: 248px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(177, 177, 177, 1);
  font-size: 16px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
}

.text_14 {
  width: 248px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 16px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
}

.text_15 {
  width: 248px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(177, 177, 177, 1);
  font-size: 16px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
}

.thumbnail_3 {
  width: 18px;
  height: 18px;
  margin: 2px 0 0 21px;
}

.text_16 {
  width: 82px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(137, 137, 137, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-left: 4px;
}

.thumbnail_4 {
  width: 18px;
  height: 14px;
  margin: 4px 0 0 17px;
}

.text_17 {
  width: 33px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(137, 137, 137, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-left: 3px;
}

.thumbnail_5 {
  width: 17px;
  height: 16px;
  margin: 3px 0 0 15px;
}

.text_18 {
  width: 33px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(137, 137, 137, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-left: 5px;
}

.thumbnail_6 {
  width: 13px;
  height: 15px;
  margin: 3px 0 0 15px;
}

.text_19 {
  width: 33px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(137, 137, 137, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-left: 4px;
}

.block_10 {
  max-width: 1420px;
  height: 469px;
  margin: 20px 0;
}

.group_3 {
  width: 947px;
  height: 466px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6670eafdeb9269350de0ce83127af90e109e5e131a446f1c91543f8195935d70)
    100% no-repeat;
  background-size: 100% 100%;
  margin-top: 3px;
}

.section_12 {
  width: 295px;
  height: 469px;
  margin-left: 25px;
}

.text-wrapper_3 {
  width: 215px;
  height: 78px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  line-height: 33px;
  padding-top: 15px;
}

.text_20 {
  width: 215px;
  height: 78px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 24px;
  font-weight: NaN;
  text-align: left;
  line-height: 33px;
}

.text_21 {
  width: 215px;
  height: 78px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 40px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 33px;
}

.text_22 {
  width: 215px;
  height: 78px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 24px;
  font-weight: NaN;
  text-align: left;
  line-height: 33px;
}

.box_23 {
  width: 295px;
  height: 56px;
  margin-top: 14px;
}

.text-wrapper_4 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 3px;
  width: 142px;
  height: 56px;
  border: 1px solid rgba(215, 215, 215, 1);
}

.text_23 {
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
  margin: 14px 0 0 14px;
}

.text_24 {
  width: 62px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 14px 14px 0 0;
}

.text-wrapper_5 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 3px;
  width: 142px;
  height: 56px;
  border: 1px solid rgba(215, 215, 215, 1);
}

.text_25 {
  width: 44px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 14px 0 0 15px;
}

.text_26 {
  width: 62px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 14px 15px 0 0;
}

.box_24 {
  width: 295px;
  height: 56px;
  margin-top: 11px;
}

.text-wrapper_6 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 3px;
  width: 142px;
  height: 56px;
  border: 1px solid rgba(215, 215, 215, 1);
}

.text_27 {
  width: 45px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 14px 0 0 14px;
}

.text_28 {
  width: 62px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 14px 14px 0 0;
}

.text-wrapper_7 {
  background-color: rgba(246, 240, 232, 1);
  border-radius: 3px;
  width: 142px;
  height: 56px;
}

.text_29 {
  width: 45px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 14px 0 0 15px;
}

.text_30 {
  width: 62px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 14px 15px 0 0;
}

.text-wrapper_8 {
  width: 228px;
  height: 28px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 20px;
}

.text_31 {
  width: 228px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text_32 {
  width: 228px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(221, 113, 0, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text-wrapper_9 {
  background-color: rgba(207, 119, 0, 1);
  border-radius: 6px;
  height: 67px;
  margin-top: 30px;
  width: 203px;
}

.text_33 {
  width: 122px;
  height: 42px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 30px;
  letter-spacing: 0.5px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 42px;
  margin: 13px 0 0 40px;
}

.box_25 {
  width: 227px;
  height: 80px;
  margin-top: 29px;
}

.image-text_24 {
  width: 193px;
  height: 80px;
}

.box_1 {
  border-radius: 50%;
  /* background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ea9e91d636854eb3abed0f67402f1c12_mergeImage.png); */
  width: 80px;
  height: 80px;
}
.box_1 img {
  border-radius: 100%;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  width: 80px;
  height: 80px;
  /* border-radius: 100%;Z */
}

.text-group_1 {
  width: 98px;
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
  margin-top: 24px;
}

.text_34 {
  width: 27px;
  height: 22px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 16px;
  letter-spacing: 0.2666666805744171px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 22px;
  margin-top: 29px;
}

.section_13 {
  width: 142px;
  height: 419px;
  margin: 25px 0 0 11px;
}

.text_35 {
  width: 70px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  text-align: left;
  white-space: nowrap;
  line-height: 12px;
  margin-left: 71px;
}

.text-wrapper_10 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 3px;
  width: 142px;
  height: 56px;
  border: 1px solid rgba(215, 215, 215, 1);
  margin-top: 39px;
}

.text_36 {
  width: 45px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 14px 0 0 14px;
}

.text_37 {
  width: 62px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 14px 14px 0 0;
}

.text-wrapper_11 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 3px;
  width: 142px;
  height: 56px;
  border: 1px solid rgba(215, 215, 215, 1);
  margin-top: 11px;
}

.text_38 {
  width: 42px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 14px 0 0 14px;
}

.text_39 {
  width: 62px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 14px 14px 0 0;
}

.image-wrapper_2 {
  width: 120px;
  height: 30px;
  margin: 199px 0 0 18px;
}

.label_3 {
  width: 30px;
  height: 30px;
}

.label_4 {
  width: 30px;
  height: 30px;
  margin-left: 14px;
}

.label_5 {
  width: 30px;
  height: 30px;
  margin-left: 16px;
}

.image_2 {
  width: 178px;
  height: 18px;
  margin: 30px 0 0 634px;
}

.block_11 {
  width: 1420px;
  height: 184px;
  margin: 55px 0 0 0;
}

.block_1 {
  background-color: rgba(244, 244, 244, 1);
  width: 456px;
  height: 184px;
}

.image_3 {
  width: 82px;
  height: 80px;
  margin: 52px 0 0 63px;
}

.text-group_33 {
  width: 202px;
  height: 80px;
  margin: 52px 71px 0 38px;
}

.text_40 {
  width: 61px;
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

.text_41 {
  width: 202px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 5px;
}

.block_2 {
  background-color: rgba(244, 244, 244, 1);
  width: 456px;
  height: 184px;
  margin-left: 26px;
}

.image_4 {
  width: 76px;
  height: 82px;
  margin: 51px 0 0 38px;
}

.text-group_34 {
  width: 0;
  height: 80px;
  margin: 52px 17px 0 41px;
}

.text_42 {
  width: 147px;
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

.text_43 {
  width: 0;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 5px;
}

.block_3 {
  background-color: rgba(244, 244, 244, 1);
  width: 456px;
  height: 184px;
  margin-left: 26px;
}

.image_5 {
  width: 80px;
  height: 80px;
  margin: 53px 0 0 64px;
}

.text-group_35 {
  width: 162px;
  height: 80px;
  margin: 52px 111px 0 39px;
}

.text_44 {
  width: 141px;
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

.text_45 {
  width: 162px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 5px;
}

.text-wrapper_12 {
  background-color: rgba(246, 240, 232, 1);
  border-radius: 33px;
  height: 66px;
  width: 200px;
  margin: 95px 0 0 0;
}

.text_46 {
  width: 122px;
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
  margin: 12px 0 0 40px;
}

.image_6 {
  width: 1421px;
  height: 1px;
  margin: 30px 0 0 0;
}

.block_12 {
  width: 1419px;
  height: 233px;
  margin: 45px 0 0 0;
}

.box_2 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 159px;
  width: 183px;
  height: 184px;
  margin-top: 24px;
}

.image-text_25 {
  width: 98px;
  height: 114px;
  margin: 40px 0 0 42px;
}

.image_7 {
  width: 80px;
  height: 65px;
  margin-left: 9px;
}

.text-group_5 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 16px;
}

.group_28 {
  width: 118px;
  height: 233px;
  margin-left: 32px;
}

.text_47 {
  width: 98px;
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

.image-text_26 {
  width: 90px;
  height: 28px;
  margin-top: 20px;
}

.image_8 {
  width: 19px;
  height: 28px;
}

.text-group_6 {
  width: 61px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_27 {
  width: 90px;
  height: 28px;
  margin-top: 20px;
}

.label_6 {
  width: 24px;
  height: 24px;
  margin-top: 1px;
}

.text-group_7 {
  width: 61px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text_48 {
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
  margin-top: 23px;
}

.image-text_28 {
  width: 118px;
  height: 28px;
  margin-top: 20px;
}

.image_9 {
  width: 17px;
  height: 28px;
}

.text-group_8 {
  width: 91px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.group_29 {
  width: 139px;
  height: 180px;
  margin: 53px 0 0 22px;
}

.image-text_29 {
  width: 90px;
  height: 28px;
}

.image_10 {
  width: 19px;
  height: 28px;
}

.text-group_9 {
  width: 61px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_30 {
  width: 91px;
  height: 28px;
  margin-top: 20px;
}

.image_11 {
  width: 20px;
  height: 25px;
  margin-top: 1px;
}

.text-group_10 {
  width: 61px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_31 {
  width: 115px;
  height: 28px;
  margin: 76px 0 0 24px;
}

.label_7 {
  width: 24px;
  height: 24px;
  margin-top: 2px;
}

.text-group_11 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.group_30 {
  width: 145px;
  height: 181px;
  margin: 52px 0 0 1px;
}

.image-text_32 {
  width: 96px;
  height: 28px;
}

.label_8 {
  width: 24px;
  height: 27px;
  margin-top: 1px;
}

.text-group_12 {
  width: 61px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_33 {
  width: 92px;
  height: 28px;
  margin-top: 21px;
}

.label_9 {
  width: 24px;
  height: 28px;
}

.text-group_13 {
  width: 61px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_34 {
  width: 96px;
  height: 28px;
  margin: 76px 0 0 49px;
}

.label_10 {
  width: 24px;
  height: 22px;
  margin-top: 3px;
}

.text-group_14 {
  width: 61px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.group_31 {
  width: 286px;
  height: 181px;
  margin: 52px 0 0 1px;
}

.section_14 {
  width: 236px;
  height: 28px;
}

.image-text_35 {
  width: 93px;
  height: 28px;
}

.label_11 {
  width: 23px;
  height: 21px;
  margin-top: 4px;
}

.text-group_15 {
  width: 61px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_36 {
  width: 93px;
  height: 28px;
}

.label_12 {
  width: 22px;
  height: 21px;
  margin-top: 4px;
}

.text-group_16 {
  width: 61px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.section_15 {
  width: 241px;
  height: 28px;
  margin: 125px 0 0 45px;
}

.image-text_37 {
  width: 117px;
  height: 28px;
}

.label_13 {
  width: 24px;
  height: 24px;
  margin-top: 2px;
}

.text-group_17 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_38 {
  width: 75px;
  height: 28px;
}

.image_12 {
  width: 23px;
  height: 18px;
  margin-top: 5px;
}

.text-group_18 {
  width: 41px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_39 {
  width: 73px;
  height: 28px;
  margin-top: 52px;
}

.image_13 {
  width: 21px;
  height: 16px;
  margin-top: 6px;
}

.text-group_19 {
  width: 41px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_40 {
  width: 74px;
  height: 28px;
  margin: 52px 0 0 50px;
}

.image_14 {
  width: 22px;
  height: 18px;
  margin-top: 6px;
}

.text-group_20 {
  width: 41px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_41 {
  width: 76px;
  height: 28px;
  margin: 52px 0 0 50px;
}

.label_14 {
  width: 26px;
  height: 22px;
  margin-top: 4px;
}

.text-group_21 {
  width: 41px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_42 {
  width: 119px;
  height: 28px;
  margin: 52px 0 0 50px;
}

.image_15 {
  width: 17px;
  height: 28px;
}

.text-group_22 {
  width: 91px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.block_13 {
  width: 622px;
  height: 185px;
  margin: 91px 0 0 0;
}

.section_6 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 159px;
  width: 183px;
  height: 184px;
  margin-top: 1px;
}

.image-text_43 {
  width: 98px;
  height: 122px;
  margin: 34px 0 0 42px;
}

.image_16 {
  width: 75px;
  height: 73px;
  margin-left: 12px;
}

.text-group_23 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 16px;
}

.group_32 {
  width: 407px;
  height: 185px;
}

.text-group_36 {
  width: 407px;
  height: 71px;
}

.text_49 {
  width: 98px;
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

.text_50 {
  width: 407px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 10px;
}

.text_51 {
  width: 98px;
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
  margin-top: 24px;
}

.text_52 {
  width: 98px;
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
  margin-top: 24px;
}

.text-wrapper_13 {
  background-color: rgba(246, 240, 232, 1);
  border-radius: 33px;
  height: 66px;
  width: 200px;
  margin: 119px 0 0 0;
}

.text_53 {
  width: 122px;
  height: 42px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 30px;
  letter-spacing: 0.5px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 42px;
  margin: 12px 0 0 38px;
}

.image_17 {
  width: 1421px;
  height: 1px;
  margin: 30px 0 0 0;
}

.block_14 {
  width: 1416px;
  height: 246px;
  margin: 79px 0 0 0;
}

.group_10 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 159px;
  width: 183px;
  height: 184px;
  margin-top: 31px;
}

.image-text_44 {
  width: 98px;
  height: 117px;
  margin: 39px 0 0 42px;
}

.image_18 {
  width: 65px;
  height: 65px;
  margin-left: 17px;
}

.text-group_25 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 19px;
}

.section_16 {
  width: 1201px;
  height: 246px;
}

.text-wrapper_14 {
  width: 281px;
  height: 33px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_54 {
  width: 281px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_55 {
  width: 281px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 24px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text-wrapper_15 {
  width: 254px;
  height: 33px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 12px;
}

.text_56 {
  width: 254px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_57 {
  width: 254px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 24px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text-wrapper_16 {
  width: 1201px;
  height: 66px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 33px;
  margin-top: 12px;
}

.text_58 {
  width: 1201px;
  height: 66px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 33px;
}

.paragraph_1 {
  width: 1201px;
  height: 66px;
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 24px;
  font-weight: NaN;
  text-align: left;
  line-height: 33px;
}

.text-wrapper_17 {
  width: 1145px;
  height: 33px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 12px;
}

.text_59 {
  width: 1145px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_60 {
  width: 1145px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 24px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text-wrapper_18 {
  width: 318px;
  height: 33px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 12px;
}

.text_61 {
  width: 318px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_62 {
  width: 318px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 24px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.block_15 {
  width: 484px;
  height: 184px;
  margin: 88px 0 0 0;
}

.box_9 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 159px;
  width: 183px;
  height: 184px;
}

.image-text_45 {
  width: 98px;
  height: 121px;
  margin: 35px 0 0 42px;
}

.image_19 {
  width: 66px;
  height: 73px;
  margin-left: 16px;
}

.text-group_26 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 15px;
}

.text-group_37 {
  width: 269px;
  height: 118px;
  margin-top: 33px;
}

.text-wrapper_19 {
  width: 150px;
  height: 33px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_63 {
  width: 150px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_64 {
  width: 150px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 24px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text-wrapper_20 {
  width: 238px;
  height: 33px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 12px;
}

.text_65 {
  width: 238px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_66 {
  width: 238px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 24px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text-wrapper_21 {
  width: 269px;
  height: 33px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 7px;
}

.text_67 {
  width: 269px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_68 {
  width: 269px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 24px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text-wrapper_22 {
  background-color: rgba(246, 240, 232, 1);
  border-radius: 33px;
  height: 66px;
  width: 0;
  margin: 116px 0 0 0;
}

.text_69 {
  width: 192px;
  height: 42px;
  overflow-wrap: break-word;
  color: rgba(221, 113, 0, 1);
  font-size: 30px;
  letter-spacing: 0.5px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 42px;
  margin: 12px 0 0 28px;
}

.image_20 {
  width: 1421px;
  height: 1px;
  margin: 30px 0 0 0;
}

.block_16 {
  width: 1095px;
  height: 184px;
  margin: 110px 0 0 0;
}

.box_10 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 159px;
  width: 183px;
  height: 184px;
}

.image-text_46 {
  width: 98px;
  height: 120px;
  margin: 36px 0 0 42px;
}

.image_21 {
  width: 70px;
  height: 70px;
  margin-left: 14px;
}

.text-group_28 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 17px;
}

.group_33 {
  width: 880px;
  height: 107px;
  margin-top: 38px;
}

.text-wrapper_23 {
  width: 298px;
  height: 33px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-left: 3px;
}

.text_70 {
  width: 298px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_71 {
  width: 298px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 24px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.group_34 {
  width: 880px;
  height: 50px;
  margin-top: 24px;
}

.text-wrapper_24 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 25px;
  height: 50px;
  width: 160px;
}

.text_72 {
  width: 108px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 11px 0 0 26px;
}

.text-wrapper_25 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 25px;
  height: 50px;
  margin-left: 20px;
  width: 160px;
}

.text_73 {
  width: 108px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 11px 0 0 26px;
}

.text-wrapper_26 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 25px;
  height: 50px;
  margin-left: 20px;
  width: 160px;
}

.text_74 {
  width: 108px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 11px 0 0 26px;
}

.text-wrapper_27 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 25px;
  height: 50px;
  margin-left: 20px;
  width: 160px;
}

.text_75 {
  width: 108px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 11px 0 0 26px;
}

.text-wrapper_28 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 25px;
  height: 50px;
  margin-left: 20px;
  width: 160px;
}

.text_76 {
  width: 108px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 11px 0 0 26px;
}

.text_77 {
  width: 220px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 36px;
  letter-spacing: 0.6000000238418579px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 50px;
  margin: 100px 0 0 31.5%;
}

.group_14 {
  background-color: rgba(195, 123, 33, 1);
  width: 72px;
  height: 4px;
  margin: 10px 0 0 35.5%;
}

.block_17 {
  width: 1414px;
  height: 520px;
  margin: 72px 0 0 0;
}

.group_16 {
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.18);
  background-image: url(../../assets/img/spzy/t1.png);
  width: 459px;
  height: 520px;
}

.text_78 {
  width: 338px;
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
  margin: 344px 0 0 22px;
}

.box_26 {
  width: 221px;
  height: 50px;
  margin: 17px 0 0 22px;
}

.section_8 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/706f213f6d41499890ed168d1e874283_mergeImage.png);
  width: 50px;
  height: 50px;
}

.text_79 {
  width: 165px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(158, 158, 158, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin-top: 12px;
}

.box_27 {
  width: 400px;
  height: 53px;
  margin: 6px 0 17px 22px;
}

.text_80 {
  width: 117px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_29 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_81 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 20px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_82 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 38px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text_83 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 20px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.group_17 {
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.18);
  background-image: url(../../assets/img/spzy/t2.png);
  width: 459px;
  height: 520px;
  margin-left: 18px;
}

.text_84 {
  width: 338px;
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
  margin: 344px 0 0 23px;
}

.block_18 {
  width: 221px;
  height: 50px;
  margin: 17px 0 0 23px;
}

.box_14 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/1a7d1473a2d745b0aa4a8a274a546e94_mergeImage.png);
  width: 50px;
  height: 50px;
}

.text_85 {
  width: 165px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(158, 158, 158, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin-top: 12px;
}

.block_19 {
  width: 400px;
  height: 53px;
  margin: 6px 0 17px 23px;
}

.text_86 {
  width: 117px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_30 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_87 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 20px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_88 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 38px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text_89 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 20px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.group_18 {
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.18);
  background-image: url(../../assets/img/spzy/t3.png);
  width: 459px;
  height: 520px;
  margin-left: 19px;
}

.text_90 {
  width: 338px;
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
  margin: 344px 0 0 23px;
}

.box_28 {
  width: 221px;
  height: 50px;
  margin: 17px 0 0 23px;
}

.group_20 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e05a2f0c89954a5587fa7a10327f24f1_mergeImage.png);
  width: 50px;
  height: 50px;
}

.text_91 {
  width: 165px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(158, 158, 158, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin-top: 12px;
}

.box_29 {
  width: 399px;
  height: 53px;
  margin: 6px 0 17px 23px;
}

.text_92 {
  width: 117px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_31 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_93 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 20px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_94 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 38px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text_95 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 20px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.block_20 {
  width: 1414px;
  height: 520px;
  margin: 19px 0 0 0;
}

.box_16 {
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.18);
  background-image: url(../../assets/img/spzy/t4.png);
  width: 459px;
  height: 520px;
}

.text_96 {
  width: 338px;
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
  margin: 343px 0 0 22px;
}

.box_30 {
  width: 221px;
  height: 50px;
  margin: 17px 0 0 22px;
}

.box_18 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/b00445e1ca0b46ac8abeb1e41d080917_mergeImage.png);
  width: 50px;
  height: 50px;
}

.text_97 {
  width: 165px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(158, 158, 158, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin-top: 13px;
}

.box_31 {
  width: 400px;
  height: 53px;
  margin: 7px 0 17px 22px;
}

.text_98 {
  width: 117px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_32 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_99 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 20px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_100 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 38px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text_101 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 20px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.box_20 {
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.18);
  background-image: url(../../assets/img/spzy/t5.png);
  width: 459px;
  height: 520px;
  margin-left: 18px;
}

.text_102 {
  width: 338px;
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
  margin: 343px 0 0 23px;
}

.block_21 {
  width: 221px;
  height: 50px;
  margin: 17px 0 0 23px;
}

.box_21 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/21ae420c73284b259bd9898b1e5aa2c0_mergeImage.png);
  width: 50px;
  height: 50px;
}

.text_103 {
  width: 165px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(158, 158, 158, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin-top: 13px;
}

.block_22 {
  width: 400px;
  height: 53px;
  margin: 7px 0 17px 23px;
}

.text_104 {
  width: 117px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_33 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_105 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 20px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_106 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 38px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text_107 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 20px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.box_22 {
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.18);
  background-image: url(../../assets/img/spzy/t6.png);
  width: 459px;
  height: 520px;
  margin-left: 19px;
}

.text_108 {
  width: 338px;
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
  margin: 343px 0 0 23px;
}

.group_35 {
  width: 221px;
  height: 50px;
  margin: 17px 0 0 23px;
}

.group_24 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/3d9ece9ce9754cdeb7b3df28f56c29a2_mergeImage.png);
  width: 50px;
  height: 50px;
}

.text_109 {
  width: 165px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(158, 158, 158, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin-top: 13px;
}

.group_36 {
  width: 399px;
  height: 53px;
  margin: 7px 0 17px 23px;
}

.text_110 {
  width: 117px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 13px;
}

.text-wrapper_34 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_111 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 20px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text_112 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 38px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text_113 {
  width: 137px;
  height: 53px;
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 20px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  line-height: 28px;
}

.text-wrapper_35 {
  background-color: rgba(13, 15, 17, 1);
  height: 67px;
  width: 1920px;
  margin: 430px 0 1px 0;
}

.text_114 {
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

.group_26 {
  background-color: rgba(34, 38, 43, 1);
  position: absolute;
  left: 0;
  top: 4419px;
  width: 1920px;
  height: 273px;
}

.text-group_38 {
  width: 273px;
  height: 124px;
  margin: 45px 0 0 0;
}

.text_115 {
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

.text_116 {
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

.text_117 {
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

.box_32 {
  width: 113px;
  height: 129px;
  margin: 45px 0 0 113px;
}

.text-group_39 {
  width: 113px;
  height: 81px;
}

.text_118 {
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

.text_119 {
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

.text_120 {
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

.box_33 {
  width: 98px;
  height: 129px;
  margin: 45px 0 0 112px;
}

.text-group_40 {
  width: 98px;
  height: 81px;
}

.text_121 {
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

.text_122 {
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

.text_123 {
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

.text-group_41 {
  width: 98px;
  height: 81px;
  margin: 45px 0 0 113px;
}

.text_124 {
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

.text_125 {
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

.box_34 {
  width: 126px;
  height: 183px;
  margin: 45px 332px 0 292px;
}

.text_126 {
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

.group_27 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/35b507aea86b4cb28b57af6c8532adcc_mergeImage.png);
  width: 126px;
  height: 126px;
  margin-top: 24px;
}

div/deep/ .el-carousel__container {
  height: 100%;
}

.shotdes_content {
  max-width: 1400px;
  margin: 0 auto;
}

@media (min-width: 1400px) {
  .shotdes_content {
    width: 98.5%;
  }

  .group_3 {
    width: 899px;
  }

  .block_11 {
    width: 100%;
  }

  .block_2,
  .block_3 {
    margin-left: 0;
  }

  .block_12,
  .block_14 {
    transform: translateX(-25px) scaleX(0.96);
  }

  .block_17,
  .block_20 {
    transform: translateX(-17px) scaleX(0.96);
  }
}

.des_tag,
.text-wrapper_9 {
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

.des_tag:hover {
  background-color: #c37b21;
  border-color: #c37b21;
}

.des_tag:hover span {
  color: #ffffff;
}

.text-wrapper_9:hover {
  background-color: #ffffff;
  border: 2px solid #c37b21;
}

.text-wrapper_9:hover span {
  color: #c37b21;
}

.image-wrapper_2 img {
  cursor: pointer;
}

.image-wrapper_2 img:hover {
  border: 2px solid #c37b21;
  border-radius: 5px;
}

.text_12,
.text_14 {
  cursor: pointer;
}

.sort_card {
  cursor: pointer;
  border: 5px solid #ffffff;
  transition: all 0.3s ease 0s;
}

.sort_card:hover {
  background-color: #ffffff;
  border: 5px solid #292929;
}

.box_2:hover,
.section_6:hover,
.group_10:hover,
.box_9:hover,
.box_10:hover {
  background-color: rgb(246 240 232);
  transition: all 0.3s ease 0s;
}

.mb100 {
  margin-bottom: 100px;
}

.cart_img {
  -webkit-transition: all 0.6s ease 0s;
  transition: all 0.6s ease 0s;
  border: 5px solid #ffffff;
  cursor: pointer;
}

.cart_img:hover {
  border: 5px solid #8a8a8a;
}

.xg_span {
  margin: auto;
}

.xg_span span {
  margin: 100px 0 0 0;
}

.xg_span .group_14 {
  margin: 10px auto;
}

.seenCls .group_3 {
  width: 92%;
  height: 253px;
  margin: 0 1rem;
}

.seenCls .text-wrapper_2 {
  margin-left: 0.4rem;
}

.seenCls .text_11 {
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
}

.seenCls .section_12 {
  position: absolute;
  top: 406px;
}

.seenCls .text_21 {
  font-size: 1.5rem;
}

.seenCls .text_20 {
  font-size: 1rem;
}

.seenCls .text_22 {
  font-size: 1rem;
}

.seenCls .text-wrapper_9 {
  position: absolute;
  width: 6rem;
  padding: 0;
  height: 2rem;
  margin-top: 17px;
  text-align: center;
  right: -3rem;
}

.seenCls .text-wrapper_9 span {
  font-size: 0.8rem;
  line-height: 2rem;
  margin: 0 1.3rem;
}

.seenCls .box_23 span,
.seenCls .box_24 span,
.seenCls .text_36,
.seenCls .text_37,
.seenCls .text_38,
.seenCls .text_39 {
  font-size: 0.8rem;
  margin: 3px 0 0 0.4rem;
}

.seenCls .box_23,
.seenCls .box_24,
.seenCls .text-wrapper_10,
.seenCls .text-wrapper_11 {
  width: 219px;
  margin-top: 0;
  height: 43px;
}

.seenCls .box_23 div,
.seenCls .box_24 div,
.seenCls .text-wrapper_10,
.seenCls .text-wrapper_11 {
  width: 98px;
  height: 33px;
}

.seenCls .section_13 {
  position: absolute;
  top: 432px;
  left: 16rem;
}

.seenCls .text-wrapper_11 {
  margin-top: 10px;
}

.seenCls .text_35 {
  transform: translate(-1rem, 139px);
  font-size: 0.8rem;
}

.seenCls .text_31,
.seenCls .text_32 {
  font-size: 0.8rem;
}

.seenCls .box_25 {
  margin-top: 5px;
}

.seenCls .box_1 {
  width: 3rem;
  height: 3rem;
  background-size: cover;
}

.seenCls .image-text_24 {
  width: 157px;
}

.seenCls .text-group_1 {
  margin-top: 7px;
}

.seenCls .text_34 {
  margin-top: 15px;
}

.seenCls .image-wrapper_2 {
  width: 120px;
  height: 30px;
  margin: 73px 0 0 -21px;
}

.seenCls .box_25 {
  width: 194px;
}
.content_text {
  padding: 0px 28px;
  overflow-wrap: break-word;
  white-space: nowrap;
  margin: 12px 0 0 28px;
}

.cjtj_li {
  margin-top: 20px;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-group_changjing {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  margin-bottom: 10px;
}

.shotbox {
  position: relative;
}

.shotbox .img {
  height: 222px;
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
  width: 150px;
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

.appraise {
  display: flex;
  width: 100%;
  height: 204px;
  padding: 10px 0;
  border-bottom: 1px dashed #f4f4f4;
}
.appraise_left {
  /* background-color: #f4f4f4; */
  border-radius: 159px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 183px;
}
.appraise_left_avatar {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.appraise_right {
  width: calc(100% - 200px);
  margin-left: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.appraise_right_content_bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
/deep/ .el-rate {
  height: auto;
}
/deep/ .el-rate__icon {
  font-size: 35px;
}
</style>
