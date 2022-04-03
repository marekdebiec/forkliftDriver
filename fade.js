#pragma strict
var text2 : UI.Image;
//var alpha : float = 0.0f;
var speed : float = 0.01f;

function Start () {
	
	text2.color.a = 0.0f;
}
function Update () {
	
 		text2.color.a += speed;
}
