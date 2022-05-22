class Circle {
  constructor(canvas, { color, radius } = {}) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');

    this.radius = radius;
    this.color = color;
    this.circleOpacity = 1;
    this.lineOpacity = 0;

    this.x = Math.random() * (this.canvas.width - this.radius) + this.radius;
    this.y = Math.random() * (this.canvas.height - this.radius) + this.radius;

    this.velocity = { x: Math.random() - .5, y: Math.random() - .5 };
  }

  #draw() {
    this.context.fillStyle = `rgba(255, 255, 255, ${ this.circleOpacity })`;
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.context.fill();
  }

  connect(particles, { lineLength = 100 } = {}) {
    for(let j = 0; j < particles.length; j++) {
      const x0 = this.x;
      const y0 = this.y;

      const x1 = particles[j].x;
      const y1 = particles[j].y;

      const distance = (x1 - x0)**2 + (y1 - y0)**2;

      if(distance < lineLength**2) {
        this.lineOpacity = 1 - Math.sqrt(distance) / lineLength;

        this.context.strokeStyle = `rgba(255, 255, 255, ${ this.lineOpacity })`;

        this.context.beginPath();
        this.context.moveTo(x0, y0);
        this.context.lineTo(x1, y1);
        this.context.stroke();
      }
    }
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if(this.x < 0 || this.x > this.canvas.width) {
      this.circleOpacity = 0;
      this.x = Math.random() * (this.canvas.width - this.radius) + this.radius;
    }

    if(this.y < 0 || this.y > this.canvas.height) {
      this.circleOpacity = 0;
      this.y = Math.random() * (this.canvas.height - this.radius) + this.radius;
    }

    if(this.circleOpacity < 1) this.circleOpacity += .05;

    if(
      this.x < this.radius || 
      this.x > this.canvas.width - this.radius
    ) { this.velocity.x = -this.velocity.x; } 

    if(
      this.y < this.radius ||
      this.y > this.canvas.height - this.radius
    ) { this.velocity.y = -this.velocity.y; }

    this.#draw();
  }
}

export class Particles {
  particles = [];

  constructor(canvas, options) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.options = options;

    this.mousePosition = { x: null, y: null };
    this.opacity = 1;
    this.touched = false;

    this.#interact();
    this.#init();
  }

  #init() {
    for(let i = 0; i < this.options.amount; i++) {
      this.particles.push(new Circle(this.canvas, this.options));
    }
  }

  #interact() {
    this.canvas.addEventListener('mousemove', ({ offsetX, offsetY }) => {
      this.mousePosition.x = offsetX;
      this.mousePosition.y = offsetY;
    });
    
    this.canvas.addEventListener('touchmove', event => {
      const block = event.target.getBoundingClientRect();
    
      this.mousePosition.x = event.touches[0].clientX - block.x;
      this.mousePosition.y = event.touches[0].clientY - block.y;
    });
    
    this.canvas.addEventListener('touchend', () => {
      this.mousePosition.x = null;
      this.mousePosition.y = null;
    });

    window.addEventListener('mousemove', () => { if(this.opacity > 0) this.opacity -= .0125 });

    window.addEventListener('touchstart', () => this.touched = true);

    window.addEventListener('touchend', () => this.touched = false);
  }

  animate() {
    this.context.fillStyle = `rgba(0, 0, 0, ${ this.opacity })`;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  
    for(let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
      this.particles[i].connect([...this.particles, { ...this.mousePosition }], { lineLength: 150 });
    }

    if(this.touched && this.opacity > 0) this.opacity -= .0125;
    else if(!this.touched && this.opacity < 1) this.opacity += .005;

    requestAnimationFrame(this.animate.bind(this));
  }
} 
