#pragma strict
var strzalka : GameObject;


function OnTriggerEnter (other : Collider) {
		if (other.name == "Colliders") {
			strzalka.SetActive (true);
		}
}
function OnTriggerExit (other : Collider) {
		if (other.name == "Colliders") {
			strzalka.SetActive (false);
		}
}
function OnDrawGizmos () {
		
		Gizmos.color = Color (1,0,0,.2);
		Gizmos.DrawCube (gameObject.transform.position, Vector3 (transform.localScale.x,transform.localScale.y,transform.localScale.z));
}
