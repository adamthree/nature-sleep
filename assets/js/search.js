// 搜索页面脚本
const { createApp } = Vue;

createApp({
    data() {
        return {
            currentTab: 3, // 搜索是第四个标签页
            tabs: [
                { name: '首页', icon: 'fas fa-home' },
                { name: '声音', icon: 'fas fa-map' },
                { name: 'AI监测', icon: 'fas fa-brain' },
                { name: '搜索', icon: 'fas fa-search' },
                { name: '我的', icon: 'fas fa-user' }
            ],
            searchQuery: '',
            searchHistory: ['森林雨声', '白噪音', '冥想音乐', '深度睡眠'],
            selectedCategory: 0, // 默认选中全部分类
            typeStyles: {
                '声音': 'bg-emerald-50 text-emerald-600',
                '音乐': 'bg-blue-50 text-blue-600',
                '合集': 'bg-purple-50 text-purple-600',
                '关键词': 'bg-gray-100 text-gray-600'
            },
            
            // 热门搜索
            trendingSearches: [
                { keyword: '森林雨声', count: 4000, icon: 'fas fa-cloud-rain', iconColor: 'text-emerald-600', bgColor: 'bg-emerald-50' },
                { keyword: '白噪音睡眠', count: 3200, icon: 'fas fa-volume-up', iconColor: 'text-blue-600', bgColor: 'bg-blue-50' },
                { keyword: '冥想音乐', count: 2800, icon: 'fas fa-spa', iconColor: 'text-purple-600', bgColor: 'bg-purple-50' },
                { keyword: '深度睡眠', count: 2500, icon: 'fas fa-moon', iconColor: 'text-indigo-600', bgColor: 'bg-indigo-50' }
            ],
            
            // 搜索结果分类
            resultCategories: [
                { name: '全部', count: 24 },
                { name: '自然声音', count: 12 },
                { name: '冥想音乐', count: 8 },
                { name: '白噪音', count: 4 }
            ],
            
            // 搜索结果
            searchResults: [],
            
            // 声音分类
            categories: [
                { name: '自然', icon: 'fas fa-leaf', iconColor: 'text-emerald-600', bgColor: 'bg-emerald-50' },
                { name: '雨声', icon: 'fas fa-cloud-rain', iconColor: 'text-blue-600', bgColor: 'bg-blue-50' },
                { name: '冥想', icon: 'fas fa-spa', iconColor: 'text-purple-600', bgColor: 'bg-purple-50' },
                { name: '睡眠', icon: 'fas fa-moon', iconColor: 'text-indigo-600', bgColor: 'bg-indigo-50' },
                { name: '风声', icon: 'fas fa-wind', iconColor: 'text-teal-600', bgColor: 'bg-teal-50' },
                { name: '海洋', icon: 'fas fa-water', iconColor: 'text-cyan-600', bgColor: 'bg-cyan-50' },
                { name: '白噪音', icon: 'fas fa-volume-up', iconColor: 'text-gray-600', bgColor: 'bg-gray-100' },
                { name: '全部', icon: 'fas fa-th', iconColor: 'text-gray-600', bgColor: 'bg-gray-100' }
            ],
            
            // 合集
            collections: [
                { 
                    title: '深度睡眠合集', 
                    items: 15, 
                    image: 'https://ai-public.mastergo.com/ai/img_res/1cd9f7fa6aa0fb5b0e02d5c52b72a68d.jpg' 
                },
                { 
                    title: '专注工作音乐', 
                    items: 12, 
                    image: 'https://ai-public.mastergo.com/ai/img_res/1a193d6bc0a1b8b73b98f734db7d1d7f.jpg' 
                },
                { 
                    title: '自然雨声合集', 
                    items: 8, 
                    image: 'https://ai-public.mastergo.com/ai/img_res/3f68a02ddca5d494eed6e63a7dde22a5.jpg' 
                },
                { 
                    title: '冥想音乐精选', 
                    items: 10, 
                    image: 'https://ai-public.mastergo.com/ai/img_res/5af22ed9d62187db3ea7ac52096aec96.jpg' 
                }
            ]
        }
    },
    computed: {
        // 根据分类筛选结果
        filteredResults() {
            if (this.selectedCategory === 0) {
                return this.searchResults;
            } else {
                const category = this.resultCategories[this.selectedCategory].name;
                return this.searchResults.filter(result => 
                    result.categories.includes(category) || 
                    result.title.includes(category) ||
                    result.description.includes(category)
                );
            }
        }
    },
    methods: {
        // 搜索功能
        search() {
            if (!this.searchQuery.trim()) {
                this.searchResults = [];
                return;
            }
            
            // 模拟搜索结果
            this.searchResults = [
                {
                    title: '森林雨声',
                    description: '轻柔的雨声，让您沉浸在宁静的森林中',
                    type: '声音',
                    icon: 'fas fa-cloud-rain',
                    categories: ['自然声音', '雨声'],
                    image: 'https://ai-public.mastergo.com/ai/img_res/3f68a02ddca5d494eed6e63a7dde22a5.jpg'
                },
                {
                    title: '山间雨声',
                    description: '山间小径的雨声，伴随着远处鸟鸣',
                    type: '声音',
                    icon: 'fas fa-mountain',
                    categories: ['自然声音', '雨声'],
                    image: 'https://ai-public.mastergo.com/ai/img_res/18d5c530e3c2163bb7bd83b3def36006.jpg'
                },
                {
                    title: '雨打窗声',
                    description: '雨滴打在窗户上的舒缓声音',
                    type: '声音',
                    icon: 'fas fa-cloud-rain',
                    categories: ['自然声音', '雨声', '白噪音'],
                    image: 'https://ai-public.mastergo.com/ai/img_res/5af22ed9d62187db3ea7ac52096aec96.jpg'
                },
                {
                    title: '雨中冥想',
                    description: '雨声伴随舒缓的冥想背景音乐',
                    type: '音乐',
                    icon: 'fas fa-spa',
                    categories: ['冥想音乐', '雨声'],
                    image: null
                },
                {
                    title: '深度睡眠雨声合集',
                    description: '8种不同的雨声助您深度睡眠',
                    type: '合集',
                    icon: 'fas fa-list',
                    categories: ['自然声音', '雨声', '睡眠'],
                    image: 'https://ai-public.mastergo.com/ai/img_res/1cd9f7fa6aa0fb5b0e02d5c52b72a68d.jpg'
                }
            ].filter(item => 
                item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                item.categories.some(cat => cat.toLowerCase().includes(this.searchQuery.toLowerCase()))
            );
            
            // 将搜索词添加到历史记录
            if (this.searchQuery.trim() && !this.searchHistory.includes(this.searchQuery)) {
                this.searchHistory.unshift(this.searchQuery);
                this.searchHistory = this.searchHistory.slice(0, 10); // 只保留最近10条
                
                // 实际应用中应该保存到localStorage或用户数据中
                this.saveSearchHistory();
            }
        },
        
        // 清除搜索
        clearSearch() {
            this.searchQuery = '';
            this.searchResults = [];
        },
        
        // 从历史记录中搜索
        searchFromHistory(term) {
            this.searchQuery = term;
            this.search();
        },
        
        // 清空历史记录
        clearHistory() {
            this.searchHistory = [];
            // 实际应用中应该清除localStorage或用户数据中的记录
            localStorage.removeItem('searchHistory');
        },
        
        // 保存搜索历史到localStorage
        saveSearchHistory() {
            localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
        },
        
        // 按分类筛选结果
        filterByCategory(index) {
            this.selectedCategory = index;
        },
        
        // 选择分类
        selectCategory(category) {
            this.searchQuery = category.name;
            this.search();
        },
        
        // 切换底部导航
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
            
            if (index !== 3) { // 如果不是当前页
                window.location.href = routes[index];
            }
        }
    },
    mounted() {
        // 从localStorage加载搜索历史
        const savedHistory = localStorage.getItem('searchHistory');
        if (savedHistory) {
            try {
                this.searchHistory = JSON.parse(savedHistory);
            } catch (e) {
                console.error('Error parsing search history:', e);
            }
        }
    }
}).mount('#app'); 