function Player(){
    var W = 1500; var H = 700;
	this.radius = 30;
	this.x =W/2;
	this.y = H/2;
	this.vx = 0.1;
	this.vy = 0.1;
	this.ax = W/2;
	this.ay = H/2;
	var r = 255;
	var g = 255;
	var b = 255;
	this.interval = 0;
	this.color = "rgba("+r+", "+g+", "+b+", 0.5)";
	
this.Draw = function()
{
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); 

ctx.beginPath();
		var gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
		gradient.addColorStop(0, "yellow");
		gradient.addColorStop(0.2, "blue");
		gradient.addColorStop(0.3, this.color);
		gradient.addColorStop(0.8, "green");
		gradient.addColorStop(1, this.color);
		ctx.fillStyle = gradient;
		ctx.arc(this.x, this.y, this.radius, Math.PI*2, false);
		ctx.fill();
		this.x += this.vx* (this.ax-this.x);
		this.y += this.vy* (this.ay-this.y);
		if(this.x - this.radius < 0 || this.x +this.radius > W)  this.vx = -this.vx;
		if(this.y-this.radius  < 0 || this.y +this.radius  > H)  this.vy = -this.vy;
		if(this.interval > 10)
		this.interval = 0;
}
}