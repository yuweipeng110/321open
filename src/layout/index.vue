<template>
  <div class="app-wrapper">
    <div class="main-container">
      <navbar />
      <app-main />
      <footcode v-if="seen" />
      <phone v-if="!seen" />
    </div>
    <div v-if="seen" class="el-backtop" style="right: 40px; bottom: 200px;">
      <div class="backBox" @mouseover="mouseOver(1)" @mouseleave="mouseLeave(1)">
        <!-- <i class="el-icon-chat-dot-round" @mouseover="mouseOver(1)" @mouseleave="mouseLeave(1)" /> -->
        <div @mouseover="mouseOver(1)" @mouseleave="mouseLeave(1)">
          <svg v-if="!wediao" t="1676534420925" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2849" width="22" height="22"><path d="M874.666667 553.877333V746.666667h-192v-128.021334h-64v258.986667h-64V554.666667h192v127.978666h64v-128.768h64zM469.333333 554.666667v320H149.333333V554.666667h320z m405.333334 256v64h-192v-64h192z m-469.333334-192h-192v192h192v-192z m-64 64v64h-64v-64h64z m128-533.333334v320H149.333333V149.333333h320z m405.333334 0v320H554.666667V149.333333h320z m-469.333334 64h-192v192h192v-192z m405.333334 0h-192v192h192v-192z m-469.333334 64v64h-64v-64h64z m405.333334 0v64h-64v-64h64z" fill="#BE791A" p-id="2850" /></svg>
          <!-- <svg v-if="!wediao" t="1676363750943" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5755" width="22" height="22"><path d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z" fill="#be791a" p-id="5756" /></svg> -->
          <svg v-else t="1676534420925" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2849" width="22" height="22"><path d="M874.666667 553.877333V746.666667h-192v-128.021334h-64v258.986667h-64V554.666667h192v127.978666h64v-128.768h64zM469.333333 554.666667v320H149.333333V554.666667h320z m405.333334 256v64h-192v-64h192z m-469.333334-192h-192v192h192v-192z m-64 64v64h-64v-64h64z m128-533.333334v320H149.333333V149.333333h320z m405.333334 0v320H554.666667V149.333333h320z m-469.333334 64h-192v192h192v-192z m405.333334 0h-192v192h192v-192z m-469.333334 64v64h-64v-64h64z m405.333334 0v64h-64v-64h64z" fill="#ffffff" p-id="2850" /></svg>
          <!-- <svg v-else t="1676363750943" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5755" width="22" height="22"><path d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z" fill="#ffffff" p-id="5756" /></svg> -->
        </div>

        <div v-show="isWechat" class="weI">
          <svg
            t="1675067907111"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2791"
            width="200"
            height="200"
          >
            <path
              d="M48.384 45.376l412.224 0 0 84.992-412.224 0 0-84.992ZM565.44 45.376l238.656 0 0 84.992-238.656 0 0-84.992ZM891.584 45.376l86.72 0 0 86.72-86.72 0 0-86.72ZM48.384 374.4l412.224 0 0 85.056-412.224 0 0-85.056ZM45.696 45.376l84.992 0 0 412.224-84.992 0 0-412.224ZM375.616 45.376l84.992 0 0 412.224-84.992 0 0-412.224ZM189.376 200.832l115.712 0 0 115.712-115.712 0 0-115.712ZM565.44 130.368l82.752 0 0 87.232-82.752 0 0-87.232ZM804.032 130.368l90.752 0 0 160.512-90.752 0 0-160.512ZM891.584 217.6l86.72 0 0 151.872-86.72 0 0-151.872ZM651.328 282.688l152.768 0 0 109.312-152.768 0 0-109.312ZM736.832 369.408l155.392 0 0 88.128-155.392 0 0-88.128ZM565.952 372.16l85.376 0 0 85.376-85.376 0 0-85.376ZM45.696 542.784l84.992 0 0 192.576-84.992 0 0-192.576ZM130.88 717.248l91.968 0 0 92.032-91.968 0 0-92.032ZM45.696 805.632l85.184 0 0 173.056-85.184 0 0-173.056ZM217.664 542.784l261.696 0 0 105.728-261.696 0 0-105.728ZM281.344 639.104l109.184 0 0 100.48-109.184 0 0-100.48ZM370.176 717.248l109.184 0 0 174.848-109.184 0 0-174.848ZM285.44 805.632l105.088 0 0 173.056-105.088 0 0-173.056ZM197.952 869.12l102.016 0 0 109.568-102.016 0 0-109.568ZM629.184 542.784l195.264 0 0 174.464-195.264 0 0-174.464ZM871.168 542.784l107.136 0 0 107.136-107.136 0 0-107.136ZM545.088 630.016l107.136 0 0 194.304-107.136 0 0-194.304ZM716.672 692.8l107.776 0 0 111.872-107.776 0 0-111.872ZM545.088 869.12l107.136 0 0 109.568-107.136 0 0-109.568ZM802.816 892.096l175.488 0 0 86.592-175.488 0 0-86.592ZM890.56 804.672l87.744 0 0 105.728-87.744 0 0-105.728Z"
              fill="#272636"
              p-id="2792"
            />
          </svg>
        </div>
      </div>
      <div class="backBox" @mouseover="mouseOver(2)" @mouseleave="mouseLeave(2)">
        <i class="el-icon-phone-outline" @mouseover="mouseOver(2)" @mouseleave="mouseLeave(2)" />
        <div v-show="isPhone" class="phI">13888888888</div>
      </div>
      <div class="backBox" @mouseover="mouseOver(3)" @mouseleave="mouseLeave(3)">
        <i class="el-icon-message" @mouseover="mouseOver(3)" @mouseleave="mouseLeave(3)" />
        <div v-show="isMessage" class="meI">66666666@qq.com</div>
      </div>
      <div class="backBox" @click.stop="handleClick">
        <i class="el-icon-caret-top" />
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import footcode from '@/components/footcode'
import phone from '@/components/footcode/phone.vue'
import throttle from 'throttle-debounce/throttle'

