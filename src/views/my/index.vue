<template>
  <div>
    <div v-if="seen" class="my_content">
      <el-row>
        <el-col :span="24">
          <div class="tabBtn">
            <el-button
              type="warning"
              :class="{ active: tabVal === 0 }"
              plain
              @click="handleTab(0)"
              >我是剧组</el-button
            >
            <el-button
              type="warning"
              :class="{ active: tabVal === 1 }"
              plain
              @click="handleTab(1)"
              >我是商户</el-button
            >
            <el-button
              type="warning"
              :class="{ active: tabVal === 2 }"
              plain
              @click="handleTab(2)"
              >我是企业</el-button
            >
          </div>
        </el-col>
      </el-row>

      <transition name="bounce">
        <div v-show="isTab" class="dafsa">
          <el-tabs
            v-show="tabVal === 0"
            v-model="activeName"
            tab-position="left"
            type="card"
            class=""
            @tab-click="handleClick"
          >
            <el-tab-pane name="grzx">
              <span slot="label"> 个人信息 <i class="el-icon-arrow-right" /> </span>
              <grzx />
            </el-tab-pane>
            <el-tab-pane name="xqfb">
              <span slot="label"> 需求发布 <i class="el-icon-arrow-right" /> </span>
              <xqfb />
            </el-tab-pane>
            <el-tab-pane name="zyjl">
              <span slot="label"> 需求记录 <i class="el-icon-arrow-right" /> </span>
              <zyjl />
            </el-tab-pane>
            <el-tab-pane name="xqtb">
              <span slot="label"> 投标记录 <i class="el-icon-arrow-right" /> </span>
              <xqtb />
            </el-tab-pane>
            <el-tab-pane name="ddgl">
              <span slot="label"> 订单管理 <i class="el-icon-arrow-right" /> </span>
              <ddgl />
            </el-tab-pane>
            <el-tab-pane name="wdgz">
              <span slot="label"> 我的关注 <i class="el-icon-arrow-right" /> </span>
              <wdgz :guanzhu="myLikeList" />
            </el-tab-pane>
            <el-tab-pane name="wdsc">
              <span slot="label" @click="myCollect">
                我的收藏 <i class="el-icon-arrow-right" />
              </span>
              <wdsc />
            </el-tab-pane>
            <el-tab-pane name="tcdl">
              <span slot="label"> 退出登录 <i class="el-icon-arrow-right" /> </span>
            </el-tab-pane>
          </el-tabs>
          <el-tabs
            v-show="tabVal === 1"
            v-model="activeName"
            tab-position="left"
            type="card"
            class=""
            @tab-click="handleClick"
          >
            <el-tab-pane name="grzx">
              <span slot="label"> 个人信息 <i class="el-icon-arrow-right" /> </span>
              <grzx />
            </el-tab-pane>
            <el-tab-pane name="zyfb">
              <span slot="label"> 资源发布 <i class="el-icon-arrow-right" /> </span>
              <zyfb />
            </el-tab-pane>
            <el-tab-pane name="xqjl">
              <span slot="label" @click="zyFun">
                资源记录 <i class="el-icon-arrow-right" />
              </span>
              <xqjl />
            </el-tab-pane>
            <el-tab-pane name="xqtb">
              <span slot="label"> 投标记录 <i class="el-icon-arrow-right" /> </span>
              <xqtb />
            </el-tab-pane>
            <el-tab-pane name="ddgl">
              <span slot="label"> 订单管理 <i class="el-icon-arrow-right" /> </span>
              <ddgl />
            </el-tab-pane>
            <el-tab-pane name="sjrz">
              <span slot="label"> 商家入驻 <i class="el-icon-arrow-right" /> </span>
              <sjrz />
            </el-tab-pane>
            <el-tab-pane name="wdgz">
              <span slot="label"> 我的关注 <i class="el-icon-arrow-right" /> </span>
              <wdgz />
            </el-tab-pane>
            <el-tab-pane name="wdsc">
              <span slot="label" @click="myCollect">
                我的收藏 <i class="el-icon-arrow-right" />
              </span>
              <wdsc />
            </el-tab-pane>
            <el-tab-pane name="tcdl">
              <span slot="label"> 退出登录 <i class="el-icon-arrow-right" /> </span>
            </el-tab-pane>
          </el-tabs>
          <el-tabs
            v-show="tabVal === 2"
            v-model="activeName"
            tab-position="left"
            type="card"
            class=""
            @tab-click="handleClick"
          >
            <el-tab-pane name="grzx">
              <span slot="label"> 个人信息 <i class="el-icon-arrow-right" /> </span>
              <grzx />
            </el-tab-pane>
            <el-tab-pane name="qyfw">
              <span slot="label"> 企业服务 <i class="el-icon-arrow-right" /> </span>
              <qyfw />
            </el-tab-pane>
            <el-tab-pane name="zzbl">
              <span slot="label"> 资质办理 <i class="el-icon-arrow-right" /> </span>
              <zzbl />
            </el-tab-pane>
            <el-tab-pane name="hdch">
              <span slot="label"> 活动策划 <i class="el-icon-arrow-right" /> </span>
              <hdch />
            </el-tab-pane>
            <el-tab-pane name="zczx">
              <span slot="label"> 政策咨询 <i class="el-icon-arrow-right" /> </span>
              <zczx />
            </el-tab-pane>
            <el-tab-pane name="fwjd">
              <span slot="label"> 服务进度 <i class="el-icon-arrow-right" /> </span>
              <fwjd />
            </el-tab-pane>
            <el-tab-pane name="xqtb">
              <span slot="label"> 投标记录 <i class="el-icon-arrow-right" /> </span>
              <xqtb />
            </el-tab-pane>
            <el-tab-pane name="ddgl">
              <span slot="label"> 订单管理 <i class="el-icon-arrow-right" /> </span>
              <ddgl />
            </el-tab-pane>
            <el-tab-pane name="wdgz">
              <span slot="label"> 我的关注 <i class="el-icon-arrow-right" /> </span>
              <wdgz />
            </el-tab-pane>
            <el-tab-pane name="wdsc">
              <span slot="label"> 我的收藏 <i class="el-icon-arrow-right" /> </span>
              <wdsc />
            </el-tab-pane>
            <el-tab-pane name="tcdl">
              <span slot="label"> 退出登录 <i class="el-icon-arrow-right" /> </span>
            </el-tab-pane>
          </el-tabs>
        </div>
      </transition>
    </div>
    <des v-else />
  </div>
