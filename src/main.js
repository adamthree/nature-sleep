import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.css'

Vue.config.productionTip = false

new Vue({
  router,
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
  render: h => h(App)
}).$mount('#app') 