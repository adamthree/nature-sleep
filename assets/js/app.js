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

// 注册组件
Vue.component('home-page', {
  template: '#home-template',
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
      ]
    }
  },
  methods: {
    switchTab(index) {
      // 通知父组件切换页面
      this.$root.switchPage(index);
    }
  }
});

Vue.component('sound-map-page', {
  template: '#sound-map-template',
  data() {
    return {
      currentTab: 1,
      zoom: 1,
      showSleepAnimation: false,
      markers: [
        {
          id: 1,
          name: '亚马逊雨林',
          visits: 15,
          x: 30,
          y: 45
        },
        {
          id: 2,
          name: '冰岛极光',
          visits: 8,
          x: 45,
          y: 20
        },
        {
          id: 3,
          name: '撒哈拉沙漠',
          visits: 12,
          x: 48,
          y: 38
        },
        {
          id: 4,
          name: '夏威夷海滩',
          visits: 20,
          x: 15,
          y: 40
        },
        {
          id: 5,
          name: '阿尔卑斯山',
          visits: 18,
          x: 52,
          y: 28
        },
        {
          id: 6,
          name: '悉尼海港',
          visits: 25,
          x: 85,
          y: 65
        },
        {
          id: 7,
          name: '加拿大落基山',
          visits: 16,
          x: 18,
          y: 28
        },
        {
          id: 8,
          name: '尼泊尔喜马拉雅',
          visits: 10,
          x: 70,
          y: 35
        },
        {
          id: 9,
          name: '非洲大草原',
          visits: 14,
          x: 55,
          y: 48
        },
        {
          id: 10,
          name: '日本富士山',
          visits: 22,
          x: 82,
          y: 33
        }
      ],
      tabs: [
        { name: '首页', icon: 'fas fa-home' },
        { name: '声音地图', icon: 'fas fa-map' },
        { name: 'AI', icon: 'fas fa-robot' },
        { name: '搜索', icon: 'fas fa-search' },
        { name: '我的', icon: 'fas fa-user' }
      ],
    }
  },
  mounted() {
    // 在实际应用中，此处可能会加载一些数据
    // 模拟显示睡眠动画
    setTimeout(() => {
      this.showSleepAnimation = true;
      
      // 3秒后自动关闭
      setTimeout(() => {
        this.showSleepAnimation = false;
      }, 3000);
    }, 1000);
  },
  methods: {
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
    switchTab(index) {
      // 通知父组件切换页面
      this.$root.switchPage(index);
    }
  }
});

Vue.component('search-page', {
  template: '#search-template',
  data() {
    return {
      searchHistory: [
        '夏日晚风',
        '温柔雨声',
        '森林漫步',
        '舒缓音乐'
      ],
      recommendItems: [
        {
          title: '温柔夜雨',
          duration: '60 分钟',
          image: 'https://ai-public.mastergo.com/ai/img_res/25965d5223b0f7f510d8fde3fdbebb2c.jpg'
        },
        {
          title: '森林晨光',
          duration: '45 分钟',
          image: 'https://ai-public.mastergo.com/ai/img_res/2f7ca497e8b5263fc42ec85a723938b3.jpg'
        },
        {
          title: '海浪轻抚',
          duration: '30 分钟',
          image: 'https://ai-public.mastergo.com/ai/img_res/beecdbcc1b5ca7851e8119bafd8337d1.jpg'
        },
        {
          title: '山谷清风',
          duration: '40 分钟',
          image: 'https://ai-public.mastergo.com/ai/img_res/10ac2149cbbbf4b00c4e077f67c6b556.jpg'
        }
      ],
      tabItems: [
        { text: '首页', icon: 'fas fa-home', active: false },
        { text: '声音地图', icon: 'fas fa-map', active: false },
        { text: 'AI', icon: 'fas fa-robot', active: false },
        { text: '搜索', icon: 'fas fa-search', active: true },
        { text: '我的', icon: 'fas fa-user', active: false }
      ]
    }
  },
  methods: {
    switchTab(index) {
      // 更新激活状态
      this.tabItems.forEach((tab, i) => {
        tab.active = (i === index);
      });
      
      // 通知父组件切换页面
      this.$root.switchPage(index);
    }
  }
});

