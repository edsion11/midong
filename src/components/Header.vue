<template>
  <div class="nav">
    <img @click="back()" id="nav_img" src="../assets/back.png" />
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
  index?: string;
}

import { Vue, Component, Emit, Prop } from "vue-property-decorator";
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

  @Prop({
    type: Number,
    required: false,
    default: Number
  })
  private defaultTypeIndex!: number;

  @Emit("changed") change(msg: any) {
    return this.type_en[msg];
  }
  created():void{
    this.type[this.defaultTypeIndex].isClicked = true
    this.headCache.push(this.defaultTypeIndex)
  }
  private headCache: Array<number> = [];
  private changeMusic(index: number, item: Record<string, boolean>) {
    if (this.headCache.length) {
      const s = this.headCache.shift();
      this.type[Number(s)].isClicked = false;
    }
    this.headCache.push(index);
    item.isClicked = !item.isClicked;
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

#nav_img {
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
