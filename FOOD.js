class FOOD{
    constructor(){
        this.image=loadImage("sprite_0.png");
        this.lastfed;
    }

    display(){
       var x=80,y=100;

       imageMode(CENTER);
       this.image=(this.image,720,220,70,70);

       if(this.foodstock!=0){
           for(var i=0;i<foodstock;i++){
               if(i%10==0){
                   x=80;
                   y=y+50;
               }
               this.image(this.image,x,y,50,50);
               x=x+30;
           }
       }

    }

    getFoodStock(){
        var foodsref=database.ref('foodstock');
        foodsref.on("value",function(data){
            foodstock=data.val();
        })
    }
    
    updateFoodStock(stock){
        database.ref('/').update({
            foodstock:stock
        })
    }
    
}