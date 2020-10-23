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
  private changeMusic(index: number, item: Record<string, boolean>) {
    this.typeIndex = index;
    this.change(index);
  }
  private back() {
    this.$router.go(-1);
  }
}
</script>

<style scoped>
.nav {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.nav-img {
  width: 29px;
  height: 27px;
  margin-left: 10px;
}
.text {
  height: 50px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  overflow: -moz-scrollbars-none;
  overflow: -moz-scrollbars-none;
}
.text::-webkit-scrollbar {
  display: none;
}
span {
  padding-left: 20px;
  padding-right: 20px;
  width: 34px;
  white-space: nowrap;
  height: 24px;
  color: #ffffff;
  font-size: 17px;
  margin-left: 0;
  margin-right: 0;
  color: rgba(255, 255, 255, 0.4);
}
.clicked {
  color: white;
}
</style>
