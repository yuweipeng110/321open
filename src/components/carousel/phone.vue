<template>
  <div class="page flex-col">
    <div class="group_3 flex-col">
      <div class="group_9 flex-row justify-between scc">
        <el-input v-model="input2" placeholder="搜索 场景关键词、编号" class="input-with-select">
          <el-select slot="prepend" v-model="radio" placeholder="请选择">
            <el-option label="场景" value="1" />
            <el-option label="演员" value="2" />
            <el-option label="住宿" value="3" />
            <el-option label="车辆" value="3" />
            <el-option label="道具" value="3" />
            <el-option label="服装" value="3" />
          </el-select>
          <el-button slot="append" icon="el-icon-search" />
        </el-input>
      </div>
    </div>
    <div class="group_10 flex-row justify-between">
      <img
        class="thumbnail_3"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng068941b8573de10ab22212fd059d1e9a1f1c71a3edfc16f79de47ecc7d2cc071"
      >
      <span class="text_12">服务项目</span>
    </div>
    <div class="group_11 flex-row justify-between">
      <div class="section_1 flex-col">
        <div class="grid_1 flex-row">
          <div
            v-for="(item, index) in loopData0"
            :key="index"
            class="image-text_1 flex-row justify-between"
            :style="{ background: item.lanhuBg0 }"
          >
            <img class="thumbnail_4" referrerpolicy="no-referrer" :src="item.lanhuimage0">
            <span class="text-group_1" v-html="item.lanhutext0" />
          </div>
        </div>
        <button class="button_2 flex-col">
          <div class="image-text_2 flex-row justify-between">
            <img
              class="icon_5"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3da1843ec96d3846feb8c6e4067a33395a209c31fef79db822b1da51f2e34161"
            >
            <span class="text-group_2">宣发服务</span>
          </div>
        </button>
      </div>
      <button class="button_3 flex-col">
        <div class="image-text_3 flex-row justify-between">
          <img
            class="icon_6"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngff7e572f509245920fbab189195cc47c76f15aa7764cdfe68854291b745284c7"
          >
          <span class="text-group_3">剧组服务</span>
        </div>
      </button>
    </div>
    <div class="group_12 flex-row justify-between">
      <div class="block_1 flex-row">
        <div class="image-text_4 flex-row justify-between">
          <img
            class="icon_7"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5cff4bfba04c66d16ec2cc3ad4efa2aa9649e06a350c0430ad2585ea62bfaba7"
          >
          <span class="text-group_4">商户服务</span>
        </div>
      </div>
      <button class="button_4 flex-col">
        <div class="image-text_5 flex-row justify-between">
          <img
            class="icon_8"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng138a7ae69afe960dd28fe8753743f56290a35068292c67682005182371bcde29"
          >
          <span class="text-group_5">我想逛逛</span>
        </div>
      </button>
    </div>
    <div class="group_13 flex-row">
      <img
        class="thumbnail_5"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1040e389ba7b9120188c0240f04b970c8cb055799d44e181ba2d87baaa778ae9"
      >
      <span class="text_13">服务案例</span> <span class="text_14">更多</span>
      <img
        class="icon_9"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng06ce426ff6d8cbf8474a1a046bee7391a5145a5a38b2cf899613a5c6348e905d"
      >
    </div>
    <div class="group_14 flex-row justify-between">
      <div class="section_2 flex-col">
        <div class="block_2 flex-row">
          <div class="text-group_6 flex-col">
            <span class="text_15">独行月球</span>
            <span class="paragraph_1">沈腾、马丽领衔主演的<br>有关月球的电影</span>
          </div>
        </div>
      </div>
      <div class="section_3 flex-col">
        <div class="text-wrapper_1 flex-col">
          <span class="text_16">你的世界如果没有我</span>
        </div>
      </div>
    </div>
    <div class="group_15 flex-row justify-between">
      <div class="block_3 flex-col">
        <div class="text-wrapper_2 flex-col">
          <span class="text_17">长津湖之水门桥</span>
        </div>
      </div>
      <div class="block_4 flex-col">
        <div class="text-wrapper_3 flex-col">
          <span class="text_18">中国医生</span>
        </div>
      </div>
    </div>
    <div class="group_16 flex-row">
      <img
        class="thumbnail_6"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3999621c4d154422c85f8ea07b968bc17fff242eea81421b82b6bf118a28eebd"
      >
      <span class="text_19">最新资讯</span> <span class="text_20">更多</span>
      <img
        class="icon_10"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga1b4f05da7e2af93aba7838319527ca5681b602f7fd351428231f87ec7c78d53"
      >
    </div>
    <div class="group_17 flex-row justify-between" @click="handleClickTag">
      <template v-if="indexTag">
        <div class="tag_2 flex-col mr10"><span class="text_22">行业新闻</span></div>
        <div class=" tag_1 flex-col"><span class=" text_21">政策资讯</span></div>
      </template>
      <template v-else>
        <div class="tag_1 flex-col mr10"><span class="text_21">行业新闻</span></div>
        <div class="tag_2 flex-col"><span class="text_22">政策资讯</span></div>
      </template>

    </div>
    <template v-if="indexTag">
      <div class="text-wrapper_4 flex-row justify-between">
        <span class="text_23 titleTag">宣璐晒新剧开机随拍</span>
        <span class="text_24">2022/10/20</span>
      </div>
      <span class="paragraph_2">影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座,地宫，有一本远古天书，地宫里的人…</span>
      <div class="text-wrapper_5 flex-row justify-between">
        <span class="text_25 titleTag">宣璐晒新剧开机随拍</span>
        <span class="text_26">2022/10/20</span>
      </div>
      <span class="paragraph_3">影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座,地宫，有一本远古天书，地宫里的人…</span>
    </template>
    <template v-else>
      <div class="text-wrapper_4 flex-row justify-between">
        <span class="text_23 titleTag">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</span>
        <span class="text_24">2022/10/20</span>
      </div>
      <span class="paragraph_2">内容内容内容内容内容内容内容内容内容内容内容内容内容内容,内容，内容。。。。。。</span>
      <div class="text-wrapper_5 flex-row justify-between">
        <span class="text_25 titleTag">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</span>
        <span class="text_26">2022/10/20</span>
      </div>
      <span class="paragraph_2">内容内容内容内容内容内容内容内容内容内容内容内容内容内容,内容，内容。。。。。。</span>
    </template>
    <div class="group_18 flex-row">
      <img
        class="thumbnail_7"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3999621c4d154422c85f8ea07b968bc17fff242eea81421b82b6bf118a28eebd"
      >
      <span class="text_27">需求中心</span> <span class="text_28">更多</span>
      <img
        class="icon_11"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga1b4f05da7e2af93aba7838319527ca5681b602f7fd351428231f87ec7c78d53"
      >
    </div>
    <div class="group_19 flex-row">
      <div class="image-text_6 flex-row justify-between">
        <div class="single-avatar_1 flex-col" />
        <span class="text-group_7">东森演播室</span>
      </div>
      <div class="image-text_7 flex-row justify-between">
        <div class="block_5 flex-col mr10" />
        <div class="text-group_8 flex-col">
          <span class="text_29 oneRoww">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</span>
          <span class="text_30">发布时间：2022/10/18</span>
        </div>
      </div>
    </div>
    <div class="group_20 flex-row justify-between">
      <div class="group_21 flex-col mr10" />
      <div class="group_22 flex-col">
        <div class="text-group_9 flex-col">
          <span class="text_31 oneRoww">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</span>
          <span class="text_32">发布时间：2022/10/18</span>
        </div>
        <div class="image-text_8 flex-row justify-between">
          <div class="single-avatar_2 flex-col" />
          <span class="text-group_10">东森演播室</span>
        </div>
      </div>
    </div>
    <div class="group_23 flex-row">
      <img
        class="thumbnail_8"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3999621c4d154422c85f8ea07b968bc17fff242eea81421b82b6bf118a28eebd"
      >
      <span class="text_33">优质外联</span> <span class="text_34">更多</span>
      <img
        class="icon_12"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga1b4f05da7e2af93aba7838319527ca5681b602f7fd351428231f87ec7c78d53"
      >
    </div>
    <div class="group_24 flex-row">
      <el-row :gutter="5" class="w100p">
        <el-col v-for="(o, index) in 3" :key="index" :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <img
              height="160"
              class="w100p image"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            >
            <div style="padding: 5px;">
              <span class="oneRoww2w">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</span>
              <div class="bottom clearfix cjpf">
                场景 6
                <span class="gang">|</span>
                评分 3
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="group_25 flex-row">
      <img
        class="thumbnail_9"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3999621c4d154422c85f8ea07b968bc17fff242eea81421b82b6bf118a28eebd"
      >
      <span class="text_41">精选视频</span> <span class="text_42">更多</span>
      <img
        class="icon_13"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga1b4f05da7e2af93aba7838319527ca5681b602f7fd351428231f87ec7c78d53"
      >
    </div>
    <div class="group_26 flex-row justify-between">
      <el-row :gutter="5" class="w100p1">
        <el-col :span="24">
          <div class="imgcls">
            <video
              :poster="require('@/assets/v1.png')"
              class="w100p1"
              :src="videoUrl"
              preload="auto"
              controls="controls"
            />
          </div>
        </el-col>
        <el-col :span="24" class="mt20">
          <div class="imgcls">
            <video
              :poster="require('@/assets/v1.png')"
              class="w100p1"
              :src="videoUrl"
              preload="auto"
              controls="controls"
            />
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      input2: '',
      indexTag: false,
      videoUrl: 'https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_CinematicTrailer.mp4',
      loopData0: [
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc9b6976ca10dece7d308bfe8ba1abb297ac442340bc396c7d88baeefd3338f63) -2px -2px no-repeat',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng029b3b172a6c2a962f903a6afec40e84491c1afca4da9071bf1c2e268fd5ee1b',
          lanhutext0: '注册落户'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1656a68f4a0d874ed5c88f86e9ce468ced40b4364014722e03ae2755516ebd90) 0px 0px no-repeat',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng62a80c6b1f8a15df6dc9547e4b58eac13f90148d6ee09872a3cf559c8c07561e',
          lanhutext0: '影视资源'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga8aae25b6c110b95e50662239da4ddbc12da18fe7e68b8363b061c1d7df75295) 0px 0px no-repeat',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3aff4ae8cea27d906c8392a2854665dd634a380bf4a9b7773455359d8b01b81b',
          lanhutext0: '影视策划'
        },
        {
          lanhuBg0:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng55a64edc2ef7a2171255f1758df4517c6c06a0dbec36f4885bb9c2afd408dbf1) 0px 0px no-repeat',
          lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdfb66ace94f8dd53eb554c1ae61096cfbb86f2b966f1990cb4bcb2bbf583c45e',
          lanhutext0: '版权服务'
        }
      ],
      constants: {}
    }
  },
  methods: {

    handleClickTag() {
      this.indexTag = !this.indexTag
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
  width: 375px;
  margin-top: 15px;
  padding-right: 15px;
}

.nav-bar_1 {
  width: 374px;
  height: 48px;
  margin: -8px 0 -7px 0;
}

.icon_1 {
  width: 9px;
  height: 11px;
  margin: 12px 0 10px -360px;
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
  margin: 7px 0 0 5px;
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
  margin: 4px 0 0 103px;
}

.icon_3 {
  width: 24px;
  height: 24px;
  margin: 4px 0 5px 93px;
}

.icon_4 {
  width: 24px;
  height: 24px;
  margin: 4px 0 5px 14px;
}

.group_3 {
  background-color: rgba(244, 244, 244, 1);
  width: 91%;
  align-self: center;
  margin-top: 14px;
  padding: 6px 5px 7px 5px;
}

.group_4 {
  margin-right: 49px;
}

.thumbnail_1 {
  width: 8px;
  height: 8px;
  margin: 5px 0 4px 0;
}

.text_4 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-left: 3px;
}

