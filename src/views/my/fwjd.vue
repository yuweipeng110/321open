<template>
  <div class="tab_content">
    <template v-for="item in progressServe">
      <el-row :gutter="20">
        <el-col :span="24" class="tc mt20 mb20">
          <el-steps :active="1" align-center>
            <el-step :title="item.tname" :description="item.time" />
            <el-step title="审核中" description="2023-2-14 15:15提交" />
            <el-step title="处理中" description="2023-2-14 15:15提交" />
            <el-step title="已完成" description="2023-2-14 15:15提交" />
          </el-steps>
        </el-col>
      </el-row>
      <div class="xx" />
    </template>
  </div>
</template>

<script>
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
    };
  },
  computed: {
    progressServe: function () {
      return this.$store.state.user.progressServe;
    },
  },
  methods: {
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
.tc {
  text-align: center;
  /* border-bottom: 1px dashed #ccc;
    padding-bottom: 25px; */
}
.xx {
  height: 6px;
  width: 90%;
  border-bottom: 1px dashed #ccc;
  display: block;
  margin: auto;
  margin-bottom: 10px;
}
</style>
