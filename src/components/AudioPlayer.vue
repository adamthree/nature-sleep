<template>
  <div class="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-4">
          <img :src="currentSound?.image" :alt="currentSound?.name" class="w-12 h-12 rounded object-cover">
          <div>
            <h3 class="font-semibold">{{ currentSound?.name }}</h3>
            <p class="text-sm text-gray-600">{{ currentSound?.description }}</p>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <button @click="togglePlay" class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
            <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
          </button>
          <div class="flex items-center space-x-2">
            <i class="fas fa-volume-up"></i>
            <input type="range" v-model="volume" min="0" max="100" class="w-24">
          </div>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <span class="text-sm text-gray-600">{{ formatTime(currentTime) }}</span>
        <div class="flex-1 h-2 bg-gray-200 rounded-full">
          <div class="h-full bg-green-500 rounded-full" :style="{ width: progress + '%' }"></div>
        </div>
        <span class="text-sm text-gray-600">{{ formatTime(duration) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  props: {
    currentSound: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      audio: null,
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 100
    }
  },
  computed: {
    progress() {
      return (this.currentTime / this.duration) * 100 || 0
    }
  },
  watch: {
    currentSound(newSound) {
      if (newSound) {
        this.initializeAudio()
      }
    },
    volume(newVolume) {
      if (this.audio) {
        this.audio.volume = newVolume / 100
      }
    }
  },
  methods: {
    initializeAudio() {
      if (this.audio) {
        this.audio.pause()
        this.audio = null
      }
      
      this.audio = new Audio(this.currentSound.url)
      this.audio.volume = this.volume / 100
      
      this.audio.addEventListener('timeupdate', this.updateTime)
      this.audio.addEventListener('loadedmetadata', () => {
        this.duration = this.audio.duration
      })
      this.audio.addEventListener('ended', () => {
        this.isPlaying = false
        this.currentTime = 0
      })
    },
    togglePlay() {
      if (!this.audio) return
      
      if (this.isPlaying) {
        this.audio.pause()
      } else {
        this.audio.play()
      }
      this.isPlaying = !this.isPlaying
    },
    updateTime() {
      this.currentTime = this.audio.currentTime
    },
    formatTime(seconds) {
      if (!seconds) return '00:00'
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = Math.floor(seconds % 60)
      return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }
  },
  beforeUnmount() {
    if (this.audio) {
      this.audio.pause()
      this.audio.removeEventListener('timeupdate', this.updateTime)
    }
  }
}
</script> 