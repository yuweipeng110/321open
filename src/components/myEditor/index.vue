<template>
  <div>
    <quill-editor
      ref="mwQuillEditorZyfb"
      v-model="content"
      class="ml10"
      :options="editorOption"
    />
    <el-upload
      style="display: none"
      class="avatar-uploader2"
      action=""
      :on-change="handleelchange2zyfb"
      :auto-upload="false"
      list-type="picture"
      :show-file-list="false"
    ></el-upload>
  </div>
</template>
  
  <script>
import { imageUpload } from "@/api/user";
import { quillEditor, Quill } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
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
  // [{ font: fonts }], // 字体种类-----[{ font: [] }]
  // [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
  ["image", "video"],
];
export default {
  name: "VueQuillEditor",
  components: {
    quillEditor,
    // elinput,
  },
  props: {
    content: ""
  },
  data() {
    return {
      editorOption: {
        placeholder: "",
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              image: function (value) {
                if (value) {
                  // value === true
                  document.querySelector(".avatar-uploader2 input").click();
                } else {
                  this.quill.format("image", false);
                }
              },
            },
          },
        },
      },
    };
  },
  methods: {
    async handleelchange2zyfb(file, fileList) {
      let formdata = new FormData();
      fileList.map((item) => {
        formdata.append("file", item.raw); //将每一个文件图片都加进formdata
      });

      const res = await imageUpload(formdata);
      if (res && res.status === 200) {
        this.onUploadHandlerzyfb(res.data.url);
      }
    },
    async onUploadHandlerzyfb(imageUrl) {
      // 获取光标所在位置
      let quill = this.$refs.mwQuillEditorZyfb.quill;
      console.log("zyfb quill.getSelection()", quill.getSelection());
      let length = quill.getSelection().index;

      // 插入图片
      quill.insertEmbed(length, "image", imageUrl);
      // 调整光标到最后
      quill.setSelection(length + 1);
    },
  },
};
</script>