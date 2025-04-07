// 个人中心页面脚本
const { createApp } = Vue;

createApp({
    data() {
        return {
            currentTab: 4, // 我的是第五个标签页
            tabs: [
                { name: '首页', icon: 'fas fa-home' },
                { name: '声音', icon: 'fas fa-map' },
                { name: 'AI监测', icon: 'fas fa-brain' },
                { name: '搜索', icon: 'fas fa-search' },
                { name: '我的', icon: 'fas fa-user' }
            ],
            // 最近播放
            recentPlayed: [
                { 
                    title: '森林雨声',
                    time: '今天 08:30',
                    image: 'https://ai-public.mastergo.com/ai/img_res/3f68a02ddca5d494eed6e63a7dde22a5.jpg'
                },
                { 
                    title: '深度睡眠音乐',
                    time: '昨天 23:10',
                    image: 'https://ai-public.mastergo.com/ai/img_res/1cd9f7fa6aa0fb5b0e02d5c52b72a68d.jpg'
                },
                { 
                    title: '冥想音乐',
                    time: '昨天 19:40',
                    image: 'https://ai-public.mastergo.com/ai/img_res/5af22ed9d62187db3ea7ac52096aec96.jpg'
                },
                { 
                    title: '海浪声',
                    time: '前天 22:15',
                    image: 'https://ai-public.mastergo.com/ai/img_res/18d5c530e3c2163bb7bd83b3def36006.jpg'
                },
                { 
                    title: '夏日晚风',
                    time: '2024-04-12',
                    image: 'https://ai-public.mastergo.com/ai/img_res/25965d5223b0f7f510d8fde3fdbebb2c.jpg'
                }
            ],
            // 功能菜单
            functionMenus: [
                { name: '已下载', icon: 'fas fa-download', iconColor: 'text-emerald-600', bgColor: 'bg-emerald-50' },
                { name: '历史记录', icon: 'fas fa-history', iconColor: 'text-blue-600', bgColor: 'bg-blue-50' },
                { name: '定时关闭', icon: 'fas fa-clock', iconColor: 'text-purple-600', bgColor: 'bg-purple-50' },
                { name: '闹钟', icon: 'fas fa-bell', iconColor: 'text-amber-600', bgColor: 'bg-amber-50' },
                { name: '睡眠统计', icon: 'fas fa-chart-line', iconColor: 'text-red-600', bgColor: 'bg-red-50' },
                { name: '设置', icon: 'fas fa-cog', iconColor: 'text-gray-600', bgColor: 'bg-gray-100' },
                { name: '帮助', icon: 'fas fa-question-circle', iconColor: 'text-cyan-600', bgColor: 'bg-cyan-50' },
                { name: '反馈', icon: 'fas fa-comment-alt', iconColor: 'text-indigo-600', bgColor: 'bg-indigo-50' }
            ],
            // 会员信息
            memberInfo: {
                level: '高级会员',
                expireDate: '2024.12.31',
                usedDays: 183,
                remainingDays: 182,
                progress: 60
            },
            // 用户数据
            userData: {
                totalDays: 108,
                totalHours: '320h',
                avgScore: 89
            }
        }
    },
    methods: {
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
            
            if (index !== 4) { // 如果不是当前页
                window.location.href = routes[index];
            }
        },
        
        // 播放收藏的声音
        playFavorite(index) {
            console.log('播放收藏的声音', index);
            // 实际应用中这里应该跳转到播放页或开始播放
        },
        
        // 取消收藏
        removeFavorite(index) {
            console.log('取消收藏', index);
            // 实际应用中这里应该弹出确认提示并处理取消收藏逻辑
        },
        
        // 查看所有收藏
        viewAllFavorites() {
            console.log('查看所有收藏');
            // 实际应用中这里应该跳转到收藏列表页
        },
        
        // 查看所有最近播放
        viewAllRecent() {
            console.log('查看所有最近播放');
            // 实际应用中这里应该跳转到历史记录页
        },
        
        // 播放最近项目
        playRecentItem(item) {
            console.log('播放', item.title);
            // 实际应用中这里应该跳转到播放页或开始播放
        },
        
        // 打开功能菜单
        openFunction(menu, index) {
            console.log('打开功能', menu.name);
            // 实际应用中这里应该根据功能类型跳转到相应页面
            switch(menu.name) {
                case '已下载':
                    // 跳转到下载页面
                    break;
                case '历史记录':
                    // 跳转到历史记录页面
                    break;
                case '定时关闭':
                    // 打开定时设置弹窗
                    break;
                case '设置':
                    // 跳转到设置页面
                    break;
                // 其他功能...
            }
        },
        
        // 开通会员
        upgradeMembership() {
            console.log('开通会员');
            // 实际应用中这里应该跳转到会员购买页面
        },
        
        // 邀请好友
        inviteFriends() {
            console.log('邀请好友');
            // 实际应用中这里应该跳转到邀请页面或显示邀请二维码
        }
    }
}).mount('#app'); 