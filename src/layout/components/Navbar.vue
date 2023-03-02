<template>
  <div class="header" :class="{ make: !seen }">
    <!-- web端菜单导航 -->
    <div v-if="seen" class="adress-sel">
      <img class="ml59" src="@/assets/outline.png">
      <el-select v-model="value" :popper-append-to-body="false" class="antiHuman" @change="setAddress()">
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.name"
          :value="item.name"
        />
      </el-select>
    </div>
    <div v-if="seen" class="logo_img" @click="logoClick">
      <div class="logo-contaion">
        <div class="header-logo">
          <img id="header-img" src="@/assets/logo1.png">
        </div>
      </div>
    </div>
    <div v-if="seen" id="menu_index">
      <el-menu
        router
        :default-active="activeIndex"
        class="el-menu-demo"
        menu-trigger="click"
        text-color="#888888"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="/" class="header-title">首页</el-menu-item>
        <el-menu-item
          index="/shotResources/shot"
          class="header-title"
        >拍摄资源</el-menu-item>
        <el-menu-item
          index="/demand/demand"
          class="header-title"
          @click="xuqiuHome"
        >需求中心</el-menu-item>
        <el-menu-item
          index="/goodOutreach/goodOutreach"
          class="header-title"
        >优质外联</el-menu-item>
        <el-menu-item
          index="/article/article/1"
          class="header-title"
        >政策资讯</el-menu-item>
        <el-menu-item
          index="/article/article/2"
          class="header-title"
        >行业新闻</el-menu-item>
        <el-menu-item
          index="/article/article/3"
          class="header-title"
        >服务项目</el-menu-item>
        <el-menu-item
          index="/article/article/4"
          class="header-title"
        >服务案例</el-menu-item>
      </el-menu>
    </div>
    <div v-if="!(userinfo&&userinfo.id)" class="right-nav">
     <!-- {{ userinfo }} -->

      <img class="right-img-btn" src="@/assets/phone.png" @click="login">
      <img class="right-img-btn" src="@/assets/wechat.png" @click="login">
      <el-button
        type="text"
        style="margin-right: 20px"
        class="header-title login-btn"
        @click="login"
      >登录 / 注册
      </el-button>
      <!-- <el-button type="primary" class="header-title" @click="register" round>注册</el-button> -->
    </div>
    <!-- 登录成功之后的 -->
   <div v-else class="right-nav">

   <!-- {{ userinfo }} -->
      <img class="right-img-btn" @click="go" :src="userinfo.avatar || defaultimg" alt="">
   <span @click="go" class="usernameCu">{{userinfo.nick || "默认用户"+userinfo.id }}</span>


   <el-button
        type="text"
        style="margin-right: 20px"
        class="header-title login-btn"
        @click="exitLogin"
      >退出
      </el-button>

   </div>



    <!-- 手机端菜单导航 v-bind:style="{backgroundColor:'#409EFF'}" -->
    <div v-if="!seen" class="phone">
      <phone />
    </div>
    <el-dialog title="" :visible.sync="dialogVisible" width="400px">
      <forma @showFrom="dialoFromShowFun($event)" />
    </el-dialog>
  </div>
</template>

<script>
import forma from './form.vue'
import phone from './navPhone.vue'
import { getAddressList } from '@/api/table'
import { Message } from 'element-ui'

