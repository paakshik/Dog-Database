var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
const feedFood = document.getElementById('feedFood');
feedFood.addEventListener('click',function(){

  if (foodS > 0){

    dog.addImage(happyDog);
    //write code here to update food stock and last fed time
  
    foodS--;
    database.ref('/').update({
      Food:foodS
    })
    happiness.play();
    date = new Date();
    lastFed = date.getHours();
    lastFed2 = date.getMinutes();
    if (lastFed > 12){
      timeStamp = 'PM'
    };
    if (lastFed < 12){
      timeStamp = 'AM'
    };
    console.log(lastFed)
    database.ref('/').update({
      Time:`${lastFed}:${lastFed2} ${timeStamp}`
    })
    }
})
addFood = document.getElementById('addFood');
addFood.addEventListener('click',function(){
  happiness2.play()
;  foodS++;
  database.ref('/').update({
    Food:foodS
  })
})
const happiness = document.getElementById('audioJack')
const happiness2 = document.getElementById('audioJack2')
//create feed and lastFed variable here
let feed;
let lastFed;
let timeStamp;
function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");

}
function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here

  // addFood=createButton("Add Food");
  // addFood.position(800,95);
  // feedFood=createButton("Feed Food");
  // feedFood.position(700,95);
  // addFood.mousePressed(addFoods);
  // feedFood.mousePressed(feedDog);
}

function draw() {
  background(46,139,87);
  foodObj.display();

  //write code to read fedtime value from the database 
textSize(20);
stroke('white');
fill('white')
  database.ref('Time').on('value',function(data){
    text(`Last fed: ${data.val()}`,100,35);
    })

  
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();

  foodObj.updateFoodStock(foodS);
}


function feedDog(){

}

//function to add food in stock
function addFoods(){

}
