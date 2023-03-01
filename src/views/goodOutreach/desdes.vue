<template>
  <div class="page flex-col">
    <div class="section_2 flex-row justify-between">
      <div class="single-avatar_1 flex-col" />
      <div class="box_2 flex-col">
        <div class="section_3 flex-row">
          <div class="box_3 flex-col">
            <span class="text_4">工厂影像空间</span>
            <div class="section_4 flex-row">
              <img
                class="thumbnail_1"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngeedca7beafdb6c44b4e1f4db4dc09e361a6900b1e6a1c370b2ca18d4ec95fd71"
              >
              <span class="text_5">实名认证</span>
              <img
                class="thumbnail_2"
                referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng46edce5b9fc367a4a52f897dad9d175302a2a94e9e3d3781921e2e9b4d6120d7"
              >
            </div>
          </div>
          <div class="box_4 flex-col">
            <img
              class="thumbnail_3"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng83603c5b1b5d035fddaf87d16cf01172a09bbbe3a930a41a571a80e1c9d76bda"
            >
            <span class="text_6">企业认证</span>
          </div>
          <button class="button_1 flex-col" @click="onClick_1">
            <span class="text_7">关注</span>
          </button>
          <div class="text-wrapper_1 flex-col" @click="handleClickCall">
            <span class="text_8">拨打电话</span>
          </div>
        </div>
        <span
          class="text_9"
        >6场景&nbsp;｜&nbsp;2粉丝&nbsp;｜&nbsp;0关注&nbsp;｜&nbsp;60%好评&nbsp;｜&nbsp;3.0分&nbsp;｜&nbsp;0评论</span>
      </div>
    </div>
    <div class="section_5 flex-row">
      <div class="image-text_1 flex-row justify-between">
        <img
          class="icon_4"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7651daf0a2139a7133583f79d15aa840fb5fb849b9b7816bdd102cb7e41e917c"
        >
        <span class="text-group_1">分类</span>
      </div>
      <div class="text-wrapper_2 flex-col">
        <span class="text_10" :class="{ 'active': tabtn === 0 }" @click="handle(0)">全部(6)</span>
      </div>
      <div class="text-wrapper_3 flex-col">
        <span class="text_11" :class="{ 'active': tabtn === 1 }" @click="handle(1)">棚(6)</span>
      </div>
    </div>
    <div v-if="hasFiest" class="section_10 flex-col card_hover">
      <div class="group_2 flex-row">
        <div class="tag_4 flex-col">
          <span class="text_30">C2&nbsp;studio</span>
        </div>
      </div>
      <div class="group_3 flex-row">
        <div class="text-group_5 flex-col">
          <span class="text_31">工厂影像空间</span>
          <div class="text-wrapper_7">
            <span class="text_32">¥</span> <span class="text_33">3000</span>
            <span class="text_34">/天</span>
          </div>
          <span class="text_35">5分｜0条评论</span>
        </div>
      </div>
    </div>
    <div v-if="hasFiest" class="section_11 flex-row card_hover">
      <div class="group_4 flex-col g4p">
        <div class="tag_5 flex-col">
          <span class="text_36">C2&nbsp;studio</span>
        </div>
        <div class="text-group_6 flex-col">
          <span class="text_37">工厂影像空间</span>
          <div class="text-wrapper_8">
            <span class="text_38">¥</span> <span class="text_39">3000</span>
            <span class="text_40">/天</span>
          </div>
          <span class="text_41">5分｜0条评论</span>
        </div>
      </div>
      <div class="group_5 flex-col  g4p">
        <div class="tag_6 flex-col">
          <span class="text_42">C2&nbsp;studio</span>
        </div>
        <div class="text-group_7 flex-col">
          <span class="text_43">工厂影像空间</span>
          <div class="text-wrapper_9">
            <span class="text_44">¥</span> <span class="text_45">3000</span>
            <span class="text_46">/天</span>
          </div>
          <span class="text_47">5分｜0条评论</span>
        </div>
      </div>
      <div class="group_6 flex-col  g4p">
        <div class="tag_7 flex-col">
          <span class="text_48">C2&nbsp;studio</span>
        </div>
        <div class="text-group_8 flex-col">
          <span class="text_49">工厂影像空间</span>
          <div class="text-wrapper_10">
            <span class="text_50">¥</span> <span class="text_51">3000</span>
            <span class="text_52">/天</span>
          </div>
          <span class="text_53">5分｜0条评论</span>
        </div>
      </div>
    </div>
    <div v-if="hasFiest" class="section_11 flex-row card_hover">
      <div class="group_4 flex-col g4p">
        <div class="tag_5 flex-col">
          <span class="text_36">C2&nbsp;studio</span>
        </div>
        <div class="text-group_6 flex-col">
          <span class="text_37">工厂影像空间</span>
          <div class="text-wrapper_8">
            <span class="text_38">¥</span> <span class="text_39">3000</span>
            <span class="text_40">/天</span>
          </div>
          <span class="text_41">5分｜0条评论</span>
        </div>
      </div>
      <div class="group_5 flex-col  g4p">
        <div class="tag_6 flex-col">
          <span class="text_42">C2&nbsp;studio</span>
        </div>
        <div class="text-group_7 flex-col">
          <span class="text_43">工厂影像空间</span>
          <div class="text-wrapper_9">
            <span class="text_44">¥</span> <span class="text_45">3000</span>
            <span class="text_46">/天</span>
          </div>
          <span class="text_47">5分｜0条评论</span>
        </div>
      </div>
      <div class="group_6 flex-col  g4p">
        <div class="tag_7 flex-col">
          <span class="text_48">C2&nbsp;studio</span>
        </div>
        <div class="text-group_8 flex-col">
          <span class="text_49">工厂影像空间</span>
          <div class="text-wrapper_10">
            <span class="text_50">¥</span> <span class="text_51">3000</span>
            <span class="text_52">/天</span>
          </div>
          <span class="text_53">5分｜0条评论</span>
        </div>
      </div>
    </div>
    <div v-if="hasFiest" class="section_11 flex-row card_hover">
      <div class="group_4 flex-col g4p">
        <div class="tag_5 flex-col">
          <span class="text_36">C2&nbsp;studio</span>
        </div>
        <div class="text-group_6 flex-col">
          <span class="text_37">工厂影像空间</span>
          <div class="text-wrapper_8">
            <span class="text_38">¥</span> <span class="text_39">3000</span>
            <span class="text_40">/天</span>
          </div>
          <span class="text_41">5分｜0条评论</span>
        </div>
      </div>
      <div class="group_5 flex-col  g4p">
        <div class="tag_6 flex-col">
          <span class="text_42">C2&nbsp;studio</span>
        </div>
        <div class="text-group_7 flex-col">
          <span class="text_43">工厂影像空间</span>
          <div class="text-wrapper_9">
            <span class="text_44">¥</span> <span class="text_45">3000</span>
            <span class="text_46">/天</span>
          </div>
          <span class="text_47">5分｜0条评论</span>
        </div>
      </div>
      <div class="group_6 flex-col  g4p">
        <div class="tag_7 flex-col">
          <span class="text_48">C2&nbsp;studio</span>
        </div>
        <div class="text-group_8 flex-col">
          <span class="text_49">工厂影像空间</span>
          <div class="text-wrapper_10">
            <span class="text_50">¥</span> <span class="text_51">3000</span>
            <span class="text_52">/天</span>
          </div>
          <span class="text_53">5分｜0条评论</span>
        </div>
      </div>
    </div>
    <div v-if="!hasFiest" class="section_10 flex-col card_hover">
      <div class="group_2 flex-row">
        <div class="tag_4 flex-col">
          <span class="text_30">C2&nbsp;studio</span>
        </div>
      </div>
      <div class="group_3 flex-row">
        <div class="text-group_5 flex-col">
          <span class="text_31">工厂影像空间</span>
          <div class="text-wrapper_7">
            <span class="text_32">¥</span> <span class="text_33">3000</span>
            <span class="text_34">/天</span>
          </div>
          <span class="text_35">5分｜0条评论</span>
        </div>
      </div>
    </div>
    <div v-if="!hasFiest" class="section_11 flex-row card_hover">
      <div class="group_4 flex-col g4p">
        <div class="tag_5 flex-col">
          <span class="text_36">C2&nbsp;studio</span>
        </div>
        <div class="text-group_6 flex-col">
          <span class="text_37">工厂影像空间</span>
          <div class="text-wrapper_8">
            <span class="text_38">¥</span> <span class="text_39">3000</span>
            <span class="text_40">/天</span>
          </div>
          <span class="text_41">5分｜0条评论</span>
        </div>
      </div>
      <div class="group_5 flex-col  g4p">
        <div class="tag_6 flex-col">
          <span class="text_42">C2&nbsp;studio</span>
        </div>
        <div class="text-group_7 flex-col">
          <span class="text_43">工厂影像空间</span>
          <div class="text-wrapper_9">
            <span class="text_44">¥</span> <span class="text_45">3000</span>
            <span class="text_46">/天</span>
          </div>
          <span class="text_47">5分｜0条评论</span>
        </div>
      </div>
      <div class="group_6 flex-col  g4p">
        <div class="tag_7 flex-col">
          <span class="text_48">C2&nbsp;studio</span>
        </div>
        <div class="text-group_8 flex-col">
          <span class="text_49">工厂影像空间</span>
          <div class="text-wrapper_10">
            <span class="text_50">¥</span> <span class="text_51">3000</span>
            <span class="text_52">/天</span>
          </div>
          <span class="text_53">5分｜0条评论</span>
        </div>
      </div>
    </div>

    <el-dialog title="电话拨打" :visible.sync="centerDialogVisible" width="96%" center class="desDio">
      <span class="tc"> <i class="el-icon-phone" /> +86 1388888888888</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">呼 叫</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabtn: '',
      hasFiest: true,
      constants: {},
      centerDialogVisible: false
    }
  },
  methods: {
    onClick_1() {
      // alert(1)
    },
    handle(val) {
      this.tabtn = val
      if (val === 0) {
        this.hasFiest = false
      } else {
        this.hasFiest = true
      }
    },
    handleClickCall() {
      this.centerDialogVisible = true
    }
  }
}
</script>
<style scoped>
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 10px 0 37px 0;
}

