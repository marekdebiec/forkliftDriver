#pragma strict

var grab : boolean;
var karetka : GameObject;
var audiolistener : GameObject;
//function OnTriggerStay (other : Collider) {
//	if (other.name == "Object019" || other.name == "Object020") {
//		grab = true;
//		//transform.emission.enable;
//		//gameObject.GetComponent.<ParticleEmitter>().enabled = true;
//		
//	}
//	else {
//		grab = false;
//		
//		//gameObject.GetComponent.<ParticleEmitter>().enabled = false;
//		}
//}
function Awake () {
	karetka = GameObject.Find("karetka_empty");
	audiolistener = GameObject.Find("audio_listener");
}
function OnTriggerEnter (other : Collider) {
	if (other.name == "Object019" || other.name == "Object020") {
		grab = true;
		//włacz odliczanie czasu
		audiolistener.GetComponent(Timer2).enabled = true;
		//transform.emission.enable;
		//gameObject.GetComponent.<ParticleEmitter>().enabled = true;
		
	}
//	else {
//		grab = false;
//		
//		//gameObject.GetComponent.<ParticleEmitter>().enabled = false;
//		}
}
function OnTriggerStay (other : Collider) {
	if (other.name == "Object019" || other.name == "Object020")
//		transform.rotation = Quaternion.Euler(karetka.transform.rotation.x, karetka.transform.rotation.y, karetka.transform.rotation.x);
		transform.rotation = karetka.transform.rotation;
}
function OnTriggerExit (other : Collider) {
	if (other.name == "Object019" || other.name == "Object020") {
		grab = false;		
	}
}
function Update () {

	if (grab == false) {
		gameObject.tag = "beer";
		gameObject.GetComponent.<ParticleSystem>().Stop();
		}
	if (grab == true) {
		gameObject.tag = "podniesiony";
		gameObject.GetComponent.<ParticleSystem>().Play();
	}
}