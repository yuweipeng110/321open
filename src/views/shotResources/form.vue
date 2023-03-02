<template>
  <div v-if="objDetail" class="form_content" :class="{ seenCls: !seen }">
    <div class="top_wz">{{ objDetail.title }}</div>
    <el-steps :active="active" finish-status="success" class="w50p">
      <el-step title="第一步" description="填写信息" />
      <el-step title="第二步" description="确认信息" />
      <el-step title="第三步" description="下单完成" />
    </el-steps>

    <div>
      <el-form
        v-if="active === 0"
        ref="form"
        :model="form"
        label-width="80px"
        class="mt50 w50p"
      >
        <el-form-item label="预定人">
          <el-input v-model="form.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="form.num" placeholder="请输入您的手机号" />
        </el-form-item>

        <el-form-item label="索要发票">
          <el-radio-group v-model="form.fp" class="ya">
            <el-radio label="是" border />
            <el-radio label="否" border />
          </el-radio-group>
        </el-form-item>
        <el-form-item label=" ">
          <el-input
            v-model="form.desc"
            type="textarea"
            :rows="6"
            placeholder="请留下场的公司!单位拍头信息及掉害地址，我们会在5个工作日内处理"
          />
        </el-form-item>
        <el-form-item label="选择时长">
          <el-date-picker
            v-model="form.time"
            :append-to-body="false"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </el-form-item>
      </el-form>
      <div v-else-if="active === 1" class="des_content">
        <el-descriptions title="" :column="1" class="w50p" :colon="false">
          <el-descriptions-item label="订 单 号   :" label-class-name="ty2"
            >KPWEWE2626256151648494</el-descriptions-item
          >
          <el-descriptions-item label="预 定 人   :" label-class-name="ty2"
            >{{ form.name ? form.name : "张三" }}
          </el-descriptions-item>
          <el-descriptions-item label="联系方式:">{{
            form.num ? form.num : "1388888888888"
          }}</el-descriptions-item>
          <el-descriptions-item label="索要发票:">{{ form.desc }}
            <!-- <el-row>
              <el-col :span="24">郑州某某科技有限公司</el-col>
              <el-col :span="24">916511561564564564564</el-col>
              <el-col :span="24">河南省郑州市地址地址地址地址地址地址地</el-col>
            </el-row> -->
          </el-descriptions-item>
          <el-descriptions-item label="选择时长:"
            >{{ form.time ? form.time : "2023-01-11 至 2023-02-15" }}
          </el-descriptions-item>
          <el-descriptions-item label="共计时长:">
            <el-tag type="danger">3天</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="产地费用:">10000元/天</el-descriptions-item>
          <el-descriptions-item label="押金费用:">5000元</el-descriptions-item>
          <el-descriptions-item label="超时费用:">100元/天</el-descriptions-item>
          <el-descriptions-item label="支付方式:" class="">
            <el-radio v-model="radio1" label="1" class="ra">
              <svg
                t="1673428204662"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2741"
                width="16"
                height="16"
              >
                <path
                  d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z"
                  fill="#28C445"
                  p-id="2742"
                />
                <path
                  d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z"
                  fill="#28C445"
                  p-id="2743"
                />
              </svg>
              <span class="wx">微信</span>
            </el-radio>
            <el-radio v-model="radio1" label="2" class="ra">
              <svg
                t="1673428444535"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3988"
                width="16"
                height="16"
              >
                <path
                  d="M230.771014 576.556522c-12.614493 9.646377-25.228986 23.744928-28.93913 42.295652-5.194203 24.486957-0.742029 55.652174 22.26087 80.13913 28.93913 28.93913 72.718841 37.101449 92.011594 38.585508 51.2 3.710145 106.110145-22.26087 147.663768-50.457971 16.324638-11.130435 43.77971-34.133333 70.492754-69.750725-59.362319-30.423188-133.565217-64.556522-212.22029-61.588406-41.553623 1.484058-70.492754 9.646377-91.269566 20.776812zM983.188406 712.347826c25.971014-61.588406 40.811594-129.113043 40.811594-200.347826 0-281.971014-230.028986-512-512-512S0 230.028986 0 512s230.028986 512 512 512c170.666667 0 321.298551-83.849275 414.794203-212.22029C838.492754 768.742029 693.797101 696.023188 604.011594 652.985507c-42.295652 48.973913-105.368116 97.205797-176.602898 117.982609-44.521739 13.356522-85.333333 18.550725-126.886957 9.646377-42.295652-8.904348-72.718841-28.197101-90.527536-47.489855-8.904348-10.388406-19.292754-22.26087-27.455073-37.843479 0.742029 0.742029 0.742029 2.226087 0.742029 2.968116 0 0-4.452174-7.42029-7.420289-19.292753-1.484058-5.936232-2.968116-11.872464-3.710145-17.808696-0.742029-4.452174-0.742029-8.904348 0-12.614493-0.742029-7.42029 0-15.582609 1.484058-23.744927 4.452174-20.776812 12.614493-43.77971 35.617391-65.298551 48.973913-48.231884 115.014493-50.457971 149.147826-50.457971 50.457971 0.742029 138.017391 22.26087 212.22029 48.973913 20.776812-43.77971 34.133333-89.785507 42.295652-121.692754H304.973913v-33.391304h158.052174v-66.782609H272.324638v-34.133333h190.701449v-66.782609c0-8.904348 2.226087-16.324638 16.324638-16.324637h74.944927v83.107246h207.026087v33.391304H554.295652v66.782609H719.768116S702.701449 494.933333 651.501449 586.202899c115.014493 40.811594 277.518841 104.626087 331.686957 126.144927z m0 0"
                  fill="#06B4FD"
                  p-id="3989"
                />
              </svg>
              <span class="wx">支付宝</span>
            </el-radio>
          </el-descriptions-item>
        </el-descriptions>
        <div class="zjfy">总计费用：5500</div>
      </div>
      <div v-else-if="active === 3" class="des_content tc">
        <div>
          <!-- <el-image
            class="a3img "
            src="https://img2.baidu.com/it/u=3840063115,3619456710&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500"
          /> -->
          <i class="el-icon-circle-check zfcg" />
        </div>
        <div class="zf2">支付成功</div>
        <!-- <div class="zf3">5500.00</div> -->
      </div>
      <div class="tc">
        <el-button
          v-if="active === 1"
          type="info"
          class="btn"
          style="margin-top: 12px; margin-bottom: 252px"
          @click="next(0)"
          >上一步
        </el-button>
        <el-button
          v-if="active < 2"
          type="primary"
          class="btn"
          style="margin-top: 12px; margin-bottom: 252px"
          @click="next(1)"
          >下一步
        </el-button>
        <el-button
          v-if="active === 3"
          type="primary"
          class="btn"
          style="margin-top: 12px; margin-bottom: 252px"
          @click="go"
          >完成
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import step from "./step.vue";
import moment from "moment";
import { homezydetail } from "@/api/home";

