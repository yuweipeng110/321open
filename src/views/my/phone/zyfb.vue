<template>
  <div v-loading="load" class="tab_content  vue-quill-editor">
    <div class="list-container foraa">
      <el-form ref="form" :model="form" label-width="4rem" size="mini">
        <el-form-item label="标 题">
          <el-input v-model="form.name" placeholder="请输入标题" />
        </el-form-item>
        <el-form-item label="资源类型">
          <el-radio-group v-model="form.resource">
            <el-radio label="场景" />
            <el-radio label="演员" />
            <el-radio label="住宿" />
            <el-radio label="车辆" />
            <el-radio label="道具" />
            <el-radio label="服装" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="二级分类">
          <el-radio-group v-model="form.resource">
            <el-radio label="不限" />
            <el-radio label="现代" />
            <el-radio label="仙侠" />
            <el-radio label="二战" />
            <el-radio label="古装" />
            <el-radio label="岛屿" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="配套设施">
          <el-checkbox-group v-model="form.ptss" class="ptss">
            <el-checkbox label="供水" name="1" />
            <el-checkbox label="供电" name="2" />
            <el-checkbox label="供热" name="3" />
            <el-checkbox dio label="电视" name="4" />
            <el-checkbox dio label="停车" name="5" />
            <el-checkbox label="道路" name="6" />
            <el-checkbox label="燃气" name="7" />
            <el-checkbox label="通讯" name="8" />
            <el-checkbox label="绿化" name="9" />
            <el-checkbox label="教育" name="11" />
            <el-checkbox label="娱乐" name="12" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="资源图片">
          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload" />
            <div class="el-upload__text">上传照片</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="每日租金">
          <el-input v-model="form.name" placeholder="请输入租金" />
        </el-form-item>
        <el-form-item label="押  金">
          <el-input v-model="form.name" placeholder="请输入押金" />
        </el-form-item>
        <el-form-item label="超 时">
          <el-input v-model="form.name" placeholder="请输入超时罚款金额" />
        </el-form-item>

      </el-form>
      <quill-editor
        ref="mwQuillEditor"
        v-model="html"
        :options="editorOption"
      />
      <div class="tc mb20 mt20">
        <el-button type="warning" @click="handle">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { quillEditor, Quill } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 设置字体大小
const fontSizeStyle = Quill.import('attributors/style/size') // 引入这个后会把样式写在style上
fontSizeStyle.whitelist = ['12px', '14px', '0.8rem', '18px', '20px', '24px', '28px', '32px', '36px']
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
      load: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        ptss: []
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
    handle() {
      this.load = true
      setInterval(() => {
        this.load = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
.tab_content {
  padding: 20px;
  border: 1px solid #E4E7ED
}

.foraa .el-upload-dragger {
  width: 200px;
}

.foraa div/deep/.el-form-item__label {
  font-size: 0.8rem;
}

div/deep/ .el-input__inner::placeholder {
  font-size: 0.8rem;
}

div/deep/ .el-textarea__inner::placeholder {
  font-size: 0.8rem;
}

div/deep/ .el-range-input::placeholder {
  font-size: 0.8rem;
}

.ptss .el-radio {
  margin-bottom: 0;
  margin-top: 6px;
}
.foraa div/deep/.el-radio__label{
  font-size: 0.8rem;
}
.ptss .el-checkbox  {
  margin-bottom: 0;
  margin-top: 0px;
}
.foraa div/deep/.el-checkbox__label{
  font-size: 0.8rem;
}
div/deep/.el-button{
  width: 160px;
}
div/deep/.el-radio-group{
  margin-top: 5px;
}
div/deep/.el-radio{
  margin-bottom: 10px;
}
div/deep/.el-upload-dragger{
  width: 8rem;
  height: 8rem;
}
div/deep/.el-upload-dragger .el-icon-upload{
 margin: 20px 0 16px;
}
</style>
