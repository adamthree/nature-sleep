<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold">我的收藏</h1>
        <button @click="$router.push('/')" class="text-gray-600 hover:text-gray-900">
          <i class="fas fa-arrow-left mr-2"></i>返回首页
        </button>
      </div>

      <div v-if="favoriteSounds.length === 0" class="text-center py-12">
        <i class="fas fa-heart text-gray-300 text-6xl mb-4"></i>
        <p class="text-gray-500">暂无收藏的声音</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SoundCard
          v-for="sound in favoriteSounds"
          :key="sound.id"
          :sound="sound"
          :is-currently-playing="currentSound?.id === sound.id && isPlaying"
          @play="handlePlay"
          @favorite="handleFavorite"
        />
      </div>
    </div>

    <AudioPlayer
      v-if="currentSound"
      :current-sound="currentSound"
      @play-state-changed="handlePlayStateChanged"
    />
  </div>
</template>

<script>
import SoundCard from '@/components/SoundCard.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Favorites',
  components: {
    SoundCard,
    AudioPlayer
  },
  computed: {
    ...mapState(['sounds', 'favorites', 'currentSound', 'isPlaying']),
    favoriteSounds() {
      return this.sounds.filter(sound => this.favorites.includes(sound.id))
    }
  },
  methods: {
    ...mapMutations(['setCurrentSound', 'setPlaying', 'toggleFavorite']),
    handlePlay(sound) {
      if (this.currentSound?.id === sound.id) {
        this.setPlaying(!this.isPlaying)
      } else {
        this.setCurrentSound(sound)
        this.setPlaying(true)
      }
    },
    handleFavorite({ sound, isFavorite }) {
      this.toggleFavorite({ soundId: sound.id, isFavorite })
    },
    handlePlayStateChanged(isPlaying) {
      this.setPlaying(isPlaying)
    }
  }
}
</script> 