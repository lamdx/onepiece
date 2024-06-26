<template>
  <div id="love" class="siri" data-clipboard-target="#love">
    <Tinytyper
      v-if="loveText"
      :text="loveText"
      :cursor-class="cursorClass"
      text-class="love"
      container-class="loveContainer"
      @animation-finished="next"
    ></Tinytyper>
  </div>
  <div id="sweet" class="siri" data-clipboard-target="#sweet">
    <Tinytyper
      v-if="isShow"
      :text="sweetText"
      :cursor-class="cursorClass"
      text-class="sweet"
      container-class="sweetContainer"
    ></Tinytyper>
  </div>
  <!-- Clipboard 示例 -->
  <!-- Target -->
  <!-- <input id="foo" value="https://github.com/zenorocha/clipboard.js.git" /> -->
  <!-- Trigger -->
  <!-- <button class="btn" data-clipboard-target="#foo">Copy to clipboard</button> -->
</template>
<script setup lang="ts">
import Clipboard from 'clipboard'
import { ref } from 'vue'
import { Toast } from 'vant'
import { getLove, getSao } from '@/api'
const loveText = ref('')
const sweetText = ref('')
const isShow = ref(false)
const cursorClass = ref('tiny-typer-cursor')

getLove().then(res => {
  console.log('res ===', res)
  loveText.value = res
})

getSao().then(res => {
  console.log('res ===', res)
  sweetText.value = res
})

const next = () => {
  console.log('123 ===', 123)
  isShow.value = true
  // getSao().then(res => {
  //   console.log('res ===', res);
  // });
}
// 复制
new Clipboard('#love').on('success', function (e) {
  console.info('Action:', e.action)
  console.info('Text:', e.text)
  console.info('Trigger:', e.trigger)
  e.clearSelection()
  Toast('复制成功')
})
new Clipboard('#sweet').on('success', function (e) {
  console.info('Action:', e.action)
  console.info('Text:', e.text)
  console.info('Trigger:', e.trigger)
  e.clearSelection()
  Toast('复制成功')
})
</script>
<style>
.siri {
  display: flex;
  padding: 20px;
}
.love,
.sweet {
  color: black;
  font-size: 40px;
}
</style>
