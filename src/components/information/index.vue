<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div id="lvjing">
          <ul>
            <li style="opacity: 1; filter: alpha(opacity=100)" v-for="(item, index) in list" :key="index"
              :class="{ 'active': index == 0 }">
              <img src="../../assets/z3.png">
              <div class="actiii" :class="{ 'mt130': index1 == 1, 'mt260': index1 == 2 }" v-for="(item1, index1) in item.list"
                :key="index1">
                <h3>
                  {{ item1.title }}
                </h3>
                <p>
                {{ item1.description }}
                </p>
                <p>发布时间: {{ item1.addtime }}</p>
              </div>
            </li>

            <!-- <li class="active" style="opacity: 1; filter: alpha(opacity=100)"  >
              <img src="../../assets/z3.png">
              <div class="actiii">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
              <div class="actiii mt130">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
              <div class="actiii mt260">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>

            </li>

            <li>
              <img src="../../assets/z2.png">
              <div class="actiii">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
              <div class="actiii mt130">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
              <div class="actiii mt260">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
            </li>

            <li>
              <img src="../../assets/z1.png">
              <div class="actiii">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
              <div class="actiii mt130">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
              <div class="actiii mt260">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
            </li>

            <li>
              <img src="../../assets/z4.png">
              <div class="actiii">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
              <div class="actiii mt130">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
              <div class="actiii mt260">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
            </li>
            <li>
              <img src="../../assets/z5.png">
              <div class="actiii">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
              <div class="actiii mt130">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
              <div class="actiii mt260">
                <h3>
                  宣璐晒宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍宣璐晒新剧开机随拍新剧开机随拍
                </h3>
                <p>
                  影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映影片讲述世界意外陷入无尽的黑暗，人们查到在大漠深处的一座地宫，有一本远古天书，地宫里的人
                  不死不灭，谁得到天书，便能掌握乾坤。该片由李砚、张楠、刘佩琦、徐锦江、吕良伟、曾江等
                  主演，影片将于10月29日全国上映
                </p>
              </div>
            </li> -->
          </ul>
        </div>
      </el-col>
      <el-col :span="12">
        <div id="focus" class="focus">
          <div class="left">
            <ul>
              <li class="active" style="opacity: 1; filter: alpha(opacity=100)">
                <img src="../../assets/z3.png">
              </li>
              <li>
                <img src="../../assets/z2.png">
              </li>

              <li>
                <img src="../../assets/z1.png">
              </li>

              <li>
                <img src="../../assets/z4.png">
              </li>
              <li>
                <img src="../../assets/z5.png">
              </li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li v-for="(item, index) in list" :key="index" :class="{ 'active': index == 0 }">
                <i v-if="index > 0" :class="{ 'i2': index == 1, 'i3': index == 2, 'i4': index > 2 }" />
                <!-- <el-button class="h80" type="warning" circle plain>政策资讯</el-button> -->
                <button class="h80 hBtn">{{ item.cate_name }}</button>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import $ from 'jquery'
import { homeMessage } from "@/api/home";
import { init } from 'events';
export default {
  name: 'Layout',
  data() {
    return {
      atuokey: true,
      input2: '',
      list: [],

    }
  },
  async mounted() {

    await this.getMessage();
    this.init();
  },
  methods: {
    async getMessage() {
      let res = await homeMessage()
      if (res.status == 200) {
        this.list = res.data.data
        console.log(this.list, 'res');
      }

    },
    init() {
      $(function () {
        var oFocus = $('#focus')

        var oRight = oFocus.find('.right')

        var oLeft = oFocus.find('.left')
        var lvJing = $('#lvjing')

        var aRLi = oRight.find('li')
        var aBtn = aRLi.find('button')

        var aLLi = oLeft.find('li')
        var aLvjing = lvJing.find('li')

        var index = 0
        var timeIndex = 0

        var timer = null

        aRLi.click(function () {
          index = $(this).index()

          $(this).addClass('active').siblings().removeClass()

          aLLi.eq(index).addClass('active').siblings().removeClass()
          aLvjing.eq(index).addClass('active').siblings().removeClass()

          aLLi
            .eq(index)
            .stop()
            .animate({ opacity: 1 }, 300)
            .siblings()
            .stop()
            .animate({ opacity: 0 }, 300)
          aLvjing
            .eq(index)
            .stop()
            .animate({ opacity: 1 }, 300)
            .siblings()
            .stop()
            .animate({ opacity: 0 }, 300)

          stopFoucs()
        })

        aRLi.mouseenter(function () {
          index = $(this).index()

          $(this).addClass('active').siblings().removeClass()

          aLLi.eq(index).addClass('active').siblings().removeClass()
          aLvjing.eq(index).addClass('active').siblings().removeClass()

          aLLi
            .eq(index)
            .stop()
            .animate({ opacity: 1 }, 300)
            .siblings()
            .stop()
            .animate({ opacity: 0 }, 300)
          aLvjing
            .eq(index)
            .stop()
            .animate({ opacity: 1 }, 300)
            .siblings()
            .stop()
            .animate({ opacity: 0 }, 300)

          stopFoucs()
        })

        // .mouseleave(function () {
        //   startFocus()
        // })
        setInterval(function () {
          if (timeIndex === 5) {
            timeIndex = 0
          }
          $(this).addClass('active').siblings().removeClass()

          aLLi.eq(timeIndex).addClass('active').siblings().removeClass()
          aRLi.find('button').removeClass('btnAct')
          aRLi
            .find('button')
            .eq(timeIndex)
            .addClass('btnAct')
            .siblings()
            .removeClass()
          aLvjing.eq(timeIndex).addClass('active').siblings().removeClass()

          aLLi
            .eq(timeIndex)
            .stop()
            .animate({ opacity: 1 }, 300)
            .siblings()
            .stop()
            .animate({ opacity: 0 }, 300)
          aLvjing
            .eq(timeIndex)
            .stop()
            .animate({ opacity: 1 }, 300)
            .siblings()
            .stop()
            .animate({ opacity: 0 }, 300)
          // console.log(timeIndex)
          timeIndex++

          stopFoucs()
        }, 4500)

        // timer = setInterval(function () {

        // }, 3000)

        function startFocus() {
          index++

          index = index > aRLi.length - 1 ? 0 : index

          aLLi.eq(index).addClass('active').siblings().removeClass()
          aLvjing.eq(index).addClass('active').siblings().removeClass()

          aLLi
            .eq(index)
            .stop()
            .animate({ opacity: 1 }, 300)
            .siblings()
            .stop()
            .animate({ opacity: 0 }, 300)
          aLvjing
            .eq(index)
            .stop()
            .animate({ opacity: 1 }, 300)
            .siblings()
            .stop()
            .animate({ opacity: 0 }, 300)

          aRLi.eq(index).addClass('active').siblings().removeClass()
        }

        function stopFoucs() {
          clearInterval(timer)
        }
      })
    }
  }
}