.group_5 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  width: 8px;
  height: 8px;
  border: 1px solid rgba(195, 123, 33, 1);
  margin: 5px 0 4px 10px;
}

.text_5 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-left: 2px;
}

.group_6 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  width: 8px;
  height: 8px;
  border: 1px solid rgba(195, 123, 33, 1);
  margin: 5px 0 4px 10px;
}

.text_6 {
  overflow-wrap: break-word;
  color: rgba(139, 139, 139, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-left: 3px;
}

.group_7 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  width: 8px;
  height: 8px;
  border: 1px solid rgba(195, 123, 33, 1);
  margin: 5px 0 4px 10px;
}

.text_7 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-left: 2px;
}

.group_8 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  width: 8px;
  height: 8px;
  border: 1px solid rgba(195, 123, 33, 1);
  margin: 5px 0 4px 10px;
}

.text_8 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-left: 3px;
}

.thumbnail_2 {
  width: 8px;
  height: 8px;
  margin: 5px 0 4px 10px;
}

.text_9 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-left: 2px;
}

.group_9 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2px;
  width: 312px;
  margin: 5px auto;
}

.group_9 div/deep/.el-input__inner {
  height: 32px;
}

.group_9 div/deep/.el-input-group__append,
.el-input-group__prepend {
  background-color: #c37b21;
  color: #ffffff;
  border: none
}