</template>

<script>
import grzx from "./grzx.vue";
import xqfb from "./xqfb.vue";
import xqjl from "./xqjl.vue";
import ddgl from "./ddgl.vue";
import sjrz from "./sjrz.vue";
import zyfb from "./zyfb.vue";
import zyjl from "./zyjl.vue";
import wdgz from "./wdgz.vue";
import wdsc from "./wdsc.vue";
import xqtb from "./xqtb.vue";
import qyfw from "./qyfw.vue";
import zzbl from "./zzbl.vue";
import hdch from "./hdch.vue";
import zczx from "./zczx.vue";
import fwjd from "./fwjd.vue";
import des from "./indexPhone.vue";
import { getLogin, attention } from "@/api/user";
// import axios from "axios";
import { shangjiaruzhuLog } from "@/api/tenant";
export default {
  name: "Dashboard",
  components: {
    grzx,
    xqfb,
    ddgl,
    sjrz,
    zyfb,
    zyjl,
    wdgz,
    wdsc,
    xqjl,
    xqtb,
    qyfw,
    fwjd,
    zzbl,
    hdch,
    zczx,
    des,
  },
  data() {
    return {
      seen: true,
      isTab: true,
      activeName: "grzx",
      // id:null,
      // 消费记录
      consumeLogList: [],
      // 收益记录
      YieldLog: [],
      // 提现记录
      withdrawDepositList: [],
      // 我的关注
      myLikeList: [],
      // 我的收藏
      myCollList: [],
      tabVal: 0,
      page: "1",
      limit: "10",
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
    id(n, o) {
      console.log("id变化率了", n, o);
      this.Login();
    },
  },
  computed: {
    id() {
      return this.$store.state.user.id;
    },
  },

  mounted() {
    // console.log("ddgl订单管理");
    this.orderManagement();
    this.myLike();

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

    // console.log(this.$route.query);
    if (this.$route.query.openTab === "1") {
      this.tabVal = 2;
      this.activeName = "qyfw";
    }
  },
  methods: {
    //
    zyFun() {
      this.$store.dispatch("user/getZy", {
        uid: String(this.id),
        page: this.page,
        limit: this.limit,
      });
      // console.log("商户的");
    },

    handleClick(tab, event) {

      console.log(tab.name)

      switch(tab.name) {
        case 'fwjd':
          break;
      }

      // // console.log(tab.index, event);
      // switch (Number(tab.index)) {
      //   case 1:
      //     // console.log("个人信息");

      //     break;
      //   case 2:
      //     // console.log("剧组需求记录");
      //     this.$store.dispatch("user/getEnndAct", { uid: String(this.id) });

      //     break;
      //   case 3:
      //     // console.log("个人信息3");
      //     break;
      //   case 4:
      //     // console.log("个人信息4");

      //     this.$store.dispatch("user/getUserLog", { uid: String(this.id) });

      //     break;
      //   case 5:
      //     // console.log("个人信息5");

      //     shangjiaruzhuLog({ uid: this.id }).then((res) => {
      //       // console.log(res);
      //       this.$store.commit("user/SET_SERVEJINDUS", res.data.data[0].status);
      //     });

      //     // axios({
      //     //   url: "http://kelerk.178tqw.com/api/index/user_detail_f",
      //     //   method: "post",
      //     //   query: { uid: String(this.id) },
      //     // }).then((res) => {
      //     //   console.log(res);
      //     // });
      //     break;
      //   case 6:
      //     // console.log("个人信息6");
      //     break;
      //   default:
      //     // console.log("个人信息");
      // }

      // if (tab.index == 3) {
      //   // console.log("我是投标记录");
      //   this.$store.dispatch("user/getTenderAct", { uid: this.id });
      // }

      // if (tab.index === 9 || tab.index === "9") {
      //   this.$router.push({
      //     path: "/",
      //   });
      // }
    },
    handleTab(val) {
      this.tabVal = val;
      this.isTab = false;
      setTimeout(() => {
        this.isTab = true;
      }, 500);
    },
    handleGo(item) {
      this.$router.push({
        path: "/article/details",
        params: { obj: item },
      });
    },
    // 我的关注

    async myLike() {
      let resLike = await attention({ uid: this.id });
      if (resLike.status == 200 && resLike.data.data) {
        this.myLikeList = resLike.data.data;
      }
      // console.log("我的关注resLike", resLike);
    },
    // 我的收藏

    myCollect() {
      this.$store.dispatch("user/getLike", { uid: String(this.id) });
    },

    /** 订单管理 消费记录 consumeLog，收益记录YieldLog，提现记录withdrawDepositList*/
    orderManagement() {
      // console.log("订单管理开始加载数据");

      this.$store.dispatch("user/getUserLog", { uid: this.id, page: "1", limit: "10" });
    },

    /** 登录基本信息 */
    Login() {
      let id = this.$store.state.user.id;
      if (id == undefined && id.length && id) {
        // console.log("id不存在");
        this.$message.error("用户暂未登录");
        this.$router.push({ name: "Dashboard" });
      } else {
        this.$store.dispatch("user/getUserInfo", { id: id });
      }
    },
  },
  mounted() {
    //  this.id=localStorage.getItem("UodeId")
    this.Login();
    //  console.log("this.id",this.id);
  },
};
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 1s;
}

