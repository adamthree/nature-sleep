<template>
  <div class="min-h-screen bg-gray-100">
    <!-- 顶部导航 -->
    <nav class="bg-emerald-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <i class="fas fa-user text-xl mr-2"></i>
          <span class="text-xl font-bold">个人中心</span>
        </div>
        <button class="p-2 hover:bg-emerald-700 rounded-full">
          <i class="fas fa-cog"></i>
        </button>
      </div>
    </nav>

    <!-- 个人资料 -->
    <div class="container mx-auto p-4 pb-20">
      <!-- 用户信息卡片 -->
      <div class="bg-white rounded-lg shadow p-6 mb-6">
        <div class="flex items-center mb-4">
          <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
            <i class="fas fa-user text-emerald-600 text-2xl"></i>
          </div>
          <div>
            <h2 class="text-xl font-semibold">用户名</h2>
            <p class="text-gray-500">普通会员</p>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4 text-center">
          <div>
            <div class="text-xl font-semibold text-emerald-600">128</div>
            <div class="text-sm text-gray-500">收藏</div>
          </div>
          <div>
            <div class="text-xl font-semibold text-emerald-600">32</div>
            <div class="text-sm text-gray-500">播放</div>
          </div>
          <div>
            <div class="text-xl font-semibold text-emerald-600">7</div>
            <div class="text-sm text-gray-500">连续</div>
          </div>
        </div>
      </div>

      <!-- 功能列表 -->
      <div class="space-y-4">
        <div class="bg-white rounded-lg shadow">
          <div class="p-4 border-b border-gray-100">
            <h3 class="font-medium text-gray-900">我的收藏</h3>
          </div>
          <div class="p-4">
            <div v-for="item in favorites" :key="item.id" 
                 class="flex items-center justify-between py-2">
              <div class="flex items-center">
                <i :class="item.icon" class="text-emerald-600 text-lg mr-3"></i>
                <span>{{ item.name }}</span>
              </div>
              <button class="text-gray-400 hover:text-red-500">
                <i class="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow">
          <div class="p-4 border-b border-gray-100">
            <h3 class="font-medium text-gray-900">最近播放</h3>
          </div>
          <div class="p-4">
            <div v-for="item in recentPlays" :key="item.id" 
                 class="flex items-center justify-between py-2">
              <div class="flex items-center">
                <i :class="item.icon" class="text-emerald-600 text-lg mr-3"></i>
                <span>{{ item.name }}</span>
              </div>
              <button class="text-emerald-600 hover:text-emerald-700">
                <i class="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow">
          <div class="p-4 border-b border-gray-100">
            <h3 class="font-medium text-gray-900">睡眠记录</h3>
          </div>
          <div class="p-4">
            <div v-for="record in sleepRecords" :key="record.id" 
                 class="flex items-center justify-between py-2">
              <div>
                <div class="font-medium">{{ record.date }}</div>
                <div class="text-sm text-gray-500">{{ record.duration }}</div>
              </div>
              <div class="text-emerald-600 font-medium">{{ record.score }}</div>
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
          <router-link to="/search" class="text-gray-600 flex flex-col items-center">
            <i class="fas fa-search"></i>
            <span class="text-xs">搜索</span>
          </router-link>
          <router-link to="/profile" class="text-emerald-600 flex flex-col items-center">
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
  name: 'Profile',
  data() {
    return {
      favorites: [
        {
          id: 1,
          name: '雨林清晨',
          icon: 'fas fa-tree'
        },
        {
          id: 2,
          name: '海边日落',
          icon: 'fas fa-sun'
        },
        {
          id: 3,
          name: '森林夜晚',
          icon: 'fas fa-moon'
        }
      ],
      recentPlays: [
        {
          id: 1,
          name: '雨声',
          icon: 'fas fa-cloud-rain'
        },
        {
          id: 2,
          name: '海浪',
          icon: 'fas fa-water'
        },
        {
          id: 3,
          name: '篝火',
          icon: 'fas fa-fire'
        }
      ],
      sleepRecords: [
        {
          id: 1,
          date: '2023-04-07',
          duration: '7小时30分钟',
          score: '85分'
        },
        {
          id: 2,
          date: '2023-04-06',
          duration: '8小时',
          score: '90分'
        },
        {
          id: 3,
          date: '2023-04-05',
          duration: '6小时45分钟',
          score: '75分'
        }
      ]
    }
  }
}
</script> 