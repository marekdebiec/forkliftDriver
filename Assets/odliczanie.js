#pragma strict
var obrazek1 : GameObject;
var obrazek2 : GameObject;
var obrazek3 : GameObject;
var obrazek4 : GameObject;

function Start () {
	Cos ();
}
function Cos () {
	// Waits 1 sec
	yield WaitForSeconds (1);
	obrazek1.SetActive(false);
	obrazek2.SetActive(true);
	// Waits 1 sec
	yield WaitForSeconds (1);
	obrazek2.SetActive(false);
	obrazek3.SetActive(true);
	// Waits 1 sec
	yield WaitForSeconds (1);
	obrazek3.SetActive(false);
	yield WaitForSeconds (2);
	obrazek4.SetActive(true);
	yield WaitForSeconds (1);
	obrazek4.SetActive (false);
	//yield WaitForSeconds (2);
	
}