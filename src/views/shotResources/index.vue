<template>
  <div class="shot-content" :class="{ seenCls: !seen }">
    <div v-if="seen" class="search-top">
      <el-row>
        <el-col :span="12">
          <el-radio-group v-model="searchCate" size="medium " class="m4050">
            <el-radio
              :label="item.id"
              v-for="(item, index) in cateClassifyList"
              :key="index"
              >{{ item.name }}</el-radio
            >
            <!-- <el-radio :label="1">场景</el-radio>
            <el-radio :label="2">演员</el-radio>
            <el-radio :label="3">住宿</el-radio>
            <el-radio :label="4">车辆</el-radio>
            <el-radio :label="5">道具</el-radio>
            <el-radio :label="6">服装</el-radio> -->
          </el-radio-group>
        </el-col>
        <el-col :span="12">
          <!-- <span @click="search()">xxxxx</span> -->
          <el-input
            v-model="searchKeywords"
            placeholder="搜索场景关键词、编号"
            size="medium "
            class="right_search"
          >
            <span slot="append" @click="search">搜索</span>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div v-else class="group_3 flex-col">
      <div class="group_9 flex-row justify-between scc">
        <el-input placeholder="搜索 场景关键词、编号" class="input-with-select">
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
    <div>
      <div class="choice_content">
        <div
          class="el-form-item"
          v-for="(item, index) in cateClassifyChild1List"
          :key="index"
        >
          <el-image class="cho_img" :src="item.icon" />
          <label class="el-form-item__label w80"> {{ item.name }} </label>
          <div class="el-form-item__content ml80">
            <el-checkbox-group
              v-model="searchCateChild"
              :class="{ isOpen1: isOpen1 }"
            >
              <el-checkbox
                v-for="(childItem, childI) in item.child"
                :key="childI"
                :label="childItem.id"
                name="type"
                border
                >{{ childItem.name }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <div v-if="!seen" class="rightI" @click="handleClick(0)">
            <i v-if="isOpen1" class="el-icon-arrow-down" />
            <i v-else class="el-icon-arrow-up" />
          </div>
        </div>
        <!-- 
        <div class="el-form-item">
          <el-image
            class="cho_img"
            :src="require('@/assets/img/spzy/mj.png')"
          />
          <label class="el-form-item__label w80"> 面积 </label>
          <div class="el-form-item__content ml80">
            <el-checkbox-group
              v-model="checkboxGroup1"
              :class="{ isOpen1: isOpen1 }"
            >
              <el-checkbox
                v-for="(item, index) in choList1"
                :key="index"
                :label="item"
                name="type"
                border
              />
            </el-checkbox-group>
          </div>
          <div v-if="!seen" class="rightI" @click="handleClick(0)">
            <i v-if="isOpen1" class="el-icon-arrow-down" />
            <i v-else class="el-icon-arrow-up" />
          </div>
        </div>
        <div class="el-form-item">
          <el-image
            class="cho_img"
            :src="require('@/assets/img/spzy/pt.png')"
          />
          <label class="el-form-item__label w80"> 配套 </label>
          <div class="el-form-item__content ml80">
            <el-checkbox-group
              v-model="checkboxGroup2"
              :class="{ isOpen2: isOpen2 }"
            >
              <el-checkbox
                v-for="(item, index) in choList2"
                :key="index"
                :label="item"
                name="type"
                border
              />
            </el-checkbox-group>
          </div>
          <div v-if="!seen" class="rightI" @click="handleClick(1)">
            <i v-if="isOpen2" class="el-icon-arrow-down" />
            <i v-else class="el-icon-arrow-up" />
          </div>
        </div>
        <div class="el-form-item">
          <el-image
            class="cho_img"
            :src="require('@/assets/img/spzy/ts.png')"
          />
          <label class="el-form-item__label w80"> 特色 </label>
          <div class="el-form-item__content ml80">
            <el-checkbox-group
              v-model="checkboxGroup3"
              :class="{ isOpen3: isOpen3 }"
            >
              <el-checkbox
                v-for="(item, index) in choList3"
                :key="index"
                :label="item"
                name="type"
                border
              />
            </el-checkbox-group>
          </div>
          <div v-if="!seen" class="rightI" @click="handleClick(2)">
            <i v-if="isOpen3" class="el-icon-arrow-down" />
            <i v-else class="el-icon-arrow-up" />
          </div>
        </div>
        <div class="el-form-item">
          <el-image
            class="cho_img"
            :src="require('@/assets/img/spzy/cj.png')"
          />
          <label class="el-form-item__label w80"> 场景 </label>
          <div class="el-form-item__content ml80" :class="{ isOpen4: isOpen4 }">
            <el-checkbox-group v-model="checkboxGroup4">
              <el-checkbox
                v-for="(item, index) in choList4"
                :key="index"
                :label="item"
                name="type"
                border
              />
            </el-checkbox-group>
          </div>
          <div v-if="!seen" class="rightI" @click="handleClick(3)">
            <i v-if="isOpen4" class="el-icon-arrow-down" />
            <i v-else class="el-icon-arrow-up" />
          </div>
        </div> -->
      </div>
    </div>
    <div class="tab_content">
      <el-radio-group v-model="tabRadio">
        <!-- <el-radio label="推荐" border /> -->
        <!-- <el-radio label="评论数" border ></el-radio> -->
        <el-button type="primary" class="tab_btn_t">推荐</el-button>
        <el-button
          v-if="tabtn === 1"
          type="primary"
          class="tab_btn_t"
          @click="handle(2)"
          >评论数<i class="el-icon-caret-bottom"
        /></el-button>
        <el-button
          v-if="tabtn === 2"
          type="primary"
          class="tab_btn_t"
          @click="handle(1)"
          >评论数<i class="el-icon-caret-top"
        /></el-button>
        <el-button
          v-if="tabtn1 === 1"
          type="primary"
          class="tab_btn_t"
          @click="handle1(2)"
          >价格<i class="el-icon-caret-bottom"
        /></el-button>
        <el-button
          v-if="tabtn1 === 2"
          type="primary"
          class="tab_btn_t"
          @click="handle1(1)"
          >价格<i class="el-icon-caret-top"
        /></el-button>
        <!-- <el-radio label="价格" border /> -->
      </el-radio-group>
      <el-divider />
    </div>
    <div class="img__content mt56 shotcontent">
      <!-- <waterfall :seen="seen" /> -->

      <el-row :gutter="10">
        <template v-if="seen">
          <el-col  v-for="(item,index) in list" :key="index" :span="seen ? 6 : 12" :gutter="5">
            <el-card shadow="hover" @click.native="handleClick(item.id)">
              <div class="shotbox">
                <img class="img" :src="item.img ?  item.img.split(',')[0] : 'static/img/a3.926621c6.png'" alt="" />
                <div class="txt-five">
                  <div class="oneRow">{{ item.title }}</div>
                  <div>
                    <div class="fl">
                        <img :src="item.avatar || require('@/assets/img/spzy/defaultImg.png')" alt="" class="bot-img" /><span
                          class="tyf12"
                          >{{ item.nick || '默认用户' }}</span
                        >
                    </div>
                    <div class="fr">
                      <div class="pcmon phoneMon">{{ item.zujin }}/天</div>
                    </div>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
        </template>
      </el-row>
    </div>
  </div>
</template>

<script>
import waterfall from "@/components/waterfall";
import { homezyList } from "@/api/home";
import { cateClassify } from "@/api/tenant";
export default {
  name: "Dashboard",
  components: {
    waterfall,
  },
  data() {
    return {
      tabtn: 1,
      tabtn1: 1,
      // radio: "1",
      searchCate: "",
      searchKeywords: "",
      searchCateChild: [],
      seen: true,
      choList1: [
        "不限",
        "301-600m",
        "601-1000m",
        "1021-2000m",
        "1011-2000m",
        "2001-5000m",
        "1031-2000m",
      ],
      // checkboxGroup1: [],
      choList2: [
        "不限",
        "更衣间",
        "洗手间",
        "休息室",
        "会议室",
        "空调",
        "暖气",
        "电梯",
        "WIFI",
        "220V电力",
        "停车位",
        "停车场",
        "饮水机",
        "灭火器",
        "化妆间",
      ],
      checkboxGroup2: [],
      choList3: [
        "不限",
        "380V电力",
        "高速网络",
        "发电车",
        "灯光器材",
        "制片",
        "技术员",
        "看门员",
        "保安",
      ],
      checkboxGroup3: [],
      choList4: [
        "不限",
        "山林田园",
        "暗河",
        "村落",
        "湖景",
        "河堤",
        "公园",
        "舞蹈学校",
        "公园",
        "工厂",
        "月子中心",
        "美术馆",
        "养生馆",
        "茶庄",
        "餐厅",
        "网咖",
        "花店",
        "武馆",
        "大平层",
        "酒庄",
        "小公寓",
        "咖啡厅",
        "写字楼",
        "书吧",
        "景棚",
        "旧区宿舍",
        "火车站",
        "街道园区",
        "运动场",
        "古建筑",
        "别墅",
        "综合影视城",
        "剧院",
        "废弃建筑",
        "会展",
        "医院",
        "学校",
        "商场",
        "停车场",
        "天桥",
      ],
      checkboxGroup4: [],
      tabRadio: "推荐",
      imgList: [
        {
          url: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
        {
          url: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        },
        {
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          url: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        },
        {
          url: "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        },
      ],
      isOpen1: true,
      isOpen2: true,
      isOpen3: true,
      isOpen4: true,
      list: null,
      cateClassifyList: [],
      cateClassifyChild1List: [],
    };
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        if (document.body.clientWidth > 700) {
          this.seen = true;
        } else {
          this.seen = false;
        }
      },
      // 深度观察监听
      deep: true,
    },
  },
  mounted() {
    if (document.body.clientWidth > 700) {
      this.seen = true;
    } else {
      this.seen = false;
    }
    window.addEventListener("setItem", () => {
      const clientWidth = sessionStorage.getItem("seen");
      // console.log(clientWidth, 'this.seen')
      if (clientWidth > 700) {
        this.seen = true;
      } else {
        this.seen = false;
      }
    });
  },
  mounted() {
    this.fetchData();
    this.getCateClassify();
  },
  methods: {
    async fetchData(params) {
      const paramsData = params ?? this.$route.query;
      if(this.$route.query){
        this.searchCate = Number(this.$route.query.cate);
        this.searchKeywords = this.$route.query.keywords;
      }
      let res = await homezyList(paramsData);

      this.list = res.data.data;
    },
    async getCateClassify() {
      let res = await cateClassify();
      // console.log("getCateClassify", res.data.data);
      this.cateClassifyList = res.data.data;
      this.cateClassifyList.forEach((item) => {
        if (item.child) {
          this.cateClassifyChild1List.push(...item.child);
        }
      });
      // console.log('cateClassifyChild1List',this.cateClassifyChild1List);
    },
    // 评论数
    handle(val) {
      this.tabtn = val;
    },
    // 价格
    handle1(val) {
      this.tabtn1 = val;
    },
    handleClick(val) {
      if (val === 0) {
        this.isOpen1 = !this.isOpen1;
      } else if (val === 1) {
        this.isOpen2 = !this.isOpen2;
      } else if (val === 2) {
        this.isOpen3 = !this.isOpen3;
      } else if (val === 3) {
        this.isOpen4 = !this.isOpen4;
      }

      this.$router.push({
        path: "/shotDetails/details",
        query: {
          id: val,
          imgObj: "",
        },
      });
    },
    search() {
      const params = {
        cate: this.searchCate,
        keywords: this.searchKeywords,
        cateChild: this.searchCateChild.join(","),
        money: this.tabtn,
        pinglun: this.tabtn1,
      };
      this.fetchData(params);
    },
  },
};
</script>

<style scoped>
.shotcontent/deep/ .el-card__body {
  padding: 0;
}

.shotbox {
  position: relative;
}

.shotbox .img {
  height: 222px;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.shotbox .txt-five {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 68px;
  line-height: 37px;
  padding: 0 33px;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
}

.shotbox .oneRow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 29px;
  font-size: 20px;
  text-align: left;
  width: 100%;
}

.shotbox .bot-img {
  width: 25px !important;
  height: 25px !important;
  border-radius: 25px !important;
  margin-top: 5px !important;
  margin-right: 10px !important;
  color: #070707;
  font-size: 15px;
  -webkit-transform: translateY(-7px);
  transform: translateY(-6px);
  object-fit: cover;
}

.shotbox .tyf12 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  width: 150px;
}

