<template>
  <div class="m">
    <ul class="pgwSlider">
      <li>
        <img src="../../assets/index0.png" />
      </li>
      <li>
        <img src="../../assets/index0.png" />
      </li>
      <li>
        <img src="../../assets/index0.png" />
      </li>
      <li>
        <img src="../../assets/index0.png" />
      </li>
    </ul>
    <div class="swp-dom">
      <div class="swp-top">
        <el-radio-group v-model="radio" size="medium ">
          <el-radio :label="1">场景</el-radio>
          <el-radio :label="2">演员</el-radio>
          <el-radio :label="3">住宿</el-radio>
          <el-radio :label="4">车辆</el-radio>
          <el-radio :label="5">道具</el-radio>
          <el-radio :label="6">服装</el-radio>
        </el-radio-group>
      </div>
      <div class="swp-do">
        <el-input v-model="input2" placeholder="搜索 场景关键词、编号">
          <template slot="append">搜索</template>
        </el-input>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { homeSwiper } from "@/api/home";
export default {
  name: "Layout",
  data() {
    return {
      radio: 1,
      input2: "",
      imageArr: [],
    };
  },
  mounted() {
    this.getSwiper();
    // console.log("生命周期啦啦啦啦啦啦21121212121");
    (function (a) {
      a.fn.pgwSlider = function (i) {
        var e = {
          autoSlide: true,
          adaptiveHeight: false,
          adaptiveDuration: 300,
          transitionDuration: 300,
          intervalDuration: 4500,
        };
        if (this.length == 0) {
          return this;
        } else {
          if (this.length > 1) {
            this.each(function () {
              a(this).pgwSlider(i);
            });
            return this;
          }
        }
        var g = this;
        g.plugin = this;
        g.data = [];
        g.config = {};
        g.currentSlide = 0;
        g.slideCount = 0;
        g.eventInterval = null;
        g.window = a(window);
        var h = function () {
          g.config = a.extend({}, e, i);
          c();
          if (g.config.autoSlide) {
            f();
          }
          return true;
        };
        var b = function (l) {
          var p;
          var m = {};
          var o = l.find("a").attr("href");
          if (typeof o !== "undefined" && o != "") {
            m.link = o;
            var r = l.find("a").attr("target");
            if (typeof r !== "undefined" && r != "") {
              m.linkTarget = r;
            }
          }
          var k = l.find("img").attr("src");
          if (typeof k !== "undefined" && k != "") {
            m.thumbnail = k;
          }
          var s = l.find("img").attr("data-large-src");
          if (typeof s !== "undefined" && s != "") {
            m.image = s;
          }
          p = l.find("span").text();
          if (typeof p !== "undefined" && p != "") {
            m.title = p;
          } else {
            var n = l.find("img").attr("alt");
            if (typeof n !== "undefined" && n != "") {
              m.title = n;
            }
          }
          var q = l.find("img").attr("data-description");
          if (typeof q !== "undefined" && q != "") {
            m.description = q;
          }
          return m;
        };
        var d = function (k, l) {
          var m = (k - (g.slideCount - 1) * 6) / g.slideCount;
          var n = 100 / g.slideCount;
          g.plugin.find("ul li").css({
            width: n + "%",
          });
          if (typeof l !== "undefined" && l) {
            g.plugin.find(".ps-current").animate(
              {
                height: k,
              },
              g.config.adaptiveDuration,
              function () {
                g.plugin.find("ul li").animate(
                  {
                    height: m,
                  },
                  g.config.adaptiveDuration
                );
              }
            );
          } else {
            g.plugin.find(".ps-current").css("height", k);
            g.plugin.find("ul li").css("height", m);
          }
          return true;
        };
        var c = function () {
          g.plugin.wrap('<div class="pgwSlider"></div>');
          g.plugin = g.plugin.parent();
          g.plugin.prepend('<div class="ps-current"></div>');
          g.slideCount = g.plugin.find("ul li").length;
          var k = 1;
          g.plugin.find("ul li").each(function () {
            var l = b(a(this));
            l.id = k;
            g.data.push(l);
            a(this).addClass("elt_" + l.id);
            if (l.title) {
              if (a(this).find("span").length == 1) {
                if (a(this).find("span").text() == "") {
                  a(this).find("span").text(l.title);
                }
              } else {
                a(this)
                  .find("img")
                  .after("<span>" + l.title + "</span>");
              }
            }
            a(this)
              .css("cursor", "pointer")
              .click(function (m) {
                m.preventDefault();
                j(l.id);
              });
            k++;
          });
          if (g.config.autoSlide) {
            g.plugin
              .on("mouseenter", function () {
                clearInterval(g.eventInterval);
                g.eventInterval = null;
              })
              .on("mouseleave", function () {
                f();
              });
          }
          j(1);
          return true;
        };
        var j = function (k, n) {
          var p;
          var q;
          var m = g.data[k - 1];
          var l = g.plugin.find(".ps-current");
          if (typeof m === "undefined") {
            throw new Error("PgwSlider - The element " + k + " is undefined");
            // eslint-disable-next-line no-unreachable
            return false;
          }
          g.currentSlide = k;
          if (typeof l.animate === "undefined") {
            l.animate = function (o, p, q) {
              l.css(o);
              if (q) {
                q();
              }
            };
          }
          l.animate(
            {
              opacity: 0,
            },
            g.config.transitionDuration,
            function () {
              g.plugin.find("ul li").css("opacity", "0.6");
              g.plugin.find("ul li img").css("border", "2px solid transparent");
              g.plugin.find("ul li.elt_" + k).css("opacity", "1");
              g.plugin
                .find("ul li.elt_" + k)
                .find("img")
                .css("border", "2px solid #BE791A");
              if (m.image) {
                l.html(
                  '<img src="' + m.image + '" alt="' + (m.title ? m.title : "") + '">'
                );
              } else {
                if (m.thumbnail) {
                  l.html(
                    '<img src="' +
                      m.thumbnail +
                      '" alt="' +
                      (m.title ? m.title : "") +
                      '">'
                  );
                } else {
                  l.html("");
                }
              }
              var o = "";
              if (m.title) {
                o += "<b>" + m.title + "</b>";
              }
              if (m.description) {
                if (o != "") {
                  o += "<br>";
                }
                o += m.description;
              }
              if (o != "") {
                l.append("<span>" + o + "</span>");
              }
              if (m.link) {
                p = "";
                if (m.linkTarget) {
                  p = ' target="' + m.linkTarget + '"';
                }
                l.html('<a href="' + m.link + '"' + p + ">" + l.html() + "</a>");
              }
              l.find("img").on("load", function () {
                if (
                  typeof g.plugin.find(".ps-current").attr("data-checked") ===
                    "undefined" ||
                  g.plugin.find(".ps-current").attr("data-checked") == null
                ) {
                  q = g.plugin.find(".ps-current img").height();
                  d(q);
                  g.plugin.find(".ps-current").attr("data-checked", "true");
                  g.window.resize(function () {
                    var r = g.plugin.find(".ps-current img").height();
                    d(r);
                  });
                } else {
                  if (g.config.adaptiveHeight) {
                    q = g.plugin.find(".ps-current img").height();
                    d(q, true);
                  }
                }
              });
              l.animate(
                {
                  opacity: 1,
                },
                g.config.transitionDuration
              );
            }
          );
          if (typeof n !== "undefined" && g.config.autoSlide) {
            f();
          }
          return true;
        };
        var f = function () {
          var k;
          clearInterval(g.eventInterval);
          if (g.slideCount > 1 && g.config.autoSlide) {
            g.eventInterval = setInterval(function () {
              if (g.currentSlide + 1 <= g.slideCount) {
                k = g.currentSlide + 1;
              } else {
                k = 1;
              }
              j(k);
            }, g.config.intervalDuration);
          }
          return true;
        };
        g.startSlide = function () {
          g.config.autoSlide = true;
          f();
          return true;
        };

        g.stopSlide = function () {
          g.config.autoSlide = false;
          clearInterval(g.eventInterval);
          return true;
        };

        g.getCurrentSlide = function () {
          return g.currentSlide;
        };

        g.getSlideCount = function () {
          return g.slideCount;
        };

        g.displaySlide = function (k) {
          j(k, true);
          return true;
        };

        g.nextSlide = function () {
          var k;
          if (g.currentSlide + 1 <= g.slideCount) {
            k = g.currentSlide + 1;
          } else {
            k = 1;
          }
          j(k, true);
          return true;
        };

        g.previousSlide = function () {
          var k;
          if (g.currentSlide - 1 >= 1) {
            k = g.currentSlide - 1;
          } else {
            k = g.slideCount;
          }
          j(k, true);
          return true;
        };

        g.destroy = function (k) {
          clearInterval(g.eventInterval);
          g.plugin.find("ul li").each(function () {
            a(this).unbind("click");
          });
          g.data = [];
          g.config = {};
          g.currentSlide = 0;
          g.slideCount = 0;
          g.eventInterval = null;
          g.window = null;
          if (typeof k !== "undefined") {
            g.plugin.find(".ps-current").unwrap().remove();
            g.hide();
          } else {
            g.parent().remove();
          }
          return true;
        };

        g.reload = function (k) {
          g.destroy(true);
          g = this;
          g.plugin = this;
          g.window = a(window);
          g.plugin.show();
          g.config = a.extend({}, e, k);
          c();
          if (g.config.autoSlide) {
            f();
          }
          return true;
        };

        h();
        return this;
      };
    })($);
    $(document).ready(function () {
      $(".pgwSlider").pgwSlider();
    });
  },
  methods: {
    async getSwiper() {
      let res = await homeSwiper();
      if (res.status == 200 && res.data.data.length) {
        this.imageArr = res.data.data;
      }
      // console.log(res.data.data);
    },
  },
};
</script>
<style scoped>
div/deep/.pgwSlider {
  width: 100%;
}

