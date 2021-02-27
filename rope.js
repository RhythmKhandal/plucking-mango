class Rope{
constructor(bodyA,pointB){
 var Opt={
    bodyA:bodyA,
    length:7,
    pointB:pointB,
    stiffness:0.004
 }

 this.pointB=pointB
 this.rope=Constraint.create(Opt)
 World.add(world,this.rope)

}

fly(){
    this.rope.bodyA = null;
}


display(){

    if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke(48,22,8)
        if(pointA.x < 280){
            line(pointA.x-2, pointA.y, pointB.x-2, pointB.y);
           // line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
           // image(this.sling3,pointA.x-30,pointA.y-10,15,30)  
        }
        else{
       line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
       //line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
      // image(this.sling3,pointA.x+25,pointA.y-10,15,30)
   }}
}
   // line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y) 

}



