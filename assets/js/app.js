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

// 创建Vue实例
new Vue({
    el: '#app',
    data: {
        sounds: soundData.sounds,
        currentSound: null,
        isPlaying: false,
        progress: 0,
        audioInstances: {},
        activeSounds: new Set(),
        // 语音助手相关
        showVoiceAssistant: false,
        messages: [],
        userInput: '',
        isListening: false,
        recognition: null,
        // 混音器相关
        showMixer: false,
        volumes: {}
    },
    methods: {
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
                    },
                    onstop: () => {
                        this.activeSounds.delete(sound.id);
                        if (this.activeSounds.size === 0) {
                            this.isPlaying = false;
                            this.currentSound = null;
                        }
                    },
                    onloaderror: () => {
                        console.error('Error loading audio:', sound.name);
                        // 尝试使用备用音源
                        this.tryFallbackAudio(sound);
                    }
                });
            }
            return this.audioInstances[sound.id];
        },

        // 尝试使用备用音源
        tryFallbackAudio(sound) {
            console.log('Trying fallback audio for:', sound.name);
            // 备用音源列表
            const fallbackSources = {
                '雨声': 'https://freesound.org/data/previews/169/169235_2975501-lq.mp3',
                '海浪': 'https://freesound.org/data/previews/468/468407_9552797-lq.mp3',
                '森林': 'https://freesound.org/data/previews/573/573578_8449715-lq.mp3',
                '白噪音': 'https://freesound.org/data/previews/194/194837_3033919-lq.mp3',
                '鸟鸣': 'https://freesound.org/data/previews/619/619245_935719-lq.mp3',
                '薰衣草': 'https://freesound.org/data/previews/362/362192_6629860-lq.mp3',
                '篝火': 'https://freesound.org/data/previews/346/346143_5883438-lq.mp3',
                '风声': 'https://freesound.org/data/previews/346/346170_6293350-lq.mp3'
            };
            
            if (fallbackSources[sound.name]) {
                // 重新创建音频实例
                this.audioInstances[sound.id] = new Howl({
                    src: [fallbackSources[sound.name]],
                    loop: true,
                    volume: 0.5,
                    onplay: () => {
                        this.isPlaying = true;
                        this.currentSound = sound;
                        this.activeSounds.add(sound.id);
                        if (!this.volumes[sound.id]) {
                            this.volumes[sound.id] = 50;
                        }
                    },
                    onstop: () => {
                        this.activeSounds.delete(sound.id);
                        if (this.activeSounds.size === 0) {
                            this.isPlaying = false;
                            this.currentSound = null;
                        }
                    }
                });
            }
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
                // 如果显示混音器，则更新音量滑块
                if (this.showMixer) {
                    this.$nextTick(() => {
                        this.updateVolume(sound.id);
                    });
                }
            }
        },

        // 通过ID获取声音对象
        getSoundById(id) {
            return this.sounds.find(sound => sound.id === id);
        },

        // 更新单个声音的音量
        updateVolume(id) {
            if (this.audioInstances[id]) {
                const volume = this.volumes[id] / 100;
                this.audioInstances[id].volume(volume);
            }
        },

        // 停止特定声音
        stopSound(id) {
            if (this.audioInstances[id]) {
                this.audioInstances[id].stop();
            }
        },

        // 更新进度条
        updateProgress() {
            if (this.currentSound && this.audioInstances[this.currentSound.id]) {
                const audio = this.audioInstances[this.currentSound.id];
                const seek = audio.seek() || 0;
                const duration = audio.duration() || 1;
                this.progress = (seek / duration) * 100;
            }
        },

        // 停止所有音频
        stopAll() {
            Object.values(this.audioInstances).forEach(audio => {
                audio.stop();
            });
            this.activeSounds.clear();
            this.isPlaying = false;
            this.currentSound = null;
        },

        // 切换语音助手显示
        toggleVoiceAssistant() {
            this.showVoiceAssistant = !this.showVoiceAssistant;
            if (this.showVoiceAssistant) {
                this.showMixer = false;
            }
        },

        // 切换混音器显示
        toggleMixer() {
            this.showMixer = !this.showMixer;
            if (this.showMixer) {
                this.showVoiceAssistant = false;
            }
        },

        // 发送消息到语音助手
        sendMessage() {
            if (!this.userInput.trim()) return;
            
            // 添加用户消息
            this.messages.push({
                type: 'user',
                text: this.userInput
            });
            
            // 处理用户输入
            this.processUserInput(this.userInput);
            this.userInput = '';
            
            // 滚动到底部
            this.$nextTick(() => {
                const messagesContainer = document.querySelector('.assistant-messages');
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            });
        },

        // 处理用户输入
        processUserInput(input) {
            // 简单的文本处理，检测命令模式
            const text = input.toLowerCase();
            
            // 播放特定声音
            if (text.includes('播放') || text.includes('听')) {
                let soundToPlay = null;
                
                // 检查匹配的声音
                for (const sound of this.sounds) {
                    if (text.includes(sound.name.toLowerCase())) {
                        soundToPlay = sound;
                        break;
                    }
                }
                
                if (soundToPlay) {
                    // 添加助手回复
                    this.messages.push({
                        type: 'assistant',
                        text: `好的，正在播放${soundToPlay.name}。`
                    });
                    
                    // 播放声音
                    setTimeout(() => {
                        this.togglePlay(soundToPlay);
                    }, 500);
                } else {
                    // 没有匹配到具体声音
                    this.messages.push({
                        type: 'assistant',
                        text: `抱歉，我没有找到您想听的声音。您可以尝试雨声、海浪、森林等自然声音。`
                    });
                }
            } 
            // 停止所有声音
            else if (text.includes('停止') || text.includes('关闭') || text.includes('暂停')) {
                this.messages.push({
                    type: 'assistant',
                    text: `已停止所有声音。`
                });
                this.stopAll();
            } 
            // 混音请求
            else if (text.includes('混音') || text.includes('混合')) {
                this.messages.push({
                    type: 'assistant',
                    text: `已打开混音器，您可以调整各个声音的音量。`
                });
                this.toggleMixer();
            } 
            // 助眠建议
            else if (text.includes('失眠') || text.includes('睡不着') || text.includes('助眠')) {
                this.messages.push({
                    type: 'assistant',
                    text: `建议您尝试以下助眠声音组合：
                    1. 雨声+白噪音：稳定的背景音有助于屏蔽干扰
                    2. 海浪+轻微的风声：模拟海边环境的舒缓效果
                    3. 森林声+鸟鸣：大自然的环境声有助于放松心情

                    另外，保持规律的作息时间、睡前避免使用电子设备、保持卧室凉爽黑暗也很重要。要我为您播放某个声音组合吗？`
                });
            } 
            // 默认回复
            else {
                this.messages.push({
                    type: 'assistant',
                    text: `您可以告诉我您想听的声音，例如"播放雨声"、"我想听海浪"。也可以向我咨询助眠相关问题。`
                });
            }
        },

        // 启动语音识别
        startVoiceRecognition() {
            // 检查浏览器支持
            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                this.messages.push({
                    type: 'assistant',
                    text: `抱歉，您的浏览器不支持语音识别功能。`
                });
                return;
            }
            
            // 创建语音识别实例
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.lang = 'zh-CN';
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            
            // 开始监听
            this.isListening = true;
            this.recognition.start();
            
            // 结果处理
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.userInput = transcript;
                this.sendMessage();
            };
            
            // 结束监听
            this.recognition.onend = () => {
                this.isListening = false;
            };
            
            // 错误处理
            this.recognition.onerror = (event) => {
                console.error('Speech recognition error', event.error);
                this.isListening = false;
                this.messages.push({
                    type: 'assistant',
                    text: `语音识别出现错误，请再试一次或使用文字输入。`
                });
            };
        }
    },
    mounted() {
        // 初始化所有音频实例
        this.sounds.forEach(sound => {
            this.initAudio(sound);
        });

        // 定期更新进度条
        setInterval(this.updateProgress, 1000);
        
        // 在控制台显示调试信息
        console.log('Nature Sleep 应用已加载');
        console.log('可用声音:', this.sounds.map(s => s.name));
    },
    beforeDestroy() {
        // 清理音频实例
        this.stopAll();
        Object.values(this.audioInstances).forEach(audio => {
            audio.unload();
        });
        
        // 清理语音识别
        if (this.recognition) {
            this.recognition.abort();
        }
    }
}); 