#pragma strict

//var canvas : GameObject;
//var obrazek01 : GameObject;
//var obrazek02 : GameObject;
//var obrazek03 : GameObject;
//var obrazek04 : GameObject;
//var obrazek05 : GameObject;
//var obrazek06 : GameObject;

function Start () {
//		canvas = GameObject.Find("Canvas");	  	
//		obrazek01 = canvas.transform.GetChild(13).gameObject;
//   		obrazek02 = canvas.transform.GetChild(12).gameObject;
//        obrazek03 = canvas.transform.GetChild(11).gameObject;
//        obrazek04 = canvas.transform.GetChild(10).gameObject;
//        obrazek05 = canvas.transform.GetChild(9).gameObject;
//        obrazek06 = canvas.transform.GetChild(8).gameObject;
        
        
	var audio : AudioSource = GetComponent.<AudioSource>();
	//audio.Play();
}

function Update () {
//	if (gameObject) {
//		obrazek01.SetActive (false);
//		obrazek02.SetActive (false);
//		obrazek03.SetActive (false);
//		obrazek04.SetActive (false);
//		obrazek05.SetActive (false);
//		obrazek06.SetActive (false);
//	}
	Wylaczenie();
}
function Wylaczenie () {	
	yield WaitForSeconds (10);
	gameObject.SetActive(false);
}
function OnTriggerEnter (other : Collider) {
	if (other.tag == "weapon") {
		Destroy(other.gameObject);
		}
}