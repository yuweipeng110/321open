<template>
  <div class="loginBox">
    <div class="signContent">
      <div class="signContainer">
        <form id="form_key" action="" class="loginForm" data-module="smsFrom">
          <div class="tabBox">
            <div class="tabBoxSwitch">
              <ul v-if="!weChat" class="tabBoxSwitchUl">
                <li :class="{ tabActive: active }" @click="handleAct(true)">
                  免密码登录
                </li>
                <!-- <li :class="{ tabActive: !active }" @click="handleAct(false)">密码登录</li> -->
              </ul>
              <ul v-if="weChat" class="tabBoxSwitchUl">
                <li class="tabActive">扫码登录</li>
              </ul>
              <div class="ercode_tab swicth-ercode">
                <svg
                  width="52"
                  height="52"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="currentColor"
                >
                  <defs>
                    <path
                      id="id-3938311804-a"
                      d="M0 0h48a4 4 0 0 1 4 4v48L0 0z"
                    />
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <mask id="id-3938311804-b" fill="#fff">
                      <use xlink:href="#id-3938311804-a" />
                    </mask>
                    <use fill="#BE791A" xlink:href="#id-3938311804-a" />
                    <image
                      width="52"
                      height="52"
                      mask="url(#id-3938311804-b)"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc8AAAHPCAYAAAA1eFErAAAABGdBTUEAALGOfPtRkwAAGNxJREFUeAHt3UGOG0cSBdDRgAdwA7wrr2Ce1QR4BI0JDHPhhToNfVZFZjxtugylIyNeVOuDK/7448+/fv7Hn/YCz9s1YvB1f0TqVC2SckrOt7M57+SbolZS4L/JYmoRIECAAIEOAsKzw5bNSIAAAQJRAeEZ5VSMAAECBDoICM8OWzYjAQIECEQFhGeUUzECBAgQ6CAgPDts2YwECBAgEBUQnlFOxQgQIECgg4Dw7LBlMxIgQIBAVEB4RjkVI0CAAIEOAsKzw5bNSIAAAQJRAeEZ5VSMAAECBDoICM8OWzYjAQIECEQFhGeUUzECBAgQ6CAgPDts2YwECBAgEBUQnlFOxQgQIECgg4Dw7LBlMxIgQIBAVEB4RjkVI0CAAIEOAsKzw5bNSIAAAQJRgUuy2vN2TZZT6xuBr/vjmxPH/3XFdyDplKqVdErVSs32eut27in5W5VySva0c63kO+6T585vitkIECBA4CMCwvMjrIoSIECAwM4CwnPn7ZqNAAECBD4iIDw/wqooAQIECOwsIDx33q7ZCBAgQOAjAsLzI6yKEiBAgMDOAsJz5+2ajQABAgQ+IiA8P8KqKAECBAjsLCA8d96u2QgQIEDgIwLC8yOsihIgQIDAzgLCc+ftmo0AAQIEPiIgPD/CqigBAgQI7CwgPHfertkIECBA4CMCwvMjrIoSIECAwM4CwnPn7ZqNAAECBD4iIDw/wqooAQIECOwsIDx33q7ZCBAgQOAjApePVP3Noslv+/7NVj7yv+/87fEVd5f0Ts2XqvORF1TR5QR2f5+Sv8Op5frkmZJUhwABAgTaCAjPNqs2KAECBAikBIRnSlIdAgQIEGgjIDzbrNqgBAgQIJASEJ4pSXUIECBAoI2A8GyzaoMSIECAQEpAeKYk1SFAgACBNgLCs82qDUqAAAECKQHhmZJUhwABAgTaCAjPNqs2KAECBAikBIRnSlIdAgQIEGgjIDzbrNqgBAgQIJASEJ4pSXUIECBAoI2A8GyzaoMSIECAQEpAeKYk1SFAgACBNgLCs82qDUqAAAECKQHhmZJUhwABAgTaCAjPNqs2KAECBAikBC6pQuoQeAk8b1cQEwIVnb7uj4nOjz1S0elYAbdVFfDJs+pm9EWAAAECZQWEZ9nVaIwAAQIEqgoIz6qb0RcBAgQIlBUQnmVXozECBAgQqCogPKtuRl8ECBAgUFZAeJZdjcYIECBAoKqA8Ky6GX0RIECAQFkB4Vl2NRojQIAAgaoCwrPqZvRFgAABAmUFhGfZ1WiMAAECBKoKCM+qm9EXAQIECJQVEJ5lV6MxAgQIEKgqIDyrbkZfBAgQIFBWQHiWXY3GCBAgQKCqgPCsuhl9ESBAgEBZAeFZdjUaI0CAAIGqAsKz6mb0RYAAAQJlBS5lO9NYe4Gv+yNi8LxdI3VeRVK1UrPFBgvOluxJLQJVBXzyrLoZfREgQIBAWQHhWXY1GiNAgACBqgLCs+pm9EWAAAECZQWEZ9nVaIwAAQIEqgoIz6qb0RcBAgQIlBUQnmVXozECBAgQqCogPKtuRl8ECBAgUFZAeJZdjcYIECBAoKqA8Ky6GX0RIECAQFkB4Vl2NRojQIAAgaoCwrPqZvRFgAABAmUFhGfZ1WiMAAECBKoKCM+qm9EXAQIECJQVEJ5lV6MxAgQIEKgqIDyrbkZfBAgQIFBWQHiWXY3GCBAgQKCqgPCsuhl9ESBAgEBZAeFZdjUaI0CAAIGqApeKjT1v14pt6WlC4Ov+mDh17JGKPR0rMHdb0in1O1yxpznNY0+lvI/teu3bfPJce3+6J0CAAIETBITnCeiuJECAAIG1BYTn2vvTPQECBAicICA8T0B3JQECBAisLSA8196f7gkQIEDgBAHheQK6KwkQIEBgbQHhufb+dE+AAAECJwgIzxPQXUmAAAECawsIz7X3p3sCBAgQOEFAeJ6A7koCBAgQWFtAeK69P90TIECAwAkCwvMEdFcSIECAwNoCwnPt/emeAAECBE4QEJ4noLuSAAECBNYWEJ5r70/3BAgQIHCCgPA8Ad2VBAgQILC2gPBce3+6J0CAAIETBC7JO5Pf+p7sS601BZ63a6Tx5Hupp8hKFPm/QPLdhHqsgE+ex3q7jQABAgQ2EBCeGyzRCAQIECBwrIDwPNbbbQQIECCwgYDw3GCJRiBAgACBYwWE57HebiNAgACBDQSE5wZLNAIBAgQIHCsgPI/1dhsBAgQIbCAgPDdYohEIECBA4FgB4Xmst9sIECBAYAMB4bnBEo1AgAABAscKCM9jvd1GgAABAhsICM8NlmgEAgQIEDhWQHge6+02AgQIENhAQHhusEQjECBAgMCxAsLzWG+3ESBAgMAGAsJzgyUagQABAgSOFRCex3q7jQABAgQ2EBCeGyzRCAQIECBwrMCPn3//OfZKtxGYE/i6P+YOfnPqebt+c2L+r1M9zd/4/cnkfN/fNneC05yTU+sK+OS57u50ToAAAQInCQjPk+BdS4AAAQLrCgjPdXencwIECBA4SUB4ngTvWgIECBBYV0B4rrs7nRMgQIDASQLC8yR41xIgQIDAugLCc93d6ZwAAQIEThIQnifBu5YAAQIE1hUQnuvuTucECBAgcJKA8DwJ3rUECBAgsK6A8Fx3dzonQIAAgZMEhOdJ8K4lQIAAgXUFhOe6u9M5AQIECJwkIDxPgnctAQIECKwrIDzX3Z3OCRAgQOAkAeF5ErxrCRAgQGBdAeG57u50ToAAAQInCVyS3/ie+kb7ij2dtJ9fXpt0+uVF/+IvU+/Av7iy/dGK70H7pUwCpHZX8fcuNduLMjVfsiefPCdfcscIECBAgMBbQHi+JfwkQIAAAQKTAsJzEsoxAgQIECDwFhCebwk/CRAgQIDApIDwnIRyjAABAgQIvAWE51vCTwIECBAgMCkgPCehHCNAgAABAm8B4fmW8JMAAQIECEwKCM9JKMcIECBAgMBbQHi+JfwkQIAAAQKTAsJzEsoxAgQIECDwFhCebwk/CRAgQIDApIDwnIRyjAABAgQIvAWE51vCTwIECBAgMCkgPCehHCNAgAABAm8B4fmW8JMAAQIECEwKCM9JKMcIECBAgMBbQHi+JfwkQIAAAQKTApfJc8se+7o/Ir0/b9dInWSRij0l50vVSr0Dr34qmqfmS86W6in1DiTr7Dzbyyk13+7vk0+eyd8qtQgQIECghYDwbLFmQxIgQIBAUkB4JjXVIkCAAIEWAsKzxZoNSYAAAQJJAeGZ1FSLAAECBFoICM8WazYkAQIECCQFhGdSUy0CBAgQaCEgPFus2ZAECBAgkBQQnklNtQgQIECghYDwbLFmQxIgQIBAUkB4JjXVIkCAAIEWAsKzxZoNSYAAAQJJAeGZ1FSLAAECBFoICM8WazYkAQIECCQFhGdSUy0CBAgQaCEgPFus2ZAECBAgkBQQnklNtQgQIECghcAl+W3fLcQCQ6a+qT3QSrxE8n1K1Up6p2qlZnstMFkr/kL8ZsHkbKnd/eZIbf73pHfqPUj25JNnm1fZoAQIECCQEhCeKUl1CBAgQKCNgPBss2qDEiBAgEBKQHimJNUhQIAAgTYCwrPNqg1KgAABAikB4ZmSVIcAAQIE2ggIzzarNigBAgQIpASEZ0pSHQIECBBoIyA826zaoAQIECCQEhCeKUl1CBAgQKCNgPBss2qDEiBAgEBKQHimJNUhQIAAgTYCwrPNqg1KgAABAikB4ZmSVIcAAQIE2ggIzzarNigBAgQIpASEZ0pSHQIECBBoIyA826zaoAQIECCQEhCeKUl1CBAgQKCNwOXr/mgz7G6DPm/X2EgV34NUT0mnFHhqtlQ/rzoVnZLz7VzL+zS33eQ77pPnnLlTBAgQIEBgCAjPQeGBAAECBAjMCQjPOSenCBAgQIDAEBCeg8IDAQIECBCYExCec05OESBAgACBISA8B4UHAgQIECAwJyA855ycIkCAAAECQ0B4DgoPBAgQIEBgTkB4zjk5RYAAAQIEhoDwHBQeCBAgQIDAnIDwnHNyigABAgQIDAHhOSg8ECBAgACBOQHhOefkFAECBAgQGALCc1B4IECAAAECcwLCc87JKQIECBAgMASE56DwQIAAAQIE5gSE55yTUwQIECBAYAhckt+sXfHbzMekhR5S5rznlpp0Su1urnOnkgKp3SXfp9R8qdlS/VStk9ydT55Vt6wvAgQIECgrIDzLrkZjBAgQIFBVQHhW3Yy+CBAgQKCsgPAsuxqNESBAgEBVAeFZdTP6IkCAAIGyAsKz7Go0RoAAAQJVBYRn1c3oiwABAgTKCgjPsqvRGAECBAhUFRCeVTejLwIECBAoKyA8y65GYwQIECBQVUB4Vt2MvggQIECgrIDwLLsajREgQIBAVQHhWXUz+iJAgACBsgLCs+xqNEaAAAECVQWEZ9XN6IsAAQIEygoIz7Kr0RgBAgQIVBUQnlU3oy8CBAgQKCsgPMuuRmMECBAgUFXgUrGx5+0aa+vr/ojVqlYo6ZSaraJ3RaeU96vO7vMlrarVsru5jVT8d8Unz7ndOUWAAAECBIaA8BwUHggQIECAwJyA8JxzcooAAQIECAwB4TkoPBAgQIAAgTkB4Tnn5BQBAgQIEBgCwnNQeCBAgAABAnMCwnPOySkCBAgQIDAEhOeg8ECAAAECBOYEhOeck1MECBAgQGAICM9B4YEAAQIECMwJCM85J6cIECBAgMAQEJ6DwgMBAgQIEJgTEJ5zTk4RIECAAIEhIDwHhQcCBAgQIDAnIDznnJwiQIAAAQJDQHgOCg8ECBAgQGBOQHjOOTlFgAABAgSGwI8//vzr5/ivDR9S39Re8ZvMK64r5f2araJ5ar6Ks+3+PlWcz3swt5WKv3c+ec7tzikCBAgQIDAEhOeg8ECAAAECBOYEhOeck1MECBAgQGAICM9B4YEAAQIECMwJCM85J6cIECBAgMAQEJ6DwgMBAgQIEJgTEJ5zTk4RIECAAIEhIDwHhQcCBAgQIDAnIDznnJwiQIAAAQJDQHgOCg8ECBAgQGBOQHjOOTlFgAABAgSGgPAcFB4IECBAgMCcgPCcc3KKAAECBAgMAeE5KDwQIECAAIE5AeE55+QUAQIECBAYAsJzUHggQIAAAQJzAsJzzskpAgQIECAwBITnoPBAgAABAgTmBH78/PvP3NE1T33dH+Uaf96u5Xra2anibMkXIPU+JZ1SPSWdUrWSTqmedvZOGaXr+OSZFlWPAAECBLYXEJ7br9iABAgQIJAWEJ5pUfUIECBAYHsB4bn9ig1IgAABAmkB4ZkWVY8AAQIEthcQntuv2IAECBAgkBYQnmlR9QgQIEBgewHhuf2KDUiAAAECaQHhmRZVjwABAgS2FxCe26/YgAQIECCQFhCeaVH1CBAgQGB7AeG5/YoNSIAAAQJpAeGZFlWPAAECBLYXEJ7br9iABAgQIJAWEJ5pUfUIECBAYHsB4bn9ig1IgAABAmkB4ZkWVY8AAQIEthf48ceff/2sNmXFb0Wv+O3xyb2lzDkltzJXa3fzOQWnUgKpfwtS/bzqpN7x5Gw+eSY3rBYBAgQItBAQni3WbEgCBAgQSAoIz6SmWgQIECDQQkB4tlizIQkQIEAgKSA8k5pqESBAgEALAeHZYs2GJECAAIGkgPBMaqpFgAABAi0EhGeLNRuSAAECBJICwjOpqRYBAgQItBAQni3WbEgCBAgQSAoIz6SmWgQIECDQQkB4tlizIQkQIEAgKSA8k5pqESBAgEALAeHZYs2GJECAAIGkgPBMaqpFgAABAi0EhGeLNRuSAAECBJICwjOpqRYBAgQItBAQni3WbEgCBAgQSApcnrdrst62tTitu1q7W3d3yc53fg++7o8kVaRWsqfU7pI9+eQZeU0UIUCAAIFOAsKz07bNSoAAAQIRAeEZYVSEAAECBDoJCM9O2zYrAQIECEQEhGeEURECBAgQ6CQgPDtt26wECBAgEBEQnhFGRQgQIECgk4Dw7LRtsxIgQIBAREB4RhgVIUCAAIFOAsKz07bNSoAAAQIRAeEZYVSEAAECBDoJCM9O2zYrAQIECEQEhGeEURECBAgQ6CQgPDtt26wECBAgEBEQnhFGRQgQIECgk4Dw7LRtsxIgQIBAREB4RhgVIUCAAIFOApfkN2t3gttt1tQ3te/m8s95Ur8vSe9krX/Oe/Z/p7yTcyR7qri71HwVZ0u+Bz55JjXVIkCAAIEWAsKzxZoNSYAAAQJJAeGZ1FSLAAECBFoICM8WazYkAQIECCQFhGdSUy0CBAgQaCEgPFus2ZAECBAgkBQQnklNtQgQIECghYDwbLFmQxIgQIBAUkB4JjXVIkCAAIEWAsKzxZoNSYAAAQJJAeGZ1FSLAAECBFoICM8WazYkAQIECCQFhGdSUy0CBAgQaCEgPFus2ZAECBAgkBQQnklNtQgQIECghYDwbLFmQxIgQIBAUkB4JjXVIkCAAIEWAsKzxZoNSYAAAQJJgUuy2PN2TZZT6xuBr/vjmxPH/3XFdyDptPN8ydmS5se/xb++Men065vO+duK81V8n3zyPOf9dCsBAgQILCwgPBdentYJECBA4BwB4XmOu1sJECBAYGEB4bnw8rROgAABAucICM9z3N1KgAABAgsLCM+Fl6d1AgQIEDhHQHie4+5WAgQIEFhYQHguvDytEyBAgMA5AsLzHHe3EiBAgMDCAsJz4eVpnQABAgTOERCe57i7lQABAgQWFhCeCy9P6wQIECBwjoDwPMfdrQQIECCwsIDwXHh5WidAgACBcwSE5znubiVAgACBhQWE58LL0zoBAgQInCMgPM9xdysBAgQILCxwqdh7xW8NTzpV/Kb25HypWhXfg4o9pbx3r2N3cxtOOe3+75xPnnPvk1MECBAgQGAICM9B4YEAAQIECMwJCM85J6cIECBAgMAQEJ6DwgMBAgQIEJgTEJ5zTk4RIECAAIEhIDwHhQcCBAgQIDAnIDznnJwiQIAAAQJDQHgOCg8ECBAgQGBOQHjOOTlFgAABAgSGgPAcFB4IECBAgMCcgPCcc3KKAAECBAgMAeE5KDwQIECAAIE5AeE55+QUAQIECBAYAsJzUHggQIAAAQJzAsJzzskpAgQIECAwBITnoPBAgAABAgTmBITnnJNTBAgQIEBgCAjPQeGBAAECBAjMCVzmjjlFYF2B5+1arvmv+yPWU8X5Uj3t7pScL/ZChQpVnC31Xr6IfPIMvSjKECBAgEAfAeHZZ9cmJUCAAIGQgPAMQSpDgAABAn0EhGefXZuUAAECBEICwjMEqQwBAgQI9BEQnn12bVICBAgQCAkIzxCkMgQIECDQR0B49tm1SQkQIEAgJCA8Q5DKECBAgEAfAeHZZ9cmJUCAAIGQgPAMQSpDgAABAn0EhGefXZuUAAECBEICwjMEqQwBAgQI9BEQnn12bVICBAgQCAkIzxCkMgQIECDQR0B49tm1SQkQIEAgJCA8Q5DKECBAgEAfgUufUU16hEDy2+OT3/p+xOxn3ZE0P2uGI+5NOSXfy1St1GyvPaR6Su40NV+qzms2nzyTG1aLAAECBFoICM8WazYkAQIECCQFhGdSUy0CBAgQaCEgPFus2ZAECBAgkBQQnklNtQgQIECghYDwbLFmQxIgQIBAUkB4JjXVIkCAAIEWAsKzxZoNSYAAAQJJAeGZ1FSLAAECBFoICM8WazYkAQIECCQFhGdSUy0CBAgQaCEgPFus2ZAECBAgkBQQnklNtQgQIECghYDwbLFmQxIgQIBAUkB4JjXVIkCAAIEWAsKzxZoNSYAAAQJJAeGZ1FSLAAECBFoICM8WazYkAQIECCQFLsliqVrP2zVVSp2DBXbf3df9cbDo99elzHee7aWYmi9V5/vNOvEWSL3j73qJnz55JhTVIECAAIFWAsKz1boNS4AAAQIJAeGZUFSDAAECBFoJCM9W6zYsAQIECCQEhGdCUQ0CBAgQaCUgPFut27AECBAgkBAQnglFNQgQIECglYDwbLVuwxIgQIBAQkB4JhTVIECAAIFWAsKz1boNS4AAAQIJAeGZUFSDAAECBFoJCM9W6zYsAQIECCQEhGdCUQ0CBAgQaCUgPFut27AECBAgkBAQnglFNQgQIECglYDwbLVuwxIgQIBAQkB4JhTVIECAAIFWApfktL5hPam5Zq3kO1Dx2+Mr9pQ0T711KafkbKmeUkZV66TMK3qnZnvtzifPqm+wvggQIECgrIDwLLsajREgQIBAVQHhWXUz+iJAgACBsgLCs+xqNEaAAAECVQWEZ9XN6IsAAQIEygoIz7Kr0RgBAgQIVBUQnlU3oy8CBAgQKCsgPMuuRmMECBAgUFVAeFbdjL4IECBAoKyA8Cy7Go0RIECAQFUB4Vl1M/oiQIAAgbICwrPsajRGgAABAlUFhGfVzeiLAAECBMoKCM+yq9EYAQIECFQVEJ5VN6MvAgQIECgrIDzLrkZjBAgQIFBVQHhW3Yy+CBAgQKCsgPAsuxqNESBAgEBVgf8BFD9n1bBqeo4AAAAASUVORK5CYII="
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div v-if="!weChat">
            <div v-if="active" class="tabContent card_hover">
              <!-- tabContentPhone -->
              <div class="tabcont tabContentPhone active">
                <div class="tabcontent">
                  <div class="phoneBox">
                    <div class="phoneGroup">
                      <button
                        class="phone-btn selectBtn"
                        type="button"
                        data-type="selected"
                      >
                        <span>中国 +86</span>
                        <svg
                          class="Zi--Select Select-arrow"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 16.183l2.716-2.966a.757.757 0 0 1 1.064.001.738.738 0 0 1 0 1.052l-3.247 3.512a.758.758 0 0 1-1.064 0L8.22 14.27a.738.738 0 0 1 0-1.052.758.758 0 0 1 1.063 0L12 16.183zm0-9.365L9.284 9.782a.758.758 0 0 1-1.064 0 .738.738 0 0 1 0-1.052l3.248-3.512a.758.758 0 0 1 1.065 0L15.78 8.73a.738.738 0 0 1 0 1.052.757.757 0 0 1-1.063.001L12 6.818z"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <span class="line-show" />
                  <div class="phoneInputGroup">
                    <label for="" class="inputLabel phoneLabel">
                      <input
                        id="phoneInput"
                        type="text"
                        v-model="phome"
                        name=""
                        class="inputStyle phoneInput"
                        placeholder="手机号"
                        autocomplete="off"
                      />
                    </label>
                  </div>
                </div>
                <div class="tabcontent">
                  <div class="flex_input">
                    <label for="" class="inputLabel">
                      <input
                        id="msgInput"
                        type="number"
                        value=""
                        name=""
                        class="inputStyle msgInput"
                        placeholder="输入 6 位短信验证码"
                        autocomplete="off"
                        v-model="CodeUser"
                      />

                      <el-button
                        style="height: 40px"
                        :type="!canClick ? 'warning' : 'info'"
                        class="Right_float"
                        @click="CodeFun"
                        :disabled="canClick"
                      >
                        {{ btnText }}
                      </el-button>
                    </label>
                  </div>
                  <!-- <div class="phoneGroup"> -->
                  <!-- <button class="phone-btn msgBtn" type="button"  @click="CodeFun6666666()">
                      获取短信验证码2
                    </button> -->
                  <!-- </div> -->
                </div>
              </div>
              <!-- tabContentAccount -->
            </div>
            <div v-if="!active" class="tabcont tabContentAccount box_hover">
              <div class="tabcontent">
                <div class="phoneInputGroup">
                  <label for="" class="inputLabel phoneLabel">
                    <input
                      id="accountUser"
                      type="text"
                      value=""
                      name=""
                      class="inputStyle accountUsername"
                      placeholder="手机号或邮箱"
                      autocomplete="off"
                    />
                  </label>
                </div>
              </div>
              <div class="tabcontent">
                <div class="phoneInputGroup">
                  <label for="" class="inputLabel phoneLabel">
                    <input
                      id="accountpwd"
                      type="password"
                      value=""
                      name=""
                      class="inputStyle accountPwd"
                      placeholder="密码"
                      autocomplete="off"
                    />
                  </label>
                </div>
              </div>
            </div>
            <!-- <el-button disabled class="button fromSubmit">默认按钮</el-button> -->

            <button
              v-if="active"
              class="button fromSubmit"
              data-type="smsSubmit"
              @click.prevent="UserLogin"
            >
              注册/登录
            </button>
            <button
              v-if="!active"
              type="submit"
              class="button fromSubmit"
              data-type="smsSubmit"
            >
              登录
            </button>
            <!-- tips -->
            <div class="SignContainer-tip">
              <div>
                <div>注册即代表同意<a href="#">《隐私保护指引》</a></div>
              </div>
            </div>
          </div>
          <div v-if="weChat">
            <div class="ercodeBox">
              <div id="qrcode" class="Qrcode-img" title="">
                <!-- <img width="150" height="150" src="../img/image.png" alt="二维码"> -->
                <canvas width="150" height="150" style="display: none" /><img
                  alt="Scan me!"
                  src="data:image/png;base64,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"
                  style="display: block"
                />
              </div>
              <p>
                打开
                <span>微信 扫一扫 </span>
              </p>
              <p>在「微信」页面右上角点击「+」打开扫一扫</p>
            </div>
          </div>
        </form>
        <!-- ercodeSgin -->
        <div class="ercodeSignBox">
          <div class="ercode_tab switch-input" @click="handleW">
            <svg
              width="52"
              height="52"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="currentColor"
            >
              <defs>
                <path id="id-14580708-a" d="M0 0h48a4 4 0 0 1 4 4v48L0 0z" />
              </defs>
              <g fill="none" fill-rule="evenodd">
                <mask id="id-14580708-b" fill="#fff">
                  <use xlink:href="#id-14580708-a" />
                </mask>
                <use fill="#BE791A" xlink:href="#id-14580708-a" />
                <path
                  fill="#FFF"
                  d="M22.125 4h13.75A4.125 4.125 0 0 1 40 8.125v27.75A4.125 4.125 0 0 1 35.875 40h-13.75A4.125 4.125 0 0 1 18 35.875V8.125A4.125 4.125 0 0 1 22.125 4zm6.938 34.222c1.139 0 2.062-.945 2.062-2.11 0-1.167-.923-2.112-2.063-2.112-1.139 0-2.062.945-2.062 2.111 0 1.166.923 2.111 2.063 2.111zM21 8.333v24h16v-24H21z"
                  mask="url(#id-14580708-b)"
                />
                <g mask="url(#id-14580708-b)">
                  <path
                    fill="#FFF"
                    d="M46.996 15.482L39 19.064l-7.996-3.582A1.6 1.6 0 0 1 32.6 14h12.8a1.6 1.6 0 0 1 1.596 1.482zM47 16.646V24.4a1.6 1.6 0 0 1-1.6 1.6H32.6a1.6 1.6 0 0 1-1.6-1.6v-7.754l8 3.584 8-3.584z"
                  />
                  <path
                    fill="#BE791A"
                    d="M31 15.483v1.17l8 3.577 8-3.577v-1.17l-8 3.581z"
                    fill-rule="nonzero"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="css-1hmxk26" />
    <!-- signSocial -->
    <div class="footSign signSocial">
      <span class="social-title">社交帐号登录</span>
      <span class="Login-socialButtonGroup">
        <button
          type="button"
          class="button Login-socialButton"
          @click="handleW"
        >
          <svg
            class="Zi Zi--WeChat Login-socialIcon"
            fill="#60c84d"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              d="M2.224 21.667s4.24-1.825 4.788-2.056C15.029 23.141 22 17.714 22 11.898 22 6.984 17.523 3 12 3S2 6.984 2 11.898c0 1.86.64 3.585 1.737 5.013-.274.833-1.513 4.756-1.513 4.756zm5.943-9.707c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.569 1.25-1.271a1.26 1.26 0 0 0-1.25-1.271c-.69 0-1.25.569-1.25 1.27 0 .703.56 1.272 1.25 1.272z"
              fill-rule="evenodd"
            />
          </svg>
          微信
        </button>
      </span>
    </div>
    <!-- signDownload -->
  </div>
