<template>
  <div class="box" :class="{ seenCls: !seen }">
    <el-row v-for="(item, index) in imgsArr_c" :key="index" :gutter="seen ? 10 : 5">
      <el-col v-for="(ytem, yndex) in item" :key="yndex" :span="colNum">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="hover"
          class="noBorder"
          @click.native="handleClick(ytem.id)"
        >
          <img :src="ytem.img" alt="" />
          <div class="txt-five">
            <div class="oneRow">{{ ytem.title }}</div>
            <div>
              <div class="fl">
                <div>
                  <img class="bot-img" :src="ytem.avatar" alt="" />
                  <span class="tyf12">{{ ytem.nick }}</span>
                </div>
              </div>
              <div class="fr">
                <div class="pcmon phoneMon">{{ ytem.zujin }}/天</div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row v-show="seen" class="m50">
      <el-col :span="24">
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { homezyList } from "@/api/home";

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ["seen", "maxlen"],
  data() {
    return {
      colNum: 6,
      loading: false,
      imgsArr: [],

      imgsArr_c: [], // 渲染的图片
      imgCol: 3, // 图片列数
      imgGap: 5, // 图片间间隔
      loadedCount: 0,
      imgBoxEls: [], // 所有 img-box 元素
      beginIndex: 0,
      colsHeightArr: [], // 保存当前每一列的高度
      reachBottomDistance: 20, // 滚动触底距离，触发加载新图片
      viewHeight: 0, // 窗口视图大小
      contentHeight: 0,
    };
  },
  watch: {
    seen: {
      handler: function (val, oldVal) {
        if (document.body.clientWidth > 700) {
          this.seen = true;
          this.colNum = 6;
        } else {
          this.seen = false;
          this.colNum = 12;
        }
      },
      // 深度观察监听
      deep: true,
    },
  },
  mounted() {
    // 拍摄资源记录
    this.ziyuanLists();

    if (this.seen) {
      this.colNum = 6;
    } else {
      this.colNum = 12;
    }
    const newList = [];

    for (var i = 0; i < this.imgsArr.length; i += 4) {
      newList.push(this.imgsArr.slice(i, i + 4));
    }
    // console.log(newList);
    this.imgsArr_c = newList;
    if (this.maxlen === 4) {
      this.imgsArr_c = newList.slice(0, 1);
      // console.log(this.imgsArr_c, "this.imgsArr_c ");
    }

    // window.addEventListener('scroll', this.scroll, false)
  },
  methods: {
    // 拍摄资源记录
    async ziyuanLists() {
      let res = await homezyList();
      if (res.data) {
        this.imgsArr = res.data.data;
      }
    },

    handleClick(item) {
      this.$router.push({
        path: "/shotDetails/details",
        query: { id: item },
      });
    },
    scroll() {
      // var that = this
      // scrollTop 滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      // windowHeight 可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      // scrollHeight 滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      // console.log(scrollTop + windowHeight)
      // console.log(scrollHeight)
      // 滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        // 加载数据
        // alert()
        const arr = [
          {
            src: require("@/assets/a3.png"),
            href: "https://www.baidu.com",
            info: "我是第一张图片",
            headerText: "测试",
          },
          {
            src: require("@/assets/a4.png"),
            href: "https://www.baidu.com",
            info: "一些图片描述文字asdasdasdasdasdasasdasd",
            headerText: "测试",
          },
          {
            src: require("@/assets/a5.jpg"),
            href: "https://www.baidu.com",
            info: "白色蛋壳棚带360升降转台",
          },
          {
            src: require("@/assets/z1.png"),
            href: "https://www.baidu.com",
            info: "白色蛋壳棚带360升降转台",
          },

          {
            src: require("@/assets/z2.png"),

            href: "https://www.baidu.com",
            info: "白色蛋壳棚带360升降转台",
          },
          {
            src: require("@/assets/z3.png"),
            href: "https://www.baidu.com",
            info: "白色蛋壳棚带360升降转台",
          },
          {
            src: require("@/assets/z4.png"),
            href: "https://www.baidu.com",
            info: "白色蛋壳棚带360升降转台",
          },
          {
            src: require("@/assets/z5.png"),
            href: "https://www.baidu.com",
            info: "白色蛋壳棚带360升降转台",
          },
          {
            src: require("@/assets/a3.png"),
            href: "https://www.baidu.com",
            info: "白色蛋壳棚带360升降转台",
          },
        ];
        this.imgsArr = [...this.imgsArr, ...arr];
        // that.getList()
        // that.getBuyoutGoodsList();
      }
    },
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.box div/deep/.el-card__body {
  height: 222px;
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(255, 255, 255, 0.8);
}

