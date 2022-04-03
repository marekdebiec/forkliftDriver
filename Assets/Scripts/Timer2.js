#pragma strict
var timer : float =0;
var customButton : GUIStyle;
//var pauseText : UI.Text;
var a : float;
var b : float;
var c : float;

function Start () {
	a = 1;
	b = 1;
	c = 0;
}
function Update () {
	timer += Time.deltaTime;
	
	
	if(timer == 0 )
	{
		b = 1;
	}
	b -= 0.001;
	customButton.normal.textColor = new Color(a, b, c);
//	if(timer >= 0 )
//	{
//		customButton.normal.textColor = Color.yellow;
//	}
//	if(timer >= 10 )
//	{
//		customButton.normal.textColor = new Color(1, 0.5, 0); //orange
//	}
//	if(timer >= 15 )
//	{
//		customButton.normal.textColor = Color.red;
//	}
//	if(timer >= 20 )
//	{
//		customButton.normal.textColor = new Color(0.5, 0, 0); //ciemny czerwony
//	}
}
function OnGUI () {
	GUI.Box(new Rect(10, 10, 50, 20), "" + timer.ToString("0"), customButton);
}