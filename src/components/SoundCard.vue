<template>
  <div class="bg-white rounded-lg shadow overflow-hidden">
    <div class="relative">
      <img :src="sound.image" :alt="sound.name" class="w-full h-40 object-cover">
      <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
        <button @click="playSound" 
                class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
          <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
        </button>
      </div>
    </div>
    <div class="p-4">
      <div class="flex items-center justify-between mb-2">
        <h3 class="font-semibold">{{ sound.name }}</h3>
        <button @click="toggleFavorite" 
                class="text-gray-400 hover:text-red-500 transition-colors">
          <i :class="sound.isFavorite ? 'fas fa-heart text-red-500' : 'far fa-heart'"></i>
        </button>
      </div>
      <p class="text-sm text-gray-600 mb-2">{{ sound.description }}</p>
      <div class="flex items-center text-sm text-gray-500">
        <i :class="sound.icon" class="mr-2"></i>
        <span>{{ sound.duration }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoundCard',
  props: {
    sound: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isPlaying: false
    }
  },
  methods: {
    playSound() {
      this.isPlaying = !this.isPlaying
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.sound.id)
    }
  }
}
</script> 