div/deep/.pgwSlider .ps-current {
  float: left;
  width: 100%;
  height: 800px !important;
  overflow: hidden;
  height: inherit;
  position: relative;
  font-size: 1rem;
  top: 0;
}

/deep/.pgwSlider .ps-current span {
  position: absolute;
  width: 100%;
  padding: 8px 10px 10px;
  background: rgba(0, 0, 0, 0.7);
  left: 0;
  bottom: 0;
  color: #fff;
}

/deep/.pgwSlider .ps-current img {
  max-width: 100%;
  min-width: 100%;
  height: auto;
  display: block;
}

/deep/ul.pgwSlider,
.pgwSlider > ul {
  position: absolute;
  left: 88%;
  top: 148px;
  width: 10%;
  padding: 0;
  list-style: none;
  margin: 0;
}

/deep/ul.pgwSlider > li,
.pgwSlider > ul > li {
  width: 225px !important;
  height: 125px !important;
  right: 46px;
  margin-bottom: 6px;
  overflow: hidden;
  position: relative;
  opacity: 0.6;
  filter: alpha(opacity=60);
  font-size: 0.8rem;
}

/deep/ul.pgwSlider > li:last-child,
.pgwSlider > ul > li:last-child {
  margin-bottom: 0;
}

/deep/ul.pgwSlider > li span,
.pgwSlider > ul > li span {
  display: block;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 3px 0 5px 5px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  text-overflow: ellipsis;
}

