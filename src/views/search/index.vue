<template>
  <div class="header">💰 捐赠</div>
  <div>捐赠会有两个用途</div>
  <div>· 请允许我买杯咖啡 ☕</div>
  <div>· 服务升级</div>
  <div>· 微信：</div>
  <van-image class="pay" alt="wechat pay" :src="getImageUrl()">
    <template #loading>
      <van-loading type="spinner" size="20" />
    </template>
  </van-image>
</template>
<script setup lang="ts">
const getImageUrl = () => {
  return new URL(`../../assets/pay.jpg`, import.meta.url).href
}
</script>
<style scoped>
.header {
  padding: 8px 4px;
  font-size: 1.5em;
  border-bottom: 1px solid #ccc;
}
.pay {
  width: 100%;
  padding-left: 0;
}
div + div {
  padding-left: 10px;
  margin-top: 0.25em;
}
</style>