.bounce-leave-active {
  animation: bounce-in 1s;
}

@keyframes bounce-in {
  0% {
    transform: translateX(200px);
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.my_content {
  max-width: 1400px;
  margin: 30px auto;
}

div/deep/.el-tabs--left.el-tabs--card .el-tabs__item.is-left {
  border-left: none;
  border-right: 1px solid #e4e7ed;
  border-bottom: none;
  border-top: 1px solid #e4e7ed;
  text-align: left;
  width: 216px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
}

div/deep/.el-tabs__header .el-icon-arrow-right {
  margin-left: 95px;
}

div/deep/div .el-tabs--left.el-tabs--card .el-tabs__item.is-left {
  border-left: none !important;
  border-right: 1px solid #e4e7ed;
  border-bottom: none !important;
  border-top: none !important;
}

div/deep/.el-tabs__item.is-active {
  color: rgba(195, 123, 33, 1) !important;
}

div/deep/.el-tabs__item {
  transition: all 0.3s ease 0s;
}

div/deep/.el-tabs__item:hover {
  color: rgba(195, 123, 33, 1) !important;
}

div/deep/.el-tabs__item {
  transition: all 0.3s ease 0s;
}

div/deep/.el-tabs__item:hover {
  background-color: #e4e7ed;
  /* box-shadow: 1px 0px 4px 0 rgb(0 0 0) */
}

div/deep/.el-tabs--left.el-tabs--card .el-tabs__item.is-left.is-active:first-child {
  border-top: 1px solid #e4e7ed;
}

div/deep/.el-tabs__nav {
  padding: 2px 0;
}

div/deep/.el-tabs__content {
  max-width: 800px;
}

div/deep/.el-tabs__nav {
  border-top: none !important;
}

div/deep/.el-tabs--left .el-tabs__header.is-left {
  margin-top: -2px;
  margin-left: 10.5%;
}

div/deep/.el-tabs__nav {
  border-top: 3px solid #e4e7ed !important;
}

.tabBtn {
  max-width: 1400px;
  margin-bottom: 20px;
  text-align: center;
}

.active {
  background: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
}

.dafsa {
  transition: all 0.3s ease 0s;
  /* background: #fff; */
}
div/deep/.el-tabs--left.el-tabs--card .el-tabs__nav {
  border-bottom: none;
}
div/deep/.is-left {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
