<template>
  <div class="body">
    <div class="content">
      <div class="list" v-for="item in musicLists" :key="item.index">
        <img :src="item.imgUrl" alt="musicImg" />
        <img
          class="specialE"
          :src="SPECIAL_BG"
          alt="specialE"
          v-if="title === '专辑 | 听着就犯困'"
        />
        <div class="middle" v-if="isMusic">
          <p>{{ item.name }}</p>
          <div>
            <img :src="LISTEN" alt="listen" v-if="isMusic" />
            {{ item.sum }}万
          </div>
        </div>
        <div class="middle" v-if="isSpecial">
          <div class="title">{{ item.name }}</div>
          <div class="from">{{ item.from }}</div>
        </div>
        <div class="middle combin" v-if="isCombin" >
          <div class="title">{{ item.name }}</div>
        </div>
        <div class="right">
          <img :src="NEXT" alt="next" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IMGPATH } from "@/constants/imgPath";

@Component
export default class List extends Vue {
  NEXT = IMGPATH.NEXT;
  SPECIAL_BG = IMGPATH.SPECIAL_BG;
  LISTEN = IMGPATH.LISTEN;
  @Prop({
    type: Array,
    required: false,
    default: []
  })
  public musicLists!: Array<object>;

  @Prop({
    type: String,
    required: false,
    default: undefined
  })
  public title: string | undefined;

  @Prop({
    type: Boolean,
    required: false,
    default: undefined
  })
  public isMusic: boolean | undefined;

  @Prop({
    type: Boolean,
    required: false,
    default: undefined
  })
  public isSpecial: boolean | undefined;

  @Prop({
    type: Boolean,
    required: false,
    default: undefined
  })
  public isCombin: boolean | undefined;
}
</script>

<style scoped>
.body {
  padding: 15px;
}
.list {
  box-sizing: border-box;
  background-color: #2e3344;
  width: 100%;
  padding: 15px 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: none;
}
.list:first-child {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.list:last-child {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding-bottom: 15px;
}
.list > img {
  width: 60px;
  height: 60px;
  border-radius: 5px;
}
.list > .specialE {
  height: 60px;
  width: 8px;
}
.middle {
  box-sizing: border-box;
  height: 60px;
  padding-left: 15px;
  padding-top: 9px;
  padding-bottom: 9px;
  color: white;
  flex: 1;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
}
.middle > .title {
  color: #ffffff;
  font-size: 14px;
}
.middle > .from {
  font-size: 12px;
}
.middle > p {
  width: 28px;
  height: 20px;
  font-size: 14px;
}
.middle > div {
  color: #a7a9ad;
  font-size: 12px;
}
.middle > div > img {
  width: 11px;
  height: 10px;
  margin-right: 3px;
}
.combin {
  justify-content: center!important;
}
.right > img {
  width: 16px;
  height: 24px;
}
</style>
