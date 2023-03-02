<template>
  <div>
    <div v-if="seen" class="des_content flex-col">
      <div class="group_2 flex-col">
        <span class="text_11">首页&gt;交易中心&gt;
          {{ detial.title }}
          ></span>
        <div class="box_9 flex-row justify-between">
          <div class="block_2 flex-row">
            <div class="text-wrapper_2 flex-col flexcontents">
              <!-- <span class="text_12">{{ detial.title }}</span> -->
              <span class="text_13">¥{{ detial.money }}</span>
              <span class="text_14">共收到{{ detial.toubiao_num || 0 }}份投标</span>
            </div>
            <div class="group_3 flex-col">
              <span class="text_15">{{ detial.description }}</span>
              <span class="text_16">如果您也在寻求类似帮助，我们可以为您轻松搞定！</span>
              <div class="text-wrapper_3">
                <span class="text_17">距离截止：</span>
                <span class="text_18">{{ detial.zhao_end }}
                  <!-- <countTo :start-val="21" :end-val="0" :duration="2800000" />分
                  <countTo :start-val="60" :end-val="0" :duration="350000" />秒 -->
                </span>
              </div>
              <div class="text-wrapper_4">
                <span class="text_19">浏览人数：</span>
                <span class="text_20">{{ detial.view }}</span>
              </div>
              <div class="text-group_11 flex-col justify-between">
                <div class="text-wrapper_5">
                  <span class="text_21">报名数量：</span>
                  <span class="text_22">{{ detial.toubiao_num || 0 }}</span>
                </div>
                <div class="text-wrapper_6">
                  <span class="text_23">使用时间：</span>
                  <span class="paragraph_1">{{ detial.use_start }}至{{
                    detial.use_end
                  }}&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
              </div>
            </div>
          </div>
          <div class="block_3 flex-col">
            <div class="box_4 flex-col">
              <img :src="detial.avatar || defaultImage" alt="">
            </div>
            <div class="text-wrapper_7">
              <span class="text_24">{{ "默认用户" + detial.uid }}</span>
              <!-- <span class="text_25">0分</span> -->
            </div>
            <div class="text-wrapper_8 flex-col btn_hover" @click="handleClick">
              <span class="text_26">报名投标</span>
            </div>
            <div class="text-wrapper_9 flex-col btn_hover_tem" @click="handleClickCall">
              <span class="text_27">拨打电话</span>
            </div>
          </div>
        </div>
        <!-- <span class="text_28"></span> -->
        <div class="cjxq">场景需求</div>

        <div v-html="detial.content"></div>

        <!--
        <span
          class="paragraph_2"
        >北京绿棚出租，可以提供绿幕抠像，xr直播，线上虚拟发布会，电商直播，电视栏目制作等服务，讯道摇壁机械摄像导播讯道拍摄直<br>播推流</span>
        <div class="block_4 flex-col" />
        <div class="block_6 flex-col" />
        <div class="block_7 flex-col" />