.text_10 {
  overflow-wrap: break-word;
  color: rgba(130, 130, 130, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 5px;
}

.button_1 {
  background-color: rgba(195, 123, 33, 1);
  border-radius: 0px 2px 2px 0px;
  padding: 4px 20px 5px 21px;
}

.text_11 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.group_10 {
  width: 68px;
  margin: 12px 292px 0 15px;
}

.thumbnail_3 {
  width: 2px;
  height: 12px;
  margin: 5px 0 4px 0;
}

.text_12 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 15px;
  letter-spacing: 0.25px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 21px;
}

.group_11 {
  width: 340px;
  align-self: center;
  margin-top: 10px;
}

.section_1 {}

.grid_1 {
  width: 165px;
  height: 74px;
  flex-wrap: wrap;
}

.image-text_1 {
  width: 80px;
  height: 34px;
  background-size: 88px 43px;
  margin: 0 5px 0 0;
  padding: 10px 8px 8px 8px;
}

.image-text_1:nth-child(2n) {
  margin-right: 0;
}

.image-text_1:nth-last-child(-n + 2) {
  margin-bottom: 0;
}

.thumbnail_4 {
  width: 11px;
  height: 10px;
  margin: 2px 0 4px 0;
}

.text-group_1 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 11px;
  letter-spacing: 0.519444465637207px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
}

