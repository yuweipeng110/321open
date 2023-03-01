<template>
  <div class="">

    <div class="text-group_1 flex-col">
      <span class="text_4">白色蛋壳棚带360升降转台</span>
      <div class="text-wrapper_1">
        <span class="text_5">首页</span> <span class="text_6">&gt;</span>
        <span class="text_7">佛山</span>
        <span class="text_8">&gt;金盏南路东坝北桥东侧</span>
      </div>
    </div>
    <div class="h200 mauto">
      <el-carousel trigger="click" :interval="3000" arrow="always" style="width:100%;height:100%">
        <el-carousel-item v-for="item in imgArr" :key="item.name">
          <img :src="item.src" style="height:100%;width:100%;" alt="图片404" :title="item.title">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="box_2 flex-row justify-between">
      <div class="text-wrapper_2">
        <span class="text_9">¥</span> <span class="text_10">8000</span>
        <span class="text_11">/全天</span>
      </div>
      <div class="tag_1 flex-col" @click="handleClick"><span class="text_12">立即预订</span></div>
    </div>
    <div class="box_3 flex-row">
      <div class="text-wrapper_3 flex-row justify-between" :class="{'active':is1}" @click="is1 = !is1">
        <span class="text_13">今天</span> <span class="text_14">¥8000</span>
      </div>
      <div class="text-wrapper_4 flex-row justify-between" :class="{'active':is2}" @click="is2 = !is2">
        <span class="text_15">27日</span> <span class="text_16">¥8000</span>
      </div>
      <div class="text-wrapper_5 flex-row justify-between" :class="{'active':is3}" @click="is3 = !is3">
        <span class="text_17">28日</span> <span class="text_18">¥8000</span>
      </div>
    </div>
    <div class="box_4 flex-row">
      <div class="text-wrapper_6 flex-row justify-between" :class="{'active':is4}" @click="is4 = !is4">
        <span class="text_19">29日</span> <span class="text_20">¥8000</span>
      </div>
      <div class="text-wrapper_8 flex-row justify-between" :class="{'active':is5}" @click="is5 = !is5">
        <span class="text_19">30日</span> <span class="text_20">¥8000</span>
      </div>
      <div class="text-wrapper_8 flex-row justify-between" :class="{'active':is6}" @click="is6 = !is6">
        <span class="text_23">31日</span> <span class="text_24">¥8000</span>
      </div>
    </div>
    <div class="box_5 flex-row justify-between">
      <div class="text-wrapper_9">
        <span class="text_25">优惠信息：</span>
        <span class="text_26">前5名预定9折</span>
      </div>
      <span class="text_27">1天起订</span>
    </div>
    <div class="box_6 flex-row">
      <div class="image-text_1 flex-row justify-between">
        <div class="single-avatar_1 flex-col" />
        <span class="text-group_2">八门影棚</span>
      </div>
      <span class="text_28">3分</span>
      <img
        class="thumbnail_2"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngab3821e32d02538c384d6b921ab4e0ebef24cb74887832eae8ff055a265664de"
      >
      <img
        class="thumbnail_3"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1887746349f1824ec1364912b8921a460af1394374688bf969993cac86cc4425"
      >
      <img
        class="thumbnail_4"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdb3dd87fb879eb658db2a4f552076e73f43761672ead5588211a0d4184227e8c"
      >
    </div>
    <div class="box_7 flex-row">
      <div class="tag_2 flex-col">
        <div class="box_8 flex-row justify-between">
          <img
            class="icon_3"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng97b8a3b0aa4f87186093fcfa67739c95848c22020169e5e43b42e97e94848316"
          >
          <span class="text_29">白棚</span>
        </div>
        <span class="text_30">场景编号：000411</span>
      </div>
      <div class="tag_3 flex-col">
        <div class="box_9 flex-row justify-between">
          <img
            class="icon_4"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngddb561dcac119daed0e9674caf2dd1697a9941452a49acb6b6513e2f34355a2a"
          >
          <span class="text_31">450平方米</span>
        </div>
        <span class="text_32">29m长X16m宽X4m高</span>
      </div>
      <div class="group_2 flex-col">
        <div class="box_10 flex-row justify-between">
          <img
            class="icon_5"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0e6cc5f1ee4d005c35d5786029b8ba2a85d2571e594a769476d6e4c6448a14b6"
          >
          <span class="text_33">100%好评</span>
        </div>
        <span class="text_34">5.0分/0条评论</span>
      </div>
    </div>
    <button class="button_1 flex-col" @click="onClick_1">
      <span class="text_35">场景推荐</span></button><img
      class="image_4"
      referrerpolicy="no-referrer"
      src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb804aad7e01c6bc89e93279ac98e5a93595c5a1930489dd74117e7861088826f"
    >
    <span class="text_36">基础设施</span>
    <div class="box_11 flex-row">
      <div class="section_1 flex-row">
        <div class="image-text_2 flex-col">
          <img
            class="icon_6"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf90381f902ff15f9d1c0592a7ce5c3d88bd6bddf6198304f76873ade1095bdad"
          >
          <span class="text-group_3">设施服务</span>
        </div>
      </div>
      <div class="section_2 flex-col">
        <div class="block_2 flex-row justify-between">
          <img
            class="thumbnail_5"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8ffc3b29b708a8c3f1968b29e495fbbc93699e726950ee8b82c3fea57413c722"
          >
          <span class="text_37">化妆间</span>
        </div>
        <div class="block_3 flex-row justify-between">
          <img
            class="icon_7"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9e7500a06d01b065fb6f06aec5445a5d710eb404b8907063e6e8d1d99278e8dd"
          >
          <span class="text_38">会议室</span>
        </div>
        <div class="block_4 flex-row justify-between">
          <img
            class="icon_8"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd3dd36524ef850d21a3400037f012fec68aee42ed691a0f841c5b63d49d8f29d"
          >
          <span class="text_39">饮水机</span>
        </div>
        <div class="block_5 flex-row justify-between">
          <img
            class="icon_9"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0e7b38724e9185e3aac28ae5275445bdfc55ec4fc954f84317fca9ba37a82991"
          >
          <span class="text_40">220V电力</span>
        </div>
        <span class="text_41">特色</span>
      </div>
      <div class="section_3 flex-col">
        <div class="group_3 flex-row justify-between">
          <img
            class="thumbnail_6"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng308c49c036a0165540f46a073645542ecc85f718675b92cdce18eff919cb0a2a"
          >
          <span class="text_42">更衣间</span>
        </div>
        <div class="group_4 flex-row justify-between">
          <img
            class="thumbnail_7"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng952ec50edb59faecbe44657972c974313c17c063ea546c2afe95fca157312eea"
          >
          <span class="text_43">空调</span>
        </div>
        <div class="group_5 flex-row justify-between">
          <img
            class="icon_10"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng457e3e16922570fc95fe6b12780bfeeecb97b14bd3af6747f1d5800a6c79e3e5"
          >
          <span class="text_44">WIFI</span>
        </div>
      </div>
      <div class="section_4 flex-row">
        <div class="image-text_3 flex-row justify-between">
          <img
            class="icon_11"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4512a8d449c87e7f1962bf564f1d9c3e1396f5b131cc064074c169ec09309ed2"
          >
          <div class="text-group_4 flex-col">
            <span class="text_45">洗手间</span>
            <span class="text_46">停车位</span>
            <span class="text_47">暖气</span>
          </div>
        </div>
        <img
          class="thumbnail_8"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng02884a69a791090f496ae63e62dbfeb8a7ff48c10589a7ee21e4b1a838737175"
        >
        <img
          class="icon_12"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng251f372ed69beaefb03ffcae1c1fdd340e5874bdd88b3a46b5caba0124510a77"
        >
      </div>
      <div class="image-wrapper_2 flex-col">
        <img
          class="icon_13"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngddbd4ba02ec7fa258c44f4dd41562f65e2ee655d068d9c0e5f78c65c65a00fd9"
        >
        <img
          class="icon_14"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3a506a98511e3ec82e4ed6883464ae335ae906dfa87644aff891e0bb768b23ea"
        >
      </div>
      <div class="text-group_5 flex-col">
        <span class="text_48">休息室</span> <span class="text_49">灭火器</span>
      </div>
    </div>
    <div class="box_12 flex-row">
      <div class="group_6 flex-col">
        <div class="image-text_4 flex-row justify-between">
          <img
            class="icon_15"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6549299bccafdacfdd4069977c0a46c2596f2349d27ab374f80541f12eb2a76f"
          >
          <span class="text-group_6">380V电力</span>
        </div>
        <div class="image-text_5 flex-row justify-between">
          <img
            class="icon_16"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng83cecca780e2cc0e706c2fa24ab67dc2b585190446c39356d4fe4162a7491cf8"
          >
          <span class="text-group_7">灯光器材</span>
        </div>
      </div>
      <div class="group_7 flex-row">
        <div class="image-text_6 flex-row justify-between">
          <img
            class="icon_17"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngad8956a9dc4bece13b22349f92e24cbf53c5a7ed5a14ec7c5960705b810c1de1"
          >
          <div class="text-group_8 flex-col">
            <span class="text_50">高速网络</span>
            <span class="text_51">制片</span>
          </div>
        </div>
        <div class="image-text_7 flex-row justify-between">
          <img
            class="icon_18"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdf5d4cb30777b561cc75139cae36553348aab1bbc395ca21af161a9a2ec2a114"
          >
          <div class="text-group_9 flex-col">
            <span class="text_50">高速网络</span>
            <span class="text_51">制片</span>
          </div>
        </div>
      </div>
      <div class="image-text_8 flex-row justify-between">
        <img
          class="icon_19"
          referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngee50ab1d33e51c36f0d71e04aa63fe9c4890667a76e9de905267b2854a2de60c"
        >
        <span class="text-group_10">发电车</span>
      </div>
    </div>
    <div class="image-text_13 flex-row justify-between">
      <div class="box_15 flex-row">
        <div class="image-text_14 flex-col">
          <img
            class="icon_22"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbbef3237c7704869313869eede8e0e897b34ca7e87749efdae402581ea331853"
          >
          <span class="text-group_14">场景描述</span>
        </div>
      </div>
      <div class="text-group_15 flex-col">
        <div class="text-wrapper_15">
          <span class="text_66">场景特色</span>
          <span class="text_67 ml5">专业的汽车平面拍摄棚</span>
        </div>
        <div class="text-wrapper_16">
          <span class="text_68">交通详情</span>
          <span class="text_69" />
        </div>
        <div class="text-wrapper_17">
          <span class="text_70">周边介绍</span>
          <span class="text_71" />
        </div>
      </div>
    </div>
    <button class="button_2 flex-col" @click="onClick_2">
      <span class="text_56">预定须知</span></button>
    <div class="text-wrapper_11">
      <span class="text_57">起订时间：</span>
      <span class="text_58">“按天”1天起订</span>
    </div>
    <div class="text-wrapper_12">
      <span class="text_59">开放时间：</span>
      <span class="text_60">0:00-24:00</span>
    </div>
    <div class="image-text_10 flex-row justify-between">
      <div class="box_14 flex-row">
        <div class="image-text_11 flex-col">
          <img
            class="icon_21"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng686aee0ade25edd5746aa879f2649ad058cdf463516fef74cd92dd9121857573"
          >
          <span class="text-group_12">使用须知</span>
        </div>

      </div>
      <div class="text-group_13 flex-row">
        <span class="text_61">退款规则：</span>
        <span class="paragraph_1">取消订单，扣除100%的租金作为违约金支付给商家；如提前退租，扣除100%剩余租金作为违约金支付给商家。使用前2天6点前取消订单，租金可全额退还。</span>
      </div>
    </div>
    <div class="text-wrapper_13 flex-row justify-between">
      <span class="text_62">租用押金：</span>
      <span class="text_63">线下支付押金￥4000.00。押金于使用当天交付商家。请在使用结束时与商家办理退押金手续。</span>
    </div>
    <div class="text-wrapper_14">
      <span class="text_64">不提供发票：</span>
      <span class="text_65">商家不提供发票</span>
    </div>
    <div class="image-text_13 flex-row justify-between">
      <div class="box_15 flex-row">
        <div class="image-text_14 flex-col">
          <img
            class="icon_22"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga5f1d12ea5de2477b978934743a8a9359921f2bd415660eb7a868abc9ace7ee6"
          >
          <span class="text-group_14">额外费用</span>
        </div>
      </div>
      <div class="text-group_15 flex-col">
        <div class="text-wrapper_15">
          <span class="text_66">电费：</span>
          <span class="text_67">2元/度</span>
        </div>
        <div class="text-wrapper_16">
          <span class="text_68">超时费：</span>
          <span class="text_69">1500元/小时</span>
        </div>
        <div class="text-wrapper_17">
          <span class="text_70">收取方式：</span>
          <span class="text_71">商家线下收取</span>
        </div>
      </div>
    </div>
    <div class="tag_4 flex-col"><span class="text_72">用户评价(0条)</span></div>
    <img
      class="image_6"
      referrerpolicy="no-referrer"
      src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb804aad7e01c6bc89e93279ac98e5a93595c5a1930489dd74117e7861088826f"
    >
    <div class="box_16 flex-row">
      <div class="image-text_16 flex-row justify-between">
        <div class="section_5 flex-row">
          <div class="image-text_17 flex-col">
            <img
              class="icon_23"
              referrerpolicy="no-referrer"
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3e29cfdbf42b9be3566a14d0710dfbd156122e150cb8760b51af3d76e2f5a0b8"
            >
            <span class="text-group_16">使用评价</span>
          </div>

        </div>
        <div class="section_6 flex-col">
          <div class="text-group_17">
            <span class="text_73">使用评价：</span>
            <span class="text_74">100%好评，5分</span>
          </div>
          <div class="tag_5 flex-col">
            <span class="text_75">性价比高(0)</span>
          </div>
        </div>
      </div>
      <div class="tag_6 flex-col"><span class="text_76">配套齐全(0)</span></div>
      <div class="tag_7 flex-col"><span class="text_77">干净整洁(0)</span></div>
      <div class="tag_8 flex-col"><span class="text_78">服务热情(0)</span></div>
      <div class="tag_9 flex-col"><span class="text_79">交通便捷(0)</span></div>
    </div>
    <div class="box_17 flex-row">
      <img
        class="thumbnail_9"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8f310719d18234295120a27b266a8149a91e1f79c9aca2069ab41f2e3e1e1696"
      >
      <span class="text_80">相关场景推荐</span>
      <span class="text_81">更多</span>
      <img
        class="thumbnail_10"
        referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1e281a453579947ba4883921195cf891f7ebc54d0356453065e9fe525bafa36a"
      >
    </div>
    <div class="img__content mt56">
      <!-- <el-row :gutter="5" class="w100p">
        <el-col v-for="(o, index) in 4" :key="index" :span="12" class="mb12">
          <el-card :body-style="{ padding: '0px' }">
            <img height="160" class="w100p image" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
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
      </el-row> -->
      <waterfall :seen="seen" :maxlen="4" />
    </div>
  </div>
