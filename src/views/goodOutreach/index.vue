<template>
  <div>
    <div v-if="seen" class="page flex-col">
      <div class="section_14 flex-col">
        <div class="search-top">
          <el-row>
            <el-col :span="12">
              <el-radio-group v-model="radio" size="medium " class="m4050">
                <el-radio :label="1">场景</el-radio>
                <el-radio :label="2">演员</el-radio>
                <el-radio :label="3">住宿</el-radio>
                <el-radio :label="4">车辆</el-radio>
                <el-radio :label="5">道具</el-radio>
                <el-radio :label="6">服装</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :span="12">
              <el-input v-model="input2" placeholder="搜索场景关键词、编号" size="medium " class="right_search">
                <template slot="append">搜索</template>
              </el-input>
            </el-col>
          </el-row>
        </div>
        <div class="choice_content">
          <div class="el-form-item">
            <el-image class="cho_img" :src="require('@/assets/img/spzy/mj.png')" />
            <label class="el-form-item__label w80"> 面积 </label>
            <div class="el-form-item__content ml80">
              <el-checkbox-group v-model="checkboxGroup1">
                <el-checkbox v-for="(item, index) in choList1" :key="index" :label="item" name="type" border />
              </el-checkbox-group>
            </div>
          </div>
          <div class="el-form-item">
            <el-image class="cho_img" :src="require('@/assets/img/spzy/pt.png')" />
            <label class="el-form-item__label w80"> 配套 </label>
            <div class="el-form-item__content ml80">
              <el-checkbox-group v-model="checkboxGroup2">
                <el-checkbox v-for="(item, index) in choList2" :key="index" :label="item" name="type" border />
              </el-checkbox-group>
            </div>
          </div>
          <div class="el-form-item">
            <el-image class="cho_img" :src="require('@/assets/img/spzy/ts.png')" />
            <label class="el-form-item__label w80"> 特色 </label>
            <div class="el-form-item__content ml80">
              <el-checkbox-group v-model="checkboxGroup3">
                <el-checkbox v-for="(item, index) in choList3" :key="index" :label="item" name="type" border />
              </el-checkbox-group>
            </div>
          </div>
          <div class="el-form-item">
            <el-image class="cho_img" :src="require('@/assets/img/spzy/cj.png')" />
            <label class="el-form-item__label w80"> 场景 </label>
            <div class="el-form-item__content ml80">
              <el-checkbox-group v-model="checkboxGroup4">
                <el-checkbox v-for="(item, index) in choList4" :key="index" :label="item" name="type" border />
              </el-checkbox-group>
            </div>
          </div>
        </div>
        <div class="tab_content">
          <el-radio-group v-model="tabRadio">
            <!-- <el-radio label="推荐" border /> -->
            <!-- <el-radio label="评论数" border ></el-radio> -->
            <el-button type="primary" class="tab_btn_t">推荐</el-button>
            <el-button v-if="tabtn === 1" type="primary" class="tab_btn_t" @click="handle(2)">评论数<i
                class="el-icon-caret-bottom" /></el-button>
            <el-button v-if="tabtn === 2" type="primary" class="tab_btn_t" @click="handle(1)">评论数<i
                class="el-icon-caret-top" /></el-button>
            <el-button v-if="tabtn1 === 1" type="primary" class="tab_btn_t" @click="handle1(2)">价格<i
                class="el-icon-caret-bottom" /></el-button>
            <el-button v-if="tabtn1 === 2" type="primary" class="tab_btn_t" @click="handle1(1)">价格<i
                class="el-icon-caret-top" /></el-button>
            <!-- <el-radio label="价格" border /> -->
          </el-radio-group>
          <el-divider />
        </div>

        <!-- <div class="box_8 flex-row justify-between wfc"  v-for="(item, index) in loopData0"
            :key="index">
          <div class="block_3 flex-col">
            <div class="box_1 flex-col" />
            <div class="text-group_11 flex-col justify-between">
              <span class="text_14">工厂影像空间</span>
              <span class="text_15">场景&nbsp;6｜评分3.0</span>
            </div>
            <div class="text-wrapper_5 flex-col gzBtn" :class="{ 'activeBtn': actBtn }" @click="handClickBtn()">
              <span class="text_16">{{ actBtn ? '已关注' : '关注' }}</span>
            </div>
          </div>
          <div class="section_15 flex-col justify-between">
            <div class="block_13 flex-row justify-between w1100">
              <div class="text-wrapper_6 flex-col card_cls w540" @click="handleClick">
                <span class="text_17">影棚A</span>
              </div>
              <div class="text-wrapper_7 flex-col card_cls" @click="handleClick">
                <span class="text_18">影棚B</span>
              </div>
            </div>
            <div class="text-wrapper_8 flex-col card_cls w1100" @click="handleClick">
              <span class="text_19">影棚C</span>
            </div>
          </div>
        </div>
        <div class="box_9 flex-row justify-between wfc">
          <div class="group_4 flex-col">
            <div class="block_5 flex-col" />
            <div class="text-group_12 flex-col justify-between">
              <span class="text_20">工厂影像空间</span>
              <span class="text_21">场景&nbsp;6｜评分3.0</span>
            </div>

            <div class="text-wrapper_9 flex-col gzBtn" :class="{ 'activeBtn': actBtn1 }" @click="handClickBtn1()">
              <span class="text_22">{{ actBtn1 ? '已关注' : '关注' }}</span>
            </div>
          </div>
          <div class="group_12 flex-col justify-between">
            <div class="box_10 flex-row justify-between w1100">
              <div class="text-wrapper_10 flex-col card_cls w540" @click="handleClick">
                <span class="text_23">影棚A</span>
              </div>
              <div class="text-wrapper_11 flex-col card_cls" @click="handleClick">
                <span class="text_24">影棚B</span>
              </div>
            </div>
            <div class="text-wrapper_12 flex-col card_cls w1100" @click="handleClick">
              <span class="text_25">影棚C</span>
            </div>
          </div>
        </div>
        <div class="box_11 flex-row justify-between wfc">
          <div class="box_3 flex-col">
            <div class="group_7 flex-col" />
            <div class="text-group_13 flex-col justify-between">
              <span class="text_26">工厂影像空间</span>
              <span class="text_27">场景&nbsp;6｜评分3.0</span>
            </div>

            <div class="text-wrapper_13 flex-col gzBtn" :class="{ 'activeBtn': actBtn2 }" @click="handClickBtn2()">
              <span class="text_28">{{ actBtn2 ? '已关注' : '关注' }}</span>
            </div>
          </div>
          <div class="group_13 flex-col justify-between">
            <div class="section_16 flex-row justify-between w1100">
              <div class="text-wrapper_14 flex-col card_cls w540" @click="handleClick">
                <span class="text_29">影棚A</span>
              </div>
              <div class="text-wrapper_15 flex-col card_cls" @click="handleClick">
                <span class="text_30">影棚B</span>
              </div>
            </div>
            <div class="text-wrapper_16 flex-col card_cls w1100" @click="handleClick">
              <span class="text_31">影棚C</span>
            </div>
          </div>
        </div> -->

        <div class="box_8 flex-row justify-between wfc" v-for="(item, index) in list" :key="index">
          <div class="block_3 flex-col">
            <!-- <div class="box_1 flex-col" /> -->
            <img :src="item.avatar" class="box_1 flex-col">
            <div class="text-group_11 flex-col justify-between">
              <span class="text_14">{{ item.nick }}</span>
              <span class="text_15">场景&nbsp;{{ item.chang_num }} ｜评分 {{ item.eva }}</span>
            </div>
            <div class="text-wrapper_5 flex-col gzBtn" :class="{ 'activeBtn': actBtn }" @click="handClickBtn()">
              <span class="text_16">{{ actBtn ? '已关注' : '关注' }}</span>
            </div>
          </div>
          <div class="section_15 flex-col justify-between">
            <div class="block_13 flex-row justify-between w1100">
              <div class="text-wrapper_6 flex-col card_cls w540" :class="{ textBlack: !item.chang[0].img }"
                v-if="item.chang[0]" @click="handleClick(item)"
                :style="{ backgroundImage: 'url(' + item.chang[0].img + ')' }">
                <span class="text_17">{{ item.chang[0].title }}</span>
              </div>
              <div class="text-wrapper_7 flex-col card_cls" :class="{ textBlack: !item.chang[0].img }"
                v-if="item.chang[1]" @click="handleClick(item)"
                :style="{ backgroundImage: 'url(' + item.chang[1].img + ')' }">
                <span class="text_18">{{ item.chang[1].title }}</span>
              </div>
            </div>
            <div class="text-wrapper_8 flex-col card_cls w1100" :class="{ textBlack: !item.chang[0].img }"
              v-if="item.chang[2]" @click="handleClick(item)" :style="{ backgroundImage: `url(${item.chang[2].img})` }">
              <span class="text_19">{{ item.chang[2].title }}</span>
            </div>
          </div>
        </div>
