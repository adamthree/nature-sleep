<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold">设置</h1>
        <button @click="$router.push('/')" class="text-gray-600 hover:text-gray-900">
          <i class="fas fa-arrow-left mr-2"></i>返回首页
        </button>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="space-y-6">
          <!-- 自动播放设置 -->
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-semibold">自动播放</h3>
              <p class="text-sm text-gray-600">播放完当前音频后自动播放下一首</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="settings.autoPlay" class="sr-only peer">
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
          </div>

          <!-- 睡眠定时器 -->
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-semibold">睡眠定时器</h3>
              <p class="text-sm text-gray-600">设置自动停止播放的时间</p>
            </div>
            <select v-model="settings.sleepTimer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5">
              <option value="0">关闭</option>
              <option value="15">15分钟</option>
              <option value="30">30分钟</option>
              <option value="45">45分钟</option>
              <option value="60">60分钟</option>
              <option value="90">90分钟</option>
            </select>
          </div>

          <!-- 音质设置 -->
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-semibold">音质设置</h3>
              <p class="text-sm text-gray-600">选择音频质量（影响流量消耗）</p>
            </div>
            <select v-model="settings.audioQuality" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5">
              <option value="high">高质量</option>
              <option value="medium">中等质量</option>
              <option value="low">低质量</option>
            </select>
          </div>

          <!-- 主题设置 -->
          <div class="flex items-center justify-between">
            <div>
              <h3 class="font-semibold">主题设置</h3>
              <p class="text-sm text-gray-600">选择应用主题</p>
            </div>
            <select v-model="settings.theme" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5">
              <option value="light">浅色主题</option>
              <option value="dark">深色主题</option>
              <option value="system">跟随系统</option>
            </select>
          </div>
        </div>

        <div class="mt-8 flex justify-end">
          <button @click="saveSettings" class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            保存设置
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Settings',
  data() {
    return {
      settings: {
        autoPlay: false,
        sleepTimer: '0',
        audioQuality: 'high',
        theme: 'light'
      }
    }
  },
  computed: {
    ...mapState(['userSettings'])
  },
  created() {
    // 从 Vuex 加载用户设置
    this.settings = { ...this.userSettings }
  },
  methods: {
    ...mapMutations(['updateSettings']),
    saveSettings() {
      this.updateSettings(this.settings)
      this.$toast.success('设置已保存')
    }
  }
}
</script> 