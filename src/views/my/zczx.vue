<template>
  <div class="tab_content">
    <el-row :gutter="20">
      <el-col :span="24" class="tc">
        <div class="tc">
          <h2>政策咨询</h2>
        </div>
        <div class="box">
          <div>咨询内容</div>
        </div>
        <div class="boxCheck">
          <el-checkbox-group v-model="checkList8">
            <el-checkbox label="影视行业政策解读" />
            <el-checkbox label="影视专项资金申报方案" />
            <el-checkbox label="法务咨询" />
          </el-checkbox-group>
        </div>

        <div class="box">
          <div>其他问题</div>
        </div>
        <div class="boxText">
          <el-input
            v-model="textarea3"
            type="textarea"
            :rows="6"
            placeholder="您可以填写更多的服务需求，我们收到反馈后根据您的需求及时与您联系。"
          />
        </div>
        <div class="tc mt20">
          <el-button class="mbtn" type="warning" @click="pullServe">提交</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ServeZXApi } from "@/api/tenant";
export default {
  data() {
    return {
      checkList: ["小规模"],
      checkList1: ["仅注册申报"],
      checkList2: ["基础财税"],
      textarea: "",
      checkList3: ["《广播电视节目制作经营许可证》"],
      checkList4: ["院线电影"],
      checkList5: ["协助拍摄函"],
      textarea1: "",
      checkList6: ["首映礼/见面会/发布会"],
      checkList7: ["院线电影"],
      checkList8: ["影视行业政策解读"],
      textarea3: "",
      textarea2: "",
    };
  },
  computed: {
    id: function () {
      return this.$store.state.user.id;
    },
  },
  methods: {
    async pullServe() {
      let res = await ServeZXApi({
        uid: this.id,
        zi: this.checkList8,
        remark: this.textarea2,
      });
      if (res.status == 200) {
        // console.log("res", res);
        this.$message({
          message: "提交成功，请耐心等待审核",
          type: "success",
        });

        // console.log(res.data.time);
        let obj = {
          tname: "政策咨询",
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
