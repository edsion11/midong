<template>
  <div class="content">
    <div class="box">
      <div class="progress_body">
        <div class="progress">
          <div class="spinner"><i></i></div>
        </div>
        <div class="text">加载中</div>
      </div>
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
export default class Loading extends Vue {}
</script>

<style scoped lang="scss">
@import "../style/loading";
</style>
