let cols, rows;
let circleSize = 50;
let circles = [];

function setup() {
  createCanvas(800, 600);
  cols = floor(width / circleSize);
  rows = floor(height / circleSize);

  // Inicializa los círculos en una cuadrícula
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      circles.push(new Circle(i * circleSize, j * circleSize));
    }
  }
}

function draw() {
  background(255);
  
  // Dibuja y actualiza los círculos
  for (let circle of circles) {
    circle.update();
    circle.display();
  }
}

// Clase para los círculos
class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 50);
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    // Cambia el tamaño de forma sinusoidal
    this.size = 30 + 20 * sin(frameCount * 0.1 + this.x + this.y);
    // Cambia el color lentamente
    this.color = color(
      (sin(frameCount * 0.05 + this.x) + 1) * 127.5,
      (sin(frameCount * 0.05 + this.y) + 1) * 127.5,
      (sin(frameCount * 0.05 + this.x + this.y) + 1) * 127.5
    );
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x + circleSize / 2, this.y + circleSize / 2, this.size);
  }
}
