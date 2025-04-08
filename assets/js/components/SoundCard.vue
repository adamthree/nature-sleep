<template>
  <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
    <div class="relative">
      <img 
        :src="sound.image" 
        :alt="sound.name"
        class="w-full h-48 object-cover"
      >
      <button 
        class="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        @click="toggleFavorite"
      >
        <i 
          :class="{
            'fas fa-heart text-red-500': isFavorite,
            'far fa-heart text-gray-500': !isFavorite
          }"
        ></i>
      </button>
    </div>
    
    <div class="p-4">
      <h3 class="text-lg font-medium text-gray-900">{{ sound.name }}</h3>
      <p class="mt-1 text-sm text-gray-500">{{ sound.description }}</p>
      
      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center">
          <i class="fas fa-clock text-gray-400 mr-1"></i>
          <span class="text-sm text-gray-500">{{ sound.duration }}</span>
        </div>
        
        <button 
          class="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-300"
          @click="playSound"
        >
          <i class="fas fa-play mr-2"></i>
          播放
        </button>
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
      isFavorite: false
    }
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite
      this.$emit('favorite-changed', {
        sound: this.sound,
        isFavorite: this.isFavorite
      })
    },
    playSound() {
      this.$emit('play', this.sound)
    }
  }
}
</script> 