.button_2 {
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9880b5ad401419ff1c23cf1b56174da07691337557ba4ffbe6b0b8a7638044c6) 0px 0px no-repeat;
  background-size: 165px 35px;
  margin-top: 0;
  padding: 9px 52px 7px 52px;
}

.image-text_2 {
  width: 59px;
}

.icon_5 {
  width: 9px;
  height: 10px;
  margin: 2px 0 4px 0;
}

.text-group_2 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 11px;
  letter-spacing: 0.519444465637207px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
}

.button_3 {
  background-color: rgba(246, 240, 232, 1);
  margin-bottom: 4px;
  padding: 41px 29px 40px 26px;
}

.image-text_3 {
  width: 108px;
}

.icon_6 {
  width: 27px;
  height: 27px;
}

.text-group_3 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 15px;
  letter-spacing: 0.7083333134651184px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 21px;
  margin-top: 3px;
}

.group_12 {
  width: 340px;
  align-self: center;
  margin-top: 10px;
  transform: translateY(-9px);
}

.block_1 {
  background-color: rgba(246, 240, 232, 1);
  padding: 43px 30px 41px 28px;
}

.image-text_4 {
  width: 107px;
}

.icon_7 {
  width: 28px;
  height: 26px;
}

.text-group_4 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 15px;
  letter-spacing: 0.7083333134651184px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 21px;
  margin-top: 2px;
}

.button_4 {
  background-color: rgba(246, 240, 232, 1);
  padding: 38px 29px 37px 26px;
}

.image-text_5 {
  width: 108px;
}

.icon_8 {
  width: 28px;
  height: 33px;
}

