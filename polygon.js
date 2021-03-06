class Polygon {
    constructor(x,y,r){
        var options={
            isStatic:true,
        }
        
        this.body= Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        this.image= loadImage("polygon.png");
        World.add(world,this.body);
    }  
    
    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        rotate(angle);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}