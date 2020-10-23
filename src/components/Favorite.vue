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
        :is-music="item.ismusic"
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
import { AppModule } from "@/store/modules/app";
const MusicApp = namespace("MusicState");
@Component({
  components: {
    List
  }
})
export default class extends Vue {
  public musics: Array<object>;
  public specials: Array<object>;
  public combins: Array<object>;
  public musicList: Array<object>
  @MusicApp.Getter("count") public count: number | undefined;
  created(): void {
    this.musics = AppModule.musics;
    this.specials = AppModule.specials;
    this.combins = AppModule.combins;
    this.musicList = AppModule.musicList
  }
}
</script>

<style scoped>
.header {
  color: white;
  font-size: 16px;
  width: 100%;
  padding: 15px;
  padding-bottom: 3px;
  height: 22px;
  display: flex;
  align-items: center;
}
.header > div {
  margin-left: 10px;
}
.header > img {
  width: 16px;
  height: 16px;
}
</style>
