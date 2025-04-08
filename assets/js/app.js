// 初始化Vue应用
new Vue({
    el: '#app',
    router: router,
    data: {
        sounds: [
            {
                id: 1,
                name: '雨声',
                category: '自然',
                duration: '30:00',
                image: 'assets/images/rain.jpg',
                audio: 'assets/audio/rain.mp3'
            },
            {
                id: 2,
                name: '海浪',
                category: '自然',
                duration: '45:00',
                image: 'assets/images/waves.jpg',
                audio: 'assets/audio/waves.mp3'
            },
            {
                id: 3,
                name: '森林',
                category: '自然',
                duration: '60:00',
                image: 'assets/images/forest.jpg',
                audio: 'assets/audio/forest.mp3'
            },
            {
                id: 4,
                name: '溪流',
                category: '自然',
                duration: '40:00',
                image: 'assets/images/stream.jpg',
                audio: 'assets/audio/stream.mp3'
            },
            {
                id: 5,
                name: '风声',
                category: '自然',
                duration: '35:00',
                image: 'assets/images/wind.jpg',
                audio: 'assets/audio/wind.mp3'
            },
            {
                id: 6,
                name: '鸟鸣',
                category: '自然',
                duration: '25:00',
                image: 'assets/images/birds.jpg',
                audio: 'assets/audio/birds.mp3'
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
                if (this.isPlaying) {
                    this.pauseSound();
                } else {
                    this.resumeSound();
                }
            } else {
                this.currentSound = sound;
                this.isPlaying = true;
                this.remainingTime = this.parseDuration(sound.duration);
                this.startTimer();
            }
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
    }
});
