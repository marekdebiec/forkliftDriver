#pragma strict
var customButton2 : GUIStyle;
var score : float;

function Start () {
	score = 0.0f;
}
function OnGUI () {
	GUI.Box(new Rect(Screen.width - 100, 10, 50, 20), "score:" + score.ToString(), customButton2);
}