var cam;
var r;
var g;
var b;
var a;

function setup() {
  createCanvas(700, 550);

  // specify multiple formats for different browsers
  cam = createCapture(VIDEO);
  cam.size(700, 550);

  // hide the captured video
  cam.hide();
  rectMode(CENTER);
}

function draw() {
  background(36, 0, 128);
  cam.loadPixels();
  // set grid size by mouseX
  var grid = round(constrain(mouseX / 12, 6, 32));

  //nested loops to set x & y on grid
  for (var y = 0; y < height; y += grid) {
    for (var x = 0; x < width; x += grid) {
      var i = y * width + x;

      // get every 4th value in pixel array, which is the alpha for each pixel (255 scale)
      var darkness = (255 - cam.pixels[i * 4]) / 255;

      // set diameter by pixel value
      var d = grid * darkness;

      //stroke(255, 255, 255 , 150);
      //fill(204, 4, 0, 175);

      r = random(255); // r is a random number between 0 - 255
      g = random(10, 200); // g is a random number betwen 100 - 200
      b = random(255); // b is a random number between 0 - 100
      a = random(150, 255); // a is a random number between 200 - 255

      stroke(255);
      fill(r, g, b, a);

      //circles
      circle(x, y, d, d);
    }
  }
}