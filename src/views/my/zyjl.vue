<template>
  <div class="tab_content">
    <div class="list-container">
      <!-- 文章列表模块 -->
      <ul class="note-list" infinite-scroll-url="/">
        <li v-for="(item, index) in imgsArr" :key="index" class="have-img">
          <a class="wrap-img" href="#" target="_blank">
            <img class="img-blur-done" :src="item.img || defaultImage" :alt="item.info" />
          </a>
          <div class="content">
            <a href="#" class="title" target="_blank">{{ item.title }}</a>

            <div class="title2">{{ item.description }}</div>
            <div class="meta">
              <span class="jsd-meta"> <i class="el-icon-time" /> 发布时间 </span>
              <a class="nickname" target="_blank" href="#">{{ item.zhao_start }}</a>
              <a target="_blank" href="#">
                浏览量
                <i class="el-icon-view" /> {{ item.view }}
              </a>
              <a target="_blank" href="#">
                投标量
                <i class="el-icon-s-check" /> {{ item.t_num }} 人
              </a>
            </div>
          </div>
          <div class="wrap-btn">
            <el-row>
              <el-col :span="24">
                <el-button type="warning" class="wa_btn" size="mini" @click="update(item.id)">修 改</el-button>
              </el-col>
              <el-col :span="24">
                <el-button type="danger" class="wa_btn" size="mini" @click="det(item.id)">删 除</el-button>
              </el-col>
              <!-- <el-col :span="24" class="tc">
                <el-tag v-if="item.statuss" class="wa_btn" type="danger" size="mini">审核中</el-tag>
                <el-tag v-else class="wa_btn" type="success" size="mini">审核通过</el-tag>
              </el-col> -->
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
      <el-dialog title="" :visible.sync="dialogVisible" width="800px">

        <el-row :gutter="20" class="mb50 mt20">
          <el-col :span="24" class="pl0">
            <el-form ref="form" :model="form" label-width="80px" class="wf80">
              <el-form-item label="标题名称">
                <el-input v-model="form.title" placeholder="请输入标题" />
              </el-form-item>
              <el-form-item label="招标时间">
                <el-col :span="11">
                  <el-date-picker v-model="form.zhao_start" type="date" placeholder="选择日期" class="aaa" />
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-date-picker v-model="form.zhao_end" placeholder="选择时间" style="width: 100%" class="t9" />
                </el-col>
              </el-form-item>
              <el-form-item label="使用时间">
                <el-col :span="11">
                  <el-date-picker v-model="form.use_start" type="date" placeholder="选择日期" style="width: 100%"
                    class="aaa" />
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-date-picker v-model="form.use_end" placeholder="选择时间" style="width: 100%" class="t9" />
                </el-col>
              </el-form-item>
              <el-form-item label="预计价格">
                <el-input v-model="form.money" placeholder="请输入预计价格" />
              </el-form-item>

              <el-form-item label="简介内容">
                <el-input v-model="form.description" type="textarea" :rows="3" placeholder="请输入你的简介内容" maxlength="200"
                  show-word-limit />
              </el-form-item>

              <el-form-item label="资源图片">
                <el-upload class="avatar-uploader" action="" :on-change="handleelchange" :auto-upload="false"
                  list-type="picture" :show-file-list="false">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <!-- <quill-editor ref="mwQuillEditor" v-model="html" class="ml10" :options="editorOption" /> -->
              <el-upload style="display:none;" class="avatar-uploader2" action="" :on-change="handleelchange2"
                :auto-upload="false" list-type="picture" :show-file-list="false"></el-upload>
              <div class="tc mt20">
                <el-button type="warning" @click="onSubmitFun(form.id)">提交</el-button>
              </div>
            </el-form>
          </el-col>
        </el-row>
      </el-dialog>


      <el-dialog title="需求删除" :visible.sync="dialogVisible1" width="30%">
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="det('')">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
// import { enndRecord } from "@/api/user";
// 设置字体大小
const fontSizeStyle = Quill.import("attributors/style/size"); // 引入这个后会把样式写在style上
fontSizeStyle.whitelist = [
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "24px",
  "28px",
  "32px",
  "36px",
];
Quill.register(fontSizeStyle, true);
// 设置字体样式
const Font = Quill.import("attributors/style/font"); // 引入这个后会把样式写在style上
const fonts = ["SimSun", "SimHei", "Microsoft-YaHei", "KaiTi", "FangSong"];
Font.whitelist = fonts; // 将字体加入到白名单
Quill.register(Font, true);
// 工具栏
const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
  [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
  [{ align: [] }], // 对齐方式-----[{ align: [] }]
  [{ size: fontSizeStyle.whitelist }], // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
  [{ font: fonts }], // 字体种类-----[{ font: [] }]
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
  ['image', 'video']
];
import { enndPull, imageUpload } from "@/api/user";
import { updateDitial, deleteDitial, demandDitial } from "@/api/home";
import moment from "moment";
import axios from "axios";
export default {
  data() {
    return {
      // 需求默认图片
      defaultImage: require("@/assets/img/spzy/defaultImg.png"),
      dialogVisible: false,
      dialogVisible1: false,
      imageUrl: "",
      area_id: "",
      xuqiu_id: '',



      objHeader: {
        "Content-Type": "multipart/form-data",
      },
      form: {
        title: "",
        imglist: "",
        zhao_start: "",
        zhao_end: "",
        use_start: "",
        use_end: "",
        money: "",
        img: "",
        id: '',
        description: "",
      },
    };
  },
  computed: {
    id: function () {
      return this.$store.state.user.id;
    },
    imgsArr: function () {
      return this.$store.state.user.needList;
    },
  },
  methods: {
    onSubmit() {
      // console.log("submit!");
    },
    getList() {
      this.$store.dispatch("user/getEnndAct", { uid: String(this.id) });
    },
    update(id) {
      this.dialogVisible = true

      this.xuqiu_id = id
      demandDitial({ id: id }).then((res) => {
        if (res.status == 200) {
          this.form = res.data.data
        }
      })

    },
    det(v) {
      if (!v) {
        deleteDitial({ id: this.xuqiu_id, uid: this.$store.state.user.id }).then((res) => {
          // console.log(res);
          if (res.status == 200) {
            this.$message({
              type: "success",
              message: "删除成功",
            });
            this.imageUrl = "";
            this.html = "";
            this.getList()
          } else {
            this.$message.error("删除失败，请刷新重试");
          }
          this.dialogVisible1 = false
        }
        )
      } else {
        this.xuqiu_id = v
        this.dialogVisible1 = true
      }
    },
    onSubmitFun() {
      this.form = {
        title: this.form.title,
        zhao_start: moment(this.form.zhao_start).format("YYYY-MM-DD HH:mm:ss"),
        zhao_end: moment(this.form.zhao_end).format("YYYY-MM-DD HH:mm:ss"),
        use_start: moment(this.form.use_start).format("YYYY-MM-DD HH:mm:ss"),
        use_end: moment(this.form.use_end).format("YYYY-MM-DD HH:mm:ss"),
        money: this.form.money,
        uid: this.$store.state.user.id,
        content: this.html,
        area_id: String(this.area_id),
        img: this.imageUrl,
        description: this.form.description,
        id: this.xuqiu_id
      };

      // console.log("格式化时间之后的请求参数", this.form);
      // console.log(this.form);
      updateDitial(this.form).then((res) => {
        // console.log(res);
        if (res.status == 200) {
          this.$message({
            type: "success",
            message: "需求修改成功",
          });
          this.imageUrl = "";
          this.html = "";
          this.getList()
        } else {
          this.$message.error("需求修改失败，请刷新重试");
        }
        this.dialogVisible = false

        // 格式化表单内容

        this.form = {
          title: "",
          zhao_start: "",
          zhao_end: "",
          use_start: "",
          use_end: "",
          money: "",
          uid: "",
          content: "",
          area_id: "",
          img: "",
          description: "",
          id: ''
        };
      });
      //  console.log(resault);
    },
    handleelchange2(file, fileList) {
      let formdata = new FormData();
      fileList.map((item) => {
        formdata.append("file", item.raw); //将每一个文件图片都加进formdata
      });

      return axios.post("http://kelerk.178tqw.com/api/index/upload", formdata).then((res) => {
        this.onUploadHandler(res.data.url);
      });
    },
    async onUploadHandler(imageUrl) {
      // 获取光标所在位置
      let quill = this.$refs.mwQuillEditor.quill
      let length = quill.getSelection().index

      // 插入图片
      quill.insertEmbed(length, 'image', imageUrl)
      // 调整光标到最后
      quill.setSelection(length + 1)
    },
    handleelchange(file, fileList) {
      // console.log("file", file);
      // console.log("fililist", fileList);

      let formdata = new FormData();
      // console.log("formdata", formdata);
      fileList.map((item) => {
        //fileList本来就是数组，就不用转为真数组了
        formdata.append("file", item.raw); //将每一个文件图片都加进formdata
      });

      formdata.forEach((item) => {
        // console.log(item);
      });

      // console.log(e);
      //   let {file}=e
      return axios.post("http://kelerk.178tqw.com/api/index/upload", formdata).then((res) => {
        // console.log(res);
        this.imageUrl = res.data.url;
      });
      // imageUpload(formdata).then(res=>{
      //   console.log(res);
      // })
    },
  },
  mounted() {
    this.getList();
    console.log('imgsArr', this.imgsArr)
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

.note-list .have-img>div {
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
  -webkit-line-clamp: 1;
  max-height: 80rpx;
}

.title2 {
  margin: -7px 0 4px;
  font-size: 16px;
  /* font-weight: 700; */
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
</style>