.box div/deep/.el-card__body img {
  height: 222px;
  width: 100%;
  object-fit: cover;
  /* box-shadow:0 2px 12px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease 0s; */
}

div/deep/.el-card {
  cursor: pointer;
  -webkit-box-shadow: 0 2px 12px 0 rgba(255, 255, 255, 0.88);
  box-shadow: 0 2px 12px 0 rgba(255, 255, 255, 0.88);
}

div/deep/.el-card.is-always-shadow,
div/deep/.el-card.is-hover-shadow:focus,
div/deep/.el-card.is-hover-shadow:hover {
  -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 88%);
}

.m50 {
  margin: 50px 0;
  text-align: center;
}

.txt-five {
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

.txt-five h3 {
  font-weight: normal;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.noBorder {
  border: none;
}

.fl div,
.fr div {
  height: 22px;
  text-align: left;
  opacity: 0.9;
}

.seenCls div/deep/.el-card {
  margin-bottom: 10px;
}

.seenCls div/deep/.el-row {
  margin-bottom: 0;
}

.oneRow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 29px;
  font-size: 20px;
}

.seenCls .oneRow {
  font-size: 0.8rem;
}

.seenCls .txt-five {
  padding: 0 5px;
  color: #0e0e0e;
  background: rgb(0 0 0 / 0%);
  border: 1px solid #eee;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.pcmon {
  font-size: 20px;
}

.seenCls .phoneMon {
  font-size: 0.8rem;
  width: 48px;
  margin-right: 0px;
}

.bot-img {
  width: 25px !important;
  height: 25px !important;
  border-radius: 25px !important;
  margin-top: 5px !important;
  margin-right: 10px !important;
  color: #070707;
  font-size: 15px;
  -webkit-transform: translateY(-7px);
  transform: translateY(-6px);
}

.tyf12 {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  width: 150px;
}

.seenCls .tyf12 {
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: -43px;
  display: block;
  width: 81px;
  -o-text-overflow: ellipsis;
  margin-left: 28px;
}

.seenCls .bot-img {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.seenCls .el-row {
  margin-left: 5px !important;
  margin-right: 6px !important;
}

@media only screen and (min-width: 401px) and (max-width: 420px) {
  .seenCls .tyf12 {
    width: 104px;
  }
}

@media only screen and (min-width: 380px) and (max-width: 400px) {
  .seenCls .tyf12 {
    width: 91px;
  }
}

@media only screen and (min-width: 421px) and (max-width: 450px) {
  .seenCls .tyf12 {
    width: 118px;
  }
}

/* @media (max-width: 1400px) {
  .seenCls div/deep/.el-card__body img {
    height: 114px;
  }
  .seenCls div/deep/.txt-five {
    bottom: 40px;
  }
} */
.seenCls div/deep/.el-card__body img {
  height: 114px;
}
.seenCls div/deep/.txt-five {
  bottom: 7px;
}
.seenCls div/deep/.el-card__body {
  height: 189px;
}
@media only screen and (min-width: 401px) and (max-width: 460px) {
  .seenCls div/deep/.el-card__body img {
    height: 125px;
  }
  .seenCls div/deep/.el-card__body {
    height: 200px;
  }
}
</style>
