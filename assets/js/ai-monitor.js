const { createApp } = Vue;

createApp({
    data() {
        return {
            currentTab: 2, // AI监测是第三个标签页
            tabs: [
                { name: '首页', icon: 'fas fa-home' },
                { name: '声音', icon: 'fas fa-map' },
                { name: 'AI监测', icon: 'fas fa-brain' },
                { name: '搜索', icon: 'fas fa-search' },
                { name: '我的', icon: 'fas fa-user' }
            ],
            sleepData: {
                score: 85,
                duration: 7.5,
                deepSleep: 2.5,
                efficiency: 98,
                bedTime: '23:30',
                wakeTime: '07:00',
                stages: {
                    deep: { hours: 2.5, percentage: 33 },
                    light: { hours: 4, percentage: 53 },
                    rem: { hours: 1, percentage: 14 }
                },
                metrics: {
                    fallAsleepTime: 15,
                    awakeTimes: 2,
                    movements: 12
                }
            },
            trendData: {
                avgSleep: '7.2h',
                avgBedTime: '23:28',
                avgWakeTime: '07:05',
                weeklyData: [
                    { date: '周一', hours: 7.2, score: 83 },
                    { date: '周二', hours: 7.0, score: 80 },
                    { date: '周三', hours: 7.4, score: 85 },
                    { date: '周四', hours: 7.6, score: 87 },
                    { date: '周五', hours: 7.2, score: 84 },
                    { date: '周六', hours: 8.0, score: 90 },
                    { date: '周日', hours: 7.5, score: 85 }
                ]
            }
        }
    },
    mounted() {
        this.initSleepChart();
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
            
            if (index !== 2) { // 如果不是当前页
                window.location.href = routes[index];
            }
        },
        
        switchToEdit() {
            window.location.href = 'ai-edit.html';
        },
        
        initSleepChart() {
            const chartDom = this.$refs.sleepChart;
            const myChart = echarts.init(chartDom);
            
            // 睡眠阶段数据
            const phases = [
                { value: 0, name: '清醒' },
                { value: 1, name: '浅睡' },
                { value: 2, name: '浅睡' },
                { value: 3, name: '深睡' },
                { value: 3, name: '深睡' },
                { value: 2, name: '浅睡' },
                { value: 2, name: '浅睡' },
                { value: 4, name: '快速眼动' },
                { value: 2, name: '浅睡' },
                { value: 3, name: '深睡' },
                { value: 3, name: '深睡' },
                { value: 2, name: '浅睡' },
                { value: 2, name: '浅睡' },
                { value: 4, name: '快速眼动' },
                { value: 2, name: '浅睡' },
                { value: 1, name: '浅睡' },
                { value: 0, name: '清醒' }
            ];
            
            const times = [];
            for (let i = 0; i < phases.length; i++) {
                const hour = Math.floor(i / 2) + 23;
                const minute = (i % 2) * 30;
                const formattedHour = hour >= 24 ? hour - 24 : hour;
                times.push(`${formattedHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
            }
            
            const option = {
                animation: false,
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: times,
                    axisLine: {
                        lineStyle: {
                            color: '#E5E7EB'
                        }
                    },
                    axisLabel: {
                        color: '#9CA3AF',
                        fontSize: 10,
                        interval: 2
                    }
                },
                yAxis: {
                    type: 'value',
                    min: 0,
                    max: 4,
                    interval: 1,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        formatter: function(value) {
                            const labels = ['清醒', '浅睡', '浅睡', '深睡', 'REM'];
                            return labels[value];
                        },
                        color: '#9CA3AF',
                        fontSize: 10
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#E5E7EB'
                        }
                    }
                },
                series: [
                    {
                        data: phases.map(item => item.value),
                        type: 'line',
                        smooth: true,
                        symbolSize: 0,
                        lineStyle: {
                            width: 3,
                            color: '#059669'
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: 'rgba(5, 150, 105, 0.5)' },
                                { offset: 1, color: 'rgba(5, 150, 105, 0.1)' }
                            ])
                        }
                    }
                ]
            };
            
            myChart.setOption(option);
            
            // 响应式调整
            window.addEventListener('resize', function() {
                myChart.resize();
            });
        }
    }
}).mount('#app'); 