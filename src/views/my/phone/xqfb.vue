<template>
  <div class="tab_content vue-quill-editor">
    <el-row :gutter="20" class="mb50 mt20">
      <el-col :span="24">
        <el-form ref="form" :model="form" label-width="5rem" class="wf80">
          <el-form-item label="标题名称">
            <el-input v-model="form.name" placeholder="请输入标题" size="mini" />
          </el-form-item>
          <el-form-item label="招标时间">
            <el-col :span="11" class="p0 asff">
              <el-date-picker v-model="form.date1" type="date" placeholder="开始日期" style="width: 100%;" size="mini" />
            </el-col>
            <el-col class="line " :span="2" />
            <el-col :span="11" class="p0">
              <el-date-picker v-model="form.date2" type="date" placeholder="结束日期" style="width: 100%;" size="mini" />
            </el-col>
          </el-form-item>
          <el-form-item label="预计价格">
            <el-input v-model="form.jg" placeholder="请输入预计价格" size="mini" />
          </el-form-item>
          <!--
          <el-form-item label="" class="nowZ">
            <el-input v-model="form.desc" type="textarea" :rows="8" placeholder="请输入你的需求描述" />

          </el-form-item> -->
          <!-- <el-form-item class="tc">

          </el-form-item> -->
        </el-form>
        <quill-editor
          ref="mwQuillEditor"
          v-model="html"
          :options="editorOption"
        />
        <div class="tc mt20">
          <el-button type="warning" @click="onSubmit">提交</el-button>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { quillEditor, Quill } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 设置字体大小
const fontSizeStyle = Quill.import('attributors/style/size') // 引入这个后会把样式写在style上
fontSizeStyle.whitelist = ['12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px']
Quill.register(fontSizeStyle, true)
// 设置字体样式
const Font = Quill.import('attributors/style/font') // 引入这个后会把样式写在style上
const fonts = [
  'SimSun',
  'SimHei',
  'Microsoft-YaHei',
  'KaiTi',
  'FangSong'
]
Font.whitelist = fonts // 将字体加入到白名单
Quill.register(Font, true)
// 工具栏
const toolbarOptions = [
  ['link', 'image', 'video'] // 链接、图片、视频-----['link', 'image', 'video']
]
export default {
  name: 'VueQuillEditor',
  components: {
    quillEditor
  },
  props: {
    value: {
      type: [Number, Object, Array, String],
      default: ''
    }
  },
  data() {
    return {
      html: this.value,
      editorOption: {
        placeholder: '',
        modules: {
          toolbar: {
            container: toolbarOptions
          }
        }
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        date3: '',
        date4: '',
        jg: '',
        desc: ''
      }
    }
  },
  watch: {
    html: {
      handler(newValue) {
        this.$emit('input', newValue)
      },
      deep: true
    },
    value: {
      handler(newValue, oldValue) {
        if (newValue !== oldValue) this.html = newValue
      },
      deep: true
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>
div/deep/.ql-editor{
  /* height: 500px; */
}
.tab_content {
  padding: 20px;
}
.wf80{
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
div/deep/.el-button{
  width: 160px;
}
.nowZ div/deep/.el-form-item__content{
  margin-left: 0;
}
.p0{
  padding: 0 !important;
}
div/deep/ .el-input__inner{
  border: 1px solid #cccccc;
}
.asff{
  margin-right: 8%;
}
</style>