.section_2 {
  background-color: rgba(249, 249, 249, 1);
  width: 94%;
  align-self: center;
  margin-top: 19px;
  padding: 15px 7px 13px 7px;
}

.single-avatar_1 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/d1577cc1ab574234a657b0af0b10ab7d_mergeImage.png);
  width: 38px;
  height: 38px;
  margin: 12px 0 10px 0;
}

.box_2 {}

.section_3 {
  margin-right: 1px;
}

.box_3 {}

.text_4 {
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

.section_4 {
  margin: 3px 1px 0 0;
}

.thumbnail_1 {
  width: 11px;
  height: 8px;
  margin: 5px 0 4px 0;
}

.text_5 {
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-left: 4px;
}

.thumbnail_2 {
  width: 9px;
  height: 9px;
  margin: 4px 0 4px 12px;
}

.box_4 {
  margin: 7px 0 0 3px;
}

.thumbnail_3 {
  width: 8px;
  height: 8px;
  margin: 0 40px 0 1px;
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
  margin-top: 8px;
}

.button_1 {
  background-color: rgba(195, 123, 33, 1);
  margin: 7px 0 11px 42px;
  padding: 3px 13px 3px 14px;
}

.text_7 {
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

.text-wrapper_1 {
  background-color: rgba(255, 255, 255, 1);
  border: 0.5px solid rgba(195, 123, 33, 1);
  margin: 7px 0 11px 5px;
  padding: 3.5px 3.5px 3.5px 4.5px;
}

.text_8 {
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

.text_9 {
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 11px;
  letter-spacing: 0.18333333730697632px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
  margin-top: 4px;
}

.section_5 {
  margin: 18px 152px 0 15px;
}

.image-text_1 {
  width: 50px;
  margin: 2px 0 2px 0;
}

.icon_4 {
  width: 17px;
  height: 17px;
  margin: 1px 0 2px 0;
}

.text-group_1 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text-wrapper_2 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 23px;
  margin-left: 8px;
  padding: 3px 14px 4px 15px;
}

.text_10 {
  overflow-wrap: break-word;

  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 17px;
}

.active {
  color: rgba(195, 123, 33, 1) !important;
}

.text-wrapper_3 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 23px;
  margin-left: 10px;
  padding: 3px 21px 4px 21px;
}

.text_11 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 17px;
}

