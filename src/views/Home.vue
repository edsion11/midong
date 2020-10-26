<template>
  <div class="home">
    <Header @changed="listenChanged"></Header>
    <div v-if="!isLoading">
      <div v-if="!isFavorite">
        <HumiMusic :typeName="musicFrom" :musicType="info"></HumiMusic>
        <HumiMusic :typeName="musicFrom_sima" :musicType="info"></HumiMusic>
        <HumiMusic
          :typeName="musicSpecial"
          :musicType="info"
          :isSpecial="true"
        ></HumiMusic>
      </div>
      <Favorite v-if="isFavorite"></Favorite>
    </div>
    <div v-if="isLoading">
      <Loading></Loading>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HumiMusic from "../components/HumiMusic.vue";
import Header from "../components/Header.vue";
import Favorite from "@/components/Favorite.vue";
import Loading from "@/components/Loading.vue";

@Component({
  components: {
    Loading,
    HumiMusic,
    Header,
    Favorite
  }
})
export default class Home extends Vue {
  public musicFrom = "大自然的呼吸节奏";
  public musicFrom_sima = "夜晚催眠曲";
  public musicSpecial = "专辑 | 听着就犯困";
  public info = "help_sleep";
  public isFavorite = false;
  public isLoading = true;

  sleep(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  mounted(): void {
    this.sleep(500).then(() => {
      this.isLoading = false;
    });
  }
  //监听组件按钮变化
  public listenChanged(msg: any) {
    console.log("这是初始值", this.info);
    this.info = msg;
    if (msg == "like") {
      this.isFavorite = true;
    } else {
      this.isFavorite = false;
    }
    console.log("这是子组件传的值", this.info);
  }
}
</script>
<style scoped></style>
