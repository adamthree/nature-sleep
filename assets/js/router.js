// 路由配置
const routes = [
    {
        path: '/',
        component: {
            template: `
                <div class="app-container bg-gray-50 min-h-screen pb-16">
                    <!-- 顶部导航栏 -->
                    <nav class="fixed top-0 w-full bg-emerald-800 text-white py-4 px-4 z-50">
                        <div class="flex items-center justify-between">
                            <h1 class="text-lg font-medium">轻松助眠</h1>
                            <i class="fas fa-bell text-lg"></i>
                        </div>
                    </nav>
                    
                    <!-- 主要内容区 -->
                    <div class="content-wrapper pt-16">
                        <!-- 主要功能卡片 -->
                        <div class="feature-cards px-4 py-6">
                            <div class="grid grid-cols-3 gap-3">
                                <div class="bg-emerald-800 rounded-lg p-4 text-white cursor-pointer" @click="$router.push('/sound-map')">
                                    <i class="fas fa-leaf text-2xl mb-2"></i>
                                    <h3 class="text-sm font-medium mb-1">自然声音</h3>
                                    <p class="text-xs opacity-80">聆听大自然的声音</p>
                                </div>
                                <div class="bg-emerald-800 rounded-lg p-4 text-white cursor-pointer" @click="$router.push('/sound-map')">
                                    <i class="fas fa-map text-2xl mb-2"></i>
                                    <h3 class="text-sm font-medium mb-1">声音地图</h3>
                                    <p class="text-xs opacity-80">探索世界各地声音</p>
                                </div>
                                <div class="bg-emerald-800 rounded-lg p-4 text-white cursor-pointer" @click="showVipInfo">
                                    <i class="fas fa-crown text-2xl mb-2"></i>
                                    <h3 class="text-sm font-medium mb-1">会员专享</h3>
                                    <p class="text-xs opacity-80">解锁更多优质内容</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 功能区 -->
                        <div class="function-section px-4 mb-6">
                            <h2 class="text-lg font-medium mb-4">助眠场景</h2>
                            <div class="grid grid-cols-4 gap-4">
                                <div v-for="(item, index) in functionItems" :key="index" 
                                     class="text-center cursor-pointer"
                                     @click="playScene(item)">
                                    <div class="w-16 h-16 mx-auto rounded-full overflow-hidden mb-2">
                                        <img :src="item.imageUrl" class="w-full h-full object-cover" :alt="item.name">
                                    </div>
                                    <p class="text-xs text-gray-600">{{ item.name }}</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 推荐内容 -->
                        <div class="recommend-section px-4">
                            <div class="flex items-center justify-between mb-4">
                                <h2 class="text-lg font-medium">为你推荐</h2>
                                <span class="text-sm text-emerald-600 cursor-pointer" @click="viewAllRecommendations">查看全部</span>
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div v-for="(item, index) in recommendItems" :key="index" 
                                     class="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer"
                                     @click="playRecommendation(item)">
                                    <div class="relative pb-[56.25%]">
                                        <img :src="item.imageUrl" class="absolute top-0 left-0 w-full h-full object-cover" :alt="item.title">
                                    </div>
                                    <div class="p-3">
                                        <h3 class="text-sm font-medium mb-1">{{ item.title }}</h3>
                                        <p class="text-xs text-gray-500">{{ item.duration }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            data() {
                return {
                    functionItems: [
                        { name: '冥想', imageUrl: 'assets/images/meditation.jpg' },
                        { name: '心跳声', imageUrl: 'assets/images/heartbeat.jpg' },
                        { name: '海浪声', imageUrl: 'assets/images/waves.jpg' },
                        { name: '雨声', imageUrl: 'assets/images/rain.jpg' },
                        { name: '风声', imageUrl: 'assets/images/wind.jpg' },
                        { name: '篝火', imageUrl: 'assets/images/fire.jpg' },
                        { name: '鸟鸣', imageUrl: 'assets/images/birds.jpg' },
                        { name: '溪流', imageUrl: 'assets/images/stream.jpg' }
                    ],
                    recommendItems: [
                        { 
                            title: '热带雨林', 
                            imageUrl: 'assets/images/rainforest.jpg',
                            duration: '45分钟'
                        },
                        { 
                            title: '海浪声', 
                            imageUrl: 'assets/images/ocean.jpg',
                            duration: '30分钟'
                        }
                    ]
                }
            },
            methods: {
                playScene(item) {
                    console.log('播放场景:', item.name)
                },
                playRecommendation(item) {
                    console.log('播放推荐:', item.title)
                },
                viewAllRecommendations() {
                    console.log('查看全部推荐')
                },
                showVipInfo() {
                    console.log('显示会员信息')
                }
            }
        }
    },
    {
        path: '/sound-map',
        component: {
            template: `
                <div class="app-container bg-white min-h-screen pb-16">
                    <!-- 播放控制栏 -->
                    <div class="fixed bottom-16 left-0 w-full bg-white border-t border-gray-100 px-4 py-3 z-40">
                        <div class="flex items-center justify-between max-w-375 mx-auto">
                            <div class="flex items-center flex-1">
                                <div class="w-12 h-12 rounded-lg overflow-hidden mr-3">
                                    <img src="assets/images/iceland.jpg" class="w-full h-full object-cover" alt="当前播放">
                                </div>
                                <div class="flex-1 min-w-0">
                                    <h4 class="text-sm font-medium text-gray-900 truncate">冰岛极光自然声</h4>
                                    <p class="text-xs text-gray-500 mt-0.5">正在播放 · 已完成 5 分钟</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4">
                                <button class="text-emerald-600">
                                    <i class="fas fa-step-backward text-lg"></i>
                                </button>
                                <button class="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                                    <i class="fas fa-pause text-lg"></i>
                                </button>
                                <button class="text-emerald-600">
                                    <i class="fas fa-step-forward text-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 顶部导航栏 -->
                    <nav class="fixed top-0 w-full bg-emerald-800 text-white py-4 px-4 z-50">
                        <div class="flex items-center justify-between">
                            <h1 class="text-lg font-medium">声音地图</h1>
                            <div class="flex items-center">
                                <div class="mr-4 flex items-center">
                                    <i class="fas fa-calendar-check text-lg mr-1"></i>
                                    <span class="text-sm">已打卡 3 天</span>
                                </div>
                                <i class="fas fa-bell text-lg"></i>
                            </div>
                        </div>
                    </nav>
                    
                    <!-- 主要内容区 -->
                    <div class="content-wrapper pt-16">
                        <!-- 签到卡片 -->
                        <div class="check-in-card mx-4 mt-4 bg-emerald-700 rounded-xl p-4 text-white">
                            <div class="flex justify-between items-center mb-3">
                                <h3 class="text-lg font-medium">每日签到</h3>
                                <button class="bg-emerald-600 px-4 py-1 rounded-full text-sm">立即签到</button>
                            </div>
                            <div class="grid grid-cols-7 gap-2">
                                <div v-for="day in 7" :key="day" class="text-center">
                                    <div class="w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center" 
                                         :class="day <= 3 ? 'bg-emerald-500' : 'bg-emerald-600/50'">
                                        <i class="fas fa-check text-xs" v-if="day <= 3"></i>
                                    </div>
                                    <span class="text-xs">{{ '周' + day }}</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- 世界地图展示区 -->
                        <div class="map-section mx-4 mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
                            <div class="relative h-[calc(100vh-180px)]">
                                <img src="assets/images/world-map.jpg"
                                     :style="{ transform: 'scale(' + zoom + ')', transition: 'transform 0.3s ease' }"
                                     class="w-full h-full object-cover" alt="World Map">
                                <div class="absolute top-4 right-4 flex flex-col gap-2">
                                    <button class="bg-white/90 p-2 rounded-full shadow-sm" @click="zoomIn">
                                        <i class="fas fa-plus text-emerald-700"></i>
                                    </button>
                                    <button class="bg-white/90 p-2 rounded-full shadow-sm" @click="zoomOut">
                                        <i class="fas fa-minus text-emerald-700"></i>
                                    </button>
                                </div>
                                <!-- 标记点列表 -->
                                <div class="absolute inset-0">
                                    <div v-for="marker in markers" :key="marker.id"
                                         :style="{ left: marker.x + '%', top: marker.y + '%' }"
                                         class="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                        <div class="relative group">
                                            <div class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                                                {{ marker.id }}
                                            </div>
                                            <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg shadow-lg p-2 w-32 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                <p class="text-xs font-medium text-center">{{ marker.name }}</p>
                                                <p class="text-xs text-gray-500 text-center">已打卡 {{ marker.visits }} 次</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            data() {
                return {
                    zoom: 1,
                    markers: [
                        { id: 1, name: '冰岛', x: 20, y: 30, visits: 3 },
                        { id: 2, name: '亚马逊雨林', x: 30, y: 60, visits: 1 },
                        { id: 3, name: '马尔代夫', x: 70, y: 50, visits: 2 }
                    ]
                }
            },
            methods: {
                zoomIn() {
                    this.zoom = Math.min(this.zoom + 0.1, 2)
                },
                zoomOut() {
                    this.zoom = Math.max(this.zoom - 0.1, 0.5)
                }
            }
        }
    },
    {
        path: '/ai',
        component: {
            template: `
                <div class="app-container bg-white min-h-screen pb-16">
                    <div class="pt-16 bg-gray-50"></div>
                    <!-- 顶部导航栏 -->
                    <nav class="fixed top-0 w-full bg-emerald-600 text-white py-4 px-4 z-50">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="flex flex-wrap w-8 h-8 mr-2">
                                    <i class="fas fa-cloud-rain text-sm"></i>
                                    <i class="fas fa-fire text-sm"></i>
                                    <i class="fas fa-wind text-sm"></i>
                                    <i class="fas fa-water text-sm"></i>
                                </div>
                                <h1 class="text-lg font-medium">AI 声音编辑</h1>
                            </div>
                            <div class="flex items-center space-x-4">
                                <button>
                                    <i class="fas fa-sliders-h text-lg"></i>
                                </button>
                                <button>
                                    <i class="fas fa-bell text-lg"></i>
                                </button>
                            </div>
                        </div>
                    </nav>
                    <!-- Tab切换 -->
                    <div class="px-4 pt-4">
                        <div class="flex items-center space-x-2 mb-6">
                            <button class="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm">AI编辑</button>
                            <button @click="$router.push('/ai-monitor')" class="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm">AI监测</button>
                        </div>
                    </div>
                </div>
            `
        }
    },
    {
        path: '/ai-monitor',
        component: {
            template: `
                <div class="app-container bg-white min-h-screen pb-16">
                    <div class="relative h-48 overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-500">
                        <div class="absolute inset-0 flex flex-col justify-center px-4">
                            <h2 class="text-2xl font-medium text-white mb-2">智能睡眠监测</h2>
                            <p class="text-sm text-white/80">专业睡眠质量分析</p>
                            <div class="mt-4 flex space-x-3">
                                <div class="px-3 py-1.5 bg-white/20 backdrop-blur rounded-full">
                                    <span class="text-white text-sm">深度睡眠 2.5h</span>
                                </div>
                                <div class="px-3 py-1.5 bg-white/20 backdrop-blur rounded-full">
                                    <span class="text-white text-sm">睡眠分数 85</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 顶部导航栏 -->
                    <nav class="fixed top-0 w-full bg-emerald-600 text-white py-4 px-4 z-50">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 mr-2">
                                    <i class="fas fa-brain text-lg"></i>
                                </div>
                                <h1 class="text-lg font-medium">AI 睡眠监测</h1>
                            </div>
                            <div class="flex items-center space-x-4">
                                <button>
                                    <i class="fas fa-chart-line text-lg"></i>
                                </button>
                                <button>
                                    <i class="fas fa-bell text-lg"></i>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            `
        }
    },
    {
        path: '/search',
        component: {
            template: `
                <div class="page-container bg-emerald-50/30 min-h-screen pb-16">
                    <!-- 顶部导航栏 -->
                    <div class="nav-bar fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-emerald-100">
                        <div class="flex items-center px-4 h-12">
                            <div class="search-box flex-1 flex items-center bg-emerald-50/70 rounded-full h-8 px-3">
                                <i class="fas fa-search text-gray-400 text-sm"></i>
                                <input type="text" placeholder="搜索自然声音、场景音乐..." class="flex-1 bg-transparent ml-2 text-sm border-none focus:outline-none">
                                <i class="fas fa-microphone text-gray-400 text-sm"></i>
                            </div>
                        </div>
                    </div>
                    <!-- 主体内容区域 -->
                    <div class="content-area mt-14 px-4">
                        <!-- 热门标签 -->
                        <div class="hot-tags mt-6">
                            <div class="flex justify-between items-center mb-3">
                                <h3 class="text-base font-medium">热门标签</h3>
                            </div>
                            <div class="flex flex-wrap gap-2">
                                <button class="px-4 py-1.5 bg-emerald-50 text-emerald-600 text-sm">自然声音</button>
                                <button class="px-4 py-1.5 bg-emerald-50 text-emerald-600 text-sm">雨声</button>
                                <button class="px-4 py-1.5 bg-emerald-50 text-emerald-600 text-sm">白噪音</button>
                                <button class="px-4 py-1.5 bg-emerald-50 text-emerald-600 text-sm">助眠音乐</button>
                                <button class="px-4 py-1.5 bg-emerald-50 text-emerald-600 text-sm">森林</button>
                                <button class="px-4 py-1.5 bg-emerald-50 text-emerald-600 text-sm">冥想</button>
                            </div>
                        </div>
                        <!-- 搜索历史 -->
                        <div class="search-history mt-8">
                            <div class="flex justify-between items-center mb-3">
                                <h3 class="text-base font-medium">搜索历史</h3>
                                <button class="text-sm text-gray-400">清空</button>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div v-for="(item, index) in searchHistory" :key="index" class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <i class="fas fa-history text-gray-400 mr-3"></i>
                                        <span class="text-sm">{{ item }}</span>
                                    </div>
                                    <i class="fas fa-times text-gray-400"></i>
                                </div>
                            </div>
                        </div>
                        <!-- 推荐搜索 -->
                        <div class="recommend-search mt-8">
                            <div class="flex justify-between items-center mb-3">
                                <h3 class="text-base font-medium">大家都在搜</h3>
                            </div>
                            <div class="grid grid-cols-2 gap-3">
                                <div v-for="(item, index) in recommendItems" :key="index"
                                    class="relative rounded-lg overflow-hidden aspect-[3/2]">
                                    <img :src="item.image" class="w-full h-full object-cover" :alt="item.title">
                                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                                        <p class="text-white text-sm">{{ item.title }}</p>
                                        <span class="text-white/80 text-xs">{{ item.duration }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            data() {
                return {
                    searchHistory: ['雨声', '海浪声', '森林'],
                    recommendItems: [
                        { 
                            title: '热带雨林', 
                            image: 'assets/images/rainforest.jpg',
                            duration: '45分钟'
                        },
                        { 
                            title: '海浪声', 
                            image: 'assets/images/ocean.jpg',
                            duration: '30分钟'
                        }
                    ]
                }
            }
        }
    },
    {
        path: '/profile',
        component: {
            template: `
                <div class="page-container bg-emerald-50/30 min-h-screen pb-16">
                    <!-- 顶部导航栏 -->
                    <div class="nav-bar fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-emerald-100">
                        <div class="flex items-center justify-between px-4 h-12">
                            <h1 class="text-lg font-medium">我的</h1>
                            <div class="flex items-center space-x-4">
                                <i class="fas fa-cog text-gray-600"></i>
                            </div>
                        </div>
                    </div>
                    <!-- 主体内容区域 -->
                    <div class="content-area mt-14 px-4">
                        <!-- 用户信息 -->
                        <div class="user-info flex items-center mt-4">
                            <div class="relative">
                                <img :src="userInfo.avatar" class="w-16 h-16 rounded-full object-cover" alt="avatar">
                                <div class="absolute -bottom-1 -right-1 bg-emerald-500 rounded-full p-1">
                                    <i class="fas fa-pencil-alt text-white text-xs"></i>
                                </div>
                            </div>
                            <div class="ml-4 flex-1">
                                <div class="flex items-center">
                                    <h2 class="text-lg font-medium">{{ userInfo.name }}</h2>
                                    <span class="ml-2 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 text-xs">Pro</span>
                                </div>
                                <p class="text-sm text-gray-500 mt-1">{{ userInfo.bio }}</p>
                            </div>
                        </div>
                        <!-- 数据统计 -->
                        <div class="stats grid grid-cols-5 gap-4 mt-8">
                            <div v-for="(stat, index) in stats" :key="index" class="text-center">
                                <div class="text-lg font-medium">{{ stat.value }}</div>
                                <div class="text-xs text-gray-500 mt-1">{{ stat.label }}</div>
                            </div>
                        </div>
                        <!-- 我的AI创作 -->
                        <div class="ai-creation mt-8">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-base font-medium">我的AI创作</h3>
                                <button class="text-sm text-gray-400">更多</button>
                            </div>
                            <div class="grid grid-cols-3 gap-3">
                                <div v-for="(creation, index) in aiCreations" :key="index"
                                    class="bg-white rounded-lg p-3 shadow-sm">
                                    <div class="h-24 bg-emerald-50 rounded-lg mb-2 flex items-center justify-center">
                                        <i class="fas fa-waveform text-3xl text-emerald-400"></i>
                                    </div>
                                    <div class="text-sm font-medium truncate">{{ creation.title }}</div>
                                    <div class="flex items-center justify-between mt-1">
                                        <span class="text-xs text-gray-400">{{ creation.duration }}</span>
                                        <i class="fas fa-play-circle text-emerald-500"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 功能区域 -->
                        <div class="feature-section mt-8">
                            <div class="grid grid-cols-4 gap-4">
                                <div v-for="(feature, index) in features" :key="index"
                                    class="feature-item flex flex-col items-center">
                                    <div class="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-2">
                                        <img :src="feature.icon" class="w-8 h-8 object-cover" :alt="feature.name">
                                    </div>
                                    <span class="text-xs text-gray-600">{{ feature.name }}</span>
                                </div>
                            </div>
                        </div>
                        <!-- 我的收藏 -->
                        <div class="favorites-section mt-8">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-base font-medium">我的收藏</h3>
                                <button class="text-sm text-gray-400">查看全部</button>
                            </div>
                            <div class="grid grid-cols-2 gap-3">
                                <div v-for="(item, index) in favoriteItems" :key="index"
                                    class="relative rounded-lg overflow-hidden aspect-[3/2]">
                                    <img :src="item.image" class="w-full h-full object-cover" :alt="item.title">
                                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                                        <p class="text-white text-sm">{{ item.title }}</p>
                                        <div class="flex items-center mt-1">
                                            <i class="fas fa-play-circle text-white/80 text-xs"></i>
                                            <span class="text-white/80 text-xs ml-1">{{ item.playCount }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `,
            data() {
                return {
                    userInfo: {
                        name: '张三',
                        avatar: 'assets/images/avatar.jpg',
                        bio: '热爱自然声音的助眠爱好者'
                    },
                    stats: [
                        { value: '128', label: '收藏' },
                        { value: '256', label: '播放' },
                        { value: '64', label: '创作' },
                        { value: '32', label: '关注' },
                        { value: '16', label: '粉丝' }
                    ],
                    aiCreations: [
                        { title: '雨林清晨', duration: '30分钟' },
                        { title: '海浪声', duration: '45分钟' },
                        { title: '篝火声', duration: '60分钟' }
                    ],
                    features: [
                        { name: '收藏', icon: 'assets/icons/favorite.svg' },
                        { name: '历史', icon: 'assets/icons/history.svg' },
                        { name: '下载', icon: 'assets/icons/download.svg' },
                        { name: '设置', icon: 'assets/icons/settings.svg' }
                    ],
                    favoriteItems: [
                        { 
                            title: '热带雨林', 
                            image: 'assets/images/rainforest.jpg',
                            playCount: '128次'
                        },
                        { 
                            title: '海浪声', 
                            image: 'assets/images/ocean.jpg',
                            playCount: '256次'
                        }
                    ]
                }
            }
        }
    }
]

// 创建路由实例
const router = new VueRouter({
    routes
})

// 导出路由实例
export default router 