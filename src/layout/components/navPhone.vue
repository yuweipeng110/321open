<template>
  <div class="page flex-col">
    <div class="group_2 flex-row">
      <div class="nav-bar_1 flex-col" />
      <img
        class="icon_1"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7f2b2cb40c47632155746281b7fd7973a9ba8705c0e5a27c868abd169510f876"
      >
      <span class="text_2 adress-sel sphone">
        <el-select v-model="value" :popper-append-to-body="false" @change="setAddress()">
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.name"
          />
        </el-select>
      </span>

      <span class="text_3">{{ title }}</span>

      <div @click="go">
        <img
          class="icon_3"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge0bd62a321cb41c1c49caa691020833ec1fdbced346482d33184b8e2102e3bee"
        >
      </div>

      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <img
            class="icon_4"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7406ea0e0ba366b290c27264ef665499aa9fc85d2876755ff7899a66da063e24"
          >
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="/">首页</el-dropdown-item>
          <el-dropdown-item command="/shotResources/shot">拍摄资源</el-dropdown-item>
          <el-dropdown-item command="/demand/demand">需求中心</el-dropdown-item>
          <el-dropdown-item command="/goodOutreach/goodOutreach">优质外联</el-dropdown-item>
          <el-dropdown-item command="/article/article/1">政策资讯</el-dropdown-item>
          <el-dropdown-item command="/article/article/2">行业新闻</el-dropdown-item>
          <el-dropdown-item command="/vedioList/vedioList">精选视频</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-dialog title="" :visible.sync="dialogVisible" width="100%" class="cccccs">
      <forma />
    </el-dialog>
  </div>
</template>
<script>
import forma from './form.vue'
export default {
  components: {
    forma
  },
  data() {
    return {
      dialogVisible: false,
      title: '首页',
      value: '佛山',
      options: [
        {
          name: '佛山',
          id: '1'
        }
      ],
      value: '0'
    }
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        if (window.sessionStorage.getItem('title')) {
          this.title = window.sessionStorage.getItem('title')
          // console.log(this.title, 'this.title')
        }
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted() {
    if (window.sessionStorage.getItem('title')) {
      this.title = window.sessionStorage.getItem('title')
      // console.log(this.title, 'this.title')
    }
  },
  methods: {
    go() {
      window.sessionStorage.setItem('title', '个人中心')
      this.$router.push({
        path: '/my/my'
      })

      this.dialogVisible = true
    },
    handleCommand(command) {
      // console.log(command)
      this.$router.push({
        path: command
      })
      if (command === '/') {
        window.sessionStorage.setItem('title', '首页')
      } else if (command === '/shotResources/shot') {
        window.sessionStorage.setItem('title', '拍摄资源')
      } else if (command === '/demand/demand') {
        window.sessionStorage.setItem('title', '需求中心')
      } else if (command === '/goodOutreach/goodOutreach') {
        window.sessionStorage.setItem('title', '优质外联')
      } else if (command === '/article/article') {
        window.sessionStorage.setItem('title', '政策资讯')
      } else if (command === '/article/article') {
        window.sessionStorage.setItem('title', '行业新闻')
      } else if (command === '/vedioList/vedioList') {
        window.sessionStorage.setItem('title', '精选视频')
      }
    }
  }
}
</script>
<style scoped>
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 10px 0 28px 0;
}

.group_1 {
  margin: 0 18px 0 17px;
}

.text_1 {
  overflow-wrap: break-word;
  color: rgba(51, 51, 51, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 17px;
}

.image_1 {
  width: 38px;
  height: 10px;
  margin: 2px 0 5px 223px;
}

.image_2 {
  width: 26px;
  height: 12px;
  margin: 1px 0 4px 8px;
}

.group_2 {
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  margin-top: 15px;
  padding-left: 0;
}

.sphone div/deep/.el-input__inner {
  padding-left: 0 !important;
}

.sphone div/deep/.el-input__suffix {
  right: 15px !important;
}

.nav-bar_1 {
  width: 374px;
  height: 48px;
  margin: -8px 0 -7px 0;
}

.icon_1 {
  width: 13px;
  height: 15px;
  margin: 12px 0 10px -364px;
}

.text_2 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin: -1px 0 0 5px;
}

.icon_2 {
  width: 6px;
  height: 4px;
  margin: 16px 0 13px 4px;
}

.text_3 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 17px;
  letter-spacing: 0.28333333134651184px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 24px;
  transform: translateX(-10px);
  margin: 5px auto;
}

.icon_3 {
  width: 24px;
  height: 24px;
  margin: 4px 0 5px 0.2rem;
}

.icon_4 {
  width: 24px;
  height: 24px;
  margin: 4px 12px 5px 14px;
}

.adress-sel .el-select {
  width: 70px;
}

div/deep/ .adress-sel .el-input__inner {
  padding-left: 6px;
  border: none !important;
  color: #c37b21;
  font-size: 16px;
}

div/deep/ .adress-sel .el-select .el-input .el-select__caret {
  color: #c37b21;
}

/* .sphone div/deep/.el-select-dropdown{
  background-color: #000000;
    opacity: 0.3;

} */
.sphone div/deep/.el-popper {
  min-width: 70px;
  position: sticky !important;
  top: 40px;
  left: 0px;
  transform-origin: center top;
  z-index: 2001;
  margin-top: -4px;
  margin-left: -22px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}

.el-icon-arrow-down {
  font-size: 12px;
}

div/deep/.el-select-dropdown__item {
  width: 96px;
}

.sphone .el-select-dropdown {}

.cccccs {
  transform: scale(0.95);
  margin:  auto;
  overflow-y: hidden;
}

@media only screen and (min-width: 375px) and (max-width: 390px) {

  div/deep/.ercode_tab {

    /* width: 75px; */
  }

}
@media only screen and (min-width: 375px) and (max-width: 600px) {

  div/deep/.loginForm {
  padding: 10px;
}

}
  div/deep/.loginForm {
  padding: 10px;
}
.sphone div/deep/.el-scrollbar__view {
  padding-bottom: 15px;
  padding-top: 10px;
}
div/deep/.sphone .el-select-dropdown__wrap{
  max-height:fit-content
}
</style>