</template>
<script>
import waterfall from '@/components/waterfall'
export default {
  name: 'Dashboard',
  components: {
    waterfall
  },
  data() {
    return {
      seen: true,
      constants: {},
      is1: false,
      is2: false,
      is3: false,
      is4: false,
      is5: false,
      is6: false,
      imgArr: [
        {
          src: require('@/assets/img/spzy/p2.png'),
          href: 'https://www.baidu.com',
          info: '一些图片描述文字'
        },
        {
          src: require('@/assets/img/spzy/p2.png'),
          href: 'https://www.baidu.com',
          info: '一些图片描述文字'
        },
        {
          src: require('@/assets/img/spzy/p2.png'),
          href: 'https://www.baidu.com',
          info: '一些图片描述文字'
        },
        {
          src: require('@/assets/img/spzy/p2.png'),
          href: 'https://www.baidu.com',
          info: '一些图片描述文字'
        }
      ]
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
      console.log(clientWidth, 'this.seen')
      if (clientWidth > 700) {
        this.seen = true
      } else {
        this.seen = false
      }
    })
  },
  methods: {
    handleClick() {
      this.$router.push({
        path: '/shotForm/form',
        query: { imgObj: '' }
      })
    },
    onClick_1() {
      alert(1)
    },
    onClick_2() {
      alert(1)
    }
  }
}
</script>
<style scoped>
.page {
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  width: 100%;
  height: 2087px;
  overflow: hidden;
  padding: 10px 0 46px 0;
}
.group_24 {
  margin: 9px 16px 0 15px;
}
.h200 {
  height: 200px;
  width: 19%
}

