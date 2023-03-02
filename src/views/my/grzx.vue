<template>
  <div class="tab_content">
    <el-row class="mb0">
      <el-button type="text" class="ml122 my_btn ty2" icon="el-icon-postcard btn_i" size="mini">实名认证</el-button>
      <el-col :span="6">
        <el-avatar :size="150" :src="(userinfo && userinfo.avatar) || defaultNick" class="tx_cls" fit="fill " />
      </el-col>
      <el-col :span="18">
        <el-descriptions :column="1" class="mt72 des_my">
          <el-descriptions-item label="昵称 " label-class-name="lh39">{{ (userinfo && userinfo.nick) || defaultName + userinfo.id }}
            <el-button type="warning" class="ml160 ty2 ty4 priIn" size="mini" @click="handleEditPassWord">修改密码</el-button>
          </el-descriptions-item>
          <el-descriptions-item label="手机 " label-class-name="lh30">{{ (userinfo && userinfo.mobile) }}
            <el-button type="warning" class="ml204 ty2 priIn2" size="mini" @click="handleClickTiXian">申请提现</el-button>
          </el-descriptions-item>
          <el-descriptions-item label="余额" label-class-name="lh30">{{ (userinfo && userinfo.money) }}

            <el-button type="warning" class="ml2042 ty2 priIn" size="mini" @click="handleEditData">修改资料</el-button>
            <!-- <el-button type="warning" class="ml160 ty29ml291" size="mini" @click="handleClickTiXian">申请提现</el-button>
            <el-button type="warning" class="ml160 ty29ml291 ml10" size="mini" @click="handleEditData">修改资料</el-button> -->
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-divider class="mt0" />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" @click.native="handleGo('xqfb')">
          <div class="tc mb15 mt20">发布的资源</div>
          <div class="tc mb20">{{ userinfo.zy }}</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" @click.native="handleGo('xqjl')">
          <div class="tc mb15 mt20">发布的需求</div>
          <div class="tc mb20">{{ userinfo.request }}</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" @click.native="handleGo('ddgl')">
          <div class="tc mb15 mt20">订单的数量</div>
          <div class="tc mb20">{{ userinfo.order }}</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mb50">
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" @click.native="handleGo('wdsc')">
          <div class="tc mb15 mt20">我的收藏</div>
          <div class="tc mb20">{{ userinfo.collect }}</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" @click.native="handleGo('wdgz')">
          <div class="tc mb15 mt20">我的关注</div>
          <div class="tc mb20">{{ userinfo.like }}</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" @click.native="handleGo('ddgl')">
          <div class="tc mb15 mt20">共计收入</div>
          <div class="tc mb20">{{ userinfo.total }}</div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="申请提现" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="form" class="my_form">
        <el-form-item label="金额" :label-width="formLabelWidth">
          <el-input v-model="form.money" autocomplete="off" placeholder="请输入您要提现的金额888" />
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="请输入跟您卡号一致的姓名" />
        </el-form-item>
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.card" autocomplete="off" placeholder="微信/支付宝/银行卡号" />
        </el-form-item>
        <el-form-item label="支行" :label-width="formLabelWidth">
          <el-input v-model="form.bank" autocomplete="off" placeholder="微信/支付宝/银行卡号" />
        </el-form-item>
      </el-form>
      <div class="mlf20" />
      <div slot="footer" class="dialog-footer tc">
        <el-button type="warning" @click="withdrawDepositFun">提 交</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改资料" :visible.sync="dialogFormVisibleData" width="30%">
      <el-form :model="formData" class="my_form">
        <el-form-item label="修改图像" :label-width="formLabelWidtha">
          <el-upload class="avatar-uploader" action=""  :on-change="handleelchange" :auto-upload="false"
            list-type="picture" :show-file-list="false">
            <img v-if="formData.avatar" :src="formData.avatar" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>
        <el-form-item label="修改昵称" :label-width="formLabelWidtha">
          <el-input v-model="formData.nick" autocomplete="off" placeholder="" />
        </el-form-item>
        <el-form-item label="修改手机" :label-width="formLabelWidtha">
          <el-input v-model="formData.mobile" autocomplete="off" />
        </el-form-item>
        <el-form-item label="验证码" :label-width="formLabelWidtha">
          <el-input v-model="formData.Code" placeholder="" class="input-with-select">
            <el-button slot="append" @click="sendCode">{{ btnText }}</el-button>
          </el-input>
        </el-form-item>
      </el-form>
      <div class="mlf20" />
      <div slot="footer" class="dialog-footer tc">
        <el-button type="warning" @click="pullUpdate">提 交</el-button>
      </div>
    </el-dialog>
    <el-dialog title="修改密码" :visible.sync="dialogFormVisiblePassWord" width="30%" class="xgmm">
      <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="密码" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
        </el-form-item>
      </el-form>
      <div class="mlf20" />
      <div slot="footer" class="dialog-footer tc">
        <el-button type="warning" @click="dialogFormVisiblePassWord = false">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { withdrawDeposit, updataUser, UserEmail } from '@/api/user'
