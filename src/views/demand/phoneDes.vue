<template>
  <div class="pageDem flex-col">
    <div class="box_1 flex-row">
      <div class="group_1 flex-col">
        <span class="text_4">首页&gt;交易中心&gt;北京绿棚出租</span>
        <div class="block_3 flex-col">
          <span class="text_5">珠江电影网已聚集296个专业场景</span>
          <span class="text_6"></span>
          <div class="text-wrapper_1">
            <span class="text_7">浏览人数：</span>
            <span class="text_8">73</span>
          </div>
          <div class="text-wrapper_2">
            <span class="text_9">报名数量：</span>
            <span class="text_10">0</span>
          </div>
          <div class="text-wrapper_3">
            <span class="text_11">距离截止：</span>
            <span class="text_12">152天21小时29分36秒</span>
          </div>
          <div class="text-wrapper_4 flex-row">
            <span class="text_13">使用时间：</span>
            <span
              class="paragraph_1"
            >2022/09/15&nbsp;2022/09/16&nbsp;2022/09/18&nbsp;<br>2022/09/20&nbsp;2022/09/22（08:00-18:00）</span>
          </div>
        </div>
        <div class="block_4 flex-row">
          <div class="image-text_1 flex-row justify-between">
            <div class="single-avatar_1 flex-col" />
            <div class="text-group_1">
              <span class="text_14">东森演播室</span>
              <span class="text_15">0分</span>
            </div>
          </div>
          <button class="button_1 flex-col" @click="onClick_1">
            <span class="text_16">报名投标</span></button><button class="button_2 flex-col" @click="onClick_2">
            <span class="text_17" @click="handleClickCall">拨打电话</span>
          </button>
        </div>
        <div class="text-group_2 flex-col">
          <span class="text_18">场景需求</span>
          <span class="paragraph_2">北京绿棚出租，可以提供绿幕抠像，xr直播，线上虚拟发布会，<br>电商直播，电视栏目制作等服务，讯道摇壁机械摄像导播讯道拍<br>摄直播推流</span>
        </div>
        <div class="block_5 flex-col w94auto" />
        <div class="block_6 flex-col w94auto" />
        <div class="block_7 flex-col w94auto" />
        <div class="block_8 flex-col w94auto" />
        <div class="block_9 flex-row justify-between">
          <div class="image-text_2 flex-row justify-between">
            <img
              class="icon_4"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf226b5c960953998fcfa993d7a636c89dfc8592ef6af05b69cb06bacfef53fe9"
            >
            <span class="text-group_3">手机</span>
          </div>
          <div class="image-text_3 flex-row justify-between">
            <img
              class="icon_5"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7a922b6fe4aa48a6c6f695a63da1c9877b50f8cbe8d5b5ed94e3a8e09e730b69"
            >
            <span class="text-group_4">2022/10/29</span>
          </div>
          <div class="image-text_4 flex-row justify-between">
            <img
              class="icon_6"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf971e349fd751758099b7cf11caf930ef2e2496724564a7b6c5abadf7fe254d7"
            >
            <span class="text-group_5">收藏</span>
          </div>
          <div class="image-text_5 flex-row justify-between">
            <img
              class="icon_7"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc66e3fcac8b9a0fa0b46284f647c9518f7f3ed3b56bc1ff04e9b1cf5a75fbd3e"
            >
            <span class="text-group_6">举报</span>
          </div>
        </div>
        <div class="text-wrapper_5 flex-row justify-between">
          <span class="text_19">北京绿棚出租</span>
          <span class="text_20">¥3000</span>
          <span class="text_21">共收到0份投标</span>
        </div>

      </div>

    </div>
    <el-dialog title="投标信息框" class="tb_dio" :visible.sync="dialogFormVisible" width="94%">
      <el-form :model="form">
        <el-form-item label="联系方式" :label-width="formLabelWidth">
          <el-input v-model="form.lxfs" autocomplete="off" />
        </el-form-item>
        <el-form-item label="报价金额" :label-width="formLabelWidth">
          <el-input v-model="form.bjje" autocomplete="off" />
        </el-form-item>
        <el-form-item label="留言" :label-width="formLabelWidth">
          <el-input v-model="form.ly" type="textarea" autocomplete="off" />
        </el-form-item>
        <el-form-item label="图片上传" :label-width="formLabelWidth">
          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload" />
            <div class="el-upload__text">
              <em>点击上传</em>
            </div>
            <!-- <div slot="tip" class="el-upload__tip">只能上传图片</div> -->
          </el-upload>
        </el-form-item>
        <el-form-item label="视频上传" :label-width="formLabelWidth">
          <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload" />
            <div class="el-upload__text">
              <em>点击上传</em>
            </div>
            <!-- <div slot="tip" class="el-upload__tip">只能上传视频</div> -->
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="warning" @click="dialogFormVisible = false">确认投标</el-button>
      </div>
    </el-dialog>
    <el-dialog title="电话拨打" :visible.sync="centerDialogVisible" width="96%" center class="desDio">
      <span class="tc"> <i class="el-icon-phone" /> +86 1388888888888</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">呼 叫</el-button>
      </span>
    </el-dialog>
    <div class="group_3 flex-col">
      <div class="tbxx">保密信息</div>
      <span class="text_22">投标者</span>
      <div class="box_2 flex-row">
        <div class="single-avatar_2 flex-col" />
        <span class="text_23">东森演播室</span>
        <span class="text_24">报价：*****</span>
        <span class="text_25">联系方式：*****</span>
      </div>
      <span class="paragraph_3 fb3">我们是XXXX公司，在港湾区XXXXX地方有复古建筑四合院，配套民宿设施</span>
      <div class="box_3 flex-row fb3">
        <!-- :preview-src-list="srcList1" 点击的话-->
        <el-image
          class="box_4 flex-col mr10"
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fffcd6e3910c4d96a3df5d9adc53f183_mergeImage.png"
        />
        <el-image
          class="box_4 flex-col mr10"
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fffcd6e3910c4d96a3df5d9adc53f183_mergeImage.png"
        />
        <el-image
          class="box_4 flex-col mr10"
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fffcd6e3910c4d96a3df5d9adc53f183_mergeImage.png"
        />
        <el-image
          class="box_4 flex-col mr10"
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fffcd6e3910c4d96a3df5d9adc53f183_mergeImage.png"
        />
      </div>
    </div>
    <div class="group_3 flex-col">
      <div class="tbxx">保密信息</div>
      <span class="text_22">投标者</span>
      <div class="box_2 flex-row">
        <div class="single-avatar_2 flex-col" />
        <span class="text_23">东森演播室</span>
        <span class="text_24">报价：*****</span>
        <span class="text_25">联系方式：*****</span>
      </div>
      <span class="paragraph_3 fb3">我们是XXXX公司，在港湾区XXXXX地方有复古建筑四合院，配套民宿设施</span>
      <div class="box_3 flex-row fb3">
        <el-image
          class="box_4 flex-col mr10"
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fffcd6e3910c4d96a3df5d9adc53f183_mergeImage.png"
        />
        <el-image
          class="box_4 flex-col mr10"
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fffcd6e3910c4d96a3df5d9adc53f183_mergeImage.png"
        />
        <el-image
          class="box_4 flex-col mr10"
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fffcd6e3910c4d96a3df5d9adc53f183_mergeImage.png"
        />
        <el-image
          class="box_4 flex-col mr10"
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fffcd6e3910c4d96a3df5d9adc53f183_mergeImage.png"
        />
      </div>
    </div>
    <div class="group_3 flex-col">
      <div class="tbxx">保密信息</div>
      <span class="text_22">投标者</span>
      <div class="box_2 flex-row">
        <div class="single-avatar_2 flex-col" />
        <span class="text_23">东森演播室</span>
        <span class="text_24">报价：*****</span>
        <span class="text_25">联系方式：*****</span>
      </div>
      <span class="paragraph_3 fb3">我们是XXXX公司，在港湾区XXXXX地方有复古建筑四合院，配套民宿设施</span>
      <div class="box_3 flex-row fb3">
        <el-image
          class="box_4 flex-col mr10"
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fffcd6e3910c4d96a3df5d9adc53f183_mergeImage.png"
        />
        <el-image
          class="box_4 flex-col mr10"
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fffcd6e3910c4d96a3df5d9adc53f183_mergeImage.png"
        />
        <el-image
          class="box_4 flex-col mr10"
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fffcd6e3910c4d96a3df5d9adc53f183_mergeImage.png"
        />
        <el-image
          class="box_4 flex-col mr10"
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fffcd6e3910c4d96a3df5d9adc53f183_mergeImage.png"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      seen: true,
      dialogFormVisible: false,
      centerDialogVisible: false,
      hasTb: true,
      form: {
        lxfs: '',
        bjje: '',
        ly: ''
      },
      formLabelWidth: '68px',
      srcList: [

        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    }
  },
  methods: {
    onClick_1() {
      this.dialogFormVisible = true
    },
    onClick_2() {
      // alert(1)
    },
    handleClickCall() {
      this.centerDialogVisible = true
    }
  }
}
</script>
<style scoped>
.pageDem {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100% !important;
  height: 100% !important;
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  margin-bottom: -152px;
}

