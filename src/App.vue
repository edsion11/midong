<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import HumiMusic from "./components/HumiMusic.vue";
import Detail from "./components/detail.vue";
@Component({
  components: {
    Header,
    HumiMusic,
    Detail
  }
})
export default class App extends Vue {}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
#app {
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: #262d3f;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: auto;
  overflow: -moz-scrollbars-none;
  overflow: -moz-scrollbars-none;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
span {
  width: 34px;
  height: 24px;
  color: #ffffff;
  margin: 0 20px;
}
</style>
