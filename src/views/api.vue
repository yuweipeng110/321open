<template>
  <div style="display:flex;">
    <ul style="width:300px;">
      <li v-for="({ name }, i) in list">
        <div @click="api(name, i)">{{ name }}</div>
      </li>
    </ul>
    <div style="flex:1">

      <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)" @change="onEditorChange($event)" @ready="onEditorReady($event)">
      </quill-editor>

      <el-upload style="display:none;" class="avatar-uploader" action="" :on-change="handleelchange" :auto-upload="false" list-type="picture"
        :show-file-list="false">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon" />
      </el-upload>

      imageUrl: {{ imageUrl }}
      <hr>
      content: {{ content }}


      <div>name: {{ name }}</div>
      <hr>
      <div style="color:blue">param: {{ param }}</div>
      <hr>
      <div style="color:green;">res: {{ res }}</div>
      <hr>
      <div style="color:red;">err: {{ err }}</div>
    </div>
  </div>
</template>

<script>
import * as home from "@/api/home";
import * as table from "@/api/table";
import * as tenant from "@/api/tenant";
import * as user from "@/api/user";
import axios from 'axios'

import { quillEditor, Quill } from "vue-quill-editor";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  components: {
    quillEditor
  },

  data() {
    let self = this;
    return {
      imageUrl: "",
      content: '',
      list: [],
      params: {
        // home
        homeQuantity: { page: "1", limit: "10", status: "0", area_id: "1", addtime: "1", t_num: "1" },

        demandDitial: { id: '23' },

        wenList: { cate_id: '1' },

        art_detail: { id: '6' },

        updateDitial:  { id	: 29, area_id: 1, title: '22222222222', zhao_start: '2023-03-07 00:00:00', zhao_end: '2023-04-07 00:00:00', use_start: '2023-03-07 00:00:00', use_end: '2023-04-07 00:00:00',money: 233, uid: 18, content: 'cccccccc', img: '', description: ''} ,

        // tenant
        // catePull: { cate: '', content: '123', title: '', area_id: '', img: '', yajin: '', zujin: '', chao: '', uid: 1 }

        catePull: {
          cate: [],
          title: "",
          area_id: "1",
          img: "",
          yajin: "",
          zujin: "",
          chao: "",
          content: "",
        },

        cateLog: { uid: '1', page: '1', limit: 10 },

        toubiaoApi: { r_id: 23, uid: 18, pic: '', video: '', mobile: '', money: '', message: '' },

        ServeRZApi: { uid: '1', gong: '', chang: '', cai: '', remark: '' },

        ServeZZApi: { uid: '1', xu: '', ying: '', xie: '', remark: '' },

        ServeCHApi: { uid: '1', type: '', ying: '', remark: '' },

        ServeZXApi: { uid: '1', remark: '123', zi: ['法务咨询'] },

        ServerListLog: { uid: '1' },

        shangjiaruzhuLog: { uid: '5' },



        // user
        getLogin: {
          id: '17'
        },

        withdrawDeposit: {
          uid: '17',
          card: '1',
          name: 'x',
          money: '0.01',
          bank: 's'
        },

        enndPull: {
          title: '正正正正',
          zhao_start: '2023-03-01 22:29:20',
          zhao_end: '2023-03-01 22:29:20',
          use_start: '2023-03-01 22:29:20',
          use_end: '2023-03-01 22:29:20',
          money: '1.23',
          uid: 18,
          content: '正正正正正',
          area_id: 1,
          img: 'http://kelerk.178tqw.com/static/uploads/20230301/9d63ef9df84e59651962a6e2303b4d18.png',
          description: '正正',
        },

        enndRecord: {
          uid: 18,
        },

        updataUser: {
          id: '17',
          avatar: 'http://kelerk.178tqw.com/static/uploads/20230301/9d63ef9df84e59651962a6e2303b4d18.png',
          nick: '梦里随枫',
          mobile: '15901356473'
        },

        withdrawDepositList: {
          uid: 18,
        },

        YieldLog: {
          uid: 18,
        },

        consumeLog: {
          uid: 18,
        },

        attention: {
          uid: "1"
        },

        collect: {
          uid: "1"
        },

        tenderList: {
          uid: "1"
        },

        xiadan: {
          uid: '1',
          name: 'ss',
          mobile: '13000000000',
          is_fapiao: '0',
          taitou: '发票抬头',
          start: '2023-03-01 22:29:20',
          end: '2023-03-01 22:29:20',
          zid: '',
          money: '1.11'
        },


        // table
        classifyEssay: { cate_id: 2, page: '1', limit: '10' },
        ruzhu: { uid: '1', name: '', phone: '', address: '', card_z: '', card_f: '', yingye: '', company: '' },
      },
      name: '',
      param: null,
      res: null,
      err: null,

      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],


      // 富文本编辑器配置
      editorOption: {
        modules: {
          toolbar: {
            container: [
              // ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
              // ['blockquote', 'code-block'], // 引用  代码块
              // [{ header: 1 }, { header: 2 }], // 1、2 级标题
              // [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
              // [{ script: 'sub' }, { script: 'super' }], // 上标/下标
              // [{ indent: '-1' }, { indent: '+1' }], // 缩进
              // [{ direction: 'rtl' }], // 文本方向
              // [{ size: ['12', '14', '16', '18', '20', '22', '24', '28', '32', '36'] }], // 字体大小
              // [{ header: [1, 2, 3, 4, 5, 6] }], // 标题
              // [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
              // // [{ font: ['songti'] }], // 字体种类
              // [{ align: [] }], // 对齐方式
              // ['clean'], // 清除文本格式
              ['image', 'video'] // 链接、图片、视频
            ],

            handlers: {
              'image': function (value) {
                if (value) { // value === true
                  document.querySelector('.avatar-uploader input').click()
                } else {
                  this.quill.format('image', false)
                }
              },
            },
          },

        },

        placeholder: '请输入正文'
      },
    };
  },
  created() {
    this.list = [].concat(
      this.getModule(home),
      // this.getModule(table),
      // this.getModule(tenant),
      // this.getModule(user),
    );
  },
  methods: {
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

        let imageUrl = res.data.url;
        this.imageUrl = imageUrl;

        this.onUploadHandler(imageUrl);
      });
      // imageUpload(formdata).then(res=>{
      //   console.log(res);
      // })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    async onUploadHandler(imageUrl) {
      // 获取光标所在位置
      let quill = this.$refs.myQuillEditor.quill

      console.log('onUploadHandler', imageUrl, quill);

      let length = quill.getSelection().index



      // 插入图片
      quill.insertEmbed(length, 'image', imageUrl)
      // 调整光标到最后
      quill.setSelection(length + 1)
      // this.content += url
    },

    // 失去焦点事件
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    // 获得焦点事件
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    // 准备富文本编辑器
    onEditorReady(quill) {
      // console.log('editor ready!', quill)
    },
    // 内容改变事件
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    },


    getModule(module) {
      let list = [];
      for (let name in module) {
        let value = module[name];
        list.push({
          name,
          value
        })
      }
      return list;
    },
    async api(name, i) {
      let value = this.list[i].value;
      let param = this.params[name] || null;
      this.name = name;
      this.param = param;
      this.res = null;
      this.err = null;
      try {
        let res = await value(param);
        this.res = res.data.data;
      } catch (err) {
        this.err = err;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  line-height: 1.8em;
}
</style>
