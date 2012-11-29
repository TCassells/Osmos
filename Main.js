function start()
{
var game = new Game();

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
game.update();

game.addController();
}
}