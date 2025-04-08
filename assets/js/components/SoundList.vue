<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <sound-card
        v-for="sound in sounds"
        :key="sound.id"
        :sound="sound"
        @favorite-changed="handleFavoriteChanged"
        @play="handlePlay"
      />
    </div>
  </div>
</template>

<script>
import SoundCard from './SoundCard.vue'

export default {
  name: 'SoundList',
  components: {
    SoundCard
  },
  props: {
    sounds: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleFavoriteChanged({ sound, isFavorite }) {
      this.$emit('favorite-changed', { sound, isFavorite })
    },
    handlePlay(sound) {
      this.$emit('play', sound)
    }
  }
}
</script> 