#pragma strict
//var powerup : boolean;
//var bariera : boolean;
var wozek : GameObject;

function Start () {
	wozek = GameObject.Find("wozek01");	  
}
function Update () {
 	Funkcja();
}
function Funkcja () {
	yield WaitForSeconds (10);
	wozek.GetComponent.<aktywacja>().powerup = false;
	wozek.GetComponent.<aktywacja>().bariera = false;
	gameObject.SetActive(false);
}
function OnTriggerEnter (other : Collider) {
	if (other.tag == "weapon") {
		Destroy(other.gameObject);
		}
}