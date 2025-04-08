<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <h1 class="text-2xl font-bold text-gray-900">Nature Sleep</h1>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SoundCard
          v-for="sound in sounds"
          :key="sound.id"
          :sound="sound"
          @toggle-favorite="toggleFavorite"
        />
      </div>
    </main>
  </div>
</template>

<script>
import SoundCard from './components/SoundCard.vue'

export default {
  name: 'App',
  components: {
    SoundCard
  },
  data() {
    return {
      sounds: [
        {
          id: 1,
          name: 'Ocean Waves',
          description: 'Gentle waves crashing on the shore',
          duration: '30:00',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
          audio: '/sounds/ocean-waves.mp3',
          isFavorite: false
        },
        {
          id: 2,
          name: 'Rain Forest',
          description: 'Soothing sounds of a tropical rain forest',
          duration: '45:00',
          image: 'https://images.unsplash.com/photo-1511497584788-876760111969',
          audio: '/sounds/rain-forest.mp3',
          isFavorite: false
        },
        {
          id: 3,
          name: 'Mountain Stream',
          description: 'Crystal clear water flowing through rocks',
          duration: '60:00',
          image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
          audio: '/sounds/mountain-stream.mp3',
          isFavorite: false
        }
      ]
    }
  },
  methods: {
    toggleFavorite(soundId) {
      const sound = this.sounds.find(s => s.id === soundId)
      if (sound) {
        sound.isFavorite = !sound.isFavorite
      }
    }
  }
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style> 