<template>
  <div v-loading="load" class="tab_content">
    <div class="list-container foraa">
      <el-form :model="formData" class="my_form">
        <el-form-item label="修改头像" :label-width="formLabelWidth">
          <el-upload
            :limit="1"
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus" />
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>
        <el-form-item label="修改昵称" :label-width="formLabelWidth">
          <el-input v-model="formData.xm" autocomplete="off" placeholder="" />
        </el-form-item>
        <el-form-item label="修改手机" :label-width="formLabelWidth">
          <el-input v-model="formData.zh" autocomplete="off" />
        </el-form-item>
        <el-form-item label="验证码" :label-width="formLabelWidth">
          <el-input v-model="formData.zh" placeholder="" class="input-with-select">
            <el-button slot="append" class="w100" @click="sendCode">{{
              btnText
            }}</el-button>
          </el-input>
        </el-form-item>
      </el-form>
      <div class="tc mb20 mt20">
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
      dialogVisible: false,
      formLabelWidth: "80px",
      dialogImageUrl: "",
      formData: {
        je: "",
        xm: "",
        zh: "",
        zh1: "",
      },
      btnText: "发送验证码",
      canClick: false,
      totalTime: 60,
    };
  },
  methods: {
    handle() {
      this.load = true;
      setInterval(() => {
        this.load = false;
      }, 1000);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    /** 获取验证码 */
    sendCode() {
      if (this.canClick) return;
      this.canClick = true;
      this.btnText = this.totalTime + "s后重发";
      const clock = window.setInterval(() => {
        this.totalTime--;
        this.btnText = this.totalTime + "s后重发";
        if (this.totalTime < 0) {
          window.clearInterval(clock);
          this.btnText = "重新发送";
          this.totalTime = 10;
          this.canClick = false;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.tab_content {
  padding: 20px;
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
div/deep/.w100 {
  width: 100px !important;
}
</style>
