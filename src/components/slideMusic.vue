<template>
  <div class="music_com">
    <div class="lateral-sliding">
      <div
        :class="{
          'lateral-sliding-item': !isSpecial,
          'lateral-sliding-item-special': isSpecial
        }"
        v-for="item in musicList"
        :key="item.id"
      >
        <div :class="{ special: isSpecial, 'each-img': !isSpecial }">
          <img :src="item.img" alt="musicImg" />
        </div>
        <p class="text">{{ item.id }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

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
}
</script>

<style scoped>
.lateral-sliding {
  width: 100%;
  height: 140px;
  display: flex;
  padding-left: 15px;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  overflow: -moz-scrollbars-none;
  padding-bottom: 15px;
}
.lateral-sliding::-webkit-scrollbar {
  display: none;
}
.lateral-sliding-item {
  width: 115px;
  height: 144px;
  display: flex;
  margin-right: 15px;
  flex-direction: column;
}
.lateral-sliding-item-special {
  width: 245px;
  height: 144px;
  display: flex;
  margin-right: 15px;
  flex-direction: column;
}
.each-img {
  width: 115px;
  height: 126px;
  background-color: #3b3e49;
  border-radius: 5px;
}
.each-img > img {
  width: 115px;
  height: 126px;
  border-radius: 5px;
}
.special {
  width: 245px;
  height: 126px;
  background-color: #3b3e49;
  border-radius: 10px;
}
.special > img {
  width: 245px;
  height: 126px;
  border-radius: 10px;
}
.text {
  color: #868992;
}
</style>
