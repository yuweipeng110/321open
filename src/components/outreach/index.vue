<template>
  <div class="out" :style="{ backgroundImage: 'url(' + imgUrl + ')' }">
    <el-row :gutter="20" style="margin: 0 auto;width:1400px">
      <el-col v-for="(item, index) in cardLisy" :key="index" :xs="12" :sm="4" :lg="{ span: '24-5' }">
        <el-card :body-style="{ padding: '0px' }" class="cardBox" shadow="hover"
          @mouseenter.native="handleImg(item.url)">
          <img v-if="item.url" :src="item.url" class="image">
          <div style="padding: 14px;">
            <span>
              <h3>{{ item.title }}</h3>
            </span>
            <div class="bottom clearfix">
              <span>{{ item.cj }} | {{ item.pf }} | {{ item.pj }}</span>
              <el-image style="width: 60px; height: 60px" :src="require('@/assets/code.png')" fit="fill" />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cardLisy: [
        {
          title: '工厂电影空间',
          cj: '场景 6',
          pf: '评分 3',
          pj: '评价 0',
          url: require('@/assets/y1.png')
        },
        {
          title: '工厂电影空间',
          cj: '场景 6',
          pf: '评分 3',
          pj: '评价 0',
          url: require('@/assets/y2.png')
        },
        {
          title: '工厂电影空间',
          cj: '场景 6',
          pf: '评分 3',
          pj: '评价 0',
          url: require('@/assets/y3.png')
        },
        {
          title: '工厂电影空间',
          cj: '场景 6',
          pf: '评分 3',
          pj: '评价 0',
          url: require('@/assets/y4.png')
        },
        {
          title: '工厂电影空间',
          cj: '场景 6',
          pf: '评分 3',
          pj: '评价 0',
          url: require('@/assets/y5.png')
        }
      ],
      imgUrl: require('@/assets/y5.png')
    }
  },
  mounted() {

  },
  methods: {
    handleImg(url) {
      var that = this
     
      setTimeout(function () {

        that  .imgUrl = url

      }, 300)
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
  transition: all 0.3s ease 0s;

}

.out::before {
  transition: .5s ease-in-out;
  filter: blur(13px);
  -webkit-filter: blur(13px);
}

.cardBox {
  cursor: pointer
}

.cardBox:hover {
  transform: translateY(-36px);
}
</style>
