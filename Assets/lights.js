#pragma strict
var myLight : Light;
var myLight2 : Light;
var zarowka : GameObject;
var zarowka2 : GameObject;

function Start () {
		myLight = zarowka.GetComponent(Light);
		myLight.enabled = false;
		myLight2 = zarowka2.GetComponent(Light);
		myLight2.enabled = false;
}
function Update () {
		var audio: AudioSource = GetComponent.<AudioSource>();
		var localVelocity = transform.InverseTransformDirection(GetComponent.<Rigidbody>().velocity);
	
		// localVelocity.x = Mathf.Clamp(localVelocity.x, -3.25, 3.25);
		 if (localVelocity.z <= 0) {
		 	myLight.enabled = true;
		 	myLight2.enabled = true;
		 	
		 }
		 else if (localVelocity.z > 0) {
		 	myLight.enabled = false;
		 	myLight2.enabled = false;
		 	audio.PlayDelayed(0.5);
		 	//audio.Play();
		 }
}