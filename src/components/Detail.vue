<template>
  <div class="all">
    <header class="header">
      <img :src="BACKPATH" @click="back()" />
      <header class="title">{{ title }}</header>
      <header class="none">none</header>
    </header>
    <div class="article">
      <article class="article-content">
        <header class="article-title1">{{ titleName }}</header>
        <div>
          <p class="short-sentence">
            专辑 |
            雨天的心情。舒缓心情。解压，平静，万物得到雨露的滋润，生长，是多么美好的画面《雨天的心情是
          </p>
          <img :src="NEXT" class="short-sentence-img" />
        </div>
        <p>以下内容来自于喜马拉雅App</p>
      </article>
      <div class="music-all">
        <div class="music-title-all">
          <div class="play-all">
            <img :src="PLAY" class="short-sentence-img" />
            <div class="list-header">
              播放全部 (共 {{ musicList.length }} 首)
            </div>
          </div>
          <img
            :src="WHITE_HEART"
            class="short-sentence-img"
            v-if="!isLike"
            @click="addLike"
          />
          <img
            :src="RED_HEART"
            class="short-sentence-img"
            v-if="isLike"
            @click="addLike"
          />
        </div>
        <div class="line"></div>
        <div v-for="(item, index) in musicList" :key="index" class="music-ul">
          <div class="index">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="music">
            <div>
              <p>{{ item.name }}</p>
              <p class="time">{{ item.time }}</p>
            </div>
            <img :src="NEXT" class="short-sentence-img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";
import { IMGPATH } from "@/constants/imgPath";

@Component({
  components: {}
})
export default class Detail extends Vue {
  BACKPATH: string = IMGPATH.BACK;
  NEXT: string = IMGPATH.NEXT;
  WHITE_HEART: string = IMGPATH.WHITE_HEART;
  RED_HEART: string = IMGPATH.RED_HEART;
  PLAY: string = IMGPATH.PLAY;
  private title = "助眠";
  private titleName = "专辑|雨天的心情";
  private isLike = false;
  private musicList = [
    {
      name: "Yellow Post-Its",
      time: "10:00"
    },
    {
      name: "I did my best today",
      time: "12:30"
    },
    {
      name: "I am grateful",
      time: "10:00"
    },
    {
      name: "治愈英语",
      time: "10:00"
    },
    {
      name: "Yellow Post-Its",
      time: "10:00"
    },
    {
      name: "Yellow Post-Its",
      time: "10:00"
    }
  ];
  private addLike(): void {
    this.isLike = !this.isLike;
    AppModule.addLike();
  }
  private back() {
    this.$router.back();
  }
}
</script>

<style scoped>
.all {
  color: white;
}
.list-header {
  margin-left: 10px;
}
.short-sentence {
  line-height: 18px !important;
}
.short-sentence-img {
  width: 20px;
  height: 20px;
}
.line {
  height: 1px;
  background-color: gray;
  width: 317px;
  margin: 0 auto;
}
.header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header > img {
  width: 29px;
  height: 29px;
  margin-left: 10px;
}
.header > .none {
  opacity: 0;
}
.title {
  color: white;
}
.article {
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
}
.article-content {
  box-sizing: border-box;
  padding: 15px;
  background-color: rgba(255, 253, 253, 0.05);
  border-radius: 10px;
  height: 128px;
}
.article-content > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.article-content > div > p {
  font-size: 13px;
  width: 285px;
  height: 36px;
  overflow: hidden;
  display: -webkit-box;
  /* -webkit-box-orient: vertical; */
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: 2;
  margin-top: 10px;
  opacity: 0.6;
}
.article-content > p {
  font-size: 13px;
  width: 285px;
  height: 36px;
  overflow: hidden;
  display: -webkit-box;
  /* -webkit-box-orient: vertical; */
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  -webkit-line-clamp: 2;
  margin-top: 10px;
  opacity: 0.6;
}
.article-title1 {
  font-size: 17px;
}
.index {
  width: 44px;
  height: 62px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.index > span {
  width: 6px;
  height: 20px;
}
.music-all {
  box-sizing: border-box;
  background-color: rgba(255, 253, 253, 0.05);
  border-radius: 10px;
}
.music-title-all {
  margin-top: 17px;
  height: 52px;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.play-all {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.music-ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 15px;
}
.music {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  font-size: 14px;
}
.time {
  font-size: 12px;
  margin-top: 5px;
  opacity: 0.6;
}
</style>