.text-group_5 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 15px;
  letter-spacing: 0.7083333134651184px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 21px;
  margin-top: 6px;
}

.group_13 {
  margin: 21px 17px 0 15px;
}

.thumbnail_5 {
  width: 2px;
  height: 12px;
  margin: 4px 0 5px 0;
}

.text_13 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 15px;
  letter-spacing: 0.25px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 21px;
  margin-left: 5px;
}

.text_14 {
  overflow-wrap: break-word;
  color: rgba(145, 145, 145, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin: 1px 0 0 69%;
}

.icon_9 {
  width: 4px;
  height: 8px;
  margin: 7px 0 6px 2px;
}

.group_14 {
  width: 340px;
  align-self: center;
  margin-top: 15px;
}

.section_2 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/749f27a0fb574b1a9987369bc774b131_mergeImage.png);
}

.block_2 {
  background-color: rgba(0, 0, 0, 0.19);
  padding: 81px 17px 103px 17px;
}

.text-group_6 {}

.text_15 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  align-self: center;
}

.paragraph_1 {
  width: 133px;
  height: 36px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-weight: NaN;
  text-align: center;
  line-height: 18px;
  margin-top: 6px;
}

.section_3 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/3e5b75e3147b402ca94123e35f6e3ae0_mergeImage.png);
}

.text-wrapper_1 {
  background-color: rgba(0, 0, 0, 0.19);
  padding: 117px 28px 110px 29px;
}

.text_16 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.group_15 {
  width: 340px;
  align-self: center;
  margin-top: 11px;
}

.block_3 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/0cf5432143f34d6c8250ac10f89a957f_mergeImage.png);
}

.text-wrapper_2 {
  background-color: rgba(0, 0, 0, 0.19);
  padding: 118px 40px 109px 41px;
}

.text_17 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 17px;
}

.block_4 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/cc2ce62f07ea4942858cf5221eeb8f3a_mergeImage.png);
}

.text-wrapper_3 {
  background-color: rgba(0, 0, 0, 0.19);
  padding: 117px 59px 110px 59px;
}

.text_18 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 17px;
}

.group_16 {
  margin: 26px 17px 0 15px;
}

.thumbnail_6 {
  width: 2px;
  height: 12px;
  margin: 4px 0 5px 0;
}

.text_19 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 15px;
  letter-spacing: 0.25px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 21px;
  margin-left: 5px;
}

.text_20 {
  overflow-wrap: break-word;
  color: rgba(145, 145, 145, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin: 1px 0 0 69%;
}

.icon_10 {
  width: 4px;
  height: 8px;
  margin: 5px 0 5px 2px;
}

.group_17 {
  width: 125px;
  margin: 11px 235px 0 15px;
}

.tag_1 {
  background-color: rgba(195, 123, 33, 1);
  border-radius: 4px;
  padding: 5px 10px 5px 9px;
}

.text_21 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
}

.tag_2 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 4px;
  padding: 5px 9px 5px 10px;
}

.text_22 {
  overflow-wrap: break-word;
  color: rgba(145, 145, 145, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 14px;
}

.text-wrapper_4 {
  width: 94%;
  margin: 10px 16px 0 15px;
}

.text_23 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 20px;
}

.text_24 {
  overflow-wrap: break-word;
  color: rgba(151, 151, 151, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 3px;
}

.paragraph_2 {
  width: 95%;
  height: 34px;
  overflow-wrap: break-word;
  color: rgba(151, 151, 151, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  line-height: 17px;
  margin: 3px 18px 0 15px;
}

.text-wrapper_5 {
  width: 94%;
  margin: 10px 16px 0 15px;
}

.text_25 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  line-height: 20px;
}

.text_26 {
  overflow-wrap: break-word;
  color: rgba(151, 151, 151, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 3px;
}

.paragraph_3 {
  width: 342px;
  height: 34px;
  overflow-wrap: break-word;
  color: rgba(151, 151, 151, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  line-height: 17px;
  margin: 3px 18px 0 15px;
}

.group_18 {
  margin: 20px 17px 0 15px;
}

.thumbnail_7 {
  width: 2px;
  height: 12px;
  margin: 4px 0 5px 0;
}

.text_27 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 15px;
  letter-spacing: 0.25px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 21px;
  margin-left: 5px;
}

.text_28 {
  overflow-wrap: break-word;
  color: rgba(145, 145, 145, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin: 1px 0 0 69%;
}

.icon_11 {
  width: 4px;
  height: 8px;
  margin: 5px 0 5px 2px;
}

.group_19 {
  position: relative;
  margin: 10px 70px 0 15px;
  padding: 56px 59px 6px 130px;
}

.image-text_6 {
  width: 101px;
}

.single-avatar_1 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/9c72783ef92b4dd6a75bb338e0efde83_mergeImage.png);
  width: 28px;
  height: 28px;
}

.text-group_7 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 5px;
}