.a23 {
  margin: 12px 1.3% !important;
}

.box_1 {
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

.group_1 {
  margin: 3px 0 1px 0;
}

.block_1 {}

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

.thumbnail_1 {
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

.icon_2 {
  width: 24px;
  height: 24px;
  margin-left: 114px;
}

.text-group_1 {
  margin: 12px 174px 0 15px;
}

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
  margin-right: 17px;
}

.text-wrapper_1 {
  width: 186px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 1px;
}

.text_5 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_6 {
  overflow-wrap: break-word;
  color: rgba(177, 177, 177, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}
.w100p{
  width: 102%;
}
.text_7 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_8 {
  overflow-wrap: break-word;
  color: rgba(177, 177, 177, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.image-wrapper_1 {
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngee6739a5b1db2dcf6635a520ce4275f5ee56a6cb722c365e35350fa0d12c3677) 0px -1px no-repeat;
  background-size: 345px 171px;
  align-self: center;
  margin-top: 9px;
  width: 345px;
  padding: 156px 145px 8px 145px;
}

.image_3 {
  width: 55px;
  height: 6px;
}

.box_2 {
  width: 92%;
  align-self: center;
  margin: 12px auto;
}

.text-wrapper_2 {
  width: 98px;
  height: 33px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  line-height: 17px;
}

.text_9 {
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  line-height: 17px;
}
.oneRoww{
  overflow: hidden;
   text-overflow: ellipsis;
    white-space: nowrap;
    width: 14rem;
}
.oneRoww2w{
        overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 6rem;
    font-size: 0.8rem;
    display: inline-block;
}
.cjpf{
  font-size: 0.6rem;
    text-align: left;
    color: #9E9E9E;
}
.gang{
      margin: 0 0.6rem;
}
.imgcls {
  width: initial;
  height: inherit;
  overflow: hidden;
}
.text_10 {
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 24px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_11 {
  height: 33px;
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  line-height: 17px;
}

.tag_1 {
  background-color: rgba(207, 119, 0, 1);
  margin: 5px 0 2px 0;
  padding: 4px 15px 5px 16px;
}

.text_12 {
  overflow-wrap: break-word;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.box_3 {
  margin: 12px auto;
  width: 89%;
  transform: translateX(-9px);
}

.text-wrapper_3 {
  background-color: rgba(255, 255, 255, 1);
  width: 33.33%;
  border: 1px solid rgba(215, 215, 215, 1);
  padding: 8px 16px 8px 16px;
}

.text_13 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_14 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text-wrapper_4 {
  background-color: rgba(255, 255, 255, 1);
  width: 33.33%;
  border: 1px solid rgba(215, 215, 215, 1);
  margin-left: 7px;
  padding: 8px 15px 8px 15px;
}

.text_15 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_16 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text-wrapper_5 {
  background-color: rgba(255, 255, 255, 1);
  width: 33.33%;
  border: 1px solid rgba(215, 215, 215, 1);
  margin-left: 9px;
  padding: 8px 14px 8px 15px;
}

.text_17 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_18 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.box_4 {
  margin: 2px auto;
  width: 89%;
  transform: translateX(-9px);
}

.text-wrapper_6 {
  background-color: rgba(255, 255, 255, 1);
  width: 33.33%;
  border: 1px solid rgba(215, 215, 215, 1);
  padding: 8px 14px 8px 14px;
}
.active span{
  color: rgba(207, 119, 0, 1) !important;
}
.text_19 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_20 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text-wrapper_7 {
  background-color: rgba(246, 240, 232, 1);
  width: 33.33%;
  margin-left: 7px;
  padding: 9px 15px 9px 16px;
}
.text-wrapper_3:focus{
  background-color: rgba(246, 240, 232, 1);
}
.active{
  background-color: rgb(247, 209, 159) !important;
}
/* .text_21 {
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
} */

.text_22 {
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text-wrapper_8 {
  background-color: rgba(255, 255, 255, 1);
  width: 33.33%;
  border: 1px solid rgba(215, 215, 215, 1);
  margin-left: 9px;
  padding: 8px 16px 8px 16px;
}

.text_23 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.text_24 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.box_5 {
  width: 345px;
  align-self: center;
  margin: 12px auto;
}

.text-wrapper_9 {
  width: 137px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_25 {
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_26 {
  overflow-wrap: break-word;
  color: rgba(221, 113, 0, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_27 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.box_6 {
  width: 345px;
  align-self: center;
  margin: 12px auto;
}

.image-text_1 {
  width: 96px;
}

.single-avatar_1 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/00b0609d0f9b4049a6a2a3c9d865d068_mergeImage.png);
  width: 32px;
  height: 32px;
}

.text-group_2 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-top: 6px;
}

.text_28 {
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 7px 0 0 7px;
}

.thumbnail_2 {
  width: 19px;
  height: 19px;
  margin: 7px 0 6px 146px;
}

.thumbnail_3 {
  width: 19px;
  height: 19px;
  margin: 7px 0 6px 10px;
}

.thumbnail_4 {
  width: 19px;
  height: 19px;
  margin: 7px 0 6px 9px;
}

.box_7 {
  margin: 12px auto;
  width: 92%;
  transform: translateX(-4px);
}

.tag_2 {
  background-color: rgba(244, 244, 244, 1);
  padding: 5px 5px 0 5px;
  width: 33.33%;
}

.box_8 {
  width: 52px;
  margin: 0 15px 0 17px;
}

.icon_3 {
  width: 19px;
  height: 18px;
}

.text_29 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 1px;
}

.text_30 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 6px;
}

.tag_3 {
  background-color: rgba(244, 244, 244, 1);
  margin-left: 5px;
  padding: 12px 7px 5px 6px;
  width: 33.33%;
}

.box_9 {
  width: 85px;
  align-self: center;
}

.icon_4 {
  width: 17px;
  height: 17px;
}

.text_31 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_32 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 4px;
  overflow: hidden;
}

.group_2 {
  background-color: rgba(244, 244, 244, 1);
  margin-left: 4px;
  padding: 8px 14px 5px 14px;
  width: 33.33%;
}

.box_10 {
  width: 84px;
}

.icon_5 {
  width: 18px;
  height: 18px;
}

.text_33 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 1px;
}

.text_34 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 11px;
  letter-spacing: 0.18333333730697632px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 16px;
  margin: 5px 2px 0 8px;
}

.button_1 {
  background-color: rgba(246, 240, 232, 1);
  border-radius: 33px;
  margin: 22px 260px 0 15px;
  padding: 5px 21px 5px 20px;
}

.text_35 {
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

.image_4 {
  width: 345px;
  height: 1px;
  align-self: center;
  margin-top: 9px;
}

.text_36 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin: 22px 223px 0 95px;
  transform: translateX(-1px);
  display: inline-block;
  margin-top: 8px;
}

.box_11 {
  align-self: center;
  width: 96%;
  margin: 12px auto;
}

.section_1 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 159px;
  margin: 41px 0 18px 0;
  padding: 18px 13px 14px 12px;
}

.image-text_2 {}

.icon_6 {
  width: 29px;
  height: 23px;
  margin: 0 auto;
}

.text-group_3 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 4px;
}

