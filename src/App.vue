<template>
  <van-notice-bar scrollable :text="text" />
  <router-view></router-view>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <van-tabbar v-model="active" active-color="#ee0a24" @change="onChange">
    <van-tabbar-item to="/" icon="hot-o">热点</van-tabbar-item>
    <van-tabbar-item to="/music" icon="music-o">音乐</van-tabbar-item>
    <van-tabbar-item to="/siri" icon="friends-o">Siri</van-tabbar-item>
    <van-tabbar-item to="/search" icon="search">发现</van-tabbar-item>
  </van-tabbar>
  <AudioLine
    :url="store.musicUrl"
    :playing="store.playing"
    @on-audio-state="onAudioState"
  />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from '@/components/HelloWorld.vue';
import { ref } from 'vue'
// 导入状态仓库
import { useStore } from '@/store'
// 使普通数据变响应式的函数
// import { storeToRefs } from 'pinia';
// 实例化仓库
const store = useStore()
// 解构并使数据具有响应式
// let { palyStatus, songName, author, imgUrl } = storeToRefs(store);

const active = ref(0)
const text = ref('在所有的道别里，我更喜欢明天见！')
const onChange = (index: number) => {
  const textMap: { [key: number]: string } = {
    0: '在所有的道别里，我更喜欢明天见！',
    1: '不要试图填满生命的空白，因为音乐就在那空白的深处。',
    2: '在吗？',
    3: '就像时间的两端，既不知道开始在哪里，也不知道结束在哪里'
  }
  text.value = index ? textMap[index] : textMap[0]
  active.value = index
}

// 查询随机音乐信息
store.getMusicInfo()

// 监听音乐状态
const onAudioState = (audioState: string) => {
  const status = audioState === 'onplay' ? true : false
  store.updatePlaying(status)
  if (import.meta.env.DEV) {
    if (audioState === 'onended') {
      store.getMusicInfo()
    }
  } else if (audioState === 'onended' || audioState === 'onerror') {
    store.getMusicInfo()
  }
}
</script>

<style>
#app {
  max-width: 375px;
  margin: 0 auto;
  padding-bottom: 50px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
/* .safe-area-bottom {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
} */
</style>
