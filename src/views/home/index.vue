<template>
  <div>home</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getJokeList } from '@/api'
const jokeList = ref([])
getJokeList().then(res => {
  console.log('res ===', res)
  jokeList.value = res.data
})
</script>
