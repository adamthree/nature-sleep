<template>
  <div class="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100 flex flex-col items-center justify-center p-4">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-emerald-800 mb-4">Nature Sleep</h1>
      <p class="text-lg text-emerald-600 mb-8">智能睡眠助手，让您享受自然的声音</p>
      <div class="flex space-x-4">
        <button @click="$router.push('/home')" class="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          开始体验
        </button>
        <button @click="$router.push('/about')" class="px-6 py-2 border border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-50 transition-colors">
          了解更多
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome'
}
</script> 