</template>

<script>
import { UserEmail, CodeLogin } from "@/api/user";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      active: true,
      phome: "",
      emailCode: null,
      ShowForma: false,
      weChat: false,
      CodeUser: "",
      userCode: "",
      totalTime: 60,
      canClick: false,
      btnText: "获取验证码",
    };
  },
  props: ["redirect"],
  methods: {
    handleAct(val) {
      this.active = val;
      this.weChat = false;
    },
    handleW() {
      this.weChat = !this.weChat;
    },
    // 获取短信验证码
    async CodeFun() {
      // console.log("获取短信验证码",String(this.phome));
      this.canClick = true;
      // if (this.canClick) return;
      // this.canClick = true;
      this.btnText = this.totalTime + "s后重新发送";
      const clock = window.setInterval(() => {
        this.totalTime--;

        this.btnText = this.totalTime + "s后重新发送";
        if (this.totalTime < 0) {
          window.clearInterval(clock);
          this.btnText = "重新获取";
          this.totalTime = 60;
          this.canClick = false;
        }
      }, 1000);

      let seconds = 900;
      let expires = new Date(new Date() * 1 + seconds * 1000);

      let res = await UserEmail({ mobile: this.phome });
      this.userCode = res.data.data;
      Cookies.set("code", res.data.data, { expires: expires });
      // console.log( Cookies.get("code") );
    },

    // 用户验证码登录接口
    async UserLogin() {
      // codeing...
      // this.$store.dispatch("user/getUserInfo", { id: String("1") });
      this.ShowForma = false;
      this.$emit("showFrom", this.ShowForma);
      // console.log("cokie信息",Cookies.get("code"));
      // console.log("用户输入的验证码",this.CodeUser);
      // console.log("验证码对比",this.CodeUser == this.userCode);
      if (Cookies.get("code")) {
        if (this.CodeUser == this.userCode) {
          let res = await CodeLogin({ mobile: this.phome });

          // console.log("ressss用户基本信息", res);
          if (res.status == 200 && res.data.data) {
            this.$store.dispatch("user/get_ID", res.data.data);

            this.$store.dispatch("user/getUserInfo", {
              id: String(res.data.data),
            });

            this.ShowForma = false;
            this.$emit("showFrom", this.ShowForma);
            Cookies.remove("code");
          } else {
            this.$message.error("登录失败，请稍后重试");
          }
          // console.log("验证码登录返回数据", res.data.data);
          this.$message({
            message: "用户手机号验证码匹配成功",
            type: "success",
          });

          if (this.redirect) {
            this.redirect();
          } else {
            this.$router.replace({
              name: "PersonalCenter",
            });
          }
          // localStorage.removeItem("progressServe");
        } else {
          // console.log("验证码已经过期，请重新发送");
          this.$message.error("验证码错误，请重试");
        }
      } else {
        this.$message.error("请发送验证码");
        // console.log("请发送验证码");
      }
    },
  },
};
</script>