<<<<<<< HEAD

=======
        <!--
        <div class="box_12 flex-row justify-between wfc">
          <div class="section_6 flex-col">
            <div class="block_6 flex-col" />
            <div class="text-group_14 flex-col justify-between">
              <span class="text_32">工厂影像空间</span>
              <span class="text_33">场景&nbsp;6｜评分3.0</span>
            </div>
            <div class="text-wrapper_17 flex-col gzBtn" :class="{ 'activeBtn': actBtn3 }" @click="handClickBtn3()">
              <span class="text_34">{{ actBtn3 ? '已关注' : '关注' }}</span>
            </div>
          </div>
          <div class="group_14 flex-col justify-between">
            <div class="section_17 flex-row justify-between w1100">
              <div class="text-wrapper_18 flex-col card_cls w540" @click="handleClick">
                <span class="text_35">影棚A</span>
              </div>
              <div class="text-wrapper_19 flex-col card_cls" @click="handleClick">
                <span class="text_36">影棚B</span>
              </div>
            </div>
            <div class="text-wrapper_20 flex-col card_cls w1100" @click="handleClick">
              <span class="text_37">影棚C</span>
            </div>
          </div>
        </div>
        <div class="box_13 flex-row justify-between wfc">
          <div class="group_9 flex-col">
            <div class="section_9 flex-col" />
            <div class="text-group_15 flex-col justify-between">
              <span class="text_38">工厂影像空间</span>
              <span class="text_39">场景&nbsp;6｜评分3.0</span>
            </div>
            <div class="text-wrapper_21 flex-col gzBtn" :class="{ 'activeBtn': actBtn4 }" @click="handClickBtn4()">
              <span class="text_40">{{ actBtn4 ? '已关注' : '关注' }}</span>
            </div>
          </div>
          <div class="group_15 flex-col justify-between">
            <div class="group_16 flex-row justify-between w1100">
              <div class="text-wrapper_22 flex-col card_cls w540" @click="handleClick">
                <span class="text_41">影棚A</span>
              </div>
              <div class="text-wrapper_23 flex-col card_cls" @click="handleClick">
                <span class="text_42">影棚B</span>
              </div>
            </div>
            <div class="text-wrapper_24 flex-col card_cls w1100" @click="handleClick">
              <span class="text_43">影棚C</span>
            </div>
          </div>
        </div>
        <div class="box_14 flex-row justify-between mb50 wfc">
          <div class="block_8 flex-col">
            <div class="section_11 flex-col" />
            <div class="text-group_16 flex-col justify-between">
              <span class="text_44">工厂影像空间</span>
              <span class="text_45">场景&nbsp;6｜评分3.0</span>
            </div> -->
        <!-- <div class="text-wrapper_25 flex-col gzBtn" :class="{ 'activeBtn': actBtn === 6 }" @click="handClickBtn(6)">
              <span class="text_46">关注</span>
            </div> -->
        <!-- <div class="text-wrapper_25 flex-col gzBtn" :class="{ 'activeBtn': actBtn5 }" @click="handClickBtn5()">
              <span class="text_46">{{ actBtn5 ? '已关注' : '关注' }}</span>
            </div>
          </div>
          <div class="group_17 flex-col justify-between">
            <div class="block_14 flex-row justify-between w1100">
              <div class="text-wrapper_26 flex-col card_cls w540" @click="handleClick">
                <span class="text_47">影棚A</span>
              </div>
              <div class="text-wrapper_27 flex-col card_cls" @click="handleClick">
                <span class="text_48">影棚B</span>
              </div>
            </div>
            <div class="text-wrapper_28 flex-col card_cls w1100" @click="handleClick">
              <span class="text_49">影棚C</span>
            </div>
          </div>
        </div> -->
