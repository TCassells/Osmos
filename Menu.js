function Menu()
{
this.inGame = true;
  var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
 this.draw = function(header,text)
 {
 var W = 1500; var H = 700;
	 ctx.clearRect(0, 0, W, H);
	 ctx.globalCompositeOperation = "source-over";
	ctx.fillStyle = "rgba(0, 0, 0, 1)";
	ctx.fillRect(0, 0, W, H); 
	ctx.globalCompositeOperation = "lighter";  
        ctx.beginPath();
		
	var gradient = ctx.createRadialGradient((W/2), (H/2), 0, (W/2), (H/2), 200);
		gradient.addColorStop(0, "green");
		gradient.addColorStop(0.4, "blue");
	    gradient.addColorStop(0, "purple");
		ctx.fillStyle = gradient;
		ctx.arc((W/2), (H/2) , 200, Math.PI*2, false);
		ctx.font = '80pt Calibri';
		ctx.fillText(header,(W/4), (H/6));
		ctx.fill();	
		ctx.font = '40pt Calibri';
		ctx.fillText(text,(W/2)-50, H-50);
		ctx.fill();	
       ctx.closePath();
 }

}