.section_2 {
  margin-left: 14px;
}

.block_2 {
  width: 53px;
  margin-right: 17px;
}

.thumbnail_5 {
  width: 12px;
  height: 17px;
}

.text_37 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.block_3 {
  width: 55px;
  margin: 10px 15px 0 0;
}

.icon_7 {
  width: 13px;
  height: 13px;
  margin: 2px 0 2px 0;
}

.text_38 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.block_4 {
  width: 53px;
  margin: 10px 17px 0 0;
}

.icon_8 {
  width: 11px;
  height: 14px;
  margin: 1px 0 2px 0;
}

.text_39 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.block_5 {
  width: 70px;
  margin-top: 10px;
}

.icon_9 {
  width: 10px;
  height: 17px;
}

.text_40 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_41 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin: 7px 41px 0 0;
}

.section_3 {
  margin-bottom: 54px;
}

.group_3 {
  width: 52px;
}

.thumbnail_6 {
  width: 11px;
  height: 16px;
  margin-top: 1px;
}

.text_42 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.group_4 {
  width: 43px;
  margin: 10px 9px 0 0;
}

.thumbnail_7 {
  width: 13px;
  height: 10px;
  margin: 3px 0 4px 0;
}

.text_43 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.group_5 {
  width: 43px;
  margin: 10px 8px 0 1px;
}

