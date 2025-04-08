<template>
  <div class="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-emerald-800 mb-4">Nature Sleep</h1>
        <p class="text-xl text-gray-600">让自然的声音伴您入眠</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="sound in sounds" :key="sound.id" 
             class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img :src="sound.image" :alt="sound.name" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ sound.name }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ sound.description }}</p>
            <div class="flex justify-between items-center">
              <button @click="playSound(sound)" 
                      class="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition-colors duration-300">
                播放
              </button>
              <span class="text-gray-500 text-sm">{{ sound.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      sounds: [
        {
          id: 1,
          name: '雨声',
          description: '轻柔的雨声，帮助您放松身心',
          image: 'assets/images/rain.jpg',
          duration: '30分钟',
          audio: 'assets/audio/rain.mp3'
        },
        {
          id: 2,
          name: '海浪',
          description: '舒缓的海浪声，让您仿佛置身海边',
          image: 'assets/images/waves.jpg',
          duration: '45分钟',
          audio: 'assets/audio/waves.mp3'
        },
        {
          id: 3,
          name: '森林',
          description: '鸟鸣和树叶沙沙声，带来自然的宁静',
          image: 'assets/images/forest.jpg',
          duration: '60分钟',
          audio: 'assets/audio/forest.mp3'
        }
      ]
    }
  },
  methods: {
    playSound(sound) {
      // 实现音频播放逻辑
      console.log('Playing:', sound.name);
    }
  }
}
</script> 