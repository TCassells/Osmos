function Game() {
 var particleManager = new ParticleManager();
var menu =  new Menu();
this.addController = function()
  {
       var canvas = document.getElementById("myCanvas");
        var context = canvas.getContext("2d");
		window.addEventListener('mousedown', function(event) {
particleManager.down = true;
 },false);
window.addEventListener('mouseup', function(event) {
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
if(menu.inGame)
{
particleManager.Draw();
}
if(particleManager.win)
{
menu.inGame = false;
menu.draw("You Win","Next Level");
particleManager.interval +=1;
}
if(particleManager.lose)
{
menu.inGame = false;
menu.draw("You lose","Restart");
particleManager.interval +=1;
}
window.addEventListener('mousedown', function(event) {
if(particleManager.interval >20)
{
if(particleManager.lose)
{
 menu.inGame = true;
 particleManager.lose =false;
 particleManager = new ParticleManager();
 }
if(particleManager.win)
{
particleManager = new ParticleManager();
menu.inGame = true;
particleManager.win= false;
}
}
 },false);
}
}  