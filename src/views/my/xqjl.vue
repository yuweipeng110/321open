<template>
  <div class="tab_content">
    <div class="list-container" v-if="imgsArr.length">
      <!-- 文章列表模块 -->
      <ul class="note-list" infinite-scroll-url="/">
        <li v-for="(item, index) in imgsArr" :key="index" class="have-img">
          <a class="wrap-img" href="#" target="_blank">
            <img class="img-blur-done" :src="item.img" :alt="item.title" />
          </a>
          <div class="content">
            <a href="#" class="title" target="_blank">{{ item.title }}</a>
            <div class="meta">
              <span class="jsd-meta"> <i class="el-icon-time" /> 发布时间 </span>
              <a class="nickname" target="_blank" href="#">{{ item.addtime }}</a>
              <a target="_blank" href="#">
                <i class="el-icon-view" />
                浏览量
                {{ item.view }}
              </a>

              <a target="_blank" href="#">
                <i class="el-icon-coin" />
                收益 588888 元
              </a>
              <a target="_blank" href="#">
                <i class="el-icon-document-copy" />
                订单量 8 单
              </a>
            </div>
            <div class="meta mt0" />
          </div>
          <div class="wrap-btn">
            <el-row>
              <el-col :span="24">
                <el-button type="warning" class="wa_btn" size="mini">修 改</el-button>
              </el-col>
              <el-col :span="24">
                <el-button type="danger" class="wa_btn" size="mini">删 除</el-button>
              </el-col>
              <el-col :span="24" class="tc">
                <el-tag v-if="item.status == 0" class="wa_btn" type="danger" size="mini"
                  >审核中</el-tag
                >
                <el-tag v-else class="wa_btn" type="success" size="mini">审核通过</el-tag>
              </el-col>
            </el-row>
          </div>
        </li>
      </ul>
      <!-- 文章列表模块 -->
      <el-row class="m50">
        <el-col :span="24">
          <el-pagination background layout="prev, pager, next" :total="1000" />
        </el-col>
      </el-row>
    </div>
    <div v-else>
      <el-empty description="暂未发现记录" :image-size="200"></el-empty>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: "1",
      limit: "10",
    };
  },
  computed: {
    imgsArr: function () {
      return this.$store.state.user.ziyuan;
    },
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
.tab_content {
  padding: 20px;
  border: 1px solid #e4e7ed;
}

.wf80 {
  width: 80%;
  margin: auto;
}

.mt72 {
  margin-top: 72px;
}

.tx_cls {
  margin: 20px;
}

.ml160 {
  margin-left: 160px;
}

.ml122 {
  margin-left: 115px;
}

div/deep/.lh30 {
  line-height: 30px;
}

div/deep/.lh39 {
  line-height: 39px;
}

div/deep/.des_my span {
  font-size: 16px !important;
}

div/deep/.btn_i {
  font-size: 20px;
  -webkit-transform: translateY(2px);
  transform: translateY(2px);
}

.el-row {
  margin-bottom: 20px;
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

.mb15 {
  margin-bottom: 15px;
}

div/deep/.my_btn.el-button--text {
  color: rgba(195, 123, 33, 1);
}

.note-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

ul {
  padding-left: 0;
}

ol,
ul {
  margin-top: 0;
  margin-bottom: 10px;
}

.note-list li.have-img {
  min-height: 140px;
}

.note-list li {
  position: relative;
  width: 100%;
  border: 1px solid #f0f0f0;
  word-wrap: break-word;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  transition: all 0.3s ease 0s;
}

li {
  line-height: 20px;
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

.note-list .have-img .wrap-btn {
  position: absolute;
  top: 46%;
  margin-top: -60px;
  left: 498px;
  height: 135px;
}

a {
  cursor: pointer;
}

a,
body {
  color: #333;
}

.note-list .have-img .wrap-img img {
  width: 85%;
  height: 82%;
  margin-top: 12px;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
}

img {
  vertical-align: middle;
}

.index .main .note-list .have-img .content {
  padding-right: 165px;
}

.note-list .have-img > div {
  padding-left: 180px;
  cursor: pointer;
  padding-right: 73px;
}

body.reader-black-font .container .article .title,
body.reader-black-font .main .title,
body.reader-black-font .preview .title {
  font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
}

.note-list .title {
  margin: -7px 0 4px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 超出部分省略号 */
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  max-height: 80rpx;
}

.note-list .abstract {
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.note-list .meta {
  padding-right: 0 !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 18px;
}

.note-list .meta span {
  margin-right: 5px;
  color: #b4b4b4;
}

.jsd-meta {
  /* color: #ea6f5a !important; */
}

.iconfont {
  font-family: iconfont !important;
  font-size: inherit;
  font-style: normal;
  font-weight: 400 !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.note-list .meta a,
.note-list .meta a:hover {
  transition: 0.1s ease-in;
  -webkit-transition: 0.1s ease-in;
  -moz-transition: 0.1s ease-in;
  -o-transition: 0.1s ease-in;
  -ms-transition: 0.1s ease-in;
}

.note-list .meta a {
  margin-right: 10px;
  color: #b4b4b4;
}

.ic-list-comments:before {
  content: "\E660";
}

.ic-list-like:before {
  content: "\E661";
}

.m50 {
  margin: 50px 0;
  text-align: center;
}

.have-img:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0);
}

.wa_btn {
  margin-top: 12px;
}
.mt0 {
  margin-top: 0 !important;
}
</style>
