// AI 编辑页面脚本
const { createApp } = Vue;

createApp({
    data() {
        return {
            currentTab: 1, // AI编辑是第二个标签页
            tabs: [
                { name: '首页', icon: 'fas fa-home' },
                { name: '声音', icon: 'fas fa-map' },
                { name: 'AI监测', icon: 'fas fa-brain' },
                { name: '搜索', icon: 'fas fa-search' },
                { name: '我的', icon: 'fas fa-user' }
            ],
            audioSettings: {
                mainVolume: 80,
                speed: 1.0,
                tracks: {
                    rain: 65,
                    thunder: 25,
                    wind: 40,
                    nature: 50
                },
                effects: {
                    reverb: true,
                    bassBoost: true,
                    noiseFilter: false
                }
            },
            isPlaying: false,
            description: '',
            selectedScene: null,
            scenes: [
                { id: 1, name: '森林雨声', icon: 'fas fa-tree' },
                { id: 2, name: '海边波浪', icon: 'fas fa-water' },
                { id: 3, name: '篝火噼啪', icon: 'fas fa-fire' },
                { id: 4, name: '城市雨声', icon: 'fas fa-cloud-rain' }
            ],
            elapsedTime: '00:00',
            totalTime: '30:00'
        }
    },
    methods: {
        switchTab(index) {
            this.currentTab = index;
            
            // 实际应用中这里应该路由到不同页面
            const routes = [
                'index.html',
                'sound-map.html',
                'ai-monitor.html',
                'search.html',
                'profile.html'
            ];
            
            if (index !== 1) { // 如果不是当前页
                window.location.href = routes[index];
            }
        },
        
        goBack() {
            window.history.back();
        },
        
        togglePlay() {
            this.isPlaying = !this.isPlaying;
            
            // 这里应该添加实际的音频播放/暂停逻辑
            if (this.isPlaying) {
                console.log('播放音频');
                // 启动计时器更新播放时间
                this.startTimeUpdate();
            } else {
                console.log('暂停音频');
                // 停止计时器
                this.stopTimeUpdate();
            }
        },
        
        startTimeUpdate() {
            // 模拟播放时间更新
            let seconds = 0;
            this.timeInterval = setInterval(() => {
                seconds++;
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = seconds % 60;
                this.elapsedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
            }, 1000);
        },
        
        stopTimeUpdate() {
            clearInterval(this.timeInterval);
        },
        
        updateMainVolume(event) {
            this.audioSettings.mainVolume = event.target.value;
            console.log(`主音量更新为: ${this.audioSettings.mainVolume}%`);
            // 这里应该添加实际的音量调整逻辑
        },
        
        updateSpeed(event) {
            this.audioSettings.speed = event.target.value;
            console.log(`播放速度更新为: ${this.audioSettings.speed}x`);
            // 这里应该添加实际的速度调整逻辑
        },
        
        updateTrackVolume(track, event) {
            this.audioSettings.tracks[track] = event.target.value;
            console.log(`${track}音量更新为: ${this.audioSettings.tracks[track]}%`);
            // 这里应该添加实际的音轨音量调整逻辑
        },
        
        toggleEffect(effect) {
            this.audioSettings.effects[effect] = !this.audioSettings.effects[effect];
            console.log(`${effect}效果: ${this.audioSettings.effects[effect] ? '开启' : '关闭'}`);
            // 这里应该添加实际的音效切换逻辑
        },
        
        selectScene(scene) {
            this.selectedScene = scene;
            // 根据场景预设调整音频参数
            console.log(`选择场景: ${scene.name}`);
        },
        
        generateAISound() {
            console.log('生成AI自定义音效');
            console.log(`描述: ${this.description}`);
            // 这里应该添加实际的AI生成逻辑
            
            // 模拟生成过程
            alert('音效生成中，请稍候...');
            setTimeout(() => {
                alert('音效生成完成！');
                // 更新音频参数
                this.audioSettings.tracks.rain = 70;
                this.audioSettings.tracks.thunder = 15;
                this.audioSettings.tracks.wind = 50;
                this.audioSettings.tracks.nature = 60;
            }, 2000);
        },
        
        savePreset() {
            console.log('保存为预设');
            // 这里应该添加实际的预设保存逻辑
            alert('已保存当前设置为预设！');
        },
        
        applySettings() {
            console.log('应用设置');
            // 这里应该添加实际的设置应用逻辑
            alert('设置已应用！');
        }
    }
}).mount('#app'); 