.shotbox .pcmon {
  height: 22px;
  text-align: left;
  opacity: 0.9;
}

.shotbox .fl {
  float: left;
}

.shotbox .fr {
  float: right;
}

/* <div class="shotbox">
  <img class="img" src="static/img/a3.926621c6.png" alt="">
  <div class="txt-five">
    <div class="oneRow">标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称标题名称</div>
    <div>
      <div class="fl">
        <div><img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt=""
            class="bot-img"><span class="tyf12">名字名字名字名字名字</span></div>
      </div>
      <div class="fr">
        <div class="pcmon phoneMon">9999/天</div>
      </div>
    </div>
  </div>
</div> */

.search-top {
  max-width: 1378px;
  height: 120px;
  background-color: #f4f4f4;
  margin: 30px auto;
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

div/deep/.el-radio__input.is-checked + .el-radio__label {
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

.choice_content,
.tab_content,
.img__content {
  max-width: 1400px;
  margin: 30px auto;
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

div/deep/.choice_content .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #c37b21;
}

div/deep/.tab_content .el-radio.is-bordered.is-checked {
  background: #f6f0e8;
}

.mt56 {
  /* margin-top: 50px; */
  /* height: 2000px; */
  margin: 50px auto;
  width: 98.5%;
}

div/deep/.choice_content .el-checkbox.is-bordered + .el-checkbox.is-bordered {
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

.group_3 {
  background-color: rgba(244, 244, 244, 1);
  width: 345px;
  align-self: center;
  margin: 14px auto;
  padding: 6px 16px 7px 17px;
}

.group_4 {
  margin-right: 49px;
}

.group_4 .el-radio {
  margin-right: 2px;
}

.group_4 div/deep/.el-radio__label {
  font-size: 14px;
  padding-left: 6px;
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
  margin-top: 7px;
}

.group_9 div/deep/.el-input__inner {
  height: 32px;
}

.group_9 div/deep/.el-input-group__append,
.el-input-group__prepend {
  background-color: #c37b21;
  color: #ffffff;
  border: none;
}

.seenCls .cho_img {
  margin-left: 1rem;
}

.seenCls .el-form-item__label {
  font-size: 0.6rem;
  padding: 0;
  width: 1.6rem;
  transform: translateY(-3px);
}

.seenCls div/deep/.el-checkbox__label {
  /* padding-left: 10px;
    line-height: 19px; */
  font-size: 0.6rem;
}

.seenCls .choice_content div/deep/.el-checkbox {
  width: 4.9rem;
  margin-top: 3px;
  height: 26px;
  margin-right: 9px;
  margin-left: 0;
  padding: 5px;
}

.seenCls div/deep/.el-checkbox__label {
  padding-left: 0;
}

.seenCls .ml80 {
  margin-left: 70px;
}

.seenCls div/deep/.el-image__inner {
  width: 60%;
  height: 60%;
}

.seenCls div/deep/.el-form-item {
  margin-bottom: 22px;
  position: relative;
}

.seenCls .rightI {
  float: right;
  font-size: 0.8rem;
  margin: 0 0.8rem;
  color: #9e9e9e;
  position: absolute;
  top: 0.6rem;
  right: 0;
}

@media (min-width: 420px) and (max-width: 442px) {
  .seenCls .rightI {
    top: 35px;
  }
}

@media (min-width: 507px) and (max-width: 530px) {
  .seenCls .rightI {
    top: 35px;
  }
}

.seenCls div/deep/.isOpen1 {
  height: 32px;
  overflow: hidden;
  transition: all 0.3s ease 0s;
}

.seenCls div/deep/.isOpen2 {
  height: 32px;
  overflow: hidden;
  transition: all 0.3s ease 0s;
}

.seenCls div/deep/.isOpen3 {
  height: 32px;
  overflow: hidden;
  transition: all 0.3s ease 0s;
}

.seenCls div/deep/.isOpen4 {
  height: 32px;
  overflow: hidden;
  transition: all 0.3s ease 0s;
}

.seenCls div/deep/.tab_btn_t {
  width: 80px;
  margin-left: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0.4rem;
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

/* .active{
  font-weight: 600;
} */
@media (min-width: 1400px) {
  .el-form-item {
    transform: translateX(10px);
  }

  .tab_content {
    transform: translateX(8px);
  }
}

.seenCls .img__content {
  margin: 0px auto;
}
</style>
