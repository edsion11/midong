<template>
  <div>
    <musicList
      :title="title"
      :is-special="isSpecial"
      :is-music="isMusic"
    ></musicList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import musicList from "@/components/MusicList.vue";
@Component({
  components: {
    musicList
  }
})
export default class Mylist extends Vue {
  private title = "";
  isSpecial = false;
  isMusic = false;
  created(): void {
    this.title = this.$route.params.id;
    this.isSpecial = this.title === "专辑 | 听着就犯困";
    this.isMusic =
      this.title === "大自然的呼吸节奏" || this.title === "夜晚催眠曲";
  }
}
</script>
<style scoped></style>