<style scoped>
.buttonColorRed {
  background: red !important;
  color: red;
}

.loginBox {
  overflow-x: hidden;
  overflow-y: hidden;
  box-sizing: border-box;
  margin: auto;
  min-width: 0;
  padding: 0;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgb(26 26 26 / 10%);
  border-radius: 2px;
  background-color: #ffffff;
  width: 100%;
  /* overflow: hidden; */
}

.signContent {
  text-align: center;
  margin: 0 auto;
}

.signContainer {
  position: relative;
  border-radius: 4px 4px 0 0;
}

.loginForm {
  padding: 10px;
}

.tabBox {
  text-align: left;
}

.loginForm .tabBoxSwitch .tabBoxSwitchUl {
  list-style: none;
}

.loginForm .tabBoxSwitch .tabBoxSwitchUl li {
  display: inline-block;
  height: 60px;
  font-size: 16px;
  line-height: 60px;
  margin-right: 24px;
  cursor: pointer;
}

.tabActive {
  position: relative;
  color: #1a1a1a;
  font-weight: 600;
  font-synthesis: style;
}

.tabActive::before {
  display: block;
  position: absolute;
  bottom: 0;
  content: "";
  width: 100%;
  height: 3px;
  background-color: #be791a;
}

.ercode_tab {
  position: absolute;
  width: 52px;
  height: 52px;
  top: 0;
  right: 0;
}

