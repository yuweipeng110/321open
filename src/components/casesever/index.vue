<template>
  <div>
    <div class="box_36 flex-row box-middon">
      <!-- <div class="card_act" >
        <div class="imgcls">
          <div class="section_15 flex-col cart_img" />
        </div>
        <div class="block_5 flex-col ">
          <span class="text_41 newA">独行月球剧组需群演50名独行月球剧组需群演50名独行月球剧组需群演50名独行月球剧组需群演50名</span>
          <div class="section_29 flex-row justify-between">
            <div class="box_17 flex-col" />
            <span class="text_42">东森演播室</span>
          </div>
          <span class="text_43">发布时间：2022/10/18</span>
        </div>
      </div>
      <div class="card_act">
        <div class="imgcls">
          <div class="section_15 flex-col cart_img" />
        </div>
        <div class="block_5 flex-col">
          <span class="text_41 newA">独行月球剧组需群演50名独行月球剧组需群演50名独行月球剧组需群演50名独行月球剧组需群演50名</span>
          <div class="section_29 flex-row justify-between">
            <div class="box_17 flex-col" />
            <span class="text_42">东森演播室</span>
          </div>
          <span class="text_43">发布时间：2022/10/18</span>
        </div>
      </div> -->
      <div class="card_act" v-for="(item, index) in list.slice(0, 2)" :key="index" @click="go(item)">
        <div class="imgcls">
          <!-- <div class="section_15 flex-col cart_img" /> -->
          <img :src="item.img" alt="" class="section_15 flex-col cart_img">
        </div>
        <div class="block_5 flex-col ">
          <span class="text_41 newA" v-html="item.content"></span>
          <div class="section_29 flex-row justify-between">
            <div class="box_17 flex-col" />
            <span class="text_42">{{ item.nick }}</span>
          </div>
          <span class="text_43">发布时间： {{ item.addtime }}</span>
        </div>
      </div>
    </div>
    <div class="box_38 flex-row box-middon">
      <div class="card_act" v-for="(item, index) in list.slice(2, 4)" :key="index" @click="go(item)">

        <div class="block_5 flex-col">
          <span class="text_41 newA" v-html="item.content"></span>
          <div class="section_29 flex-row justify-between">
            <div class="box_17 flex-col" />
            <span class="text_42">{{ item.nick }}</span>
          </div>

          <span class="text_43">发布时间：{{ item.addtime }}</span>

        </div>
        <div class="imgcls">
          <img :src="item.img" alt="" class="section_15 flex-col cart_img">
        </div>
      </div>
      <!-- <div class="card_act">

        <div class="block_5 flex-col ">
          <span class="text_41 newA">独行月球剧组需群演50名独行月球剧组需群演50名独行月球剧组需群演50名独行月球剧组需群演50名</span>
          <div class="section_29 flex-row justify-between">
            <div class="box_17 flex-col" />
            <span class="text_42">东森演播室</span>
          </div>
          <span class="text_43">发布时间：2022/10/18</span>
        </div>
        <div class="imgcls">
          <div class="section_15 flex-col cart_img" />
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import { homexqzx } from "@/api/home";
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getHomexqzx();
  },
  methods: {
    async getHomexqzx() {
      let res = await homexqzx()
      if (res.status == 200) {
        this.list = res.data.data
        // console.log(' this.list', this.list);
      }
    },
    go(item) {
      console.log('item', item);
      this.$router.push(`/demand/details?id=${item.id}`);
    }
  }
}
</script>

<style scoped src="@/assets/css/commpont.css" />
<style scoped>
.box-middon {
  margin: 0 auto;
  width: 1400px;
}

@media (min-width: 1400px) {
  .box-middon {
    transform: translateX(-10px) scaleX(0.96);
  }
}

.box_22 {
  margin-left: 46px;
}

.card_act {
  width: 50.7%;
  display: flex;
  cursor: pointer;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}

.card_act:hover {
  background-color: #ebebeb;
}

.block_5 {
  margin: 24px 58px 0 23px;
}

.cart_img {
  display: inline-block;
  transition: all 1s ease 0s;
}

.cart_img:hover {
  transform: scale(1.5);
}

.imgcls {
  width: initial;
  height: inherit;
  overflow: hidden;
}

.newA {
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 296px;
  height: 69px;
  white-space: normal;
  display: -webkit-inline-box;
}
</style>
