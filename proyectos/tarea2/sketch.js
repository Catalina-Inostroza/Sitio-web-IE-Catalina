let t = 0; // Tiempo para animar el patrón
let numPoints = 50; // Número de puntos en el patrón

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  // Cambiar el color basándonos en el tiempo
  let r = map(sin(t), -1, 1, 100, 255);
  let g = map(cos(t), -1, 1, 100, 255);
  let b = map(sin(t + PI / 2), -1, 1, 100, 255);
  fill(r, g, b);
  noStroke();

  // Dibujar puntos en una trayectoria de onda
  let centerY = height / 2;
  let amplitude = 50; // Amplitud de la onda
  let frequency = 0.05; // Frecuencia de la onda
  
  for (let i = 0; i < numPoints; i++) {
    // Calcular la posición de cada punto
    let x = map(i, 0, numPoints, 0, width);
    let y = centerY + sin(frequency * x + t) * amplitude;

    // Dibujar el punto
    ellipse(x, y, 10, 10);
  }

  // Incrementar el tiempo para animar el patrón
  t += 0.05;
}
