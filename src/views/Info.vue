<template>
  <div>
    <Detail></Detail>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Detail from "../components/Detail.vue";
@Component({
  components: {
    Detail
  }
})
export default class Info extends Vue {}
</script>
<style scoped></style>
