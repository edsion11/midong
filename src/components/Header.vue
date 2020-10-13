<template>
  <div class="nav">
    <img id="nav_img" src="../assets/back.png" />
    <div class="text">
      <span
        v-for="(item, index) in type"
        :class="{ clicked: item.isClicked }"
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
}

import { Vue, Component, Prop, Watch, Emit } from "vue-property-decorator";
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
  @Emit("changed") change(msg: any) {
    return this.type_en[msg];
  }
  private headCache: Array<number> = [];
  private changeMusic(index: number, item: Record<string, boolean>) {
    if (this.headCache.length) {
      const s = this.headCache.shift();
      this.type[Number(s)].isClicked = false;
    }
    this.headCache.push(index);
    if (index == 4) {
      this.$router.push("/favorite");
    }
    item.isClicked = !item.isClicked;
    this.change(index);
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

#nav_img {
  width: 29px;
  height: 27px;
  margin-left: 10px;
  margin-right: 30px;
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
  margin-right: 40px;
  width: 34px;
  white-space: nowrap;
  height: 24px;
  color: #ffffff;
  font-size: 17px;
  margin-left: 0;
  color: rgba(255, 255, 255, 0.4);
}
.clicked {
  color: white;
}
</style>
