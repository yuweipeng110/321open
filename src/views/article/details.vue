<template>
  <div class="act_des_content" :class="{ seenCls: !seen }">
    <div v-if="seen">
      <span class="text_11"
        >首页 &gt;
        <template v-if="fid == '1'">政策资讯</template>
        <template v-else-if="fid == '2'">行业新闻</template>
        <template v-else-if="fid == '3'">服务项目</template>
        <template v-else-if="fid == '4'">服务案例</template> &gt;{{
          deatilS.title
        }}</span
      >
    </div>
    <div class="_3VRLsv">
      <div class="_gp-ck">
        <section class="ouvJEz">
          <div class="back" @click="handleBack">
            <i class="el-icon-arrow-left" /> 返回
          </div>
          <h1 class="_1RuRku tc">
            {{ deatilS.title }}
          </h1>
          <div class="rEsl9f">
            <div class="_2mYfmT">
              <div style="margin-left: 8px">
                <div class="s-dsoj">
                  <time datetime="2022-05-14T08:57:09.000Z"
                    ><i class="el-icon-time" /> {{ deatilS.addtime }}</time
                  ><span>
                    <i class="el-icon-view" /> 阅读 {{ deatilS.reader }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <article class="_2rhmJa">
            <p>
              {{ deatilS.description }}
            </p>
            <h3>{{ deatilS.title }}</h3>

            <p v-html="deatilS.content"></p>
          </article>
        </section>
        <div class="tc mb50">
          <el-button class="sxBtn" type="primary" icon="el-icon-d-arrow-left "
            >上一篇</el-button
          >
          <el-button class="sxBtn" type="primary"
            >下一篇<i class="el-icon-d-arrow-right el-icon--right"
          /></el-button>
        </div>
      </div>
      <div />
      <aside class="_2OwGUo">
        <section class="_3Z3nHf">
          <h3 class="_1Prj5h QxT4hD">热门推荐</h3>
          <div v-for="(item, index) in hotList" :key="index" class="_1jW5zV">
            <div class="_3QmNxJ" :title="item" @click="go(item)">
              <p
                v-if="index < 3"
                class="_3SxgBd _1OhGeD one_row"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="jsd-meta">{{ index + 1 }}</span> {{ item.title }}
              </p>
              <p
                v-else
                class="_3SxgBd _1OhGeD one_row"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="jsdt-meta">{{ index + 1 }}</span> {{ item }}
              </p>
            </div>
          </div>
        </section>
        <section class="_3Z3nHf">
          <h3 class="QHRnq8 QxT4hD"><span>相关推荐</span></h3>
          <div
            v-for="(item, index) in orderList"
            :key="index"
            class="cont_der"
            @click="go(item)"
          >
            <a v-if="item.img" class="wrap-img" href="#" target="_blank">
              <img class="img-blur-done" :src="item.img" />
            </a>
            <div class="cuOxAY">
              <div class="_3L5YSq" :title="item.title">
                <p class="_1-HJSV _1OhGeD two_Row" rel="noopener noreferrer">
                  {{ item.title }}
                </p>
              </div>
              <div class="_19haGh">
                <i class="el-icon-time" /> {{ item.addtime }}
                <i class="el-icon-view" /> 阅读
                {{ item.reader }}
              </div>
            </div>
          </div>
        </section>
      </aside>
    </div>
  </div>
</template>

<script>
import { wenList, art_detail } from "@/api/home";
export default {
  data() {
    return {
      seen: true,
      fid: "",
      id: "",
      deatilS: "",
      hotList: null,
      orderList: null,
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
    $route() {
      this.fid = this.$route.query.fid;
      this.id = this.$route.query.id;
      this.getdetail(this.id);
      this.fetchData();
    },
  },

  mounted() {
    this.fid = this.$route.query.fid;
    this.id = this.$route.query.id;

    // console.log(this.$route);
    // console.log(this.id);
    this.getdetail(this.id);
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

    this.fetchData();
  },
  methods: {
    go(item) {
      this.$router.push({
        path: "/article/details",
        query: {
          id: item.id,
        },
      });
    },

    fetchData() {
      wenList({ cate_id: 5 }).then((res) => {
        console.log(res.data.data);
        this.hotList = res.data.data;
      });
      wenList({ cate_id: 6 }).then((res) => {
        console.log(res.data.data);
        this.orderList = res.data.data;
      });

      // art_detail({ id: 5 }).then(res => {
      //   console.log(res.data.data);
      //   // this.hotList = res.data.data
      // });
      // art_detail({ id: 6 }).then(res => {
      //   console.log(res.data.data);
      //   // this.orderList = res.data.data
      // });
    },
    handleBack() {
      this.$router.go(-1);
    },
    // 获取详细信息
    async getdetail(id) {
      let res = await art_detail({ id: String(id) });
      // console.log("用户详情信息", res);
      this.deatilS = res.data.data[0];
    },
  },
};
</script>

<style scoped>
.act_des_content {
  max-width: 1400px;
  margin: 0 auto;
}

.text_11 {
  width: 269px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 18px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 26px 0 0 0;
}

._gp-ck {
  flex-shrink: 0;
  margin-bottom: 24px;
  margin-right: 10px;
  width: 1030px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  margin-top: 15px;
  border: 1px px solid #fff;
}

.ouvJEz {
  padding: 32px 15px;
  padding-top: 0px;
}

._3Z3nHf,
.ouvJEz {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
}

._1RuRku {
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  margin-top: 32px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #404040;
  text-rendering: optimizelegibility;
}

.rEsl9f {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  font-size: 13px;
}

._2mYfmT {
  display: flex;
  align-items: center;
}

.s-dsoj {
  display: flex;
  color: #969696;
}

.s-dsoj > :not(:last-child) {
  margin-right: 10px;
}

.s-dsoj > :not(:last-child) {
  margin-right: 10px;
}

._2rhmJa {
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 20px;
  word-break: break-word;
  position: relative;
}

article,
aside,
dialog,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

._2rhmJa p {
  margin-bottom: 20px;
  word-break: break-word;
}

._2rhmJa h3 {
  font-size: 22px;
}

._2rhmJa .image-package {
  width: 100%;
  margin: 0;
  padding-bottom: 25px;
  text-align: center;
  font-size: 0;
}

._2rhmJa .image-package .image-container {
  position: relative;
  z-index: 95;
  background-color: #e6e6e6;
  transition: background-color 0.1s linear;
  margin: 0 auto;
}

._2rhmJa .image-package .image-container-fill {
  z-index: 90;
}

._2rhmJa .image-package .image-container .image-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

._2rhmJa .image-package .image-container .image-view img {
  transition: all 0.15s linear;
  z-index: 95;
  opacity: 1;
}

._2rhmJa .image-package img {
  max-width: 100%;
  width: auto;
  height: auto;
  vertical-align: middle;
  border: 0;
}

._2rhmJa img {
  max-width: 100%;
}

._2mYfmT {
  margin: auto;
}

._2OwGUo {
  flex-shrink: 0;
  width: 360px;
}

._3Z3nHf {
  padding: 16px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  margin-top: 15px;
  border: 1px px solid #fff;
}

._3Z3nHf,
.ouvJEz {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
}

._1Prj5h {
  font-size: 16px;
  padding-left: 6px;
  height: 18px;
}

.QxT4hD {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-left: 12px;
  border-left: 4px solid #ec7259;
  font-size: 18px;
  font-weight: 500;
  height: 20px;
  line-height: 20px;
}

._1jW5zV {
  margin-bottom: 12px;
  border-bottom: 1px dashed #ccc;
  width: 94%;
}

._3QmNxJ {
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

._1OhGeD,
._1OhGeD:active,
._1OhGeD:hover {
  color: inherit;
  margin: 0;
}

._3Z3nHf {
  padding: 16px;
}

._3Z3nHf,
.ouvJEz {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
}

.QHRnq8 {
  font-size: 16px;
  padding-left: 6px;
  height: 18px;
}

.QxT4hD {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-left: 12px;
  border-left: 4px solid #ec7259;
  font-size: 18px;
  font-weight: 500;
  height: 20px;
  line-height: 20px;
  margin-top: 10px;
}

.cuOxAY {
  margin-bottom: 12px;
  padding-left: 8px;
}

._3L5YSq {
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

._1OhGeD,
._1OhGeD:active,
._1OhGeD:hover {
  color: inherit;
}

._19haGh {
  font-size: 12px;
  color: #969696;
}

._3VRLsv {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10px;
  font-size: 16px;
}

._3VRLsv {
  box-sizing: content-box;
  padding-left: 16px;
  padding-right: 16px;
}

.jsd-meta {
  color: #ea6f5a !important;
  font-size: 18px;
  margin-right: 5px;
  font-weight: 800;
}

.jsdt-meta {
  color: #000000 !important;
  font-size: 18px;
  margin-right: 5px;
}

._3SxgBd,
.two_Row {
  cursor: pointer;
}

.index .main .note-list .have-img .wrap-img {
  width: 150px;
}

.note-list .have-img .wrap-img {
  position: absolute;
  top: 46%;
  margin-top: -60px;
  left: 15px;
  width: 206px;
  height: 135px;
}

.img-blur-done {
  width: 130px;
  height: 80px;
}

.cont_der {
  display: flex;
  overflow: hidden;
  margin-bottom: 8px;
}

.two_Row {
  overflow: hidden;

  text-overflow: ellipsis;

  display: -webkit-box;

  -webkit-box-orient: vertical;

  -webkit-line-clamp: 2;
  width: 198px;
}

.sxBtn {
  background-color: rgba(207, 119, 0, 1);
  color: #fff;
  border-color: rgba(207, 119, 0, 1);
  transition: all 0.3s ease 0s;
}

.sxBtn:hover {
  background-color: rgb(238, 184, 113);
  color: #fff;
  border-color: rgb(238, 184, 113);
}

._3SxgBd,
.two_Row {
  transition: all 0.3s ease 0s;
}

._3SxgBd:hover,
.two_Row:hover {
  color: #be791a;
}

.seenCls ._2OwGUo {
  display: none;
}

.seenCls ._gp-ck {
  width: 94%;
  margin-right: 0;
}

.seenCls ._3VRLsv {
  padding-left: 0;
  padding-right: 0;
}

.back {
  padding: 15px 0 10px 0;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
}

@media (max-width: 1400px) {
  .act_des_content {
    transform: translateX(0px) scaleX(0.98);
  }
}
</style>
