#pragma strict
var customButton2 : GUIStyle;
var timer : float;
var minutes : float;
var seconds : float;
var zmienna : boolean;

function Start () {	
	timer = 0.0f;	
	Opoznienie();
}
function Opoznienie () {
	yield WaitForSeconds(5);
	zmienna = true;
}
function Update () {
	if (zmienna) {
		timer += Time.deltaTime;
		minutes = Mathf.Floor(timer / 60); 
		seconds = Mathf.RoundToInt(timer%60);
	}
}
function OnGUI () {
	if (seconds < 10) {
		GUI.Box(new Rect(Screen.width - 175, 10, 50, 20), "Time: " + minutes + ":" + "0" + seconds, customButton2);
	}
	else {
		GUI.Box(new Rect(Screen.width - 175, 10, 50, 20), "Time: " + minutes + ":" + seconds, customButton2);
	}
	//GUI.Box(new Rect(Screen.width - 175, 50, 60, 30), "Lap: " + lap.ToString() + "/3",  customButton2);	
}