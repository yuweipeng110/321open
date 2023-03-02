<template>
  <div style="display:flex;">
    <ul style="width:300px;">
      <li v-for="({ name }, i) in list">
        <div @click="api(name, i)">{{ name }}</div>
      </li>
    </ul>
    <div style="flex:1">
      <div>name: {{ name }}</div>
      <hr>
      <div style="color:blue">param: {{ param }}</div>
      <hr>
      <div style="color:green;">res: {{ res }}</div>
      <hr>
      <div style="color:red;">err: {{ err }}</div>
    </div>
  </div>
</template>

<script>
import * as home from "@/api/home";
import * as table from "@/api/table";
import * as tenant from "@/api/tenant";
import * as user from "@/api/user";
export default {
  data() {
    return {
      list: [],
      params: {
        // home
        homeQuantity: { page: "1", limit: "10", status: "0", area_id: "1", addtime: "1", t_num: "1" },

        demandDitial: { id: '23' },

        wenList: { cate_id: '1' },

        art_detail: { id: '6' },

        // tenant
        // catePull: { cate: '', content: '123', title: '', area_id: '', img: '', yajin: '', zujin: '', chao: '', uid: 1 }

        catePull: {
          cate: [],
          title: "",
          area_id: "1",
          img: "",
          yajin: "",
          zujin: "",
          chao: "",
          content: "",
        },

        cateLog: { uid: '1', page: '1', limit: 10 },

        toubiaoApi: { r_id: 23, uid: 18, pic: '', video: '', mobile: '', money: '', message: '' },

        ServeRZApi: { uid: '1', gong: '', chang: '', cai: '', remark: '' },

        ServeZZApi: { uid: '1', xu: '', ying: '', xie: '', remark: '' },

        ServeCHApi: { uid: '1', type: '', ying: '', remark: '' },

        ServeZXApi: { uid: '1', remark: '123', zi: ['法务咨询'] },

        ServerListLog: { uid: '1' },

        shangjiaruzhuLog: { uid: '1' },



        // user
        getLogin: {
          id: '17'
        },

        withdrawDeposit: {
          uid: '17',
          card: '1',
          name: 'x',
          money: '0.01',
          bank: 's'
        },

        enndPull: {
          title: '正正正正',
          zhao_start: '2023-03-01 22:29:20',
          zhao_end: '2023-03-01 22:29:20',
          use_start: '2023-03-01 22:29:20',
          use_end: '2023-03-01 22:29:20',
          money: '1.23',
          uid: 18,
          content: '正正正正正',
          area_id: 1,
          img: 'http://kelerk.178tqw.com/static/uploads/20230301/9d63ef9df84e59651962a6e2303b4d18.png',
          description: '正正',
        },

        enndRecord: {
          uid: 18,
        },

        updataUser: {
          id: '17',
          avatar: 'http://kelerk.178tqw.com/static/uploads/20230301/9d63ef9df84e59651962a6e2303b4d18.png',
          nick: '梦里随枫',
          mobile: '15901356473'
        },

        withdrawDepositList: {
          uid: 18,
        },

        YieldLog: {
          uid: 18,
        },

        consumeLog: {
          uid: 18,
        },

        attention: {
          uid: "1"
        },

        collect: {
          uid: "1"
        },

        tenderList: {
          uid: "1"
        },

        xiadan: {
          uid: '1',
          name: 'ss',
          mobile: '13000000000',
          is_fapiao: '0',
          taitou: '发票抬头',
          start: '2023-03-01 22:29:20',
          end: '2023-03-01 22:29:20',
          zid: '',
          money: '1.11'
        },


        // table
        classifyEssay: { cate_id: 2, page: '1', limit: '10' },
        ruzhu: { uid: '1', name: '', phone: '', address: '', card_z: '', card_f: '', yingye: '', company: '' },
      },
      name: '',
      param: null,
      res: null,
      err: null
    };
  },
  created() {
    this.list = [].concat(
      this.getModule(home),
      // this.getModule(table),
      // this.getModule(tenant),
      // this.getModule(user),
    );
  },
  methods: {
    getModule(module) {
      let list = [];
      for (let name in module) {
        let value = module[name];
        list.push({
          name,
          value
        })
      }
      return list;
    },
    async api(name, i) {
      let value = this.list[i].value;
      let param = this.params[name] || null;
      this.name = name;
      this.param = param;
      this.res = null;
      this.err = null;
      try {
        let res = await value(param);
        this.res = res.data.data;
      } catch (err) {
        this.err = err;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  line-height: 1.8em;
}
</style>
