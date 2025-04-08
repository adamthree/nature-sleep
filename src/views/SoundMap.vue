<template>
  <div class="min-h-screen bg-gray-100">
    <!-- 顶部导航 -->
    <nav class="bg-emerald-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <i class="fas fa-map-marker-alt text-xl mr-2"></i>
          <span class="text-xl font-bold">声音地图</span>
        </div>
        <button class="p-2 hover:bg-emerald-700 rounded-full">
          <i class="fas fa-filter"></i>
        </button>
      </div>
    </nav>

    <!-- 地图内容 -->
    <div class="container mx-auto p-4 pb-20">
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <div class="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <p class="text-gray-500">地图加载中...</p>
        </div>
      </div>

      <!-- 声音地点列表 -->
      <div class="space-y-4">
        <div v-for="location in locations" :key="location.id" 
             class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-semibold">{{ location.name }}</h3>
            <span class="text-sm text-gray-500">{{ location.distance }}</span>
          </div>
          <p class="text-sm text-gray-600 mb-3">{{ location.description }}</p>
          <div class="flex items-center space-x-2">
            <button class="text-emerald-600 hover:text-emerald-700">
              <i class="fas fa-play"></i>
            </button>
            <span class="text-sm text-gray-500">{{ location.soundType }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部导航 -->
    <nav class="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div class="container mx-auto">
        <div class="flex justify-around items-center h-16">
          <router-link to="/" class="text-gray-600 flex flex-col items-center">
            <i class="fas fa-home"></i>
            <span class="text-xs">首页</span>
          </router-link>
          <router-link to="/sound-map" class="text-emerald-600 flex flex-col items-center">
            <i class="fas fa-map-marker-alt"></i>
            <span class="text-xs">地图</span>
          </router-link>
          <router-link to="/ai-sleep-aid" class="text-gray-600 flex flex-col items-center">
            <i class="fas fa-magic"></i>
            <span class="text-xs">AI</span>
          </router-link>
          <router-link to="/search" class="text-gray-600 flex flex-col items-center">
            <i class="fas fa-search"></i>
            <span class="text-xs">搜索</span>
          </router-link>
          <router-link to="/profile" class="text-gray-600 flex flex-col items-center">
            <i class="fas fa-user"></i>
            <span class="text-xs">我的</span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SoundMap',
  data() {
    return {
      locations: [
        {
          id: 1,
          name: '亚马逊雨林',
          distance: '8,000km',
          description: '热带雨林的原始声音，包含丰富的鸟类和昆虫鸣叫',
          soundType: '雨林声音'
        },
        {
          id: 2,
          name: '冰岛瀑布',
          distance: '5,000km',
          description: '壮观的瀑布声，配合冰川融化的声音',
          soundType: '瀑布声音'
        },
        {
          id: 3,
          name: '撒哈拉沙漠',
          distance: '6,000km',
          description: '沙漠的风声和沙粒摩擦的声音',
          soundType: '沙漠声音'
        }
      ]
    }
  }
}
</script> 