.ercode_tab svg {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.tabcontent {
  margin-top: 24px;
  border-bottom: 1px solid #ebebeb;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 48px;
  position: relative;
}

.phoneBox {
  position: relative;
  display: inline-block;
}

.phoneGroup {
  display: inline-block;
  min-width: 72px;
  text-align: left;
}

.selectBtn {
  text-align: left;
  /* padding: 0 16px; */
  color: #8590a6;
  text-align: center;
  background: none;
  /* border: 1px solid; */
  border-radius: 3px;
  height: calc(100% - 42px);
}

.phone-btn {
  border: none;
  height: auto;
  padding: 0;
  line-height: inherit;
  background-color: transparent;

  border: none;
  border-radius: 0;
  display: inline-block;
  font-size: 14px;
  line-height: 32px;
  cursor: pointer;
}

.selectBtn {
  text-align: left;
  /* padding: 0 16px; */
  color: #8590a6;
  text-align: center;
  background: none;
  /* border: 1px solid; */
  border-radius: 3px;
  height: calc(100% - 42px);
}

.line-show {
  width: 1px;
  height: 22px;
  margin: 0 12px;
  background: #ebebeb;
}

.Select-arrow {
  margin-left: 8px;
  fill: currentcolor;
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
}

.phoneInputGroup {
  display: inline-block;
  position: relative;
  width: 213px;
}

.inputLabel {
  width: 100%;
  height: 48px;
  padding: 0;
  color: #8590a6;
  border: none;
  /* border-bottom: 1px solid #ebebeb; */
  border-radius: 0;
  display: flex;
}

.inputStyle {
  display: inline-block;
  outline: none;
  flex: 1 1;
  padding: 0;
  overflow: hidden;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  background: transparent;
  border: none;
  resize: none;
  z-index: 100;
}

.tabcontent {
  margin-top: 24px;
  border-bottom: 1px solid #ebebeb;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 48px;
  position: relative;
}

.phoneInputGroup {
  display: inline-block;
  position: relative;
  width: 100%;
}

.flex_input {
  width: 100%;
  /* display: flex;
  align-items: center; */
  /* justify-content: space-between; */
}

.Right_float {
  float: right;
}

.inputLabel {
  width: 100%;
  height: 48px;
  padding: 0;
  color: #8590a6;
  border: none;
  /* border-bottom: 1px solid #ebebeb; */
  border-radius: 0;
  display: flex;
}

.inputStyle {
  display: inline-block;
  outline: none;
  flex: 1 1;
  padding: 0;
  overflow: hidden;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  background: transparent;
  border: none;
  resize: none;
  z-index: 100;
}

.phoneGroup {
  display: inline-block;
  min-width: 72px;
  text-align: left;
}

.phone-btn {
  border: none;
  height: auto;
  padding: 0;
  line-height: inherit;
  background-color: transparent;
  border: none;
  border-radius: 0;
  display: inline-block;
  font-size: 14px;
  line-height: 32px;
  cursor: pointer;
}

.msgBtn {
  position: absolute;
  top: 24px;
  right: 0;
  padding: 4px 0;
  color: #175199;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.fromSubmit {
  color: #fff !important;
  background-color: #be791a !important;
  width: 100%;
  margin-top: 30px;
  height: 36px;
  border-color: #be791a !important;
}

.button {
  display: inline-block;
  padding: 0 16px;
  font-size: 14px;
  line-height: 32px;
  color: #8590a6;
  text-align: center;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 3px;
}

.SignContainer-tip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: block;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 12px 24px;
  color: grey;
  font-size: 13px;
  text-align: left;
}

