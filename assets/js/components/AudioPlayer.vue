<template>
  <div class="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <img :src="currentSound.image" :alt="currentSound.name" class="w-16 h-16 rounded-lg object-cover">
        <div>
          <h3 class="text-lg font-semibold">{{ currentSound.name }}</h3>
          <p class="text-gray-600">{{ currentSound.description }}</p>
        </div>
      </div>
      
      <div class="flex items-center space-x-4">
        <button @click="togglePlay" class="p-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600">
          <i :class="['fas', isPlaying ? 'fa-pause' : 'fa-play']"></i>
        </button>
        
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-600">{{ formatTime(currentTime) }}</span>
          <input 
            type="range" 
            v-model="progress" 
            min="0" 
            :max="duration" 
            class="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            @input="seek"
          >
          <span class="text-sm text-gray-600">{{ formatTime(duration) }}</span>
        </div>
        
        <div class="flex items-center space-x-2">
          <button @click="toggleMute" class="p-2 text-gray-600 hover:text-gray-800">
            <i :class="['fas', isMuted ? 'fa-volume-mute' : 'fa-volume-up']"></i>
          </button>
          <input 
            type="range" 
            v-model="volume" 
            min="0" 
            max="100" 
            class="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            @input="setVolume"
          >
        </div>
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
      required: true
    }
  },
  data() {
    return {
      audio: null,
      isPlaying: false,
      isMuted: false,
      currentTime: 0,
      duration: 0,
      progress: 0,
      volume: 100
    }
  },
  mounted() {
    this.audio = new Audio(this.currentSound.url)
    this.audio.addEventListener('timeupdate', this.updateProgress)
    this.audio.addEventListener('loadedmetadata', this.updateDuration)
    this.audio.addEventListener('ended', this.handleEnded)
  },
  beforeDestroy() {
    if (this.audio) {
      this.audio.removeEventListener('timeupdate', this.updateProgress)
      this.audio.removeEventListener('loadedmetadata', this.updateDuration)
      this.audio.removeEventListener('ended', this.handleEnded)
      this.audio.pause()
      this.audio = null
    }
  },
  methods: {
    togglePlay() {
      if (this.isPlaying) {
        this.audio.pause()
      } else {
        this.audio.play()
      }
      this.isPlaying = !this.isPlaying
    },
    toggleMute() {
      this.isMuted = !this.isMuted
      this.audio.muted = this.isMuted
    },
    setVolume() {
      this.audio.volume = this.volume / 100
    },
    seek() {
      this.audio.currentTime = this.progress
    },
    updateProgress() {
      this.currentTime = this.audio.currentTime
      this.progress = this.currentTime
    },
    updateDuration() {
      this.duration = this.audio.duration
    },
    handleEnded() {
      this.isPlaying = false
      this.currentTime = 0
      this.progress = 0
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60)
      const remainingSeconds = Math.floor(seconds % 60)
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }
  }
}
</script> 