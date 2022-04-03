#pragma strict

var vignetting : Vignetting[];//script

function OnCollisionEnter(collision: Collision) {
	for (var go in vignetting) {
		go.enabled = true;
		yield WaitForSeconds(5);
		go.enabled = false;
		yield;
	}
}