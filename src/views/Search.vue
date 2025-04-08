<template>
  <div class="min-h-screen bg-gray-100">
    <!-- 顶部导航 -->
    <nav class="bg-emerald-600 text-white p-4">
      <div class="container mx-auto">
        <div class="relative">
          <input type="text" 
                 v-model="searchQuery"
                 placeholder="搜索自然声音..."
                 class="w-full bg-white/20 rounded-full py-2 px-4 pl-10 text-white placeholder-white/70 focus:outline-none">
          <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70"></i>
        </div>
      </div>
    </nav>

    <!-- 搜索内容 -->
    <div class="container mx-auto p-4 pb-20">
      <!-- 热门搜索 -->
      <div class="mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-3">热门搜索</h3>
        <div class="flex flex-wrap gap-2">
          <button v-for="tag in hotTags" :key="tag" 
                  class="px-3 py-1 bg-white rounded-full text-sm text-gray-600 hover:bg-emerald-50 hover:text-emerald-600">
            {{ tag }}
          </button>
        </div>
      </div>

      <!-- 搜索结果 -->
      <div v-if="searchResults.length > 0" class="space-y-4">
        <div v-for="result in searchResults" :key="result.id" 
             class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center">
              <i :class="result.icon" class="text-emerald-600 text-lg mr-3"></i>
              <h3 class="font-semibold">{{ result.name }}</h3>
            </div>
            <button class="text-emerald-600 hover:text-emerald-700">
              <i class="fas fa-play"></i>
            </button>
          </div>
          <p class="text-sm text-gray-600">{{ result.description }}</p>
        </div>
      </div>

      <!-- 无结果提示 -->
      <div v-else-if="searchQuery" class="text-center py-8">
        <i class="fas fa-search text-gray-400 text-4xl mb-4"></i>
        <p class="text-gray-500">没有找到相关结果</p>
      </div>

      <!-- 推荐内容 -->
      <div v-else>
        <h3 class="text-lg font-medium text-gray-900 mb-3">推荐内容</h3>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="item in recommendedItems" :key="item.id" 
               class="bg-white rounded-lg shadow overflow-hidden">
            <img :src="item.image" :alt="item.name" class="w-full h-32 object-cover">
            <div class="p-3">
              <h4 class="font-semibold text-sm">{{ item.name }}</h4>
              <p class="text-xs text-gray-500">{{ item.description }}</p>
            </div>
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
          <router-link to="/sound-map" class="text-gray-600 flex flex-col items-center">
            <i class="fas fa-map-marker-alt"></i>
            <span class="text-xs">地图</span>
          </router-link>
          <router-link to="/ai-sleep-aid" class="text-gray-600 flex flex-col items-center">
            <i class="fas fa-magic"></i>
            <span class="text-xs">AI</span>
          </router-link>
          <router-link to="/search" class="text-emerald-600 flex flex-col items-center">
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
  name: 'Search',
  data() {
    return {
      searchQuery: '',
      hotTags: ['雨声', '海浪', '森林', '篝火', '风声', '鸟鸣', '溪流', '雷雨'],
      searchResults: [],
      recommendedItems: [
        {
          id: 1,
          name: '雨林清晨',
          description: '热带雨林的清晨声音',
          image: require('@/assets/images/rainforest.jpg'),
          icon: 'fas fa-tree'
        },
        {
          id: 2,
          name: '海边日落',
          description: '日落时分的海浪声',
          image: require('@/assets/images/sunset.jpg'),
          icon: 'fas fa-sun'
        },
        {
          id: 3,
          name: '森林夜晚',
          description: '夜晚的森林声音',
          image: require('@/assets/images/night.jpg'),
          icon: 'fas fa-moon'
        },
        {
          id: 4,
          name: '山间溪流',
          description: '山间溪流的声音',
          image: require('@/assets/images/stream.jpg'),
          icon: 'fas fa-water'
        }
      ]
    }
  },
  watch: {
    searchQuery(newQuery) {
      if (newQuery) {
        // 模拟搜索
        this.searchResults = this.recommendedItems.filter(item => 
          item.name.toLowerCase().includes(newQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(newQuery.toLowerCase())
        )
      } else {
        this.searchResults = []
      }
    }
  }
}
</script> 