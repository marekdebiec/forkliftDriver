#pragma strict

function OnTriggerEnter (other : Collider) {
	if (other.tag == "beer") {
		Destroy (other);
	}
}