<template>
  <div v-loading="load" class="tab_content">
    <div class="list-container">
      <!-- 文章列表模块 -->
      <div class="mb20 tc">
        <el-button type="primary" size="mini" @click.native="handle(0)">消费记录</el-button>
        <el-button type="primary" size="mini" @click.native="handle(1)">收益记录</el-button>
        <el-button type="primary" size="mini" @click.native="handle(2)">提现记录</el-button>
      </div>
      <div v-if="tabb === 0">
        <div v-for="(item, index) in tableData" :key="index" class="mb20">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="tccc">{{ item.name }}</span>
            </div>
            <div class="text item dsassds">
              日期: {{ item.date }}
            </div>
            <div class="text item dsassds">
              订单号: {{ item.id }}
            </div>
            <div class="text item dsassds">
              时间: {{ item.time }}
            </div>
            <div class="text item dsassds">
              消费: {{ item.money }}
            </div>
          </el-card>
        </div>
      </div>
      <div v-else-if="tabb === 1">
        <div v-for="(item, index) in tableData1" :key="index" class="mb20">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="tccc">{{ item.name }}</span>
            </div>
            <div class="text item dsassds">
              日期: {{ item.date }}
            </div>
            <div class="text item dsassds">
              订单号: {{ item.id }}
            </div>
            <div class="text item dsassds">
              时间: {{ item.time }}
            </div>
            <div class="text item dsassds">
              状态: <el-tag v-if="item.statuss" class="wa_btn" type="danger" size="mini">待支付</el-tag>
              <el-tag v-else class="wa_btn" type="success" size="mini">已支付</el-tag>
            </div>
            <div class="text item dsassds">
              消费: {{ item.money }}
            </div>
          </el-card>
        </div>
      </div>
      <div v-else-if="tabb === 2">
        <div v-for="(item, index) in tableData2" :key="index" class="mb20">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="tccc">{{ item.name }}</span>
            </div>
            <div class="text item dsassds">
              日期: {{ item.date }}
            </div>
            <div class="text item dsassds">
              卡号: {{ item.cardNum }}
            </div>
            <div class="text item dsassds">
              姓名: {{ item.name }}
            </div>
            <div class="text item dsassds">
              手机: {{ item.phone }}
            </div>
            <div class="text item dsassds">
              状态: <el-tag v-if="item.statuss" class="wa_btn" type="danger" size="mini">审核中</el-tag>
              <el-tag v-else class="wa_btn" type="success" size="mini">审核通过</el-tag>
            </div>
            <div class="text item dsassds">
              消费: {{ item.money }}
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      load: false,
      tabb: 0,
      tableData: [{
        date: '2016-05-02 11-25',
        id: 'KPLV2023011103',
        name: '上海市普陀区出租',
        time: '2天',
        money: '10000元'
      }, {
        date: '2016-05-02 11-25',
        id: 'KPLV2023011103',
        name: '上海市普陀区出租',
        time: '2天',
        money: '10000元'
      }, {
        date: '2016-05-02 11-25',
        id: 'KPLV2023011103',
        name: '上海市普陀区出租',
        time: '2天',
        money: '10000元'
      }
      ],
      tableData1: [{
        date: '2016-05-02 11-25',
        id: 'KPLV2023011103',
        name: '上海市普陀区出租',
        time: '2天',
        statuss: false,
        money: '10000元'
      }, {
        date: '2016-05-02 11-25',
        id: 'KPLV2023011103',
        name: '上海市普陀区出租',
        time: '2天',
        statuss: true,
        money: '10000元'
      }
      ],
      tableData2: [{
        date: '2016-05-02 11-25',
        cardNum: '6226 2230 1852 6666',
        name: '张三',
        phone: '15666666666',
        statuss: true,
        money: '10000元'
      }, {
        date: '2016-05-02 11-25',
        cardNum: '6226 2230 1852 6666',
        name: '李四',
        phone: '15666666666',
        statuss: false,
        money: '10000元'
      }, {
        date: '2016-05-02 11-25',
        cardNum: '6226 2230 1852 6666',
        name: '老王',
        phone: '15666666666',
        statuss: true,
        money: '10000元'
      }
      ]
    }
  },
  methods: {
    handle(val) {
      this.tabb = val
    }
  }
}
</script>

<style scoped>
.tab_content {
  padding: 20px;
  border: 1px solid #E4E7ED
}

div/deep/.el-card__header {
  text-align: center;
  font-weight: 600;
}
.tccc{
  font-size: 0.8rem;
}
.dsassds {
  padding-bottom: 5px;
  font-size: 0.8rem;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
