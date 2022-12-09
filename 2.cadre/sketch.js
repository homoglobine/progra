function setup() {
  //créer un canvas qui n'a pas de taille définie avec un carde
  createCanvas(windowWidth, windowHeight);
  background(0); 
}




function draw() {
  background(0);
fill(255);
  rect(100,100,width -2*100, height-2*100);

fill(255,0,0);
  textAlign(CENTER, CENTER);
  textSize(20);
  text("bonjour",width/2,height/2);
}




function windowResized() {
  // put drawing code here
  resizeCanvas(windowWidth, windowHeight);
}