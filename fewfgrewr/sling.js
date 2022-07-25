class SlingShot{
    constructor(bodyA,bodyB)
	{
		
		var options={ bodyA:bodyA,			 
			bodyB:bodyB, 
			stiffness:10, 
			length:0.1
			
		}
		
		this.bodyA=bodyA
		this.bodyB= bodyB
		this.sling=Constraint.create(options)
		World.add(world,this.sling)
	}

	
	display()
	{

			var pointA=this.bodyA.position;
			var pointB=this.bodyB.position;

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}



    