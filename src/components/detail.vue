<template>
  <div class="all">
    <header class="header">
      <img src="../assets/back.png" @click="back()" />
      <header class="title">{{ title }}</header>
      <header class="none">none</header>
    </header>
    <div class="article">
      <article class="article_content">
        <header class="article_title1">{{ title_name }}</header>
        <div>
          <p id="short-sentence">
            专辑 |
            雨天的心情。舒缓心情。解压，平静，万物得到雨露的滋润，生长，是多么美好的画面《雨天的心情是
          </p>
          <img src="../assets/next.png" style="width:20px;height:20px;" />
        </div>
        <p>以下内容来自于喜马拉雅App</p>
      </article>
      <div class="music_all">
        <div class="music_title_all">
          <div class="play_all">
            <img src="../assets/play.png" style="width:20px;height:20px;" />
            <div style="margin-left:10px">
              播放全部 (共 {{ musicList.length }} 首)
            </div>
          </div>
          <img
            src="../assets/white_heart.png"
            style="width:20px;height:20px;"
            v-if="!isLike"
            @click="addLike"
          />
          <img
            src="../assets/red_heart.png"
            style="width:20px;height:20px;"
            v-if="isLike"
            @click="addLike"
          />
        </div>
        <div
          style="height:1px;background-color:gray;width:317px;margin:0 auto;"
        ></div>
        <div v-for="(item, index) in musicList" :key="index" class="music_ul">
          <div class="index">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="music">
            <div class="music_info">
              <p>{{ item.name }}</p>
              <p class="time">{{ item.time }}</p>
            </div>
            <img src="../assets/next.png" style="width:20px;height:20px;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Detail extends Vue {
  private title = "助眠";
  private title_name = "专辑|雨天的心情";
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
  private addLike():void{
    this.isLike = !this.isLike
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
#short-sentence {
  line-height: 18px;
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
.article_content {
  box-sizing: border-box;
  padding: 15px;
  background-color: rgba(255, 253, 253, 0.05);
  border-radius: 10px;
  height: 128px;
}
.article_content > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.article_content > div > p {
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
.article_content > p {
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
.article_title1 {
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
.music_all {
  box-sizing: border-box;
  background-color: rgba(255, 253, 253, 0.05);
  border-radius: 10px;
}
.music_title_all {
  margin-top: 17px;
  height: 52px;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.play_all {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.music_ul {
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
