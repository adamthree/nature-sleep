// 定义路由组件
const HomePage = {
    template: `
        <div class="home-page">
            <div class="header">
                <h1>Nature Sleep</h1>
                <p>智能助眠，自然入眠</p>
            </div>
            <div class="sound-list">
                <div v-for="sound in $root.sounds" :key="sound.id" class="sound-item" @click="$root.playSound(sound)">
                    <img :src="sound.image" :alt="sound.name" class="sound-image">
                    <div class="sound-info">
                        <h3>{{ sound.name }}</h3>
                        <p>{{ sound.category }} · {{ sound.duration }}</p>
                    </div>
                    <button class="play-button">
                        <i :class="$root.currentSound && $root.currentSound.id === sound.id && $root.isPlaying ? 'fas fa-pause' : 'fas fa-play'"></i>
                    </button>
                </div>
            </div>
            <div v-if="$root.currentSound" class="player">
                <div class="player-info">
                    <h3>{{ $root.currentSound.name }}</h3>
                    <p>{{ $root.formatTime($root.remainingTime) }}</p>
                </div>
                <div class="player-controls">
                    <button @click="$root.stopSound">
                        <i class="fas fa-stop"></i>
                    </button>
                    <input type="range" v-model="$root.volume" min="0" max="1" step="0.1" @input="$root.setVolume">
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

const routes = [
    {
        path: '/',
        component: {
            template: `
                <div class="container mx-auto px-4 py-8">
                    <h1 class="text-3xl font-bold text-emerald-800 mb-6">欢迎使用 Nature Sleep</h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="sound in sounds" :key="sound.id" class="bg-white rounded-lg shadow-md overflow-hidden">
                            <img :src="sound.image" :alt="sound.name" class="w-full h-48 object-cover">
                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-emerald-800">{{ sound.name }}</h3>
                                <p class="text-gray-600 mt-2">{{ sound.description }}</p>
                                <button @click="playSound(sound)" class="mt-4 bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
                                    播放
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            data() {
                return {
                    sounds: [
                        {
                            id: 1,
                            name: '雨声',
                            description: '轻柔的雨声，帮助您放松身心',
                            image: 'assets/images/rain.jpg'
                        },
                        {
                            id: 2,
                            name: '海浪',
                            description: '舒缓的海浪声，让您仿佛置身海边',
                            image: 'assets/images/waves.jpg'
                        },
                        {
                            id: 3,
                            name: '森林',
                            description: '宁静的森林声音，带您走进大自然',
                            image: 'assets/images/forest.jpg'
                        }
                    ]
                }
            },
            methods: {
                playSound(sound) {
                    // 实现播放功能
                    console.log('播放声音:', sound.name);
                }
            }
        }
    },
    {
        path: '/map',
        component: {
            template: '<div>声音地图页面</div>'
        }
    },
    {
        path: '/ai',
        component: {
            template: '<div>AI编辑页面</div>'
        }
    },
    {
        path: '/search',
        component: {
            template: '<div>搜索页面</div>'
        }
    },
    {
        path: '/profile',
        component: {
            template: '<div>个人中心页面</div>'
        }
    }
];

// 创建路由实例
const router = new VueRouter({
    routes
}); 