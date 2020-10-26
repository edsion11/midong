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
        :is-music="item.isMusic"
        :isSpecial="item.isSpecial"
        :isCombin="item.isCombin"
      ></List>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import List from "@/components/List.vue";
import { namespace } from "vuex-class";
import { AppModule } from "@/store/modules/music";
import {IMusics} from "@/interface";
const COUNT = namespace("count")
@Component({
  components: {
    List
  }
})
export default class extends Vue {
  public musics: Array<IMusics> | undefined;
  public specials: Array<IMusics> | undefined;
  public combins: Array<IMusics> | undefined;
  public musicList: Array<IMusicss> | undefined;
  created(): void {
    this.musics = AppModule.musics;
    this.specials = AppModule.specials;
    this.combins = AppModule.combins;
    this.musicList = AppModule.musicList;
  }
}
</script>

<style scoped lang="scss">
@import "../style/favorite";
</style>
