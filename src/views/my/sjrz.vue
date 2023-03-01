<template>
  <div>
    <div v-loading="load" class="tab_content" v-if="isSuccess">
      <div class="list-container foraa">
        <el-form ref="form" :model="form" label-width="120px" size="mini">
          <el-form-item label="姓 名">
            <el-input v-model="name" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="商家名称">
            <el-input v-model="comapny" placeholder="请输入资质上的公司名称" />
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="phome" placeholder="请输入联系电话" />
          </el-form-item>
          <el-form-item label="通讯地址">
            <el-input v-model="address" placeholder="请输入通讯地址" />
          </el-form-item>
          <el-form-item label="身份证(正)">
            <el-upload
              class="avatar-uploader"
              action=""
              :on-change="handleelchange"
              :auto-upload="false"
              list-type="picture"
              :show-file-list="false"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="身份证(反)">
            <el-upload
              class="avatar-uploader"
              action=""
              :on-change="handleelchange2"
              :auto-upload="false"
              list-type="picture"
              :show-file-list="false"
            >
              <img v-if="imageUrl2" :src="imageUrl2" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="营业执照">
            <el-upload
              class="avatar-uploader"
              action=""
              :on-change="handleelchange3"
              :auto-upload="false"
              list-type="picture"
              :show-file-list="false"
            >
              <img v-if="imageUrl3" :src="imageUrl3" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-form>
        <div class="tc mb20">
          <el-button type="warning" @click="handle">提交</el-button>
        </div>
      </div>
    </div>
    <div v-else>
      <el-result
        icon="success"
        title="申请通过"
        v-if="msgsuccess == 1"
        subTitle="恭喜你审核通过"
      >
      </el-result>

      <el-result icon="info" title="审核中" v-else subTitle="后台人员审核中，请稍后">
      </el-result>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ruzhu } from "@/api/table";
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
      imageUrl: "",
      imageUrl2: "",
      imageUrl3: "",
      name: "",
      phome: "",
      address: "",
      comapny: "",
    };
  },
  computed: {
    id: function () {
      return this.$store.state.user.id;
    },
    isSuccess: function () {
      return this.$store.state.user.ruzhujindu;
    },

    msgsuccess: function () {
      return this.$store.state.user.ruzhuxiangqing;
    },
  },
  mounted() {},
  methods: {
    handleelchange(file, fileList) {
      console.log("file", file);
      console.log("fililist", fileList);

      let formdata = new FormData();
      console.log("formdata", formdata);
      fileList.map((item) => {
        //fileList本来就是数组，就不用转为真数组了
        formdata.append("file", item.raw); //将每一个文件图片都加进formdata
      });

      formdata.forEach((item) => {
        console.log(item);
      });

      // console.log(e);
      //   let {file}=e
      axios.post("http://kelerk.178tqw.com/api/index/upload", formdata).then((res) => {
        console.log(res);
        this.imageUrl = res.data.url;
      });
      // imageUpload(formdata).then(res=>{
      //   console.log(res);
      // })
    },
    handleelchange2(file, fileList) {
      console.log("file", file);
      console.log("fililist", fileList);

      let formdata = new FormData();
      console.log("formdata", formdata);
      fileList.map((item) => {
        //fileList本来就是数组，就不用转为真数组了
        formdata.append("file", item.raw); //将每一个文件图片都加进formdata
      });

      formdata.forEach((item) => {
        console.log(item);
      });

      // console.log(e);
      //   let {file}=e
      axios.post("http://kelerk.178tqw.com/api/index/upload", formdata).then((res) => {
        console.log(res);
        this.imageUrl2 = res.data.url;
      });
      // imageUpload(formdata).then(res=>{
      //   console.log(res);
      // })
    },
    handleelchange3(file, fileList) {
      console.log("file", file);
      console.log("fililist", fileList);

      let formdata = new FormData();
      console.log("formdata", formdata);
      fileList.map((item) => {
        //fileList本来就是数组，就不用转为真数组了
        formdata.append("file", item.raw); //将每一个文件图片都加进formdata
      });

      formdata.forEach((item) => {
        console.log(item);
      });

      // console.log(e);
      //   let {file}=e
      axios.post("http://kelerk.178tqw.com/api/index/upload", formdata).then((res) => {
        console.log(res);
        this.imageUrl3 = res.data.url;
      });
      // imageUpload(formdata).then(res=>{
      //   console.log(res);
      // })
    },
    async handle() {
      this.load = true;
      let res = await ruzhu({
        uid: String(this.id),
        name: this.name,
        phone: this.phome,
        address: this.address,
        card_z: this.imageUrl,
        card_f: this.imageUrl2,
        yingye: this.imageUrl3,
        company: this.comapny,
      });
      console.log(res);
      if (res.data.code == 1) {
        this.$message({
          message: "入驻申请提交成功",
          type: "success",
        });
        this.load = false;

        this.name = "";

        this.phome = "";
        this.address = "";
        this.imageUrl = "";
        this.imageUrl2 = "";
        this.imageUrl3 = "";
        this.comapny = "";
        this.$store.commit("user/SET_JINDU", false);
      }
    },
  },
};
</script>

<style scoped>
.tab_content {
  padding: 20px 20px 20px 0;
  border: 1px solid #e4e7ed;
}
.foraa .el-upload-dragger {
  width: 200px;
}
.foraa div/deep/.el-form-item__label {
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
div/deep/.el-button {
  width: 160px;
  font-size: 16px;
}
</style>
