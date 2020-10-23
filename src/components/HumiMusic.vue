<template>
  <div class="music_com">
    <div class="header" @click="navigateToInfo()">
      <div class="header-left">
        <img :src="MUSIC" v-if="!isSpecial" alt="music" />
        <img :src="MUSICLIST" v-if="isSpecial" alt="musiclist" />
        <div>{{ typeName }}</div>
      </div>
      <img :src="NEXT" v-if="true" alt="next" />
    </div>
    <SlideMusic
      :isSpecial="isSpecial"
      @navigate-to-list="navigateToList"
    ></SlideMusic>
  </div>
</template>

<script lang="ts">
import SlideMusic from "@/components/SlideMusic.vue";
import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator";
import List from "@/components/List.vue";
import { IMGPATH } from "@/constants/imgPath";

@Component({
  components: {
    SlideMusic,
    List
  }
})
export default class HumiMusic extends Vue {
  NEXT = IMGPATH.NEXT;
  MUSIC = IMGPATH.MUSIC;
  MUSICLIST = IMGPATH.MUSIC_LIST;
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
    const NAME = this.typeName
    this.$router.push({
      path: `/list/${NAME}`
    });
  }
  public navigateToList(index: number) {
    const ID = String(index);
    const TYPE = this.typeName;
    this.$router.push({
      name: "Info",
      params: { id: ID, type: TYPE }
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
.header-left > div {
  position: relative;
  left: 19px;
  color: white;
  display: inline;
}
.header-left > img {
  position: relative;
  top: 2px;
  width: 16px;
  height: 16px;
}
</style>
