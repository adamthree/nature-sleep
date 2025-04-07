// 音频数据
const soundData = {
    sounds: [
        {
            id: 1,
            name: '雨声',
            artist: 'Nature Sleep',
            image: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=500',
            url: 'https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3'
        },
        {
            id: 2,
            name: '海浪',
            artist: 'Nature Sleep',
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
            url: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1ecd.mp3'
        },
        {
            id: 3,
            name: '森林',
            artist: 'Nature Sleep',
            image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500',
            url: 'https://cdn.pixabay.com/download/audio/2021/08/04/audio_12b8baa07d.mp3'
        },
        {
            id: 4,
            name: '白噪音',
            artist: 'Nature Sleep',
            image: 'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?w=500',
            url: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3'
        },
        {
            id: 5,
            name: '鸟鸣',
            artist: 'Nature Sleep',
            image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500',
            url: 'https://cdn.pixabay.com/download/audio/2021/09/10/audio_27bb7bef30.mp3'
        },
        {
            id: 6,
            name: '薰衣草',
            artist: 'Nature Sleep',
            image: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=500',
            url: 'https://cdn.pixabay.com/download/audio/2021/04/07/audio_b8e81cb8ea.mp3'
        },
        {
            id: 7,
            name: '篝火',
            artist: 'Nature Sleep',
            image: 'https://images.unsplash.com/photo-1475738556795-8e4295d52a02?w=500',
            url: 'https://cdn.pixabay.com/download/audio/2021/04/19/audio_e540b7b45a.mp3'
        },
        {
            id: 8,
            name: '风声',
            artist: 'Nature Sleep',
            image: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=500',
            url: 'https://cdn.pixabay.com/download/audio/2021/07/24/audio_64b2fcfa9d.mp3'
        }
    ]
};

// 导入音频可视化模块
import AudioVisualizer from './audio-visualizer.js';