>>>>>>> bcf38147adce3c2a4d432fa50e3a601f615d60ea

      </div>
    </div>
    <des v-else />
  </div>
</template>
<script>
import { homeOuterLink } from "@/api/home";
import des from './phoneDes.vue'
export default {
  components: {
    des
  },
  data() {
    return {
      tabtn: 1,
      actBtn: false,
      actBtn1: false,
      actBtn2: false,
      actBtn3: false,
      actBtn4: false,
      actBtn5: false,
      tabtn1: 1,
      seen: true,
      radio: 1,
      input2: '',
      list: [],
      choList1: [
        '不限',
        '301-600m',
        '601-1000m',
        '1021-2000m',
        '1011-2000m',
        '2001-5000m',
        '1031-2000m'
      ],
      checkboxGroup1: [],
      choList2: [
        '不限',
        '更衣间',
        '洗手间',
        '休息室',
        '会议室',
        '空调',
        '暖气',
        '电梯',
        'WIFI',
        '220V电力',
        '停车位',
        '停车场',
        '饮水机',
        '灭火器',
        '化妆间'
      ],
      checkboxGroup2: [],
      choList3: [
        '不限',
        '380V电力',
        '高速网络',
        '发电车',
        '灯光器材',
        '制片',
        '技术员',
        '看门员',
        '保安'
      ],
      checkboxGroup3: [],
      choList4: [
        '不限',
        '山林田园',
        '暗河',
        '村落',
        '湖景',
        '河堤',
        '公园',
        '舞蹈学校',
        '公园',
        '工厂',
        '月子中心',
        '美术馆',
        '养生馆',
        '茶庄',
        '餐厅',
        '网咖',
        '花店',
        '武馆',
        '大平层',
        '酒庄',
        '小公寓',
        '咖啡厅',
        '写字楼',
        '书吧',
        '景棚',
        '旧区宿舍',
        '火车站',
        '街道园区',
        '运动场',
        '古建筑',
        '别墅',
        '综合影视城',
        '剧院',
        '废弃建筑',
        '会展',
        '医院',
        '学校',
        '商场',
        '停车场',
        '天桥'
      ],
      checkboxGroup4: [],
      tabRadio: '推荐',
      imgList: [
        {
          url: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
        },
        {
          url: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
        },
        {
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
        },
        {
          url: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
        }
      ]
    }
  },
  mounted() {
    this.getHomeOuterLink();
    this.imgObj = this.$route.query.imgObj
    if (document.body.clientWidth > 700) {
      this.seen = true
    } else {
      this.seen = false
    }
    window.addEventListener('setItem', () => {
      const clientWidth = sessionStorage.getItem('seen')
      if (clientWidth > 700) {
        this.seen = true
      } else {
        this.seen = false
      }
    })
  },
  methods: {
    async getHomeOuterLink() {
      let res = await homeOuterLink();
      if (res.status == 200) {
        this.list = res.data.data;
      }
      // this.list.forEach(res => {
      //     res.chang.forEach(res1 => {
      //       res1.img = 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e8906c062f684b5ca649b5529a59a5c4_mergeImage.png'
      //     })
      //   })
    },
    handClickBtn() {
      this.actBtn = true
    },
    handClickBtn1() {
      this.actBtn1 = true
    },
    handClickBtn2() {
      this.actBtn2 = true
    },
    handClickBtn3() {
      this.actBtn3 = true
    },
    handClickBtn4() {
      this.actBtn4 = true
    },
    handClickBtn5() {
      this.actBtn5 = true
    },
    handle(val) {
      this.tabtn = val
    },
    handle1(val) {
      this.tabtn1 = val
    },
    handleClick(item) {
      // this.$router.push({
      //   path: '/goodOutreach/details',
      //   params: item
      //   // query: { id: item.id }
      // });

      this.$router.push({
        name: 'goodOutreachdetails',
        params: {item}
      })
    }
  }
}
</script>
<style scoped>
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  max-width: 1400px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
}

