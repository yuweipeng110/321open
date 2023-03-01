<template>
  <div class="act_des_content" :class="{ seenCls: !seen }">
    <div v-if="seen">
      <span class="text_11">首页 &gt;政策资讯 &gt;{{ deatilS.title }}</span>
    </div>
    <div class="_3VRLsv">
      <div class="_gp-ck">
        <section class="ouvJEz">
          <div class="back" @click="handleBack">
            <i class="el-icon-arrow-left" /> 返回
          </div>
          <h1 class="_1RuRku tc">
            {{ deatilS.title }}
          </h1>
          <div class="rEsl9f">
            <div class="_2mYfmT">
              <div style="margin-left: 8px">
                <div class="s-dsoj">
                  <time datetime="2022-05-14T08:57:09.000Z"
                    ><i class="el-icon-time" /> {{ deatilS.addtime }}</time
                  ><span> <i class="el-icon-view" /> 阅读 {{ deatilS.reader }}</span>
                </div>
              </div>
            </div>
          </div>
          <article class="_2rhmJa">
            <p>
              {{ deatilS.description }}
            </p>
            <h3>{{ deatilS.title }}</h3>

            <p v-html="deatilS.content"></p>
            <div class="image-package">
              <div
                class="image-container"
                style="max-width: 700px; max-height: 350px; background-color: transparent"
              >
                <div class="image-container-fill" style="padding-bottom: 49.93%" />
                <div class="image-view" data-width="1426" data-height="712">
                  <img
                    data-original-src="//upload-images.jianshu.io/upload_images/27963539-88e4b8f898115b64.png"
                    data-original-width="1426"
                    data-original-height="712"
                    data-original-format="image/png"
                    data-original-filesize="868321"
                    data-image-index="0"
                    style="cursor: zoom-in"
                    class=""
                    :src="deatilS.img"
                  />
                </div>
              </div>
              <div class="image-caption">dig命令</div>
            </div>
            <ol>
              <li>查询的参数以及一些统计信息。</li>
              <li>
                想要查询的信息，比如这次是要找 ditu.amap.com 的 A 记录（实际 IP 地址）。
              </li>
              <li>
                DNS 服务器的答复信息，通过各种 CNAME 记录跳转之后找到最终的 A
                记录，203.119.214.249，这个也就是我们想要 DNS
                服务帮我们做的：域名--&gt;IP。
              </li>
              <li>一些传输信息，本机使用的 DNS 服务器，查询耗时，消息大小等。</li>
            </ol>
            <h3>基本概念</h3>
            <p>在分析 DNS 查询过程之前需要了解一些 DNS 相关的基本概念。</p>
            <h4>DNS 记录类型</h4>
            <p>
              域名与 IP
              之间的对应关系，称为"记录"（record）。根据使用场景，"记录"可以分成不同的类型（type），前面已经看到了有
              A 记录和 CNAME 记录。<br />
              常用的记录类型有如下这些：
            </p>
            <table>
              <thead>
                <tr>
                  <th>类型</th>
                  <th>名称</th>
                  <th>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>地址记录（Address）</td>
                  <td>返回域名指向的 IP 地址</td>
                </tr>
                <tr>
                  <td>CNAME</td>
                  <td>地址记录（Address）</td>
                  <td>返回另一个域名，即当前查询的域名是另一个域名的跳转</td>
                </tr>
                <tr>
                  <td>NS</td>
                  <td>域名服务器记录（Name Server）</td>
                  <td>
                    返回保存下一级域名信息的服务器地址。该记录只能设置为域名，不能设置为IP地址，为保证服务的可靠性，NS
                    一般至少有 2 条
                  </td>
                </tr>
                <tr>
                  <td>MX</td>
                  <td>邮件记录（Mail eXchange）</td>
                  <td>返回接收电子邮件的服务器地址</td>
                </tr>
                <tr>
                  <td>PTR</td>
                  <td>逆向查询记录（Pointer Record）</td>
                  <td>只用于从 IP 地址查询域名</td>
                </tr>
              </tbody>
            </table>
            <h4>域名的组成</h4>
            <p>
              域名的组成结构为：主机名.次级域名.顶级域名.根域名<br />
              在第一个图中可以看到每个域名跟我们印象的域名不大相同，在每个域名的后面都会跟一个“.”。这是因为实际上所有的域名后面都有一个“.”，而这个点其实是“.root”的缩写代表的是“根域名”。而根域名对所有的域名都相同，所以在平时的使用中可以省略，而在域名解析中却是至关重要。<br />
              根域名的下一级，叫做"顶级域名"（top-level domain，缩写为 TLD），比如
              .com、.cn；再下一级叫做"次级域名"（second-level domain，缩写为 SLD），比如
              ditu.amap.com 里面的
              .amap，这一级域名是用户可以注册的；再下一级是主机名（host），比如
              ditu.amap.com 里面的
              ditu，又称为"三级域名"，这是用户在自己的域里面为服务器分配的名称，是用户可以任意分配的。<br />
              ditu(三级域名).amap(次级域名).com(顶级域名).root(根域名)
            </p>
            <h4>查询过程</h4>
            <p>
              DNS 服务是根据域名层级，分级进行查询，从根域名开始，依次查询每一级域名的 NS
              记录，直到查到最终的 IP 地址。
            </p>
            <ol>
              <li>从"根域名服务器"查到"顶级域名服务器"的 NS 记录和 A 记录（IP 地址）</li>
              <li>
                从"顶级域名服务器"查到"次级域名服务器"的 NS 记录和 A 记录（IP 地址）
              </li>
              <li>从"次级域名服务器"查出"主机名"的 IP 地址</li>
            </ol>
            <h4>根域名服务器</h4>
            <p>
              我们可以看到查找过程是从“根域名服务器”开始，那么从哪里知道“根域名服务器”呢？其实“根域名服务器"的
              NS 记录和 IP 地址一般是不会变化的，所以内置在 DNS
              服务器里面，世界上一共有十三组根域名服务器，从 a.root-servers.net 一直到
              m.root-servers.net
            </p>
            <h3>DNS 解析过程</h3>
            <div class="image-package">
              <div
                class="image-container"
                style="max-width: 700px; max-height: 350px; background-color: transparent"
              >
                <div class="image-container-fill" style="padding-bottom: 49.93%" />
                <div class="image-view" data-width="1426" data-height="712">
                  <img
                    data-original-src="//upload-images.jianshu.io/upload_images/27963539-88e4b8f898115b64.png"
                    data-original-width="1426"
                    data-original-height="712"
                    data-original-format="image/png"
                    data-original-filesize="868321"
                    data-image-index="0"
                    style="cursor: zoom-in"
                    class=""
                    :src="require('@/assets/img/spzy/p2.png')"
                  />
                </div>
              </div>
              <div class="image-caption">dig命令</div>
            </div>
            <p>
              有了以上的知识后，借助 dig 命令 +trace 可以看到 DNS
              整体的分级查询过程，其中黄色框中是逐级要获取的域名地址，红色框中是从哪里获取的结果，我们可以看到首先获取的是a-m的根域名服务地址，再逐级获取
              .com--&gt;amap.com--&gt;ditu.amap.com，最终我们可以得到一条名为zone.wagbridge.gaode.com.
              的 CNAME 记录。<br />
              我们可以使用 dig ns amap.com 来查看每级的 NS 记录信息，同样可以印证上图里面
              ditu.amap.com 的数据返回地址。
            </p>
            <div class="image-package">
              <div
                class="image-container"
                style="max-width: 700px; max-height: 350px; background-color: transparent"
              >
                <div class="image-container-fill" style="padding-bottom: 49.93%" />
                <div class="image-view" data-width="1426" data-height="712">
                  <img
                    data-original-src="//upload-images.jianshu.io/upload_images/27963539-88e4b8f898115b64.png"
                    data-original-width="1426"
                    data-original-height="712"
                    data-original-format="image/png"
                    data-original-filesize="868321"
                    data-image-index="0"
                    style="cursor: zoom-in"
                    class=""
                    :src="require('@/assets/img/spzy/p3.png')"
                  />
                </div>
              </div>
              <div class="image-caption">dig命令</div>
            </div>
            <h3>Q&amp;A</h3>
            <h4>为什么要有 CNAME</h4>
            <p>
              这对于需要在同一个IP地址上运行多个服务的情况来说非常方便。若要同时运行文件传输服务和
              Web 服务，则可以把
              <a
                href="https://links.jianshu.com/go?to=http%3A%2F%2Fftp.example.com"
                target="_blank"
                >ftp.example.com</a
              >
              和
              <a
                href="https://links.jianshu.com/go?to=http%3A%2F%2Fwww.example.com"
                target="_blank"
                >www.example.com</a
              >
              都指向 DNS 记录
              <a
                href="https://links.jianshu.com/go?to=http%3A%2F%2Fexample.com"
                target="_blank"
                >example.com</a
              >，而后者则指向 IP 地址的 A 记录。如此一来，若服务器 IP 地址改变，则只需修改
              <a
                href="https://links.jianshu.com/go?to=http%3A%2F%2Fexample.com"
                target="_blank"
                >example.com</a
              >
              的 A 记录即可。
            </p>
            <h4>DNS 解析中的 DS,RRSIG 是什么</h4>
            <p>
              DNS
              的原始设计不包含任何安全细节，域名系统安全扩展（DNSSEC）尝试在其中添加安全性，同时仍保持向后兼容性。DNSSEC
              旨在保护应用程序，免受伪造或不当操纵的 DNS
              数据所造成的影响（例如域名服务器缓存污染的数据）。来自 DNSSEC
              保护区的所有答案都经过数字签名。通过检验数字签名，DNS
              解析器可以核查信息是否与区域所有者发布的信息相同（未修改和完整），并确系实际负责的
              DNS 服务器所提供。<br />
              新增三种资源记录类型：RRSIG (Resource Record Signature)、DNSKEY (DNS Public
              Key)、DS (Delegation Signer)。
            </p>
            <blockquote>
              <p>
                <a
                  href="https://links.jianshu.com/go?to=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2016%2F06%2Fdns.html"
                  target="_blank"
                  >DNS 原理入门</a
                ><br />
                <a
                  href="https://links.jianshu.com/go?to=https%3A%2F%2Fzh.m.wikipedia.org%2Fwiki%2F%25E5%259F%259F%25E5%2590%258D%25E7%25B3%25BB%25E7%25BB%259F%25E5%25AE%2589%25E5%2585%25A8%25E6%2589%25A9%25E5%25B1%2595%23DS_%28Delegation_Signer%29"
                  target="_blank"
                  >维基百科</a
                ><br />
                <a
                  href="https://links.jianshu.com/go?to=http%3A%2F%2Fwww.cc.ntu.edu.tw%2Fchinese%2Fepaper%2F0022%2F20120920_2206.html"
                  target="_blank"
                  >台湾大学</a
                >
              </p>
            </blockquote>
          </article>
        </section>
        <div class="tc mb50">
          <el-button class="sxBtn" type="primary" icon="el-icon-d-arrow-left "
            >上一篇</el-button
          >
          <el-button class="sxBtn" type="primary"
            >下一篇<i class="el-icon-d-arrow-right el-icon--right"
          /></el-button>
        </div>
      </div>
      <div />
      <aside class="_2OwGUo">
        <section class="_3Z3nHf">
          <h3 class="_1Prj5h QxT4hD">热门推荐</h3>
          <div v-for="(item, index) in hotList" :key="index" class="_1jW5zV">
            <div class="_3QmNxJ" :title="item">
              <p
                v-if="index < 3"
                class="_3SxgBd _1OhGeD one_row"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="jsd-meta">{{ index + 1 }}</span> {{ item }}
              </p>
              <p
                v-else
                class="_3SxgBd _1OhGeD one_row"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="jsdt-meta">{{ index + 1 }}</span> {{ item }}
              </p>
            </div>
          </div>
        </section>
        <section class="_3Z3nHf">
          <h3 class="QHRnq8 QxT4hD"><span>相关推荐</span></h3>
          <div v-for="(item, index) in orderList" :key="index" class="cont_der">
            <a class="wrap-img" href="#" target="_blank">
              <img class="img-blur-done" :src="item.src" />
            </a>
            <div class="cuOxAY">
              <div class="_3L5YSq" :title="item.title">
                <p class="_1-HJSV _1OhGeD two_Row" rel="noopener noreferrer">
                  {{ item.title }}
                </p>
              </div>
              <div class="_19haGh">
                <i class="el-icon-time" /> 2022.05.14 <i class="el-icon-view" /> 阅读
                1,391
              </div>
            </div>
          </div>
        </section>
      </aside>
    </div>
  </div>