// 创建Vue实例
const app = Vue.createApp({
    data() {
        return {
            currentTab: 0,
            tabs: [
                { name: '首页', icon: 'fas fa-home' },
                { name: '声音地图', icon: 'fas fa-map' },
                { name: 'AI', icon: 'fas fa-robot' },
                { name: '搜索', icon: 'fas fa-search' },
                { name: '我的', icon: 'fas fa-user' }
            ],
            functionItems: [
                {
                    name: '睡前故事',
                    imageUrl: 'https://ai-public.mastergo.com/ai/img_res/da79a431ac418e84541e059dedba7614.jpg'
                },
                {
                    name: '冥想',
                    imageUrl: 'https://ai-public.mastergo.com/ai/img_res/63cfaa16f9c4b2fa6ed5473df99c5fd7.jpg'
                },
                {
                    name: '雨声',
                    imageUrl: 'https://ai-public.mastergo.com/ai/img_res/b097e66ccc292448260af7441f2240d7.jpg'
                },
                {
                    name: '大自然',
                    imageUrl: 'https://ai-public.mastergo.com/ai/img_res/f5276457beb92f70b205a2fb7f53dcba.jpg'
                },
            ],
            recommendItems: [
                {
                    title: '夏日晚风',
                    duration: '30分钟',
                    imageUrl: 'https://ai-public.mastergo.com/ai/img_res/c3410fac456a0e927df24a8aa516fd72.jpg'
                },
                {
                    title: '温柔雨声',
                    duration: '45分钟',
                    imageUrl: 'https://ai-public.mastergo.com/ai/img_res/3b3d0686c37a16ed190788d441b09fce.jpg'
                },
                {
                    title: '舒缓音乐',
                    duration: '60分钟',
                    imageUrl: 'https://ai-public.mastergo.com/ai/img_res/7435f6d481780a18abf583bf0440e01b.jpg'
                },
                {
                    title: '森林漫步',
                    duration: '40分钟',
                    imageUrl: 'https://ai-public.mastergo.com/ai/img_res/45f7455363a76cca2cc916f728e0e93c.jpg'
                }
            ],
            isPlaying: false,
            currentSound: null,
            progress: 0,
            activeSounds: new Set(),
            audioInstances: {},
            volumes: {},
            visualizer: null,
        }
    },
    methods: {
        // 切换到不同的Tab
        switchTab(index) {
            this.currentTab = index;
        },

        // 初始化音频实例
        initAudio(sound) {
            if (!this.audioInstances[sound.id]) {
                this.audioInstances[sound.id] = new Howl({
                    src: [sound.url],
                    loop: true,
                    volume: 0.5,
                    onplay: () => {
                        this.isPlaying = true;
                        this.currentSound = sound;
                        this.activeSounds.add(sound.id);
                        
                        // 设置初始音量
                        if (!this.volumes[sound.id]) {
                            this.volumes[sound.id] = 50;
                        }
                        
                        // 初始化音频可视化
                        this.initVisualizer(sound.id);
                    },
                    onstop: () => {
                        this.activeSounds.delete(sound.id);
                        if (this.activeSounds.size === 0) {
                            this.isPlaying = false;
                            this.currentSound = null;
                            // 停止可视化
                            if (this.visualizer) {
                                this.visualizer.stop();
                                this.visualizer = null;
                            }
                        }
                    },
                    onloaderror: () => {
                        console.error('Error loading audio:', sound.name);
                        this.tryFallbackAudio(sound);
                    }
                });
            }
            return this.audioInstances[sound.id];
        },

        // 初始化音频可视化
        initVisualizer(soundId) {
            // 如果已有可视化器，先停止
            if (this.visualizer) {
                this.visualizer.stop();
            }
            
            // 创建新的可视化器
            this.visualizer = new AudioVisualizer('audio-visualizer', {
                barCount: 32,
                barWidth: 4,
                barGap: 2,
                barColor: '#4CAF50',
                backgroundColor: 'rgba(0, 0, 0, 0.1)'
            });
            
            // 获取音频元素并初始化可视化器
            const audioElement = this.audioInstances[soundId]._sounds[0]._node;
            this.visualizer.init(audioElement);
        },

        // 尝试使用备用音源
        tryFallbackAudio(sound) {
            console.log('尝试使用备用音源');
            // 模拟音频播放，实际项目中可以有真实的备用音源
            this.isPlaying = true;
            this.currentSound = sound;
            this.activeSounds.add(sound.id);
        },

        // 播放/暂停音频
        togglePlay(sound) {
            console.log('Toggle play:', sound.name);
            if (!this.audioInstances[sound.id]) {
                this.initAudio(sound);
            }
            
            const audio = this.audioInstances[sound.id];
            if (this.activeSounds.has(sound.id)) {
                audio.stop();
            } else {
                audio.play();
            }
        },

        // 停止所有音频
        stopAll() {
            console.log('Stop all');
            for (const id of this.activeSounds) {
                if (this.audioInstances[id]) {
                    this.audioInstances[id].stop();
                }
            }
            this.activeSounds.clear();
            this.isPlaying = false;
            this.currentSound = null;
            
            // 停止可视化
            if (this.visualizer) {
                this.visualizer.stop();
                this.visualizer = null;
            }
        },

        // 根据ID获取声音对象
        getSoundById(id) {
            return soundData.sounds.find(s => s.id === id);
        },

        // 更新音量
        updateVolume(id) {
            if (this.audioInstances[id]) {
                const volume = this.volumes[id] / 100;
                this.audioInstances[id].volume(volume);
            }
        }
    },
    mounted() {
        // 监听Tab切换
        for (let i = 0; i < this.tabs.length; i++) {
            const tab = document.querySelectorAll('.grid-cols-5 > div')[i];
            if (tab) {
                tab.addEventListener('click', () => this.switchTab(i));
            }
        }
    }
});

// 挂载Vue应用
app.mount('#app'); 