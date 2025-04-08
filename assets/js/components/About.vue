<template>
  <div class="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100 p-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold text-emerald-800 mb-6">关于 Nature Sleep</h1>
      
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-xl font-semibold text-emerald-700 mb-4">我们的使命</h2>
        <p class="text-gray-600 mb-4">
          Nature Sleep 致力于通过自然的声音和 AI 技术，帮助人们获得更好的睡眠体验。我们相信，良好的睡眠是健康生活的基础。
        </p>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-xl font-semibold text-emerald-700 mb-4">特色功能</h2>
        <ul class="list-disc list-inside text-gray-600 space-y-2">
          <li>丰富的自然声音库</li>
          <li>智能声音编辑</li>
          <li>睡眠监测与分析</li>
          <li>个性化推荐</li>
        </ul>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-semibold text-emerald-700 mb-4">技术栈</h2>
        <div class="grid grid-cols-2 gap-4 text-gray-600">
          <div>Vue.js 2.x</div>
          <div>TailwindCSS</div>
          <div>Web Audio API</div>
          <div>ECharts</div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <button @click="$router.push('/')" class="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          返回首页
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script> 