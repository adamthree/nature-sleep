// 定义路由组件
const HomePage = {
    template: `
        <div class="home-page">
            <div class="header">
                <h1>Nature Sleep</h1>
                <p>智能助眠，自然入眠</p>
            </div>
            <div class="sound-list">
                <div v-for="sound in sounds" :key="sound.id" class="sound-item" @click="playSound(sound)">
                    <img :src="sound.image" :alt="sound.name" class="sound-image">
                    <div class="sound-info">
                        <h3>{{ sound.name }}</h3>
                        <p>{{ sound.category }} · {{ sound.duration }}</p>
                    </div>
                    <button class="play-button">
                        <i :class="currentSound && currentSound.id === sound.id && isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
                    </button>
                </div>
            </div>
            <div v-if="currentSound" class="player">
                <div class="player-info">
                    <h3>{{ currentSound.name }}</h3>
                    <p>{{ formatTime(remainingTime) }}</p>
                </div>
                <div class="player-controls">
                    <button @click="stopSound">
                        <i class="fas fa-stop"></i>
                    </button>
                    <input type="range" v-model="volume" min="0" max="1" step="0.1" @input="setVolume">
                </div>
            </div>
        </div>
    `
};

const SoundMapPage = {
    template: `
        <div class="sound-map-page">
            <h2>声音地图</h2>
            <div class="map-container">
                <!-- 地图内容 -->
            </div>
        </div>
    `
};

const AIEditPage = {
    template: `
        <div class="ai-edit-page">
            <h2>AI编辑</h2>
            <div class="ai-controls">
                <!-- AI编辑控件 -->
            </div>
        </div>
    `
};

const SearchPage = {
    template: `
        <div class="search-page">
            <h2>搜索</h2>
            <div class="search-container">
                <!-- 搜索内容 -->
            </div>
        </div>
    `
};

const ProfilePage = {
    template: `
        <div class="profile-page">
            <h2>个人中心</h2>
            <div class="profile-container">
                <!-- 个人中心内容 -->
            </div>
        </div>
    `
};

// 创建路由实例
const router = new VueRouter({
    routes: [
        { path: '/', component: HomePage },
        { path: '/map', component: SoundMapPage },
        { path: '/ai', component: AIEditPage },
        { path: '/search', component: SearchPage },
        { path: '/profile', component: ProfilePage }
    ]
});

// 导出路由实例
export default router 