-->
        <div class="box_10 flex-row justify-between">
          <div class="image-text_6 flex-row justify-between">
            <img class="label_3" referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng38480e2b4b93eec71530d9b2c7899b54018512a60fd489e71c44625751603ac7">
            <span class="text-group_2">{{ detial.addtime }}</span>
          </div>
          <div class="image-text_7 flex-row justify-between">
            <img class="label_4" referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6fabdfa92c083a69cd1ff9546c3bed3f35f377b80ec11821213a8cbdedddee50">
            <span class="text-group_3">收藏</span>
          </div>
          <div class="image-text_8 flex-row justify-between">
            <img class="image_2" referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5ea877c6ac97bfe03f2f5b21a6b9acd8ec3d52750421599a7f16b51df4393203">
            <span class="text-group_4">手机</span>
          </div>
          <div class="image-text_9 flex-row justify-between">
            <img class="label_5" referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf33390960efa52283f8892051ad31e75ba6ab8841640cc0f2334e690687d3d8c">
            <span class="text-group_5">举报</span>
          </div>
        </div>

        <div v-if="detial.toubiao && detial.toubiao.length > 0" class="group_16 flex-row justify-between dbs">

          <div v-for="item in detial.toubiao" class="antiu">
            <div class="block_2q flex-col">
              <span class="text_29">投标者</span>
              <div class="image-text_10 flex-col justify-between">
                <!-- <div class="group_10 flex-col" /> -->
                <img :src="item.avatar" class="group_10 flex-col">
                <div class="text-group_12 flex-col">
                  <span class="text_30">{{ item.nick || "默认用户" + item.uid }}</span>
                  <span class="text_31">报价：{{ item.money }}</span>
                  <span class="text_32">联系方式：{{ item.mobile }}</span>
                </div>
              </div>
            </div>
            <div class="block_3q flex-col ml20 prr">
              <div class="bm">保密信息</div>
              <div class="text-wrapper_12 flex-row " :class="{ 'maskInfo3': item.isMask }">
                <span class="text_33 ">{{ item.message }}</span>
              </div>
              <div class=" flex-row justify-between mt10 block_5 " :class="{ 'maskInfo20': item.isMask }">
                <!-- :preview-src-list="srcList1" 点击的话 -->
                <el-image class="section_4 flex-col" :src="item.pic" />

                <!-- <div class="section_3 flex-col" @click="handleClickPng" />

              <div class="section_4 flex-col" @click="handleClickPng" />
              <div class="section_5 flex-col" @click="handleClickPng" />
              <div class="section_6 flex-col" @click="handleClickPng" />
              <div class="section_6 flex-col" @click="handleClickPng" />
              <div class="section_6 flex-col" @click="handleClickPng" /> -->
              </div>
              <!-- <div class="el-mask" /> -->
            </div>
          </div>

        </div>
        <div v-else class="block_9 flex-col mb50">
          <div class="text-wrapper_12 flex-row">
            <span class="text_29">投标者</span>
          </div>
          <div class="box_11 flex-row">
            <div class="image-text_10 flex-row justify-between">
              <img class="image_3" referrerpolicy="no-referrer"
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4148530bff34e1b926664201f82db45d8a9390bc38411f564f39d6d430a936bb">
              <span class="text-group_6">暂无投标{{ detial.toubiao }}</span>
            </div>
          </div>
        </div>
      </div>
      <el-dialog title="投标信息框" class="tb_dio" :visible.sync="dialogFormVisible" width="31%">
        <el-form :model="form">
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input v-model="form.mobile" autocomplete="off" />
          </el-form-item>
          <el-form-item label="报价金额" :label-width="formLabelWidth">
            <el-input v-model.number="form.money" autocomplete="off" />
          </el-form-item>
          <el-form-item label="留言" :label-width="formLabelWidth">
            <el-input v-model="form.message" type="textarea" autocomplete="off" />
          </el-form-item>

          <el-form-item label="图片上传">
            <el-upload class="avatar-uploader" action="" :on-change="handleelchange" :auto-upload="false"
              list-type="picture" :show-file-list="false">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon" />
            </el-upload>
          </el-form-item>
          <!-- <el-form-item label="视频上传" :label-width="formLabelWidth">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
            >
              <i class="el-icon-upload" />
              <div class="el-upload__text">
                <em>点击上传</em>
              </div>
              <!-- <div slot="tip" class="el-upload__tip">只能上传视频</div> -->
          <!-- </el-upload>
          </el-form-item>  -->
        </el-form>
        <div slot="footer" class="dialog-footer tc">
          <el-button class="btn" @click="dialogFormVisible = false">取 消</el-button>
          <el-button class="btn" type="warning" @click="addToubiaoFun">确认投标</el-button>
        </div>
      </el-dialog>
      <el-dialog title="电话拨打" :visible.sync="centerDialogVisible" width="30%" center class="desDio">
        <span class="tc"> <i class="el-icon-phone" /> +86 1388888888888</span>
        <span slot="footer" class="dialog-footer tc">
          <el-button class="btn" @click="centerDialogVisible = false">取 消</el-button>
          <el-button class="btn" type="primary" @click="centerDialogVisible = false">呼 叫</el-button>
        </span>
      </el-dialog>
    </div>
    <pho v-if="!seen" />
  </div>
</template>
<script>
import pho from './phoneDes.vue'
import { demandDitial } from '@/api/home'