.block_1 {
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

.image_3 {
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

.text_3 {
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
  margin: 36px 0 0 49px;
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
  margin: 36px 0 0 49px;
}

.text-wrapper_1 {
  background-color: rgba(195, 123, 33, 1);
  height: 100px;
  margin-left: 11px;
  width: 120px;
}

.text_5 {
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
  margin: 36px 0 0 11px;
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
  margin: 36px 250px 0 16px;
}

.section_14 {
  position: relative;
  width: 1920px;
  height: auto;
  margin-bottom: 1px;
}

.box_7 {
  width: 1419px;
  height: 66px;
  margin: 56px 0 0 0;
}

.text-wrapper_2 {
  background-color: rgba(246, 240, 232, 1);
  border-radius: 33px;
  height: 66px;
  width: 160px;
}

.text_11 {
  width: 61px;
  height: 42px;
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 30px;
  letter-spacing: 0.5px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 42px;
  margin: 12px 0 0 49px;
}

.text-wrapper_3 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  height: 66px;
  margin-left: 40px;
  width: 160px;
}

.text_12 {
  width: 74px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 16px 0 0 43px;
}

.text-wrapper_4 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  height: 66px;
  margin-left: 40px;
  width: 140px;
}

.text_13 {
  width: 49px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 16px 0 0 45px;
}

