class Tree{
    constructor(x, y, height, width){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.x =x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,650,650);
        pop();
    }
}