.icon_10 {
  width: 15px;
  height: 12px;
  margin: 2px 0 3px 0;
}

.text_44 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.section_4 {
  position: relative;
  margin: 0 0 54px 17px;
}

.image-text_3 {
  width: 56px;
}

.icon_11 {
  width: 17px;
  height: 14px;
  margin: 55px 0 2px 0;
}

.text-group_4 {}

.text_45 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-right: 2px;
}

.text_46 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 10px 0 0 2px;
}

.text_47 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 10px 10px 0 4px;
}

.thumbnail_8 {
  position: absolute;
  left: 0;
  top: 1px;
  width: 13px;
  height: 15px;
}

.icon_12 {
  position: absolute;
  left: 0;
  top: 28px;
  width: 15px;
  height: 16px;
}

.image-wrapper_2 {
  margin: 2px 0 82px 15px;
}

.icon_13 {
  width: 14px;
  height: 12px;
}

.icon_14 {
  width: 13px;
  height: 15px;
  margin: 14px 1px 0 0;
}

.text-group_5 {
  margin: 0 0 81px 3px;
}

.text_48 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-left: 1px;
}

.text_49 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 10px 1px 0 0;
}

.box_12 {
  margin: 8px 31px 0 95px;
  transform: translateX(1px);
}

.group_6 {}

