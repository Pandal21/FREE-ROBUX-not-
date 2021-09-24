var box
function setup() {
  createCanvas(1500,800);
  box = createSprite(200,200,20,20)
}




function draw() 
{
  background(30);

  if (keyDown("right")){
    box.x += 5
  }

  if (keyDown("left")){
    box.x -= 5
  }

  if(keyDown("up")){
    box.y -= 5
  }

  if(keyDown("down")){
    box.y += 5
  }
  drawSprites()
  
}




