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

<style scoped lang="scss">
@import "../style/specialInfo";
</style>
