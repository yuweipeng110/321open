<template>
  <div class="tab_content">
    <el-row :gutter="20">
      <el-col :span="6" class="tc" v-for="(item,index) in guanzhu" :key="index">
        <div>
          <div>
            <el-avatar :size="100" class="mb10" :src="item.avatar" />
          </div>
          <div class="mb10">
            {{item.nick}}
          </div>
          <div>
            <el-button type="danger" class="hoverbtn" size="mini">取消关注</el-button>
          </div>
        </div>
      </el-col>



    </el-row>

  </div>
</template>

<script>

export default {
  // props:{
  //   guanzhu:{
  //     default:()=>{}
  //   }
  // },
  computed: {
    guanzhu: function () {
      return this.$store.state.user.guanzhu;
    },
  },
  data() {
    return {

    }
  },
  methods: {
    onSubmit() {
      // console.log('submit!')
    },
    getList(){
      this.$store.dispatch("user/getLike", { uid: this.$store.state.user.id });
    }
  },
  mounted(){
    // console.log("000999009",this.guanzhu);
    this.getList()
  }
}
</script>

<style scoped>
.tab_content {
  padding: 20px;
  border: 1px solid #E4E7ED
}

</style>
