function start()
{
var game = new Game();
var menu =  new Menu();
menu.inGame = false;
window.requestAnimFrame = (function(){
return window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame ||
function(/* function */ callback, /* DOMElement */ element){
window.setTimeout(callback,1000);
};
})();

var loop = function(){
Update();
window.requestAnimFrame(loop, document.body);
};
window.requestAnimFrame(loop, document.body);
function Update()
{
if(menu.inGame)
{
game.update();
game.addController();
}
else
{menu.draw("Osmos","Start");
window.addEventListener('mousedown', function(event) {
menu.inGame = true;
 },false);

}
}
}