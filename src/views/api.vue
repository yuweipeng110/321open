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
