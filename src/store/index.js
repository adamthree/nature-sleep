import { createStore } from 'vuex'

export default createStore({
  state: {
    sounds: [
      {
        id: 1,
        name: '雨声',
        description: '轻柔的雨声，帮助放松和入睡',
        image: '/images/rain.jpg',
        url: '/sounds/rain.mp3',
        icon: 'fas fa-cloud-rain',
        duration: '30:00'
      },
      {
        id: 2,
        name: '海浪',
        description: '平静的海浪声，带来宁静',
        image: '/images/ocean.jpg',
        url: '/sounds/ocean.mp3',
        icon: 'fas fa-water',
        duration: '30:00'
      },
      {
        id: 3,
        name: '森林',
        description: '森林中的鸟鸣和风声',
        image: '/images/forest.jpg',
        url: '/sounds/forest.mp3',
        icon: 'fas fa-tree',
        duration: '30:00'
      },
      {
        id: 4,
        name: '篝火',
        description: '温暖的篝火声，带来舒适感',
        image: '/images/fire.jpg',
        url: '/sounds/fire.mp3',
        icon: 'fas fa-fire',
        duration: '30:00'
      },
      {
        id: 5,
        name: '溪流',
        description: '清澈的溪流声，舒缓心情',
        image: '/images/stream.jpg',
        url: '/sounds/stream.mp3',
        icon: 'fas fa-water',
        duration: '30:00'
      },
      {
        id: 6,
        name: '鸟鸣',
        description: '清晨的鸟鸣声，充满生机',
        image: '/images/birds.jpg',
        url: '/sounds/birds.mp3',
        icon: 'fas fa-dove',
        duration: '30:00'
      }
    ],
    favorites: [],
    currentSound: null,
    isPlaying: false,
    mixedSounds: [],
    userSettings: {
      autoPlay: false,
      sleepTimer: '0',
      audioQuality: 'high',
      theme: 'light'
    }
  },
  mutations: {
    setCurrentSound(state, sound) {
      state.currentSound = sound
    },
    setPlaying(state, isPlaying) {
      state.isPlaying = isPlaying
    },
    toggleFavorite(state, { soundId, isFavorite }) {
      if (isFavorite) {
        if (!state.favorites.includes(soundId)) {
          state.favorites.push(soundId)
        }
      } else {
        state.favorites = state.favorites.filter(id => id !== soundId)
      }
      // 保存到本地存储
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    },
    updateSettings(state, settings) {
      state.userSettings = { ...settings }
      // 保存到本地存储
      localStorage.setItem('userSettings', JSON.stringify(settings))
    },
    addToMix(state, sound) {
      if (!state.mixedSounds.find(s => s.id === sound.id)) {
        state.mixedSounds.push({
          ...sound,
          volume: 50
        })
      }
    },
    removeFromMix(state, soundId) {
      state.mixedSounds = state.mixedSounds.filter(s => s.id !== soundId)
    },
    updateMixVolume(state, { soundId, volume }) {
      const sound = state.mixedSounds.find(s => s.id === soundId)
      if (sound) {
        sound.volume = volume
      }
    }
  },
  actions: {
    loadFromLocalStorage({ state, commit }) {
      // 加载收藏
      const favorites = localStorage.getItem('favorites')
      if (favorites) {
        state.favorites = JSON.parse(favorites)
      }

      // 加载设置
      const settings = localStorage.getItem('userSettings')
      if (settings) {
        state.userSettings = JSON.parse(settings)
      }
    }
  },
  getters: {
    favoriteSounds: state => {
      return state.sounds.filter(sound => state.favorites.includes(sound.id))
    },
    mixedSounds: state => {
      return state.mixedSounds
    }
  }
}) 