.box_1 {
  width: 100%;
  padding-right: 15px;
}

.group_1 {
  position: relative;
  width: 100%;
  margin-bottom: 236px;
  padding: 10px 0 18px 0;
}

.block_1 {
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

.nav-bar_1 {
  background-color: rgba(255, 255, 255, 1);
  margin-top: 15px;
  padding: 4px 15px 5px 14px;
}

.group_2 {
  margin: 3px 0 1px 0;
}

.block_2 {}

.icon_1 {
  width: 9px;
  height: 11px;
  margin: 5px 0 4px 0;
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
  margin-left: 5px;
}

.icon_2 {
  width: 6px;
  height: 4px;
  margin: 9px 0 7px 4px;
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
  margin-left: 85px;
}

.icon_3 {
  width: 24px;
  height: 24px;
  margin-left: 114px;
}

.text_4 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 15px 198px 0 15px;
}

.block_3 {
  background-color: rgba(249, 249, 249, 1);
  width: 97%;
  -ms-flex-item-align: center;
  align-self: center;
  margin-top: 47px;
  padding: 7px 29px 11px 14px;
  margin: 47px auto 0 15px;
}

.text_5 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-right: 93px;
}

.text_6 {
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 4px 23px 0 0;
}

.text-wrapper_1 {
  width: 76px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 3px 228px 0 0;
}

