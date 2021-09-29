var box
function setup() {
  createCanvas(600,400);
  box = createSprite(300,200,10,10);
}

function draw() 
{
  background(30);

  if(keyIsDown("up")){
    box.y = box.y-3;
  }
  drawSprites();
}




