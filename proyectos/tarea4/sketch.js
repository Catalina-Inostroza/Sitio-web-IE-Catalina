let waves = [];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  
  // Agrega una nueva onda en la posición del mouse
  if (mouseIsPressed) {
    waves.push(new Wave(mouseX, mouseY));
  }

  // Dibuja y actualiza las ondas
  for (let i = waves.length - 1; i >= 0; i--) {
    waves[i].update();
    waves[i].display();

    // Eliminar ondas viejas
    if (waves[i].isFinished()) {
      waves.splice(i, 1);
    }
  }
}

// Clase para las ondas
class Wave {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.maxRadius = 200;
    this.speed = 2;
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    this.radius += this.speed; // Aumenta el radio de la onda
  }

  display() {
    noFill();
    stroke(this.color);
    strokeWeight(2);
    ellipse(this.x, this.y, this.radius * 2); // Dibuja la onda
  }

  isFinished() {
    return this.radius > this.maxRadius; // Comprueba si la onda ha terminado
  }
}
