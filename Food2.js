class Food2 {
    constructor(){
     this.image=loadImage('milkImage.png');
    }

    display(){
      
      
      imageMode(CENTER);
      image(this.image,70,220,70,70);
    
    }
}
