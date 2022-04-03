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
		Explode();
		//obrazek04 = GameObject.Find("powerup_img 3");
//		canvas = GameObject.Find("Canvas");
//		obrazek01 = canvas.transform.GetChild(13).gameObject;
//        obrazek02 = canvas.transform.GetChild(12).gameObject;
//        obrazek03 = canvas.transform.GetChild(11).gameObject;
//        obrazek04 = canvas.transform.GetChild(10).gameObject;
//        obrazek05 = canvas.transform.GetChild(9).gameObject;
//        obrazek06 = canvas.transform.GetChild(8).gameObject;
        
//        obrazek01.SetActive (false);
//		obrazek02.SetActive (false);
//		obrazek03.SetActive (false);
//		obrazek04.SetActive (false);
//		obrazek05.SetActive (false);
//		obrazek06.SetActive (false);
		dym = GameObject.Find("dym");
        dym_woman = GameObject.Find("dym_woman");
        dym_alien = GameObject.Find("dym_alien");
        dym_caveman = GameObject.Find("dym_caveman");
}
function OnTriggerEnter (other : Collider) {
		if (other.GetComponent.<Collider>().gameObject.tag == "Player") { //uwaga!!!						 
			other.transform.parent.GetComponent.<Rigidbody>().drag = 1000000;
			dym.GetComponent.<ParticleSystem>().Play();
			yield WaitForSeconds (czas_oczekiwania);
			dym.GetComponent.<ParticleSystem>().Stop();
			other.transform.parent.GetComponent.<Rigidbody>().drag = 0;
		}
		if (other.GetComponent.<Collider>().gameObject.tag == "alien") {
			other.GetComponent.<Rigidbody>().drag = 1000000;
			dym_alien.GetComponent.<ParticleSystem>().Play();
			yield WaitForSeconds (czas_oczekiwania);
			dym_alien.GetComponent.<ParticleSystem>().Stop();
			other.GetComponent.<Rigidbody>().drag = 0;
		}
		if (other.GetComponent.<Collider>().gameObject.tag == "woman") {
			other.GetComponent.<Rigidbody>().drag = 1000000;
			dym_woman.GetComponent.<ParticleSystem>().Play();
			yield WaitForSeconds (czas_oczekiwania);
			dym_woman.GetComponent.<ParticleSystem>().Stop();
			other.GetComponent.<Rigidbody>().drag = 0;
		}
		if (other.GetComponent.<Collider>().gameObject.tag == "caveman") {
			other.GetComponent.<Rigidbody>().drag = 1000000;
			dym_caveman.GetComponent.<ParticleSystem>().Play();
			yield WaitForSeconds (czas_oczekiwania);
			dym_caveman.GetComponent.<ParticleSystem>().Stop();
			other.GetComponent.<Rigidbody>().drag = 0;
		}
	}
//function OnCollisionEnter(collision: Collision) {
//	 		if (collision.gameObject.tag == "Player") {
//				Explode();				
//				collision.gameObject.GetComponent.<Rigidbody>().drag = 1000000;
//				gameObject.GetComponent.<Collider>().enabled = false;
//				gameObject.GetComponent.<Rigidbody>().useGravity = false;
//				gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
//				yield WaitForSeconds (czas_oczekiwania);
//				collision.gameObject.GetComponent.<Rigidbody>().drag = 0;
//			
//			}
//			if (collision.gameObject.tag == "alien") {
//				Explode();
//				collision.gameObject.GetComponent.<Rigidbody>().drag = 1000000;
//				gameObject.GetComponent.<Collider>().enabled = false;
//				gameObject.GetComponent.<Rigidbody>().useGravity = false;
//				gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
//				yield WaitForSeconds (czas_oczekiwania);
//				collision.gameObject.GetComponent.<Rigidbody>().drag = 0;
//				
//			}
//			if (collision.gameObject.tag == "woman") {
//				Explode();
//				collision.gameObject.GetComponent.<airace>().enabled = false;
//				yield WaitForSeconds (czas_oczekiwania);
//				collision.gameObject.GetComponent.<airace>().enabled = true;
//			}
//}
function Explode () {

		var exp = GetComponent.<ParticleSystem>();
		var audio : AudioSource = GetComponent.<AudioSource>();

        exp.Play();
        yield WaitForSeconds(0);
        GetComponent.<AudioSource>().enabled = true;
       // audio.Play();
       	yield WaitForSeconds(5);
       // audio.Play(264600); //Delay in number of samples, assuming a 44100Hz sample rate (meaning that Play(44100) will delay the playing by exactly 1 sec).
        audio.Play();
        exp.Stop();
        gameObject.transform.GetChild(0).GetChild(0).GetComponent.<ParticleSystem>().Stop();
        gameObject.GetComponent.<Renderer>().enabled = false;
		gameObject.transform.GetChild(0).GetComponent.<Renderer>().enabled = false;
 		
        Destroy(gameObject, 6 + 1);
}