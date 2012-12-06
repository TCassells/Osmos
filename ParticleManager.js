function ParticleManager()
{
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
 var player = new Player();
this.down =  false;
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
if(this.down==true)
{
  player.ax =  x;
  player.ay =  y;
    if(lineDistance(player.ax ,player.x,player.ay,player.y)>0)
	{
  player.vx+=0.01;
   player.vy+=0.01;
   }
  this.down = false;
  }

}
this.Draw = function()
{
  if(lineDistance(player.ax ,player.x,player.ay,player.y)<=player.radius)
	{    player.vx=0;
         player.vy=0;
	}
var radius = player.radius;
		player.Draw();
for(var t = 0; t < particles.length; t++)
	{var p = particles[t];
	 if (p.x + p.radius > player.x- player.radius && p.x-p.radius < player.x+player.radius && p.y + p.radius > player.y - player.radius && p.y - p.radius < player.y +player.radius)
	 {
	 if( player.radius >= p.radius&& p.radius >=1)
	 {	
	 player.radius +=1;
	 	p.radius -=  1;
		
	}
	 else if(player.radius >6&& p.radius >=1)
	 {
	 	p.radius +=  1;
		player.radius -=1;
     }
	 }
	 if(p.radius<0)
		{
		particles.splice(t);
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
								
							 }
						}
					}
				  if(o.radius<0)
					{
					particles.splice(c);
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
					n.radius =1;
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
            if(player.interval ==20-player.radius%4 &&player.radius > 5)
			{	
		
			 if(lineDistance(player.ax ,player.x,player.ay,player.y)>radius)
			 {
				var n = new Particle();
					n.x = player.x-  (radius/2)*player.vx*(player.ax-player.x);
					n.y = player.y- (radius/2)*player.vy*(player.ay-player.y);
					n.vx = - (player.vx)*(player.ax-player.x) ;
					n.vy = -player.vy*(player.ay-player.y);
					n.radius =1;
					player.radius -= 1;
					particles.push(n);
			}
			}
			player.interval++;
    }
	function lineDistance( point1x, point2x,point1y,point2y )
    {
    var xs = 0;
    var ys = 0;
    xs = point2x - point1x;
    xs = xs * xs;
    ys = point2y - point1y;
    ys = ys * ys;
    return Math.sqrt( xs + ys );
    }
}