import { toubiaoApi } from '@/api/tenant'
import axios from 'axios'
export default {
  components: {
    pho
  },
  data() {
    return {
      seen: true,
      dialogFormVisible: false,
      centerDialogVisible: false,
      pngDialog: false,
      defaultImage: require("@/assets/img/spzy/defaultImg.png"),
      detial: {
        toubiao: [
          {
            nick: '111',
            uid: '111',
            money: '111',
            mobile: '111',
            isMask: true, // 是否显示蒙层
            message: '111',
            pic: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng52bfd8ea1b96be5c613c4e62f54b780066b3530017e03b29de9d2985430339fb'
          },
          {
            nick: '222',
            uid: '222',
            money: '222',
            mobile: '222',
            isMask: false, // 是否显示蒙层
            message: '222',
            pic: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng52bfd8ea1b96be5c613c4e62f54b780066b3530017e03b29de9d2985430339fb'
          },
          {
            nick: '111',
            uid: '111',
            money: '111',
            mobile: '111',
            isMask: true, // 是否显示蒙层
            message: '111',
            pic: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng52bfd8ea1b96be5c613c4e62f54b780066b3530017e03b29de9d2985430339fb'
          }
        ]
      },
      imageUrl: '',

      form: {
        mobile: '',
        money: '',
        message: ''
      },
      formLabelWidth: '68px',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    }
  },
  computed: {
    uid: function () {
      return this.$store.state.user.id
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
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
    const { id } = this.$route.query

    this.Detial(id)

    // console.log(id)

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
    //  确定投标

    async addToubiaoFun() {
      this.form.money = String(this.form.money)
      // this. dialogFormVisible = false

      const obj = {
        r_id: this.$route.query.id,
        uid: this.uid,
        pic: this.imageUrl,
        video: '',
        ...this.form
      }
      const res = await toubiaoApi(obj)
      // console.log('投标参数', obj)
      if (res.status == 200 && res.data.msg == '投标成功') {
        this.form = {
          mobile: '',
          money: '',
          message: ''
        }
        this.dialogFormVisible = false
        this.imageUrl = ''
        this.$message({
          message: '投标成功',
          type: 'success'
        })
        const { id } = this.$route.query

        this.Detial(id)
      } else {
        this.$message.erroe('投标失败，请稍后重试')
      }

      // console.log('this.', res)
    },

    //  图片shangc

    handleelchange(file, fileList) {
      // console.log('file', file)
      // console.log('fililist', fileList)

      const formdata = new FormData()
      // console.log('formdata', formdata)
      fileList.map((item) => {
        // fileList本来就是数组，就不用转为真数组了
        formdata.append('file', item.raw) // 将每一个文件图片都加进formdata
      })

      formdata.forEach((item) => {
        // console.log(item)
      })

      // console.log(e);
      //   let {file}=e
      axios.post('http://kelerk.178tqw.com/api/index/upload', formdata).then((res) => {
        // console.log(res)
        this.imageUrl = res.data.url
      })
      // imageUpload(formdata).then(res=>{
      //   console.log(res);
      // })
    },

    async Detial(id) {
      const res = await demandDitial({ id: id })
      if (res.state == 200 && res.data.data) {
        console.log('需求详情信息详情', res)
      }
      console.log('需求详情信息详情', res.data.data)
      this.detial = res.data.data
    },
    handleClick() {
      this.dialogFormVisible = true
    },
    handleClickCall() {
      this.centerDialogVisible = true
    },
    handleClickPng() {
      this.pngDialog = true
    }
  }
}
</script>
<style scoped>
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 1920px;
  height: 4346px;
  overflow: hidden;
}

.flexcontents {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box_1 {
  background-color: rgba(255, 255, 255, 0.88);
  width: 1920px;
  height: 100px;
}

.thumbnail_1 {
  width: 15px;
  height: 18px;
  margin: 54px 0 0 60px;
}

.text_1 {
  width: 37px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 50px 0 0 6px;
}

.thumbnail_2 {
  width: 9px;
  height: 5px;
  margin: 63px 0 0 4px;
}

.image_4 {
  width: 202px;
  height: 40px;
  margin: 30px 0 0 119px;
}

.text_2 {
  width: 41px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 76px;
}

.text-wrapper_1 {
  background-color: rgba(195, 123, 33, 1);
  height: 100px;
  margin-left: 30px;
  width: 120px;
}

.text_3 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 19px;
}

.text_4 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 30px;
}

.text_5 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 30px;
}

.text_6 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 30px;
}

.text_7 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 30px;
}

.text_8 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 30px;
}

.text_9 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0 0 30px;
}

.label_1 {
  width: 38px;
  height: 38px;
  margin: 31px 0 0 83px;
}