.image-text_7 {
  position: absolute;
  left: 0;
  top: 0;
  width: 290px;
  height: 90px;
}

.block_5 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/597a52e73123414a878b040c9013cd3b_mergeImage.png);
  width: 123px;
  height: 90px;
}

.text-group_8 {
  margin: 6px 0 45px 0;
}

.text_29 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_30 {
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 2px 32px 0 0;
}

.group_20 {
  width: 290px;
  margin: 10px 70px 0 15px;
}

.group_21 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/06c1943e576c45a4bcb6cafae0b5156a_mergeImage.png);
  width: 123px;
  height: 90px;
}

.group_22 {
  margin: 6px 0 6px 0;
}

.text-group_9 {}

.text_31 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_32 {
  overflow-wrap: break-word;
  color: rgba(153, 153, 153, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 2px 32px 0 0;
}

.image-text_8 {
  width: 101px;
  margin: 11px 59px 0 0;
}

.single-avatar_2 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/79c747b4153046e5a36584c001db4d1a_mergeImage.png);
  width: 28px;
  height: 28px;
}

.text-group_10 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
  margin-top: 5px;
}

.group_23 {
  margin: 19px 17px 0 15px;
}

.thumbnail_8 {
  width: 2px;
  height: 12px;
  margin: 4px 0 5px 0;
}

.text_33 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 15px;
  letter-spacing: 0.25px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 21px;
  margin-left: 5px;
}

.text_34 {
  overflow-wrap: break-word;
  color: rgba(145, 145, 145, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin: 1px 0 0 69%;
}

.icon_12 {
  width: 4px;
  height: 8px;
  margin: 5px 0 5px 2px;
}

.group_24 {
  margin: 9px auto;
  transform: translateX(3px);
  width: 95%;
}

.block_6 {
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.18);
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/7f6b2f01df7d4e579661cb6acfd9bb97_mergeImage.png);
  padding: 138px 19px 7px 6px;
}

.text-group_11 {}

.text_35 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_36 {
  overflow-wrap: break-word;
  color: rgba(158, 158, 158, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin: 1px 15px 0 0;
}

.block_7 {
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.18);
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/409603afd99043189e32b890de36f4f5_mergeImage.png);
  margin-left: 5px;
  padding: 138px 16px 7px 9px;
}

.text-group_12 {}

.text_37 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_38 {
  overflow-wrap: break-word;
  color: rgba(158, 158, 158, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin: 1px 15px 0 0;
}

.block_8 {
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.18);
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/383d9fc39ab74fdc976b171a9fc52133_mergeImage.png);
  margin-left: 6px;
  padding: 138px 17px 7px 8px;
}

.text-group_13 {}

