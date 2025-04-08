<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="text-emerald-500 text-xl font-bold">
              Nature Sleep
            </router-link>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link 
              v-for="item in navItems" 
              :key="item.path"
              :to="item.path"
              class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              :class="{
                'border-emerald-500 text-gray-900': $route.path === item.path,
                'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': $route.path !== item.path
              }"
            >
              <i :class="item.icon" class="mr-2"></i>
              {{ item.name }}
            </router-link>
          </div>
        </div>
        
        <div class="flex items-center">
          <button class="p-2 text-gray-500 hover:text-gray-700">
            <i class="fas fa-search"></i>
          </button>
          <button class="ml-4 p-2 text-gray-500 hover:text-gray-700">
            <i class="fas fa-user"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navItems: [
        { name: '首页', path: '/', icon: 'fas fa-home' },
        { name: '声音地图', path: '/map', icon: 'fas fa-map' },
        { name: 'AI编辑', path: '/ai-edit', icon: 'fas fa-magic' },
        { name: '睡眠监测', path: '/monitor', icon: 'fas fa-chart-line' },
        { name: '我的收藏', path: '/favorites', icon: 'fas fa-heart' }
      ]
    }
  }
}
</script> 