const cubic = value => Math.pow(value, 3)
const easeInOutCubic = value => value < 0.5
  ? cubic(value * 2) / 2
  : 1 - cubic((1 - value) * 2) / 2

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain,
    footcode,
    phone
  },
  mixins: [ResizeMixin],
  data() {
    return {
      isWechat: false,
      wediao: false,
      seen: true,
      isPhone: false,
      isMessage: false
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  watch: {
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
    this.init()

    this.throttledScrollHandler = throttle(300, this.onScroll)
    this.container.addEventListener('scroll', this.throttledScrollHandler)
    window.addEventListener('setItem', () => {
      const clientWidth = sessionStorage.getItem('seen')
      // console.log(clientWidth, 'this.seen')
      if (clientWidth > 700) {
        this.seen = true
      } else {
        this.seen = false
      }
    })
  },
  methods: {

    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    mouseOver(val) {
      if (val === 1) {
        this.isWechat = true
        this.isPhone = false
        this.isMessage = false
        this.wediao = true
      } else if (val === 2) {
        this.isWechat = false
        this.isPhone = true
        this.isMessage = false
      } else if (val === 3) {
        this.isWechat = false
        this.isPhone = false
        this.isMessage = true
      }
    },
    mouseLeave(val) {
      if (val === 1 || val === 2 || val === 3) {
        this.wediao = false
        this.isWechat = false
        this.isPhone = false
        this.isMessage = false
      }
    },
    toTop() {
      document.documentElement.scrollTop = 0
    },
    handleClick(e) {
      this.scrollToTop()
      this.$emit('click', e)
    },
    init() {
      this.container = document
      this.el = document.documentElement
      if (this.target) {
        this.el = document.querySelector(this.target)
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`)
        }
        this.container = this.el
      }
    },
    onScroll() {
      const scrollTop = this.el.scrollTop
      this.visible = scrollTop >= this.visibilityHeight
    },
    scrollToTop() {
      const el = this.el
      const beginTime = Date.now()
      const beginValue = el.scrollTop
      const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500
        if (progress < 1) {
          el.scrollTop = beginValue * (1 - easeInOutCubic(progress))
          rAF(frameFunc)
        } else {
          el.scrollTop = 0
        }
      }
      rAF(frameFunc)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px)
}

.mobile .fixed-header {
  width: 100%;
}

.el-backtop {
  display: block;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 6px;
  width: 53px;

}

.backBox {
  width: 100%;
  background-color: rgb(242, 245, 246);
  height: 53px;
  text-align: center;
  line-height: 53px;
  color: #be791a;
  transition: all 0.3s ease 0s;
}

.backBox:hover {
  background-color: #be791a;
  color: #ffffff;
}

.weI {
  width: 210px;
  height: 210px;
  background-color: #f2f5f6;
  -webkit-box-shadow: rgb(0 0 0 / 12%) 0px 0px 6px;
  box-shadow: rgb(0 0 0 / 12%) 0px 0px 6px;
  left: -217px;
  position: absolute;
  top: 3px;
  color: #be791a;
  transition: all 0.3s ease 0s;
  padding-top: 5px;
}

.phI {
  width: 157px;
  height: 40px;
  line-height: 40px;
  background-color: #f2f5f6;
  -webkit-box-shadow: rgb(0 0 0 / 12%) 0px 0px 6px;
  box-shadow: rgb(0 0 0 / 12%) 0px 0px 6px;
  left: -167px;
  position: absolute;
  top: 51px;
  color: #be791a;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.meI {
  width: 196px;
  height: 40px;
  line-height: 40px;
  background-color: #f2f5f6;
  -webkit-box-shadow: rgb(0 0 0 / 12%) 0px 0px 6px;
  box-shadow: rgb(0 0 0 / 12%) 0px 0px 6px;
  left: -206px;
  position: absolute;
  top: 106px;
  color: #be791a;
  -webkit-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
</style>