/deep/ul.pgwSlider > li:hover,
.pgwSlider > ul > li:hover {
  opacity: 1 !important;
}

/deep/ul.pgwSlider > li img,
.pgwSlider > ul > li img {
  width: 100%;
  min-height: 100%;
  display: block;
}

@media (min-width: 481px) {
  /* /deep/ul.pgwSlider>li,
  .pgwSlider>ul>li {
    width: 100% !important;
    height: 135px !important;
  } */
}

@media (max-width: 480px) {
  /deep/.pgwSlider .ps-current {
    margin-bottom: 6px;
    font-size: 0.9rem;
  }

  /deep/.pgwSlider .ps-current img {
    width: 100%;
    min-height: inherit;
  }

  /deep/.pgwSlider .ps-current,
  ul.pgwSlider,
  .pgwSlider > ul {
    width: 100%;
  }

  /* /deep/ul.pgwSlider>li,
  .pgwSlider>ul>li {
    float: left;
    min-height: 50px;
    max-height: 70px;
    min-width: 20%;
  } */

  /deep/ul.pgwSlider > li span,
  .pgwSlider > ul > li span {
    white-space: nowrap;
  }
}

@media only screen and (min-width: 1535px) and (max-width: 1683px) {
  .swp-dom {
    top: 441px;
  }
}

