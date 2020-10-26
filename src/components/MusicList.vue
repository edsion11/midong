<template>
  <div class="all">
    <header class="header">
      <img src="../assets/back.png" @click="back()" />
      <header class="title">{{ title }}</header>
      <header class="none">none</header>
    </header>
    <List
      :title="title"
      :music-lists="musicLists"
      :is-special="isSpecial"
      :is-music="isMusic"
    ></List>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import List from "@/components/List.vue";
import { IMGPATH } from "@/constants/imgPath";
@Component({
  components: { List }
})
export default class HumiMusic extends Vue {
  public musicLists: Array<object> = [
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235,
      from: "苏格拉底经典语录"
    },
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235,
      from: "苏格拉底经典语录"
    },
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235,
      from: "苏格拉底经典语录"
    },
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235,
      from: "苏格拉底经典语录"
    },
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235,
      from: "苏格拉底经典语录"
    },
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235,
      from: "苏格拉底经典语录"
    },
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235,
      from: "苏格拉底经典语录"
    },
    {
      imgUrl:
        "https://p1.music.126.net/J5W8cRG5aPfDPI7RAhSEEg==/109951163197965551.jpg",
      name: "海浪",
      sum: 235,
      from: "苏格拉底经典语录"
    }
  ];
  BACK = IMGPATH.BACK;
  @Prop({
    type: Boolean,
    required: false,
    default: false
  })
  isMusic: boolean;

  @Prop({
    type: String,
    required: false,
    default: undefined
  })
  public title: string | undefined;
  @Prop({
    type: Boolean,
    required: false,
    default: false
  })
  isSpecial: boolean;
  private back() {
    this.$router.back();
  }
}
</script>

<style scoped lang="scss">
@import "../style/musicList";
</style>
