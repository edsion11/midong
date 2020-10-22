<template>
  <div>
    <div v-for="item in musicList" :key="item.id">
      <div class="header">
        <img :src="item.icon" />
        <div>{{ item.title }}</div>
      </div>
      <List
        :type="item.title"
        :music-lists="item.musicList"
        :is-music="item.ismusic"
        :isSpecial=item.isSpecial
        :isCombin=item.isCombin
      ></List>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import List from "@/components/list.vue";
@Component({
  components: {
    List
  }
})
export default class extends Vue {
  public musics: Array<object> = [
    {
      imgUrl:
        "http://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "下雨",
      sum: 235
    },
    {
      imgUrl:
        "http://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "下雨",
      sum: 235
    }
  ];
  public specials: Array<object> = [
    {
      imgUrl:
        "http://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "Yellow Post-Its",
      from: "苏格拉底经典语录"
    },
    {
      imgUrl:
        "http://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "Yellow Post-Its",
      from: "苏格拉底经典语录"
    }
  ];
  public combins: Array<object> = [
    {
      imgUrl:
        "http://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "夏日+下雨+夏夜虫鸣"
    },
    {
      imgUrl:
        "http://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "下雨+夏夜虫鸣"
    }
  ];
  public musicList: Array<object> = [
    {
      id: 0,
      icon: require("../assets/music.png"),
      musicList: this.musics,
      title: "我喜欢的音律",
      ismusic: true
    },
    {
      id: 1,
      icon: require("../assets/musiclist.png"),
      title: "我喜欢的专辑",
      musicList: this.specials,
      isSpecial:true
    },
    {
      id: 2,
      icon: require("../assets/favoriteS.png"),
      title: "我定制的组合音律",
      musicList: this.combins,
      isCombin:true
    }
  ];
}
</script>

<style scoped>
.header {
  color: white;
  font-size: 16px;
  width: 100%;
  padding: 15px;
  padding-bottom: 3px;
  height: 22px;
  display: flex;
  align-items: center;
}
.header > div {
  margin-left: 10px;
}
.header > img {
  width: 16px;
  height: 16px;
}
</style>
