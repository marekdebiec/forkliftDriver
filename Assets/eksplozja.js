#pragma strict

var czas_oczekiwania : float = 5;       
//var canvas : GameObject;
//var obrazek01 : GameObject;
//var obrazek02 : GameObject;
//var obrazek03 : GameObject;
//var obrazek04 : GameObject;
//var obrazek05 : GameObject;
//var obrazek06 : GameObject;
var dym : GameObject;
var dym_woman : GameObject;
var dym_alien : GameObject;
var dym_caveman : GameObject;

function Start () {	
//		canvas = GameObject.Find("Canvas");
//	  	obrazek01 = canvas.transform.GetChild(13).gameObject;
//        obrazek02 = canvas.transform.GetChild(12).gameObject;
//        obrazek03 = canvas.transform.GetChild(11).gameObject;
//        obrazek04 = canvas.transform.GetChild(10).gameObject;
//        obrazek05 = canvas.transform.GetChild(9).gameObject;
//        obrazek06 = canvas.transform.GetChild(8).gameObject;
        dym = GameObject.Find("dym");
        dym_woman = GameObject.Find("dym_woman");
        dym_alien = GameObject.Find("dym_alien");
        dym_caveman = GameObject.Find("dym_caveman");
//        obrazek01.SetActive (false);
//		obrazek02.SetActive (false);
//		obrazek03.SetActive (false);
//		obrazek04.SetActive (false);
//		obrazek05.SetActive (false);
//		obrazek06.SetActive (false);
}                     
function OnCollisionEnter(collision: Collision) {
	 		if (collision.gameObject.tag == "Player") {
				Explode();				
				collision.gameObject.GetComponent.<Rigidbody>().drag = 1000000;
				gameObject.GetComponent.<Collider>().enabled = false;
				gameObject.GetComponent.<Rigidbody>().useGravity = false;
				gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
				dym.GetComponent.<ParticleSystem>().Play();
				yield WaitForSeconds (czas_oczekiwania);
				dym.gameObject.GetComponent.<ParticleSystem>().Stop();
				collision.gameObject.GetComponent.<Rigidbody>().drag = 0;
				//collision.gameObject.GetComponent.<CarUserControl>().enabled = true;
			//	collision.gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
			
			//	collision.gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.None;
			}
			if (collision.gameObject.tag == "alien") {
				Explode();
				collision.gameObject.GetComponent.<Rigidbody>().drag = 1000000;
				gameObject.GetComponent.<Collider>().enabled = false;
				gameObject.GetComponent.<Rigidbody>().useGravity = false;
				gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
				dym_alien.GetComponent.<ParticleSystem>().Play();
				yield WaitForSeconds (czas_oczekiwania);
				dym_alien.GetComponent.<ParticleSystem>().Stop();
				collision.gameObject.GetComponent.<Rigidbody>().drag = 0;
				//collision.gameObject.GetComponent.<CarAIControl>().driving = true
				
			}
			if (collision.gameObject.tag == "woman") {
//				Explode();
//				collision.gameObject.GetComponent.<airace>().enabled = false;
//				yield WaitForSeconds (czas_oczekiwania);
//				collision.gameObject.GetComponent.<airace>().enabled = true;
				Explode();
				collision.gameObject.GetComponent.<Rigidbody>().drag = 1000000;
				gameObject.GetComponent.<Collider>().enabled = false;
				gameObject.GetComponent.<Rigidbody>().useGravity = false;
				gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
				dym_woman.GetComponent.<ParticleSystem>().Play();
				yield WaitForSeconds (czas_oczekiwania);
				dym_woman.GetComponent.<ParticleSystem>().Stop();
				collision.gameObject.GetComponent.<Rigidbody>().drag = 0;
			}
			if (collision.gameObject.tag == "caveman") {
//				Explode();
//				collision.gameObject.GetComponent.<airace>().enabled = false;
//				yield WaitForSeconds (czas_oczekiwania);
//				collision.gameObject.GetComponent.<airace>().enabled = true;
				Explode();
				collision.gameObject.GetComponent.<Rigidbody>().drag = 1000000;
				gameObject.GetComponent.<Collider>().enabled = false;
				gameObject.GetComponent.<Rigidbody>().useGravity = false;
				gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
				dym_caveman.GetComponent.<ParticleSystem>().Play();
				yield WaitForSeconds (czas_oczekiwania);
				dym_caveman.GetComponent.<ParticleSystem>().Stop();
				collision.gameObject.GetComponent.<Rigidbody>().drag = 0;
			}
}
function Explode () {
	
		var exp = GetComponent.<ParticleSystem>();
        exp.Play();
        //Destroy(gameObject, exp.duration);   
      	gameObject.GetComponent.<Renderer>().enabled = false;
      	gameObject.transform.GetChild(0).GetComponent.<Renderer>().enabled = false;
       	gameObject.GetComponent.<AudioSource>().Play();
        Destroy(gameObject, 5.9);       
}