.group_1 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  width: 160px;
  height: 46px;
  margin: 20px 0 0 359px;
}

.group_2 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  width: 160px;
  height: 46px;
  margin: 20px 0 0 20px;
}

.group_3 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 33px;
  width: 160px;
  height: 46px;
  margin: 20px 0 0 20px;
}

.image_2 {
  width: 1421px;
  height: 1px;
  margin: 29px 0 0 0;
}

.box_8 {
  width: 1421px;
  height: 511px;
  margin: 25px 0 0 0;
}

.block_3 {
  background-color: rgba(246, 240, 232, 1);
  width: 289px;
  height: 511px;
}

.box_1 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/6daeb23e441149d7b6e902641dafb896_mergeImage.png);
  width: 120px;
  height: 120px;
  margin: 87px 0 0 84px;
}

.text-group_11 {
  width: 147px;
  height: 75px;
  margin: 22px 0 0 70px;
}

.text_14 {
  width: 147px;
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

.text_15 {
  width: 137px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 17px 0 0 6px;
}

.text-wrapper_5 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 165px;
  margin: 39px 0 114px 62px;
}

.text_16 {
  width: 41px;
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
  margin: 14px 0 0 62px;
}

.section_15 {
  width: 1106px;
  height: 511px;
}

.block_13 {
  width: 1106px;
  height: 270px;
}

.text-wrapper_6 {
  /* background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e8906c062f684b5ca649b5529a59a5c4_mergeImage.png); */
  height: 270px;
  width: 550px;
}

.text_17 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_7 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/aa777c9227e144b2bda90cf3398c538c_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_18 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_8 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/2c6a65c1682f4c0b8a7c28c89af627d2_mergeImage.png);
  height: 231px;
  margin-top: 10px;
  width: 1106px;
}

.text_19 {
  width: 56px;
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
  margin: 180px 0 0 30px;
}

.box_9 {
  width: 1421px;
  height: 511px;
  margin: 72px 0 0 0;
}

.group_4 {
  background-color: rgba(246, 240, 232, 1);
  width: 289px;
  height: 511px;
}

.block_5 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ab92df70229e4d4996b78f7f27740773_mergeImage.png);
  width: 120px;
  height: 120px;
  margin: 88px 0 0 84px;
}

.text-group_12 {
  width: 147px;
  height: 75px;
  margin: 22px 0 0 70px;
}

.text_20 {
  width: 147px;
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

.text_21 {
  width: 137px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 17px 0 0 6px;
}

.text-wrapper_9 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 165px;
  margin: 39px 0 113px 62px;
}

.text_22 {
  width: 41px;
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
  margin: 12px 0 0 62px;
}

.group_12 {
  width: 1106px;
  height: 511px;
}

.box_10 {
  width: 1106px;
  height: 270px;
}

.text-wrapper_10 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/c774401bbd47471b969aa1a18fa92812_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_23 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_11 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/2a0d4df76799482d9d461d41918dbbf4_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_24 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_12 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fc13b44056584e1ea6aab05480575dbc_mergeImage.png);
  height: 231px;
  margin-top: 10px;
  width: 1106px;
}

.text_25 {
  width: 56px;
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
  margin: 180px 0 0 30px;
}

.box_11 {
  width: 1421px;
  height: 511px;
  margin: 72px 0 0 0;
}

.box_3 {
  background-color: rgba(246, 240, 232, 1);
  width: 289px;
  height: 511px;
}

.group_7 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/68b2238010d64548a46750069be829de_mergeImage.png);
  width: 120px;
  height: 120px;
  margin: 87px 0 0 84px;
}

.text-group_13 {
  width: 147px;
  height: 75px;
  margin: 22px 0 0 70px;
}

