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
		
	var gradient = ctx.createRadialGradient((W/4), (H/2), 0, (W/4), (H/2), 200);
		gradient.addColorStop(0, "green");
		gradient.addColorStop(0.4, "blue");
	    gradient.addColorStop(1, "purple");
		ctx.fillStyle = gradient;
		ctx.arc((W/4), (H/2) , 200, Math.PI*2, false);
		ctx.font = '100pt Calibri';
		ctx.fillText(header,(W/2)-50, (H/6));
		ctx.fill();	
		ctx.font = '60pt Calibri';
		ctx.fillText(text,(W/2)+50, H/2);
		ctx.fill();	
       ctx.closePath();
 }

}