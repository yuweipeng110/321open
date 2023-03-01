<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div v-loading="load" class="tab_content">
    <div class="list-container">
      <!-- 文章列表模块 -->
      <div class="mb20">
        <el-button type="primary" size="mini" @click.native="handle(0)"
          >消费记录</el-button
        >
        <el-button type="primary" size="mini" @click.native="handle(1)"
          >收益记录</el-button
        >
        <el-button type="primary" size="mini" @click.native="handle(2)"
          >提现记录</el-button
        >
        <el-input v-model="search" class="w_sea" size="mini" placeholder="请输入订单号" />
      </div>

      <div v-show="tabb === 0" class="mb20 aaa">
        <div v-if="xiaofei.length">
          <el-descriptions
            v-for="(item, index) in xiaofei"
            :key="index"
            :title="item.title"
            :colon="false"
          >
            <el-descriptions-item label="下单时间">{{
              item.addtime
            }}</el-descriptions-item>
            <el-descriptions-item label="订单号" label-class-name="duiqil">{{
              22222
            }}</el-descriptions-item>
            <el-descriptions-item label="状态" label-class-name="duiqil">
              <el-tag v-if="item.status == 1" size="mini" type="success">已支付</el-tag>
              <el-tag v-else-if="item.status == 0" size="mini" type="danger"
                >支付中</el-tag
              >
              <el-tag v-else size="mini" type="success">已完成</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="使用时间">{{ item.start }}</el-descriptions-item>
            <el-descriptions-item label="结束时间">{{ item.end }}</el-descriptions-item>

            <el-descriptions-item label="押金" label-class-name="duiqil">{{
              item.yajin
            }}</el-descriptions-item>
            <el-descriptions-item label="超时天数">{{ item.day }}</el-descriptions-item>

            <el-descriptions-item :span="2" label="租用时长">{{
              item.uses
            }}</el-descriptions-item>
            <el-descriptions-item label="支付金额">{{ item.money }}</el-descriptions-item>
            <el-descriptions-item label="超时金额">{{ item.money }}</el-descriptions-item>
            <el-descriptions-item label="" content-class-name="desBtn">
              <el-button
                v-if="item.btn === 0"
                class="ddBtn"
                type="success"
                size="mini"
                @click="item.btn = 1"
                >完成交易</el-button
              >
              <el-button
                v-if="item.btn === 1"
                class="ddBtn"
                type="warning"
                size="mini"
                @click="dialog = true"
                >评 价</el-button
              >
            </el-descriptions-item>
          </el-descriptions>
        </div>
        <div v-else>
          <el-empty :image-size="200"></el-empty>
        </div>
      </div>

      <div v-show="tabb === 1" class="mb20">
        <!-- <el-table v-loading="load" :data="tableData1" stripe style="width: 100%">
          <el-table-column prop="date" align="center" label="日期" width="150" />
          <el-table-column prop="id" align="center" label="订单号" width="150" />
          <el-table-column prop="xdr" align="center" label="下单人" />
          <el-table-column prop="phone" align="center" label="手机" width="150" />
          <el-table-column prop="name" align="center" label="项目名称" width="150" />

          <el-table-column align="center" label="金额">
            <template slot-scope="scope">
              <el-tag size="medium" type="danger">{{ scope.row.money }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作" fixed="right">
            <template slot-scope="scope">
              <el-button type="danger" class="wa_btn" size="mini">删除</el-button>
            </template>
          </el-table-column>
        </el-table> -->
        <div v-if="shouyi.length">
          <el-descriptions
            v-for="(item, index) in shouyi"
            :key="index"
            :title="item.title"
            :colon="false"
            class="shouyi_jil"
          >
            <el-descriptions-item label="下单时间">{{
              item.addtime
            }}</el-descriptions-item>
            <el-descriptions-item label="订单号" label-class-name="duiqil">{{
              item.id
            }}</el-descriptions-item>
            <el-descriptions-item label="状态" label-class-name="duiqil">
              <el-tag v-if="item.status == 1" size="mini" type="success">已支付</el-tag>
              <el-tag v-else-if="item.status == 0" size="mini" type="danger"
                >支付中</el-tag
              >
              <el-tag v-else size="mini" type="success">已完成</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="使用时间">{{ item.start }}</el-descriptions-item>
            <el-descriptions-item label="结束时间">{{ item.end }}</el-descriptions-item>
            <!-- 缺少字段评价 -->
            <el-descriptions-item label="评价" label-class-name="duiqil">{{
              item.pj
            }}</el-descriptions-item>
            <el-descriptions-item label="押金" label-class-name="duiqil">{{
              item.yajin
            }}</el-descriptions-item>
            <el-descriptions-item label="超时天数">{{ item.day }}</el-descriptions-item>

            <el-descriptions-item label="租用时长">{{ item.uses }}</el-descriptions-item>

            <el-descriptions-item label="支付金额">{{ item.money }}</el-descriptions-item>
            <!-- 缺少 -->
            <el-descriptions-item label="超时金额">{{ item.money }}</el-descriptions-item>
            <el-descriptions-item label="实际收益"
              >{{ item.act }}
              <el-tooltip content="平台手续费: -500元" placement="bottom" effect="light">
                <i class="el-icon-question ml10" />
              </el-tooltip>
            </el-descriptions-item>
          </el-descriptions>
        </div>

        <div v-else>
          <el-empty :image-size="200"></el-empty>
        </div>
      </div>
      <div v-show="tabb === 2" class="mb20">
        <!--  date: '2016-05-02 11-25',
        id: '220336559',
        xdr: '张三',
        phone: '15888888888',
        name: '上海市普陀区大项目',
        time: '2天',
        status: true,
        money: '10000元' -->

        <el-table v-loading="load" :data="tixian" stripe style="width: 100%">
          <el-table-column prop="addtime" align="center" label="日期" width="150" />
          <el-table-column prop="card" align="center" label="卡号/支付宝" width="150" />
          <el-table-column prop="name" align="center" label="姓名" />
          <el-table-column prop="bank" align="center" label="支行" width="150" />
          <!-- <el-table-column prop="name" align="center" label="项目名称" width="150" /> -->
          <el-table-column align="center" label="金额" prop="money">
            <template slot-scope="scope">
              <el-tag size="medium" type="danger">{{ scope.row.money }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column align="center" label="状态">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.status" size="medium" type="success"
                >审核通过</el-tag
              >
              <el-tag v-else size="medium" type="danger">审核中</el-tag>
            </template>
          </el-table-column>

          <!-- <el-table-column align="center" label="操作" fixed="right">
            <template slot-scope="scope">
              <el-button type="danger" class="wa_btn" size="mini">删除</el-button>
            </template>
          </el-table-column> -->
        </el-table>
      </div>

      <el-row class="m50 tc">
        <el-col :span="24">
          <el-pagination background layout="prev, pager, next" :total="1000" />
        </el-col>
      </el-row>
    </div>
    <el-dialog title="评价" :visible.sync="dialog" width="60%">
      <el-row>
        <el-col :span="24">
          <el-input
            v-model="form.textarea"
            type="textarea"
            :rows="6"
            placeholder="请输入内容"
          />
        </el-col>
        <el-col :span="24">
          <el-form :model="form">
            <el-form-item label="商家评价：" :label-width="130">
              <el-rate v-model="form.value1" class="mt10" />
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-tag class="mr10 cu" @click="handlePl('评论一')">评论一</el-tag>
      <el-tag type="success" class="mr10 cu" @click="handlePl('评论二')">评论二</el-tag>
      <el-tag type="info" class="mr10 cu" @click="handlePl('评论三')">评论三</el-tag>
      <el-tag type="warning" class="mr10 cu" @click="handlePl('评论四')">评论四</el-tag>
      <el-tag type="danger" class="mr10 cu" @click="handlePl('评论五')">评论五</el-tag>
      <span slot="footer" class="dialog-footer">
        <el-button class="w160" @click="dialog = false">取 消</el-button>
        <el-button type="primary" class="w160" @click="dialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      load: false,
      dialog: false,
      pl: "",
      tabb: 0,
      search: "",
      form: {
        textarea: "",
        value1: "",
      },
      // tableData: [
      //   {
      //     date: '2016-05-02 11-256',
      //     id: 'KPLV2023011103',
      //     name: '上海市普陀区出租阿松大3424',
      //     pj: '还行',
      //     status: true,
      //     btn: 0,
      //     time: '2天',
      //     money: '10000元',
      //     yj: '5000元'

      //   },
      //   {
      //     date: '2016-05-02 11-25',
      //     id: 'KPLV2023011103',
      //     name: '上海市普陀区出租111111',
      //     pj: '还行',
      //     time: '2天',
      //     status: false,
      //     money: '10000元',
      //     yj: '5000元',
      //     btn: 0

      //   },
      //   {
      //     date: '2016-05-02 11-25',
      //     id: 'KPLV2023011103',
      //     name: '上海市普陀区出租222222222',
      //     pj: '还行',
      //     time: '2天',
      //     status: true,
      //     money: '10000元',
      //     yj: '5000元',
      //     btn: 0

      //   },
      //   {
      //     date: '2016-05-02 11-25',
      //     id: 'KPLV2023011103',
      //     name: '上海市普陀区出租',
      //     pj: '还行',
      //     time: '2天',
      //     status: true,
      //     money: '10000元',
      //     yj: '5000元',
      //     btn: 0

      //   },
      //   {
      //     date: '2016-05-02 11-25',
      //     id: 'KPLV2023011103',
      //     name: '上海市普陀区出租',
      //     pj: '还行',
      //     status: true,
      //     time: '2天',
      //     money: '10000元',
      //     yj: '5000元',
      //     btn: 0

      //   }
      // ],
      tableData1: [
        {
          date: "2016-05-02 11-25",
          id: "KPLV2023011103",
          name: "上海市普陀区出租阿松大43424",
          pj: "还行",
          status: true,
          time: "2天",
          money: "10000元",
          yj: "5000元",
        },
        {
          date: "2016-05-02 11-25",
          id: "KPLV2023011103",
          name: "上海市普陀区出租111111",
          pj: "还行",
          time: "2天",
          status: false,
          money: "10000元",
          yj: "5000元",
        },
        {
          date: "2016-05-02 11-25",
          id: "KPLV2023011103",
          name: "上海市普陀区出租222222222",
          pj: "还行",
          time: "2天",
          status: true,
          money: "10000元",
          yj: "5000元",
        },
        {
          date: "2016-05-02 11-25",
          id: "KPLV2023011103",
          name: "上海市普陀区出租",
          pj: "还行",
          time: "2天",
          status: true,
          money: "10000元",
          yj: "5000元",
        },
        {
          date: "2016-05-02 11-25",
          id: "KPLV2023011103",
          name: "上海市普陀区出租",
          pj: "还行",
          status: true,
          time: "2天",
          money: "10000元",
          yj: "5000元",
        },
      ],
      tableData2: [
        {
          date: "2016-05-02 11-25",
          id: "220336559",
          xdr: "张三",
          phone: "15888888888",
          name: "上海市普陀区大项目",
          time: "2天",
          status: true,
          money: "10000元",
        },
        {
          date: "2016-05-02 11-25",
          id: "220336559",
          xdr: "张三",
          phone: "15888888888",
          name: "上海市普陀区大项目",
          time: "2天",
          status: false,
          money: "10000元",
        },
        {
          date: "2016-05-02 11-25",
          id: "220336559",
          xdr: "张三",
          status: true,
          phone: "15888888888",
          name: "上海市普陀区大项目",
          time: "2天",
          money: "10000元",
        },
        {
          date: "2016-05-02 11-25",
          id: "220336559",
          xdr: "张三",
          phone: "15888888888",
          name: "上海市普陀区大项目",
          time: "2天",
          status: false,
          money: "10000元",
        },
      ],
    };
  },
  computed: {
    xiaofei: function () {
      return this.$store.state.user.xiaofeiLog;
    },
    shouyi: function () {
      return this.$store.state.user.shouyiLog;
    },
    tixian: function () {
      return this.$store.state.user.tixianLog;
    },
    id: function () {
      return this.$store.state.user.id;
    },
  },
  methods: {
    handle(val) {
      if (val == 2) {
        this.$store.dispatch("user/getTixianLog", { uid: String(this.id) });

        console.log("体现数据", this.tixian);
      }

      this.tabb = val;
    },
    handlePl(val) {
      this.form.textarea = this.form.textarea + val + " ; ";
    },
  },
  mounted() {},
};
</script>

