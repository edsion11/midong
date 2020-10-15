<template>
  <div>
    <header>
      <img src="../assets/back.png" class="back" alt="back" />
      <img src="../assets/share.png" class="share" alt="share" />
    </header>
    <span class="title">{{ titleName }}</span>
    <div class="bottom">
      <img src="../assets/time.png" alt="time" />
      <img class="clock" src="../assets/clock.png" alt="clock" />
      <div class="rightImg">
        <img src="../assets/myLike.png" alt="myLike" />
        <span>{{ time }}</span>
      </div>
    </div>
    <footer>
      <div class="line_space">
        <div class="line"></div>
      </div>
      <p>更多音律 （可叠加三个音律）</p>
    </footer>
    <div id="box" ref="box"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SpecialInfo extends Vue {
  private titleName = "午后";
  private time = "29:51";

  mounted(): void {
    const footer = document.getElementsByTagName("footer")[0];
    const drag = function() {
      this.$refs.box.style.width = parseInt(this.box.style.width) +2+"px"
    };
    const throttle = function(func, wait) {
      let timeout, context, args, result;
      let previous = 0;

      const later = function() {
        previous = +new Date();
        timeout = null;
        func.apply(context, args);
      };

      const throttled = function() {
        const now = +new Date();
        //下次触发 func 剩余的时间
        const remaining = wait - (now - previous);
        context = this;
        // eslint-disable-next-line prefer-rest-params
        args = arguments;
        // 如果没有剩余的时间了或者你改了系统时间
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          func.apply(context, args);
        } else if (!timeout) {
          timeout = setTimeout(later, remaining);
        }
      };
      return throttled;
    };
    const foot = footer.addEventListener("touchmove", throttle(drag, 16));
  }
}
</script>

<style scoped>
header {
  width: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 15px;
}
header:after {
  content: "";
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}
.back {
  float: left;
  width: 29px;
  height: 27px;
  margin-top: 12px;
}
.share {
  width: 17px;
  height: 17px;
  float: right;
  margin-top: 15px;
}
.title {
  position: absolute;
  top: 643px;
  left: 15px;
  font-size: 20px;
  color: white;
  padding: 0;
  margin: 0;
  width: 40px;
  height: 28px;
}
.bottom {
  position: absolute;
  height: 33px;
  top: 701px;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
}
.bottom > img {
  width: 32px;
  height: 33px;
  float: left;
}
.clock {
  margin-left: 30px;
}
.rightImg > img {
  width: 32px;
  height: 33px;
  vertical-align: middle;
}
.rightImg > span {
  vertical-align: middle;
}
.bottom > .rightImg {
  float: right;
}
.line_space {
  width: 100%;
  height: 4px;
  text-align: center;
}
.line {
  margin-left: 170px;
  width: 28px;
  height: 3px;
  border-radius: 1px;
  background-color: white;
}
footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 50px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
}
footer > p {
  padding-left: 15px;
}
#box{
  width: 100px;
  height: 100px;
  background-color: white;
}
</style>
