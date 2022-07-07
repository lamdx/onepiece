<template>
  <div v-show="isShow" class="audio-line">
    <audio ref="audio" :src="props.url" controls autoplay>
      您的浏览器不支持 audio 元素。
    </audio>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// 接收 props
const props = defineProps<{ url: string; playing: boolean }>()
// 定义 emit
const emit = defineEmits<{
  (e: 'onAudioState', audioState: string): void
}>()
// 定义 HTMLAudioElement 响应对象
const audio = ref<HTMLAudioElement>(new Audio())
onMounted(() => {
  // 监听视频是否能播放
  audio.value.oncanplay = () => {
    props.playing ? audio.value.play() : audio.value.pause()
    // emit('onAudioState', 'oncanplay');
  }
  // 开始播放
  audio.value.onplay = () => {
    emit('onAudioState', 'onplay') // 通知父组件
  }
  // 暂停播放
  audio.value.onpause = () => {
    emit('onAudioState', 'onpause') // 通知父组件
  }
  // 播放失败
  audio.value.onerror = _err => {
    emit('onAudioState', 'onerror') // 通知父组件
  }
  // 播放结束
  audio.value.onended = _err => {
    emit('onAudioState', 'onended') // 通知父组件
  }
})

watch(
  () => props.playing, // 监听父组件的播放状态
  async (newVal, oldVal) => {
    console.log('newVal, oldVal', newVal, oldVal)
    if (newVal === oldVal) {
      return
    }
    newVal === true ? audio.value.play() : audio.value.pause()
  },
  { immediate: true }
)
const isShow = ref(false)
watch(
  () => router.currentRoute.value,
  val => {
    isShow.value = val.path === '/music' ? true : false
  },
  { immediate: true }
)
</script>

<style lang="less" scoped>
.audio-line {
  audio {
    position: absolute;
    top: 425px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
  }
}
</style>
