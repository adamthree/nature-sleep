<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">自然声音</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SoundCard
          v-for="sound in sounds"
          :key="sound.id"
          :sound="sound"
          :is-currently-playing="currentSound?.id === sound.id && isPlaying"
          @play="handlePlay"
          @add-to-mix="handleAddToMix"
          @favorite="handleFavorite"
        />
      </div>
    </div>

    <AudioPlayer
      v-if="currentSound"
      :current-sound="currentSound"
      @play-state-changed="handlePlayStateChanged"
    />

    <AudioMixer ref="audioMixer" />
  </div>
</template>

<script>
import SoundCard from '@/components/SoundCard.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'
import AudioMixer from '@/components/AudioMixer.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    SoundCard,
    AudioPlayer,
    AudioMixer
  },
  computed: {
    ...mapState(['sounds', 'favorites', 'currentSound', 'isPlaying'])
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
    handleAddToMix(sound) {
      this.$refs.audioMixer.addToMix(sound)
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