.image-text_4 {
  width: 69px;
}

.icon_15 {
  width: 9px;
  height: 15px;
  margin: 1px 0 1px 0;
}

.text-group_6 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.image-text_5 {
  width: 67px;
  margin: 10px 2px 0 0;
}

.icon_16 {
  width: 14px;
  height: 14px;
  margin: 2px 0 1px 0;
}

.text-group_7 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.group_7 {
  position: relative;
  margin-left: 23px;
}

.image-text_6 {
  width: 67px;
}

.icon_17 {
  width: 14px;
  height: 11px;
  margin: 30px 0 3px 0;
}

.text-group_8 {}

.text_50 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_51 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 10px 24px 0 0;
}

.image-text_7 {
  position: absolute;
  left: 0;
  top: 0;
  width: 67px;
  height: 44px;
}

.icon_18 {
  width: 14px;
  height: 14px;
  margin: 2px 0 28px 0;
}

.text-group_9 {}

.image-text_8 {
  width: 55px;
  margin: 0 0 27px 35px;
}

.icon_19 {
  width: 14px;
  height: 13px;
  margin: 2px 0 2px 0;
}

.text-group_10 {
  overflow-wrap: break-word;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.box_13 {
  width: 86%;
  margin-left: 0.5rem;
  margin-top: 12px;
}

.group_8 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 159px;
  margin: 15px 0 14px 0;
  padding: 9px 13px 12px 12px;
}

.image-text_9 {}

.icon_20 {
  width: 27px;
  height: 26px;
  margin: 0 auto;
}

.text-group_11 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 5px;
}

.text-wrapper_10 {
  /* transform: translateX(-47px); */
}

.text_52 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin-right: 187px;
}

.text_53 {
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 3px;
}

.text_54 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin: 7px 187px 0 0;
}

.text_55 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
  margin: 8px 187px 0 0;
}

