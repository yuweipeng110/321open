<template>
  <div id="waterfall" ref="waterfall" v-loading="loading" contentHeight :style="{ height: contentHeight + 'px' }">
    <div
      v-for="(item, index) in imgsArr_c"
      :key="index"
      ref="imgBox"
      class="img-box default-card-animation"
      :style="{ width: imgWidth + 'px', height: item._height + 'px' }"
      @click="handleClick(item)"
    >
      <img :data-src="item.src">
    </div>
  </div>
</template>

<script>
import { isMobile } from '@/utils/isMobile.js'
export default {
  name: 'Waterfall',
  data() {
    return {
      loading: false,
      imgsArr: [
        {
          src: require('@/assets/img/spzy/p1.png'),
          href: 'https://www.baidu.com',
          info: '我是第一张图片',
          headerText: '测试'
        },
        {
          src: require('@/assets/img/spzy/p2.png'),
          href: 'https://www.baidu.com',
          info: '一些图片描述文字asdasdasdasdasdasasdasd',
          headerText: '测试'
        },
        {
          src: require('@/assets/img/spzy/p3.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },
        {
          src: require('@/assets/img/spzy/p4.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },

        {
          src: require('@/assets/img/spzy/p5.png'),

          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },
        {
          src: require('@/assets/img/spzy/p6.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },
        {
          src: require('@/assets/img/spzy/p7.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },
        {
          src: require('@/assets/img/spzy/p1.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },
        {
          src: require('@/assets/img/spzy/p2.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },
        {
          src: require('@/assets/img/spzy/p2.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },
        {
          src: require('@/assets/img/spzy/p2.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },
        {
          src: require('@/assets/img/spzy/p2.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },
        {
          src: require('@/assets/img/spzy/p2.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },
        {
          src: require('@/assets/img/spzy/p2.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        }
      ],
      imgsArr_c: [], // 渲染的图片
      imgCol: 3, // 图片列数
      imgGap: 5, // 图片间间隔
      loadedCount: 0,
      imgBoxEls: [], // 所有 img-box 元素
      beginIndex: 0,
      colsHeightArr: [], // 保存当前每一列的高度
      reachBottomDistance: 20, // 滚动触底距离，触发加载新图片
      viewHeight: 0, // 窗口视图大小
      contentHeight: 0
    }
  },
  computed: {
    isMobile() {
      return isMobile()
    },
    // 容器 waterfall 的宽度
    waterfallWidth() {
      return this.$refs['waterfall'].clientWidth
    },
    // 图片宽度
    imgWidth() {
      return this.colWidth - 2 * this.imgGap
    },
    // 列宽度
    colWidth() {
      return this.waterfallWidth / this.colNum
    },
    // 列数
    colNum() {
      return this.isMobile ? 2 : this.imgCol
    }
  },
  watch: {
    imgsArr(newVal, oldVal) {
      if (
        this.imgsArr_c.length > newVal.length ||
        (this.imgsArr_c.left > 0 && newVal[0] && !newVal[0]._height)
      ) {
        this.reset()
      }
      this.preLoad()
    }
  },
  mounted() {
    this.viewHeight =
      document.documentElement.clientHeight === 0
        ? document.body.clientHeight
        : document.documentElement.clientHeight
    // console.log(this.viewHeight)
    this.preLoad()
    this.scroll()
  },
  methods: {
    handleClick(item) {
      this.$router.push({
        path: '/shotDetails/details',
        query: { imgObj: item }
      })
    },
    // 预加载 设置图片宽高
    preLoad() {
      // forEach 无法通过 item 直接修改数组元素，需用数组下标修改
      this.imgsArr.forEach((item, index) => {
        if (index < this.loadedCount) {
          return
        }
        if (!item.src) {
          this.imgsArr[index]._height = '0'
          ++this.loadedCount
          if (this.imgsArr.length === this.loadedCount) {
            this.preloaded()
          }
        } else {
          const img = new Image()
          img.src = item.src
          img.onload = img.onerror = (e) => {
            // 若加载失败则设置图片高度与宽度一致，加载成功则动态计算图片高度
            this.imgsArr[index]._height =
              e.type === 'load'
                ? Math.round(this.imgWidth * (img.height / img.width))
                : this.imgWidth
            if (e.type === 'error') {
              this.imgsArr[index]._error = true
            }
            ++this.loadedCount
            if (this.imgsArr.length === this.loadedCount) {
              this.preloaded()
            }
          }
        }
      })
    },
    preloaded() {
      this.imgsArr_c = [].concat(this.imgsArr)
      this.$nextTick(() => {
        this.waterfall()
      })
    },
    // waterfall 布局
    waterfall() {
      // 等到整个视图都渲染完毕再执行
      this.imgBoxEls = this.$refs['imgBox']
      if (!this.imgBoxEls) {
        return
      }
      let top, left, height
      if (this.beginIndex === 0) {
        this.colsHeightArr = []
      }
      for (let i = this.beginIndex; i < this.imgBoxEls.length; ++i) {
        if (!this.imgBoxEls[i]) {
          return
        }
        height = this.imgBoxEls[i].offsetHeight
        // 第一行
        if (i < this.colNum) {
          this.colsHeightArr.push(height)
          top = 0
          left = i * this.colWidth
        } else {
          // 找到最低的高度和其索引
          const minHeight = Math.min.apply(null, this.colsHeightArr)
          const minIdx = this.colsHeightArr.indexOf(minHeight)
          top = minHeight
          left = minIdx * this.colWidth
          this.colsHeightArr[minIdx] += height
        }
        // 设置 img-box 位置
        this.imgBoxEls[i].style.top = top + 'px'
        this.imgBoxEls[i].style.left = (left) + 'px'
        // console.log(this.imgBoxEls[i].style.left)
        // 当前图片在窗口内，则加载
        if (top < this.viewHeight) {
          const imgEl = this.imgBoxEls[i].children[0]
          imgEl.src = imgEl.getAttribute('data-src')
          imgEl.style.opacity = 1
          imgEl.style.transform = 'scale(1)'
        }
      }
      this.beginIndex = this.imgBoxEls.length

      // console.log(this.imgsArr_c, 'imgsArr_c')
      if (this.imgsArr_c && this.imgsArr_c.length > 0) {
        // console.log(Math.ceil(this.imgsArr_c.length / 3))
        const arr = this.imgsArr_c.map(({ _height }) => _height)
        const max = Math.max(...arr)

        const contentHeight = max * Math.ceil(this.imgsArr_c.length / 3)
        // console.log(contentHeight)
        this.contentHeight = contentHeight
        // if()
      }
    },
    reset() {
      this.imgsArr_c = []
      this.beginIndex = 0
      this.loadedCount = 0
    },
    // 滚动触底事件
    scrollFn() {
      const minHeight = Math.min.apply(null, this.colsHeightArr)
      // 滚动条滚动的高度
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      // 到达最底层的高度最低的一列，则触发 handleReachBottom 方法
      if (scrollTop + this.viewHeight > minHeight - this.reachBottomDistance) {
        this.handleReachBottom()
      }
      // 图片懒加载
      this.imgBoxEls.forEach((imgBoxEl, index) => {
        const imgEl = imgBoxEl.children[0]
        // 若已加载，则跳过
        if (imgEl.src) {
          return
        }
        // 当前图片所处的高度
        let top = imgBoxEl.style.top
        top = Number.parseFloat(top.slice(0, top.length - 2))
        // 图片已到达可视范围，则加载
        if (scrollTop + this.viewHeight > top) {
          imgEl.src = imgEl.getAttribute('data-src')
          imgEl.style.opacity = 1
          imgEl.style.transform = 'scale(1)'
        }
      })
      // this.loading = true
      // setTimeout(() => {
      //   this.loading = false
      // }, 1800)
    },
    scroll() {
      window.onscroll = this.throttle(this.scrollFn, 500)
    },
    handleReachBottom() {
      const imgArr = [
        {
          src: require('@/assets/img/spzy/p1.png'),
          href: 'https://www.baidu.com',
          info: '我是第一张图片',
          headerText: '测试'
        },
        {
          src: require('@/assets/img/spzy/p2.png'),
          href: 'https://www.baidu.com',
          info: '一些图片描述文字asdasdasdasdasdasasdasd',
          headerText: '测试'
        },
        {
          src: require('@/assets/img/spzy/p3.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },
        {
          src: require('@/assets/img/spzy/p4.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },

        {
          src: require('@/assets/img/spzy/p5.png'),

          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        },
        {
          src: require('@/assets/img/spzy/p6.png'),
          href: 'https://www.baidu.com',
          info: '白色蛋壳棚带360升降转台'
        }
      ]
      this.imgsArr = this.imgsArr.concat(imgArr)
      // console.log('--this.imgsArr--', this.imgsArr)
    },
    // 节流函数
    throttle(fn, time) {
      let canRun = true
      return function() {
        if (!canRun) {
          return
        }
        canRun = false
        setTimeout(() => {
          fn.apply(this)
          canRun = true
        }, time)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#waterfall {
  width: 100%;
  position: relative;
  overflow: hidden;

  @keyframes show-card {
    0% {
      transform: scale(0.5);
    }

    100% {
      transform: scale(1);
    }
  }

  .img-box {
    position: absolute;
    border-radius: 10px;
    padding: 5px;
    padding-left: 0;

    img {
      width: 100%;
      border-radius: 10px;
      opacity: 0;
      transform: scale(0.5);
      transition: all 0.3s;
      transition-delay: 0.1s;
      transform: translateY(3px);
      height: 97%;
    }
  }

  /* .default-card-animation {
      animation: show-card 0.4s;
      transition: left 0.6s top 0.6s;
      transition-delay: 0.1s;
    } */
}

.img-box {
  cursor: pointer;
  // border: 5px solid transparent;
  box-shadow:0 2px 12px 0 rgba(218, 218, 218, 0.8);
  transition: all 0.3s ease 0s;
}

// .img-box img {
//   display: inline-block;
//   transition: all 0.1s ease 0s;
//   cursor: pointer
// }

.img-box :hover {
  box-shadow:0 2px 12px 0 rgb(18 0 0 / 80%);
}
</style>