<style scoped>
.tab_content {
  padding: 20px;
  border: 1px solid #e4e7ed;
}

.w_sea {
  width: 122px;
  float: right;
}

div/deep/.el-descriptions__title {
  margin: auto;
  margin-top: 15px;
}

div/deep/.el-descriptions {
  border: 1px solid #f0f0f0;
  word-wrap: break-word;
  padding: 20px;
  margin: 20px 0;
  -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
div/deep/.aaa .el-descriptions {
  padding-bottom: 0 !important;
  height: 230px;
  overflow: hidden;
}
/* div/deep/.aaa .el-descriptions :not(.is-bordered) .el-descriptions-item__cell{
   padding-bottom: 0 !important;
} */
div/deep/.el-descriptions-item__container {
  display: block;
}

div/deep/.desBtn {
  float: right;
  margin-right: 23%;
}

div/deep/.duiqil {
  display: inline-block;
  width: 56px;
  text-align: justify;
  text-justify: distribute-all-lines;
  text-align-last: justify;
}
.ddBtn {
  height: 53px;
  transform: translate(-70px, -35px);
  width: 114px;
}
.w160 {
  width: 160px;
}
.mr10 {
  margin-right: 10px;
  cursor: pointer;
}

div/deep/.el-descriptions :not(.is-bordered) .el-descriptions-item__cell {
  width: 302px;
}
div/deep/.desBtn {
  margin-right: 39%;
}
div/deep/.shouyi_jil :not(.is-bordered) .el-descriptions-item__cell {
  width: 291px;
}
</style>