.button_2 {
  background-color: rgba(246, 240, 232, 1);
  border-radius: 33px;
  margin: 21px 280px 0 15px;
  width: 99.99px;
  padding: 6px 27px 7px 25px;
}

.text_56 {
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.image_5 {
  width: 345px;
  height: 1px;
  align-self: center;
  margin-top: 9px;
}

.text-wrapper_11 {
  width: 141px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 14px 138px 0 96px;
}

.text_57 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_58 {
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text-wrapper_12 {
  width: 127px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 5px 152px 0 96px;
}

.text_59 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_60 {
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.image-text_10 {
  width: 343px;
  margin: 5px 17px 0 15px;
}

.box_14 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 159px;
  position: relative;
  margin: 16px 0 3px 0;
  padding: 15px 13px 14px 12px
}

.image-text_11 {}

.icon_21 {
  width: 23px;
  height: 23px;
  align-self: center;
}

.text-group_12 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 6px;
}

.image-text_12 {
  position: absolute;
  left: 12px;
  top: 12px;
  width: 41px;
  height: 43px;
}

.text-group_13 {}

.text_61 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.paragraph_1 {
  width: 202px;
  height: 85px;
  overflow-wrap: break-word;
  color: rgba(150, 150, 150, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  line-height: 17px;
  margin-left: -2px;
}

.text-wrapper_13 {
  width: 265px;
  margin: 5px 14px 0 96px;
}

.text_62 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_63 {
  width: 203px;
  height: 51px;
  overflow-wrap: break-word;
  color: rgba(160, 160, 160, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  line-height: 17px;
}

.text-wrapper_14 {
  width: 159px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 5px 120px 0 96px;
}

.text_64 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_65 {
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.image-text_13 {
  width: 216px;
  margin: 25px 144px 0 15px;
}

.box_15 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 159px;
  position: relative;
  padding:15px 13px 12px 12px
}

.image-text_14 {}

.icon_22 {
  width: 24px;
  height: 26px;
  margin: 0 auto;
}

.text-group_14 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 7px;
}

.image-text_15 {
  position: absolute;
  left: 12px;
  top: 10px;
  width: 41px;
  height: 47px;
}

.text-group_15 {
  margin: 3px 0 2px 0;
}

.text-wrapper_15 {
  width: 75px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-right: 60px;
}

.text_66 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_67 {
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text-wrapper_16 {
  width: 119px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin: 5px 16px 0 0;
}

.text_68 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_69 {
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text-wrapper_17 {
  width: 135px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 5px;
}

.text_70 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_71 {
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.tag_4 {
  background-color: rgba(246, 240, 232, 1);
  border-radius: 33px;
  margin: 30px 240px 0 15px;
  padding: 6px 15px 6px 15px;
}

.text_72 {
  overflow-wrap: break-word;
  color: rgba(207, 119, 0, 1);
  font-size: 14px;
  letter-spacing: 0.23333333432674408px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 20px;
}

.image_6 {
  width: 345px;
  height: 1px;
  align-self: center;
  margin-top: 9px;
}

.box_16 {
  width: 93%;
  align-self: center;
  margin: 12px auto;
}

.image-text_16 {
  width: 230px;
  margin-bottom: 13px;
}

.section_5 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 159px;
  position: relative;
  margin-top: 9px;
  padding: 13px 13px 13px 12px
}

.image-text_17 {}

.icon_23 {
  width: 25px;
  height: 25px;
  align-self: center;
}

.text-group_16 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 8px;
}

.image-text_18 {
  position: absolute;
  left: 12px;
  top: 10px;
  width: 41px;
  height: 47px;
}

.section_6 {
  margin-bottom: 20px;
}

.text-group_17 {
  width: 149px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_73 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_74 {
  overflow-wrap: break-word;
  color: rgba(146, 146, 146, 1);
  font-size: 12px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.tag_5 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 25px;
  margin: 12px 63px 0 0;
  padding: 4px 11px 5px 10px;
}

.text_75 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.tag_6 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 25px;
  margin: 62px 0 0 -149px;
  padding: 5px 11px 4px 10px;
}

.text_76 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.tag_7 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 25px;
  margin: 62px 0 0 3px;
  padding: 5px 11px 4px 10px;
}

.text_77 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.tag_8 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 25px;
  margin: 29px 0 33px -86px;
  padding: 4px 11px 5px 10px;
}

.text_78 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.tag_9 {
  background-color: rgba(244, 244, 244, 1);
  border-radius: 25px;
  margin: 29px 0 33px 3px;
  padding: 4px 12px 5px 9px;
}

.text_79 {
  overflow-wrap: break-word;
  color: rgba(33, 33, 33, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.box_17 {
  width: 100%;
  margin-top: 41px;
  margin-left: 8px;
}

.thumbnail_9 {
  width: 2px;
  height: 12px;
  margin: 4px 0 5px 0;
}

.text_80 {
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

.text_81 {
  overflow-wrap: break-word;
  color: rgba(145, 145, 145, 1);
  font-size: 13px;
  letter-spacing: 0.21666666865348816px;
  font-weight: NaN;
  text-align: center;
  white-space: nowrap;
  line-height: 18px;
  margin: 1px 0 0 57%
}

.thumbnail_10 {
  width: 4px;
  height: 8px;
  margin: 5px 0 5px 2px;
}

.box_18 {
   width: 91%;
    -ms-flex-item-align: center;
    align-self: center;
    margin-top: 11px;
    margin: 5px auto;
}

.block_6 {
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.18);
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/3272e2b4b16248f49a928a7cbceafb1c_mergeImage.png);
  padding: 125px 9px 8px 8px;
}

.text_82 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-right: 7px;
}

.group_9 {
  width: 130px;
  margin: 7px 22px 0 0;
}

.single-avatar_2 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/33f14a265f914e579a989b39581be26a_mergeImage.png);
  width: 18px;
  height: 18px;
}

