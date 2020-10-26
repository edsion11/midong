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
            v-if="!computeIsLike"
            @click="addLike"
          />
          <img
            :src="RED_HEART"
            class="short-sentence-img"
            v-if="computeIsLike"
            @click="addLike"
          />
        </div>
        <div class="line"></div>
        <div
          v-for="(item, index) in musicList.data"
          :key="index"
          class="music-ul"
        >
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
import { AppModule } from "@/store/modules/music";
import { IMGPATH } from "@/constants/imgPath";
import { IMusicList } from "@/interface";
import App from "@/App.vue";

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
  private musicList: IMusicList;
  created(): void {
    this.musicList = AppModule.musicLists;
    this.isLike = AppModule.musicLists.isLike;
  }
  get computeIsLike() {
    return AppModule.musicLists.isLike;
  }
  private addLike(): void {
    if (AppModule.musicLists.isLike) {
      AppModule.popLike();
    } else {
      AppModule.addLike();
    }
  }
  private back() {
    this.$router.back();
  }
}
</script>

<style scoped lang="scss">
@import "../style/detail";
</style>
