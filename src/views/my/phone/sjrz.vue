<template>
  <div v-loading="load" class="tab_content">
    <div class="list-container foraa">
      <el-form ref="form" :model="form" label-width="4rem" size="mini">
        <el-form-item label="姓 名">
          <el-input v-model="form.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.name" placeholder="请输入联系电话" />
        </el-form-item>
        <el-form-item label="通讯地址">
          <el-input v-model="form.name" placeholder="请输入通讯地址" />
        </el-form-item>
        <el-form-item label="身份证（正）">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload" />
            <div class="el-upload__text">上传照片</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="身份证（反）">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload" />
            <div class="el-upload__text">上传照片</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="营业执照">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload" />
            <div class="el-upload__text">上传照片</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div class="tc mb20">
        <el-button type="warning" @click="handle">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      load: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    handle() {
      this.load = true;
      setInterval(() => {
        this.load = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.tab_content {
  padding: 20px;
  border: 1px solid #e4e7ed;
}
/* .foraa .el-upload-dragger{
  width: 200px;
} */
.foraa div/deep/.el-form-item__label {
  font-size: 0.8rem;
}
.foraa div/deep/.el-upload-dragger {
  width: 8rem;
  height: 8rem;
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
div/deep/.el-button {
  width: 160px;
}
div/deep/.el-upload-dragger .el-icon-upload {
  margin: 20px 0 16px;
}
</style>
