var tiger,tigerimg,bg,ground,food,foodimg,feed,add,x,p=500
var foodobj,foodstock,feedtime,lastfed,database


function preload(){
    tigerimg=loadImage("pet.png");
    bg=loadImage("L_4.webp");
    foodimg=loadImage("sprite_0.png");
}

function setup() {
  database=firebase.database();

  createCanvas(1000,400);
  
  tiger=createSprite(200,310,150,150);
  tiger.addImage(tigerimg);
  tiger.scale=0.6;

  ground=createSprite(10,390,5000,20);
  ground.shapeColor="red";

 for(x=1;x<=foodstock;x+=50){
  food=createSprite(p,150,20,20);
  food.addImage(foodimg);
  food.scale=0.2;
  p=p+100;
 }

  feed=createButton("FEED THE TIGER");
  feed.position(700,95);
  feed.mousePressed(feeddog);

  add=createButton("ADD FOOD");
  add.position(900,95);
  add.mousePressed(addfood)
  
  foodobj=new FOOD();

}

function draw() {
  background("red");

  foodobj.display();
  drawSprites();
}

function feeddog(){
  foodstock-1;

}


//function to add food in stock
function addfood(){
  foodstock++;
  database.ref('/').update({
    Food:foodstock
  })

}
