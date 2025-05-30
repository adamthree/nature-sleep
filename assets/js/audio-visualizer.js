// 音频可视化模块
const AudioVisualizer = {
    canvas: null,
    audioContext: null,
    analyser: null,
    source: null,
    animationId: null,
    
    init: function(canvasId, audioElementId) {
        // 获取Canvas元素
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error('Canvas元素不存在');
            return false;
        }
        
        // 获取音频元素
        const audioElement = document.getElementById(audioElementId);
        if (!audioElement) {
            console.error('音频元素不存在');
            return false;
        }
        
        // 设置Canvas尺寸
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        
        // 创建音频上下文
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // 创建分析器
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 256;
        
        // 创建媒体元素源
        this.source = this.audioContext.createMediaElementSource(audioElement);
        
        // 连接: 源 -> 分析器 -> 目标
        this.source.connect(this.analyser);
        this.analyser.connect(this.audioContext.destination);
        
        return true;
    },
    
    start: function() {
        if (!this.canvas || !this.analyser) {
            console.error('未初始化可视化器');
            return;
        }
        
        const bufferLength = this.analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        const ctx = this.canvas.getContext('2d');
        const width = this.canvas.width;
        const height = this.canvas.height;
        const barWidth = (width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;
        
        const renderFrame = () => {
            this.animationId = requestAnimationFrame(renderFrame);
            
            x = 0;
            
            // 获取频率数据
            this.analyser.getByteFrequencyData(dataArray);
            
            // 清空画布
            ctx.clearRect(0, 0, width, height);
            
            // 绘制频谱
            for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i] / 255 * height;
                
                // 根据频率设置不同的颜色
                const r = 50 + (i * 2);
                const g = 100 + (i * 2);
                const b = 200;
                
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                ctx.fillRect(x, height - barHeight, barWidth, barHeight);
                
                x += barWidth + 1;
            }
        };
        
        renderFrame();
    },
    
    stop: function() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    },
    
    resize: function() {
        if (this.canvas) {
            this.canvas.width = this.canvas.offsetWidth;
            this.canvas.height = this.canvas.offsetHeight;
        }
    },
    
    destroy: function() {
        this.stop();
        
        if (this.source) {
            this.source.disconnect();
        }
        
        if (this.analyser) {
            this.analyser.disconnect();
        }
        
        if (this.audioContext) {
            this.audioContext.close();
        }
        
        this.canvas = null;
        this.audioContext = null;
        this.analyser = null;
        this.source = null;
    }
};