.label_2 {
  width: 38px;
  height: 38px;
  margin: 31px 0 0 12px;
}

.text_10 {
  width: 92px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: right;
  white-space: nowrap;
  line-height: 28px;
  margin: 36px 0px 0 16px;
}

.group_2 {
  position: relative;
  width: 1920px;
  height: auto;
  margin-bottom: 1px;
}

.text_11 {
  width: 269px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 26px 0 0 0px;
}

.box_9 {
  width: 1421px;
  height: 365px;
  margin: 20px 0 0 0px;
}

.block_2 {
  width: 1029px;
  height: 365px;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng363d2ff3a52b2d14e8be58be03577ff76a30d4c859df83c08de0b24897acd8c2) 100% no-repeat;
  background-size: 100% 100%;
}

.text-wrapper_2 {
  background-color: rgba(246, 240, 232, 1);
  width: 289px;
  height: 364px;
  margin-top: 1px;
}

.text_12 {
  width: 183px;
  height: 42px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 30px;
  letter-spacing: 0.5px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 42px;
  margin: 39px 0 0 34px;
}

.text_13 {
  width: 149px;
  height: 67px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 48px;
  letter-spacing: 0.800000011920929px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 67px;
  margin: 20px 0 0 34px;
}

.text_14 {
  width: 162px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(164, 164, 164, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 8px 0 155px 34px;
}

.group_3 {
  width: 596px;
  height: 270px;
  margin: 44px 104px 0 40px;
}

.text_15 {
  width: 362px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_16 {
  width: 562px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 7px;
}

.text-wrapper_3 {
  width: 307px;
  height: 28px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 21px;
}

.text_17 {
  width: 307px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text_18 {
  width: 307px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text-wrapper_4 {
  width: 126px;
  height: 28px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 12px;
}

.text_19 {
  width: 126px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text_20 {
  width: 126px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text-group_11 {
  width: 596px;
  height: 96px;
  margin-top: 12px;
}

.text-wrapper_5 {
  width: 114px;
  height: 28px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text_21 {
  width: 114px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text_22 {
  width: 114px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.text-wrapper_6 {
  width: 596px;
  height: 56px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
  margin-top: 12px;
}

.text_23 {
  width: 596px;
  height: 56px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.paragraph_1 {
  width: 596px;
  height: 56px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  line-height: 28px;
}

.block_3 {
  background-color: rgba(249, 249, 249, 1);
  width: 366px;
  height: 365px;
}

.box_4 {
  border-radius: 50%;
  /* background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/008750a8e2de4513b60ff8d9bf8aee2b_mergeImage.png); */
  width: 120px;
  height: 120px;
  margin: 25px 0 0 122px;
}

.box_4 img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.text-wrapper_7 {
  width: 164px;
  height: 33px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 12px 0 0 111px;
}

.text_24 {
  width: 164px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_25 {
  width: 164px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(194, 194, 194, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text-wrapper_8 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 210px;
  margin: 21px 0 0 78px;
}

.text_26 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 13px 0 0 64px;
}

.text-wrapper_9 {
  background-color: rgba(255, 255, 255, 1);
  height: 54px;
  border: 1px solid rgba(195, 123, 33, 1);
  width: 210px;
  margin: 13px 0 33px 78px;
}

.text_27 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 13px 0 0 64px;
}

.text_28 {
  width: 122px;
  height: 42px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 30px;
  letter-spacing: 0.5px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 42px;
  margin: 93px 0 0 899px;
}

.paragraph_2 {
  width: 1413px;
  height: 84px;
  overflow-wrap: break-word;
  color: rgba(147, 147, 147, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  line-height: 42px;
  margin: 21px 0 0 0;
}

.block_4 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/71a5fb3946004222923fe9620eece920_mergeImage.png);
  width: 1420px;
  height: 647px;
  margin: 22px 0 0 0px;
}

.block_5 {
  /* background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/f5918646972e45d397daf6aea37a5a41_mergeImage.png); */
  width: 1420px;
  height: 647px;
  margin: 24px 0 0 0px;
  background: #fff;
  overflow-x: auto;
  overflow-y: hidden;
}

.block_6 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/c274d74431264b9394b185d024a585b6_mergeImage.png);
  width: 1420px;
  height: 647px;
  margin: 24px 0 0 0px;
}

.block_7 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/5720778d42204befb5988b03c8a46e4b_mergeImage.png);
  width: 1420px;
  height: 647px;
  margin: 24px 0 0 0;
}

.box_10 {
  width: 1290px;
  height: 28px;
  margin: 21px 0 0 53px;
}

.image-text_6 {
  width: 149px;
  height: 28px;
}

.label_3 {
  width: 23px;
  height: 23px;
  margin-top: 2px;
}

.text-group_2 {
  width: 116px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(147, 147, 147, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_7 {
  width: 74px;
  height: 28px;
  margin-left: 308px;
}

.label_4 {
  width: 24px;
  height: 23px;
  margin-top: 2px;
}

.text-group_3 {
  width: 41px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(147, 147, 147, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_8 {
  width: 71px;
  height: 28px;
  margin-left: 307px;
}

.image_2 {
  width: 16px;
  height: 23px;
  margin-top: 2px;
}

.text-group_4 {
  width: 41px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(147, 147, 147, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.image-text_9 {
  width: 73px;
  height: 28px;
  margin-left: 308px;
}

.label_5 {
  width: 22px;
  height: 23px;
  margin-top: 2px;
}

.text-group_5 {
  width: 41px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(147, 147, 147, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.block_9 {
  background-color: rgba(249, 249, 249, 1);
  height: 340px;
  width: 1421px;
  margin: 61px 0 0 0px;
}

.text_29 {
  width: 74px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.box_11 {
  width: 182px;
  height: 74px;
  margin: 64px 0 133px 620px;
}

.image-text_10 {
  width: 182px;
  height: 74px;
}

.image_3 {
  width: 74px;
  height: 74px;
}

.text-group_6 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(160, 160, 160, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin-top: 20px;
}

.text-wrapper_11 {
  background-color: rgba(13, 15, 17, 1);
  height: 67px;
  width: 1920px;
  margin: 368px 0 1px 0;
}

.text_30 {
  width: 447px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  white-space: nowrap;
  line-height: 28px;
  margin: 18px 0 0 736px;
  text-align: center;
}

.block_10 {
  background-color: rgba(34, 38, 43, 1);
  position: absolute;
  left: 0;
  top: 3914px;
  width: 1920px;
  height: 273px;
}

.text-group_12 {
  width: 273px;
  height: 124px;
  margin: 45px 0 0 0px;
}

.text_31 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_32 {
  width: 0px;
  height: 50px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 36px;
  letter-spacing: 0.6000000238418579px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 50px;
  margin-top: 9px;
}

.text_33 {
  width: 273px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin-top: 7px;
}

.block_11 {
  width: 113px;
  height: 129px;
  margin: 45px 0 0 113px;
}

.text-group_13 {
  width: 113px;
  height: 81px;
}

.text_34 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_35 {
  width: 113px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(184, 186, 187, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 20px;
}

.text_36 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(184, 186, 187, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 20px;
}

.block_12 {
  width: 98px;
  height: 129px;
  margin: 45px 0 0 112px;
}

.text-group_14 {
  width: 98px;
  height: 81px;
}

.text_37 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_38 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(184, 186, 187, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 20px;
}

.text_39 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(184, 186, 187, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 20px;
}

.text-group_15 {
  width: 98px;
  height: 81px;
  margin: 45px 0 0 113px;
}

.text_40 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.text_41 {
  width: 82px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(184, 186, 187, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 20px;
}

.block_13 {
  width: 126px;
  height: 183px;
  margin: 45px 332px 0 292px;
}

.text_42 {
  width: 123px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
}

.group_1 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/913bb4db088842ddba2718e4b29684c7_mergeImage.png);
  width: 126px;
  height: 126px;
  margin-top: 24px;
}

.des_content {
  max-width: 1400px;
  margin: 0 auto;
}

.cjxq {
  font-size: 30px;
  letter-spacing: 0.5px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  max-width: 1400px;
  margin-top: 30px;
}

.btn_hover {
  cursor: pointer;
  border: 1px solid #ffffff;
}

.btn_hover:hover {
  background: #ffffff;
  border: 1px solid #c37b21;
  transition: all 0.3s ease 0s;
}

.btn_hover:hover span {
  color: #3a3a3a;
}

.btn_hover_tem {
  cursor: pointer;
}

.btn_hover_tem:hover {
  background: #cf8c34;
  border-color: #cf8c34;
  transition: all 0.3s ease 0s;
}

.btn_hover_tem:hover span {
  color: #ffffff;
}

.mb50 {
  margin-bottom: 50px;
}

div/deep/.upload-demo .el-upload {
  width: 100%;
}

div/deep/.upload-demo .el-upload-dragger {
  width: 100%;
  height: 120px;
}

div/deep/.el-upload-dragger .el-icon-upload {
  margin: 18px 0 16px;
}

.group_16 {
  width: fit-content;
  height: 340px;
  margin: 61px 0 50px 0;
}

.block_2q {
  background-color: rgba(249, 249, 249, 1);
  /* background: #f55; */
  width: 363px;
  height: 340px;
}

.text_29 {
  width: 74px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 36px 0 0 144px;
}

.image-text_10 {
  width: 151px;
  height: 208px;
  margin: 26px 0 37px 106px;
}

.group_10 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/a8290bc3c0fe4c6993ca19079c1c4039_mergeImage.png);
  width: 71px;
  height: 71px;
  margin-left: 40px;
}

.text-group_12 {
  width: 151px;
  height: 120px;
  margin-top: 17px;
}

.text_30 {
  width: 147px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  line-height: 33px;
  margin-left: 2px;
}

.text_31 {
  width: 111px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 14px 0 0 20px;
}

.text_32 {
  width: 151px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin-top: 17px;
}

.block_3q {
  background-color: rgba(249, 249, 249, 1);

  /* background: red; */
  height: 340px;
  width: 1037px;
}

.text-wrapper_12 {
  width: 655px;
  height: 28px;
  margin: 41px 0 0 36px;
}

.text_33 {
  width: 655px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(147, 147, 147, 1);
  font-size: 20px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
}

.section_3 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fffcd6e3910c4d96a3df5d9adc53f183_mergeImage.png);
  width: 213px;
  height: 213px;
}

.section_4 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/3ddd735cb8e94eec85db6aa78d1a262d_mergeImage.png);
  width: 213px;
  height: 213px;
  margin-left: 20px;
  margin-bottom: 10px;
}

.section_5 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/cb99c14b85fb49fdacada90dd244937b_mergeImage.png);
  width: 213px;
  height: 213px;
  margin-left: 21px;
}

.section_6 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/dfc162b71bd64619b597d641f5c50508_mergeImage.png);
  width: 213px;
  height: 213px;
  margin-left: 20px;
}

.block_5 div:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0);
  cursor: pointer;
}

div/deep/.tb_dio .el-input,
.tb_dio .el-upload,
.tb_dio .el-textarea {
  width: 99% !important;
}

div/deep/ .tb_dio .upload-demo .el-upload {
  width: 46%;
}

.bm {
  width: 100px;
  height: 60px;
  position: absolute;
  top: 48%;
  z-index: 1;
  left: 42.5%;
  text-align: center;
  color: #000000;
  line-height: 55px;
  font-size: 18px;
  background: #ffffff;
  font-weight: 600;
  border: 4px solid #000000;
}

.prr {
  position: relative;
}

div/deep/.el-dialog__title {
  font-size: 20px;
  font-weight: 800;
}

.el-mask {
  background-color: rgba(0, 0, 0, 0.8);
  background-color: hsl(0deg 0% 0% / 80%);
  position: absolute;
  z-index: 2000;
  margin: 0;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;
}

div/deep/.desDio .el-dialog__body {
  text-align: center;
}

.btn {
  width: 160px;
  font-size: 16px;
}

div/deep/.tb_dio .el-dialog {
  margin-top: 5vh !important;
}

@media (max-width: 1400px) {
  .group_2 {
    transform: translateX(-21px) scaleX(0.96);
  }
}

.antiu {
  display: flex;
  width: -webkit-fill-available;
  margin-bottom: 15px;
  margin-top: 10px;
}

.dbs {
  display: contents;
}

.mb10 {
  margin-bottom: 10px;
}

.block_5 {
  width: 913px;
  height: 213px;
  margin: 22px 0 36px 36px;

}

.text-wrapper_12 {
  width: 74px;
  height: 33px;
  margin: 36px 0 0 51px;
}

.maskInfo20 {
  filter: blur(20px);
  -webkit-filter: blur(20px);
}

.maskInfo3 {
  filter: blur(3px);
  -webkit-filter: blur(3px);
}
</style>