export default {
  name: 'Layout',
  components: {
    forma,
    phone
  },
  data() {
    return {
      dialogVisible: false,
      showWidth: 0, // 屏幕可视宽度
      activeIndex: '/',
      options: [],
      value: '佛山',
      scroll: '',
      timer: '',
      screenWidth: 0,
      seen: true,
      currentMenu: '首页',
      defaultimg:require("@/assets/img/spzy/defaultImg.png"),
      // userinfo:null
    }
  },

  computed: {
    userinfo: function() {
      return this.$store.state.user.userInfo
    }
  },
  watch: {
    screenWidth: function(n, o) {
      if (n > 700) {
        this.seen = true
        this.setSessionItem('seen', document.body.clientWidth)
      } else {
        this.seen = false
        this.setSessionItem('seen', document.body.clientWidth)
      }
    },
    $route: {
      handler: function(val, oldVal) {
        if (document.body.clientWidth > 700) {
          this.seen = true
        } else {
          this.seen = false
        }
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted() {
      // this.userinfo=this.$store.state.user.userInfo
    // console.log("userinfo",this.userinfo);
    this.menuSeen()
    window.addEventListener('setItem', () => {
      const clientWidth = sessionStorage.getItem('seen')
      // console.log(clientWidth, 'this.seen')
      if (clientWidth > 700) {
        this.seen = true
      } else {
        this.seen = false
      }
    })
    this.addressList()
    // console.log("生命周期出发", this.userinfo);

    try {
      if (JSON.parse(localStorage.getItem('address'))[0].name) {
        // console.log("取到了城市name====>",JSON.parse(localStorage.getItem("address"))[0].name);
        this.value = JSON.parse(localStorage.getItem('address'))[0].name
      }
      // console.log('城市默认值', this.value)
      // this.value="佛山"
    } catch (e) {
      // console.log('错误信息', e)
      //  this.value="佛山"
    }

    // console.log("JSON.parse(localStorage.getItem",JSON.parse(localStorage.getItem("address"))[0].name);
    // if(localStorage.getItem("address")&&JSON.parse(localStorage.getItem("address"))[0].name){
    //   console.log("ssssssssssssssss");
    //  this.value=JSON.parse(localStorage.getItem("address"))[0].name
    // }else{
    //   this.value="佛山"
    // }
  },

  methods: {

    exitLogin(){

      this.$confirm('此操作将退出当前登录, 是否继续?', '温馨提示提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$message({
            type: 'success',
            message: '退出登录成功!'
          });
           location.reload()
          // localStorage.clear()
          this.$store.commit("user/SET_CLEAR")
         this.$router.push({
          name:"Dashboard"
         })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });













    },

    zhengce() {
      // console.log("00000000000");
      wenList({ id: '1' })
    },

    // 点击跳转到需求中心

    xuqiuHome() {
      this.$store.dispatch('user/get_contentAct',{page:"1",limit:"10",status:"0",area_id:"1",addtime:"1",t_num:"1"})
    },

    dialoFromShowFun(e) {
      // console.log(typeof e);
      this.dialogVisible = e
      // console.log("子元素想发u元素专职",e);
      // this.$on("")
    },

    handleSelect(key) {
      switch (key) {
        case '1':
          this.$router.push({ name: 'Index' })
          break
        case '2-1':
          window.location.hash = '#产品微观'
          break
        case '2-2':
          this.$router.push({ name: 'Fruit' })
          break
        case '2-3':
          this.$router.push({ name: 'Fashion' })
          break
        case '3':
          this.$router.push({ name: 'Index' })
          window.location.hash = '#产品特点'
          break
        case '4':
          this.$router.push({ name: 'Index' })
          window.location.hash = '#合作伙伴'
          break
        case '5':
          this.$router.push({ name: 'Index' })
          window.location.hash = '#关于我们'
          break
      }
    },
    handleSelectMobile(key) {
      switch (key) {
        case '1':
          this.$router.push({ name: 'Index' })
          this.currentMenu = '首页'
          break
        case '2-1':
          this.$router.push({ name: 'Index' })
          window.location.hash = '#产品微观'
          this.currentMenu = '首页'
          break
        case '2-2':
          this.$router.push({ name: 'Fruit' })
          this.currentMenu = '生鲜果蔬'
          break
        case '2-3':
          this.$router.push({ name: 'Fashion' })
          break
        case '3':
          this.$router.push({ name: 'Index' })
          window.location.hash = '#产品特点'
          this.currentMenu = '首页'
          break
        case '4':
          this.$router.push({ name: 'Index' })
          window.location.hash = '#合作伙伴'
          this.currentMenu = '首页'
          break
        case '5':
          this.$router.push({ name: 'Index' })
          window.location.hash = '#关于我们'
          this.currentMenu = '首页'
          break
      }
    },
    backTop() {
      // 当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
      this.timer = setInterval(() => {
        const osTop = document.documentElement.scrollTop || document.body.scrollTop
        const ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
        if (osTop === 0) {
          clearInterval(this.timer)
        }
      }, 30)
    },
    login() {
      this.dialogVisible = true
    },
    go() {
      // console.log(this.userinfo);

      if (!this.userinfo && this.userinfo) {
        // 暂未登录
        this.dialogVisible = true
      } else {
        // 已经登录
        this.$router.push({
          path: '/my/my'
        })
      }
    },
    register() {
      window.open('https://admin.fastice-tech.com/registe')
    },
    menuSeen() {
      this.screenWidth = document.body.clientWidth
      if (this.screenWidth > 700) {
        this.seen = true
        this.setSessionItem('seen', document.body.clientWidth)
      } else {
        this.seen = false
        this.setSessionItem('seen', document.body.clientWidth)
      }
      window.onresize = () => {
        return (() => {
          // that.showWidth = document.body.clientWidth
          // 屏幕尺寸
          if (document.body.clientWidth > 700) {
            this.setSessionItem('seen', document.body.clientWidth)
          } else {
            this.seen = false
            this.setSessionItem('seen', document.body.clientWidth)
          }
        })()
      }
    },
    logoClick() {
      this.$router.push({ name: 'Index' })
      this.currentMenu = '首页'
    },
    // 获取地区列表
    async addressList() {
      const res = await getAddressList()
      // console.log(res.data.data)
      this.options = res.data.data
    },
    // 点击切换地区
    setAddress() {
      const v = this.value
      const res = this.options.filter((item) => {
        return item.name == v
      })
      // console.log("切换了地址",res);
      console.log('res当前切换至', res[0].name)
      if (res[0].name) {
        this.value = res[0].name
        localStorage.setItem('address', JSON.stringify(res))
      } else {
        // console.log("sssssssssssss");
        this.value = '佛山'
      }
    }
  }
}
</script>