import axios from 'axios'
import Cookies from 'js-cookie'

// import {mapState} from "vuex"
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
      dialogFormVisible: false,
      dialogFormVisiblePassWord: false,
      dialogFormVisibleData: false,
      defaultNick: require('@/assets/img/spzy/defaultImg.png'),
      defaultName: '默认用户',
      CodeEd: null,
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }]
      },
      form: {
        card: '',
        name: '',
        money: '',
        bank: ''
      },
      formData: {
        avatar: '',
        nick: '',
        mobile: '',
        Code: ''
      },
      formLabelWidth: '80px',
      formLabelWidtha: '100px',
      dialogImageUrl: '',
      dialogVisible: false,
      btnText: '发送验证码',
      canClick: false,
      totalTime: 60,
      loading: false
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.userInfo
    },
    id: function () {
      return this.$store.state.user.id
    }
  },
  mounted() {
    // console.log('==================', this.$store.state.user.userInfo)
    // console.log('this.$store.state.user.id', this.userinfo)
  },
  methods: {
    //  修改资料图片上传
    handleelchange(file, fileList) {
      // console.log('file', file)
      // console.log('fililist', fileList)

      const formdata = new FormData()
      // console.log('formdata', formdata)
      fileList.map((item) => {
        // fileList本来就是数组，就不用转为真数组了
        formdata.append('file', item.raw) // 将每一个文件图片都加进formdata
      })

      formdata.forEach((item) => {
        // console.log(item)
      })

      // console.log(e);
      //   let {file}=e
      axios.post('http://kelerk.178tqw.com/api/index/upload', formdata).then((res) => {
        // console.log(res)
        this.formData.avatar = res.data.url
      })
      // imageUpload(formdata).then(res=>{
      //   console.log(res);
      // })
    },

    //  修改个人信息
    async pullUpdate() {
      if(this.formData.mobile.length){
        if (Cookies.get('codeEdit')) {
        if (this.formData.Code == Cookies.get('codeEdit')) {
          const res = await updataUser({
            id: String(this.id),
            avatar: this.formData.avatar,
            nick: this.formData.nick,
            mobile: this.formData.mobile
          })

          // console.log('用户信息修改i', res)

          if (res.status == 200 && res.data.msg == '修改成功') {
            this.$store.dispatch('user/getUserInfo', { id: String(this.id) })
            // this.ShowForma = false;
            this.dialogFormVisibleData = false

            this.formData.avatar = ''
            this.formData.nick = ''
            this.formData.mobile = ''
            this.formData.Code = ''
            // this.$emit("showFrom", this.ShowForma);
          } else {
            this.$message.error('登录失败，请稍后重试')
          }
          // console.log('验证码登录返回数据', res.data.data)

          this.$message({
            message: '用户手机号验证码匹配成功',
            type: 'success'
          })
        } else {
          // console.log('验证码错误')

          // console.log(this.formData.Code, Cookies.get('codeEdit'))

          this.$message.error('验证码错误')
        }
      } else {
        this.$message.error('请发送验证码')
        // console.log('请发送验证码')
      }
      }else{
          const res = await updataUser({
            id: String(this.id),
            avatar: this.formData.avatar,
            nick: this.formData.nick,
          })

            this.$store.dispatch('user/getUserInfo', { id: String(this.id) })
            this.dialogFormVisibleData = false
            this.formData.avatar = ''
            this.formData.nick =''
            this.formData.mobile =''
            this.formData.Code = ''
          // console.log('用户信息修改i', res)
      }
    },

    handleClickTiXian() {
      this.dialogFormVisible = true
    },
    handleEditPassWord() {
      this.dialogFormVisiblePassWord = true
    },
    handleEditData() {
      this.dialogFormVisibleData = true
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    /** 获取验证码 */
    async sendCode() {
      // console.log(this.formData.mobile.length)
      // console.log(this.formData)

      if (this.formData.mobile.length == 11) {
        if (this.canClick) return
        this.canClick = true
        this.btnText = this.totalTime + 's后重新发送'
        const clock = window.setInterval(() => {
          this.totalTime--
          this.btnText = this.totalTime + 's后重新发送'
          if (this.totalTime < 0) {
            window.clearInterval(clock)
            this.btnText = '重新发送验证码'
            this.totalTime = 10
            this.canClick = false
          }
        }, 1000)

        const seconds = 900
        const expires = new Date(new Date() * 1 + seconds * 1000)
        const res = await UserEmail({ mobile: this.formData.mobile })
        this.CodeEd = res.data.data
        Cookies.set('codeEdit', res.data.data, { expires: expires })
      } else {
        this.$message.error('请输入正确的手机号')
      }
      //  console.log(res);
    },
    // 申请提现提交
    async withdrawDepositFun() {
      this.dialogFormVisible = false
      // console.log(this.userinfo.money > this.form.money)
      if (Number(this.userinfo.money) < Number(this.form.money)) {
        // console.log('当前金额' + this.userinfo.money, '提现金额' + this.form.money)
        return this.$message.error('当前可用余额不足')
      } else {
        const msg = { ...this.form, uid: this.userinfo.id }
        // console.log(msg)
        const res = await withdrawDeposit(msg);
        (this.form = {
          card: '',
          name: '',
          money: '',
          bank: ''
        }),
          console.log(res)
      }
    }
  }
}
</script>

