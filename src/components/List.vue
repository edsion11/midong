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
    default: undefined
  })
  public title: string | undefined;

  @Prop({
    type: Boolean,
    default: undefined
  })
  public isMusic: boolean | undefined;

  @Prop({
    type: Boolean,
    default: undefined
  })
  public isSpecial: boolean | undefined;

  @Prop({
    type: Boolean,
    default: undefined
  })
  public isCombin: boolean | undefined;
}
</script>

<style scoped lang="scss">
@import "../style/list";
</style>
