function Particle()
{
    var W = 1500; var H = 700;
	this.radius = Math.random()*40+10;
	this.x = this.radius +(Math.random()*W - this.radius);
	this.y = this.radius +(Math.random()*H - this.radius);
	this.interval = 0;
	var dir =-1;
	if(Math.random()*W > W/2)
	dir=1;
	var diry =-1;
	if(Math.random()*H > H/2)
	diry=1;
	this.vx = 0.5*dir;
	this.vy = 0.5*diry;
	var r = 200;
	var g = 100;
	var b = 0;
	this.color = "rgba("+r+", "+g+", "+b+", 0.5)";
this.Draw = function()
{
	
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); 
ctx.beginPath();
		var gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
		gradient.addColorStop(0, "yellow");
		gradient.addColorStop(0.2, this.color);
		gradient.addColorStop(0.3, "purple");
		gradient.addColorStop(0.5, this.color);
		gradient.addColorStop(1, "white");
		
		ctx.fillStyle = gradient;
		ctx.arc(this.x, this.y, this.radius, Math.PI*2, false);
		ctx.fill();	
		this.interval++;
		if(this.interval > 10)
		this.interval = 0;

}
}