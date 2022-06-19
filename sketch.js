var navio;
var navio_running;
var chao;
var chao_img;

function preload(){
  chao_img = loadImage("sea.png")
  navio_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(1200,600);
    var chao = createSprite(600,300,1200,300)
var navio = createSprite(600,300,20,20)
    chao.addAnimation("running",chao_img)

  navio.addAnimation("running",navio_running)
   chao.addImage(chao_img)
  navio.scale=0.4
 
}

function draw(){
  background("blue");
    drawSprites();
}