.text_83 {
  overflow-wrap: break-word;
  color: rgba(158, 158, 158, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 1px;
}

.group_10 {
  width: 152px;
  margin-top: 8px;
}

.text-wrapper_18 {
  width: 56px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_84 {
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_85 {
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_86 {
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_87 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 1px;
}

.block_7 {
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.18);
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/f5636702913546f1a10d29755a084401_mergeImage.png);
  padding: 125px 6px 8px 9px;
}

.text_88 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-right: 9px;
}

.box_19 {
  width: 130px;
  margin: 7px 24px 0 0;
}

.single-avatar_3 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/2c7c437643c9421390df09c0dc8cb973_mergeImage.png);
  width: 18px;
  height: 18px;
}

.text_89 {
  overflow-wrap: break-word;
  color: rgba(158, 158, 158, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 1px;
}

.box_20 {
  width: 154px;
  margin-top: 8px;
}

.text-wrapper_19 {
  width: 56px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_90 {
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_91 {
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_92 {
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_93 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 1px;
}

.box_21 {
  width: 343px;
  align-self: center;
  margin-top: 9px;
}

.group_11 {
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.18);
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/b17645f6604644fb8622c6162275a389_mergeImage.png);
  padding: 125px 9px 8px 8px;
}

.text_94 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-right: 7px;
}

.box_22 {
  width: 130px;
  margin: 7px 22px 0 0;
}

.single-avatar_4 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/d6d258d7c9df405cb84cbee3e7325796_mergeImage.png);
  width: 18px;
  height: 18px;
}

.text_95 {
  overflow-wrap: break-word;
  color: rgba(158, 158, 158, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 1px;
}

.box_23 {
  width: 152px;
  margin-top: 8px;
}

.text-wrapper_20 {
  width: 56px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_96 {
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_97 {
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_98 {
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_99 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 1px;
}

.group_12 {
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.18);
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/dfb789f99c8b4071abad6db0ddcdd9b3_mergeImage.png);
  padding: 125px 6px 8px 9px;
}

.text_100 {
  overflow-wrap: break-word;
  color: rgba(58, 58, 58, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-right: 9px;
}

.box_24 {
  width: 130px;
  margin: 7px 24px 0 0;
}

.single-avatar_5 {
  border-radius: 50%;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/c66d1bb33f2f4cb8b787a8abb7ef8c1a_mergeImage.png);
  width: 18px;
  height: 18px;
}

.text_101 {
  overflow-wrap: break-word;
  color: rgba(158, 158, 158, 1);
  font-size: 12px;
  letter-spacing: 0.20000000298023224px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
  margin-top: 1px;
}

.box_25 {
  width: 154px;
  margin-top: 8px;
}

.text-wrapper_21 {
  width: 56px;
  height: 17px;
  overflow-wrap: break-word;
  font-size: 0;
  letter-spacing: 0.20000000298023224px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_102 {
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_103 {
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_104 {
  overflow-wrap: break-word;
  color: rgba(247, 102, 60, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 17px;
}

.text_105 {
  overflow-wrap: break-word;
  color: rgba(195, 123, 33, 1);
  font-size: 10px;
  letter-spacing: 0.1666666716337204px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 14px;
  margin-top: 1px;
}

.mauto {
  margin: 12px auto;
  width: 92%;
}
.mb12{
  margin-bottom: 12px;
}
.ml5{
  margin-left: 5px;
}
.mt56 {
  /* margin-top: 50px; */
  /* height: 2000px; */
  margin: 50px auto;
      width: 98.5%;
}

.img__content {
  max-width: 1400px;
  margin: 30px auto;
}
.seenCls .img__content{
  margin: 8px auto;
}
</style>
