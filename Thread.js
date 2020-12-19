class Thread{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.thread = Constraint.create(options);
        World.add(world, this.thread);
    }

    display(){
        if(this.thread.bodyA){
            var pointA = this.thread.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
         this.thread.bodyA = null;   
    }

    attach(body){
        this.thread.bodyA = body;
    }
}