</script>
<style scoped>
.focus {
  height: 465px;
  width: 980px;
  margin: 0;
}

.focus .left {
  float: left;
  width: inherit;
  height: inherit;
  position: relative;
  overflow: hidden;
}

.focus .left li {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 465px;
  z-index: 1;
  opacity: 0;
  filter: alpha(opacity=0);
}

.focus .left li.active {
  z-index: 2;
}

.focus .left li p {
  display: none;
}

/* .focus .right li{height:88px; overflow:hidden; padding-left:10px;background-image:url(../images/btns.png);background-position:-120px 0; color:#33cccc; font-size:24px; line-height:88px; margin-bottom:21px;cursor: pointer;} */
.focus .right li:hover,
.focus .right li.active {
  color: #fff;
  background-position: -120px -120px;
}

/* .focus .right li i{background-image:url(../images/btns.png); background-repeat:no-repeat; width:60px; height:60px; float:left; margin:15px 19px 0px 0;} */
.focus .right li i.i1 {
  background-position: 0 0;
}

.focus .right li i.i2 {
  background-position: 0 -60px;
}

.focus .right li i.i3 {
  background-position: 0 -120px;
}

.focus .right li i.i4 {
  background-position: 0 -180px;
}

.focus .right li:hover i.i1,
.focus .right li.active i.i1 {
  background-position: -60px 0;
}

.focus .right li:hover i.i2,
.focus .right li.active i.i2 {
  background-position: -60px -60px;
}

.focus .right li:hover i.i3,
.focus .right li.active i.i3 {
  background-position: -60px -120px;
}

.focus .right li:hover i.i4,
.focus .right li.active i.i4 {
  background-position: -60px -180px;
}

.left img {
  width: inherit;
  height: inherit;
}

.right img {
  width: 100%;
}

li {
  list-style-type: none;
  margin-bottom: 5px;
}

.right ul {
  padding: 0;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3px
}

.focus .right {
  width: 170px;
  position: absolute;
  z-index: 9999;
  margin-left: -40px;
  height: inherit;
}

.h80 {
  height: 80px;
}

#lvjing li.active {
  z-index: 2;
}

#lvjing li {
  position: absolute;
  left: 0;
  top: 0;
  width: 71%;
  height: 465px;
  z-index: 1;
  opacity: 0;
  filter: alpha(opacity=0);
}

#lvjing img {
  width: inherit;
  height: inherit;
  transition: 0.5s ease-in-out;
  filter: blur(13px);
  -webkit-filter: blur(13px);
}

/* #lvjing img::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(30px);
} */
#lvjing li {
  overflow: hidden;
}

.actiii {
  display: block;
  position: absolute;
  top: 26px;
  z-index: 99999;
  width: 100%;
  height: 200px;
  left: 10%;
}

.actiii p {
  width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 超出部分省略号 */
  word-break: break-all;
  /* break-all(允许在单词内换行。) */
  display: -webkit-box;
  /* 对象作为伸缩盒子模型显示 */
  -webkit-box-orient: vertical;
  /* 设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-line-clamp: 3;
  /* 显示的行数 */
  max-height: 80rpx;
  /* 设置最大高度，根据行高，要几行乘以几倍 */
}

.actiii h3 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 50%;
}

.actiii p,
.actiii h3 {
  color: #fff;

}

.hBtn {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  border-radius: 50%;
  padding: 0;
  height: 83px;
  width: 83px;
  cursor: pointer;
  transition: all 1s ease 0s;
}

.btnAct {
  color: #fdf6ec;
  background: #e6a23c;
  border-color: #e6a23c;
}

.hBtn:hover {
  color: #fdf6ec;
  background: #e6a23c;
  border-color: #e6a23c;
}

.mt260 {
  margin-top: 260px;
}

.mt130 {
  margin-top: 130px;
}

/* .actiii h3:hover, .actiii p:hover{

} */
.actiii h3,
.actiii p {
  position: relative;
  cursor: pointer;
}

.actiii h3::before {
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-in-out;
}

.actiii h3:hover::before {

  content: '';
  position: absolute;
  height: 2px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  transform-origin: bottom left;
  transform: scaleX(1);

}
</style>
