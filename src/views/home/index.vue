<template>
  <div class="header">微博热搜</div>
  <!-- <div class="top">
    <span class="index"><van-icon name="back-top" class="hot" size="16" /></span>
    <span class="word">{{ hotgov.word?.slice(1, hotgov.word.length - 1) }}</span>
    <span class="icon">{{ hotgov.icon_desc }}</span>
  </div> -->
  <div
    v-for="({ title, hot, url }, i) in realtime"
    :key="i"
    class="title flex-center"
  >
    <span class="index">{{ i + 1 }}</span>
    <span class="flex-1 ellipsis" :class="'word' + i" @click="hrefTo(url)">{{
      title
    }}</span>
    <span class="hot">{{ hot }}</span>
  </div>
  <!-- <p v-for="(item, i) in realtime" :key="i">
    {{ i + 1 }}
    <span>{{ item.word }}</span>
    <span class="icon" v-if="item.icon_desc">{{ item.icon_desc }}</span>
  </p> -->
  <div class="header">搞笑</div>
  <van-card
    v-for="({ title, desc, mobilUrl, pic }, i) in jokeList"
    :key="i"
    :desc="desc"
    :title="title"
    :thumb="pic"
    @click="hrefTo(mobilUrl)"
  >
  </van-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getWeiboHot, getJokeList } from '@/api'
import { getItem, setItem } from '@/utils/storage'
// interface Obj {
//   [key: string | symbol]: any;
// }
// type list = Array<obj>;
// const hotgov = ref<Obj>({});
const cacheRealtimeList = getItem('realtime') || []
const realtime = ref(cacheRealtimeList)
if (!getItem('now')) {
  setItem('now', new Date().getTime())
}
const prev = getItem('now') || '0'
const wait = 1000 * 60 * 1 // 3 min
const diff = new Date().getTime() - prev
console.log('prev,wait,diff', prev, wait, diff)
// 优化请求 如果大于 3 min 请求
console.log(
  'diff > wait || !cacheRealtimeList.length ===',
  diff > wait,
  !cacheRealtimeList.length
)
if (diff > wait || !cacheRealtimeList.length) {
  getWeiboHot().then(res => {
    console.log('res ===', res.data)
    const list = res.data.slice(0, 20)
    setItem('realtime', list)
    setItem('now', new Date().getTime())
    realtime.value = list
  })
}
const jokeList = ref([])
getJokeList().then(res => {
  console.log('res ===', res)
  jokeList.value = res.data
})

const hrefTo = (url: string) => {
  window.location.href = url
}
</script>
<style lang="less" scoped>
.header {
  padding: 8px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
}
.title {
  padding: 5px 0;
}
.index {
  display: inline-block;
  width: 24px;
  text-align: center;
  color: #ff8200;
  font-size: 16px;
  font-weight: 700;
  color: #f26d5f;
}
.hot {
  padding: 0 4px;
}
.icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background: rgb(255, 148, 6);
}
</style>