</template>

<script>
import { art_detail } from "@/api/home";
export default {
  data() {
    return {
      seen: true,
      id: "",
      deatilS: "",
      hotList: [
        "三方接口签名验签简易设计与实现",
        "这几种常见的 JVM 调优场景，你知道吗？",
        "美团动态线程池实践思路，开源了",
        "【tcp】从一次线上问题说起，详解 TCP 半连接队列、全连接队列",
        "Java19 正式 GA！看虚拟线程如何大幅提高系统吞吐量",
        "Android 架构之 MVI 完全体 | 重新审视 MVVM 之殇，PartialChange & Reducer 来拯救",
        "前端VUE3,JQ,uniapp,综合(Ctrl+F搜索)",
        "Flutter Tab 切换时保留tab的状态",
        "浅析iOS离屏渲染原理实现",
      ],
      orderList: [
        {
          src: require("@/assets/img/spzy/p1.png"),
          time: "2022-11-08",
          num: "115",
          title: "三方接口签名验签简易设计与实现",
        },
        {
          src: require("@/assets/img/spzy/p2.png"),
          time: "2022-11-08",
          num: "115",
          title: "这几种常见的 JVM 调优场景，你知道吗？",
        },
        {
          src: require("@/assets/img/spzy/p3.png"),
          time: "2022-11-08",
          num: "115",
          title: "美团动态线程池实践思路，开源了",
        },
        {
          src: require("@/assets/img/spzy/p4.png"),
          time: "2022-11-08",
          num: "115",
          title: "【tcp】从一次线上问题说起，详解 TCP 半连接队列、全连接队列",
        },
        {
          src: require("@/assets/img/spzy/p1.png"),
          time: "2022-11-08",
          num: "115",
          title:
            "Android 架构之 MVI 完全体 | 重新审视 MVVM 之殇，PartialChange & Reducer 来拯救",
        },
        {
          src: require("@/assets/img/spzy/p2.png"),
          time: "2022-11-08",
          num: "115",
          title: "前端VUE3,JQ,uniapp,综合(Ctrl+F搜索)",
        },
        {
          src: require("@/assets/img/spzy/p3.png"),
          time: "2022-11-08",
          num: "115",
          title: "Flutter Tab 切换时保留tab的状态",
        },
        {
          src: require("@/assets/img/spzy/p4.png"),
          time: "2022-11-08",
          num: "115",
          title: "浅析iOS离屏渲染原理实现",
        },
      ],
    };
  },
  watch: {
    seen: {
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
    this.id = this.$route.query.id;

    // console.log(this.$route);
    // console.log(this.id);
    this.getdetail(this.id);
    if (document.body.clientWidth > 700) {
      this.seen = true;
    } else {
      this.seen = false;
    }
    window.addEventListener("setItem", () => {
      const clientWidth = sessionStorage.getItem("seen");
      if (clientWidth > 700) {
        this.seen = true;
      } else {
        this.seen = false;
      }
    });
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
    // 获取详细信息
    async getdetail(id) {
      let res = await art_detail({ id: String(id) });
      console.log("用户详情信息", res);
      this.deatilS = res.data.data[0];
    },
  },
};
</script>

<style scoped>
.act_des_content {
  max-width: 1400px;
  margin: 0 auto;
}

.text_11 {
  width: 269px;
  height: 28px;
  overflow-wrap: break-word;
  color: rgba(136, 136, 136, 1);
  font-size: 18px;
  letter-spacing: 0.3333333432674408px;
  font-weight: NaN;
  text-align: left;
  white-space: nowrap;
  line-height: 28px;
  margin: 26px 0 0 0;
}

._gp-ck {
  flex-shrink: 0;
  margin-bottom: 24px;
  margin-right: 10px;
  width: 1030px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  margin-top: 15px;
  border: 1px px solid #fff;
}

.ouvJEz {
  padding: 32px 15px;
  padding-top: 0px;
}

._3Z3nHf,
.ouvJEz {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
}

._1RuRku {
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  margin-top: 32px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #404040;
  text-rendering: optimizelegibility;
}

.rEsl9f {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  font-size: 13px;
}

._2mYfmT {
  display: flex;
  align-items: center;
}

.s-dsoj {
  display: flex;
  color: #969696;
}

.s-dsoj > :not(:last-child) {
  margin-right: 10px;
}

.s-dsoj > :not(:last-child) {
  margin-right: 10px;
}

._2rhmJa {
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 20px;
  word-break: break-word;
  position: relative;
}

article,
aside,
dialog,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

._2rhmJa p {
  margin-bottom: 20px;
  word-break: break-word;
}

._2rhmJa h3 {
  font-size: 22px;
}

._2rhmJa .image-package {
  width: 100%;
  margin: 0;
  padding-bottom: 25px;
  text-align: center;
  font-size: 0;
}

._2rhmJa .image-package .image-container {
  position: relative;
  z-index: 95;
  background-color: #e6e6e6;
  transition: background-color 0.1s linear;
  margin: 0 auto;
}

._2rhmJa .image-package .image-container-fill {
  z-index: 90;
}

._2rhmJa .image-package .image-container .image-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

._2rhmJa .image-package .image-container .image-view img {
  transition: all 0.15s linear;
  z-index: 95;
  opacity: 1;
}

._2rhmJa .image-package img {
  max-width: 100%;
  width: auto;
  height: auto;
  vertical-align: middle;
  border: 0;
}

._2rhmJa img {
  max-width: 100%;
}

._2mYfmT {
  margin: auto;
}

._2OwGUo {
  flex-shrink: 0;
  width: 360px;
}

._3Z3nHf {
  padding: 16px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  margin-top: 15px;
  border: 1px px solid #fff;
}

._3Z3nHf,
.ouvJEz {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
}

._1Prj5h {
  font-size: 16px;
  padding-left: 6px;
  height: 18px;
}

.QxT4hD {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-left: 12px;
  border-left: 4px solid #ec7259;
  font-size: 18px;
  font-weight: 500;
  height: 20px;
  line-height: 20px;
}

._1jW5zV {
  margin-bottom: 12px;
  border-bottom: 1px dashed #ccc;
  width: 94%;
}

._3QmNxJ {
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

._1OhGeD,
._1OhGeD:active,
._1OhGeD:hover {
  color: inherit;
  margin: 0;
}

._3Z3nHf {
  padding: 16px;
}

._3Z3nHf,
.ouvJEz {
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  position: relative;
}

.QHRnq8 {
  font-size: 16px;
  padding-left: 6px;
  height: 18px;
}

.QxT4hD {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-left: 12px;
  border-left: 4px solid #ec7259;
  font-size: 18px;
  font-weight: 500;
  height: 20px;
  line-height: 20px;
  margin-top: 10px;
}

.cuOxAY {
  margin-bottom: 12px;
  padding-left: 8px;
}

._3L5YSq {
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

._1OhGeD,
._1OhGeD:active,
._1OhGeD:hover {
  color: inherit;
}

._19haGh {
  font-size: 12px;
  color: #969696;
}

._3VRLsv {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10px;
  font-size: 16px;
}

._3VRLsv {
  box-sizing: content-box;
  padding-left: 16px;
  padding-right: 16px;
}

.jsd-meta {
  color: #ea6f5a !important;
  font-size: 18px;
  margin-right: 5px;
  font-weight: 800;
}

.jsdt-meta {
  color: #000000 !important;
  font-size: 18px;
  margin-right: 5px;
}

._3SxgBd,
.two_Row {
  cursor: pointer;
}

.index .main .note-list .have-img .wrap-img {
  width: 150px;
}

.note-list .have-img .wrap-img {
  position: absolute;
  top: 46%;
  margin-top: -60px;
  left: 15px;
  width: 206px;
  height: 135px;
}

.img-blur-done {
  width: 130px;
  height: 80px;
}

.cont_der {
  display: flex;
  overflow: hidden;
  margin-bottom: 8px;
}

.two_Row {
  overflow: hidden;

  text-overflow: ellipsis;

  display: -webkit-box;

  -webkit-box-orient: vertical;

  -webkit-line-clamp: 2;
  width: 198px;
}

.sxBtn {
  background-color: rgba(207, 119, 0, 1);
  color: #fff;
  border-color: rgba(207, 119, 0, 1);
  transition: all 0.3s ease 0s;
}

.sxBtn:hover {
  background-color: rgb(238, 184, 113);
  color: #fff;
  border-color: rgb(238, 184, 113);
}

._3SxgBd,
.two_Row {
  transition: all 0.3s ease 0s;
}

._3SxgBd:hover,
.two_Row:hover {
  color: #be791a;
}

.seenCls ._2OwGUo {
  display: none;
}

.seenCls ._gp-ck {
  width: 94%;
  margin-right: 0;
}

.seenCls ._3VRLsv {
  padding-left: 0;
  padding-right: 0;
}

.back {
  padding: 15px 0 10px 0;
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;
}
@media (max-width: 1400px) {
  .act_des_content {
    transform: translateX(0px) scaleX(0.98);
  }
}
</style>
