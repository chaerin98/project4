let cola;
let rot;

function preload() {
  //cola = loadModel('assets/cola.stl', true);
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 360, 100, 100);
  rot=0;
}
function draw() {
  background('FFFFFF');
  // setting lights
  //pointLight(0, 0, 100, 0, 0, 500);
  // transform the teapot
  //translate(0, 200, -300);
  box(305, 455, 200);
  //rotateX(HALF_PI);
  //rotateZ(rot);
  scale(20);
  noStroke();
  // display teapots
  //model(cola);
  // rotate teapots
  //rot += 0.02;
}