/**
 * Nature Sleep 音频可视化模块
 * 实现频谱分析器和动态波形效果
 */

class AudioVisualizer {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.options = {
            barCount: options.barCount || 32,
            barWidth: options.barWidth || 4,
            barGap: options.barGap || 2,
            minHeight: options.minHeight || 2,
            barColor: options.barColor || '#4CAF50',
            backgroundColor: options.backgroundColor || 'rgba(0, 0, 0, 0.1)',
            ...options
        };
        
        this.audioContext = null;
        this.analyser = null;
        this.dataArray = null;
        this.animationFrame = null;
        this.isActive = false;
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }
    
    init(audioElement) {
        if (!audioElement) return;
        
        // 创建音频上下文
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // 创建音频源
        const source = this.audioContext.createMediaElementSource(audioElement);
        
        // 创建分析器
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = this.options.barCount * 2;
        
        // 创建数据数组
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
        
        // 连接节点
        source.connect(this.analyser);
        this.analyser.connect(this.audioContext.destination);
        
        // 开始可视化
        this.start();
    }
    
    start() {
        if (this.isActive) return;
        this.isActive = true;
        this.draw();
    }
    
    stop() {
        this.isActive = false;
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
    }
    
    draw() {
        if (!this.isActive) return;
        
        // 获取频谱数据
        this.analyser.getByteFrequencyData(this.dataArray);
        
        // 清空画布
        this.ctx.fillStyle = this.options.backgroundColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 计算每个条的宽度和间距
        const barWidth = this.options.barWidth;
        const barGap = this.options.barGap;
        const totalWidth = (barWidth + barGap) * this.options.barCount;
        
        // 计算起始位置使条形居中
        const startX = (this.canvas.width - totalWidth) / 2;
        
        // 绘制频谱条
        for (let i = 0; i < this.options.barCount; i++) {
            const value = this.dataArray[i];
            const barHeight = Math.max(
                (value / 255) * this.canvas.height,
                this.options.minHeight
            );
            
            const x = startX + i * (barWidth + barGap);
            const y = this.canvas.height - barHeight;
            
            this.ctx.fillStyle = this.options.barColor;
            this.ctx.fillRect(x, y, barWidth, barHeight);
        }
        
        // 继续动画
        this.animationFrame = requestAnimationFrame(() => this.draw());
    }
}

// 导出模块
export default AudioVisualizer; 