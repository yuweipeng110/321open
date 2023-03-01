<template>
  <div class="vedio-con" :class="{ 'seenCls': !seen }">
    <el-row :gutter="20" style="margin: 0 auto;width:1400px">
      <el-col :span="seen ? 12 : 24">
        <div class="imgcls">
          <video
            :poster="require('@/assets/v1.png')"
            style="width: 100%;height: 448.11px;"
            :src="videoUrl"
            preload="auto"
            controls="controls"
          />
        </div>

      </el-col>
      <el-col :span="seen ? 12 : 24">
        <div class="imgcls">
          <!-- <el-image class="cart_img" :src="require('@/assets/v2.png')" @click.native="handleClick(2)" /> -->
          <video
            :poster="require('@/assets/v2.png')"
            style="width: 100%;height: 448.11px;"
            src="https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_CinematicTrailer.mp4"
            preload="auto"
            controls="controls"
          />
        </div>
      </el-col>
    </el-row>
    <el-dialog title="视频精选" :visible.sync="dialogVisible" width="30%" :destroy-on-close="true" @close="closeDialog">
      <span />
      <video
        id="video"
        poster="v2.jpg"
        style="width: 100%"
        src="https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_CinematicTrailer.mp4"
        preload="auto"
        controls="controls"
        autoplay="autoplay"
      />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seen: true,
      dialogVisible: false,
      videoUrl: 'https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_CinematicTrailer.mp4'
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
    if (document.body.clientWidth > 700) {
      this.seen = true
    } else {
      this.seen = false
    }
    window.addEventListener('setItem', () => {
      const clientWidth = sessionStorage.getItem('seen')
      console.log(clientWidth, 'this.seen')
      if (clientWidth > 700) {
        this.seen = true
      } else {
        this.seen = false
      }
    })
  },
  methods: {
    handleClick() {
      this.dialogVisible = true
      this.videoUrl = 'https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_CinematicTrailer.mp4'
    },
    closeDialog() {
      this.dialogVisible = false
      this.videoUrl = '' // 清空数据 关闭视频播放
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;

}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.out img {
  width: 100%;
  height: 325px;
}

@media (min-width: 992px) {
  .el-col-lg-24-5 {
    width: 33.3%;
  }
}

@media (min-width: 1350px) {
  .el-col-lg-24-5 {
    width: 20%;
  }
}

.out {
  height: 630px;
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;
  padding-top: 90px;
  transition: all 1s ease 0s;

}

.out::before {
  transition: .5s ease-in-out;
  filter: blur(13px);
  -webkit-filter: blur(13px);
}

.cardBox {
  cursor: pointer
}

.cart_img {
  display: inline-block;
  transition: all 0.1s ease 0s;
  cursor: pointer
}

.cart_img:hover {
  transform: scale(1.05);
}

.imgcls {
  width: initial;
  height: inherit;
  overflow: hidden;
}
</style>
