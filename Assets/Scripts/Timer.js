#pragma strict
var timer : float =10.0;
var customButton : GUIStyle;
//var pauseText : UI.Text;


function Update () {
	timer -= Time.deltaTime;
	if(timer <= 0 )
	{
		timer = 10;
		//do something cool!
		
		//pauseText.text = ("" + timer.ToString("0"));
	}
}
function OnGUI () {
	GUI.Box(new Rect(10, 10, 50, 20), "" + timer.ToString("0"), customButton);
}