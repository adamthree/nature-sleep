<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-900">Nature Sleep</h1>
        <nav class="flex space-x-4">
          <router-link to="/" class="text-gray-500 hover:text-gray-900">首页</router-link>
          <router-link to="/favorites" class="text-gray-500 hover:text-gray-900">收藏</router-link>
          <router-link to="/settings" class="text-gray-500 hover:text-gray-900">设置</router-link>
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Tailwind CSS is imported in main.js */
</style> 