<template>
  <div class="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-semibold">音频混音</h3>
        <button @click="toggleMixer" class="text-gray-600 hover:text-gray-900">
          <i :class="isOpen ? 'fas fa-chevron-down' : 'fas fa-chevron-up'"></i>
        </button>
      </div>

      <div v-if="isOpen" class="space-y-4">
        <div v-for="sound in mixedSounds" :key="sound.id" class="flex items-center space-x-4">
          <img :src="sound.image" :alt="sound.name" class="w-10 h-10 rounded object-cover">
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <span class="font-medium">{{ sound.name }}</span>
              <button @click="removeFromMix(sound)" class="text-red-500 hover:text-red-600">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="flex items-center space-x-2">
              <i class="fas fa-volume-down text-gray-400"></i>
              <input type="range" v-model="sound.volume" min="0" max="100" 
                     @input="updateVolume(sound)"
                     class="w-24">
              <i class="fas fa-volume-up text-gray-400"></i>
            </div>
          </div>
        </div>

        <div v-if="mixedSounds.length === 0" class="text-center py-4 text-gray-500">
          暂无混音音频
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioMixer',
  data() {
    return {
      isOpen: false,
      mixedSounds: []
    }
  },
  methods: {
    toggleMixer() {
      this.isOpen = !this.isOpen
    },
    addToMix(sound) {
      if (!this.mixedSounds.find(s => s.id === sound.id)) {
        this.mixedSounds.push({
          ...sound,
          volume: 50,
          audio: new Audio(sound.url)
        })
        this.mixedSounds[this.mixedSounds.length - 1].audio.volume = 0.5
        this.mixedSounds[this.mixedSounds.length - 1].audio.play()
      }
    },
    removeFromMix(sound) {
      const index = this.mixedSounds.findIndex(s => s.id === sound.id)
      if (index !== -1) {
        this.mixedSounds[index].audio.pause()
        this.mixedSounds.splice(index, 1)
      }
    },
    updateVolume(sound) {
      const audio = this.mixedSounds.find(s => s.id === sound.id)?.audio
      if (audio) {
        audio.volume = sound.volume / 100
      }
    }
  },
  beforeUnmount() {
    // 清理所有音频
    this.mixedSounds.forEach(sound => {
      sound.audio.pause()
    })
  }
}
</script> 