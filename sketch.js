var dogo,dog,happyDog,database,foodS,foodStock;

function preload(){
dog=loadImage("images/d1.png");  
happyDog=loadImage("images/d2.png");
}

function setup() {
  createCanvas(500,500);

dogo=createSprite(250,250)  
dogo.addImage("dog",dog);
database=firebase.database();
//foodStock=database.ref('food');
//foodStock.on("value",readStock);  
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dogo.addImage(happyDog);

  }
  

  drawSprites();
  text("milk available="+foodStock,250,250);

}


function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{x=x-1;
  }
  database.ref('/').update({food:x})
}  




