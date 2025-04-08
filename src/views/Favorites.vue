<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">收藏</h1>
      
      <div v-if="favoritesList.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SoundCard
          v-for="sound in favoritesList"
          :key="sound.id"
          :sound="sound"
          @toggle-favorite="toggleFavorite"
        />
      </div>
      
      <div v-else class="text-center py-12">
        <p class="text-gray-500 text-lg mb-4">您还没有收藏任何声音</p>
        <router-link to="/" class="btn-primary">
          浏览声音
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SoundCard from '@/components/SoundCard.vue'

export default {
  name: 'Favorites',
  components: {
    SoundCard
  },
  computed: {
    favoritesList() {
      return this.$root.sounds.filter(sound => sound.isFavorite)
    }
  },
  methods: {
    toggleFavorite(soundId) {
      const sound = this.$root.sounds.find(s => s.id === soundId)
      if (sound) {
        sound.isFavorite = !sound.isFavorite
      }
    }
  }
}
</script> 