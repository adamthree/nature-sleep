<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">设置</h1>
      
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <h2 class="font-semibold text-xl mb-4">基本设置</h2>
        
        <div class="mb-4">
          <label class="flex items-center cursor-pointer">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-primary-600" v-model="darkMode">
            <span class="ml-2 text-gray-700">黑暗模式</span>
          </label>
        </div>
        
        <div class="mb-4">
          <label class="flex items-center cursor-pointer">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-primary-600" v-model="autoPlay">
            <span class="ml-2 text-gray-700">自动播放</span>
          </label>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6">
        <h2 class="font-semibold text-xl mb-4">关于</h2>
        <p class="text-gray-600 mb-2">Nature Sleep</p>
        <p class="text-gray-600 mb-2">版本: 1.0.0</p>
        <p class="text-gray-600">© 2023 Nature Sleep. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      darkMode: false,
      autoPlay: false
    }
  }
}
</script> 