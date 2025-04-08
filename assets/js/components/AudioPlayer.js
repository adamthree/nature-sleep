export default {
    props: {
        currentSound: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            audio: null,
            isPlaying: false,
            volume: 0.5,
            currentTime: 0,
            duration: 0
        }
    },
    watch: {
        currentSound: {
            handler(newSound) {
                if (newSound) {
                    this.initAudio();
                }
            },
            immediate: true
        }
    },
    methods: {
        initAudio() {
            if (this.audio) {
                this.audio.pause();
                this.audio = null;
            }
            
            this.audio = new Audio(this.currentSound.url);
            this.audio.volume = this.volume;
            
            this.audio.addEventListener('timeupdate', this.updateTime);
            this.audio.addEventListener('loadedmetadata', () => {
                this.duration = this.audio.duration;
            });
            
            this.play();
        },
        play() {
            if (this.audio) {
                this.audio.play();
                this.isPlaying = true;
            }
        },
        pause() {
            if (this.audio) {
                this.audio.pause();
                this.isPlaying = false;
            }
        },
        togglePlay() {
            if (this.isPlaying) {
                this.pause();
            } else {
                this.play();
            }
        },
        updateTime() {
            if (this.audio) {
                this.currentTime = this.audio.currentTime;
            }
        },
        setVolume(value) {
            this.volume = value;
            if (this.audio) {
                this.audio.volume = value;
            }
        },
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        }
    },
    template: `
        <div class="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 p-4">
            <div class="container mx-auto">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <img :src="currentSound.image" :alt="currentSound.name" class="w-12 h-12 rounded">
                        <div>
                            <h4 class="font-semibold">{{ currentSound.name }}</h4>
                            <p class="text-sm text-gray-600">{{ currentSound.description }}</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <button @click="togglePlay" class="text-emerald-600 hover:text-emerald-700">
                            <i :class="isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
                        </button>
                        <div class="flex items-center space-x-2">
                            <i class="fas fa-volume-up text-gray-600"></i>
                            <input type="range" min="0" max="1" step="0.1" v-model="volume" 
                                   @input="setVolume($event.target.value)"
                                   class="w-24">
                        </div>
                        <span class="text-sm text-gray-600">
                            {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `
}; 