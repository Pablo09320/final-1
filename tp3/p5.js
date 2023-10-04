let variable1 = 100;
let speed = 1; // Velocidad del movimiento

function setup() {
  createCanvas(1350,563);
}

function draw() {
  background(0);
  smooth();
  strokeWeight(5);
  fill(2,146,84);

  // Dibuja la elipse en la posición (variable1, 100)
  ellipse(variable1, 100, 50, 50);

  // Actualiza la posición de la bola sumando la velocidad
  variable1 = variable1 + speed;

  // Detecta si la bola alcanza los bordes de la pantalla y cambia la dirección
  if (variable1 >= width - 25 || variable1 <= 25) {
    speed = -speed; // Invierte la dirección
  }
}
