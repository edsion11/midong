<template>
  <div>
    <div class="lateral-sliding">
      <div
        :class="{
          'lateral-sliding-item': !isSpecial,
          'lateral-sliding-item-special': isSpecial
        }"
        v-for="item in musicList"
        :key="item.id"
        @click="navigateToList(item.id)"
      >
        <div :class="{ special: isSpecial, 'each-img': !isSpecial }">
          <img :src="item.img" alt="musicImg" />
        </div>
        <div class="text">{{ item.id }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class SlideMusic extends Vue {
  private musicListAll: Array<object> = [
    [
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 0,
        listen: 100
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 1,
        listen: 100
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 2,
        listen: 100
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 3,
        listen: 100
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 4,
        listen: 100
      }
    ],
    [
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 0,
        listen: 100
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 1
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 2
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 3
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 4
      }
    ],
    [
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 0
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 1
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 2
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 3
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 4
      }
    ],
    [
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 0
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 1
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 2
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 3
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 4
      }
    ],
    [
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 0
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 1
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 2
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 3
      },
      {
        img:
          "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
        id: 4
      }
    ]
  ];
  private musicList = [
    {
      img:
        "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
      id: 0
    },
    {
      img:
        "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
      id: 1
    },
    {
      img:
        "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
      id: 2
    },
    {
      img:
        "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
      id: 3
    },
    {
      img:
        "http://p1.music.126.net/B6mlbfK1j9HYQC4KwUNuaA==/109951165230578038.jpg",
      id: 4
    }
  ];

  @Prop({
    type: Boolean,
    required: false,
    default: Boolean
  })
  private isSpecial!: boolean;
  @Emit()
  public navigateToList(index: number): void {
    console.log(index)
    this.$emit("navigate", index);
  }
}
</script>

<style scoped lang="scss">
@import "../style/slideMusic";
</style>