.text_26 {
  width: 147px;
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

.text_27 {
  width: 137px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 17px 0 0 6px;
}

.text-wrapper_13 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 165px;
  margin: 39px 0 114px 62px;
}

.text_28 {
  width: 41px;
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
  margin: 14px 0 0 62px;
}

.group_13 {
  width: 1106px;
  height: 511px;
}

.section_16 {
  width: 1106px;
  height: 270px;
}

.text-wrapper_14 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/85ea58f83b44432190c6cf7583db57d9_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_29 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_15 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/80b65457947046a09b3eec4b8aa99bb6_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_30 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_16 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4793e79580df43e5a551302d9fb1acee_mergeImage.png);
  height: 231px;
  margin-top: 10px;
  width: 1106px;
}

.text_31 {
  width: 56px;
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
  margin: 180px 0 0 30px;
}

.box_12 {
  width: 1421px;
  height: 511px;
  margin: 72px 0 0 0;
}

.section_6 {
  background-color: rgba(246, 240, 232, 1);
  width: 289px;
  height: 511px;
}

.block_6 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fed564fb56364618b3829c458a6a0e6a_mergeImage.png);
  width: 120px;
  height: 120px;
  margin: 88px 0 0 84px;
}

.text-group_14 {
  width: 147px;
  height: 75px;
  margin: 22px 0 0 70px;
}

.text_32 {
  width: 147px;
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

.text_33 {
  width: 137px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 17px 0 0 6px;
}

.text-wrapper_17 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 165px;
  margin: 39px 0 113px 62px;
}

.text_34 {
  width: 41px;
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
  margin: 12px 0 0 62px;
}

.group_14 {
  width: 1106px;
  height: 511px;
}

.section_17 {
  width: 1106px;
  height: 270px;
}

.text-wrapper_18 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/8786c5294d3840ff8c5a90066c7e9662_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_35 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_19 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/9852a663a8be4e1ea83b8c3d4efb60a2_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_36 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_20 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/eeb82499e98b49cd8d8f78966ff64b6b_mergeImage.png);
  height: 231px;
  margin-top: 10px;
  width: 1106px;
}

.text_37 {
  width: 56px;
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
  margin: 180px 0 0 30px;
}

.box_13 {
  width: 1421px;
  height: 511px;
  margin: 72px 0 0 0;
}

.group_9 {
  background-color: rgba(246, 240, 232, 1);
  width: 289px;
  height: 511px;
}

.section_9 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/304e917171b2473eb657ba370d340c34_mergeImage.png);
  width: 120px;
  height: 120px;
  margin: 87px 0 0 84px;
}

.text-group_15 {
  width: 147px;
  height: 75px;
  margin: 22px 0 0 70px;
}

.text_38 {
  width: 147px;
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

.text_39 {
  width: 137px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 17px 0 0 6px;
}

.text-wrapper_21 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 165px;
  margin: 39px 0 114px 62px;
}

.text_40 {
  width: 41px;
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
  margin: 14px 0 0 62px;
}

.group_15 {
  width: 1106px;
  height: 511px;
}

.group_16 {
  width: 1106px;
  height: 270px;
}

.text-wrapper_22 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ab2a4bb885bf40309588955b2a7fb635_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_41 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_23 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/71875c71f3184106a67a579ef0e53a71_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_42 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_24 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/a31c624ca4b549b59558cbb5cd0bd5d3_mergeImage.png);
  height: 231px;
  margin-top: 10px;
  width: 1106px;
}

.text_43 {
  width: 56px;
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
  margin: 180px 0 0 30px;
}

.box_14 {
  width: 1421px;
  height: 511px;
  margin: 72px 0 0 0;
}

.block_8 {
  background-color: rgba(246, 240, 232, 1);
  width: 289px;
  height: 511px;
}

.section_11 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/5640454ecbfa41328768c2374b58e8c7_mergeImage.png);
  width: 120px;
  height: 120px;
  margin: 88px 0 0 84px;
}

.text-group_16 {
  width: 147px;
  height: 75px;
  margin: 22px 0 0 70px;
}

