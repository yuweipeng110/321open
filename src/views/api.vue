<template>
  <div style="display:flex;">
    <ul style="width:300px;">
      <li v-for="({ name }, i) in list">
        <div @click="api(name, i)">{{ name }}</div>
      </li>
    </ul>
    <div style="flex:1">
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
        wenList: { id: '1' }
      },
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
      console.log(name, value, param);

      try {
        let res = await value(param);
        this.res = res;
        this.err = null;
      } catch (err) {
        this.res = null;
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
