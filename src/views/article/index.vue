<template>
  <div class="article_content" :class="{ seenCls: !seen }">
    <div v-if="seen">
      <span class="text_11"
        >首页 &gt;
        <template v-if="id == '1'">政策资讯</template>
        <template v-else-if="id == '2'">行业新闻</template>
        <template v-else-if="id == '3'">服务项目</template>
        <template v-else-if="id == '4'">服务案例</template>
      </span>
    </div>
    <div class="list-container">
      <!-- 文章列表模块 -->
      <ul class="note-list" infinite-scroll-url="/">
        <li
          v-for="(item, index) in imgsArr"
          :key="index"
          class="have-img"
          @click.prevent="handleGo(item.id)"
        >
          <a class="wrap-img" href="#" target="_blank">
            <img class="img-blur-done" :src="item.img" :alt="item.info" />
          </a>
          <div class="content">
            <a href="#" class="title" target="_blank">{{ item.title }}</a>
            <p class="abstract">
              {{ item.description }}
            </p>
            <div class="meta">
              <span class="jsd-meta">
                <i class="el-icon-time" />
              </span>
              <a class="nickname" target="_blank" href="#">{{ item.addtime }}</a>
              <a target="_blank" href="#">
                <i class="el-icon-view" /> {{ item.reader }}
              </a>
            </div>
          </div>
        </li>
      </ul>
      <!-- 文章列表模块 -->
    </div>
    <el-row class="m50">
      <el-col :span="24">
        <el-pagination background layout="prev, pager, next" :total="100" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { wenList } from "@/api/home";
export default {
  data() {
    return {
      id: "1",
      seen: true,
      imgsArr: [],
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
    // tant = this;
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
    // console.log(this.$route.params.id)
    this.id = this.$route.params.id;
    if (this.id === "2") {
      // console.log("9999999999999999999");
      this.zhengc("2");
    } else if (this.id === "3") {
      this.zhengc("3");
    } else if (this.id === "4") {
      this.zhengc("4");
    } else {
      this.zhengc("1");
    }

    console.log(this.imgsArr);
  },
  methods: {
    async zhengc(id) {
      let res = await wenList({ cate_id: id });
      this.imgsArr = res.data.data;
    },
    handleGo(id) {
      console.log(id);
      this.$router.push({
        path: "/article/details",
        query: { id: id },
      });
    },
  },
};
</script>

<style scoped>
.article_content {
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

a {
  cursor: pointer;
}

a,
body {
  color: #333;
}

.note-list .have-img .wrap-img img {
  width: 100%;
  height: 100%;
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
  padding-left: 220px;
  cursor: pointer;
}

body.reader-black-font .container .article .title,
body.reader-black-font .main .title,
body.reader-black-font .preview .title {
  font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
}

.note-list .title {
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

/* .have-img:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0);
} */
.seenCls .note-list .have-img .wrap-img {
  display: none;
}
.seenCls .note-list .have-img > div {
  padding-left: 10px;
}
.seenCls .note-list li {
  width: 95%;
  margin: 20px auto;
}
@media (max-width: 1400px) {
  .note-list li {
    width: 98%;
    margin: 20px auto;
  }
  .text_11 {
    margin-left: 10px;
  }
}
</style>