.text_44 {
  width: 147px;
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

.text_45 {
  width: 137px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(134, 134, 134, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 17px 0 0 6px;
}

.text-wrapper_25 {
  background-color: rgba(195, 123, 33, 1);
  height: 54px;
  width: 165px;
  margin: 39px 0 113px 62px;
}

.text_46 {
  width: 41px;
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
  margin: 12px 0 0 62px;
}

.group_17 {
  width: 1106px;
  height: 511px;
}

.block_14 {
  width: 1106px;
  height: 270px;
}

.text-wrapper_26 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/91288dfe954a4667912ca67f40dd9b2d_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_47 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_27 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4f0c0f4609af42be80b5f636d265c92e_mergeImage.png);
  height: 270px;
  width: 550px;
}

.text_48 {
  width: 55px;
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
  margin: 219px 0 0 30px;
}

.text-wrapper_28 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/f967cbb76a8a48f68389e72201290069_mergeImage.png);
  height: 231px;
  margin-top: 10px;
  width: 1106px;
}

.text_49 {
  width: 56px;
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
  margin: 180px 0 0 30px;
}

.text-wrapper_29 {
  background-color: rgba(13, 15, 17, 1);
  height: 67px;
  width: 1920px;
  margin: 522px 0 1px 0;
}

.text_50 {
  width: 447px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(253, 253, 253, 1);
  font-size: 20px;
  letter-spacing: 0.3333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 18px 0 0 736px;
}

.section_12 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 7px;
  position: absolute;
  left: 43%;
  top: 56px;
  width: 546px;
  height: 66px;
  border: 1px solid rgba(195, 123, 33, 1);
}

.text_51 {
  width: 184px;
  height: 25px;
  overflow-wrap: break-word;
  color: rgba(139, 139, 139, 1);
  font-size: 18px;
  letter-spacing: 0.30000001192092896px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 25px;
  margin: 20px 0 0 25px;
}

.text-wrapper_30 {
  background-color: rgba(195, 123, 33, 1);
  border-radius: 0px 7px 7px 0px;
  height: 65px;
  margin-left: 208px;
  width: 129px;
}

.text_52 {
  width: 49px;
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  letter-spacing: 0.4000000059604645px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 33px;
  margin: 16px 0 0 40px;
}

.section_13 {
  background-color: rgba(34, 38, 43, 1);
  position: absolute;
  left: 0;
  top: 3914px;
  width: 1920px;
  height: 273px;
}

.text-group_17 {
  width: 273px;
  height: 124px;
  margin: 45px 0 0 250px;
}

