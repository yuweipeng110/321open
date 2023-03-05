<template>
  <div v-loading="load" class="tab_content">
    <div class="list-container foraa">
      <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="80px" class="demo-ruleForm">
        <el-form-item label="密码" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
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
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      load: false,
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
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
}
/* .foraa .el-upload-dragger{
  width: 200px;
} */
.foraa div/deep/.el-form-item__label{
  font-size: 0.8rem;
}
.foraa div/deep/.el-upload-dragger{
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
div/deep/.el-button{
  width: 160px;
}
div/deep/.el-upload-dragger .el-icon-upload{
 margin: 20px 0 16px;
}
</style>
