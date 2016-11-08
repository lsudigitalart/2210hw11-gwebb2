var streetlights;
var rowCount;

function preload() {
  streetlights = loadTable("streetlights.csv", "header");
}

function setup() {
  createCanvas(750, 500);

  rowCount = streetlights.getRowCount();
  background(0);
  fill(255);
  noStroke();

  fill(255, 255, 0, 50);
  triangle(83.376, 223.799, 342.841, -115.942, 460.975, 296.64);
  fill(0);
  ellipse(250, 375, 450, 450);
  fill(255, 255, 0, 75);
  ellipse(250, 375, 450, 450);

  push();
  fill(255);
  textSize(30);
  text("Street Lights in Baton Rouge", 525, 250, 250, 100);
  pop();
}

function draw() {


  translate(-width*252/8-275, -height*186/4+175);
  console.log(mouseX);
  //rotate(radians(270));
  scale(95);

  for(var i = 0; i < rowCount; i++) {
    var latitude = streetlights.getNum(i, "latitude");
    var longitude = streetlights.getNum(i, "longitude");
    setXY(latitude, longitude);
  }

}


function setXY(latitude, longitude) {
  //ellipseMode(RADIUS);
  var x = map(latitude, 0, 90, 0, width);
  var y = map(longitude, -180, 0, 0, height);
  fill(255, 255, 0);
  ellipse(x, y, 0.25, 0.25);

}