.text_53 {
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

.text_54 {
  width: 253px;
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

.text_55 {
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

.box_15 {
  width: 113px;
  height: 129px;
  margin: 45px 0 0 113px;
}

.text-group_18 {
  width: 113px;
  height: 81px;
}

.text_56 {
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

.text_57 {
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

.text_58 {
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

.box_16 {
  width: 98px;
  height: 129px;
  margin: 45px 0 0 112px;
}

.text-group_19 {
  width: 98px;
  height: 81px;
}

.text_59 {
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

.text_60 {
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

.text_61 {
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

.text-group_20 {
  width: 98px;
  height: 81px;
  margin: 45px 0 0 113px;
}

.text_62 {
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

.text_63 {
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

.box_17 {
  width: 126px;
  height: 183px;
  margin: 45px 332px 0 292px;
}

.text_64 {
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

.box_6 {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/74d23438dc834105bf258cc95e3f8014_mergeImage.png);
  width: 126px;
  height: 126px;
  margin-top: 24px;
}

.top_btn_l span {
  color: #c37b21;
}

.top_btn_l:hover span {
  color: #ffffff;
}

.top_btn_l {
  cursor: pointer;
}

.top_btn_l:hover,
.top_btn_r:hover {
  background: #c37b21;
  border-color: #c37b21;
  transition: all 0.3s ease 0s;
}

.top_btn_r {
  cursor: pointer;
}

.top_btn_r:hover {
  background: #ffffff;
  border-color: #ffffff;
  border-bottom: 1px solid #c37b21;
  border-left: 1px solid #c37b21;
  transition: all 0.3s ease 0s;
}

.top_btn_r:hover span {
  color: #c37b21;

}

.gzBtn {
  cursor: pointer;
}

.gzBtn:hover {
  background: #ffffff;
  /* border-color: #c37b21; */
  /* border: 5px solid #c37b21; */
  transition: all 0.3s ease 0s;
}

.gzBtn:hover span {
  color: #c37b21;

}

.card_cls {
  cursor: pointer;
}

.card_cls:hover {
  box-shadow: 0 2px 12px 0 rgb(0 0 0)
}

.w1100 {
  width: 1100px;
}

.w540 {
  width: 540px;
}

.search-top {
  max-width: 1400px;
  height: 120px;
  background-color: #f4f4f4;
  margin-top: 20px
}

.m4050 {
  margin: 50px 40px;
}

.right_search,
div/deep/.right_search .el-input__inner {
  height: 50px;
  border-radius: 0 !important;
}

.right_search {
  margin: 35px 0;
}

.m4050 div/deep/.el-radio__label {
  font-size: 16px;
}

div/deep/.el-radio__input.is-checked+.el-radio__label {
  color: #c37b21;
}

div/deep/.el-radio__input.is-checked .el-radio__inner {
  border-color: #c37b21;
  background: #c37b21;
}

div/deep/.right_search .el-input-group__append {
  width: 130px;
  text-align: center;
  background-color: #c37b21;
  color: #ffffff;
  border-radius: 0 !important;
  transition: all 0.3s ease 0s;
  cursor: pointer;
}

div/deep/.right_search .el-input-group__append:hover {
  background-color: #ffffff;
  color: #c37b21;
}

.tab_content {
  margin: 0 10px;
}

.choice_content,
.tab_content,
.img__content {
  max-width: 1400px;
  margin: 30px 10px;
}

.choice_content {
  margin-bottom: 0;
}

.left_cho {
  max-width: 100px;
}

.w80 {
  width: 55px;
}

.ml80 {
  margin-left: 80px;
}

.cho_img {
  float: left;
  margin-top: 10px;
  width: 20px;
  height: 20px;
}

div/deep/.choice_content .el-checkbox__input,
div/deep/.tab_content .el-radio__input {
  display: none;
}

div/deep/.choice_content .el-checkbox {
  width: 114px;
  margin-top: 3px;
  height: 38px;
  background: #f4f4f4;
  border-radius: 17px;
  text-align: center;
  border: none;
  margin-right: 18px;
  margin-left: 0;
}

div/deep/.tab_content .el-radio {
  width: 114px;
  margin-top: 3px;
  height: 46px;
  background: #f4f4f4;
  border-radius: 45px;
  text-align: center;
  border: none;
  margin-right: 18px;
  padding-top: 16px;
  margin-left: 0;

  transition: all 0.3s ease 0s;
}

div/deep/.tab_content .el-radio .el-radio__label {
  font-size: 16px;
}

div/deep/.choice_content .el-checkbox__input.is-checked+.el-checkbox__label {
  color: #c37b21;
}

div/deep/.tab_content .el-radio.is-bordered.is-checked {
  background: #f6f0e8;
}

.mt56 {
  margin-top: 50px;
  /* height: 2000px; */
}

div/deep/.choice_content .el-checkbox.is-bordered+.el-checkbox.is-bordered {
  margin-left: 0;
  transition: all 0.3s ease 0s;
}

div/deep/.choice_content .el-checkbox.is-bordered:hover {
  color: #fff;
  background: #c37b21;
}

div/deep/.tab_content .el-radio.is-bordered:hover {
  color: #fff;
  background: #c37b21;
}

.tab_btn_t {
  border-radius: 20px;
  width: 113px;
  background: #f6f0e8;
  border-color: #f6f0e8;
  color: #c37b21;
  font-size: 18px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
}

.tab_btn_t:hover {
  background: #c37b21;
  border-color: #c37b21;
  color: #f6f0e8;
}

div/deep/.el-checkbox.is-bordered.is-checked {
  background: #c37b21;
  border-color: #c37b21;
}

div/deep/.el-checkbox.is-bordered.is-checked span {
  color: #f6f0e8 !important;
}

.tab_content {
  margin: 0 10px;
}

.active {
  font-weight: 600;
}

@media (max-width: 1400px) {
  .search-top {
    transform: translateX(0) scaleX(0.98);
  }

  .box_8,
  .box_9,
  .box_11,
  .box_12,
  .box_13,
  .box_14 {
    transform: translateX(6px) scaleX(0.98);
  }

  div/deep/.el-divider--horizontal {
    transform: translateX(-12px) scaleX(0.97);
  }
}

.activeBtn {
  background-color: #ffffff;
}

.activeBtn span {
  color: #c37b21;
  margin: 13px 0 0 52px;
}

.textBlack {
  background-color: #f1f1f1;
}

.textBlack .text_17,
.textBlack .text_18,
.textBlack .text_19 {
  color: #333;
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
