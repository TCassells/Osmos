function ParticleManager()
{
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
 var player = new Player();
var W = 1500; var H = 700;
//Lets create an array of particles
var particles = [];
for(var i = 0; i < 20; i++)
{
	particles.push(new Particle());
}
var x = 100; var y = 100;
this.movePlayer= function(x,y)
{
  player.ax =  x;
  player.ay =  y;
}
this.Draw = function()
{
var radius = player.radius;
		player.Draw();
for(var t = 0; t < particles.length; t++)
	{var p = particles[t];
	 if (player.x + player.radius > p.x- p.radius && player.x-player.radius < p.x+p.radius && player.y + player.radius > p.y - p.radius && player.y - player.radius < p.y +p.radius)
	 {
	 if( player.radius >= p.radius&& p.radius >=1)
	 {	
	 player.radius +=1;
	 	p.radius -=  1;
		if(p.radius<0)
		{
		particles.splice(t);
		}
	}
	 else if(player.radius >2)
	 {
	 	p.radius +=  1;
		player.radius -=1;
     }
	 }
		for(var c = 0; c < particles.length; c++)
		{
		 if(t!=c)
			 {
			 var o = particles[c];
				 if (o.x + o.radius > p.x- p.radius && o.x-o.radius < p.x+p.radius && o.y + o.radius > p.y - p.radius && o.y - o.radius < p.y +p.radius)
					{
					 if(p.radius <W/20)
						{
						 if(p.radius >= o.radius&& o.radius >=1)
							 {
								p.radius +=  1;
								 o.radius-= 1;
								  if(o.radius<0)
										 {
										 particles.splice(c);
										 }
							 }
						}
					}
				
			}
		}
		if(p.radius < radius)
			{
				p.color = "rgba(0, 0, 255, 0.5)";
				p.interval = -100;
			}
		else
			p.color = "rgba(255, 0, 0, 0.5)";
			p.x += p.vx;
			p.y += p.vy;
		if(p.interval ==10)
			{
			if(p.radius > radius)
				{
					var n = new Particle();
					n.x = p.x + (p.radius*- p.vx*2)
					n.y = p.y +(p.radius*-p.vy*2);
					n.vx = - p.vx*Math.random()*3;
					n.vy = -p.vy*Math.random()*3;
					n.radius =2;
					p.radius -= 1;
					particles.push(n);
				}
			}
	
		if(p.x - p.radius < 0 )  p.vx = 0.5;
		if( p.x +p.radius > W)  p.vx = -0.5;
		if(p.y - p.radius < 0 )  p.vy = 0.5;
		if( p.y +p.radius > H) p.vy = -0.5;
		p.Draw();
		}
if(player.interval ==10)
			{
			if(((player.ax - player.x)>player.radius && player.radius > 3)||(( player.ay - player.y)>player.radius&& player.radius > 3))
			{
				// var n = new Particle();
					// n.x = player.x + (player.radius*- (player.vx* (player.ax-player.x)))
					// n.y = player.y +(player.radius*-(player.vy* (player.ay-player.y)));
					// n.vx = - player.vx*Math.random()*3;
					// n.vy = -player.vy*Math.random()*3;
					// n.radius =2;
					// player.radius -= 0.1;
					// particles.push(n);
			}
			}
			player.interval++;
    }
}