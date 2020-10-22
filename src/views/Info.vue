<template>
  <div>
    <Detail ></Detail>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Detail from "../components/detail.vue";
@Component({
  components: {
    Detail
  }
})
export default class Info extends Vue {
}
</script>
<style scoped></style>