.text_7 {
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_8 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text-wrapper_2 {
  width: 69px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 3px 235px 0 0;
}

.text_9 {
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_10 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text-wrapper_3 {
  width: 184px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 3px 120px 0 0;
}

.text_11 {
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_12 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text-wrapper_4 {
  margin-top: 3px;
}

.text_13 {
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.paragraph_1 {
  width: 243px;
  height: 34px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  line-height: 17px;
  margin-left: -1px;
}

.block_4 {
  background-color: rgba(249, 249, 249, 1);
  width: 97%;
  -ms-flex-item-align: center;
  align-self: center;
  margin-top: 8px;
  margin-left: 0 auto;
  padding: 12px 10px 10px 11px;
  transform: translateX(9px);
}

.image-text_1 {
  width: 131px;
}

.single-avatar_1 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/7e15e97f7aaf4ac48c2b9b4a5b21aa5d_mergeImage.png);
  width: 38px;
  height: 38px;
}

.text-group_1 {
  width: 85px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 10px 0 11px 0;
}

.text_14 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_15 {
  overflow-wrap: break-word;
  color: rgba(194, 194, 194, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.button_1 {
  background-color: rgba(195, 123, 33, 1);
  margin: 7px 0 9px 36px;
  padding: 3px 14px 3px 13px;
}

.text_16 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
}

.button_2 {
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(195, 123, 33, 1);
  margin: 7px 0 9px 7px;
  padding: 3px 14px 3px 13px;
}

.text_17 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
}

.text-group_2 {
  margin: 13px 18px 0 15px;
}

.text_18 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-right: 285px;
}

.paragraph_2 {
  width: 342px;
  height: 54px;
  overflow-wrap: break-word;
  color: rgba(147, 147, 147, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  line-height: 18px;
  margin-top: 8px;
}

.block_5 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/dcc1f77f2e8d4702b82fb31efd396434_mergeImage.png);
  width: 345px;
  height: 157px;
  align-self: center;
  margin-top: 11px;
}