.section_6 {
  width: 345px;
  align-self: center;
  margin-top: 15px;
}

.section_7 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/8185edfe3fbf47a89805c1a838c39f87_mergeImage.png);
  padding: 0 24px 6px 0;
}

.tag_1 {
  background-color: rgba(207, 119, 0, 1);
  margin-right: 31px;
  padding: 2px 3px 2px 4px;
}

.text_12 {
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

.text-group_2 {
  margin: 67px 0 0 6px;
}

.text_13 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text-wrapper_4 {
  width: 56px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 2px 24px 0 0;
}

.text_14 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_15 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_16 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_17 {
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin: 2px 16px 0 0;
}

.section_8 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/09a933a13c5d45ca9c397a115991cd41_mergeImage.png);
  margin-left: 8px;
  padding: 0 24px 6px 0;
}

.tag_2 {
  background-color: rgba(207, 119, 0, 1);
  margin-right: 31px;
  padding: 2px 4px 2px 3px;
}

.text_18 {
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

.text-group_3 {
  margin: 67px 0 0 6px;
}

.text_19 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text-wrapper_5 {
  width: 56px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 2px 24px 0 0;
}

.text_20 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_21 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_22 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_23 {
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin: 2px 16px 0 0;
}

.section_9 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/919a59037ad14e559a1d8601a272b8a1_mergeImage.png);
  margin-left: 7px;
  padding: 0 24px 6px 0;
}

.tag_3 {
  background-color: rgba(207, 119, 0, 1);
  margin-right: 31px;
  padding: 2px 3px 2px 4px;
}