<style scoped>
.tab_content {
  padding: 10px;
  border: 1px solid #e4e7ed;
}

.mt72 {
  margin-top: 3px;
}

.tx_cls {
  margin: 20px;
  transform: translateY(-5px);
}

.ml160 {
  margin-left: 220px;
}

.ml122 {
  margin-left: 63%;
}

.box-card {
  cursor: pointer;
}

div/deep/.lh30 {
  line-height: 30px;
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
  font-size: 16px !important;
}

.mb0 {
  margin-bottom: 0;
}

.mt0 {
  margin-top: 0;
}

.ty29 {
  transform: translateY(-29px);
}

.ty29ml291 {
  margin-left: 291px;
  transform: translateY(-29px);
}

.ty20 {
  transform: translateY(-20px);
}

.my_form .el-input__inner {
  width: 98%;
}

.my_form div/deep/.el-form-item__label {
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

div/deep/.el-dialog__title {
  font-size: 20px;
  font-weight: 800;
}

.mlf20 {
  transform: translateX(21%);
}

div/deep/.el-descriptions-item__container {
  font-size: 18px;
}

div/deep/.el-dialog__body {
  overflow: hidden;
}

.ml10 {
  margin-left: 10px;
}

div/deep/.el-dialog__footer .el-button--warning {
  width: 160px;
}

.xgmm div/deep/.el-form-item__label {
  text-align: justify;
  text-align-last: justify;
  width: 80px !important;
}

.ty2 {
  transform: translateY(-2px);
}

.ml204 {
  margin-left: 204px;
}

.ml2042 {
  margin-left: 249px;
}

.ty4 {
  transform: translateY(4px);
}

.priIn {
  position: absolute;
  right: 23%;
  transform: translateY(-3px);
}

.priIn2 {
  position: absolute;
  right: 23%;
  transform: translateY(0px);
}

div/deep/.lh39 .el-descriptions-item__content {
  transform: translateY(7px);
}
</style>
