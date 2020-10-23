<template>
  <div class="body">
    <header>
      <img src="../assets/back.png" class="back" alt="back" />
      <img src="../assets/share.png" class="share" alt="share" />
    </header>
    <div class="box"></div>
    <span class="title">{{ titleName }}</span>
    <div class="bottom">
      <img src="../assets/time.png" alt="time" />
      <img class="clock" src="../assets/clock.png" alt="clock" />
      <div class="rightImg">
        <img src="../assets/myLike.png" alt="myLike" />
        <span>{{ time }}</span>
      </div>
    </div>
    <footer @click="showList">
      <div class="line-space">
        <div class="line"></div>
      </div>
      <p>更多音律 （可叠加三个音律）</p>
    </footer>
    <footer @click="showList">
      <div class="slide" :class="{ noshow: isShow }" v-if="!isSleep">
        <div
          v-for="(item, index) in tonalities"
          :key="index"
          class="slide-item"
          @click.stop="playTonality(index)"
        >
          <img
            src="../assets/red_play.png"
            alt="play"
            v-if="item.ispointed && !item.isplay"
            @click.stop="playMusic(index)"
          />
          <img
            src="../assets/suspend.png"
            alt="suspend"
            v-if="item.isplay && item.ispointed"
            @click.stop="playMusic(index)"
          />
          <div class="index" v-if="!item.ispointed && !item.isplay">
            {{ index + 1 }}
          </div>
          <div class="list-right">
            <div class="list-name" :class="{ red: item.ispointed }">
              {{ item.name }}
            </div>
            <div class="time">{{ item.time }}</div>
          </div>
        </div>
      </div>
      <div class="has-list" v-if="isSleep" :class="{ noshow: isShow }">
        <div v-for="(item, index) in SleepMusics" :key="index">
          <div class="musicBox" @click.stop="playing(index)">
            <img :src="item.imgUrl" alt="backgroundImg" />
            <img
              alt="playMusic"
              class="listening"
              src="../assets/listening.png"
              v-if="item.isPlaying"
            />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SpecialInfo extends Vue {
  private titleName = "午后";
  private time = "29:51";
  private isShow = true;
  private isSleep = false;
  private tonalities = [
    {
      name: "午后",
      time: "10:00",
      isplay: false,
      ispointed: false
    },
    {
      name: "I did my best today",
      time: "12:30",
      isplay: false,
      ispointed: false
    }
  ];
  public SleepMusics = [
    {
      imgUrl:
        "https://alipic.lanhuapp.com/SketchPng681ff731c72f0e8e36773924df91ddcd3563ebc82f27b4aa0aabe2c05446da4a",
      name: "催眠曲",
      isPlaying: false
    },
    {
      imgUrl:
        "https://alipic.lanhuapp.com/SketchPng681ff731c72f0e8e36773924df91ddcd3563ebc82f27b4aa0aabe2c05446da4a",
      name: "催眠曲",
      isPlaying: false
    },
    {
      imgUrl:
        "https://alipic.lanhuapp.com/SketchPng681ff731c72f0e8e36773924df91ddcd3563ebc82f27b4aa0aabe2c05446da4a",
      name: "催眠曲",
      isPlaying: false
    },
    {
      imgUrl:
        "https://alipic.lanhuapp.com/SketchPng681ff731c72f0e8e36773924df91ddcd3563ebc82f27b4aa0aabe2c05446da4a",
      name: "催眠曲",
      isPlaying: false
    },
    {
      imgUrl:
        "https://alipic.lanhuapp.com/SketchPng681ff731c72f0e8e36773924df91ddcd3563ebc82f27b4aa0aabe2c05446da4a",
      name: "催眠曲",
      isPlaying: false
    },
    {
      imgUrl:
        "https://alipic.lanhuapp.com/SketchPng681ff731c72f0e8e36773924df91ddcd3563ebc82f27b4aa0aabe2c05446da4a",
      name: "催眠曲",
      isPlaying: false
    },
    {
      imgUrl:
        "https://alipic.lanhuapp.com/SketchPng681ff731c72f0e8e36773924df91ddcd3563ebc82f27b4aa0aabe2c05446da4a",
      name: "催眠曲",
      isPlaying: false
    },
    {
      imgUrl:
        "https://alipic.lanhuapp.com/SketchPng681ff731c72f0e8e36773924df91ddcd3563ebc82f27b4aa0aabe2c05446da4a",
      name: "催眠曲",
      isPlaying: false
    }
  ];

  private showList(): void {
    this.isShow = !this.isShow;
  }

  private playTonality(index: number): void {
    this.tonalities[index].ispointed = !this.tonalities[index].ispointed;
  }
  private playMusic(index: number): void {
    this.tonalities[index].isplay = !this.tonalities[index].isplay;
  }
  private playing(index: number): void {
    this.SleepMusics[index].isPlaying = !this.SleepMusics[index].isPlaying;
  }
}
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  height: 100%;
}
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
.box {
  flex: 1 1 auto;
}
.title {
  font-size: 20px;
  color: white;
  padding: 0;
  margin-left: 15px;
  width: 40px;
  height: 28px;
}
.bottom {
  height: 63px;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
}
.noshow {
  opacity: 0;
  max-height: 0!important;
  transition-duration: 500ms;
  border: 0 !important;
  padding: 0 !important;
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

.line-space {
  width: 100%;
  height: 4px;
  text-align: center;
  padding-bottom: 10px;
  padding-top: 10px;
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
  font-size: 13px;
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
}
footer > p {
  padding-left: 15px;
}
.has-list {
  max-height: 200px;
  padding: 0!important;
  transition-duration: 0.8s;
  background-color: rgba(85, 85, 85, 0.1);
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
.slide {
  max-height: 200px;
  transition-duration: 0.8s;
  margin-top: 10px;
  box-sizing: border-box;
}
.slide-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 42px;
  padding: 15px;
}

.slide-item > img {
  width: 20px;
  height: 20px;
}
.slide-item > .index {
  width: 20px;
  height: 20px;
}
.list-right {
  padding-left: 9px;
}
.list-right > div {
  padding-bottom: 9px;
}
.list-right > .list-name {
  color: rgba(255, 255, 255, 1);
}
.list-right > .time {
  color: rgba(255, 255, 255, 0.6);
}
.list-right > .red {
  color: #ff5353;
}
footer > .has-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-between;
}
.musicBox {
  padding: 10px;
  box-sizing: border-box;
}
.musicBox > img {
  width: 60px;
  height: 60px;
}
.musicBox > .listening {
  position: absolute;
  width: 13px;
  height: 13px;
  margin-left: -30px;
  margin-top: 30px;
  transform: translate(-7px, -7px);
}
</style>
