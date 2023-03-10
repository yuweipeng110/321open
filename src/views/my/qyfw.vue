<template>
  <div class="tab_content">
    <el-row :gutter="20">
      <el-col :span="24" class="tc">
        <div class="tc">
          <h2>企业服务</h2>
        </div>
        <div class="box">
          <div>工商注册</div>
        </div>
        <div class="boxCheck">
          <el-checkbox-group v-model="form.checkList">
            <el-checkbox label="1">小规模</el-checkbox>
            <el-checkbox label="2">一般纳税人</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="box">
          <div>场地租凭</div>
        </div>
        <div class="boxCheck">
          <el-checkbox-group v-model="form.checkList1">
            <el-checkbox label="1">仅注册申报</el-checkbox>
            <el-checkbox label="2">长租</el-checkbox>
            <el-checkbox label="3">短租</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="box">
          <div>财税代账</div>
        </div>
        <div class="boxCheck">
          <el-checkbox-group v-model="form.checkList2">
            <el-checkbox label="1">基础财税</el-checkbox>
            <el-checkbox label="2">财税筹划</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="box">
          <div>其他问题</div>
        </div>
        <div class="boxText">
          <el-input
            v-model="form.remark"
            type="textarea"
            :rows="6"
            placeholder="您可以填写更多的服务需求，我们收到反馈后根据您的需求及时与您联系。"
          />
        </div>
        <div class="tc mt20">
          <el-button class="mbtn" type="warning" @click="pullServe"
            >提交</el-button
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="js">
import { ServeRZApi } from "@/api/tenant";

const defaultForm = {
  checkList: [],
  checkList1: [],
  checkList2: [],
  remark: "",
};
export default {
  data() {
    return {
      form: defaultForm
    };
  },
  computed: {
    id: function () {
      return this.$store.state.user.id;
    },
  },
  methods: {
    async pullServe() {
      const paramsData = {
        uid: this.id,
        gong: this.form.checkList.join(','),
        chang: this.form.checkList1.join(','),
        cai: this.form.checkList2.join(','),
        remark: this.form.remark,
      }
      let res = await ServeRZApi(paramsData);

      if (res.status == 200) {
        // console.log("res", res);
        this.$message({
          message: "提交成功，请耐心等待审核",
          type: "success",
        });

        // console.log(res.data.time);
        let obj = {
          tname: "企业入驻",
          time: res.data.time,
        };
        this.$store.commit("user/SET_SERVEPRO", obj);
      } else {
        this.$message.error("提交失败，请联系后台人员");
      }
    },
    onSubmit() {
      // console.log("submit!");
    },
  },
};
</script>

<style scoped>
.tab_content {
  padding: 20px;
  border: 1px solid #e4e7ed;
}

.box {
  height: 40px;
  line-height: 40px;
  text-align: left;
  background: #d9d9d9;
}

.box div {
  padding-left: 20px;
}

.boxCheck div {
  padding-left: 20px;
}

.boxCheck {
  height: 50px;
  line-height: 50px;
  border: 1px solid #e7e7e7;
  text-align: left;
}

.boxText {
  height: 180px;
  line-height: 158px;
  text-align: center;
  border: 1px solid #e7e7e7;
}

.boxText div {
  padding: 20px;
}

.mbtn {
  width: 160px;
  margin-bottom: 30px;
}
</style>