.SignContainer-tip a {
  color: grey;
  text-decoration: none;
}

.css-1hmxk26 {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  border-top: 1px solid;
  border-color: #ebebeb;
  margin-left: 24px;
  margin-right: 24px;
}

.footSign {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  color: #8590a6;
  height: 60px;
  line-height: 60px;
  padding: 0 24px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.Login-socialButtonGroup {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-left: 2px;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}

.Login-socialButton {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  height: auto;
  padding: 0 6px;
  line-height: inherit;
  background-color: transparent;
  border: none;
  border-radius: 0;
}

.Login-socialIcon {
  margin-right: 6px;
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
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.ercodeBox {
  height: 210px;
}

.ercodeBox .Qrcode-img {
  margin: 0 auto 15px;
  line-height: 0;
  height: 150px;
  width: 150px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.ercodeBox p {
  font-size: 14px;
  line-height: 22px;
}

.ercodeBox p span {
  color: #175199;
}

div/deep/ .a input::-webkit-outer-spin-button,
div/deep/ .a input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

div/deep/ .a input[type="number"] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}

@media only screen and (min-width: 375px) and (max-width: 390px) {
  div/deep/.button {
    transform: translateY(-22px);
  }
}

@media only screen and (min-width: 391px) and (max-width: 450px) {
  div/deep/.button {
    transform: translateY(-22px);
  }
}

div/deep/.button {
  transform: translateY(-22px);
}
</style>
