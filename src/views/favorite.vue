<template>
  <div>
    <Header></Header>
    <div v-for="item in likeLists" :key="item.id">
      <div class="header">
        <img :src="item.icon" alt="music" />
        <div class="text">{{ item.title }}</div>
      </div>
      <List :music-lists="item.musicList"></List>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import List from "@/components/list.vue";

@Component({
  components: {
    Header,
    List
  }
})
export default class Favorite extends Vue {
  public musics: Array<object> = [
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235
    },
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235
    }
  ];
  public specials: Array<object> = [
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235
    },
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235
    }
  ];
  public combins: Array<object> = [
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235
    },
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235
    }
  ];
  public likeLists: Array<object> = [
    {
      title: "我喜欢的音律",
      musicList: this.musics,
      id: 0,
      icon: require("../assets/music.png")
    },
    {
      title: "我喜欢的专辑",
      musicList: this.specials,
      id: 1,
      icon: require("../assets/musiclist.png")
    },
    {
      title: "我定制的组合音律",
      musicList: this.combins,
      id: 2,
      icon: require("../assets/favoriteS.png")
    }
  ];
}
</script>

<style scoped>
.header {
  color: white;
  font-size: 16px;
  box-sizing: border-box;
  height: 37px;
  width: 100%;
  padding: 15px 15px 0 15px;
  display: flex;
  align-items: center;
}
.header > img {
  width: 16px;
  height: 16px;
}
.text {
  margin-left: 10px;
}
</style>
