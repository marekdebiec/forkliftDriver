#pragma strict
var czas_oczekiwania : float = 3;    
var dym : GameObject;
var dym_woman : GameObject;
var dym_alien : GameObject;
var dym_caveman : GameObject;
var prefab : GameObject;
var launcher : Transform;

function Start () {
		GetComponent.<AudioSource>().Play();
		dym = GameObject.Find("dym");
        dym_woman = GameObject.Find("dym_woman");
        dym_alien = GameObject.Find("dym_alien");
        dym_caveman = GameObject.Find("dym_caveman");
}
function OnCollisionEnter(collision: Collision) {

		//var exp = GetComponent.<ParticleSystem>();
	 	
	 	if (collision.gameObject.tag == "Player") {
	 			Instantiate(prefab, transform.position, transform.rotation);
	 			//exp.Play();
	 	        GetComponent.<Renderer>().enabled = false; //zniknij
        		GetComponent.<Rigidbody>().drag = 100; //zamróź							
				collision.gameObject.GetComponent.<Rigidbody>().drag = 1000000;
				gameObject.GetComponent.<Collider>().enabled = false;
				gameObject.GetComponent.<Rigidbody>().useGravity = false;
				gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
				dym.GetComponent.<ParticleSystem>().Play();
				yield WaitForSeconds (czas_oczekiwania);
				dym.GetComponent.<ParticleSystem>().Stop();
				collision.gameObject.GetComponent.<Rigidbody>().drag = 0;
				//collision.gameObject.GetComponent.<CarUserControl>().enabled = true;
			//	collision.gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
			
			//	collision.gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.None;
			}
			if (collision.gameObject.tag == "alien") {
				Instantiate(prefab, transform.position, transform.rotation);
				//exp.Play();
			    GetComponent.<Renderer>().enabled = false; //zniknij
        		GetComponent.<Rigidbody>().drag = 100; //zamróź				
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
			if (collision.gameObject.tag == "caveman") {
				Instantiate(prefab, transform.position, transform.rotation);
				//exp.Play();
			    GetComponent.<Renderer>().enabled = false; //zniknij
        		GetComponent.<Rigidbody>().drag = 100; //zamróź				
				collision.gameObject.GetComponent.<Rigidbody>().drag = 1000000;
				gameObject.GetComponent.<Collider>().enabled = false;
				gameObject.GetComponent.<Rigidbody>().useGravity = false;
				gameObject.GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationY | RigidbodyConstraints.FreezeRotationZ | RigidbodyConstraints.FreezePositionX | RigidbodyConstraints.FreezePositionY | RigidbodyConstraints.FreezePositionZ;
				dym_caveman.GetComponent.<ParticleSystem>().Play();
				yield WaitForSeconds (czas_oczekiwania);
				dym_caveman.GetComponent.<ParticleSystem>().Stop();
				collision.gameObject.GetComponent.<Rigidbody>().drag = 0;
				//collision.gameObject.GetComponent.<CarAIControl>().driving = true
				
			}
			if (collision.gameObject.tag == "woman") {
				Instantiate(prefab, transform.position, transform.rotation);
				//exp.Play();
				GetComponent.<Renderer>().enabled = false; //zniknij
        		GetComponent.<Rigidbody>().drag = 100; //zamróź				
				collision.gameObject.GetComponent.<airace>().enabled = false;
				dym_woman.GetComponent.<ParticleSystem>().Play();
				yield WaitForSeconds (czas_oczekiwania);
				dym_woman.GetComponent.<ParticleSystem>().Stop();
				collision.gameObject.GetComponent.<airace>().enabled = true;
			}
			//exp.Play();	
			//Explode();
			//Destroy(gameObject, exp.duration);
			if (collision.gameObject.tag != "weapon") {
				GetComponent.<Renderer>().enabled = false;
				GetComponent.<BoxCollider>().enabled = false;
				transform.position = launcher.position;
				transform.rotation = launcher.rotation;
				GetComponent.<ruch_rakieta>().zmienna = false;
			}
}
//function Explode () {

		//var exp = GetComponent.<ParticleSystem>();
     	//exp.Play();
        //GetComponent.<Renderer>().enabled = false; //zniknij
        //GetComponent.<Rigidbody>().drag = 100; //zamróź
       // Destroy(gameObject, exp.duration);
       
//}