<style scoped>
.logo_img {
  float: left;
  width: 202px;
  cursor: pointer;
}

.ml59 {
  margin-left: 59px;
  height: 15px;
}

.el-menu-demo {
  height: inherit;
  border: 0;
}
.usernameCu{
  cursor: pointer;
  font-size: 16px;
  color: #c37b21;
  margin-right: 10px;
}

.adress-sel {
  float: left;
  width: 260px;
  height: inherit;
  line-height: 100px;
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

.logo-contaion {
  display: -webkit-box;
  display: -ms-flexbox;
  width: inherit;
  display: flex;
  margin-top: 21px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  float: left;
  height: 65px;
}

#back_to_top {
  position: fixed;
  bottom: 50px;
  right: 30px;
  cursor: pointer;
}

/* .header-title {
    font-size: 1em;
} */
.login-btn {
  color: #c37b21;
  font-size: 16px;
}

.company_name {
  font-weight: normal;
  font-size: 1em;
}

.footer_font {
  font-size: 1em;
}

#menu_index {
  float: left;
  width: auto;
  height: 100%;
  margin-left: 4%;
}

.header {
  margin: auto;
  width: 100%;
  height: 100px;
  /*background: #F56C6C;*/
}

.el-menu--horizontal > .el-menu-item {
  height: 100px;
  line-height: 100px;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border: none;
  background: #be791a;
  color: #fff;
}

.el-menu--horizontal > .el-menu-item {
  width: 100px;
  text-align: center;
  font-size: 16px;
}

@media screen and (max-device-width: 415px) {
  .logo_img {
    float: left;
    width: auto;
    cursor: pointer;
  }

  #back_to_top {
    position: fixed;
    bottom: 50px;
    right: 5px;
    cursor: pointer;
  }

  .footer_font {
    font-size: 0.875em;
  }

  #menu_index {
    float: right;
    width: auto;
    height: 100%;
  }

  .mobile_menu {
  }
}

#header-img {
  width: 202px;
  height: 40px;
  float: left;
  margin: auto;
}

.header-logo {
  height: 50px;
  width: 50px;
  align-self: center;
}

.header-important {
  float: left;
  margin-left: 6px;
  align-self: center;
}

.footer {
  display: flex;
  align-items: center;
  margin: 10px auto;
  width: 90%;
}

a {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

.right-nav {
  float: right;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  width: auto;
  margin-right: 50px;
}

.right-img-btn {
  width: 33px;
  cursor: pointer;
  height: 33px;
  margin-right: 8px;
  border-radius: 100%;
  margin-left: 5px;
}

@media only screen and (min-width: 1530px) and (max-width: 1683px) {
  .adress-sel {
    width: 171px;
  }
}

@media only screen and (min-width: 1230px) and (max-width: 1530px) {
  .adress-sel {
    width: 100px;
  }

  .ml59 {
    margin-left: 13px;
  }

  .el-menu--horizontal > .el-menu-item {
    width: 75px;
    padding: 0;
  }

  .right-nav {
    width: 180px;
  }
}

@media only screen and (min-width: 700px) and (max-width: 1230px) {
  .adress-sel {
    width: 100px;
    /* display: none; */
  }

  /* .logo_img {
    display: none;
  } */

  .ml59 {
    margin-left: 13px;
  }

  .el-menu--horizontal > .el-menu-item {
    width: 75px;
  }

  .right-nav {
    /* display: none; */
  }

  #menu_index {
    width: auto;
  }
}

.adress-sel {
  float: left;
  width: 260px;
  height: inherit;
  line-height: 100px;
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

.fwl {
  float: none;
  width: 110px;
}

.ml10 {
  margin-left: 20px;
}

.phone div/deep/.el-input__prefix,
.el-input__suffix {
  top: -2px;
}

.phone .adress-sel .el-popper {
  margin-top: 12px;
  top: 54px !important;
  width: 99px;
  text-align: center;
  left: -24px !important;
}

div/deep/.el-dialog__body {
  padding: 0;
}

div/deep/.el-dialog .el-dialog__header {
  display: none;
}

/* @media (max-width: 1680px) {
  .adress-sel {
    display: none;
  }
} */

@media (max-width: 1780px) {
  .adress-sel {
    width: 220px;
  }
}

.make {
  height: 58px;
}
@media only screen and (min-width: 1500px) and (max-width: 1650px) {
  .el-menu--horizontal > .el-menu-item {
    width: 85px;
    text-align: center;
    font-size: 16px;
    padding: 0;
  }
}
@media only screen and (min-width: 800px) and (max-width: 1275px) {
  .right-nav {
    margin-right: 0;
  }
  /* .adress-sel{
    display: none;
} */
}
@media (max-width: 1330px) {
  .adress-sel {
    width: 130px;
  }
}
div/deep/.antiHuman .el-select-dropdown__wrap{
  max-height:fit-content
}
</style>