.w94auto {
  width: 97% !important;
  margin: 10px auto;
  transform: translateX(9px);
  background-size: cover;
}

.block_6 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/9e37bfd2f17f4fb18d3d631ca0189fb6_mergeImage.png);
  width: 345px;
  height: 157px;
  align-self: center;
  margin-top: 10px;
}

.block_7 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/81c14e387bad46199b631a11ccc94729_mergeImage.png);
  width: 345px;
  height: 157px;
  align-self: center;
  margin-top: 10px;
}

.block_8 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/5300449dd08c4a97832d862931107f89_mergeImage.png);
  width: 345px;
  height: 157px;
  align-self: center;
  margin-top: 11px;
}

.block_9 {
  width: 91%;
  align-self: center;
  margin-top: 8px;
}

.image-text_2 {
  width: 40px;
}

.icon_4 {
  width: 11px;
  height: 15px;
  margin: 1px 0 1px 0;
}

.text-group_3 {
  overflow-wrap: break-word;
  color: rgba(147, 147, 147, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.image-text_3 {
  width: 88px;
}

.icon_5 {
  width: 14px;
  height: 14px;
  margin: 2px 0 1px 0;
}

.text-group_4 {
  overflow-wrap: break-word;
  color: rgba(147, 147, 147, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.image-text_4 {
  width: 43px;
}

.icon_6 {
  width: 14px;
  height: 14px;
  margin: 2px 0 1px 0;
}

.text-group_5 {
  overflow-wrap: break-word;
  color: rgba(147, 147, 147, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.image-text_5 {
  width: 42px;
}

.icon_7 {
  width: 13px;
  height: 13px;
  margin: 2px 0 2px 0;
}

.text-group_6 {
  overflow-wrap: break-word;
  color: rgba(147, 147, 147, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text-wrapper_5 {
  background-color: rgba(246, 240, 232, 1);
  position: absolute;
  left: 15px;
  top: 46px;
  width: 97%;
  height: 40px;
  padding: 10px 14px 10px 12px;
}

.text_19 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_20 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_21 {
  overflow-wrap: break-word;
  color: rgba(164, 164, 164, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 1px;
}

.group_3 {
  background-color: rgba(249, 249, 249, 1);
    padding: 7px 13px 26px 11px;
    position: relative;
    transform: translateY(-230px);
    width: 96%;
    margin: auto;
    height: 238px;
    display: block;
    margin-top: 20px
}

.text_22 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-right: 278px;
}

.box_2 {
  margin: 12px 44px 0 0;
}

.single-avatar_2 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/f4a860c8a94448119742e15cae1b17c1_mergeImage.png);
  width: 38px;
  height: 38px;
}

.text_23 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin: 9px 0 0 7px;
}

.text_24 {
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 10px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin: 12px 0 0 11px;
}

.text_25 {
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 10px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin: 12px 0 0 17px;
}

.paragraph_3 {
  width: 100%;
  height: 34px;
  overflow-wrap: break-word;
  color: rgba(147, 147, 147, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  line-height: 17px;
  margin-top: 11px;
}

.box_3 {
  margin: 11px 3px 0 0;
}

.box_4 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/b2104d2c6f2c48e2adbff81993a984b0_mergeImage.png);
  width: 23%;
  height: 78px;
}

.box_5 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/64a105392c4f4d5ea500431012e524f0_mergeImage.png);
  width: 74px;
  height: 78px;
  margin-left: 7px;
}

.box_6 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/735cf782c91f42ef93a1eab0fbf91027_mergeImage.png);
  width: 74px;
  height: 78px;
  margin-left: 7px;
}

.box_7 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e1d342069bf74568b0862f05b45a16fb_mergeImage.png);
  width: 74px;
  height: 78px;
  margin-left: 8px;
}

.tbxx {
     z-index: 99999999;
    background: #fff;
    width: 80px;
    height: 41px;
    line-height: 38px;
    text-align: center;
    margin: 119px auto 0 auto;
    border: 2px solid;
    position: absolute;
    text-align: center;
    left: 39%;
}

div/deep/.desDio .el-dialog__body {
  text-align: center;
}

.fb3 {
  filter: blur(6px);
  -webkit-filter: blur(6px);
}

.mr10 {
  margin-right: 10px;
}
</style>