Vue.component('profile-page', {
  template: '#profile-template',
  data() {
    return {
      userInfo: {
        name: '小呼噜猫',
        bio: '让音乐治愈每一天',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/d6c21734aa3518ad9a83143f934ace1e.jpg'
      },
      stats: [
        { label: '收藏', value: '128' },
        { label: '播放', value: '1.2k' },
        { label: '创作', value: '36' },
        { label: '关注', value: '86' },
        { label: '粉丝', value: '92' }
      ],
      aiCreations: [
        {
          title: '雨后森林',
          duration: '3:42',
        },
        {
          title: '城市脉动',
          duration: '4:15',
        },
        {
          title: '星河梦境',
          duration: '5:08',
        }
      ],
      features: [
        {
          name: '本地音乐',
          icon: 'https://ai-public.mastergo.com/ai/img_res/3c6669f1d82674dca28a6773f6c8bbb5.jpg'
        },
        {
          name: '播放历史',
          icon: 'https://ai-public.mastergo.com/ai/img_res/ba3f0824a0cb07e5718bd3ce8f3d8f12.jpg'
        },
        {
          name: '下载管理',
          icon: 'https://ai-public.mastergo.com/ai/img_res/15a3b040f0df5c9a55c4a2cb406f9c72.jpg'
        },
        {
          name: '助眠计划',
          icon: 'https://ai-public.mastergo.com/ai/img_res/230d52870623c76150e59da599b590fc.jpg'
        }
      ],
      favoriteItems: [
        {
          title: '深度睡眠白噪音',
          playCount: '1,234',
          image: 'https://ai-public.mastergo.com/ai/img_res/74bf69e143076ec0f201608a3ad58064.jpg'
        },
        {
          title: '大自然交响曲',
          playCount: '928',
          image: 'https://ai-public.mastergo.com/ai/img_res/d6b49038e528db0f7b59f5d2792907ce.jpg'
        },
        {
          title: '城市雨声',
          playCount: '756',
          image: 'https://ai-public.mastergo.com/ai/img_res/1f69c54ca79188fdfe92cf4177d39a49.jpg'
        },
        {
          title: '海浪冥想',
          playCount: '652',
          image: 'https://ai-public.mastergo.com/ai/img_res/112c24550e5ae5e075c1f2e31715c839.jpg'
        }
      ],
      tabItems: [
        { text: '首页', icon: 'fas fa-home', active: false },
        { text: '声音地图', icon: 'fas fa-map', active: false },
        { text: 'AI', icon: 'fas fa-robot', active: false },
        { text: '搜索', icon: 'fas fa-search', active: false },
        { text: '我的', icon: 'fas fa-user', active: true }
      ]
    }
  },
  methods: {
    switchTab(index) {
      // 更新激活状态
      this.tabItems.forEach((tab, i) => {
        tab.active = (i === index);
      });
      
      // 通知父组件切换页面
      this.$root.switchPage(index);
    }
  }
});

Vue.component('ai-edit-page', {
  template: '#ai-edit-template',
  data() {
    return {
      currentTab: 2, // AI标签
      showVoicePanel: false,
      tabs: [
        { name: '首页', icon: 'fas fa-home' },
        { name: '声音地图', icon: 'fas fa-map' },
        { name: 'AI', icon: 'fas fa-robot' },
        { name: '搜索', icon: 'fas fa-search' },
        { name: '我的', icon: 'fas fa-user' }
      ],
      soundCategories: [
        { name: '全部', icon: 'fas fa-th-large' },
        { name: '最热', icon: 'fas fa-fire' },
        { name: '自然', icon: 'fas fa-leaf' },
        { name: '动物', icon: 'fas fa-paw' },
        { name: '风景', icon: 'fas fa-mountain' }
      ],
      soundSubCategories: [
        {
          name: '雨声',
          imageUrl: 'https://ai-public.mastergo.com/ai/img_res/5af22ed9d62187db3ea7ac52096aec96.jpg'
        },
        {
          name: '海浪',
          imageUrl: 'https://ai-public.mastergo.com/ai/img_res/18d5c530e3c2163bb7bd83b3def36006.jpg'
        },
        {
          name: '鸟鸣',
          imageUrl: 'https://ai-public.mastergo.com/ai/img_res/3c31a1513dc6e2efde93ded9b8f3b7e1.jpg'
        },
        {
          name: '篝火',
          imageUrl: 'https://ai-public.mastergo.com/ai/img_res/1d6e87046ec9a6492c92c30fb4ea4de0.jpg'
        },
        {
          name: '风声',
          imageUrl: 'https://ai-public.mastergo.com/ai/img_res/2961958d60f477ed1ca123c3a4ac683a.jpg'
        },
        {
          name: '河流',
          imageUrl: 'https://ai-public.mastergo.com/ai/img_res/48acec2a6651fee832096cfc6da6272a.jpg'
        }
      ]
    }
  },
  methods: {
    switchToAiMonitor() {
      // 切换到AI监测页面
      this.$root.currentPage = 'ai-monitor-page';
    },
    switchTab(index) {
      // 通知父组件切换页面
      this.$root.switchPage(index);
    }
  }
});

Vue.component('ai-monitor-page', {
  template: '#ai-monitor-template',
  data() {
    return {
      currentTab: 2, // AI标签
      tabs: [
        { name: '首页', icon: 'fas fa-home' },
        { name: '声音地图', icon: 'fas fa-map' },
        { name: 'AI', icon: 'fas fa-robot' },
        { name: '搜索', icon: 'fas fa-search' },
        { name: '我的', icon: 'fas fa-user' }
      ]
    }
  },
  methods: {
    switchTab(index) {
      // 通知父组件切换页面
      this.$root.switchPage(index);
    }
  }
});

// 创建Vue实例
const app = new Vue({
  el: '#app',
  data: {
    currentPage: 'home-page'
  },
  methods: {
    switchPage(index) {
      // 根据底部导航索引切换页面
      switch (index) {
        case 0:
          this.currentPage = 'home-page';
          break;
        case 1:
          this.currentPage = 'sound-map-page';
          break;
        case 2:
          this.currentPage = 'ai-edit-page'; // 默认显示AI编辑页面
          break;
        case 3:
          this.currentPage = 'search-page';
          break;
        case 4:
          this.currentPage = 'profile-page';
          break;
      }
    }
  }
}); 