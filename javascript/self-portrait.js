// -----------
// ARTG 2260 - PROGRAMMING BASICS (Thursday)
// Homework 01 - Exploration 01 & 02
// MARIE YATSYK
// Due 09/17/15
// -----------

var action = "static";

function setup() {
  var canvas = createCanvas(500,505);
  canvas.parent('p5js-portrait-container');
  console.log('Click image to animate. :-)');
}

function draw() {
  background(255);
  if (action == "static") {
  //frame
    noStroke();
    fill(199,228,237);
    ellipse(250,250,400,460);
  //shoulders
    fill(245,228,228);
    rect(150,315,200,100,18);
    fill(105,185,201);
    rect(175,305,150,120,18);
  //hair
    noStroke()
    fill(245,242,201);
    arc(250,220,230,280,HALF_PI+QUARTER_PI,QUARTER_PI);
  //neck
    fill(245,228,228);
    arc(250,310,40,40,0,PI);
    rect(230,280,40,30);
  //face
    fill(250,231,225);
    ellipse(250,190,188,190);
    ellipse(165,190,50,50);
    ellipse(335,190,50,50);
  //hair2
    fill(245,242,201);
    arc(250,130,160,80, PI,QUARTER_PI/2);
  //eyes
    fill(255);
    ellipse(212,180,30,30);
    ellipse(288,180,30,30);
    fill(105,185,201);
    ellipse(212,180,15,15);
    ellipse(288,180,15,15);
  //eyebrows
    stroke(166,139,104);
    strokeWeight(6);
    line(190,155,220,165);
    line(310,155,280,165);
    noStroke();
  //nose
    fill(255,212,207);
    triangle(232,238, 250,190, 268,238);
  //cheeks
    fill(242,167,201);
    ellipse(190,210,45,45);
    ellipse(310,210,45,45);
  //mouth
    stroke(255,167,201);
    strokeWeight(3.5);
    line(260,250, 250,260);
    line(240,250, 250,260);
  
  } else if (action == "moving") {
  //frame
    noStroke();
    fill(199,228,237);
    ellipse(250,250,400,460);
  //shoulders
    fill(245,228,228);
    rect(150,315,200,100,18);
    fill(105,185,201);
    rect(175,305,150,120,18);
  //hair
    frameRate(5);
    fill(245,242,201);
    arc(250,220,230,280,HALF_PI+QUARTER_PI,QUARTER_PI,PIE);
  //neck
    fill(245,228,228);
    rect(230,260,40,70,40);
  //ears
    fill(250,231,225);
    ellipse(165,190,50,50);
    ellipse(335,190,50,50);
  //face
    fill(250,231,225);
    ellipse(250,190,188,190);
  //hair2
    frameRate(5);
    fill(245,242,201);
    arc(250,130,160,80, PI,QUARTER_PI/2, PIE);
  //eyes
    frameRate(10);
    fill(255);
    ellipse(212,180,30,30);
    ellipse(288,180,30,30);
    fill(105,185,201,random(220,255));
    ellipse(random(205,218),random(173,188),15,15);
    ellipse(random(281,293),random(173,188),15,15);
  //eyebrows
    stroke(166,139,104,random(220,255));
    strokeWeight(6);
    line(190,random(150,160),220,random(160,170));
    line(310,random(150,160),280,random(160,170));
  //nose
    noStroke();
    fill(255,212,207,random(220,255));
    triangle(232,238, 250,190, 268,238);
  //cheeks
    fill(242,167,201,random(0,255));
    ellipse(190,210,45,45);
    ellipse(310,210,45,45);
  //mouth
    stroke(255,167,201);
    strokeWeight(3.5);
    line(260,250, 250,260);
    line(240,250, 250,260);
  }  
}
  
function mousePressed() {
  if (action == "static") {
    action = "moving";
  } else {
    action = "static";
  }
}