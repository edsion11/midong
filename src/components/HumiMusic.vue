<template>
  <div class="music_com">
    <div class="header" @click="navigateToInfo()">
      <div class="header_left">
        <img src="../assets/music.png" v-if="!isSpecial" alt="music" />
        <img src="../assets/musiclist.png" v-if="isSpecial" alt="musiclist" />
        <div>{{ typeName }}</div>
      </div>
      <img src="../assets/next.png" v-if="true" alt="next" />
    </div>
    <SlideMusic :isSpecial="isSpecial"></SlideMusic>
  </div>
</template>

<script lang="ts">
import SlideMusic from "@/components/slideMusic.vue";
import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator";
import List from "@/components/list.vue";

@Component({
  components: {
    SlideMusic,
    List
  }
})
export default class HumiMusic extends Vue {
  private isNext!: boolean;
  @Prop({
    type: Boolean,
    required: false,
    default: Boolean
  })
  private isSpecial!: boolean;
  @Prop({
    type: String,
    required: false,
    default: String
  })
  public typeName!: string;
  @Prop({
    type: String,
    required: false,
    default: String
  })
  public musicType!: string;

  @Watch("musicType")
  public updatedMusic(oldVal: any) {
    console.log("Header组件更新了", oldVal);
  }
  public navigateToInfo() {
    let id: number;
    switch (this.typeName) {
      case "大自然的呼吸节奏":
        id = 0;
        break;
      case "夜晚催眠曲":
        id = 1;
        break;
      case "专辑 | 听着就犯困":
        id = 2;
        break;
      default:
        id = 0;
        break;
    }
    this.$router.push({
      path: `/list/${id}`
    });
  }
}
</script>

<style scoped>
.music_com {
  overflow: hidden;
}
.header {
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header > img {
  width: 16px;
  height: 24px;
}
.header_left > div {
  position: relative;
  left: 19px;
  color: white;
  display: inline;
}
.header_left > img {
  position: relative;
  top: 2px;
  width: 16px;
  height: 16px;
}
</style>
