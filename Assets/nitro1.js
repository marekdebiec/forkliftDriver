#pragma strict

var nitro : GameObject;
var staraPredkosc : float;
var nowaPredkosc : float;


function Start () {
	Nitro ();
}
function Update () {
			
	//if (Input.GetKey(KeyCode.LeftShift)) {
		//	nitro.SetActive (true);
			
	//}
	//else {nitro.SetActive (false);
			
		//	}
}
function Nitro () {
   
   for (;;) {
        yield WaitForSeconds (Random.Range(0, 10.0f));	
		nitro.SetActive (true);
		transform.parent.GetComponent.<airace>().patrolSpeed = nowaPredkosc;		
		yield WaitForSeconds (2);
		nitro.SetActive (false);
		transform.parent.GetComponent.<airace>().patrolSpeed = staraPredkosc;			
    }
}