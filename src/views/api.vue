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

        enndPull: {
          title: "123",
          imglist: "",
          zhao_start: "",
          zhao_end: "",
          use_start: "",
          use_end: "",
          money: "",
          img: "",

          description: "",
        },


        // table
        classifyEssay:{ cate_id: 2, page: '1', limit: '10' },
        ruzhu:{ uid: '1', name: '', phone: '', address: '', card_z: '' ,card_f: '', yingye: '', company: ''},
      },
      name: '',
      param: null,
      res: null,
      err: null
    };
  },
  created() {
    this.list = [].concat(
      // this.getModule(home),
      // this.getModule(table),
      // this.getModule(tenant),
      this.getModule(user),
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
