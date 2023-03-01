<template>
  <div class="tab_content">
    <el-row class="mb0">
      <el-col :span="6">
        <el-avatar
          :size="150"
          :src="require('@/assets/z2.png')"
          class="tx_cls"
          fit="fill "
        />
      </el-col>
      <el-col :span="18">
        <el-descriptions :column="1" class="mt72 des_my">
          <el-descriptions-item label="昵称 " label-class-name="lh39"
            >沃之涛科技有限公司
            <el-button
              type="text"
              class="ml122 my_btn ty20"
              icon="el-icon-postcard btn_i"
              size="mini"
              >实名认证</el-button
            >
          </el-descriptions-item>
          <el-descriptions-item label="手机 " label-class-name="lh30"
            >18100000000
            <el-button type="warning" class="ml160 ty29" size="mini">修改密码</el-button>
          </el-descriptions-item>
          <el-descriptions-item label="" label-class-name="lh30">
            <el-button
              type="warning"
              class="ml160 ty29ml291"
              size="mini"
              @click="handleClickTiXian"
              >申请提现</el-button
            >
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
          <div class="tc mb15 mt20">发布的场景</div>
          <div class="tc mb20">2</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" @click.native="handleGo('xqjl')">
          <div class="tc mb15 mt20">发布的需求</div>
          <div class="tc mb20">2</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" @click.native="handleGo('ddgl')">
          <div class="tc mb15 mt20">订单的数量</div>
          <div class="tc mb20">2</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="mb50">
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" @click.native="handleGo('wdsc')">
          <div class="tc mb15 mt20">我的收藏</div>
          <div class="tc mb20">2</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" @click.native="handleGo('wdgz')">
          <div class="tc mb15 mt20">我的关注</div>
          <div class="tc mb20">2</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" shadow="hover" @click.native="handleGo('ddgl')">
          <div class="tc mb15 mt20">共计收入</div>
          <div class="tc mb20">2</div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="申请提现" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="form" class="my_form">
        <el-form-item label="金额" :label-width="formLabelWidth">
          <el-input
            v-model="form.je"
            autocomplete="off"
            placeholder="请输入您要提现的金额"
          />
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input
            v-model="form.xm"
            autocomplete="off"
            placeholder="请输入跟您卡号一致的姓名"
          />
        </el-form-item>
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input
            v-model="form.zh"
            autocomplete="off"
            placeholder="微信/支付宝/银行卡号"
          />
        </el-form-item>
        <el-form-item label="支行" :label-width="formLabelWidth">
          <el-input
            v-model="form.zh1"
            autocomplete="off"
            placeholder="微信/支付宝/银行卡号"
          />
        </el-form-item>
      </el-form>
      <div class="mlf20">
        <el-descriptions title="">
          <el-descriptions-item label="平台手续费">3%</el-descriptions-item>
          <el-descriptions-item label="实际到账">50223</el-descriptions-item>
        </el-descriptions>
      </div>
      <div slot="footer" class="dialog-footer tc">
        <el-button type="warning" @click="dialogFormVisible = false">确定申请</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        je: "",
        xm: "",
        zh: "",
        zh1: "",
      },
      formLabelWidth: "50px",
    };
  },
  methods: {
    handleClickTiXian() {
      this.dialogFormVisible = true;
    },
  },
};
</script>

<style scoped>
.tab_content {
  padding: 10px;
  border: 1px solid #e4e7ed;
}

.mt72 {
  margin-top: 50px;
}

.tx_cls {
  margin: 20px;
  transform: translateY(-5px);
}

.ml160 {
  margin-left: 160px;
}

.ml122 {
  margin-left: 115px;
}

.box-card {
  cursor: pointer;
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
</style>
