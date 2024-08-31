function lerp(start, end , t) {
    return start * (1 - t) + end * t; 
}

class SmoothScroll {
    constructor(el) {
        this.el = el;
        this.currentY = 0;
        this.targetY = 0;
        this.setup();
        this.onWindowResize();
        this.animate();
    }
    
    setup() {
        document.body.style.height = `${this.el.offsetHeight}px`;
        window.addEventListener('scroll', () => {
            this.targetY = window.scrollY;
        });
    }

    onWindowResize() {
        window.addEventListener('resize', () => {
            document.body.style.height = `${this.el.offsetHeight}px`;
        });
    }

    animate() {
        const maxScrollY = this.el.offsetHeight - window.innerHeight;
        this.currentY = lerp(this.currentY, Math.min(this.targetY), .02);
        this.el.style.transform = `translate3d(0, -${this.currentY}px, 0)`;

        requestAnimationFrame(this.animate.bind(this));
    }
}

export { SmoothScroll };