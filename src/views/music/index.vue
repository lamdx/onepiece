<template>
  <div class="music">
    <div class="poster flex-center" @click="clickPoster()">
      <div class="stylus" :class="{ 'stylus-active': store.playing }"></div>
      <div
        class="gramophone flex-center"
        :class="[store.playing ? 'gramophone-active' : 'gramophone-pause']"
      >
        <img v-if="store.imgUrl" :src="store.imgUrl" />
      </div>
      <div v-if="!store.playing" class="pause-icon"></div>
    </div>
    <div class="songName">{{ store.songName }}</div>
    <div class="author">{{ store.author }}</div>
    <div
      class="refresh"
      :class="{ 'refresh-active': isRefresh }"
      @click="clickRefresh"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 导入状态仓库
import { useStore } from '@/store'
// 使普通数据变响应式的函数
//  import { storeToRefs } from "pinia";
// 实例化仓库
const store = useStore()
// 点击海报区域
const clickPoster = () => {
  store.updatePlaying(!store.playing)
}
const isRefresh = ref(false)

// 点击刷新按钮
const clickRefresh = () => {
  if (!isRefresh.value) {
    isRefresh.value = true
    if (!store.playing) {
      store.updatePlaying(!store.playing)
    }
    store.getMusicInfo().then(() => {
      console.log(123)
    })
    setTimeout(() => (isRefresh.value = false), 1000)
  }
  // if (makeRound()) {
  //   // 仅仅为了演示使用pinia，才使用此种方法去触发父组件刷新的
  //   refresher.$patch({ refreshNum: refresher.refreshNum + 1 })
  // }
}
</script>

<style lang="less" scoped>
.music {
  padding-top: 100px;
  text-align: center;
  background: linear-gradient(180deg, #ff976a, rgba(0, 0, 0, 0));
  .poster {
    position: relative;
    .stylus {
      position: absolute;
      width: 60px;
      height: 96px;
      top: -30px;
      left: 50%;
      transition: 1s;
      transform: translateX(-50%);
      transform: rotate(-7deg);
      transform-origin: left top;
      background: url('@/assets/img/stylus.png') no-repeat;
      background-size: contain;
      z-index: 9;
    }
    .stylus-active {
      transform: rotate(-30deg) !important;
    }
    .gramophone {
      width: 200px;
      height: 200px;
      background: url('@/assets/img/gramophone.png') no-repeat;
      background-size: contain;
      position: relative;
      animation: player-rotate 10s linear infinite;
      &:before {
        content: ' ';
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        position: absolute;
        z-index: 10;
        background: url('@/assets/img/gramophone-light.png') no-repeat;
        background-size: contain;
      }
      img {
        width: 125px;
        height: 125px;
        object-fit: cover;
        border-radius: 100%;
        background: #f8f8f8;
      }
    }
    .gramophone-active {
      animation-play-state: running !important;
    }
    .gramophone-pause {
      animation-play-state: paused !important;
    }
    .pause-icon {
      width: 40px;
      height: 40px;
      position: absolute;
      z-index: 9;
      background: url('@/assets/img/pause.png') no-repeat;
      background-size: contain;
    }
  }
  .songName {
    padding-top: 24px;
    color: #000;
    font-size: 16px;
    font-weight: bold;
  }
  .author {
    padding-top: 8px;
    color: #818894;
    font-size: 12px;
  }

  .refresh {
    margin-top: 140px;
    height: 50px;
    background: center / contain no-repeat url('@/assets/img/refresh.png');
  }
  .refresh-active {
    animation: refresh-rotate 1s ease-out;
  }
}
@keyframes player-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes refresh-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