@media only screen and (min-width: 1400px) and (max-width: 1534px) {
  .swp-dom {
    top: 401px;
  }
}

@media only screen and (min-width: 700px) and (max-width: 1399px) {
  .swp-dom {
    top: 401px;
    left: 12%;
  }

  /* ul.pgwSlider>li,
  .pgwSlider>ul>li {
    width: 225px !important;
    height: 125px !important;
  } */
}

.el-popper .popper__arrow,
.el-popper .popper__arrow::after {
  display: none !important;
}

.el-popper {
  min-width: 101px !important;
  position: absolute;
  top: 87px !important;
  text-align: center !important;
  border-radius: 0;
  left: 51px !important;
  transform-origin: center top;
  z-index: 2001;
  box-shadow: none !important;
  background-color: #fff !important;
  opacity: 0.8 !important;
  border: none !important;
}

.el-select-dropdown__item.selected {
  color: #606266 !important;
  font-weight: 500 !important;
}

.swp-dom {
  width: 750px;
  background: black;
  height: 154px;
  position: absolute;
  left: 29%;
  top: 589px;
  background-color: #000000;
  /* IE6和部分IE7内核的浏览器(如QQ浏览器)下颜色被覆盖 */
  background-color: rgb(0 0 0 / 50%);
  /* IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂，但解析为透明 */
}

.swp-top {
  margin: 26px 26px 20px 26px;
}

/deep/.swp-dom .el-radio__label {
  color: #fff !important;
  font-size: 16px;
}

/deep/.swp-dom.el-radio__inner {
  width: 16px;
  height: 16px;
}

/deep/.swp-dom .el-radio__input.is-checked .el-radio__inner {
  border-color: #be791a;
  background: #be791a;
}

.swp-do {
  margin: 0px 30px;
}

/deep/.swp-do .el-input-group__append:hover {
  background: #ffffff;
  color: #be791a;
}

/deep/.swp-dom .el-input-group__append {
  background: #be791a;
  cursor: pointer;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 8px 48px;
  transition: background-color 0.3s, color 0.3s;
}

.mt50 {
  margin-top: 50px;
}

.main-btn {
  color: #be791a !important;
  background: #fff !important;
  border-color: #be791a !important;
  border-radius: 0 !important;
  padding: 12px 36px !important;
}

.tc {
  text-align: center;
}

@media (max-width: 1570px) {
  .swp-dom {
    top: 542px;
  }
}
@media (max-width: 1500px) {
  .swp-dom {
    top: 500px;
  }
}
@media (max-width: 1400px) {
  .swp-dom {
    top: 450px;
  }
  /deep/ul.pgwSlider,
  .pgwSlider > ul {
    top: 100px;
  }
}
</style>
