<template>
  <div class="home">
    <Header @changed="listenChanged"></Header>
    <HumiMusic :typeName="musicFrom" :musicType="info"></HumiMusic>
    <HumiMusic :typeName="musicFrom_sima" :musicType="info"></HumiMusic>
    <HumiMusic
      :typeName="muiscSpecial"
      :musicType="info"
      :isSpecial="true"
    ></HumiMusic>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HumiMusic from "../components/HumiMusic.vue";
import Header from "../components/Header.vue";
@Component({
  components: {
    HumiMusic,
    Header
  }
})
export default class Home extends Vue {
  public musicFrom = "大自然的呼吸节奏";
  public musicFrom_sima = "夜晚催眠曲";
  public muiscSpecial = "专辑 | 听着就犯困";
  public info = "help_sleep";
  public listenChanged(msg: any) {
    console.log("这是初始值", this.info);
    this.info = msg;
    console.log("这是子组件传的值", this.info);
  }
}
</script>
<style scoped></style>
