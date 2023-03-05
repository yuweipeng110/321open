<template>
  <div class="vedio_content" :class="{ 'seenCls': !seen }">
    <div class="tc mt50">
      <h2>视频列表</h2>
    </div>
    <div v-show="seen" class="mt50 mb20">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/z4.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/z3.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/v1.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/a2.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mt20 mb50">
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/z4.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/z3.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/v1.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/a2.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mt20 mb50">
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/z4.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/z3.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/v1.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/a2.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div v-show="!seen" class="mt20 mb50 mlr10">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/v1.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/a2.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/v1.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card :body-style="{ padding: '0px' }" class="hover_box">
            <video
              :poster="require('@/assets/a2.png')"
              controls
              src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
              class="vedio_cls"
            />
            <div class="asd one_row">
              视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题视频标题
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="tc mb50">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>

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
      // console.log(clientWidth, 'this.seen')
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
.vedio_content {
  max-width: 1400px;
  margin: 0 auto;
}

.vedio_cls {
  width: -webkit-fill-available;
  height: 220px;
}

.asd {
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
}

.hover_box {
  cursor: pointer;
  transition: all 0.3s ease 0s;
}

.hover_box:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0);
}
.mlr10 {
  margin: 10px;
}
</style>
