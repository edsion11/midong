<template>
  <div>
    <musicList :title="title"></musicList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import musicList from "@/components/musicList.vue";
@Component({
  components: {
    musicList
  }
})
export default class Mylist extends Vue {
  private titleArray = ["大自然的呼吸节奏", "夜晚催眠曲", "专辑 | 听着就犯困"];
  private title = "";
  mounted(): void {
    const id = Number(this.$route.params.id);
    this.title = this.titleArray[id];
  }
}
</script>
<style scoped></style>
