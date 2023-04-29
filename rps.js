
let particles = [];


function preload(){

  font = loadFont("fonts/orange-juice-2.0.ttf");
  rock = loadImage('assets/rock.png');
  paper = loadImage('assets/paper.png');
  scissors = loadImage('assets/scissors.png');
  
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  
  textFont(font);
  textSize(100);
  textAlign(CENTER, TOP);
  
  for (let i = 0; i < 150; i++) {
    particles.push(new Particle());
  }  
  
  
}


function draw() {
  background(30,100,30);
  imageMode(CENTER);
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].limits();
    particles[i].move();
    particles[i].display();
  }  
  
  rect(mouseX, mouseY, 10,10);
  image(rock, mouseX, mouseY);
  
  fill(60, 200, 60);
  text("RPS",width/2,0);
  
  
}




class Particle{
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(1, 10);
    this.speedx = 0;
    this.speedy = 0;
    this.color = [random(0,255),random(0,255),random(0,255),random(0,255)];
  }
  
  move(){
    this.speedx += random(-0.1,0.1);
    this.speedy += random(-0.1,0.1);
    this.x += this.speedx;
    this.y += this.speedy;
    
  }
  
  limits(){
    this.x = this.x % width;
    this.y = this.y % height;
    
    if(this.speedx>1){
      this.speedx = 1; 
    }
    
    if(this.speedx<-1){
      this.speedx = -1; 
    }
    
    if(this.speedy>1){
      this.speedy = 1; 
    }
    
    if(this.speedy<-1){
      this.speedy = -1; 
    }
    
  }
  
  display(){
    fill(this.color);
    circle(this.x, this.y, this.diameter);
  }
}
