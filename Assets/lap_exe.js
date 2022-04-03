#pragma strict
var lap : GameObject;

function Start () {
	GetComponent.<Renderer>().enabled = false;
}

function OnTriggerEnter (other : Collider) {
		if (other.gameObject.name == "Colliders" ){
			lap.SetActive (true);
		}
	}