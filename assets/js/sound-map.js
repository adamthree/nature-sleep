// 声音地图页面的脚本
const app = Vue.createApp({
    data() {
        return {
            currentTab: 1, // 当前选中的是声音地图标签
            zoom: 1,
            showSleepAnimation: false,
            isPlaying: false,
            currentSound: null,
            playTime: 0,
            playTimeInterval: null,
            markers: [
                {
                    id: 1,
                    name: '亚马逊雨林',
                    visits: 15,
                    x: 30,
                    y: 45,
                    sound: {
                        id: 'amazon',
                        name: '亚马逊雨林',
                        description: '亚马逊雨林的自然声音，包含雨滴、鸟鸣和昆虫声',
                        image: 'https://ai-public.mastergo.com/ai/img_res/095f66d6004815f1f545f29518ba48c7.jpg',
                        url: 'assets/sounds/amazon.mp3'
                    }
                },
                {
                    id: 2,
                    name: '冰岛极光',
                    visits: 8,
                    x: 45,
                    y: 20,
                    sound: {
                        id: 'iceland',
                        name: '冰岛极光自然声',
                        description: '冰岛极光下的自然环境声，包含风声和远处的冰川裂缝声',
                        image: 'https://ai-public.mastergo.com/ai/img_res/a9f05c441634e46d5913377577440494.jpg',
                        url: 'assets/sounds/iceland.mp3'
                    }
                },
                {
                    id: 3,
                    name: '撒哈拉沙漠',
                    visits: 12,
                    x: 48,
                    y: 38,
                    sound: {
                        id: 'sahara',
                        name: '撒哈拉沙漠',
                        description: '沙漠风暴声和沙丘移动的细微声音',
                        image: 'https://ai-public.mastergo.com/ai/img_res/3b3d0686c37a16ed190788d441b09fce.jpg',
                        url: 'assets/sounds/sahara.mp3'
                    }
                },
                {
                    id: 4,
                    name: '夏威夷海滩',
                    visits: 20,
                    x: 15,
                    y: 40,
                    sound: {
                        id: 'hawaii',
                        name: '夏威夷海滩',
                        description: '海浪声和热带鸟类的鸣叫',
                        image: 'https://ai-public.mastergo.com/ai/img_res/c3410fac456a0e927df24a8aa516fd72.jpg',
                        url: 'assets/sounds/hawaii.mp3'
                    }
                },
                {
                    id: 5,
                    name: '阿尔卑斯山',
                    visits: 18,
                    x: 52,
                    y: 28,
                    sound: {
                        id: 'alps',
                        name: '阿尔卑斯山',
                        description: '山风声和远处的风铃声',
                        image: 'https://ai-public.mastergo.com/ai/img_res/10ac2149cbbbf4b00c4e077f67c6b556.jpg',
                        url: 'assets/sounds/alps.mp3'
                    }
                },
                {
                    id: 6,
                    name: '悉尼海港',
                    visits: 25,
                    x: 85,
                    y: 65,
                    sound: {
                        id: 'sydney',
                        name: '悉尼海港',
                        description: '海港轻柔的波浪声和远处的船只声',
                        image: 'https://ai-public.mastergo.com/ai/img_res/beecdbcc1b5ca7851e8119bafd8337d1.jpg',
                        url: 'assets/sounds/sydney.mp3'
                    }
                },
                {
                    id: 7,
                    name: '加拿大落基山',
                    visits: 16,
                    x: 18,
                    y: 28,
                    sound: {
                        id: 'rockies',
                        name: '加拿大落基山',
                        description: '森林环境声和山间溪流声',
                        image: 'https://ai-public.mastergo.com/ai/img_res/2f7ca497e8b5263fc42ec85a723938b3.jpg',
                        url: 'assets/sounds/rockies.mp3'
                    }
                },
                {
                    id: 8,
                    name: '尼泊尔喜马拉雅',
                    visits: 10,
                    x: 70,
                    y: 35,
                    sound: {
                        id: 'himalayas',
                        name: '尼泊尔喜马拉雅',
                        description: '高山风声和远处的钟声',
                        image: 'https://ai-public.mastergo.com/ai/img_res/25965d5223b0f7f510d8fde3fdbebb2c.jpg',
                        url: 'assets/sounds/himalayas.mp3'
                    }
                },
                {
                    id: 9,
                    name: '非洲大草原',
                    visits: 14,
                    x: 55,
                    y: 48,
                    sound: {
                        id: 'savanna',
                        name: '非洲大草原',
                        description: '草原风声和远处的野生动物声音',
                        image: 'https://ai-public.mastergo.com/ai/img_res/1f69c54ca79188fdfe92cf4177d39a49.jpg',
                        url: 'assets/sounds/savanna.mp3'
                    }
                },
                {
                    id: 10,
                    name: '日本富士山',
                    visits: 22,
                    x: 82,
                    y: 33,
                    sound: {
                        id: 'fuji',
                        name: '日本富士山',
                        description: '日本传统环境声和远处的风铃声',
                        image: 'https://ai-public.mastergo.com/ai/img_res/d6b49038e528db0f7b59f5d2792907ce.jpg',
                        url: 'assets/sounds/fuji.mp3'
                    }
                }
            ],
            tabs: [
                { name: '首页', icon: 'fas fa-home' },
                { name: '声音地图', icon: 'fas fa-map' },
                { name: 'AI', icon: 'fas fa-robot' },
                { name: '搜索', icon: 'fas fa-search' },
                { name: '我的', icon: 'fas fa-user' }
            ],
            audioInstance: null
        }
    },
    methods: {
        // 缩放地图
        zoomIn() {
            if (this.zoom < 1.5) {
                this.zoom += 0.1;
            }
        },
        zoomOut() {
            if (this.zoom > 0.7) {
                this.zoom -= 0.1;
            }
        },
        
        // 选择标记点
        selectMarker(marker) {
            console.log('Selected marker:', marker.name);
            // 播放相关声音
            this.playSound(marker.sound);
        },
        
        // 播放声音
        playSound(sound) {
            // 停止当前声音
            if (this.audioInstance) {
                this.audioInstance.stop();
            }
            
            // 创建新的Howl实例
            this.audioInstance = new Howl({
                src: [sound.url],
                html5: true,
                loop: true,
                volume: 0.7
            });
            
            // 播放声音
            this.audioInstance.play();
            
            // 更新状态
            this.currentSound = sound;
            this.isPlaying = true;
            this.playTime = 0;
            
            // 设置计时器
            if (this.playTimeInterval) {
                clearInterval(this.playTimeInterval);
            }
            
            this.playTimeInterval = setInterval(() => {
                this.playTime++;
                
                // 模拟打卡：播放5分钟后显示打卡动画
                if (this.playTime === 5) {
                    this.showSleepAnimation = true;
                    setTimeout(() => {
                        this.showSleepAnimation = false;
                    }, 5000);
                }
            }, 60000); // 每分钟更新一次
        },
        
        // 切换播放/暂停
        togglePlayPause() {
            if (!this.audioInstance) return;
            
            if (this.isPlaying) {
                this.audioInstance.pause();
                this.isPlaying = false;
                clearInterval(this.playTimeInterval);
            } else {
                this.audioInstance.play();
                this.isPlaying = true;
                
                // 重新启动计时器
                this.playTimeInterval = setInterval(() => {
                    this.playTime++;
                }, 60000);
            }
        },
        
        // 切换Tab
        switchTab(index) {
            if (index === this.currentTab) return;
            
            this.currentTab = index;
            
            // 根据tab执行不同操作
            switch(index) {
                case 0: // 首页
                    window.location.href = 'index.html';
                    break;
                case 1: // 声音地图 - 当前页面
                    break;
                case 2: // AI
                    window.location.href = 'ai-edit.html';
                    break;
                case 3: // 搜索
                    window.location.href = 'search.html';
                    break;
                case 4: // 我的
                    window.location.href = 'profile.html';
                    break;
            }
        }
    },
    created() {
        // 只是为了演示，模拟5秒后显示睡眠打卡动画
        setTimeout(() => {
            this.showSleepAnimation = true;
            
            // 5秒后关闭动画
            setTimeout(() => {
                this.showSleepAnimation = false;
            }, 5000);
        }, 5000);
    },
    beforeUnmount() {
        // 清理资源
        if (this.audioInstance) {
            this.audioInstance.stop();
        }
        
        if (this.playTimeInterval) {
            clearInterval(this.playTimeInterval);
        }
    }
});

// 挂载应用
app.mount('#app'); 