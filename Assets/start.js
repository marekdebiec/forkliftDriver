#pragma strict
 var delay : float = 5.0f;				//opoznienie startu

function Start () {
	Startujemy ();
}
function Startujemy () {
 		// Waits 5 seconds
		yield WaitForSeconds (delay);
	gameObject.GetComponent.<airace>().enabled = true;
}