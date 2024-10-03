let burbujas = [];
let triangulos = [];
let numBurbujas = 10;
let numTriangulos = 5;

function setup() {
  createCanvas(800, 600);
  
  // Crear instancias de Burbuja
  for (let i = 0; i < numBurbujas; i++) {
    burbujas.push(new Burbuja(random(width), random(height), random(20, 40)));
  }
  
  // Crear instancias de Triangulo
  for (let i = 0; i < numTriangulos; i++) {
    triangulos.push(new Triangulo(random(width), random(height), random(20, 40)));
  }
}

function draw() {
  background(200, 150, 255); // Fondo lila
  
  // Mostrar y mover burbujas
  for (let b of burbujas) {
    b.mover();
    b.mostrar();
  }
  
  // Mostrar y mover triángulos
  for (let t of triangulos) {
    t.mover();
    t.mostrar();
  }
}

// Clase Burbuja
class Burbuja {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    // Colores más contrastantes
    this.color = color(random(100, 255), random(100, 255), random(100, 255), 200);
    this.velX = random(-2, 2);
    this.velY = random(-2, 2);
  }
  
  mover() {
    this.x += this.velX;
    this.y += this.velY;

    // Rebotar en los bordes
    if (this.x < this.r) {
      this.x = this.r; // Asegurarse de que no se salga
      this.velX *= -1; // Invertir dirección horizontal
    }
    if (this.x > width - this.r) {
      this.x = width - this.r; // Asegurarse de que no se salga
      this.velX *= -1; // Invertir dirección horizontal
    }
    if (this.y < this.r) {
      this.y = this.r; // Asegurarse de que no se salga
      this.velY *= -1; // Invertir dirección vertical
    }
    if (this.y > height - this.r) {
      this.y = height - this.r; // Asegurarse de que no se salga
      this.velY *= -1; // Invertir dirección vertical
    }
  }
  
  mostrar() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}

// Clase Triangulo
class Triangulo {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    // Color morado
    this.color = color(128, 0, 128, 200); // Morado
    this.velY = -2; // Movimiento constante hacia arriba
  }
  
  mover() {
    this.y += this.velY;

    // Rebotar en los bordes
    if (this.y < 0) {
      this.y = height; // Volver a aparecer en la parte inferior
      this.x = random(width); // Cambiar posición horizontal aleatoriamente
    }
  }
  
  mostrar() {
    fill(this.color);
    noStroke();
    triangle(
      this.x, this.y,
      this.x - this.size / 2, this.y + this.size,
      this.x + this.size / 2, this.y + this.size
    );
  }
}