export default {
  components: {
    step,
  },
  data() {
    return {
      id: this.$route.query.id,
      radio1: "1",
      active: 0,
      seen: true,
      form: {
        name: "",
        num: "",
        fp: "",
        desc: "",
        time: "",
      },

      objDetail: null
    };
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        if (document.body.clientWidth > 700) {
          this.seen = true;
        } else {
          this.seen = false;
        }
      },
      // 深度观察监听
      deep: true,
    },
  },
  mounted() {
    if (document.body.clientWidth > 700) {
      this.seen = true;
    } else {
      this.seen = false;
    }
    window.addEventListener("setItem", () => {
      const clientWidth = sessionStorage.getItem("seen");
      // console.log(clientWidth, "this.seen");
      if (clientWidth > 700) {
        this.seen = true;
      } else {
        this.seen = false;
      }
    });

    this.zyDetail();
  },
  methods: {
    async zyDetail() {
      let res = await homezydetail({ id: this.id });
      this.objDetail = res.data.data;
      console.log('this.objDetail', this.objDetail);
    },
    next(i) {
      if (this.active == 0) {
        let statetime = moment(this.form.use_end).format("YYYY-MM-DD HH:mm:ss");
        // console.log(this.form.time);
      }
      // 上一步
      if (i === 0) {
        if (this.active > 0) {
          // console.log(this.active);
          this.active--;
          // console.log(this.active);
        }
      } else {
        if (this.active++ > 2) this.active = 0;
        if (this.active === 2) {
          this.active = 3;
        }
      }
    },
    go() {
      this.$router.push({
        path: "/shotResources/shot",
        query: { imgObj: "" },
      });
    },
  },
};
</script>

