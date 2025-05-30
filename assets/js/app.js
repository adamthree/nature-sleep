// 导入组件
import AudioPlayer from './components/AudioPlayer.js';

// 初始化Vue应用
new Vue({
    el: '#app',
    components: {
        'audio-player': AudioPlayer
    },
    data: {
        sounds: [
            {
                id: 1,
                name: '雨声',
                description: '轻柔的雨声，帮助您放松身心',
                image: 'assets/images/rain.jpg',
                url: 'assets/audio/rain.mp3',
                isFavorite: false
            },
            {
                id: 2,
                name: '海浪',
                description: '舒缓的海浪声，带来宁静的睡眠',
                image: 'assets/images/waves.jpg',
                url: 'assets/audio/waves.mp3',
                isFavorite: false
            },
            {
                id: 3,
                name: '森林',
                description: '自然的森林声音，让您感受大自然的宁静',
                image: 'assets/images/forest.jpg',
                url: 'assets/audio/forest.mp3',
                isFavorite: false
            },
            {
                id: 4,
                name: '篝火',
                description: '温暖的篝火声，营造温馨氛围',
                image: 'assets/images/fire.jpg',
                url: 'assets/audio/fire.mp3',
                isFavorite: false
            }
        ],
        currentSound: null,
        isPlaying: false,
        volume: 1,
        timer: null,
        remainingTime: 0
    },
    methods: {
        playSound(sound) {
            if (this.currentSound && this.currentSound.id === sound.id) {
                // 如果点击当前播放的声音，则停止播放
                this.currentSound = null;
            } else {
                // 否则播放新的声音
                this.currentSound = sound;
            }
        },
        toggleFavorite(sound) {
            sound.isFavorite = !sound.isFavorite;
            // 这里可以添加收藏到本地的逻辑
            localStorage.setItem('favorites', JSON.stringify(
                this.sounds.filter(s => s.isFavorite).map(s => s.id)
            ));
        },
        pauseSound() {
            this.isPlaying = false;
            clearInterval(this.timer);
        },
        resumeSound() {
            this.isPlaying = true;
            this.startTimer();
        },
        stopSound() {
            this.currentSound = null;
            this.isPlaying = false;
            clearInterval(this.timer);
            this.remainingTime = 0;
        },
        startTimer() {
            this.timer = setInterval(() => {
                if (this.remainingTime > 0) {
                    this.remainingTime--;
                } else {
                    this.stopSound();
                }
            }, 1000);
        },
        parseDuration(duration) {
            const [minutes, seconds] = duration.split(':').map(Number);
            return minutes * 60 + seconds;
        },
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        },
        setVolume(value) {
            this.volume = value;
        }
    },
    mounted() {
        // 从本地存储加载收藏状态
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        this.sounds.forEach(sound => {
            sound.isFavorite = favorites.includes(sound.id);
        });
    }
});
