<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 导航栏 -->
    <nav class="bg-white shadow">
      <div class="container mx-auto px-4">
        <div class="flex justify-between h-16">
          <div class="flex">
            <router-link to="/" class="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900">
              <i class="fas fa-music mr-2"></i>
              <span class="font-semibold">自然声音</span>
            </router-link>
          </div>
          <div class="flex items-center space-x-4">
            <router-link to="/favorites" class="text-gray-600 hover:text-gray-900">
              <i class="fas fa-heart"></i>
            </router-link>
            <router-link to="/settings" class="text-gray-600 hover:text-gray-900">
              <i class="fas fa-cog"></i>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- 主要内容 -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    // 加载本地存储的数据
    this.$store.dispatch('loadFromLocalStorage')
  }
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style> 