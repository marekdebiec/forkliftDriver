#pragma strict
private var lastY: float; // last grounded height 
var falling: boolean = false; // tells when the player is falling
//var character: CharacterController;
var isGrounded : boolean;
public var prefab: GameObject;
var audiolistener : GameObject;
var muza : GameObject;
var Strefa1 :  GameObject;
var Strefa2 :  GameObject;
var Strefa3 :  GameObject;

function Awake () {
	audiolistener = GameObject.Find("audio_listener");
	muza = GameObject.Find("maszt");
	Strefa1 = GameObject.Find("Strefa1");
	Strefa2 = GameObject.Find("Strefa2");
	Strefa3 = GameObject.Find("Strefa3");
}  
function Start () {
 	//character = GetComponent(CharacterController);
	lastY = transform.position.y; 
}
function OnCollisionStay (other: Collision) {
	isGrounded = true;
}
function OnCollisionExit (other: Collision) {
	isGrounded = false;
}
function Update(){
		
		//if (character.isGrounded == false){ // if character not grounded... 
		if (!isGrounded) {
			falling = true; // assume it's falling 
		} 
		else { // if character grounded...
			 if (falling){ // but was falling last update... 
					 var hFall = lastY - transform.position.y; // calculate the fall height... 
					
					 if (hFall > 2){ // then check the damage/death
					 	muza.GetComponent.<AudioSource>().Play();
					 	Instantiate(prefab, transform.position, Quaternion.identity);
					  	Destroy(gameObject); // player is dead					  	
						Strefa1.GetComponent(tworz2).Tworzenie();
						Strefa2.GetComponent(tworz2).Tworzenie();
						Strefa3.GetComponent(tworz2).Tworzenie();
					  	audiolistener.GetComponent(Timer2).timer = 0; //zresetuj czasomierz
						audiolistener.GetComponent(Timer2).enabled = false; //wylacz odliczanie czasu
					  }
			   } 
			   lastY = transform.position.y; // update lastY when character grounded 
		   } 
   }