.text_39 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_40 {
  overflow-wrap: break-word;
  color: rgba(158, 158, 158, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin: 1px 15px 0 0;
}

.group_25 {
  margin: 20px 17px 0 15px;
}

.thumbnail_9 {
  width: 2px;
  height: 12px;
  margin: 4px 0 5px 0;
}

.text_41 {
  overflow-wrap: break-word;
  color: rgba(7, 7, 7, 1);
  font-size: 15px;
  letter-spacing: 0.25px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 21px;
  margin-left: 5px;
}

.text_42 {
  overflow-wrap: break-word;
  color: rgba(145, 145, 145, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin: 1px 0 0 69%;
}

.icon_13 {
  width: 4px;
  height: 8px;
  margin: 5px 0 5px 2px;
}

.group_26 {
  width: 93%;
  margin: 9px auto;
}

.group_27 {
  background: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/08940f8ae2e1401aa9b91c8cf8a88f6c_mergeImage.png) 100% no-repeat;
  background-size: 100% 100%;
  padding-top: 37px;
}

.icon_14 {
  width: 23px;
  height: 23px;
  margin: 0 74px 0 72px;
}

.tag_3 {
  background-color: rgba(0, 0, 0, 0.43);
  margin-top: 27px;
  padding: 3px 23px 3px 23px;
}

.text_43 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 17px;
}

.group_28 {
  background: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/b9b007d09f6f44938ab132d35ed350f6_mergeImage.png) 100% no-repeat;
  background-size: 100% 100%;
  padding-top: 37px;
}

.icon_15 {
  width: 23px;
  height: 23px;
  margin: 0 74px 0 72px;
}

.text-wrapper_6 {
  background-color: rgba(0, 0, 0, 0.43);
  margin-top: 27px;
  padding: 3px 34px 3px 34px;
}

.text_44 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 17px;
}

.group_29 {
  background-color: rgba(46, 46, 46, 0.338);
  position: absolute;
  left: 17px;
  top: 72px;
  width: 47px;
  height: 79px;
  padding: 11px 11px 5px 11px;
}

.text-group_14 {}

.text_45 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_46 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 6px;
}

.text_47 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 6px;
}

.group_4 .el-radio {
  margin-right: 2px;
}

.group_4 div/deep/.el-radio__label {
  font-size: 14px;
  padding-left: 6px;
}

div/deep/.el-radio__input.is-checked .el-radio__inner {
  border-color: rgba(195, 123, 33, 1);
  background: rgba(195, 123, 33, 1)
}

div/deep/.el-radio__input.is-checked+.el-radio__label {
  color: rgba(195, 123, 33, 1)
}

.titleTag {
  max-width: 241px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.oneRoww {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 12.8rem;
}

@media only screen and (min-width: 375px) and (max-width: 385px) {

  .oneRoww {
    width: 13.8rem;
  }
}
@media only screen and (min-width: 386px) and (max-width: 399px) {

  .oneRoww {
    width: 14.8rem;
  }
}
@media only screen and (min-width: 400px) and (max-width: 417px) {

  .oneRoww {
        width: 16.2rem;
  }
}
@media only screen and (min-width: 418px) and (max-width: 425px) {

  .oneRoww {
        width: 18.2rem;
  }
}
@media only screen and (min-width: 426px) and (max-width: 450px) {

  .oneRoww {
        width: 19.2rem;
  }
}

.oneRoww2w {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 6rem;
  font-size: 0.8rem;
  display: inline-block;
}

.mr10 {
  margin-right: 10px;
}

.w100p {
  width: 100%;
}

.w100p1 {
  width: 102%;
}

.cjpf {
  font-size: 0.6rem;
  text-align: left;
  color: #9E9E9E;
}

.gang {
  margin: 0 0.6rem;
}

.imgcls {
  width: initial;
  height: inherit;
  overflow: hidden;
}

.scc div/deep/.el-input-group__prepend {
  width: 70px;
}

.scc div/deep/.el-input__icon {
  height: 100%;
  width: 10px;
  line-height: 32px;
}

.scc div/deep/.el-input--suffix .el-input__inner {
  padding-right: 20px;
}

.scc div/deep/.el-input .el-select__caret.is-reverse {
  transform: translateX(-5px);
}

@media only screen and (min-width: 390px) and (max-width: 400px) {

  .group_11,
  .group_12,
  .group_14,
  .group_15 {
    transform: scale(1.05);
  }

  .group_15 {
    margin-top: 18px;
  }
}

@media only screen and (min-width: 401px) and (max-width: 480px) {

  .group_11,
  .group_12,
  .group_14,
  .group_15 {
    transform: scale(1.1);
  }

  .group_15 {
    margin-top: 28px;
  }
}
.image{
  height: 50%;
}
</style>
