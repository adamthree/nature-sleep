/**
 * Nature Sleep 音频可视化模块
 * 实现频谱分析器和动态波形效果
 */

// 音频可视化模块
export default {
    canvas: null,
    audioContext: null,
    analyser: null,
    source: null,
    isInitialized: false,
    animationId: null,
    
    init(canvasId, audio) {
        if (!canvasId || !audio) return false;
        
        // 获取Canvas元素
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return false;
        
        // 创建音频上下文
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return false;
        
        this.audioContext = new AudioContext();
        this.analyser = this.audioContext.createAnalyser();
        this.source = this.audioContext.createMediaElementSource(audio);
        
        // 连接节点
        this.source.connect(this.analyser);
        this.analyser.connect(this.audioContext.destination);
        
        // 配置分析器
        this.analyser.fftSize = 256;
        
        this.isInitialized = true;
        return true;
    },
    
    start() {
        if (!this.isInitialized) return false;
        
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
            
            this.analyser.getByteFrequencyData(dataArray);
            
            ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.fillRect(0, 0, width, height);
            
            for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i] / 2;
                
                const r = barHeight + 25 * (i / bufferLength);
                const g = 250 * (i / bufferLength);
                const b = 50;
                
                ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                ctx.fillRect(x, height - barHeight, barWidth, barHeight);
                
                x += barWidth + 1;
            }
        };
        
        renderFrame();
        return true;
    },
    
    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    },
    
    resize(width, height) {
        if (!this.canvas) return;
        
        this.canvas.width = width;
        this.canvas.height = height;
    },
    
    destroy() {
        this.stop();
        
        if (this.source && this.audioContext) {
            this.source.disconnect();
            this.analyser.disconnect();
        }
        
        this.canvas = null;
        this.audioContext = null;
        this.analyser = null;
        this.source = null;
        this.isInitialized = false;
    }
}; 