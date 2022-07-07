<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
const active = ref(0)
const onChange = () => {}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <router-view></router-view>
  <van-tabbar v-model="active" active-color="#ee0a24" @change="onChange">
    <van-tabbar-item to="/" icon="hot-o">热点</van-tabbar-item>
    <van-tabbar-item to="/music" icon="music-o">音乐</van-tabbar-item>
    <van-tabbar-item to="/siri" icon="friends-o">Siri</van-tabbar-item>
    <van-tabbar-item to="/search" icon="search">发现</van-tabbar-item>
  </van-tabbar>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
