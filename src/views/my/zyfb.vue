<template>
  <div v-loading="load" class="tab_content vue-quill-editor">
    <div class="list-container foraa" v-if="ruzhu">
      <el-form ref="form" :model="form" label-width="95px" size="mini">
        <el-form-item label="标 题">
          <el-input v-model="form.title" placeholder="请输入标题" />
        </el-form-item>

        <el-form-item label="资源类型">
          <el-radio-group v-model="form.cate">
            <el-radio :label="item.name" :value="item.name" v-for="(item, index) in ziyuanfenleiList"
              @change="changeFun(index)" />
          </el-radio-group>
        </el-form-item>
        <template v-if="defaultData">
          <el-form-item :label="item.name" v-for="item in defaultData.child" :key="item.id">
            <el-checkbox :label="item2.name" v-for="item2 in item.child" :key="item2.id"></el-checkbox>
          </el-form-item>
        </template>
        <!-- <el-form-item label="二级分类">
          <el-radio-group v-model="form.resource">
            <el-radio label="不限" />
            <el-radio label="现代" />
            <el-radio label="仙侠" />
            <el-radio label="二战" />
            <el-radio label="古装" />
            <el-radio label="岛屿" />
          </el-radio-group>
        </el-form-item> -->
        <!-- <el-form-item label="资源图片"> -->
        <!-- <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload" />
            <div class="el-upload__text">上传照片</div>
          </el-upload> -->
        <!-- <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :limit="7"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item> -->
        <el-form-item label="资源图片">
          <el-upload class="avatar-uploader" action="" :on-change="handleelchange" :auto-upload="false"
            list-type="picture" :show-file-list="false">
            <img v-if="form.img" :src="form.img" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>



        <el-form-item label="每日租金">
          <el-input v-model="form.zujin" placeholder="请输入租金" />
        </el-form-item>
        <el-form-item label="押  金">
          <el-input v-model="form.yajin" placeholder="请输入押金" />
        </el-form-item>
        <el-form-item label="超 时">
          <el-input v-model="form.chao" placeholder="请输入超时费用" />
        </el-form-item>
      </el-form>
      <quill-editor ref="mwQuillEditor" v-model="form.content" class="ml10" :options="editorOption" />
      <div class="tc mb20" style="margin-left: 80px">
        <el-button type="warning" @click="handle">提交</el-button>
      </div>
    </div>
    <el-result icon="info" title="请先完成商家入驻" v-else >
    </el-result>
  </div>
</template>

<script>
import { quillEditor, Quill } from "vue-quill-editor";
import { cateClassify, catePull, shangjiaruzhuLog } from "@/api/tenant";
// import elinput from "./el_input";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import axios from "axios"
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
    // elinput,
  },
  props: {
    value: {
      type: [Number, Object, Array, String],
      default: "",
    },
  },
  data() {
    return {
      defaultData: null,
      isCheck: false,
      html: this.value,
      imageUrl: "",
      dialogImageUrl: "",
      dialogVisible: false,
      ziyuanfenleiList: [],
      editorOption: {
        placeholder: "",
        modules: {
          toolbar: {
            container: toolbarOptions,
          },
        },
      },
      checkArr: [
        {
          value: "",
          status: false,
          isCheck: false,
        },
      ],
      load: false,
      inputVal: "",
      form: {
        cate: [],
        title: "",
        area_id: "1",
        img: "",
        yajin: "",
        zujin: "",
        chao: "",
        content: "",

      },
      ruzhu:false
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
  computed: {
    id: function () {
      return this.$store.state.user.id
    }
  },
  methods: {
    async getShangjiaruzhuLog() {
      let res = await shangjiaruzhuLog({ uid: this.$store.state.user.id })
      let {status} = res.data.data[0]
      if (res.status == 200) {
        if (status ==1) {
          this.ruzhu = true;
        }

      }
    },
    // 图片上传

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
        this.form.img = res.data.url;
      });
      // imageUpload(formdata).then(res=>{
      //   console.log(res);
      // })
    },






    //
    // 切换分类

    changeFun(e) {
      this.defaultData = this.ziyuanfenleiList[e];
      // console.log("当前切换lable参数", e);
      // console.log("当前参数值", this.defaultData);
    },

    handleClickcheck(item, index) {
      this.checkArr.map((ytem, yndex) => {
        if (index === yndex) {
          ytem.isCheck = !ytem.isCheck;
          ytem.status = !ytem.status;
        }
      });
      // console.log(item, index);
    },
    addInput(item, index) {
      // console.log(item, index);
      if (!item.value) {
        this.$message({
          message: "请输入配套设施",
          type: "warning",
        });
        return false;
      }
      this.checkArr.map((ytem, yndex) => {
        if (index === yndex) {
          ytem.value = item.value;
          ytem.status = true;
        }
      });
      const obj = {
        value: "",
        key: Date.now(),
        isCheck: false,
        status: false,
      };
      this.checkArr.push(obj);
    },
    async handle() {
      this.load = true;

      // console.log(this.form);
      // setInterval(() => {
      //   this.load = false;
      // }, 1000);
      this.form = { ...this.form, uid: this.id }
      let res = await catePull(this.form)
      if (res) {
        this.load = false;
        // console.log("拍摄资源",res);
      }

      // console.log("拍摄资源详情",res);
    },

    // 上传图片函数
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 资源分类
    async cartFenlei() {
      let res = await cateClassify({ type: "0" });
      if (res.status == 200 && res.data.data.length) {
        this.ziyuanfenleiList = res.data.data;

        this.defaultData = res.data.data[0];
      }
      // console.log("res资源分类水水水水水水水水水水", res.data.data);
    },
  },
  mounted() {
    this.cartFenlei();
    this.getShangjiaruzhuLog()
    // console.log("资源发布啦啦啦啦啦啦啦啦");
  },
};
</script>

<style scoped>
.tab_content {
  padding: 20px 20px 20px 0;
  border: 1px solid #e4e7ed;
}

.foraa .el-upload-dragger {
  width: 200px;
}

.foraa div/deep/.el-form-item__label {
  font-size: 16px;
}

div/deep/ .el-input__inner::placeholder {
  font-size: 16px;
}

div/deep/ .el-textarea__inner::placeholder {
  font-size: 16px;
}

div/deep/ .el-range-input::placeholder {
  font-size: 16px;
}

.ptss .el-radio {
  margin-bottom: 6px;
  margin-top: 6px;
}

.foraa div/deep/.el-radio__label {
  font-size: 16px;
}

.ptss .el-checkbox {
  margin-bottom: 6px;
  margin-top: 0px;
}

.foraa div/deep/.el-checkbox__label {
  font-size: 16px;
}

div/deep/.el-button {
  width: 160px;
  font-size: 16px;
}

.sadf {
  /* margin-left: 4.5%;
  transform: translateY(7px); */
}

.sadf .el-input {
  /* margin-left: 22px; */
  /* transform: translateY(-6px); */
}

.sadf div/deep/.el-input__inner {
  height: 25px;
  line-height: 25px;
  width: 80px;
}

.ml10 {
  margin-left: 20px;
}

.ml31 {
  margin-left: 31px;
}

.pl0 {
  padding-left: 0;
}
</style>