.text_24 {
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

.text-group_4 {
  margin: 67px 0 0 6px;
}

.text_25 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text-wrapper_6 {
  width: 56px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 2px 24px 0 0;
}

.text_26 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_27 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_28 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_29 {
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin: 2px 16px 0 0;
}

.section_10 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/2f70299367254b03bbd14713e68b1c0e_mergeImage.png);
  align-self: center;
  margin-top: 6px;
  width: 345px;
  padding: 0 14px 22px 0;
}

.group_2 {
  margin-right: 276px;
}

.tag_4 {
  background-color: rgba(207, 119, 0, 1);
  padding: 2px 4px 2px 3px;
}

.text_30 {
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

.group_3 {
  margin: 7px 0 0 251px;
}

.text-group_5 {}

.text_31 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text-wrapper_7 {
  width: 61px;
  height: 18px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.21666666865348816px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
  margin: 8px 19px 0 0;
}

.text_32 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 13px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text_33 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 13px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text_34 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 13px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text_35 {
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 11px;
  letter-spacing: 0.18333333730697632px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
  margin: 13px 10px 0 0;
}

.section_11 {
  width: 345px;
  align-self: center;
  margin-top: 9px;

}

.group_4 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e491e560e3354b68992c779c2f12da43_mergeImage.png);
  padding: 0 24px 6px 0;
}

.tag_5 {
  background-color: rgba(207, 119, 0, 1);
  margin-right: 31px;
  padding: 2px 3px 2px 4px;
}

.text_36 {
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

.text-group_6 {
  margin: 67px 0 0 6px;
}

.text_37 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text-wrapper_8 {
  width: 56px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 2px 24px 0 0;
}

.text_38 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_39 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_40 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_41 {
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin: 2px 16px 0 0;
}

.group_5 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/3880df03c0bb48f9a9b99f29dbe6cef3_mergeImage.png);
  margin-left: 8px;
  padding: 0 24px 6px 0;
}

.tag_6 {
  background-color: rgba(207, 119, 0, 1);
  margin-right: 31px;
  padding: 2px 4px 2px 3px;
}

.text_42 {
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

.text-group_7 {
  margin: 67px 0 0 6px;
}

.text_43 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text-wrapper_9 {
  width: 56px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 2px 24px 0 0;
}

.text_44 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_45 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_46 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_47 {
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin: 2px 16px 0 0;
}

.group_6 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/502cb9e6abe046d79b03a0c6b7823cef_mergeImage.png);
  margin-left: 7px;
  padding: 0 24px 6px 0;
}

.tag_7 {
  background-color: rgba(207, 119, 0, 1);
  margin-right: 31px;
  padding: 2px 3px 2px 4px;
}

.text_48 {
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

.text-group_8 {
  margin: 67px 0 0 6px;
}

.text_49 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text-wrapper_10 {
  width: 56px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 2px 24px 0 0;
}

.text_50 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_51 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_52 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_53 {
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin: 2px 16px 0 0;
}

.section_12 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/be8193dca90b4c8aa805cad6c34bfccf_mergeImage.png);
  align-self: center;
  margin-top: 6px;
  width: 345px;
  padding: 0 14px 22px 0;
}

.box_5 {
  margin-right: 276px;
}

.tag_8 {
  background-color: rgba(207, 119, 0, 1);
  padding: 2px 4px 2px 3px;
}

.text_54 {
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

.box_6 {
  margin: 7px 0 0 251px;
}

.text-group_9 {}

.text_55 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text-wrapper_11 {
  width: 61px;
  height: 18px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.21666666865348816px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
  margin: 8px 19px 0 0;
}

.text_56 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 13px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text_57 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 13px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text_58 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 13px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 18px;
}

.text_59 {
  overflow-wrap: break-word;
  color: rgba(161, 161, 161, 1);
  font-size: 11px;
  letter-spacing: 0.18333333730697632px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
  margin: 13px 10px 0 0;
}

div/deep/.desDio .el-dialog__body {
  text-align: center;
}

.g4p {
  padding: 0 3.9% 6px 0;
}

.card_hover {
  opacity: 1;
  animation: fadedev 1s linear;

}

.box_hover {
  opacity: 1;
  animation: fadedev 1s linear;
}

@keyframes fadedev {
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }

}
@media only screen and (min-width: 390px) and (max-width: 400px) {

  .section_11 {
    width: 100%;
    transform: translateX(21px) scaleX(1.05);
  }
  .section_10 {

    width: 94%;
    background-size: cover;
  }

  .group_3 {
    margin: 7px 0 0 274px;
  }
}

@media only screen and (min-width: 401px) and (max-width: 460px) {

  .section_11 {
    width: 100%;
    transform: translateX(34px) scaleX(1.11);
  }

  .section_10 {

    width: 94%;
    background-size: cover;
  }

  .group_3 {
    margin: 7px 0 0 284px;
  }
}
</style>
