<template>
  <div>
    <Header></Header>
    <div class="content">
      <p class="title">网络开小差了，请稍后重试</p>
      <div class="button"><div>重试</div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";

@Component({
  components: {
    Header
  }
})
export default class NetError extends Vue {}
</script>

<style scoped>
.content{
  position: relative;
  top: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 77px;
  flex-direction: column;
  color: white;
  font-size: 16px;
}
.title{
  height: 22px;
  margin: 0 auto;
}
.button{
  width: 100px;
  height: 35px;
  box-sizing: border-box;
  border: 2px solid white;
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
  justify-content: center;
}
</style>
