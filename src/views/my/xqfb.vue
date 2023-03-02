<template>
  <div class="tab_content vue-quill-editor">
    <el-row :gutter="20" class="mb50 mt20">
      <el-col :span="24" class="pl0">
        <el-form ref="form" :model="form" label-width="80px" class="wf80">
          <el-form-item label="标题名称">
            <el-input v-model="form.title" placeholder="请输入标题" />
          </el-form-item>
          <el-form-item label="招标时间">
            <el-col :span="11">
              <el-date-picker
                v-model="form.zhao_start"
                type="date"
                placeholder="选择日期"
                class="aaa"
              />
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-date-picker
                v-model="form.zhao_end"
                placeholder="选择时间"
                style="width: 100%"
                class="t9"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="使用时间">
            <el-col :span="11">
              <el-date-picker
                v-model="form.use_start"
                type="date"
                placeholder="选择日期"
                style="width: 100%"
                class="aaa"
              />
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-date-picker
                v-model="form.use_end"
                placeholder="选择时间"
                style="width: 100%"
                class="t9"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="预计价格">
            <el-input v-model="form.money" placeholder="请输入预计价格" />
          </el-form-item>

          <el-form-item label="简介内容">
            <el-input
              v-model="form.description"
              type="textarea"
              :rows="3"
              placeholder="请输入你的简介内容"
              maxlength="200"
              show-word-limit
            />
          </el-form-item>

          <el-form-item label="资源图片">
            <el-upload
              class="avatar-uploader"
              action=""
              :on-change="handleelchange"
              :auto-upload="false"
              list-type="picture"
              :show-file-list="false"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <quill-editor
            ref="mwQuillEditor"
            v-model="html"
            class="ml10"
            :options="editorOption"
          />
          <div class="tc mt20">
            <el-button type="warning" @click="onSubmitFun">提交</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { quillEditor, Quill } from "vue-quill-editor";
import { enndPull, imageUpload } from "@/api/user";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import moment from "moment";
import axios from "axios";
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
];
export default {
  name: "VueQuillEditor",
  components: {
    quillEditor,
  },
  props: {
    value: {
      type: [Number, Object, Array, String],
      default: "",
    },
  },
  data() {
    return {
      html: this.value,
      imageUrl: "",
      area_id: "",
      editorOption: {
        placeholder: "",
        modules: {
          toolbar: {
            container: toolbarOptions,
          },
        },
      },

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

        description: "",
      },
    };
  },
  watch: {
    html: {
      handler(newValue) {
        this.$emit("input", newValue);
      },
      deep: true,
    },
    value: {
      handler(newValue, oldValue) {
        if (newValue !== oldValue) this.html = newValue;
      },
      deep: true,
    },
  },
  methods: {
    // t
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
      axios.post("http://kelerk.178tqw.com/api/index/upload", formdata).then((res) => {
        // console.log(res);
        this.imageUrl = res.data.url;
      });
      // imageUpload(formdata).then(res=>{
      //   console.log(res);
      // })
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
      };

      // console.log("格式化时间之后的请求参数", this.form);
      // console.log(this.form);
      enndPull(this.form).then((res) => {
        // console.log(res);
        if (res.status == 200) {
          this.$message({
            type: "success",
            message: "需求发布成功",
          });
          this.imageUrl = "";
          this.html = "";
        } else {
          this.$message.error("需求发布失败，请刷新重试");
        }

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
        };
      });
      //  console.log(resault);
    },
    handleAvatarSuccess(res, file) {
      // console.log("file", file);

      this.imageUrl = URL.createObjectURL(file.raw);
      // console.log("上传成功的路径", this.imageUrl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
  mounted() {
    if (localStorage.getItem("address")) {
      this.area_id = JSON.parse(localStorage.getItem("address"))[0].id;
    } else {
      this.area_id = "1";
    }
    //
  },
};
</script>

<style scoped>
div/deep/.ql-editor {
  /* height: 500px; */
}
.tab_content {
  padding: 20px;
  border: 1px solid #e4e7ed;
}
.wf80 {
  width: 100%;
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
div/deep/.el-button {
  width: 160px;
  font-size: 16px;
}
.aaa {
  width: 102%;
  transform: translateX(-8px);
}
.t9 {
  transform: translateX(9px);
}
.pl0 {
  padding-left: 0 !important;
}
.ml10 {
  margin-left: 10px;
}
</style>
