<template>
  <div class="nav">
    <img @click="back()" class="nav-img" :src="BACK" />
    <div class="text">
      <span
        v-for="(item, index) in type"
        :class="{ clicked: index === typeIndex }"
        :key="index"
        @click="changeMusic(index, item)"
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
interface HeaderArray {
  name: string;
  isClicked: boolean;
  index?: string;
}

import { Vue, Component, Emit, Prop } from "vue-property-decorator";
import { IMGPATH } from "@/constants/imgPath";
@Component
export default class Header extends Vue {
  private type: Array<HeaderArray> = [
    { name: "助眠", isClicked: false },
    { name: "解压", isClicked: false },
    { name: "冥想", isClicked: false },
    { name: "专注", isClicked: false },
    { name: "喜欢", isClicked: false }
  ];
  private type_en: Array<string> = [
    "help_sleep",
    "rest",
    "deep_thought",
    "devote",
    "like"
  ];
  BACK = IMGPATH.BACK;
  @Prop({
    type: Number,
    required: false,
    default: Number
  })
  private defaultTypeIndex!: number;

  @Emit("changed") change(msg: any) {
    return this.type_en[msg];
  }
  created(): void {
    this.type[this.defaultTypeIndex].isClicked = true;
  }
  typeIndex = 0;
  private changeMusic(index: number) {
    this.typeIndex = index;
    this.change(index);
  }
  private back() {
    this.$router.go(-1);
  }
}
</script>

<style scoped lang="scss">
@import "../style/header.scss";
</style>