<style scoped>
.form_content {
  max-width: 1400px;
  margin: 0 auto;
}

.top_wz {
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 28px;
  text-align: center;
}

.form_content div/deep/.el-picker-panel {
  top: 15px !important;
  width: fit-content;
  text-align: center;
  left: 44px !important;
  border-radius: 0 !important;
  opacity: 1;
}

.mt50 {
  margin-top: 50px;
}

.des_content {
  width: auto;
  margin-top: 50px;
}

.tc {
  text-align: center;
}

.zjfy {
  font-size: 30px;
  color: #f56c6c;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.a3img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.zf2 {
  font-size: 30px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #3a3a3a;
  line-height: 42px;
}

.zf3 {
  font-size: 48px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #f56c6c;
  line-height: 67px;
}

.zfcg {
  color: #67c23a;
  font-size: 180px;
}

div/deep/ .el-descriptions-item__label,
div/deep/.el-descriptions-item__content {
  font-size: 18px;
  margin-right: 15px;
}

div/deep/ .el-form-item__label {
  font-size: 16px;
}

div/deep/.el-step__main {
  margin-left: 6px;
}

div/deep/.el-step__icon {
  width: 60px;
  height: 60px;
  font-size: 30px;
}

div/deep/.el-step.is-horizontal .el-step__line {
  top: 30px;
}

.w50p {
  max-width: 61%;
  margin: auto;
}

div/deep/.w50p .el-radio__input {
  display: none !important;
}

.wx {
  margin-left: 5px;
  display: inline-block;
  height: 52px;
  line-height: 52px;
  flex-shrink: 0;
}

div/deep/ .ra .el-radio__label {
  width: 32px;
  height: 26px;

  align-items: center;
  display: flex;
}

div/deep/.ya .el-radio.is-bordered {
  padding: 12px 25px;
  padding-right: 37px;
}

div/deep/.el-step__description {
  padding-right: 10%;
  margin-top: -5px;
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  transform: translateX(-9px);
}

div/deep/ .el-input__inner::placeholder {
  font-size: 18px;
}

div/deep/ .el-textarea__inner::placeholder {
  font-size: 18px;
}

div/deep/ .el-range-input::placeholder {
  font-size: 18px;
}

div/deep/.el-tag {
  font-size: 16px;
}

.wx,
.zfb {
  font-size: 16px;
}

div/deep/.ty2 {
  transform: translateX(2px);
}

.seenCls .w50p {
  max-width: 93%;
}

.seenCls .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}

.seenCls .top_wz {
  font-size: 20px;
  margin-bottom: 13px;
}

.seenCls div/deep/.el-step__icon {
  font-size: 20px !important;
  width: 39px;
  height: 39px;
  transform: translateX(-24px);
}

.btn {
  width: 160px;
  font-size: 16px;
}
/* .seenCls div/deep/ .el-step__description{
  font-size: 12px;
} */
.seenCls div/deep/ .el-form-item__label {
  font-size: 12px;
}
.seenCls div/deep/ .el-input__inner::placeholder {
  font-size: 12px;
}

.seenCls div/deep/ .el-textarea__inner::placeholder {
  font-size: 12px;
}

.seenCls div/deep/ .el-range-input::placeholder {
  font-size: 12px;
}
.seenCls .el-steps {
  transform: translateX(35px) !important;
}
.seenCls .el-step__main {
  transform: translateX(-9px) !important;
}
.seenCls div/deep/.el-step__main div {
  font-size: 14px !important;
}
.seenCls div/deep/ .el-descriptions-item__label,
div/deep/.el-descriptions-item__content {
  font-size: 14px;
}
.seenCls div/deep/.el-tag {
  font-size: 14px;
}
/* .seenCls div/deep/.el-steps--horizontal{
  transform: translateX(35px);
} */
/* .seenCls div/deep/.el-step__main {
    margin-left: -20px;
} */
.seenCls div/deep/.el-step__main {
  margin-left: 6px;
  transform: translateX(-31px);
}
.seenCls div/deep/.el-step.is-horizontal .el-step__line {
  top: 19px;
}
</style>
