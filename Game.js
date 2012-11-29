function Game() {
 var particleManager = new ParticleManager();

this.addController = function()
  {
       var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
window.addEventListener('mousedown', function(event) {
particleManager.movePlayer(event.pageX ,event.pageY );
 },false);
 } 
 this.update = function()
{
var W = 1500; var H = 700;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
	 ctx.clearRect(0, 0, W, H);
	 ctx.globalCompositeOperation = "source-over";
	ctx.fillStyle = "rgba(0, 0, 0, 1)";
	ctx.fillRect(0, 0, W, H); 
	ctx.globalCompositeOperation = "lighter";  
particleManager.Draw();

}
}  
