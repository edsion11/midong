<template>
  <div class="all">
    <header class="header">
      <img src="../assets/back.png" @click="back()" />
      <header class="title">{{ title }}</header>
      <header class="none">none</header>
    </header>
    <List :title="title" :music-lists="musicLists"></List>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import List from "@/components/list.vue";
@Component({
  components: { List }
})
export default class HumiMusic extends Vue {
  public musicLists: Array<object> = [
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
    },
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
    },
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
    },
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
  @Prop({
    type: String,
    required: false,
    default: undefined
  })
  public title: string | undefined;

  private back() {
    this.$router.back();
  }
}
</script>

<style scoped>
.header {
  font-size: 17px;
  width: 100%;
  height: 59px;
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
</style>
